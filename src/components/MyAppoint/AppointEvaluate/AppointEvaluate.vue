<template>
	<div class="evaluate">
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
					<a @click="evaluate(appoint)" class="complete" href="javascript:;">{{appoint.state}}</a>
					<a class="again-appoint" href="javascript:;">再次预约</a>
				</div>
			</li>
		</ul>
		<div class="noitem" v-else>
			暂无待评价的预约
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name:'evaluate',
		data(){
			return {
				state:'待评价'
			}
		},
		computed:{
			AppointEvaluateList(){
				var appointList = this.$store.state.appointListData;
				var AppointEvaluateData = appointList.filter(function(item) {
						return item.state == this.state;
					}.bind(this));
				return AppointEvaluateData;
			}
		},
		methods:{
			evaluate(appoint){
				// 加上预约号评价完成以后按钮改成已完成
				this.$router.push({name: 'Evaluate',query:{'serviceNmber':appoint.serviceNmber}})
			}
		}
	}
</script>
<style scoped lang="less" src="../../../../static/css/MyAppoint.less">
	
</style>