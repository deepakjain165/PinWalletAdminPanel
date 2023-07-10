import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { ConvertInRs, ExtractDate, ExtractTime } from "../../../../Utils/index";

export const columns = [
  {
    title: "Sr No",
    dataIndex: "sno",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (text) => (
        <p
          className={`${
            text === "SUCCESS" ||text=== "ACCEPTED"
              ? "bg-[#31ce36]"
              : text === "FAILED" ||text=== "REJECTED" ||text=== "FAILURE"
              ? "bg-red-600"
              : "bg-red-50"
          } text-[10px] italic text-center ${text==="PENDING" && "text-yellow-500"} text-white px-2 rounded-full font-bold`}
        >
          <span className="flex items-center gap-1  justify-center">{text==="SUCCESS"?<CheckOutlined/>:text==="FAILED"?<CloseOutlined/>:<p className="animate-spin text-[6px]">. .</p>} {text}</span>
        </p>
      ),
  },

  {
    title: "Account",
    dataIndex: "account",
    render: (text, record) => (
      <div className="text-xs">
        <p>{text}</p>
      </div>
    ),
  },
  {
    title: "Recharge Amount",
    dataIndex: "amount",
    render: (text) => <p className="uppercase">{ConvertInRs(text)}</p>,
  },
  {
    title: "Operator Name",
    dataIndex: "operatorName",
  },  {
    title: "Partner",
    dataIndex: "partnerName",
    render: (text, record) => (
      <div className="text-xs">
        <p>{text}</p>
        <p>{record.partnerEmail}</p>
      </div>
    ),
  },
  {
    title: "Time",
    dataIndex: "createdOn",
    render: (text) => <p className="uppercase">{ExtractTime(text)}</p>,
  },
  {
    title: "Created On",
    dataIndex: "createdOn",
    render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
  },
  {
    title: "User Transaction Id",
    dataIndex: "userTransactionId",
  },
  {
    title: "PW Transaction Id",
    dataIndex: "pinWalletTransactionId",
  },
];
