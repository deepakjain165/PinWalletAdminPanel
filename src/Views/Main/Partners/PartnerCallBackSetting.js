import { Checkbox, message } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getPartnercallbackDetail,
  getpartnerEvents,
  updatePartnerCallback,
} from "../../../services/apiFunctions";
import { messageConfiguration } from "../../../Utils";

const PartnerCallBackSetting = () => {
  const location = useLocation();
  const [events, setEvents] = useState([]);
  const [callbackDetail, setCallbackDetail] = useState({});
  const [fields, setfields] = useState({
    callback: "",
    isActive: false,
    selectedEvent: [],
  });
const navigate=useNavigate()
  const getEvents = () => {
    getpartnerEvents()
      .then((res) =>
        setEvents(
          res.data.map((i, index) => {
            return { label: i.text, value: i.value };
          })
        )
      )
      .catch((err) => console.log(err));
  };
  const getcallbackDetail = () => {
    getPartnercallbackDetail(location.state.id)
      .then((res) => {
        setCallbackDetail(res.data);
        setfields({
          selectedEvent: res.data.activeEventList,
          callback:res.data.callBackURL,
          isActive: res.data.isActive,
        });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getEvents();
    getcallbackDetail();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleUpload = () => {
    const payload = {
      id: 0,
      partnerId: location.state.id,
      partnerName: callbackDetail.partnerName,
      partnerPhone: callbackDetail.partnerPhone,
      partnerEmail: callbackDetail.partnerEmail,
      callBackURL: fields.callback,
      isActive: fields.isActive,
      activeEventList: fields.selectedEvent,
    };
    updatePartnerCallback(payload).then((res) => {
      if (res.responseCode === 400) {
        message.open(messageConfiguration("error", res.message, 3));
      } else {
        message.open(messageConfiguration("success", res.message, 3));
        navigate("/partners")
      }
    }).catch(err=>console.log(err))
  };
  return (
    <>
      <p className="font-bold text-lg mb-4">Partner CallBack URL Setting</p>
      <hr />
      <div className="flex flex-col gap-y-3">
        <p className="font-semibold underline">Partner Basic Details</p>
        <p>Name : {callbackDetail.partnerName ?? "Loading...."}</p>
        <p>Email : {callbackDetail.partnerEmail ?? "Loading...."}</p>
        <p>Phone : {callbackDetail.partnerPhone ?? "Loading...."}</p>
      </div>
      <hr className="mt-3" />
      <div className="flex justify-around items-center flex-wrap">
        <div>
          <p>CallBack URL</p>
          <input
            name="callback"
            value={fields.callback}
            onChange={(e) => setfields({ ...fields, callback: e.target.value })}
            className="border border-gray-400 h-12  "
          />
        </div>
        <Checkbox
          checked={fields.isActive}
          disabled={false}
          onChange={(val) =>
            setfields({ ...fields, isActive: val.target.checked })
          }
        >
          Enable
        </Checkbox>
      </div>
      <div className="events mt-4">
        <p className="mb-3">Events</p>
        <Checkbox.Group
          defaultValue={fields.selectedEvent}
          options={events}
          value={fields.selectedEvent}
          onChange={(val) => setfields({ ...fields, selectedEvent: val })}
        />
      </div>
      <div className="flex justify-start cursor-pointer items-center gap-3 mt-4">
        <p
          onClick={handleUpload}
          className="bg-[#113150] rounded-sm text-white p-2"
        >
          Save
        </p>
        <p onClick={()=>navigate("/partners")} className="bg-[#000] rounded-sm text-white p-2">Cancel</p>
      </div>
    </>
  );
};

export default PartnerCallBackSetting;
