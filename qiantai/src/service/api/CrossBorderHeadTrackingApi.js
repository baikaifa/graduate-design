import { get , post } from "@/service/xhr/fetch";
const GET_LIST_URL = "/user.json";
const ADD_ITEM_URL = "";
const DEL_ITEM_URL = "";
const UP_ITEM_URL = "";
const GET_BYID_URL = "";

export const GETLIST = ( data ) => {
    return get(GET_LIST_URL,data);
}
export const ADDITEM = (data) => {
    return post(ADD_ITEM_URL,data);
}
export const UPITEM = (data) => {
    return post(UP_ITEM_URL,data);
}
export const DELITEM = (data) => {
    return post(DEL_ITEM_URL,data);
}
export const GETBYID = (data) => {
    return get(GET_BYID_URL,data);
}