import { GitHubClient } from "./axiosInstance";

export const fetchGitProfiles = async (payload: any) => {
  const response = await GitHubClient.get(
    `/search/users?q=${payload?.query}&page=${payload?.page}&per_page=${payload?.per_page}`
  );
  return response;
};
