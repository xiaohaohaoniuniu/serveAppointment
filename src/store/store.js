import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		repairList:[],
		repairIdNow:'',
		chooseTimeNow:'',
		addAddrNew:''
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
		}
	}
})
export {store}