import React, { useEffect, useState } from "react";
import Header from "../../../../Common/Header";
import { Checkbox, Input, Select } from "antd";
import { getPackageListdata } from "../../../../services/apiFunctions";
import { getService, getpartner } from "./ApiFun";
import { ConvertInRs, ExtractDate, ExtractTime } from "../../../../Utils";
import ConfirmModal from "../../../../Common/ConfirmModal";
function SettlementProcess() {
  const [packageData, setPackageData] = useState([]);
  const [showService, setShowService] = useState(false);
  const [showrest, setShowRest] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [services, setServices] = useState([]);
  const [partnerID,setPartnerId]=useState(null)
  const [fields, setFields] = useState({
    isInstant: false,
    hours: 0,
  });
  useEffect(() => {
    getpartner()
      .then((res) => {
        const changes = res.data.map((i, index) => {
          return {
            label: (
              <div className="text-xs">
                <p>{i.partnerPhone}</p>
                <div className="text-xs">
                  <p>
                    {i.partnerEmail} | {i.partnerName}
                  </p>
                </div>
              </div>
            ),
            value: i.partnerId,
          };
        });
        setPackageData(changes);
      })
      .catch((err) => console.log(err));
  }, []);
  const getSettlementService = (val) => {
    getService(val)
      .then((res) => {
        const changes = res.data.map((i) => {
          return { label: i.text, value: i.value };
        });
        setServices(changes);
        setShowService(true);
        setPartnerId(val)
      })
      
      .catch((err) => console.log(err));
  };
  const handleSubmit = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Header PageName={"SettlementProcessSetting"} />
      <div className="flex justify-center mt-3 items-center">
        <div className="bg-white w-full md:w-1/2 shadow-md font-semibold shadow-gray-500 p-3  ">
          <div className="grid grid-cols-3 place-items-center gap-6 ">
            <p className="required">Partner Id:</p>
            <Select
              className="w-full"
              value={partnerID}
              options={packageData}
              onChange={(val) => getSettlementService(val)}
              placeholder="Select an Option"
            />
            <p
              onClick={() => {
                setShowRest(false);
                setShowService(false)
                setFields({
                  isInstant: false,
                  hours: 0,
                })
                setPartnerId("");
              }}
              className="border cursor-pointer border-red-600 text-red-600 rounded-md p-1 text-xs"
            >
              Clear
            </p>
            {showService && (
              <>
                <p className="required">services</p>
                <Select
                  className="w-full col-span-2"
                  options={services}
                  onChange={(val) => setShowRest(true)}
                  placeholder="Select a service"
                />
              </>
            )}
            {showrest && (
              <>
                <p className="required">IsInstant </p>
                <Checkbox
                  onChange={(e) =>
                    setFields({ ...fields, isInstant: e.target.checked })
                  }
                  className="col-span-2"
                />
                <p className="required">Hours </p>
                <Input
                  value={fields.hours}
                  disabled={fields.isInstant}
                  className="col-span-2"
                  onChange={(e) =>
                    setFields({ ...fields, hours: Number(e.target.value) })
                  }
                  type="number"
                />
              </>
            )}
          </div>
          {showrest && (
            <div className="flex justify-end mt-3 items-center  col-span-2">
              {" "}
              <p
                onClick={() => setOpenModal(true)}
                className="bg-[#113150] cursor-pointer  rounded-md p-2 text-white"
              >
                Submit
              </p>
            </div>
          )}
        </div>
      </div>
      {openModal && (
        <ConfirmModal
          btnTxt={"Yes!"}
          deleteModal={openModal}
          desc={"You want to Submit."}
          setDeleteModal={setOpenModal}
          handleDelete={handleSubmit}
        />
      )}
    </>
  );
}
export default SettlementProcess;
