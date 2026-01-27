import { supabase } from "@/lib/Supabase.js";

// Get products
export async function getAllProducts({ category = "All" }) {
  let query = supabase.from("products").select("*");
  if (category && category !== "All") {
    query = query.eq("category", category);
  }
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data; // Return the data
}

// Add product
export async function addProduct(newProduct) {
  const imageFile = newProduct.image_url;
  let publicImageUrl = "";

  if (imageFile && typeof imageFile !== "string") {
    // Setup for unique name for the image
    const imageName = `${Math.random()}-${imageFile.name}`.replace(/\//g, "");
    const imagePath = `${imageName}`;

    // Upload to storage process
    const { error: storageError } = await supabase.storage
      .from("product-images") // Bucket name
      .upload(imagePath, imageFile);

    if (storageError) {
      console.error("Storage Error:", storageError);
      throw new Error("There was an error uploading the image.");
    }

    // Get the public URL
    const { data: urlData } = supabase.storage
      .from("product-images")
      .getPublicUrl(imagePath);

    publicImageUrl = urlData.publicUrl;
  } else {
    // If the image is a string, it's already a public URL
    publicImageUrl = typeof imageFile === "string" ? imageFile : "";
  }

  // Convert price and stock to numbers & collect the final data
  const finalProductData = {
    title: newProduct.title,
    description: newProduct.description,
    category: newProduct.category,
    price: Number(newProduct.price),
    stock: Number(newProduct.stock),
    discount: Number(newProduct.discount || 0),
    image_url: publicImageUrl,
  };

  //   Add the product to the products table
  const { data, error } = await supabase
    .from("products")
    .insert([finalProductData])
    .select()
    .single();

  if (error) {
    console.error("Database Error:", error);
    throw new Error(error.message);
  }

  return data;
}

// Delete product
export async function deleteProduct(id) {
  // Get the product first
  const { data: product, error: fetchError } = await supabase
    .from("products")
    .select("image_url")
    .eq("id", id)
    .single();

  if (fetchError) throw new Error("Product could not be loaded.");

  // Delete the image from storage
  if (product.image_url) {
    // Get the name of the image
    const imageName = product.image_url.split("/").pop();

    const { error: storageError } = await supabase.storage
      .from("product-images")
      .remove([imageName]);

    if (storageError) {
      console.error("Storage Error:", storageError);
    }
  }

  // 3. Delete the product
  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) throw new Error(error.message);
}

// Edit product
export async function editProduct({ id, updatedData }) {
  let imageUrl = updatedData.image_url;

  // Check if the image is a new session image
  const isNewSessionImage = updatedData.image_url instanceof File;

  if (isNewSessionImage) {
    // Get the old product
    const { data: oldProduct } = await supabase
      .from("products")
      .select("image_url")
      .eq("id", id)
      .single();

    // Upload the new image
    const imageName =
      `${Math.random()}-${updatedData.image_url.name}`.replaceAll("/", "");
    const imagePath = imageName;

    const { error: storageError } = await supabase.storage
      .from("product-images")
      .upload(imagePath, updatedData.image_url);

    if (storageError)
      throw new Error("There was an error uploading the image.");

    // Get the old URL
    const { data: urlData } = supabase.storage
      .from("product-images")
      .getPublicUrl(imagePath);

    imageUrl = urlData.publicUrl;

    // Delete the old image
    if (oldProduct?.image_url) {
      const oldImageName = oldProduct.image_url.split("/").pop();
      await supabase.storage.from("product-images").remove([oldImageName]);
    }
  }

  // Update the product
  const finalUpdate = {
    ...updatedData,
    image_url: imageUrl,

    price: Number(updatedData.price),
    stock: Number(updatedData.stock),
  };

  const { data, error } = await supabase
    .from("products")
    .update(finalUpdate)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}
