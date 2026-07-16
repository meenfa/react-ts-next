interface Album{
    userId:number;
    id:number;
    title:string;
}

// fetch req takes time so async
const fetchData = async()=>{
    try {
        // hiting the api endpoint
        const response= await fetch(
            "https://jsonplaceholder.typicode.com/albums/1"
        )
       
       if(!response.ok){
        throw new Error(`HTTP error ${response.status}`);
       }

       // parse json and tell TS its Album type
       const data: Album= await response.json()
        
    }
    catch (error:any) {   
    }
}