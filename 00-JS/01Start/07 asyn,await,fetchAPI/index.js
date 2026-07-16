//github API
// fetch or axios
// as of now fetch using
const githubAPI = "https://api.github.com/users/ankitkarki27"

const fetchData = async () => {
    // after adding async, time lagney ma await launey
    // also with try catch 
    try {
        const res = await fetch(githubAPI);
        const jsonData = await res.json();
        console.log(jsonData.bio);
    } catch (error) {
        console.log(error);

    }finally{
        console.log("always runs ");
    }

}

fetchData();

// export const name = "Ankit";   