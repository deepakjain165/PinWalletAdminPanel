import React, { useEffect, useState } from "react";
import { Input, Modal, Select, message } from "antd";
import {
  EditUser,
  GetUserRoles,
  addUser,
  getUserById,
} from "../../../services/apiFunctions";
import { messageConfiguration } from "../../../Utils";

const CreateEditModal = ({ openModal, setOpenModal, openFrom, packageId }) => {
  const [data, setData] = useState({
    role: "",
    name: "",
    email: "",
    Phone: "",
  });
  const [userRoles, setUserRoles] = useState([]);
  const handleOk = () => {
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };
  const handleSubmit = () => {
    openFrom === "add"
      ? addUser({
          roleIds: [],
          customerGroupIds: [],
          userRole: data.role,
          fullName: data.name,
          email: data.email,
          phoneNumber: data.Phone,
        })
          .then((res) => {
            message.open(messageConfiguration("success", res?.message, 3));
            setData({ name: "", description: "", link: "" });
            setOpenModal(false);
          })
          .catch((err) => console.log(err))
      : EditUser(
          {
            fullName: data.name,
            description: data.description,
            email: data.email,
            id: packageId.id,
            password: null,
            phoneNumber: data.Phone,
            roleIds: [],
            userRole: Number(data.role),
          },
          packageId.id
        )
          .then((res) => {
            message.open(messageConfiguration("success", res?.message, 3));
            setData({ name: "", description: "" });
            setOpenModal(false);
          })
          .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (packageId) {
      getUserById(packageId.id)
        .then((res) =>
          setData({
            role: Number(res.userRole),
            name: res.fullName,
            email: res.email,
            Phone: res.phoneNumber,
          })
        )
        .catch((err) => console.log(err));
    }
    openFrom === "add" && setData({ role: "", name: "", email: "", Phone: "" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [packageId]);
  useEffect(() => {
    GetUserRoles()
      .then((res) => {
        setUserRoles(
          res.map((i, index) => {
            return { value: i.id, label: i.name };
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Modal
        footer={null}
        title={`${openFrom === "add" ? "Add User" : "Edit User"}`}
        open={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p>Role</p>
            <Select
              className="w-full"
              name="name"
              //   defaultValue={data.role[0].value}
              value={data?.role}
              onChange={(e) => setData({ ...data, role: e })}
              placeholder="Select a Role"
              options={userRoles}
            />
          </div>
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
            <p>Email</p>
            <Input
              name="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Enter Description"
            />
          </div>
          <div>
            <p>Phone Number</p>
            <Input
              name="Phone"
              value={data.Phone}
              onChange={(e) => setData({ ...data, Phone: e.target.value })}
              placeholder="Enter Description"
            />
          </div>
        </div>
        <div className="buttons flex justify-end items-center gap-3 mt-3">
          <p onClick={() => setOpenModal(false)} className="font-bold">
            Cancel
          </p>
          <button
            disabled={
              data.name === "" &&
              data.role === [] &&
              data.email === "" &&
              data.Phone === ""
            }
            onClick={handleSubmit}
            className={`${
              data.name === "" &&
              data.role === [] &&
              data.email === "" &&
              data.Phone === ""
                ? "bg-gray-500"
                : "bg-[#113150]"
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
