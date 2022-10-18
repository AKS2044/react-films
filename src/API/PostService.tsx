import axios from "axios";

export default class PostService {
    static async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
        return response;
    }

    // static async getById(id) {
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/photos/' + id)
    //     return response;
    // }

    // static async getCommentsByPostId(id) {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    //     return response;
    // }
}