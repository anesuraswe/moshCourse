import apiClient from "./api-client";



class HttpService {
  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>("/users", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  deleteUser(id: number) {
   return apiClient.delete("/users/" + id)
  }

  createUser(user: User) {
   return apiClient.post("/users/", user)
  }

  updateUser(user: User) {
     return apiClient.patch("/users/" + user.id, user)
  }
}

export default new HttpService();
