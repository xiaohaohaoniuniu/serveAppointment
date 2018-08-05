<template>
	<div class="alldiscuss">
		<ul class="discuss-box">
            <!-- 全部 -->
            <li v-bind:class="{active:!!(this.discuss == 'all')}">
                <label class="select_box" for="maintain">
                    <input id="maintain" class="checkbox01" type="radio" name="service" value="all" v-model="discuss">
                    <p>全部({{allCount}})</p>
                </label>
            </li>
            <!-- 好评 -->
            <li v-bind:class="{active:!!(this.discuss == 'good')}">
                <label class="select_box" for="upkeep">
                    <input id="upkeep" class="checkbox02" type="radio" name="service" value="good" v-model="discuss">
                    <p>好评({{goodCount}})</p>
                </label>
            </li>
            <!-- 差评 -->
            <li v-bind:class="{active:!!(this.discuss == 'bad')}">
                <label class="select_box" for="validate">
                    <input id="validate" class="checkbox03" type="radio" name="service" value="bad" v-model="discuss">
                    <p>差评({{badCount}})</p>
                </label>
            </li>
        </ul>
        <ul class="discuss-body">
        	<li v-for="discuss in filtrate">
        		<p>
        			<span class="phone">{{discuss.phone}}</span>
        			<span class="cost">花费<font>{{discuss.cost}}</font>元</span>
        		</p>
        		<p class="time">{{discuss.time}}</p>
        		<p class="content">
        			{{discuss.content}}
        		</p>
        	</li>
        </ul>
        <div class="nodiscuss" v-show="nodiscuss">暂无评论 ~ </div>
	</div>
</template>
<script>
	import axios from 'axios'
	/*var discussList = [
		{'good':true,'phone':'9876***21','cost':'280','time':'2018-05-06'}
	]*/
	export default {
		name:'alldiscuss',
		data(){
			return {
				discuss:"all",
				discussList:[],
				filtrate:[],
				allCount:0,
				goodCount:0,          
				badCount:0,
				nowEvaluate:[],
				nodiscuss:false
			}
		},
		computed:{
			repairIdNow(){
				return this.$store.state.repairIdNow
			}
		},
		watch:{
			discuss:{  
				handler:function(){
					if(this.discuss == "all"){
						this.filtrate = this.discussList
					}if(this.discuss == "good"){
						var goodDiscuss=[];
						// this.filtrate筛选出good：true的数据
						for(var i=0;i<this.discussList.length;i++){
							if(this.discussList[i].good == true){
								goodDiscuss.push(this.discussList[i])
							}
						}
						this.filtrate = goodDiscuss
					}if(this.discuss == "bad"){
						var badDiscuss = this.discussList.filter(function(item) {
							return item.good == false; 
						});
						this.filtrate = badDiscuss
					}
				}
			} 
		},
		created(){
			var discussL;
			axios.get('/evaluateList.json')
			.then(res=>{
					var List = [];
					for(var k in res.data){
						res.data[k].id=k;
						List.push(res.data[k]);
					}
					var nowEvaluate = List.filter((item)=>{
						return item.repairId == this.repairIdNow;
					});
					console.log(nowEvaluate);
					if(nowEvaluate.length>0){
						discussL = []
						for(var i=0;i<nowEvaluate.length;i++){
							if(nowEvaluate[i].leaveWord == ''){
								nowEvaluate[i].leaveWord = "主人很懒，没有留下什么"
							}
							if(nowEvaluate[i].fwStarCount + nowEvaluate[i].wxStarCount>6){
								discussL.push({'good':true,'phone':'9876***21','cost':'280','time':'2018-05-06','content':nowEvaluate[i].leaveWord})
							}else{
								discussL.push({'good':false,'phone':'9876***21','cost':'280','time':'2018-05-06','content':nowEvaluate[i].leaveWord})
							}
						}
						this.discussList = discussL;
						this.filtrate = this.discussList;
						// 总评
						this.allCount = discussL.length;
						// 好评
						var goodC = discussL.filter(function(item){
							return item.good == true
						})
						this.goodCount = goodC.length;
						// 差评
						var badC = discussL.filter(function(item){
						return item.good == false
						})
						this.badCount = badC.length;
					}else{
						this.nodiscuss = true
					}
					
			})
			.catch(err=>{
				console.log(err)
			})	
		}
	}
</script>
<style scoped lang="less">
	.discuss-box{
		display: flex;
		text-align: center;
		background-color: #fff;
		margin-top: 10px;
		padding: 0 10px;
		li{
			flex: 1;
			padding-bottom: 13px;
			input{
				opacity: 0;
			}
		}
		li.active{
			border-bottom: 2px solid #2fbe9a;
		}
	}
	.discuss-body{
		padding: 10px;
		background-color: #fff;
		li{
			border-bottom: 1px solid #f2f2f2;
			padding: 10px;
			p{
				line-height: 2;
			}
			.time{
				color: #797979;
			}
			.cost{
				float:right;
				font{
					color: red;
				}
			}
			.content{
				margin: 10px 0;
				line-height: 1.5;
			}
		}
	}
	.nodiscuss{
		text-align:center;
		margin:20px 0;
	}
</style>