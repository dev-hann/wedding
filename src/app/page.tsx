import Album from "@/components/Album";
import AudioFloatButton from "@/components/AudioFloatButton";
import WeddingCalendar from "@/components/WeddingCalendar";
import FadeInMotion from "@/components/FadeInMotion";
import HeaderImage from "@/components/HeaderImage";
import HeaderText from "@/components/HeaderText";
import InvitationText from "@/components/InvitationText";
import Location from "@/components/Location";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="max-w-[768px] mx-auto min-h-screen  text-gray-900">
        <AudioFloatButton />
        <section className="text-center p-4 min-h-[100svh] flex flex-col">
          <div className="flex-[0.8]  relative">
            <HeaderImage />
          </div>
          <div className="flex-[0.2] flex items-center justify-center ">
            <HeaderText />
          </div>
        </section>

        <FadeInMotion>
          <InvitationText />
        </FadeInMotion>
        <FadeInMotion>
          <h2 className="text-xl font-semibold">캘린더</h2>
          <WeddingCalendar />
        </FadeInMotion>

        <section className="p-4">
          <h2 className="text-xl font-semibold">갤러리</h2>
          <Album />
        </section>

        <section className="p-4">
          <Location />
        </section>
      </div>
    </div>
  );
}
