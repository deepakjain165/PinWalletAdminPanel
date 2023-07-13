import React,{useState,useEffect} from 'react'
import CommonLayout from '../../../../Common/CommonLayout'
import PaginationComponent from '../../../../Common/Pagination'
import { useCustomState } from '../../../../Hooks/Usehooks';
import { BusinesswalletTxnPredicate } from '../../../../Utils/Options';
import { TransactionColumn } from './ColumnData';
import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom';
import { GetPartnerTxnbyId } from '../../../../services/apiFunctions';
import { handleDownloadExcel, messageConfiguration } from '../../../../Utils';
import { endpoint } from '../../../../services/global';
import { message } from 'antd';

const TransactionDetail = () => {
    const location=useLocation()
    const {
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
      } = useCustomState(getAllPartnerTxnById);
      const totalCount = 30;
      const [fields, setFields] = useState({
        type: BusinesswalletTxnPredicate[0].value,
        searchString: "",
        fromDate: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
        toDate: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
      });
      const[disableExport,setdisableExport]=useState(false)
      function getAllPartnerTxnById (page, start){
        setShowSpin(true);
        const payload = {
          fromDate: fields.fromDate,
          toDate: fields.toDate,
          smartTable: {
            Pagination: {
              Start: start,
              TotalItemCount: totalCount,
              Number: page,
              NumberOfPages: numberOfPAges,
            },
            Search: {
              PredicateObject:
                fields.searchString !== null && fields.searchString !== ""
                  ? { [fields.type]: fields.searchString }
                  : null,
            },
            Sort: {
            },
          },
        };
        GetPartnerTxnbyId(payload,location.state.id)
          .then((res) => {
            setFields({ ...fields, searchString: "" });
            const filterdData = res.items.map((item, index) => {
              return {...item,sno:index+1}
            });
            setDataSource(filterdData);
            setNumberOfPages(res.numberOfPages);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => setShowSpin(false));
      };
      useEffect(() => {
        getAllPartnerTxnById(numberOfData, start);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      const handleSearchString = () => {
          getAllPartnerTxnById(numberOfData, 0);
      };
      const handledateChange = (date) => {
        const dates = date.map(
          (i) => dayjs(i.$d).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z"
        );
        setFields({ ...fields, fromDate: dates[0], toDate: dates[1] });
      };
      const handleSearch = () => {
        getAllPartnerTxnById(numberOfData, start);
      };
      const handleExport = () => {
        handleDownloadExcel(
          fields.fromDate,
          fields.toDate,
          setdisableExport,
          endpoint.exportTxn,
          location.state.id
        );
        message.open(
          messageConfiguration("success", "Your File will downloaded Shortly!", 5)
        );
      };
  return (
    <>
      <CommonLayout
     PageName={"Transactions"}
      setFields={setFields}
      fields={fields}
      options={BusinesswalletTxnPredicate}
      handleSearchString={handleSearchString}
      handleSearch={handleSearch}
      handledateChange={handledateChange}
      handleExport={handleExport}
      disableExport={disableExport}
      showSpin={showSpin}
      showExport={true}
      columns={TransactionColumn()}
      dataSource={dataSource}
      />
      <PaginationComponent current={current} setNumberOfData={setNumberOfData} numberOfPAges={numberOfPAges} start={start} apiFunction={getAllPartnerTxnById} handlepageChange={handlepageChange} numberOfData={numberOfData}/>

    </>
  )
}

export default TransactionDetail