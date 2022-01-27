import { api } from "./api";

export const createTrack = (data) => {
  return api.post("/tracks", data);
};
