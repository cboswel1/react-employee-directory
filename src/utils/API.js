import axios from "axios";

// https://randomuser.me/api/?results=200&nat=us

// changed for var export due to eslint error

export const getRandomEmployee = function () {
    return axios.get("https://randomuser.me/api/?results=20&nat=us");
  };
