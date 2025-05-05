"use client";
import Album from "@/components/Album";
import AudioFloatButton from "@/components/AudioFloatButton";
import FadeInMotion from "@/components/FadeInMotion";
import HeaderImage from "@/components/HeaderImage";
import HeaderText from "@/components/HeaderText";
import Divider from "@/components/Divider";
import AccountSection from "@/components/AccountSection";
import { Account } from "@/models/account";
import BlessingText from "@/components/BlessingText";

const weddingDate = Date.parse("2025-07-19 00:00");
const accounts: Account[] = [
  {
    relation: "아버지",
    name: "송진현",
    bank: "농협은행",
    accountNumber: "351-0743-1096-63",
  },
  {
    relation: "어머니",
    name: "박은숙",
    bank: "농협은행",
    accountNumber: "411-053-52046756",
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
              isDetailHide={true}
            />
          </div>
        </section>
        <FadeInMotion>
          <BlessingText />
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
