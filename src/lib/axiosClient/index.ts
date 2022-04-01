import axios from "axios";
import { axiosConfigs } from "./config";

export const axiosClient = axios.create(axiosConfigs);
