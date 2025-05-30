"use client";
import Album from "@/components/Album";
import AudioFloatButton from "@/components/AudioFloatButton";
import WeddingCalendar from "@/components/WeddingCalendar";
import FadeInMotion from "@/components/FadeInMotion";
import HeaderImage from "@/components/HeaderImage";
import HeaderText from "@/components/HeaderText";
import NaverMap from "@/components/NaverMap";
import Divider from "@/components/Divider";
import { Location } from "@/models/location";
import AccountSection from "@/components/AccountSection";
import { Account } from "@/models/account";

const weddingDate = Date.parse("2025-05-31 14:00");
const location: Location = {
  name: "초대파티하우스",
  address: "강원 원주시 반곡동 1886-1",
  latitude: 37.3234945383192,
  longitude: 127.9799731266445,
  phoneNumber: "010-5363-3338",
};
const accounts: Account[] = [
  {
    relation: "아버지",
    name: "윤석안",
    bank: "농협은행",
    accountNumber: "351-0857-5625-03",
  },
  {
    relation: "어머니",
    name: "김선희",
    bank: "농협은행",
    accountNumber: "216-0185-2092-236",
  },
  {
    relation: "신랑",
    name: "윤여환",
    bank: "농협은행",
    accountNumber: "302-0149-3208-11",
  },
];
export default function Page() {
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
              isDetailHide={false}
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
          <Divider title="마음 전하실 곳" />
          <AccountSection accounts={accounts} />
        </FadeInMotion>

        <section className="p-4">
          <Divider title="갤러리" />
          <Album />
        </section>
      </div>
    </>
  );
}
