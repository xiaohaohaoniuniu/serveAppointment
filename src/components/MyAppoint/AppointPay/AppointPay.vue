<template>
	<div class="pay">
		<ul class="appointList" v-if="AppointEvaluateList.length>0">
			<li v-for="appoint in AppointEvaluateList">
				<p class="appoint-code">
					预约ID号：{{appoint.serviceNmber}} 
					<span>{{appoint.state}}</span>
				</p>
				<div class="price">
					<p>项目：{{appoint.project}}</p>
					<p>总价：<span>￥{{appoint.price}}</span></p>
				</div>
				<div class="appoint-btn">
					<a @click="pay(appoint)" class="complete" href="javascript:;">{{appoint.state}}</a>
					<a class="again-appoint" href="javascript:;">再次预约</a>
				</div>
			</li>
		</ul>
		<div class="noitem" v-else>
			暂无待付款的预约
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name:'pay',
		data(){
			return {
				state:'待付款'
			}
		},
		computed:{
			AppointEvaluateList(){
				var appointList = this.$store.state.appointListData;
				var AppointEvaluateData = appointList.filter(function(item) {
						return item.state == this.state;
					}.bind(this));
				this.$store.commit('PayCount',AppointEvaluateData.length)
				return AppointEvaluateData;
			}
		},
		methods:{
			pay(appoint){
				this.$router.push({name:'GotoPay',query:{"serviceNmber":appoint.serviceNmber,'price':appoint.price}})
			}
		}
	}
</script>
<style scoped lang="less" src="../../../../static/css/MyAppoint.less">
	
</style>