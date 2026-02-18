import PhotoList from "@/components/PhotoList";
import { getDictionary } from "./disctionaries";


export default async function Home() {
  // console.log(process.env.BASE_API_URL);
  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos = await response.json();

  return (
    <PhotoList photos={photos} />
  );
}
