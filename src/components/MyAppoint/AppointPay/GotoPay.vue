<template>
	<div class="gotopay">
		<div class="money-box">
			<p class="all">总价：<span>￥{{price}}</span></p>
			<p class="appoint">服务内容：维修保养</p>
		</div>
		<div class="pay-way">
			<p class="way-title">支付方式</p>
			<ul class="way-body" >
				<li class="way-item">
					<label for="WeChat">
						<img class="way-icon" src="../../../assets/wechat.png">
						<div class="way-content">
							<p>微信支付</p>
							<p class="des">推荐已安装微信的用户使用</p>
						</div>
						<div class="radio">
							<input type="radio" id="WeChat" name="way" value="WeChat" v-model="way">
							<span class="radio-img"></span>
						</div>
					</label>
				</li>
				<li class="way-item">
					<label for="Union">
						<img class="way-icon" src="../../../assets/Union.png">
						<div class="way-content">
							<p>银联支付</p>
							<p class="des">支持储蓄卡/信用卡，无需开通网银</p>
						</div>
						<div class="radio">
							<input type="radio" id="Union" name="way" value="Union" v-model="way">
							<span class="radio-img"></span>
						</div>
					</label>
				</li>
			</ul>
		</div>
		<a @click="pay" class="choose-btn" href="javascript:;">确认支付</a>
	</div>
</template>
<script>
	export default {
		name:'gotopay',
		data(){
			return {
				price:'',
				way:'',
				serviceNmber:''
			}
		},
		methods:{
			pay(){
				if(this.way){
					alert(this.way +"订单号" + this.serviceNmber + "支付成功");
					this.$router.push({name:'MyAppoint',query:{serviceNmber:this.serviceNmber}})
				}else{
					alert("请选择支付方式")
				}	
			}
		},
		created(){
			this.price = this.$route.query.price;
			this.serviceNmber = this.$route.query.serviceNmber;
		}
	}
</script>
<style scoped lang="less">
	.money-box{
		background-color:#fff;
		width:94%;
		font-size:20px;
		margin:10px auto;
		padding:33px 0;
		text-align:center;
		box-shadow:0 0 5px #ddd;
		border-radius:4px;
		.all{
			span{
				color: #f15558;
			}
		}
		.appoint{
			font-size:16px;
			margin-top:10px;
			color:#797979;
		}
	}
	.pay-way{
		background-color: #fff;
		border-top:1px solid #f2f2f2;
		.way-title{
			padding:10px 0;
			margin-left:10px;
			border-bottom:1px solid #f2f2f2;
		}
		.way-body{
			padding-left: 10px;
			.way-item{
				padding: 10px;
				padding-left: 0;
				overflow: hidden;
				border-bottom:1px solid #f2f2f2;
				position: relative;
				label{
					display: block;
    				overflow: hidden;
				}
				.way-icon{
					width:73px;
					padding:6px 20px;
					background-color: #ebe8ec;
					border: 1px solid #dcdcdc;
					border-radius:4px;
					float:left;
					margin-right: 10px;
				}
				.way-content{
					float:left;
					.des{
						color: #797979;
						margin-top: 5px;
						font-size: 10px;
					}
				}
				.radio{
					position: absolute;
					right: 10px;
					top: 2px;
					margin: 0;
					input{
						opacity: 0;
					}
					input[type="radio"]:checked + .radio-img{
						background: url('../../../assets/checked.png') no-repeat;
						border: none;
						background-size: cover;
					}
					.radio-img{
						display: block;
						width: 20px;
						height: 20px;
						border: 1px solid #969696;
						border-radius: 360px;
					}
				}
			}
		}
	}

</style>    