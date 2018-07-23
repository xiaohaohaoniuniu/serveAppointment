import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistedstate from 'vuex-persistedstate'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		repairList:[],
		repairIdNow:'',
		chooseTimeNow:'',
		addAddrNew:'',
		addrList:[],
		nowProject:'维修',
		appointListData:[]
	},
	mutations:{
		repairList(state,data){
			state.repairList=data
		},
		NowRepairId(state,data){
			state.repairIdNow=data
		},
		chooseTime(state,data){
			state.chooseTimeNow = data	
		},
		addAddr(state,data){
			state.addAddrNew = data
			// console.log(state.addAddrNew)
		},
		addrList(state,data){
			state.addrList = data
		},
		addrDel(state,data){
			var index = state.addrList.indexOf(data);
			state.addrList.splice(index,1)
		},
		// 当前是维修保养
		project(state,data){
			state.nowProject = data;
		},
		// 我的预约列表
		appointList(state,data){
			state.appointListData = data;
			console.log(state.appointListData)
		},
		// 从TimeAddr过来新加的数据
		addAppointList(state,data){
			state.appointListData.push(data)
		}
	},
	plugins: [VuexPersistedstate()] 
})
export {store}