import { userlog, getuserlogstatus,userdetail } from '../service/servers'
import Cookies from 'js-cookie'
export default {
    namespace: 'userinfo',
    state: {
        userinfo: {
            avatarUrl:'',
            nickname:'默认用户'
        },
        userlogstatus:false,
        userdetail:{}
    },
    reducers: {

        //登录时获取用户信息
        getuserprofile(state, action) {
            const newstate = deepClone(state);
            newstate.userinfo = action.payload
            return newstate
        },
        //更改用户登录状态
        exchangeuserlogstatus(state,action){
            const newstate = deepClone(state);
            newstate.userlogstatus = action.payload
            return newstate
        },
        //已登录时获取用户信息
        getuserdetail(state, action) {
            const newstate = deepClone(state);
            newstate.userdetail = action.payload
            return newstate
        },
        //用户登录状态信息
        logstatus(state, action) {
            const newstate = deepClone(state);
            newstate.userlogstatus = action.payload

            
            return newstate
        },
    },
    effects: {
        //用户登录
        *dolog({ payload }, { call, put }) {
            const result = yield call(userlog, payload)
            if(result.code!=200){
               alert('用户名或密码错误')
            }else{
                //将id设置为cookie
                Cookies.set('uid',result.account.id,{expires:24})
                //设置弹窗不可见
                yield put({
                    type:"recommend/setRegisterVisible",
                    payload:false
                })
                //改变登录状态
                yield put({
                    type: "exchangeuserlogstatus",
                    payload: true
                })
                //更改用户登录信息
                yield put({
                    type: "getuserprofile",
                    payload: result.profile
                })
            }
        },

        //获取用户登录状态
           *dogetuserstatus({ payload }, { call, put }) {
            const result = yield call(getuserlogstatus, payload)
            const status = result.profile?true:false
            // yield put({
            //     type: "getuserprofile",
            //     payload: status
            // })
        },
        //用户登录后获取用户详情
         *dogetuserdetail( {payload} , { call, put }) {
            const result = yield call(userdetail, payload)
            yield put({
                type: "getuserprofile",
                payload: result.profile
            })
            yield put({
                type: "exchangeuserlogstatus",
                payload: true
            })
        }
    }
}

function deepClone(obj) {
    let newobj = JSON.stringify(obj),
        currentObj = JSON.parse(newobj);
    return currentObj
}