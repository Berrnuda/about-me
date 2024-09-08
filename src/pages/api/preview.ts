import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
const cheerio = require("cheerio");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (!url) {
    console.error("No URL provided");
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const response = await axios.get(url as string);

    const $ = cheerio.load(response.data);

    const metaTags = {
      title: $('meta[property="og:title"]').attr("content") || $("title").text(),
      description: $('meta[property="og:description"]').attr("content"),
      image: $('meta[property="og:image"]').attr("content"),
      url: $('meta[property="og:url"]').attr("content"),
    };
    res.status(200).json(metaTags);
  } catch (error: any) {
    res.status(500).json({ error: "Failed to fetch the data", details: error.message });
  }
}
