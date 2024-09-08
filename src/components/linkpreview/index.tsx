import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
const Profile = "/images/Profile.jpg";

export default function LinkPreview({ url }: { url: string }) {
  const [preview, setPreview] = useState<{
    title: string;
    description: string;
    image: string;
    url: string;
  } | null>(null);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const response = await axios.get(`/api/preview?url=${encodeURIComponent(url)}`);
        const data = await response.data;
        setPreview(data);
      } catch (error) {
        console.error("Failed to fetch preview", error);
      }
    };

    fetchPreview();
  }, [url]);

  if (!preview) return null;

  return (
    <Link
      href={url}
      target="_blank"
      className="flex h-full w-280 justify-between gap-6 rounded-4 border border-text-secondary"
    >
      <div className="flex h-full flex-col p-4">
        <h3 className="font-bold">{preview.title}</h3>
        {/* <p className="text-sm">{preview.description}</p> */}
        {/* <p className="text-sm text-text-secondary">{preview.url}</p> */}
      </div>
      <img src={preview.image ?? Profile} alt={preview.title} className="h-50 w-100 object-cover" />
    </Link>
  );
}
