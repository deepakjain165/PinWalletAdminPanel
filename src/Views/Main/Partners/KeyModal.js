import React, { useEffect, useState } from "react";
import {  Modal } from "antd";
import { generatePartnerKey } from "../../../services/apiFunctions";

const KeyModal = ({ id, keyModal, setKeyModal }) => {
    const[keyDetail,setKeyDetail]=useState({})
  const handleOk = () => {
    setKeyModal(false);
  };

  const handleCancel = () => {
    setKeyModal(false);
  };
  useEffect(() => {
    generatePartnerKey(id)
      .then((res) => setKeyDetail(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <Modal
        title="Pass Key Generator"
        open={keyModal}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
       <div className="text-center"> <p><span className="font-bold">Partner Email: </span>{keyDetail.email}</p>
        <p className="font-bold">Secret key to Generate Hash-Key:</p></div>
        <p className="h-12 mt-4 overflow-scroll border border-gray-200 px-3">{keyDetail.secretKey || keyDetail.passkey}</p>
        <div className="flex cursor-pointer justify-end gap-3 items-center mt-3">
            <p onClick={()=>setKeyModal(false)} className="font-bold ">Cancel</p>
            <p className="bg-[#113150] text-white p-3 rounded-sm ">Re-Generate</p>
        </div>
      </Modal>
    </>
  );
};

export default KeyModal;
