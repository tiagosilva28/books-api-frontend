/* import { useState } from "react";


const token = sessionStorage.getItem("token");



export const useUserData = () => {
  const [userData, setUserData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  };
  fetch(`http://5.22.217.225:8081/api/v1/user/profile`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      setUserData(data.data);
    })
    .catch((error) => {
      console.error(error);
      setErrorMessage("An error occurred while authenticating.");
    });
    return ({userData, setUserData});
};

export default useUserData; */