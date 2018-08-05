import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistedstate from 'vuex-persistedstate'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		repairList:[],
		repairIdNow:'',
		chooseTimeNow:'',
		addAddrNew:'',//选择地址之后携带的地址详细参数
		editAddrNow:'',
		addrList:[],
		nowProject:'维修',
		appointListData:[],
		payCount:0,
		ingCount:0
	},
	mutations:{
		repairList(state,data){
			state.repairList=data
		},
		NowRepairId(state,data){
			state.repairIdNow=data;
		},
		chooseTime(state,data){
			state.chooseTimeNow = data	
		},
		addAddr(state,data){
			// 从ChooseAddr页面传过来的详细地址
			state.addAddrNew = data;
			// console.log(data)
		},
		editAddr(state,data){
			// 从ChooseAddr页面传过来的
			state.editAddrNow = data;
			console.log(data)
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
		},
		// 从TimeAddr过来新加的数据
		addAppointList(state,data){
			state.appointListData.push(data)
		},
		PayCount(state,data){
			state.payCount = data;
		},
		IngCount(state,data){
			state.ingCount = data;
		}
	},
	plugins: [VuexPersistedstate()] 
})
export {store}