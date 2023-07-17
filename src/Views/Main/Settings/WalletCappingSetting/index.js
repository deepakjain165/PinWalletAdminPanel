import React, { useEffect, useState } from "react";
import Header from "../../../../Common/Header";
import { getWalletCapping } from "./ApiFun";
import { Select, Input, Button } from "antd";
import { getPartnerList } from "../../../../services/apiFunctions";
import ConfirmModal from "../../../../Common/ConfirmModal";
function WalletCappingSetting() {
  const [packageData, setPackageData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [fields, setFields] = useState({
    amount: 0,
  });
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    getPartnerList()
      .then((response) => {
        const changes = response.data.map((i, index) => {
          return {
            label: (
              <div>
                {i.partnerName} |{""} {i.partnerEmail} <br />
                {i.partnerPhone}
              </div>
            ),
            value: i.partnerId,
          };
        });
        setPackageData(changes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function getDetailWalletCapping(value) {
    getWalletCapping(value)
      .then((response) => {
        setData(response.data);
        setFields({
          amount: response.data.amount,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // useEffect(() => {
  //   getDetailWalletCapping();
  // }, [fields]);
  function updateWalletCapping() {}
  return (
    <div>
      <Header PageName={" Wallet Capping Setting"} />
      <div>
        <div className="flex justify-center items-center">
          <div className="bg-white w-full lg:w-1/2 shadow-md shadow-gray-500 py-8 px-4">
            <div className="grid font-semibold grid-cols-2 place-items-center px-8 py-6 gap-5 leading-6 items-center ">
              <p className="required">Package</p>
              <Select
                placeholder="Select an Option"
                onChange={(value) => {
                  getDetailWalletCapping(value);
                  setIsOpen(true);
                }}
                options={packageData}
                className="w-full"
              />

              {isOpen && (
                <>
                  <p>Amount</p>
                  <Input
                    type="number"
                    min={0}
                    value={fields.amount}
                    onChange={(e) =>
                      setFields({ ...fields, amount: Number(e.target.value) })
                    }
                  />
                </>
              )}

              {isOpen && (
                <div className=" col-span-2">
                  <Button
                    className="bg-gray-800 cursor-pointer text-white font-semibold p-2 h-10 rounded-md"
                    onClick={setOpenModal}
                  >
                    Submit
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        {openModal && (
          <ConfirmModal
            handleDelete={updateWalletCapping}
            deleteModal={openModal}
            btnTxt={"Yes, Update!"}
            desc={"You want to Update this Wallet Capping settings."}
            setDeleteModal={setOpenModal}
          />
        )}
      </div>
    </div>
  );
}
export default WalletCappingSetting;
