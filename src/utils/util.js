import axios from 'axios';

function myaxios(url){
    // axios.get(url).then((res)=>{
    //     console.log(res.data);
    //     return { ...res.data }
    // })
    // .catch(function(error){
    //     console.log(error)
    // }) 


    return new Promise((resolve, reject) => {
        axios.get(url)
        .then(function(response) {
          resolve(response.data)
        })
        .catch(function (err) {
          reject(err)
        })
    })
}
export default myaxios;