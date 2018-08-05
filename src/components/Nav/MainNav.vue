<template>
	<div class="mainnav">
		<ul class="nav-ul">
			<!-- <li>
				<router-link :to="{name:'JoinHelp'}">
					加入互助
				</router-link>
			</li> -->
			<li>
				<router-link :to="{name:'Serve'}">
					服务预约
				</router-link>
			</li>
			<li class="MyAppoint">
				<router-link :to="{name:'MyAppoint'}">
					我的预约
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name:'mainnav',
		data(){
			return {

			}
		},
		methods:{
			
		}
	}
</script>
<style scoped>
	.nav-ul .router-link-active{
    		color: red;
    	}
	.mainnav{
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		background-color: #fff;
		z-index: 99;
		border-top: 1px solid #f2f2f2;
	}
	.nav-ul{
		list-style: none;
		display: flex;
	}
	.nav-ul a{
		color: #333;
		text-decoration: none;
	}
	.nav-ul li{
		flex: 1;
		text-align: center;
		font-size: 0.7rem;
		height: 2.66rem;
		line-height: 2.66rem;
	}
</style>