import axios from 'axios';
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 18dade1ca994379359878505af7e9a0cf02c44ae0b5a54f3f8a3513d3ca78591'   
     }
})