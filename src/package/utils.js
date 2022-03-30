export const key = "uni_server_env";
export const setLocalStorage = (data = {}) => {
  let jsonData = "{}";
  try {
    jsonData = JSON.stringify(data);
    uni.setStorageSync(key, jsonData);
  } catch (error) {
    jsonData = "{}";
    console.log(error);
  }
};

export const getLocalStorage = () => {
  let jsonData = null;
  let data = null;
  try {
    jsonData = uni.getStorageSync(key) || null;
    data = JSON.parse(jsonData);
  } catch (error) {
    data = null;
    console.log(error);
  }
  return data;
};

export function deepClone(obj) {
  let str = "";
  let newobj = obj.constructor === Array ? [] : {};
  if (typeof obj !== "object") {
    return;
  } else if (JSON) {
    str = JSON.stringify(obj); //系列化对象
    newobj = JSON.parse(str); //还原
  } else {
    for (let i in obj) {
      newobj[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return newobj;
}
