import { Input, Select, message } from "antd";
import React, { useEffect, useState } from "react";
import { DoTransaction, getPartnerDropdown } from "./Apifun";
import { ConvertInRs, messageConfiguration } from "../../../../Utils";
import ConfirmModal from "../../../../Common/ConfirmModal";

const AddDeduct = () => {
  const [partnerDropDown, setPartnerDropDown] = useState([]);
  const [partnerDropDownList, setPartnerDropDownList] = useState([]);
  const [partnerId, setPArtnerID] = useState({});
  const [showToggle, setshowToggle] = useState(false);
  const [fields, setFields] = useState({
    type: "",
    amount: 0,
    remark: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const getList = () => {
    getPartnerDropdown()
      .then((res) => {
        const changes = res.data.map((i, index) => {
          return {
            label: (
              <div className="text-xs">
                <p>{i.partnerEmail}</p>
                <div className="text-xs">
                  <p>
                    ID: {i.partnerId} | {i.partnerName}
                  </p>
                </div>
              </div>
            ),
            value: i.partnerId,
          };
        });
        setPartnerDropDown(changes);
        setPartnerDropDownList(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getList();
  }, []);
  const handleValidation = () => {
    if (fields.type === "" && fields.amount === 0 && fields.remark === "") {
      message.open(messageConfiguration("error", "Please fill All Fields!", 3));
    } else if (fields.type === "") {
      message.open(
        messageConfiguration("error", "Please Select Credit/Debit!", 3)
      );
    } else if (fields.amount === 0) {
      message.open(
        messageConfiguration(
          "error",
          "Please Enter Amount To Do This Transaction!",
          3
        )
      );
    } else if (fields.remark === "") {
      message.open(messageConfiguration("error", "Please Enter Remark!", 3));
    } else {
      setOpenModal(true);
    }
  };
  const handleTransaction = () => {
    let payload = { ...partnerId };
    payload = {
      ...payload,
      exchangeType: fields.type,
      remark: fields.remark,
      amount: fields.amount,
    };
    DoTransaction(payload).then((res) => {
      if (res.success) {
        message.open(messageConfiguration("success", res.message, 3));
        setshowToggle(false);
        setPArtnerID("");
      } else {
        message.open(messageConfiguration("error", res.message, 3));
      }
      setOpenModal(false);
      setFields({
        type: "",
        amount: 0,
        remark: "",
      });
      getList();
    });
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-white w-full lg:w-1/2 shadow-md shadow-gray-500 py-8 px-4">
          <div className="grid font-semibold grid-cols-3 place-items-center p-4 gap-5 items-center ">
            <p className="required">Partner Id</p>
            <Select
              placeholder="Select an Option"
              options={partnerDropDown}
              value={partnerId.partnerId}
              onChange={(val) => {
                setPArtnerID(
                  partnerDropDownList.filter(
                    (i, index) => i.partnerId === val
                  )[0]
                );
                setshowToggle(true);
              }}
              className="w-full"
            />
            <p
              onClick={() => {
                setshowToggle(false);
                setPArtnerID("");
              }}
              className="border cursor-pointer border-red-600 text-red-600 rounded-md p-1 text-xs"
            >
              Clear
            </p>
            {showToggle && (
              <>
                <p className="required">Type</p>
                <Select
                  placeholder="Select an Option"
                  className="w-full col-span-2"
                  defaultValue={""}
                  onChange={(val) => setFields({ ...fields, type: val })}
                >
                  <Select.Option disabled value="">
                    Select an Option
                  </Select.Option>
                  <Select.Option value="Cr">Credit/Add Fund</Select.Option>
                  <Select.Option value="Dr">Debit/Deduct Fund</Select.Option>
                </Select>
                <p>Balance</p>
                <p className="bg-gray-500 text-end w-full p-3  col-span-2 rounded-md">
                  {ConvertInRs(partnerId.balance ?? 0)}
                </p>
                <p className="required">Amount</p>
                <Input
                  value={fields.amount}
                  min={0}
                  onChange={(e) =>
                    setFields({ ...fields, amount: Number(e.target.value) })
                  }
                  className=" col-span-2"
                  type="number"
                />
                <p className="required">Remark/Narration</p>
                <Input
                  value={fields.remark}
                  onChange={(e) =>
                    setFields({ ...fields, remark: e.target.value })
                  }
                  className=" col-span-2"
                  type="text"
                />
              </>
            )}
          </div>
          {showToggle && (
            <div className="flex justify-end items-center">
              <p
                onClick={handleValidation}
                className="bg-gray-800 cursor-pointer text-white font-semibold p-2 rounded-md"
              >
                Do Transaction
              </p>
            </div>
          )}
        </div>
      </div>
      {openModal && (
        <ConfirmModal
          btnTxt={"Yes!"}
          deleteModal={openModal}
          desc={"You want to this transaction"}
          setDeleteModal={setOpenModal}
          handleDelete={handleTransaction}
        />
      )}
    </>
  );
};

export default AddDeduct;
