<template>
	<div class="chooseaddr">
		<ul class="addrList">
			<li class="addritem">
				<p class="name-call">李易峰<span>1564879321</span></p>
				<p class="addr">北京 朝阳区幸福路23号金光闪闪大厦</p>
				<div>
					<input type="radio" id="addrId">
					<label for="addrId"></label>
					<label for="addrId">选用地址</label>
					<p>
						<a href="javascript:;"><img src="../../../assets/edit.png">编辑</a>
						<a href="javascript:;"><img src="../../../assets/del.png">删除</a>
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name:'chooseaddr',
		data(){
			return {

			}
		}
	}
</script>
<style scoped lang="less">
	.addrList{
		background-color: #fff;
		padding: 10px;
		li{
			margin-bottom:10px;
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
</style>