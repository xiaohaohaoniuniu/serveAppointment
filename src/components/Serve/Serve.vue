<template>
	<div class="serve">
		<main-nav></main-nav>
		<!-- 标题公用 -->
		<p class="title"><span class="line"></span>请选择您需要的服务</p>
		<!-- 选择服务 -->
		<ul class="serve-box">
			<li>
				<router-link :to="{name:'wx'}">
					<span class="iconimg one"></span>
					<p>维修</p>
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'by'}">
					<span class="iconimg two"></span>
					<p>保养</p>
				</router-link>
			</li>
			<li>
				<router-link :to="{name: 'yc'}">
					<span class="iconimg three"></span>
					<p>验车</p>
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'mmc'}">
					<span class="iconimg four"></span>
					<p>买卖车</p>
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'qt'}">
					<span class="iconimg five"></span>
					<p>其他</p>
				</router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script>
	import MainNav from '../Nav/MainNav'
	export default {
		name:'serve',
		data(){
			return {

			}
		},
		components:{
			MainNav
		}
	}
</script>
<style scoped lang="less">
	.title{
		height: 42px;
		line-height: 42px;
		position: relative;
		background-color: #fff;
		padding-left: 20px;
		font-size: 14px;
		font-weight: 800;
		border-bottom: 1px solid #f2f2f2;
		.line{
			width: 2px;
			height: 12px;
			background-color: #17b38c;
			position: absolute;
			left: 10px;
			top: 0;
			bottom: 0;
			margin: auto 0;
		}
	}
	.serve-box{
		display: flex;
		background-color: #fff;
		a{
			color: #333;
			padding: 13px 0;
		}
		/* 选中变图 */
		a.router-link-active .iconimg{
			background-position: bottom center !important;
		}
		li{
			flex: 1;
			text-align: center;
			input{
				opacity: 0;
			}
			.iconimg{
				width: 40px;
				height: 40px;
				display:block;
				margin: 0 auto;
			}
			p{
				margin-top: 10px;
			}
			.iconimg.one{
				background: url('../../assets/wx.png') no-repeat;
				background-position: top center;
				background-size: cover;
			}
			
			.iconimg.two{
				background: url('../../assets/by.png') no-repeat;
				background-position: top center;
				background-size: cover;
			}
			
			.iconimg.three{
				background: url('../../assets/yc.png') no-repeat;
				background-position: top center;
				background-size: cover;
			}
			
			.iconimg.four{
				background: url('../../assets/mmc.png') no-repeat;
				background-position: top center;
				background-size: cover;
			}
			
			.iconimg.five{
				background: url('../../assets/qt.png') no-repeat;
				background-position: top center;
				background-size: cover;
			}	
		}
	}
</style>