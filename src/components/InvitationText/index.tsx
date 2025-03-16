export default function InvitationText() {
  return (
    <div className="py-20 px-8">
      <div className="max-w-md mx-auto relative">
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-gray-300"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gray-300"></div>

        <div className="text-center space-y-10 py-12 px-4">
          <div className="space-y-1.5 font-light tracking-wider text-lg text-gray-800">
            <p className="leading-relaxed">서로의 진심을 믿고 이해하며</p>
            <p className="leading-relaxed">늘 함께하겠다는 약속을 했습니다.</p>
          </div>

          <div className="space-y-1.5 font-light tracking-wider text-lg text-gray-800">
            <p className="leading-relaxed">이제 저희 두 사람이</p>
            <p className="leading-relaxed">새로운 가정을 이루는 자리에</p>
          </div>

          <div className="space-y-1.5 font-light tracking-wider text-lg text-gray-800">
            <p className="leading-relaxed">귀한 걸음 하시어</p>
            <p className="leading-relaxed">축복해 주시면 감사하겠습니다.</p>
          </div>
          <button className="mt-8 px-8 py-4 border-2 border-stone-800 text-stone-800 rounded-none hover:bg-stone-800 hover:text-white transition-all duration-300 font-light tracking-widest text-lg">
            참여의사 전달하기
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gray-300"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-gray-300"></div>
      </div>
    </div>
  );
}
