<template>
	<div class="appoint">
		<ul class="appoint-nav">
			<li>
				<router-link :to="{name:'AppointAll'}">
					<span class="appoint-icon one">
						
					</span>
					<p>所有预约</p>
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'AppointPay'}">
					<span class="appoint-icon two">
						<font v-if="!!payCount">{{payCount}}</font>
					</span>
					<p>待付款</p>
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'AppointIng'}">
					<span class="appoint-icon three"><font v-if="!!ingCount">{{ingCount}}</font></span>
					<p>进行中</p>
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'AppointEvaluate'}">
					<span class="appoint-icon four"></span>
					<p>待评价</p>
				</router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name:'appoint',
		data(){
			return {
			}
		},
		computed:{
			payCount(){
				return this.$store.state.payCount
			},
			ingCount(){
				return this.$store.state.ingCount
			}
		},
		components:{
			
		},              
		created(){
			axios.get('/appointList.json')
			.then(res=>{
				var appointList = [];
				if(res.data){
					for(var k in res.data){
						res.data[k].appointId = k;
						appointList.push(res.data[k]);
					}
				}else{
					appointList = []
				}
				
				// 得到付款页面传参
				var FkserviceNmber = this.$route.query.serviceNmber;
				if(FkserviceNmber){
					var changeState = appointList.filter(function(index) {
						// console.log(index.serviceNmber)
						return index.serviceNmber == FkserviceNmber;
					});
					changeState[0].state = "进行中";
					// console.log(changeState)
					// 先删除
					axios.delete('/appointList/' + changeState[0].appointId + ".json")
					.then(res=>{
						console.log('删除成功')
					})
					// 然后在写入
					axios.post('/appointList.json',changeState[0])
					.then(res=>{
						console.log("写入成功");
					})
				}

				// 得到评价页面传参
				var PjServiceNmber = this.$route.query.serviceId;
				console.log(PjServiceNmber);
				
				// 
				// 
				// 
				// 最后将改变后的值写入
				this.$store.commit('appointList',appointList);
			})	
		}
	}
</script>
<style scoped lang="less">
	 .appoint-nav{
    	display: flex;
    	background-color: #FFF;
    	li{
    		flex: 1;
    		text-align: center;
    		
    	}
    	a{
    		width: 100%;
    		height: 100%;
    		display: inline-block;
    		color: #323232;
    		padding:15px 0;
    	}
    	/* 选中变图 */
    	a.router-link-active{
    		color: #2fbe9a;
    	}
		a.router-link-active .appoint-icon{
			background-position: bottom center !important;
		}
    	.appoint-icon{
    		display: block;
    		width: 24px;
    		height: 21px;
    		margin: 0 auto;
    		background-position: top center;
    		position: relative;
    	}
    	.appoint-icon font{
    		padding: 0px 4.5px;
		    font-size: 10px;
		    text-align: center;
		    line-height: 15px;
		    background-color: red;
		    color: #fff;
		    border-radius: 360px;
		    position: absolute;
		    right: -5px;
		    top: -5px;
    	}
    	.one{
			background: url('../../assets/appoint-all.png') no-repeat;
			background-size: cover;
		}
		.two{
			background: url('../../assets/appoint-dfk.png') no-repeat;
			background-size: cover;
		}
		.three{
			background: url('../../assets/appoint-jxz.png') no-repeat;
			background-size: cover;
		}
		.four{
			background: url('../../assets/appoint-pj.png') no-repeat;
			background-size: cover;
		}
    }
</style>
