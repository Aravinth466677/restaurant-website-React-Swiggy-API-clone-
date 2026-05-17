const SWIGGY_RESTAURANTS_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.516179322914557&lng=77.2017139568925&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

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

  try {
    const response = await fetch(SWIGGY_RESTAURANTS_URL, {
      headers: SWIGGY_HEADERS,
    });

    const text = await response.text();
    res.statusCode = response.status;
    res.setHeader("Content-Type", response.headers.get("content-type") || "application/json");
    return res.end(text);
  } catch (error) {
    console.error("Swiggy restaurants proxy failed:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ error: "Failed to fetch restaurants" }));
  }
};
