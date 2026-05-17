const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const SWIGGY_RESTAURANTS_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.516179322914557&lng=77.2017139568925&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const SWIGGY_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
  Accept: "application/json",
  Referer: "https://www.swiggy.com/",
};

app.use(cors());

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/restaurants", async (req, res) => {
  try {
    const response = await fetch(SWIGGY_RESTAURANTS_URL, {
      headers: SWIGGY_HEADERS,
    });

    const text = await response.text();
    res.status(response.status);
    res.type(response.headers.get("content-type") || "application/json");
    res.send(text);
  } catch (error) {
    console.error("Swiggy restaurants proxy failed:", error);
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

app.get("/api/menu", async (req, res) => {
  const restaurantId = String(req.query.id || "").trim();

  if (!/^\d+$/.test(restaurantId)) {
    return res.status(400).json({ error: "A valid restaurant id is required" });
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
    res.status(response.status);
    res.type(response.headers.get("content-type") || "application/json");
    res.send(text);
  } catch (error) {
    console.error("Swiggy menu proxy failed:", error);
    res.status(500).json({ error: "Failed to fetch menu" });
  }
});

app.listen(port, () => {
  console.log(`Swiggy proxy listening on port ${port}`);
});
