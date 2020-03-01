import {
  get,
  post,
  cancelAxiosToken,
  cancelAxiosTokenAll
} from "@/service/xhr/fetch";
const GET_LIST_URL = "/user.json";
const ADD_ITEM_URL = "";
const DEL_ITEM_URL = "";
const UP_ITEM_URL = "";
const GET_BYID_URL = "";

const COMPARE_URL = "/face/v1/algo/face/compare";
const DISTINGUISH_URL = "/face/v1/algo/face/detect";
const HUMANBODY_URL = "/body/v1/algo/body/detect";

const HUMANFACE_URL = "/face/v1/algo/face/detect";
const IMG_DRAW_RECT = "/body/v1/image/mark";

const CARQUAILITY_URL = "/body/v1/algo/custom/detect";

export const TESTCARPICTURE = data => {
  return post(CARQUAILITY_URL, data);
};

export const DRAWRECT = data => {
  return post(IMG_DRAW_RECT, data);
};

export const HUMANBODY = data => {
  return post(HUMANBODY_URL, data);
};

export const HUMANBODYCANCEL = (data, method) => {
  return cancelAxiosToken(HUMANBODY_URL, data, method);
};
export const HUMANFACE = data => {
  return post(HUMANFACE_URL, data);
};

export const COMPAREFACE = data => {
  return post(COMPARE_URL, data);
};

export const DISTINGUISHFACE = data => {
  return post(DISTINGUISH_URL, data);
};

export const GETLIST = data => {
  return get(GET_LIST_URL, data);
};
export const ADDITEM = data => {
  return post(ADD_ITEM_URL, data);
};
export const UPITEM = data => {
  return post(UP_ITEM_URL, data);
};
export const DELITEM = data => {
  return post(DEL_ITEM_URL, data);
};
export const GETBYID = data => {
  return get(GET_BYID_URL, data);
};

