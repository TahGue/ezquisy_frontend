import axiosInstance from './axiosInstance';

class User {
  static async getCurrentUser() {
    return axiosInstance.get('/user/current').then((res) => res.data);
  }
  static async update(data) {
    return axiosInstance.put('/user', data).then((res) => res.data);
  }
}

export default User;
