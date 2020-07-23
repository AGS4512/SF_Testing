import React  from 'react';
import axios from "axios";

function App() {


  const url =
  "https://onviant--raven2.my.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG98dostKihXN7ZPVwwATiYU82beIOgo_SRWO2S_gBxF2dBaxRg19rHGIbkS5i.vN.xkFIJql9Y7oyft_Le&client_secret=26AADB44F49FFFBB5A264491265EB1EFB1BEC8BB15AB716F9A9184F901665E88&username=fysician@onviant.com.raven2&password=1234Abcd!";
var req = axios.create({
  headers: {
    "Content-type": "application/json",
  },
});

const createintialApi = () => req.post(url);

const intialApiCall = async () => {
  try {
    const res = await createintialApi();
    console.log("res", res);
    if (res.status === 200) {
      console.log(res.data)
    } else return [];
  } catch (error) {
    console.log(intialApiCall, error);
  }
};
  return (
    <div className="App">
   salesforceTesting
   <button onClick={intialApiCall}>intialApiCall</button>
    </div>
  );
}

export default App;
