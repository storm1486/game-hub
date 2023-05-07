import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '4afa39882b854e5296da15176af0b44c'
    }
})