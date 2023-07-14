import { Checkbox, Input, Select, message } from "antd";
import React, { useEffect, useState } from "react";
import {
  getPartnerDetail,
  getPartnerServiceList,
  updatePartnerDetail,
} from "./ApiFun";
import { useLocation, useNavigate } from "react-router-dom";
import { messageConfiguration } from "../../../Utils/index";
import { getPackageListdata } from "../../../services/apiFunctions";

const EditPartnerDetail = () => {
  const location = useLocation();
  const [partnerDetail, setPartnerDetail] = useState({});
  const [packages, setpackages] = useState([]);
  const [services, setServices] = useState([]);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    paymentRefId: "",
    serviceIds: [],
    packageId: null,
  });
  const navigate = useNavigate();
  const getServiceListdata = () => {
    getPartnerServiceList().then((res) =>
      setServices(
        res.data.map((i, index) => {
          return { label: i.text, value: i.value };
        })
      )
    );
  };
  const getPackageList = () => {
    getPackageListdata().then((res) =>
      setpackages(
        res.data.map((i, index) => {
          return { label: i.text, value: i.value };
        })
      )
    );
  };
  const getpartnerData = () => {
    getPartnerDetail(location.state.id)
      .then((res) => {
        setPartnerDetail(res);
        setFields({
          name: res.name,
          email: res.email,
          phoneNumber: res.phoneNumber,
          address: res.address,
          city: res.city,
          state: res.state,
          paymentRefId: res.paymentRefId,
          serviceIds: res.servicesIds,
          packageId: res.packageId,
        });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getServiceListdata();
    getpartnerData();
    getPackageList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleUpdate = () => {
    const formData = new FormData();
    let newdata = { ...partnerDetail };
    newdata = {
      ...newdata,
      name: fields.name,
      email: fields.email,
      packageId: fields.packageId,
      phoneNumber: fields.phoneNumber,
      address: fields.address,
      city: fields.city,
      state: fields.state,
      servicesIds: fields.serviceIds,
    };
    Object.entries(newdata).forEach(([key, value]) => {
      if (key === "servicesIds") {
        value.map((i, index) => formData.append(`servicesIds[${index}]`, i));
      } else if (key === "partnerBankDetails" && value !== null) {
        Object.entries(value).forEach(([key, value]) => {
          formData.append(`partnerBankDetails[${key}]`, value);
        });
      } else if (key === "partnerCompanyDetails" && value !== null) {
        Object.entries(value).forEach(([key, value]) => {
          formData.append(`partnerCompanyDetails[${key}]`, value);
        });
      } else {
        formData.append(key, value);
      }
    });
    updatePartnerDetail(formData)
      .then((res) => {
        message.open(messageConfiguration("success", res.message, 3));
        navigate("/partners");
      })
      .catch((err) => console.log(err));
    console.log(newdata, "newdatat");
  };
  return (
    <>
      <p className="font-bold underline  text-lg mb-4">Partner Basic Details</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 place-items-center">
        <div className="w-full">
          <p className="font-semibold required">Package</p>
          <Select
            onChange={(val) => setFields({ ...fields, packageId: val })}
            className="w-full"
            value={fields.packageId}
            options={packages}
          />
        </div>
        <div className="w-full">
          <p className="font-semibold required">Name</p>
          <Input
            onChange={(e) => setFields({ ...fields, name: e.target.value })}
            value={fields.name ?? ""}
          />
        </div>
        <div className="w-full">
          <p className="font-semibold required">Email</p>
          <Input
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
            value={fields.email ?? ""}
          />
        </div>
        <div className="w-full">
          <p className="font-semibold required">Phone Number</p>
          <Input
            onChange={(e) =>
              setFields({ ...fields, phoneNumber: e.target.value })
            }
            value={fields.phoneNumber ?? ""}
          />
        </div>
        <div className="w-full">
          <p className="font-semibold">Address</p>
          <Input
            onChange={(e) => setFields({ ...fields, address: e.target.value })}
            value={fields.address ?? ""}
          />
        </div>
        <div className="w-full">
          <p className="font-semibold">City</p>
          <Input
            onChange={(e) => setFields({ ...fields, city: e.target.value })}
            value={fields.city ?? ""}
          />
        </div>
        <div className="w-full">
          <p className="font-semibold">State</p>
          <Input
            onChange={(e) => setFields({ ...fields, state: e.target.value })}
            value={fields.state ?? ""}
          />
        </div>
      </div>
      <div className="services mt-4">
        <p className="font-semibold underline">Services</p>
        <Checkbox.Group
          options={services}
          className="flex gap-2 justify-start items-center"
          value={fields.serviceIds}
          onChange={(val) => setFields({ ...fields, serviceIds: val })}
        />
      </div>
      <div className=" mt-4">
        <p className="font-semibold underline">Payment Details</p>
        <div className="flex justify-start items-center  gap-3">
          <Checkbox disabled onChange={() => {}}>
            Is Payment Done
          </Checkbox>
          <Input disabled value={fields.paymentRefId} className="w-1/2" />
        </div>
      </div>
      <div className="buttons flex justify-end items-center m-3 gap-2">
        <p
          onClick={handleUpdate}
          className="bg-[#113150] p-2 text-white rounded-md"
        >
          Save
        </p>
        <p className="bg-[#000] p-2 text-white rounded-md">Cancel</p>
      </div>
      <div className="bg-white shadow-lg shadow-gray-400 mt-10  p-3">
        <p className="font-semibold underline">Partner Company Details</p>
        <p>
          {partnerDetail.isCompanyDetailsVerified === 2 ? (
            <p className="bg-green-600 text-white p-2 rounded-full italic w-20 ">Approved</p>
          ) : partnerDetail.isCompanyDetailsVerified === 1 ? (
            <p className="bg-gray-600 text-white p-2 rounded-full italic w-20 ">Pending</p>
          ) : partnerDetail.isCompanyDetailsVerified === 3 ? (
            <p className="bg-red-600 text-white p-2 rounded-full italic w-20 ">Rejected</p>
          ) : (
            "Not Uploaded Yet"
          )}
        </p>
        <hr className="mt-4" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4 place-items-center">
          <div className="w-full">
            <p className="font-semibold">Company Name</p>
            <p className="border border-gray-400 p-2 rounded-md">
              {partnerDetail?.partnerCompanyDetails?.companyName ?? ""}
            </p>
          </div>
          <div className="w-full">
            <p className="font-semibold">Company PhoneNumber</p>
            <p className="border border-gray-400 p-2 rounded-md">
              {partnerDetail?.partnerCompanyDetails?.companyPhone ?? ""}
            </p>
          </div>
          <div className="w-full">
            <p className="font-semibold">Company PanCard Number</p>
            <p className="border border-gray-400 p-2 rounded-md">
              {partnerDetail?.partnerCompanyDetails?.panCardNumber ?? ""}{" "}
            </p>
          </div>
          <div className="w-full">
            <p className="font-semibold">Company GST Number</p>
            <p className="border border-gray-400 p-2 rounded-md">
              {partnerDetail?.partnerCompanyDetails?.gstNumber ?? ""}
            </p>
          </div>
          <div className="w-full">
            <p className="font-semibold">Address</p>
            <p className="border border-gray-400 p-2 rounded-md">
              {partnerDetail?.partnerCompanyDetails?.address ?? ""}
            </p>
          </div>
          <div className="w-full">
            <p className="font-semibold">City</p>
            <p className="border border-gray-400 p-2 rounded-md">
              {partnerDetail?.partnerCompanyDetails?.city ?? ""}
            </p>
          </div>
          <div className="w-full">
            <p className="font-semibold">State</p>
            <p className="border border-gray-400 p-2 rounded-md">
              {partnerDetail?.partnerCompanyDetails?.state ?? ""}{" "}
            </p>
          </div>
          <div className="w-full">
            <p className="font-semibold">ZipCode</p>
            <p className="border border-gray-400 p-2 rounded-md">
              {partnerDetail?.partnerCompanyDetails?.zipCode ?? ""}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg shadow-gray-400 mt-10  p-3">
        <p className="font-semibold underline">Partner Bank Details</p>
        <p>
          {partnerDetail.isCompanyDetailsVerified === 2 ? (
            <p className="bg-green-600 text-white p-2 rounded-full italic w-20 ">Approved</p>
          ) : partnerDetail.isCompanyDetailsVerified === 1 ? (
            <p className="bg-gray-600 text-white p-2 rounded-full italic w-20 ">Pending</p>
          ) : partnerDetail.isCompanyDetailsVerified === 3 ? (
            <p className="bg-red-600 text-white p-2 rounded-full italic w-20 ">Rejected</p>
          ) : (
            "Not Uploaded Yet"
          )}
        </p>
        <hr className="mt-4" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4 place-items-center">
          <div className="w-full">
            <p className="font-semibold">Bank Name</p>
            <p className="border border-gray-400 p-2 rounded-md">
              {partnerDetail?.partnerBankDetails?.bankName ?? ""}
            </p>
          </div>
          <div className="w-full">
            <p className="font-semibold">Bank IFSC</p>
            <p className="border border-gray-400 p-2 rounded-md">
              {partnerDetail?.partnerBankDetails?.bankIFSC ?? ""}
            </p>
          </div>
          <div className="w-full">
            <p className="font-semibold">Account Holder Name</p>
            <p className="border border-gray-400 p-2 rounded-md">
              {partnerDetail?.partnerBankDetails?.accountHolderName ?? ""}{" "}
            </p>
          </div>
          <div className="w-full">
            <p className="font-semibold">Account Number</p>
            <p className="border border-gray-400 p-2 rounded-md">
              {partnerDetail?.partnerBankDetails?.accountNumber ?? ""}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPartnerDetail;
