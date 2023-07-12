import React from "react";
import { Modal } from "antd";
import { Images } from "../Controller/image";

const ConfirmModal = ({ deleteModal, setDeleteModal, handleDelete,btnTxt,desc }) => {
  const handleOk = () => {
    setDeleteModal(false);
  };

  const handleCancel = () => {
    setDeleteModal(false);
  };

  return (
    <>
      <Modal
        footer={null}
        open={deleteModal}
        width={400}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className=" flex justify-center items-center flex-col font-semibold gap-y-3">
            <img src={Images.exclamation} alt="exclamation" width={120}/>
          <p>Are You Sure ?</p>
          <p>{desc}</p>
        </div>
        <div className="buttons flex justify-center items-center gap-3 mt-3">
          <p
            onClick={() => setDeleteModal(false)}
            className="font-bold cursor-pointer"
          >
            Cancel
          </p>
          <button
            onClick={handleDelete}
            className="      bg-[#113150] text-white font-bold p-3 rounded-sm"
          >
            {btnTxt}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmModal;
