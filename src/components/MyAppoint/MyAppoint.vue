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
					<span class="appoint-icon two"><font>{{payCount}}</font></span>
					<p>待付款</p>
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'AppointIng'}">
					<span class="appoint-icon three"><font>{{ingCount}}</font></span>
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
				this.$store.commit('appointList',appointList)
			})

			var serviceNmber = this.$route.query.serviceNmber;
			console.log(serviceNmber);
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
