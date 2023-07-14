import React, { useEffect,useState } from 'react';
import { Modal } from 'antd';
import { getChargeBackrrnDetails } from './ApiFun';
import { ConvertInRs, ExtractDate, ExtractTime } from '../../../../Utils';

const RrnDetailModal = ({openModal,setOpenModal,rrnno}) => {

const[details,setDetails]=useState({})
  const handleOk = () => {
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };
  useEffect(()=>{
getChargeBackrrnDetails(rrnno).then(res=>setDetails(res.data)).catch(err=>console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <Modal footer={null} title={`Rrn Details ${rrnno}`} open={openModal} onOk={handleOk} onCancel={handleCancel}>
        <div className='flex flex-col gap-y-6' >
        <div className='grid grid-cols-2 place-items-start'>
          <p className='font-bold uppercase'>From</p>
          <p>{details.from? details.from:"Loading...."}</p>
        </div>
        <div className='grid grid-cols-2 place-items-start'>
          <p className='font-bold uppercase'>To</p>
          <p>{details.to? details.to:"Loading...."}</p>
        </div>
        <div className='grid grid-cols-2 place-items-start'>
          <p className='font-bold uppercase'>Payer Amount</p>
          <p>{details.payerAmount?ConvertInRs(Number(details.payerAmount)):"Loading...."}</p>
        </div>
        <div className='grid grid-cols-2 place-items-start'>
          <p className='font-bold uppercase'>Date</p>
          <p>{ details.date?ExtractTime(details.date) +" "+ ExtractDate(details.date):"Loading...."}</p>
        </div>
        </div>
        <div className='text-right'>
          <button onClick={()=>setOpenModal(false)} className='bg-[#113150] p-3 rounded-md text-white'>Close</button>
        </div>
      </Modal>
    </>
  );
};

export default RrnDetailModal;