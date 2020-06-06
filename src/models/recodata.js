import {getComment,getmusicinfo} from '../service/getmock'
export default{
        namespace:'recommend',
        state:{

        joinedsinger:[

        ],
        musicinfo:[

        ],
        visible:false,
        currentindex:0
    },
        reducers:{
            getmusicinfo(state,action){
               const newstate = deepClone(state);
               newstate.joinedsinger.push(action.payload.joinedsinger.list)
               newstate.musicinfo.push(action.payload.musicinfo.list)
               return newstate
            },
            setVisible(state,action){
                const newstate = deepClone(state);
                newstate.visible=action.payload
                return newstate
            },
            getindex(state,action){
                const newstate = deepClone(state);
                newstate.currentindex=action.payload
                return newstate
             },
        },
        effects:{
            *Asyncgetmusicinfo({payload},{call,put}){
                const result =yield call(getmusicinfo,payload)
               yield put({
                   type:'getmusicinfo',
                   payload:result
               })
            }
        }
}
function deepClone(obj){
    let newobj=JSON.stringify(obj),
        currentObj=JSON.parse(newobj);
    return currentObj
}