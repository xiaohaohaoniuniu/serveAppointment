<template>
	<div class="chooseaddr">
		<ul class="addrList">
			<li class="addritem" v-for="addr in addrList" :key="addr.addrId">
				<p class="name-call">{{addr.name}}<span>{{addr.phone}}</span></p>
				<p class="addr">{{addr.area}} {{addr.detailAddr}}</p>
				<div class="operation">
					<label :for="addr.addrId" class="choosebtn">
						<input v-on:click="choose(addr,addr.addrId)" type="radio" :id="addr.addrId" name="addrRadio">
						<span class="checked"></span>
						<span>选用地址</span>
					</label>
					<p class="edit-del">
						<a v-on:click="addrEdit(addr)" href="javascript:;"><img src="../../../assets/edit.png">编辑</a>
						<a v-on:click="addrDel(addr)" href="javascript:;"><img src="../../../assets/del.png">删除</a>
					</p>
				</div>
			</li>
		</ul>
		<div @click="addbox" class="addbox">
			<img src="../../../assets/add.png" alt="">添加地址
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name:'chooseaddr',
		data(){
			return {
				// addrList:[]
			}
		},
		computed:{
			addrList(){
				return this.$store.state.addrList;
			}
		},
		created(){
			axios.get('/addrList.json')
			.then(res=>{
				var addrList = [];
				for(var k in res.data){
					res.data[k].addrId = k;
					addrList.push(res.data[k])
				}
				this.$store.commit('addrList',addrList);
			})
		},
		methods:{
			addrDel(addr){
				axios.delete('/addrList/' + addr.addrId + '.json')
				.then(res=>{
					this.$store.commit('addrDel',addr)
				})
			},
			choose(addr,addrId){
				var checked = document.getElementById(addrId).checked;
				if(checked){
					this.$store.commit('addAddr',addr);
					this.$router.push({name:'TimeAddr',query:{"addr":addr}});
				}	
			},
			addbox(){
				this.$router.push({name:'AddAddr'});
				// 把编辑保存到store的地址给清空
				this.$store.commit('editAddr',{});
			},
			addrEdit(addr){
				// 把要编辑的地址保存到store.js中
				this.$store.commit('editAddr',addr);
				this.$router.push({name:'AddAddr'});
			}
		}
	}
</script>
<style scoped lang="less">
	.addrList{
		li{
			margin-bottom: 10px;
		    padding: 10px;
		    background-color: #fff;
			.name-call{
				font-size: 16px;
				span{
					float: right;
				}
			}
			.addr{
				color:#797979;
				padding:10px;
				padding-left:0;
				border-bottom:1px solid #f2f2f2;
			}
		}
	}
	.operation{
		padding-top: 10px;
		overflow: hidden;
		input{
			opacity: 1;
			margin:0;
			margin-left: -13px;
		}
		input[type="radio"]:checked+span{
			background: url('../../../assets/checked.png') no-repeat;
			background-size: cover;
			border:none;
		}
		.checked{
			width: 20px;
			height: 20px;
			display: inline-block;
		    vertical-align: middle;
		    border: 1px solid #ccc;
		    border-radius: 360px;
		}
		.choosebtn{
			float: left;
		}
		.edit-del{
			float:right;
		}
		.edit-del a{
			display: inline-block;
			color: #797979;
			margin-left: 10px;
			img{
				width:16px;
				margin-right: 6px;
			}
		}
	}
	.addbox{
		width: 90%;
	    margin: 0 auto;
	    margin-top: 20px;
	    border-radius: 8px;
	    padding: 25px;
	    text-align: center;
	    border: 1px dashed #bfbfbf;
	    img{
	    	width: 16px;
		    margin-right: 4px;
	    }
	}
</style>