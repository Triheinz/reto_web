import axios from "axios";

export default class PhoneService{
  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/telefonos`,
      withCredentials:true,
    });
  }
  getPhones = (data)=> this.instance.get("/", data);
}
