const SWIGGY_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
  Accept: "application/json",
  Referer: "https://www.swiggy.com/",
};

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    return res.end();
  }

  if (req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ error: "Method not allowed" }));
  }

  const requestUrl = new URL(req.url || "/", "http://localhost");
  const restaurantId = String(req.query?.id || requestUrl.searchParams.get("id") || "").trim();

  if (!/^\d+$/.test(restaurantId)) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ error: "A valid restaurant id is required" }));
  }

  const url = new URL("https://www.swiggy.com/mapi/menu/pl");
  url.search = new URLSearchParams({
    "page-type": "REGULAR_MENU",
    "complete-menu": "true",
    lat: "11.0102",
    lng: "76.9701",
    restaurantId,
    query: "Pizza",
    submitAction: "ENTER",
    source: "collection",
  }).toString();

  try {
    const response = await fetch(url, {
      headers: SWIGGY_HEADERS,
    });

    const text = await response.text();
    res.statusCode = response.status;
    res.setHeader("Content-Type", response.headers.get("content-type") || "application/json");
    return res.end(text);
  } catch (error) {
    console.error("Swiggy menu proxy failed:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ error: "Failed to fetch menu" }));
  }
};
