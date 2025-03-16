import Album from "@/components/Album";
import AudioFloatButton from "@/components/AudioFloatButton";
import Calendar from "@/components/Calendar";
import FadeInMotion from "@/components/FadeInMotion";
import HeaderImage from "@/components/HeaderImage";
import HeaderText from "@/components/HeaderText";
import InvitationText from "@/components/InvitationText";
import Location from "@/components/Location";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <AudioFloatButton />
      <section className="text-center p-4 min-h-[100svh] flex flex-col">
        <div className="flex-[0.8]  relative">
          <HeaderImage />
        </div>
        <div className="flex-[0.2] flex items-center justify-center bg-red-50">
          <HeaderText />
        </div>
      </section>

      <FadeInMotion>
        <InvitationText />
      </FadeInMotion>
      <FadeInMotion>
        <h2 className="text-xl font-semibold">캘린더</h2>
        <Calendar />
      </FadeInMotion>

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
