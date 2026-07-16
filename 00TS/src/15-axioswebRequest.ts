// axios,fetch(typing API calls in TS(Type definitions and Axios))

import axios,{AxiosResponse} from 'axios'
// to get more data from axuios add AxiosResponse
interface Album{
    userId:number;
    id:number;
    title:string;
}
// web request takes time so async
const fetchData = async()=>{
    try {
        // axios is generics because the data shud have data type during web request
        const response:AxiosResponse <Album>= await axios. get(
            "https://jsonplaceholder.typicode.com/albums/1"
        )
        console.log("Todo",response.data);
        
    }
    //usually web requests have error as any 
    catch (error:any) {
        // console.log(error.message);
        if(axios.isAxiosError(error)){
            console.log("Axios Error",error.message);
            if(error.response){
                console.log(error.response.status);
                
            }
        }
        
    }
}

// axios.get('https://example.com/data')
// .then (response=>{
//     console.log(response.data);
    
// })

// {
//   "userId": 1,
//   "id": 1,
//   "title": "quidem molestiae enim"
// }