import { useEffect, useState } from "react";
import { IBlog } from "../types/common.types";
import BLOGS_DATA from "@/data_folder/blogs_data/data";

export function useBlogs() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const randomBlogs = [...BLOGS_DATA].sort(() => Math.random() - 0.5);
      setBlogs(randomBlogs);
    };

    fetchBlogs();
  }, []);

  return { blogs };
}
