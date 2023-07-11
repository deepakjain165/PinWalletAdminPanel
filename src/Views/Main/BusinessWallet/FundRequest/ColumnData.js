import { BankFilled, EyeFilled } from "@ant-design/icons";
import { ConvertInRs, ExtractDate, ExtractTime } from "../../../../Utils/index";
import { Tooltip } from "antd";

export const columns = () => {
  return [
    {
      title: "Sr No",
      dataIndex: "sno",
    },
    {
      title: "Partner",
      dataIndex: "partnerName",
      render: (text, record) => (
        <div className="text-xs">
          <p>{text}</p>
          <p>{record.partnerEmail}</p>
        </div>
      ),
      sorter: (a, b) => a.partnerName.localeCompare(b.partnerName),
      sortDirections: ["ascend"],
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <p
          className={`${
            text === 2 ? "bg-[#31ce36]" : text === 3 ? "bg-red-600" : "bg-black"
          } text-[10px] italic text-center text-white px-2 rounded-full`}
        >
          {text === 2 ? "ACCEPTED" : "REJECTED"}
        </p>
      ),
      // filterDropdown:({ setSelectedKeys, selectedKeys, confirm })=>(
      //   <div>
      //      <Select
      //                 placeholder="Select Status"
      //                 value={selectedKeys[0]}
      //                 className="w-full"
      //                 onChange={(val)=>getAllTransaction(numberOfData,start)}
      //                 onSelect={confirm}
      //                 allowClear
      //       >
      //       <Option value="">All</Option>
      //       <Option value="success">Success</Option>
      //       <Option value="failed">Failed</Option>
      //       <Option value="pending">Pending</Option>

      //       </Select>
      //   </div>
      // ),
    },
    {
      title: "Fund Amount",
      dataIndex: "fundAmount",
      render: (text) => <p className="w-24 uppercase">{ConvertInRs(text)}</p>,
    },
    {
      title: "PinWalletReferenceId",
      dataIndex: "pinWalletReferenceId",
    },
    {
      title: "From Bank",
      dataIndex: "fromBank",
      render: (text) => <p className="w-16">{text}</p>,
    },
    {
      title: "To Bank",
      dataIndex: "toBank",
      render: (text) => (
        <Tooltip
          color="gray"
          placement="bottomLeft"
          title={
            <>
              <p>Bank :{text.bank}</p>
              <p>IFSC :{text.ifsc}</p> <p>Holder :{text.holder}</p>{" "}
              <p>Acc. No. :{text.acNumber}</p>{" "}
              <p>Acc. Type :{text.accountType}</p>
            </>
          }
        >
          <BankFilled />
        </Tooltip>
      ),
    },
    {
      title: "Proof",
      dataIndex: "paymentProofPath",
      render: (text) => (
        <a
          href={`https://app.pinwallet.in/user-content/${text}`}
          target="_blank" rel="noreferrer"
        >
          <p className="py-1 cursor-pointer text-md bg-blue-500 text-white rounded-md flex justify-center items-center">
            <EyeFilled />
          </p>
        </a>
      ),
    },
    {
      title: "Remark",
      dataIndex: "remark",
      render: (text) => <textarea disabled>{text}</textarea>,

    },
    {
      title: "Message",
      dataIndex: "message",
      render: (text) => <textarea disabled>{text}</textarea>,
    },
    {
      title: "Actions",
      dataIndex: "",
    },
    {
      title: "Reference ID",
      dataIndex: "referenceId",
    },
    {
      title: "Deposit Date",
      dataIndex: "depositDate",
      render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
    },

    {
      title: "Requested On",
      dataIndex: "requestedOn",
      render: (text) => (
        <p className="uppercase">
          {ExtractDate(text)} {ExtractTime(text)}{" "}
        </p>
      ),
    },

    {
      title: "Latest UpdatedOn",
      dataIndex: "latestUpdatedOn",
      render: (text) => (
        <p className="uppercase">
          {ExtractDate(text)} {ExtractTime(text)}{" "}
        </p>
      ),
    },
  ];
};
