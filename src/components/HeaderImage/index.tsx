import Image from "next/image";
export default function HeaderImage() {
  return (
    <Image
      src={`/images/main.jpeg`}
      alt="웨딩 사진"
      fill
      className="object-cover rounded-lg"
      priority
    />
  );
}
