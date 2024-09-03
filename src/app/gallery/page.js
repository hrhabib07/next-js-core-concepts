import Image from "next/image";
import nextImage from "../../assets/next js image.png";

const GalleryPage = () => {
  return (
    <div>
      <h2 className="text-4xl text-center my-8">
        {" "}
        Welcome to image optimization page
      </h2>
      <h2 className="text-2xl text-center my-4">Normal image tag</h2>
      <img
        src="https://nextjs.org/api/docs-og?title=Optimizing:%20Images"
        alt="next image"
        className="mx-auto"
        width={500}
        height={500}
      />
      <br />
      <h2 className="text-2xl text-center my-4">Next js optimized image </h2>
      <Image
        src="https://nextjs.org/api/docs-og?title=Optimizing:%20Images"
        alt="next image"
        width={500}
        height={500}
        className="mx-auto"
      ></Image>
      <br />
      <h2 className="text-2xl text-center my-4">Local image </h2>
      <Image
        src={nextImage}
        alt="next image"
        width={500}
        height={500}
        className="mx-auto"
      ></Image>
    </div>
  );
};

export default GalleryPage;
