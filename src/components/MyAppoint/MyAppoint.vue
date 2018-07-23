<template>
	<div class="appoint">
		<ul class="appoint-nav">
			<li>
				<router-link :to="{name:'AppointAll'}">
					<span class="appoint-icon one"></span>
					<p>所有预约</p>
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'AppointPay'}">
					<span class="appoint-icon two"></span>
					<p>待付款</p>
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'AppointIng'}">
					<span class="appoint-icon three"></span>
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
				this.$store.commit('appointList',appointList)
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
    		padding:15px 0;
    	}
    	a{
    		display: inline-block;
    		color: #323232;
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
