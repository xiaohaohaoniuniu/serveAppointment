<template>
	<div class="wx">
		<!-- 接车 -->
		<ul class="isjoin">
			<li>
				<input id="need" type="radio" name="join">
				<label class="needicon" for="need"></label>
				<label for="need">需要接车</label>
			</li>
			<li>
				<input id="noneed" type="radio" name="join">
				<label class="needicon" for="need"></label>
				<label for="noneed">不需要接车</label>
			</li>
		</ul>
	</div>
</template>
<style lang="less" scoped>	
	.isjoin{
		display: flex;
		background-color: #fff;
		border-top: 1px solid #f2f2f2;
		li{
			flex: 1;
			padding: 12.5px 0;
			text-align: center;
		}
		.needicon{
			display: inline-block;
			width: 21px;
			height: 21px;
			vertical-align: middle;
			border-radius: 360px;
			margin-right: 10px;
			border: 1px solid #f2f2f2;
		}
		input[type="radio"]{
			margin: 0;
			height: 1px;
			opacity: 0;
		}
		input[type="radio"]:checked+label{
			background: url('../../assets/checked.png') no-repeat center;
			background-size: cover;
			border: none;
		}
	}
</style>
