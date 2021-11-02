import axios from 'axios';
const API_URL='https://jsonplaceholder.typicode.com/users';
export function submitUserDetail(user,successCallback, errorCallback){
console.log("SampleApp" ,"Request is processing");
axios.post(API_URL, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
       if(successCallback!=null){
       successCallback(res)
       }
      })
      .catch(error=>{
       if(errorCallback!=null){
             errorCallback(error)
             }
      })
}