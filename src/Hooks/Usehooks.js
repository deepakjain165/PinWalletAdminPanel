// useCustomState.js
import { useState } from "react";

export const useCustomState = ( apifun,apifunchangstatus=null,data=30 ) => {
  const [start, setStart] = useState(0);
  const [current, setCurrent] = useState(1);
  const [numberOfData, setNumberOfData] = useState(data);
  const [numberOfPAges, setNumberOfPages] = useState(0);
  const [showSpin, setShowSpin] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  const handlepageChange = (page, pagesize) => {
    setCurrent(page);
    setStart((page - 1) * numberOfData);
    const startPage = (page - 1) * numberOfData;
    apifun(numberOfData, startPage);
  };

  const handlechangeStatus = (id) => {
    apifunchangstatus(id)
      .then((res) => {
        apifun(numberOfData, start);
      })
      .catch((err) => console.log(err));
  };

  return {
    handlepageChange,
    start,
    current,
    setNumberOfData,
    numberOfData,
    setNumberOfPages,
    numberOfPAges,
    setShowSpin,
    showSpin,
    dataSource,
    setDataSource,
    handlechangeStatus,
  };
};
