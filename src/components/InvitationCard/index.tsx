export interface InvitationCardProps {
  onClick: () => void;
}

export default function InvitationCard({ onClick }: InvitationCardProps) {
  return (
    <div className="max-w-md mx-auto px-6 py-12">
      <div className="text-center space-y-8">
        <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
          서로의 진심을 믿고 이해하며 늘 함께하겠다는 약속을 했습니다.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
          이제 저희 두 사람이 새로운 가정을 이루는 자리에
        </p>

        <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
          귀한 걸음 하시어 축복해 주시면 감사하겠습니다.
        </p>

        <button
          onClick={onClick}
          className="mt-6 px-8 py-4 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white
          transition-all duration-300 font-medium tracking-wide uppercase"
        >
          참석 의사 전달하기
        </button>
      </div>
    </div>
  );
}
