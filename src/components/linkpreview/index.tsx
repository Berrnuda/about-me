import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React from "react";
const Profile = "/images/Profile.jpg";

type link = {
  title: string;
  image: string;
};

export default function LinkPreview({ url }: { url: string }) {
  const { data } = useQuery<link>({
    queryKey: ["linkPreview", url],
    queryFn: () => fetchPreview(url),
    staleTime: Infinity,
  });

  const fetchPreview = async (url: string) => {
    try {
      const response = await axios.get(`/api/preview?url=${encodeURIComponent(url)}`);
      const data = await response.data;
      return data;
    } catch (error) {
      console.error("Failed to fetch preview", error);
    }
  };

  return (
    <Link
      href={url}
      target="_blank"
      className="flex h-60 w-full max-w-720 justify-between gap-6 rounded-4 border border-text-secondary md:max-w-1000 xl:max-w-280"
    >
      <div className="flex h-50 flex-col overflow-y-hidden p-4">
        <h3 className="font-bold">{data?.title}</h3>
        {/* <p className="text-sm">{preview.description}</p> */}
        {/* <p className="text-sm text-text-secondary">{preview.url}</p> */}
      </div>
      <img src={data?.image ?? Profile} alt={data?.title} className="h-58 w-100 object-cover" />
    </Link>
  );
}
