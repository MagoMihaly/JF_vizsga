import axios from "axios";

export const readData = async (URL, setProduct) => {
  const response = await axios.get(URL);
  setProduct(response.data);
};
