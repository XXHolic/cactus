import * as types from '../action-types'
import axios from 'axios'
export default {
    getList () {
        return function (dispatch, getState) {
            return axios.get('https://xxholic.github.io/lab/data/hemeraData.json').then(res=>{
            let {data} = res
            dispatch({
                type: types.GET_LIST,
                payload: data.data
            })
        })
        }
    }
}