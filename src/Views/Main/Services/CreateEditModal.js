import React, { useEffect, useState } from "react";
import { Input, Modal, message } from "antd";
import {
  addService,
  getServiceById,
  updateServiceById,
} from "./ApiFun";
import { messageConfiguration } from "../../../Utils";

const CreateEditModal = ({ openModal, setOpenModal, openFrom, packageId }) => {
  const [data, setData] = useState({
    name: "",
    description: "",
    link:""
  });
  const handleOk = () => {
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };
    const handleSubmit = () => {
      openFrom === "add"
        ? addService(data)
            .then((res) => {
              message.open(messageConfiguration("success", res?.message, 3));
              setData({name:"",description:"",link:""})
              setOpenModal(false);
            })
            .catch((err) => console.log(err))
        : updateServiceById(
            {
              name: data.name,
              description: data.description,
              link:data.link,
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
        getServiceById(packageId.id)
          .then((res) =>
            setData({ description: res.description, name: res.name,link:res.link })
          )
          .catch((err) => console.log(err));
      }
      openFrom==="add" && setData({name:"",description:"",link:""})
         
    }, [packageId]);
  return (
    <>
      <Modal
        footer={null}
        title={`${openFrom === "add" ? "Add Service" : "Edit Service"}`}
        open={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p>Name</p>
            <Input
              name="name"
              required
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Enter Name"
            />
          </div>
          <div>
            <p>Link</p>
            <Input
              name="link"
              value={data.link}
              onChange={(e) =>
                setData({ ...data, link: e.target.value })
              }
              placeholder="Enter Description"
            />
          </div>
          <div>
            <p>Description</p>
            <Input.TextArea
              name="description"
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
              placeholder="Enter Description"
            />
          </div>
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
