import Album from "@/components/Album";
import AudioFloatButton from "@/components/AudioFloatButton";
import Calendar from "@/components/Calendar";
import HeaderImage from "@/components/HeaderImage";
import HeaderText from "@/components/HeaderText";
import Location from "@/components/Location";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <AudioFloatButton />
      <section className="text-center p-4 h-screen flex flex-col justify-between">
        <HeaderImage />
        <HeaderText />
      </section>
      <h2 className="text-xl font-semibold">캘린더</h2>
      <Calendar />

      <section className="p-4">
        <h2 className="text-xl font-semibold">갤러리</h2>
        <Album />
      </section>

      <section className="p-4">
        <Location />
      </section>
    </div>
  );
}
