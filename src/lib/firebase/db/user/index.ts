import { FireStore } from "../..";

export const findAllUser = () => FireStore.ref("users");
export const findUserById = (id: string) => FireStore.ref(`users/${id}`);
