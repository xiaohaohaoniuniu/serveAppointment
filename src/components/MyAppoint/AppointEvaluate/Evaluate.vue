<template>
	<div class="evaluate">
		<div class="repair-box">
			<img class="repair-img" src="../../../assets/repair.jpg">
			<p>{{repairNow.repairName}}</p>
			<p class="des">{{repairNow.repairAddress}}</p>
		</div>
		<!-- 维修星星 -->
		<ul class="starbox">
			<!-- 写成两个定位，点击获取当前点击星星的索引，如果是2的话就把前3个点亮 -->
			<li>
				<span class="wx-evaluate">维修质量满意度</span>
				<div class="star nostar">
					<template v-for="(index,n) in 5">
						<img @click="grayChoose(index)" src="../../../assets/star0.png">
					</template>
				</div>
				<div class="star choosestar">
					<template v-for="(index,n) in this.wxStarCount">
						<img @click="yellowChoose(index)" src="../../../assets/star1.png">
					</template>
				</div>
			</li>
			<li>
				<span class="wx-evaluate">服务满意度</span>
				<div class="star nostar">
					<template v-for="(index,n) in 5">
						<img @click="grayChooseFw(index)" src="../../../assets/star0.png">
					</template>
				</div>
				<div class="star choosestar">
					<template v-for="(index,n) in this.fwStarCount">
						<img @click="yellowChooseFw(index)" src="../../../assets/star1.png">
					</template>
				</div>
			</li>
		</ul>
		<!-- 填写评价 -->
		<div class="word">
			<p>填写评价</p>
			<textarea v-model="leaveWord" placeholder="您对本次的维修满意吗？有什么想说的请给我们留言"></textarea>
		</div>
		<a @click="evaluate" href="javascript:;" class="choose-btn">确认提交</a>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name:'evaluate',
		data(){
			return {
				wxStarCount:0,//选了几颗星
				fwStarCount:0,//选了几颗星
				leaveWord:'',
				repairId:'',
				serviceNmber:''
			}
		},
		computed:{
			repairNow(){
				var repairList = this.$store.state.repairList;
				var repairNow = this.$store.state.repairIdNow;
				var repair = repairList.filter(function(item) {
					return item.repairId == repairNow
				});
				this.repairId == repairNow
				return repair[0]
			}
		},
		methods:{
			grayChoose(index){
				this.wxStarCount = index
			},
			yellowChoose(index){
				this.wxStarCount = index
			},
			grayChooseFw(index){
				this.fwStarCount = index
			},
			yellowChooseFw(index){
				this.fwStarCount = index
			},
			evaluate(){
				if(this.wxStarCount==0 || this.fwStarCount == 0){
					alert("请点击评价小星星")
				}else{
					var evaluateNow = {
						repairId:this.repairNow.repairId,
						wxStarCount:this.wxStarCount,
						fwStarCount:this.fwStarCount,
						leaveWord:this.leaveWord
					};
					axios.post('/evaluateList.json',evaluateNow)
					.then(res=>{
						// 待评价改成已完成
						// 跳到我的预约页面
						this.$router.push({name:'MyAppoint',query:{'serviceId':this.serviceNmber}})
					})
				}
			}
		},
		created(){
			this.serviceNmber = this.$route.query.serviceNmber;
		}
	}
</script>
<style scoped lang="less">
.repair-box{
	margin-top:10px;
	background-color:#fff;
	overflow:hidden;
	padding:10px;
	.repair-img{
		width:85px;
		float:left;
		margin-right:10px;
	}
	.des{
		color:#797979;
		margin-top:10px;
	}
	
}
.starbox{
	background-color:#fff;
	margin-top:10px;
	overflow:hidden;
	li{
		padding:16px 10px;
		overflow:hidden;
		position:relative;
		border-bottom: 1px solid #f2f2f2;
	}
	.wx-evaluate{
		float:left;
		margin-right:10px;
		max-width: 40%;
	}
	.star{
		width: auto;
		position: absolute;
		left: 40%;
		top: 50%;
		margin-top: -10px;
	}
	.star img{
		width:20px;
		height:20px;
		float:left;
		margin-right:5px;
		margin-top:-2px;
	}
	.nostar{

	}
}
.word{
	p{
		color: #797979;
		padding: 16px 10px;
		font-size: 16px;
	}
	textarea{
		width: 100%;
		height: 150px;
		background-color: #fff;
		outline: none;
		padding: 10px;
		border: 0 none;
	}
}
</style>