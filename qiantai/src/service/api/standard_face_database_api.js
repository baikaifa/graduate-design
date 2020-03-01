import { get, post, _delete } from "@/service/xhr/fetch";
import { str_to_base64 } from '../../utils/utils'

export const get_face_database = (token) => {
    return get(`/face/v1/db/vector?token=${token}`)
}
export const get_database_information = (per_page, page, which_database, token) => {
    return get(`/face/v1/db/vector/${which_database}/vec?per_page=${per_page}&token=${token}&page=${page}`)
}
export const save_face_store = (params, token) => {
    return post(`/face/v1/db/vector?token=${token}`, params)
}
export const get_face_store_information = (item, per_page, token) => {
    return get(`/face/v1/db/vector/${item}/vec?token=${token}&per_page=${per_page}`)
}

export const del_faceStore_name = (nowChoseWhichFaceStore, token) => {
    return _delete(`/face/v1/db/vector/${nowChoseWhichFaceStore}` + "?token=" + token)
}
export const insert_to_databse = (nowChoseWhichFaceStore, token, data) => {
    return post(`/face/v1/db/vector/${nowChoseWhichFaceStore}/vec` + "?token=" + token, data)
}
export const storage_img = (token, data) => {
    return post(`/face/v1/image/store` +
        "?token=" +
        token,
        data)
}

export const ListsAllElementsOfTheFeatureLibrary = (
    userName,
    token,
    data,
    per_page = 200,
    page = 0,
    offset = 0
) => {
    return get(
        `/face/v1/db/vector/${userName}/vec?offset=${offset}&per_page=${per_page}&page=${page}&token=${token}`,
        data
    );
};

export const face_search_element = (data, userName, token) => {
    return post(`/face/v1/db/vector/${userName}/vec/search?token=${token}`, data);
};

export const HumanCharacterLibraryRemovesElements = (element, nowChoseWhichFaceStore, token, data) => {
    return _delete(
        `/face/v1/db/vector/${nowChoseWhichFaceStore}/vec/${element}?token=${token}`,
        data
    );
};

export const DeleteImageVideoLibraryInsertFunction = (ID, data) => {
    return _delete(`/face/v1/image/store/${ID}`, data);
  };