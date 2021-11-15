import axiosInstance from './axiosInstance';

class Answer {
  static async getAll() {
    return axiosInstance.get('/answer/all').then((res) => res.data);
  }

  static async adminGetAll() {
    return axiosInstance.get('/answer/admin/all').then((res) => res.data);
  }
  static async getByQuestion(id) {
    return axiosInstance
      .get('/answer/question', {
        params: { id: id },
      })
      .then((res) => res.data);
  }

  static async deleteByid(id) {
    return axiosInstance
      .delete('/answer', {
        params: {
          id: id,
        },
      })
      .then((res) => res.data);
  }

  static async insert(data) {
    return axiosInstance.post('/answer', data).then((res) => res.data);
  }

  static async update(data) {
    return axiosInstance.put('/answer', data).then((res) => res.data);
  }
}

export default Answer;
