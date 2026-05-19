const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "";

if (process.env.NODE_ENV === "production" && !API_BASE_URL) {
  console.error(
    "Missing REACT_APP_API_BASE_URL. Set it to your backend proxy URL in Vercel."
  );
}

export const apiUrl = (path) => `${API_BASE_URL}${path}`;
