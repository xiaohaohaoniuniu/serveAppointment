import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		repairList:[],
		repairIdNow:'',
		chooseTimeNow:'',
		addAddrNew:'',
		addrList:[]
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
			console.log(state.addAddrNew)
		},
		addrList(state,data){
			state.addrList = data
		},
		addrDel(state,data){
			var index = state.addrList.indexOf(data);
			state.addrList.splice(index,1)
		}
	}
})
export {store}