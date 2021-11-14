import axiosInstance from './axiosInstance';

class Question {
  static async getAll() {
    return axiosInstance.get('/question/all').then((res) => res.data);
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
      .delete('/question'+id, {
        
      })
      .then((res) => res.data);
  }

  
}




export default Question;
