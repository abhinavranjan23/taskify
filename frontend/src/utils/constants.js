export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://taskify-4uzq.vercel.app/api/"
    : "http://localhost:3000/api/";
