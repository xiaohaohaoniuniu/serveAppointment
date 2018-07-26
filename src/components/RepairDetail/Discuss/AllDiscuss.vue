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
	</div>
</template>
<script>
	import axios from 'axios'
	var discussList = [
		{'good':true,'phone':'9876***21','cost':'280','time':'2018-05-06'}
	]
	export default {
		name:'alldiscuss',
		data(){
			return {
				discuss:"all",
				filtrate:discussList,
				allCount:0,
				goodCount:0,
				badCount:0,
				nowEvaluate:[]
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
					console.log("变化了");
					if(this.discuss == "all"){
						this.filtrate = discussList
					}if(this.discuss == "good"){
						var goodDiscuss=[];
						// this.filtrate筛选出good：true的数据
						for(var i=0;i<discussList.length;i++){
							if(discussList[i].good == true){
								goodDiscuss.push(discussList[i])
							}
						}
						this.filtrate = goodDiscuss
					}if(this.discuss == "bad"){
						var badDiscuss = discussList.filter(function(item) {
							return item.good == false;
						});
						this.filtrate = badDiscuss
					}
				}
			}
		},
		created(){
			// var comment = 
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
				this.nowEvaluate = nowEvaluate;
			})
			.catch(err=>{
				console.log(err)
			})

			// 总评
			this.allCount = discussList.length;
			// 好评
			var goodC = discussList.filter(function(item){
				return item.good == true
			})
			this.goodCount = goodC.length;
			// 差评
			var badC = discussList.filter(function(item){
				return item.good == false
			})
			this.badCount = badC.length;
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
</style>