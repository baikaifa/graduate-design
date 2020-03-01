import { get, post, put } from "@/service/xhr/fetch";

const LOGIN_URL = "/face/v1/user/login";
const REGISTER_URL = "/face/v1/user";
const AUTHORIZATION_URL = "/face/v1/db/vector";
const MODIFY_URL = "/face/v1/user/password";
const FACELOGIN_URL = "/face/v1/algo/face/feature";
const SEARCHTHING_URL = "/face/v1/db/vector/yunli/vec/search";
const VERIFYTOKEN_URL = "/face/v1/db/vector";
const FACEBIND_URL = "/face/v1/user/face_bind";
const FACETOLOGIN_URL = "/face/v1/user/face_login";
export const FACETOLOGIN = data => {
  return post(FACETOLOGIN_URL, data);
};
export const FACEBIND = (data, token) => {
  return post(FACEBIND_URL + "?token=" + token, data);
};
export const LOGIN = data => {
  return post(LOGIN_URL, data);
};
export const REGISTER = data => {
  return post(REGISTER_URL, data);
};
export const AUTHORIZATION = (token, data) => {
  return get(AUTHORIZATION_URL + "?token=" + token, data);
};
export const MODIFY = (token, data) => {
  return put(MODIFY_URL + "?token=" + token, data);
};
export const FACELOGIN = data => {
  return post(FACELOGIN_URL, data);
};
export const SEARCHTHING = (data, token) => {
  return post(SEARCHTHING_URL + "?token=" + token, data);
};

export const VERIFYTOKEN = token => {
  return get(VERIFYTOKEN_URL + "?token=" + token);
};
export const token_get_user_name = (token, data) => {
  return get(`/body/v1/user?token=${token}`, data);
};
