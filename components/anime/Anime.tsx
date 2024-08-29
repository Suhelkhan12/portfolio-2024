import { animeImages } from "@/data/data";
import Image from "next/image";

const Anime = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {animeImages.map((image) => (
        <div
          key={image.name}
          className="relative h-[200px] w-[100%] lg:size-[10rem]"
        >
          <Image
            src={image.image}
            alt={image.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Anime;
