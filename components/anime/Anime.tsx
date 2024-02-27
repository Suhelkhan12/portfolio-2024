import { animeImages } from "@/data/data";
import Image from "next/image";

const Anime = () => {
  return (
    <div className="flex gap-4">
      {animeImages.map((image) => (
        <Image
          src={image.image}
          alt={image.name}
          key={image.name}
          width={150}
          height={100}
          className="rounded-lg"
        />
      ))}
    </div>
  );
};

export default Anime;
