/*
* Function for fetching dat
* the function pass data to react query
*/
export async function getData() {
    const res = await fetch(
        "https://script.google.com/macros/s/AKfycby7n6c77trTyqZ9UDymWNAjhmPh8bzU3KTViNiigWo2wGxLf6HQAJ-RcY3hG2eLdKHplg/exec",
    );
    if (!res.ok) throw new Error("Failed to fetch data");

    return res?.json();
}