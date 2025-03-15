import Image from "next/image";
export default function HeaderImage() {
  return (
    <Image
      src={`/images/main.jpeg`}
      alt="웨딩 사진"
      width={0}
      height={0}
      sizes="100vw"
      className="w-full h-auto rounded-lg mx-auto"
    />
  );
}
