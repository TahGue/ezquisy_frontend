import axiosInstance from './axiosInstance';

class Question {
  static async getAll() {
    return axiosInstance.get('/question/all').then((res) => res.data);
  }

  static async adminGetAll() {
    return axiosInstance.get('/question/admin/all').then((res) => res.data);
  }
  static async getByCategory(id) {
    return axiosInstance
      .get('/question/category', {
        params: { id: id },
      })
      .then((res) => res.data);
  }

  static async deleteByid(id) {
    return axiosInstance
      .delete('/question', {
        params: {
          id: id,
        },
      })
      .then((res) => res.data);
  }

  static async insert(data) {
    return axiosInstance.post('/question', data).then((res) => res.data);
  }

  static async update(data) {
    return axiosInstance.put('/question', data).then((res) => res.data);
  }
}

export default Question;
