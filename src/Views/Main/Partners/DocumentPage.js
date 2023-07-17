import {
  CheckCircleFilled,
  CheckOutlined,
  FileOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Input, Upload, message } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  agreementUpload,
  getDocstatus,
  getPartnerDoc,
} from "./ApiFun";
import { ExtractDate, ExtractTime, messageConfiguration } from "../../../Utils";

const DocumentPage = () => {
  const location = useLocation();
  const [allDoc, setAllDoc] = useState([]);
  const [docStatus, setDocStatus] = useState({});
  const [remark, setRemark] = useState("");
  const [defaultDoc, setDefaultDoc] = useState("");
  const [presentDoc, setPresentDoc] = useState([]);
  console.log(presentDoc, "welfdnwelfjnwefjwe");
  function getAlldoc() {
    getPartnerDoc(location.state.id)
      .then((res) => setAllDoc(res.data))
      .catch((err) => console.log(err));
  }
  function getStaus() {
    getDocstatus(location.state.id)
      .then((res) => {
        setDocStatus(res.data);
        setDefaultDoc(res.data.agreementPath);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getStaus();
    getAlldoc();
   
  }, []);
  const handleImageChange = (file) => {
    // setCustomFileerror(false);
    try {
      const reader = new FileReader();
      reader.onload = () => {
        console.log("image uploaded");
      };
      reader.readAsDataURL(file);
      setPresentDoc([file]);
      console.log(file, "file");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const handleUpload = (file) => {
    const formData = new FormData();
    formData.append("PartnerId", location.state.id);
    formData.append("Remark", null);
    formData.append("file", presentDoc[0]);

    agreementUpload(formData)
      .then((res) => {
        if (res.responseCode === 400) {
          message.open(messageConfiguration("error", res.message, 3));
        } else {
          message.open(messageConfiguration("success", res.message, 3));
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="flex justify-between flex-wrap gap-y-2 items-center">
        <div>
          <div className="flex justify-center flex-wrap items-center gap-1">
            <p>Document Status </p>
            <p className="bg-green-600 text-xs text-white flex  justify-around items-center px-2 py-1 rounded-full font-semibold italic">
              <CheckOutlined /> All{" "}
              {docStatus.isDocumentsVerified === 2 ? "APPROVED" : "PENDING"}
            </p>
          </div>
          <p>Remark : {docStatus.documentsRemark}</p>
        </div>
        <div>
          <div className="flex justify-center items-center gap-1">
            <p>Agreement Status </p>
            <p className="bg-blue-600 text-xs text-white flex justify-around items-center px-2 py-1 rounded-full font-semibold italic">
              {docStatus.isAgreementVerified === 0 ? (
                `Not Uploaded Yet`
              ) : docStatus.isAgreementVerified === 2 ? (
                <p>
                  <CheckOutlined />
                  ALL APPROVED
                </p>
              ) : (
                "UPLOADED"
              )}
            </p>
          </div>
          <p>Remark : {docStatus.agreementRemark}</p>
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-2">
        {docStatus.isDocumentsVerified !== 2 && (
          <div>
            <p className="font-bold italic">Verify Partner Document</p>
            <p className="bg-blue-600 text-white italic text-center w-1/2 p-2 mt-2 rounded-md">
              <CheckCircleFilled className="mb-2" /> Verify
            </p>
          </div>
        )}
        {docStatus.isDocumentsVerified === 2 && (
          <div>
            <p className="font-bold italic">Upload Agreement</p>
            {presentDoc.length === 0 && (
              <a href={defaultDoc ?? ""} rel="noreferrer" target="_blank">
                {" "}
                <p>{defaultDoc ?? ""}</p>
              </a>
            )}
            <Upload
              onRemove={() => setPresentDoc([])}
              customRequest={({ file }) => handleImageChange(file)}
              fileList={[...presentDoc]}
              accept=".pdf"
              className="upload-list-inline cursor-pointer"
            >
              <Button className="mt-2 cursor-pointer" icon={<UploadOutlined />}>
                Click to Upload
              </Button>
            </Upload>
            <p
              onClick={handleUpload}
              className="bg-green-600 cursor-pointer text-white italic p-1 w-1/4 sm:w-full flex justify-center items-center mt-2 rounded-md"
            >
              <FileOutlined /> Upload
            </p>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  place-items-center gap-x-3">
        {allDoc?.map((i, index) => {
          return (
            <>
              <div
                key={index}
                className=" p-4 border border-gray-200 w-full mt-3 bg-white shadow-lg rounded-md shadow-gray-200"
              >
                <p className="bg-green-600 text-xs text-white flex justify-around items-center w-1/2 sm:w-1/4 md:w-1/4 px-2 py-1 rounded-full font-semibold italic">
                  <span>
                    <CheckOutlined className="mb-1" />
                  </span>
                  {i.status === 2
                    ? "APPROVED"
                    : i.status === 1
                    ? "Pending"
                    : i.status === 0
                    ? "Not Uploaded"
                    : "Rejected"}
                </p>
                <div className="grid grid-cols-1  md:grid-cols-2 place-items-baseline mt-2">
                  <div>
                    <p className="text-xs font-bold">
                      <span className="text-sm italic font-semibold">
                        Document Name
                      </span>
                      : {i.documentName}
                    </p>
                    <p className="text-xs font-bold">
                      <span className="text-sm italic font-semibold">
                        Document Type
                      </span>
                      : {i.documentType}
                    </p>
                    <p className="text-xs font-bold">
                      <span className="text-sm italic font-semibold">
                        Document Id Number
                      </span>
                      : {i.documentIdNumber}
                    </p>
                  </div>
                  <div className="flex justify-end flex-col items-end">
                    <p className="text-xs font-bold">
                      <span className="text-sm italic font-semibold">
                        Update Date
                      </span>
                      : {ExtractTime(i.updateDate)} |{ExtractDate(i.updateDate)}
                    </p>
                    <p className="bg-red-500 mt-2 cursor-pointer italic text-xs text-white py-1 w-1/2 rounded-full text-center">
                      View/Download
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Input.TextArea
                    value={i.remark}
                    onChange={(e) => setRemark(i.target.value)}
                  />
                </div>
                <div className="flex justify-around cursor-pointer  mt-2 items-center text-white italic font-semibold">
                  {i.remark === 1 ? (
                    <>
                      {" "}
                      <p className="bg-green-500 p-2 rounded-lg">Approve</p>
                      <p className="bg-red-800 p-2 rounded-lg">Reject</p>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default DocumentPage;
