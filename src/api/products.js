/*
 * Function for fetching data from Google Apps Script
 * Supports optional category filtering
 */
export async function getData(category = "") {
  // Google Apps Script URL
  const GOOGLE_API_URL =
    "https://script.google.com/macros/s/AKfycbwyMMVSWDE42EA_d4OoDe9kbraLHadD-MrP6K8BEREpvp5VI5iqRL1HKtIpeRG9p5mmUQ/exec";

  const url = category
    ? `${GOOGLE_API_URL}?category=${encodeURIComponent(category)}`
    : GOOGLE_API_URL;

  const res = await fetch(url);

  if (!res.ok) throw new Error("Failed to fetch data from Google Sheets");

  return res.json();
}
