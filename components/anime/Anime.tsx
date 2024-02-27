import { animeImages } from "@/data/data";
import Image from "next/image";

const Anime = () => {
  return (
    <div className="flex gap-4">
      {animeImages.map((image) => (
        <div key={image.name} className="flex overflow-hidden rounded-lg">
          <Image src={image.image} alt={image.name} width={150} height={100} />
        </div>
      ))}
    </div>
  );
};

export default Anime;
