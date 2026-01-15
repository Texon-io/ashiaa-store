/*
 * Function for fetching data from Google Apps Script
 * Supports optional category and bestSeller filtering
 */
export async function getData(category = "", bestSeller = false) {
  // Google Apps Script URL
  const GOOGLE_API_URL =
    "https://script.google.com/macros/s/AKfycbwyMMVSWDE42EA_d4OoDe9kbraLHadD-MrP6K8BEREpvp5VI5iqRL1HKtIpeRG9p5mmUQ/exec";

  // Create a new URLSearchParams object
  const params = new URLSearchParams();

  // If a category is specified, add it to the parameters
  if (category && category !== "الكل") {
    params.append("category", category);
  }

  // If bestSeller is true, add it to the parameters
  if (bestSeller) {
    params.append("bestSeller", "true");
  }

  // Convert the parameters to a query string
  const queryString = params.toString();
  const url = queryString ? `${GOOGLE_API_URL}?${queryString}` : GOOGLE_API_URL;

  const res = await fetch(url);

  if (!res.ok) throw new Error("Failed to fetch data from Google Sheets");

  return res.json();
}
