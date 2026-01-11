/*
 * Function for fetching data from Google Apps Script
 * Supports optional category and bestSeller filtering
 */
export async function getData(category = "", bestSeller = false) {
  // Google Apps Script URL
  const GOOGLE_API_URL =
    "https://script.google.com/macros/s/AKfycbwyMMVSWDE42EA_d4OoDe9kbraLHadD-MrP6K8BEREpvp5VI5iqRL1HKtIpeRG9p5mmUQ/exec";

  // استخدام URLSearchParams أسهل وأنظف لبناء الروابط
  const params = new URLSearchParams();

  // إذا كان هناك قسم (وليس "الكل")، أضفه للرابط
  if (category && category !== "الكل") {
    params.append("category", category);
  }

  // إذا كان المطلوب هو الأكثر مبيعاً فقط
  if (bestSeller) {
    params.append("bestSeller", "true");
  }

  // دمج الرابط الأساسي مع الـ Parameters إذا وجدت
  const queryString = params.toString();
  const url = queryString ? `${GOOGLE_API_URL}?${queryString}` : GOOGLE_API_URL;

  const res = await fetch(url);

  if (!res.ok) throw new Error("Failed to fetch data from Google Sheets");

  return res.json();
}
