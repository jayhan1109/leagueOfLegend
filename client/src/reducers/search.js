import axios from 'axios';

export const SEARCH_USER = "search/SEARCH_USER";
export const SEARCH_FAIL = "search/SEARCH_FAIL";

export const findUser=({username})=>async dispatch=>{
    try {

        const config = {
            headers: {
                "Content-Type": "application/json"
              }}
        
        const body=JSON.stringify({username});
        const res = await axios.post('/api/user',body,config);
        dispatch({
            type:SEARCH_USER,
            payload:res.data
        })
        } catch (err) {
            dispatch({
                type:SEARCH_FAIL
            })
        }
}

const initialState={
    loading:true,
    user:null
}

export default function search(state=initialState,action){
    const {type,payload} = action;

    switch (type) {
        case SEARCH_USER:
            return{
                ...state,
                loading:false,
                user:payload
            }
        case SEARCH_FAIL:
            return{
                ...state,
                loading:false,
                user:null
            }
        default:
            return state;
    }
}