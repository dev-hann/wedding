import Album from "@/components/Album";
import AudioFloatButton from "@/components/AudioFloatButton";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <AudioFloatButton />
      <Head>
        <title>우리의 웨딩 초대장</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="text-center py-6">
        <h1 className="text-3xl font-bold">우리의 결혼식에 초대합니다</h1>
      </header>

      <section className="text-center p-4">
        <Image
          src="/images/main.jpeg"
          alt="웨딩 사진"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg mx-auto"
        />
        <p className="mt-4 text-lg">2025년 5월 10일 오후 2시</p>
        <p className="text-lg">서울 강남구 ○○웨딩홀</p>
      </section>

      <section className="p-4">
        <h2 className="text-xl font-semibold">갤러리</h2>
        <Album />
      </section>

      <section className="p-4">
        <h2 className="text-xl font-semibold">위치 안내</h2>
        <div className="w-full h-64 bg-gray-200 mt-4 flex items-center justify-center">
          <p className="text-gray-600">네이버 지도 삽입</p>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        감사합니다. 꼭 참석해 주세요!
      </footer>
    </div>
  );
}
