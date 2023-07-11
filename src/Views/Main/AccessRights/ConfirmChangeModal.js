import React from "react";
import { Modal } from "antd";
import { Images } from "../../../Controller/image";

const ConfirmChangeModal = ({ changeModal, setChange, handleChange }) => {
  const handleOk = () => {
    setChange(false);
  };

  const handleCancel = () => {
    setChange(false);
  };
  return (
    <>
      <Modal
        footer={null}
        open={changeModal}
        width={400}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className=" flex justify-center items-center flex-col font-semibold gap-y-3">
            <img src={Images.exclamation} alt="exclamation" width={120}/>
          <p>Are You Sure ?</p>
          <p>You want to provide access right to this menu!
</p>
        </div>
        <div className="buttons flex justify-center items-center gap-3 mt-3">
          <p
            onClick={() => setChange(false)}
            className="font-bold cursor-pointer"
          >
            Cancel
          </p>
          <button
            onClick={handleChange}
            className="      bg-[#113150] text-white font-bold p-3 rounded-sm"
          >
            Yes grant it.
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmChangeModal;
