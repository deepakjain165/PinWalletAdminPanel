import { Checkbox, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPackageListdata } from "../services/apiFunctions";

const AddSurcharge = () => {
  const location = useLocation();
  const [packageList, setPackageList] = useState([]);
  const [arrayData, setarrayData] = useState([
    {
      startRange: 0,
      endRange: 0,
      amount: 0,
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
  useEffect(() => {
    getAllPackages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleAddMore = () => {
    const data = {
      startRange: 0,
      endRange: 0,
      amount: 0,
      isFlat: false,
    };
    setarrayData([...arrayData, data]);
  };
  const handleDelete = (index) => {
    let newdata = [...arrayData];
    newdata.splice(index, 1);
    setarrayData(newdata);
  };
  return (
    <>
      <p className="font-bold text-xl">Add AEPS Commission</p>
      <hr className="mt-3" />
      <div className="mt-4 flex justify-between items-center">
        <div className="">
          <p className="required font-semibold">Package</p>
          <Select
            className="w-full mt-2 "
            placeholder="Selcet a Package"
            options={packageList}
          />
        </div>
        <p
          onClick={handleAddMore}
          className="bg-[#113150] text-white rounded-sm p-3 cursor-pointer"
        >
          + Add More
        </p>
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
                  <Input min={0} className="mt-1" type="number" />
                </div>
                <div>
                  <p>End range</p>
                  <Input min={0} className="mt-1" type="number" />
                </div>
                <div>
                  <p>Surcharge</p>
                  <Input min={0} className="mt-1" type="number" />
                </div>
                <div>
                  <p>Is Flat</p>
                  <Checkbox className="mt-1 text-lg" />
                </div>
                <div>
                  <p>Action</p>
                  <p
                    onClick={() => handleDelete(index)}
                    className="bg-red-600 cursor-pointer rounded-sm mt-1 text-white text-center font-bold text-xs p-1"
                  >
                    X
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex justify-end items-center gap-3 mt-2">
      <p
          className="bg-[#113150] rounded-sm text-white p-2"
        >
          Save
        </p>
        <p onClick={()=>{}} className="bg-[#000] rounded-sm text-white p-2">Cancel</p>
 
      </div>
    </>
  );
};

export default AddSurcharge;
