import { saveAs } from "file-saver";
import {
  addsurcharge,
  getExcelSheetOfTxn,
  getsurchargeById,
  updatesurcharge,
} from "../services/apiFunctions";
import { message } from "antd";

// Get an item from local storage
export const getLocalStorageItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error getting ${key} from local storage: ${error}`);
    return null;
  }
};

// Set an item in local storage
export const setLocalStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting ${key} in local storage: ${error}`);
  }
};

// Remove an item from local storage
export const removeLocalStorageItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing ${key} from local storage: ${error}`);
  }
};
export const clearLocalStorageItem = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error(`Error removing data from local storage: ${error}`);
  }
};
export const messageConfiguration = (type, message, duration) => {
  return {
    type: type,
    content: message,
    style: { marginTop: "80px" },
    duration: duration,
  };
};
export const ExtractDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};
export const ExtractTime = (dateString) => {
  const date = new Date(dateString);
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  return time;
};

export const handleDownloadExcel = (
  FromDate,
  ToDate,
  setdisableExport,
  endpoint,
  param = ""
) => {
  setdisableExport(true);
  let payload = {
    FromDate,
    ToDate,
  };
  getExcelSheetOfTxn(payload, param, endpoint)
    .then((response) => {
      const file = new Blob([response], { type: "application/octet-stream" });
      saveAs(
        file,
        `PW-PayoutTransactions(${new Date(
          FromDate
        ).toDateString()} - ${new Date(ToDate).toDateString()}).xlsx`
      );
    })
    .catch((err) => console.log(err))
    .finally(() => setdisableExport(false));

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
export const addCommonSurcharge = (payload, endpoint, param = "") => {
  addsurcharge(payload, param, endpoint)
    .then((res) => {
      if (res.responseCode === 200) {
        message.open(messageConfiguration("success", res.message, 3));
      } else {
        message.open(messageConfiguration("error", res.message, 3));
      }
    })
    .catch((err) => console.log(err));
};
export const updateCommonSurcharge = (payload, endpoint, param = "") => {
  updatesurcharge(payload, param, endpoint)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
};
export const getSurchargesById = async (endpoint, param = "") => {
  try {
    const response = await getsurchargeById(param, endpoint);
    return response;
  } catch (error) {
    console.log(error);
  }
};
// export const deleteCommonSurcharge = (payload, endpoint, param = "") => {
//   deletesurcharge(payload, param, endpoint)
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((err) => console.log(err));
// };
export const ConvertInRs = (data) => {
  const numberString = data?.toString();
  if (numberString?.includes(".")) {
    return `₹ ${data}`;
  } else {
    return `₹ ${data}.00`;
  }
};
