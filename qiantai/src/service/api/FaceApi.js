import { get, post, _delete } from "@/service/xhr/fetch";

export const FaceStoreImage = (token, data) => {
  return post(`/face/v1/image/store` + "?token=" + token, data);
};
