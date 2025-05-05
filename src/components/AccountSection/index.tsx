"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
import { Account } from "@/models/account";

type AccountGroup = {
  title: string;
  accounts: Account[];
};

type AccountSectionProps = {
  accounts: Account[];
};

function Accordion({ group }: { group: AccountGroup }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("계좌번호가 복사되었습니다.");
  };

  return (
    <div className="p-4 bg-white">
      <div className="flex flex-col gap-4">
        {group.accounts.map((account, idx) => (
          <div
            key={idx}
            className="flex-1 bg-gray-50 p-4 rounded-md shadow-inner border border-gray-100 flex flex-row justify-between"
          >
            <div>
              <div>
                <p className="text-sm font-semibold mb-1">
                  {account.relation} ({account.name})
                </p>
                <p className="text-sm text-gray-700">
                  {account.bank} {account.accountNumber}
                </p>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(account.accountNumber)}
              className="mt-4 bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-200 transition"
            >
              복사하기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AccountSection({ accounts }: AccountSectionProps) {
  return (
    <section className="p-4">
      <Accordion
        group={{
          title: "축하의 마음을 전달하실 분들을 위해",
          accounts: accounts,
        }}
      />
      <div className="mb-6 text-center text-sm text-gray-600 leading-relaxed">
        축하의 뜻을 전해주실 분들을 위해 계좌번호를 안내드립니다.
      </div>

      {/* <div className="mb-6 text-center text-sm text-gray-600 leading-relaxed">
        참석이 어려우신 분들께서는 마음만으로도 감사드립니다. <br />
        부득이하게 축하의 뜻을 전해주실 분들을 위해 계좌번호를 안내드립니다.
      </div> */}
    </section>
  );
}
