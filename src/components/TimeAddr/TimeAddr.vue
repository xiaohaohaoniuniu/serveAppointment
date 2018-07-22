<template>
	<div class="timeaddr">
		<ul class="choose-box">
			<li @click="addAddr" class="addAddr">
				{{NowAddr}}
				<span>&gt;</span>
			</li>
			<li @click="addTime">
				{{Nowtime}}
				<span>&gt;</span>
			</li>
		</ul>
		<textarea class="leaveword" placeholder="如有其他要求请留言">
		</textarea>
		<!-- 立即预约 -->
		<a @click="appoint" class="choose-btn" href="javascript:;">立即预约</a>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name:'timeAddr',
		data(){
			return {
				// choosetime:'',
				// addAddrNew:''
				// chooseAddr:''
			}
		},
		computed:{
			Nowtime(){
				if(this.$store.state.chooseTimeNow){
					return this.$store.state.chooseTimeNow
				}else{
					return "请选择时间"
				}
			},
			NowAddr(){
				var addr;
				if(this.$store.state.addAddrNew){
					addr = this.$store.state.addAddrNew.area + " " + this.$store.state.addAddrNew.detailAddr + "------" +　this.$store.state.addAddrNew.name;
				}else{
					addr = "请添加/选择地址"
				}
				console.log(addr);
				return addr;
			}
		},
		methods:{
			addAddr(){
				// 判断，如果有地址就跳到ChooseAddr
				// 没有就跳到AddAddr
				axios.get('/addrList.json')
				.then(res=>{
					var data = res.data;
					var addrList = []
					for(var k in data){
						data[k].addrId = k;
						addrList.push(data[k]);
					}
					if(addrList.length > 0){
						this.$router.push({name:'ChooseAddr'})
					}else{
						this.$router.push({name: 'AddAddr'})
					}
				})
				.catch(err=>{
					console.log(err)
				})
				
			},
			addTime(){
				this.$router.push({name:'ChooseTime'})
			},
			appoint(){
				this.$router.push({name:'MyAppoint'})
			}
		},
		created(){
			
		}
	}
</script>
<style scoped lang="less">
	.choose-box{
		background-color: #fff;
		border-top: 1px solid #f2f2f2;
		border-bottom: 1px solid #f2f2f2;
		padding-left: 10px;
		overflow:hidden;
		margin-top: 10px;
		li{
			padding: 10px 10px 10px 0;
			span{
				float: right;
				color: #797979;
			}
		}
		.addAddr{
			border-bottom: 1px solid #f2f2f2;
		}
	}
	.leaveword{
		width: 100%;
		height: 80px;
		padding: 10px;
		background-color: #fff;
		border: none;
		border-top: 1px solid #f2f2f2;
		border-bottom: 1px solid #f2f2f2;
		margin-top: 10px;
		outline: none;
	}
</style>