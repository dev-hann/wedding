"use client";
export default function FooterText() {
  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          alert("링크가 복사되었습니다.");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };
  return (
    <div className="footer-text text-center">
      <p>Copyright 2023</p>
      <button
        className="share-button"
        onClick={() => {
          copyToClipboard();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114.456-.342.938m0 0a4 4 0 118 0l4 4m0-4l-4 4m4 0l4-4m0 4l-4 4m0-4l4 4"
          />
        </svg>
      </button>
    </div>
  );
}
