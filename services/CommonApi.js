import axios from "axios";

const CommonApi=async(httpMethod,url,reqdata)=>{

    const reqconfig={
        method:httpMethod,
        url:url,
        data:reqdata

    }
    return await axios(reqconfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })

}
 export default CommonApi
