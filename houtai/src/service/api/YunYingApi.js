import { get, post } from "@/service/xhr/fetch";


export const getDeviceList = (data) => {
    return get(`/yunYing/v1/api/ai/devices?pageNum=1&pageSize=100`, data);
}
export const search = (data, token) => {
    return post(`/yunYing/v1/api/person/passerby/search?token=${token}`, data);
}
export const searchImgSrc = (imgSrc, token) => {
    return get(`/yunYing/v1/api/ai/passerby/image?imgSrc=${imgSrc}&token=${token}`);
}

