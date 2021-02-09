import Image from "next/image";

const RecipeImage = ({ src, alt = "Recipe Image" }) => (
  <Image
    src={src}
    alt={alt}
    width={1200}
    height={500}
    loading="eager"
    layout="responsive"
    priority
  />
);

export default RecipeImage;
