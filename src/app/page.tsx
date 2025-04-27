"use client";
import Album from "@/components/Album";
import AudioFloatButton from "@/components/AudioFloatButton";
import WeddingCalendar from "@/components/WeddingCalendar";
import FadeInMotion from "@/components/FadeInMotion";
import HeaderImage from "@/components/HeaderImage";
import HeaderText from "@/components/HeaderText";
import InvitationCard from "@/components/InvitationCard";
import NaverMap from "@/components/NaverMap";
import InvitationModal from "@/components/InvitaionModal";
import { useInvitation } from "@/hooks/Invitation/useInvitation";
import Divider from "@/components/Divider";
import { Location } from "@/models/location";
import FooterText from "@/components/FooterText";

const weddingDate = Date.parse("2025-05-31 13:00");
const location: Location = {
  name: "초대파티하우스",
  address: "강원 원주시 반곡동 1886-1",
  latitude: 37.3234945383192,
  longitude: 127.9799731266445,
  phoneNumber: "010-5363-3338",
};

export default function Home() {
  const { isModalOpen, openModal, closeModal, handleConfirm } = useInvitation();
  return (
    <>
      <div className="max-w-lg mx-auto text-gray-900">
        <AudioFloatButton />
        <section className="p-4 min-h-[100svh] flex flex-col">
          <div className="flex-[0.8]  relative">
            <HeaderImage />
          </div>
          <div className="flex-[0.2] flex items-center justify-center ">
            <HeaderText
              groomName={"윤여환"}
              brideName={"송지영"}
              date={weddingDate}
              location={location.name}
            />
          </div>
        </section>
        <FadeInMotion>
          <WeddingCalendar weddingDay={weddingDate} />
        </FadeInMotion>
        <section className="p-4">
          <Divider title="오시는 길" />
          <NaverMap location={location} />
        </section>

        <FadeInMotion>
          <Divider title="참석 여부 전달" />
          <InvitationCard onClick={openModal} />
        </FadeInMotion>

        <section className="p-4">
          <Divider title="갤러리" />
          <Album />
        </section>
        <section className="pb-8">
          <FooterText />
        </section>
      </div>

      <InvitationModal
        isModalOpen={isModalOpen}
        handleConfirm={(name) => {
          handleConfirm(name);
          closeModal();
        }}
        handleCloseModal={() => {
          closeModal();
        }}
      />
    </>
  );
}
