"use client";
import { useState } from "react";

export function useInvitation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = async (name: string) => {
    try {
      const res = await fetch('/api/create-issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
  
      const result = await res.json();
      if (result.success) {
        alert('참여 의사가 성공적으로 등록되었습니다!');
      } else {
        alert('참여 등록 실패');
      }
    } catch (error) {
      console.error(error);
      alert('오류가 발생했습니다.');
    } finally {
      closeModal();
    }
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    handleConfirm,
  };
}
