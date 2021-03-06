import { api } from "./api";

export const createTrack = (data) => {
  return api.post("/tracks", data);
};

export const getAllTracks = () => {
  return api.get("/tracks");
};

export const getAllMyPublishedTracks = () => {
  return api.get("tracks/for-publisher");
};

export const deleteTrack = (id) => {
  return api.delete(`/tracks/${id}`);
};

export const getSingleTrack = (id) => {
  return api.get(`/tracks/${id}`);
};
