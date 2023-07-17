import { ExtractDate } from "../../../../Utils/index";
import { Input } from "antd";
export const columns = (handleAmoutChange) => {
  return [
    {
      title: "Id",
      dataIndex: "sno",
    },
    {
      title: "Service Name",
      dataIndex: "serviceName",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (text, record) => (
        <div>
          <Input
            min={0}
            value={text}
            type="number"
            className="w-1/2"
            onChange={(e) => handleAmoutChange(record, e.target.value)}
          />
          {record.isFlat ? <span>Rs.</span> : <span>%</span>}
        </div>
      ),
    },

    {
      title: "Created On",
      dataIndex: "createdOn",
      render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
    },
    {
      title: "Updated On",
      dataIndex: "latestUpdatedOn",
      render: (text) => <p className="uppercase">{ExtractDate(text)}</p>,
    },
  ];
};
