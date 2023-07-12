import React, { useEffect, useState } from "react";
import Header from "../../../../Common/Header";
import { Table, Select,Spin } from "antd";
import { getRechargeCommission } from "../../../../services/apiFunctions";
import { columns } from "./ColumnData";
import { PackageName } from "../../../../Utils/Options";
function RechargeCommission() {
  const [isLoading, setIsLoading] = useState(false);
 const[items,setItems] =useState([]);
  const start = 0; 
  const totalCount = 100;
  const numberOfPAges = 5;
  const [fields, setFields] = useState(
  PackageName[0].value
  );
  const getDetailsRechargeCommission = () => {
    const payload = {
      Sort: {
        Predicate: null,
        Reverse: false,
      },
      Pagination: {
        Start: start,
        TotalItemCount: totalCount,
        Number: 30,
        NumberOfPages: numberOfPAges,
      },
      Search: {
        PredicateObject:
          fields.type !== null && fields.type !== ""
            ? { PackageId: fields }
            : null,
      },
    };
    getRechargeCommission(payload).then((res) => {
      console.log(res, "Recharge Details");
      const filterdData=res.items.map((item,index) =>{
        return {
          ...item,sno:index+1,key:index
        }

      })
     setItems(filterdData);
    });
  };
  useEffect(() => {
    getDetailsRechargeCommission();
  }, [fields]);
  return (
    <div>
      <Header PageName={" Recharge Commission"} />
      <div className="input_fields mt-8">
        <Select
          onChange={(value) => setFields(value)}
          className=" w-1/6  "
          defaultValue={PackageName[0].value}
          options={PackageName}
        />

        <br />
        
      </div>
      {isLoading ? (
        <div className="text-center mt-52">
          <Spin size="md" />
        </div>
      ) : (
      <div className="mt-3">
        <Table 
          className="custom-table overflow-x-scroll text-white "
          columns={columns}
          dataSource={items}
        />
      </div>)}
    </div>
  );
}
export default RechargeCommission;
