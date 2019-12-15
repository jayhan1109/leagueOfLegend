import axios from 'axios';

export const CHALLENGER_SUCCESS = "rank/CHALLENGER_SUCCESS";
export const CHALLENGER_FAIL = "rank/CHALLENGER_FAIL";

export const getChallenger=()=>async dispatch=>{

    try {
        const res = await axios.get('/api/challenger');
    dispatch({
        type:CHALLENGER_SUCCESS,
        payload:res.data
    })
    } catch (err) {
        dispatch({
            type:CHALLENGER_FAIL
        })
    }

}


const initialState={
    loading:true,
    challenger:null
}

export default function rank(state=initialState,action){
    const {type,payload} = action;

    switch (type) {
        case CHALLENGER_SUCCESS:
            return {
                ...state,
                loading:false,
                challenger:payload
            }
        case CHALLENGER_FAIL:
            return{
                ...state,
                loading:false,
            }
    
        default:
            return state;
    }
}