// import {getComment,getmusicinfo} from '../service/getmock'
// export default{
//         namespace:'commentHandel',
//         state:{
//         CommentList:[
//             {
//             comment:'天气不错'
//             },
//             {
//                 comment:'天气不错'
//                 },
//                 {
//                     comment:'天气不错'
//                     },
//         ]
//     },
//         reducers:{
//             addComment(state,action){
//                const newstate = deepClone(state);
//                newstate.CommentList.push(action.payload)
//                return newstate
//             }
//         },
//         effects:{
//             *addCommentAsync({payload},{call,put}){
           
//                 const result =yield call(getmusicinfo,payload)
//                 console.log(result)
//             }
//         }
// }
// function deepClone(obj){
//     let newobj=JSON.stringify(obj),
//         currentObj=JSON.parse(newobj);
//     return currentObj
// }