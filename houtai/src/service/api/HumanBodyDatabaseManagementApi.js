import {
  get,
  post,
  cancelAxiosToken,
  cancelAxiosTokenAll,
  _delete
} from "@/service/xhr/fetch";

export const PhotoWarehouseUploadFun = data => {
  return post("/body/v1/image/store", data);
};
export const HumanBodyFeatureDatabaseCreationFun = (data, token) => {
  return post(`/body/v1/db/vector?token=${token}`, data);
};
export const HumanFeatureExtractionFun = data => {
  return post(`/body/v1/algo/body/feature`, data);
};
export const HumanCharacterBankInsertFun = (data, userName, token) => {
  return post(`/body/v1/db/vector/${userName}/vec?token=${token}`, data);
};

export const ListsAllElementsOfTheFeatureLibrary = (
  userName,
  token,
  data,
  per_page = 200,
  page = 0,
  offset = 0
) => {
  return get(
    `/body/v1/db/vector/${userName}/vec?offset=${offset}&per_page=${per_page}&page=${page}&token=${token}`,
    data
  );
};

export const ImageWarehouseAcquisitionFun = (userName, data) => {
  return get(`/body/v1/image/store/${userName}`, data);
};
export const HumanCharacterLibraryRemovesElements = (element, userName, token, data) => {
  return _delete(
    `/body/v1/db/vector/${userName}/vec/${element}?token=${token}`,
    data
  );
};
export const listAllFeatureLibrariesFun = token => {
  return get(`/body/v1/db/vector?token=${token}`);
};
export const DeleteImageFun = (ID, UserId, data) => {
  return _delete(`/body/v1/image/store/${UserId + ID}`, data);
};
export const DeleteImageVideoLibraryInsertFunction = (ID, data) => {
  return _delete(`/body/v1/image/store/${ID}`, data);
};

export const CreateHumanBodyLibraryFromImageClassMaterialFun = (data, token) => {
  return post(`/body/v1/task/body?token=${token}`, data);
};
export const human_body_search_element = (data, userName, token) => {
  return post(`/body/v1/db/vector/${userName}/vec/search?token=${token}`, data);
};
export const get_current_user_task = (token) => {
  return get(`/body/v1/task/body?token=${token}`);
};
export const get_current_task_running_state = (ID, token) => {
  return get(`/body/v1/task/body/${ID}?token=${token}`);
};

