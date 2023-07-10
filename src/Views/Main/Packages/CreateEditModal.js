import React, { useEffect, useState } from "react";
import { Input, Modal, message } from "antd";
import {
  addPackage,
  getPackageById,
  updatePackageById,
} from "../../../services/apiFunctions";
import { messageConfiguration } from "../../../Utils";

const CreateEditModal = ({ openModal, setOpenModal, openFrom, packageId }) => {
  const [data, setData] = useState({
    name: "",
    description: "",
  });
  const handleOk = () => {
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };
  const handleSubmit = () => {
    openFrom === "add"
      ? addPackage(data)
          .then((res) => {
            message.open(messageConfiguration("success", res?.message, 3));
            setData({name:"",description:""})
            setOpenModal(false);
          })
          .catch((err) => console.log(err))
      : updatePackageById(
          {
            name: data.name,
            description: data.description,
            id: packageId.id,
          },
          packageId.id
        )
          .then((res) => {
            message.open(messageConfiguration("success", res?.message, 3));
            setData({name:"",description:""})
            setOpenModal(false);
          })
          .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (packageId) {
      getPackageById(packageId.id)
        .then((res) =>
          setData({ description: res.description, name: res.name })
        )
        .catch((err) => console.log(err));
    }
    openFrom==="add" && setData({name:"",description:""})
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [packageId]);
  return (
    <>
      <Modal
        footer={null}
        title={`${openFrom === "add" ? "Add Package" : "Edit Package"}`}
        open={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex flex-col gap-y-3">
          <p>Name</p>
          <Input
            name="name"
            required
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Enter Name"
            className="w-full md:w-1/2"
          />
          <p>Description</p>
          <Input
            name="description"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            placeholder="Enter Description"
            className="w-full md:w-1/2"
          />
        </div>
        <div className="buttons flex justify-end items-center gap-3 mt-3">
          <p onClick={()=>setOpenModal(false)} className="font-bold">Cancel</p>
          <button
            disabled={data.name === ""}
            onClick={handleSubmit}
            className={`${
              data.name === "" ? "bg-gray-500" : "bg-[#113150]"
            }  text-white font-bold p-3 rounded-sm`}
          >
            Save
          </button>
        </div>
      </Modal>
    </>
  );
};

export default CreateEditModal;
