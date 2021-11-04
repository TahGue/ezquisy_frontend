import axiosInstance from './axiosInstance';

class Category {
    static async getAll() {
      return axiosInstance.get('/category/all').then((res) => res.data);
    }
  }
  
  export default Category;
  