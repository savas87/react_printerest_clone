import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',    
    headers: {
        Authorization :'Client-ID 6eab4cafadfaf429c9b6fcfccdf9ce532760d0acad13ea294abbc1e97026821f'
    }

});