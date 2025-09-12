import api from "../../config/axios";

export async function registerUser(_data) {
  try {
    let { data } = await api.post("/auth/register", _data);
    return data;
  } catch (error) {
    return false;
  }
}

export async function userLogin(_data) {
  try {
    let { data } = await api.post("/auth/login", _data);
    return data;
  } catch (error) {
    return false;
  }
}
