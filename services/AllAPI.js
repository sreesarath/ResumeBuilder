import CommonApi from "./CommonApi";
import BaseUrl from "./servUrl";




// add resume=post
export const addResume=async(resume)=>{
return await    CommonApi('POST',`${BaseUrl}/resume`,resume)


}

// edit resume=put

// add history=post
export const addDownloadHistAPI=async(resume)=>{
return await    CommonApi('POST',`${BaseUrl}/history`,resume)


}
// get history=get
export const getAllHistAPI=async()=>{
return await    CommonApi('GET',`${BaseUrl}/history`,{})


}
// delete history=delete

export const deleteHistAPI=async(id)=>{
    return await CommonApi('DELETE',`${BaseUrl}/history/${id}`,{})
}
//get single resume api
export const getSingleResumeAPI=async(id)=>{
return await    CommonApi('GET',`${BaseUrl}/history/${id}`,{})
}