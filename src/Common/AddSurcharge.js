import { Checkbox, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getPackageListdata,
} from "../services/apiFunctions";
import {
  addCommonSurcharge,
  getSurchargesById,
  updateCommonSurcharge,
} from "../Utils";

const AddSurcharge = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [packageList, setPackageList] = useState([]);
  const [packageId, setPackageId] = useState(null);
  const [arrayData, setarrayData] = useState([
    {
      startRange: "",
      endRange: "",
      amount: 0,
      surcharge: 0,
      isFlat: false,
    },
  ]);
  const getAllPackages = () => {
    getPackageListdata()
      .then((res) => {
        const changes = res.data.map((i, index) => {
          return { label: i.text, value: i.value };
        });
        setPackageList(changes);
      })
      .catch((err) => console.log(err));
  };
  const getSurchargeById = async () => {
    const response = await getSurchargesById(
      location.state?.getEndpoint,
      `/${location.state?.record.id}`
    );
    let changes = { ...response };
    changes = { ...changes, amount: response?.surcharge };
    setarrayData([changes]);
    setPackageId(response?.packageId);
  };
  useEffect(() => {
    getAllPackages();
    if (location.state.from.includes("Edit")) {
      getSurchargeById();
    }
   
  }, []);
  const handleAddMore = () => {
    const data = {
      startRange: 0,
      endRange: 0,
      amount: 0,
      surcharge: 0,
      isFlat: false,
    };
    setarrayData([...arrayData, data]);
  };
  const handleDelete = (index) => {
    let newdata = [...arrayData];
    newdata.splice(index, 1);
    setarrayData(newdata);
  };
  const handlechange = (e, index) => {
    const { name, value } = e.target;
    let newdata = [...arrayData];
    if (name !== "isFlat" && name !== "amount") {
      newdata[index] = { ...newdata[index], [name]: value };
    } else if (name === "amount") {
      newdata[index] = { ...newdata[index], amount: value, surcharge: value };
    } else {
      newdata[index] = { ...newdata[index], isFlat: e.target.checked };
    }
    setarrayData(newdata);
  };
  const handleSubmit = () => {
    if (packageId !== null && handleCheckfields()) {
      const payload = {
        packageId: packageId,
        payoutItems: JSON.stringify(arrayData),
      };
      if (location.state?.from.includes("Add")) {
        addCommonSurcharge(payload, location.state.endpoint, "");
      } else {
        updateCommonSurcharge(...arrayData, location.state.endpoint, "");
      }
      navigate(-1);
    }
  };
  const handleCheckfields = () => {
    const check = arrayData.every((i) => {
      if (i.startRange !== "" && i.endRange !== "") {
        return true;
      }
      return false;
    });
    return check;
  };
  return (
    <>
      <p className="font-bold text-xl">{location.state.from}</p>
      <hr className="mt-3" />
      <div className="mt-4 flex justify-between items-center">
        <div className="">
          <p className="required font-semibold">Package</p>
          <Select
            className="w-full mt-2 "
            placeholder="Selcet a Package"
            disabled={location.state?.from.includes("Edit")}
            options={packageList}
            value={packageId}
            onChange={(val) => setPackageId(val)}
          />
        </div>
        {!location.state.from.includes("Edit") && (
          <p
            onClick={handleAddMore}
            className="bg-[#113150] text-white rounded-sm p-3 cursor-pointer"
          >
            + Add More
          </p>
        )}
      </div>
      <div className="bg-white mt-3 p-4 h-96 overflow-scroll shadow-md shadow-gray-500">
        {arrayData.map((i, index) => {
          return (
            <>
              <div
                key={index}
                className="grid grid-cols-5 mt-2 place-items-center gap-3"
              >
                <div>
                  <p>Start range</p>
                  <Input
                    name="startRange"
                    onChange={(e) => handlechange(e, index)}
                    min={0}
                    value={i.startRange}
                    className="mt-1"
                    type="number"
                  />
                </div>
                <div>
                  <p>End range</p>
                  <Input
                    name="endRange"
                    onChange={(e) => handlechange(e, index)}
                    min={0}
                    value={i.endRange}
                    className="mt-1"
                    type="number"
                  />
                </div>
                <div>
                  <p>Surcharge</p>
                  <Input
                    name="amount"
                    value={i.amount}
                    min={1}
                    onChange={(e) => handlechange(e, index)}
                    className="mt-1"
                    type="number"
                  />
                </div>
                <div>
                  <p>Is Flat</p>
                  <Checkbox
                    name="isFlat"
                    checked={i.isFlat}
                    onChange={(e) => handlechange(e, index)}
                    className="mt-1 text-lg"
                  />
                </div>
                {!location.state.from.includes("Edit") && (
                  <div>
                    <p>Action</p>
                    <p
                      onClick={() => handleDelete(index)}
                      className="bg-red-600 cursor-pointer rounded-sm mt-1 text-white text-center font-bold text-xs p-1"
                    >
                      X
                    </p>
                  </div>
                )}
              </div>
            </>
          );
        })}
      </div>
      <div className="flex justify-end items-center gap-3 mt-2">
        <p
          className={`${
            packageId !== null && handleCheckfields()
              ? "bg-[#113150]"
              : "bg-gray-600"
          }  rounded-sm cursor-pointer text-white p-2`}
          onClick={handleSubmit}
        >
          {location.state?.from.includes("Edit") ? "Update" : "Add"}
        </p>
        <p
          onClick={() =>navigate(-1)}
          className="bg-[#000] rounded-sm text-white p-2"
        >
          Cancel
        </p>
      </div>
    </>
  );
};

export default AddSurcharge;
