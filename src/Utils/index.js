import { saveAs } from 'file-saver';
import { getExcelSheetOfTxn } from '../services/apiFunctions';

// Get an item from local storage
export const getLocalStorageItem = (key) => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (error) {
      console.error(`Error getting ${key} from local storage: ${error}`)
      return null
    }
  }
  
  // Set an item in local storage
  export const setLocalStorageItem = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error setting ${key} in local storage: ${error}`)
    }
  }
  
  // Remove an item from local storage
  export const removeLocalStorageItem = (key) => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error(`Error removing ${key} from local storage: ${error}`)
    }
  }
   export const clearLocalStorageItem = () => {
    try {
      localStorage.clear()
    } catch (error) {
      console.error(`Error removing data from local storage: ${error}`)
    }
  }
  export const messageConfiguration = (type, message, duration) => {
    return {
      type: type,
      content: message,
      style: { marginTop: '80px' },
      duration: duration,
    }
  }
  export const ExtractDate=(dateString)=>{
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
return formattedDate
  }
  export const ExtractTime=(dateString)=>{
    const date = new Date(dateString);
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second:"2-digit", hour12: true });
return time
  }

export const handleDownloadExcel = (fromDate,toDate,setdisableExport,endpoint) => {
  setdisableExport(true)
  let payload = {
    fromDate,
     toDate,
  };
  getExcelSheetOfTxn(payload,"",endpoint)
    .then((response) => {
      const file = new Blob([response], { type: 'application/octet-stream' });
      saveAs(file, `PW-PayoutTransactions(${new Date(fromDate).toDateString()} - ${new Date(toDate).toDateString()}).xlsx`);
    }).catch((err)=>console.log(err)).finally(()=>setdisableExport(false))
  
  // getExcelSheetOfTxn(payload)
  // .then((response) => {
  //   console.log(response.data,response.headers)
  //   const contentDisposition = response.headers['content-disposition'];
  //   const filenameMatch = contentDisposition && contentDisposition.match(/filename="(.+)"/);
  //   const filename = filenameMatch && filenameMatch.length === 2 ? filenameMatch[1] : `PW-PayoutTransactions(${new Date(fromDate).toDateString()} - ${new Date(toDate).toDateString()})`;

  //   const downloadUrl = URL.createObjectURL(response.data);
  //   const link = document.createElement('a');
  //   link.href = downloadUrl;
  //   link.download = filename;
  //   link.click();

  //   // Clean up the URL object
  //   URL.revokeObjectURL(downloadUrl);
  // })
  // .catch((err) => console.log(err))
  // .finally(() => setdisableExport(false));

};
export const ConvertInRs=(data)=>{
  const numberString =data.toString();
  if(numberString.includes(".")){
return `₹ ${data}`
  }else{
    return `₹ ${data}.00`
  }
}
  