<template>
  <div id="app" class="viewport">
    <router-view/>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'App',
  created(){
    // 修理厂列表
  	axios.get('repairList.json')
  	.then(res=>{
  		// console.log(res.data);
  		var repairList = [];
  		for(var k in res.data){
  			res.data[k].repairId=k;
  			repairList.push(res.data[k])
  		}
  		// console.log(repairList)
  		this.$store.commit('repairList',repairList)
  	})
  }
}
</script>
<style>
	
</style>
