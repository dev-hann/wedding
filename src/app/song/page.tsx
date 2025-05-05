"use client";
import Album from "@/components/Album";
import AudioFloatButton from "@/components/AudioFloatButton";
import WeddingCalendar from "@/components/WeddingCalendar";
import FadeInMotion from "@/components/FadeInMotion";
import HeaderImage from "@/components/HeaderImage";
import HeaderText from "@/components/HeaderText";
import Divider from "@/components/Divider";
import AccountSection from "@/components/AccountSection";
import { Account } from "@/models/account";

const weddingDate = Date.parse("2025-05-31 13:00");
const accounts: Account[] = [
  {
    relation: "아버지",
    name: "송도현",
    bank: "우리은행",
    accountNumber: "345678-90-123456",
  },
  {
    relation: "어머니",
    name: "박미영",
    bank: "하나은행",
    accountNumber: "456789-01-234567",
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
              location={null}
            />
          </div>
        </section>
        <FadeInMotion>
          <WeddingCalendar weddingDay={weddingDate} />
        </FadeInMotion>

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
