import { ExtractDate, ExtractTime } from "../../../../Utils";

export const columns = [
    {
      title: "Id",
      dataIndex: "sno",
    },
    {
      title: "Service",
      dataIndex: "moveService",

    },
    {
      title: "Move To",
      dataIndex: "moveTo",
  
    },
    {
      title: "Add Date",
      dataIndex: "addDate",
      render:(text)=><p className="upperCase">{ExtractDate(text)}{""} @ {""} {ExtractTime(text)}</p> 
    },
    {
      title: " Update Date",
      dataIndex: "updateDate",
      render:(text)=><p className="upperCase">{ExtractDate(text)}{""} @ {""} {ExtractTime(text)}</p>
    },
 
  ];