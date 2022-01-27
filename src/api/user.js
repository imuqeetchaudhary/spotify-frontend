import { api } from "./api";

export function userRegister(data) {
  return api.post("/user/register", data);
}

export function userLogin(data) {
  return api.post("/user/login", data);
}
