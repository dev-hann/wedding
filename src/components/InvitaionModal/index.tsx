export interface InvitationModalProps {
  isModalOpen: boolean;
  handleConfirm: (name: string) => void;
  handleCloseModal: () => void;
}

export default function InvitationModal({
  isModalOpen,
  handleConfirm,
  handleCloseModal,
}: InvitationModalProps) {
  let name = "";

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50  flex justify-center items-center z-[1000]">
          <div className="bg-white p-5 rounded-xl w-[300px] text-center shadow-lg">
            <p className="text-xl font-bold mb-4 text-zinc-700">
              참여 의사 등록
            </p>
            <input
              type="text"
              onChange={(e) => (name = e.target.value)}
              placeholder="이름을 입력해주세요"
              className="w-full p-2 my-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400 text-zinc-700"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleCloseModal}
                className="px-5 py-2 bg-gray-600 text-white rounded-md cursor-pointer hover:bg-gray-700 transition-colors duration-200"
              >
                취소
              </button>
              <button
                onClick={() => {
                  if (name.length > 0) {
                    handleConfirm(name);
                  }
                }}
                className="px-5 py-2 bg-red-600 text-white rounded-md cursor-pointer hover:bg-red-700 transition-colors duration-200"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
