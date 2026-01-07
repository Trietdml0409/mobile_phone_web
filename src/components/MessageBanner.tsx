import React, { useState } from "react";
import { Button, Modal } from "antd";

export default function MessageBanner({ visitCount }: { visitCount: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Welcome to our website
      </Button>
      <Modal
        title="Welcome to our website"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Xin chào, bạn đã truy cập trang này {visitCount} lần</p>
      </Modal>
    </>
  );
}
