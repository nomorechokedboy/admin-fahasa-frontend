import axios from "axios";
import { axiosConfigs } from "./config";

const axiosClient = axios.create(axiosConfigs);

export default axiosClient;
