import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-limit-key");

    if (!success) return res.status(429).json({ message: "Too many requests. Try again later." });

    return next();

  } catch (err) {
    console.log("Rate limit error", err);

    return next(err);
  }
}

export default rateLimiter;