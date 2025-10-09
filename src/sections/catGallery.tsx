import { useState, useEffect, useRef } from "react";
import axios, { type AxiosResponse, type AxiosError } from "axios";
import { Loader } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
}

export const CatGallery = () => {

  const [cats, setCats] = useState<Cat[]>([]);
  const [page, setPage] = useState<number>(1);
  const loader = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   axios.get<Cat[]>(`https://api.thecatapi.com/v1/images/search?limit=20&page=${page}`)
  //     .then((response: AxiosResponse<Cat[]>) => {
  //       setCats([...cats, ...response.data]);
  //       console.log(response.data);
  //     })
  //     .catch((error: AxiosError) => {
  //       console.error(error);
  //     });
  // }, [page]);

  const _fetchCats = async () => {
    if (loading) return;

    setLoading(true);
    await axios.get<Cat[]>(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}`
    ).then((response: AxiosResponse<Cat[]>) => {
      setCats((prev: Cat[]) => [...prev, ...response.data]);
    }).catch((error: AxiosError) => {
      console.error(error);
    }).finally(() => {
      setLoading(false);
    });
  }

  useEffect(() => {
    _fetchCats();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev: number) => prev + 1);
        }
      }, { threshold: 1 }
    );
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => observer.disconnect();
  }, [loader]);

  return (
    <div className="flex flex-col gap-4 overflow-y-auto relative">
      <div className="columns-3 gap-4">
        <AnimatePresence>
      {cats.map((cat) => (
        <motion.div key={cat.id} className="w-full mb-4 rounded-md overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={cat.url} alt={cat.id} className="w-full h-auto object-contain filter grayscale" loading="lazy" />
        </motion.div>
      ))}
          <div ref={loader} className="h-10 flex items-center justify-center">
            {loading && <span className="animate-spin text-gray-500"><Loader /></span>}
          </div>
        </AnimatePresence>
      </div>
      
    </div>
  )
}