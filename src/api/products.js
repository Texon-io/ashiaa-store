import { supabase } from "../lib/supabaseClient";

/*
 * Function for fetching data from Google Apps Script
 * Supports optional category and bestSeller filtering
 */
export async function getData(category = "", bestSeller = false) {
  let query = supabase.from("products").select("*");

  if (category) {
    query = query.eq("category", category);
  }

  if (bestSeller) {
    query = query.eq("best_seller", true);
  }

  let { data: products, error } = await query;

  if (error) throw error;

  return products;
}
