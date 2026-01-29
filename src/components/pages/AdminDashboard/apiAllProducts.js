import { supabase } from "../../../lib/supabaseClient";

// 1. Get products
export async function getAllProducts({ category = "الكل" }) {
  let query = supabase.from("products").select("*");
  if (category && category !== "الكل") {
    query = query.eq("category", category);
  }
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
}
//  Upload image helper function
async function uploadImage(file) {
  if (!file || typeof file === "string") return file;

  const fileExt = file.name.split(".").pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { data, error: storageError } = await supabase.storage
    .from("product-images")
    .upload(filePath, file);

  if (storageError) {
    console.error("Storage Error Details:", storageError);
    throw new Error("حدث خطأ أثناء رفع الصورة");
  }

  const { data: urlData } = supabase.storage
    .from("product-images")
    .getPublicUrl(filePath);

  return urlData.publicUrl;
}

export async function addProduct(newProduct) {
  // 1. Upload main image
  const mainImageUrl = await uploadImage(newProduct.main_image);
  const generatedId = `ID-${Date.now()}`;
  // 2. Upload additional images
  const additionalImagesUrls = [];
  if (newProduct.additional_images && newProduct.additional_images.length > 0) {
    for (const img of newProduct.additional_images) {
      const url = await uploadImage(img);
      additionalImagesUrls.push(url);
    }
  }

  // 3. Insert into products table
  const { data, error } = await supabase
    .from("products")
    .insert([
      {
        id: generatedId, // Manual ID generation
        name: newProduct.name,
        price: Number(newProduct.price),
        category: newProduct.category,
        stock: Number(newProduct.stock),
        description: newProduct.description,
        best_seller: Boolean(newProduct.best_seller),
        main_image: mainImageUrl,
        additional_images: additionalImagesUrls,
      },
    ])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

// 3. Delete product
export async function deleteProduct(id) {
  const { data: product, error: fetchError } = await supabase
    .from("products")
    .select("main_image, additional_images")
    .eq("id", id)
    .single();

  if (fetchError) throw new Error("لم يتم العثور على المنتج لمسحه");

  const imagesToDelete = [];

  if (product.main_image) {
    imagesToDelete.push(product.main_image.split("/").pop());
  }

  if (product.additional_images && Array.isArray(product.additional_images)) {
    product.additional_images.forEach((url) => {
      if (url) imagesToDelete.push(url.split("/").pop());
    });
  }

  if (imagesToDelete.length > 0) {
    const { error: storageError } = await supabase.storage
      .from("product-images")
      .remove(imagesToDelete);

    if (storageError) {
      console.error("Storage Delete Error:", storageError);
    }
  }

  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) throw new Error(error.message);

  return true;
}
// 4. Edit product
export async function editProduct({ id, updatedData }) {
  // 1. Get old product data
  const { data: oldProduct, error: fetchError } = await supabase
    .from("products")
    .select("main_image, additional_images")
    .eq("id", id)
    .single();

  if (fetchError) throw new Error("تعذر جلب بيانات المنتج القديمة");

  let mainImageUrl = updatedData.main_image;
  const filesToDelete = [];

  // 2. Process main image
  if (updatedData.main_image instanceof File) {
    // setup to delete old main image
    if (oldProduct?.main_image) {
      filesToDelete.push(oldProduct.main_image.split("/").pop());
    }
    // upload new main image
    mainImageUrl = await uploadImage(updatedData.main_image);
  }

  // 3. Process additional images
  const finalAdditionalUrls = [];
  const currentAdditionalUrls = updatedData.additional_images || [];

  if (oldProduct?.additional_images) {
    oldProduct.additional_images.forEach((oldUrl) => {
      if (!currentAdditionalUrls.includes(oldUrl)) {
        filesToDelete.push(oldUrl.split("/").pop());
      }
    });
  }

  for (const img of currentAdditionalUrls) {
    if (img instanceof File) {
      const newUrl = await uploadImage(img);
      finalAdditionalUrls.push(newUrl);
    } else if (typeof img === "string") {
      finalAdditionalUrls.push(img);
    }
  }

  // 4. Delete removed images from storage
  if (filesToDelete.length > 0) {
    await supabase.storage.from("product-images").remove(filesToDelete);
  }

  // 5. Update product data in the database
  const finalUpdate = {
    name: updatedData.name,
    description: updatedData.description,
    category: updatedData.category,
    price: Number(updatedData.price),
    stock: Number(updatedData.stock),
    best_seller: Boolean(updatedData.best_seller),
    main_image: mainImageUrl,
    additional_images: finalAdditionalUrls,
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
