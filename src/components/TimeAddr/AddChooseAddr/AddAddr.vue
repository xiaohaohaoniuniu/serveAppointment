<template>
  <div class="addaddr">
    <p class="title">联系人</p>
    <ul class="contact-person">
      <li>
        <label for="">姓名：</label>
        <input type="text" placeholder="请填写姓名" v-model="name">
      </li>
      <li class="sex-box">
        <label for="">性别：</label>
        <input id="man" type="radio" name="sex"  value="男" v-model="sexRadio"/><label class="sex" for="man"></label><label for="man">先生</label>
        <input id="woman" type="radio" name="sex" value="女"  v-model="sexRadio"/><label class="sex" for="woman"></label><label for="woman">女士</label>
      </li>
      <li>
        <label for="">电话：</label>
        <input type="text" placeholder="请填写联系人电话" v-model="phone">
      </li>
    </ul>
    <p class="title">添加地址</p>
    <ul class="contact-addr">
      <li>
        <label for="">城市</label>
        <span class="area">北京&nbsp;<font>&gt;</font></span>
      </li>
      <li>
        <label for="">区域和街道名称：</label>
        <input type="text" placeholder="请输入区域和街道名" v-model="area">
      </li>
      <li>
        <label for="">门牌号详细地址：</label>
        <input type="text" placeholder="例:枫蓝国际" v-model="detailAddr">
      </li>
    </ul>
    <a @click="addAddr" class="choose-btn" href="javascript:;">保存</a>
  </div>
</template>
<script>
	import axios from 'axios'
	export default {
		name:'addaddr',
		data(){
			return {
				name:'',
				sexRadio:'男',
				phone:'',
				area:'',
				detailAddr:''
			}
		},
		methods:{
			addAddr(){
				var addrObj = {
					name:this.name,
					sexRadio:this.sexRadio,
					phone:this.phone,
					area:this.area,
					detailAddr:this.detailAddr
				}
				axios.post('/addrList.json',addrObj)
				.then(res=>{
					// 添加到野狗
					this.$router.push({name:'TimeAddr',query:{addr:addrObj}});
					// 添加到vuex
					this.$store.commit('addAddr',addrObj);
				})
				.catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>
<style scoped lang="less">
.title {
  color: #797979;
  padding: 10px;
}

.contact-person {
  background-color: #fff;
  padding-left: 10px;
  li {
    padding: 10px 0;
    padding-right: 10px;
    border-bottom: 1px solid #f2f2f2;
    overflow: hidden;
    label {
      display: block;
      width: 18%;
      max-width: 18%;
      float: left;
      line-height: 20px;
    }
    input[type="text"] {
      width: 80%;
      float: left;
      border: 0 none;
      outline: none;
    }
    
    
  }
  .sex-box{
  	input{
  		float: left;
  		opacity: 0;
  		margin: 0;
  	}
  	.sex{
    	width: 20px;
    	height: 20px;
    	border: 1px solid #ccc;
    	border-radius: 360px;
		margin-left: -13px;
		margin-right: 5px;
    }
    input[type="radio"]:checked+label{
    	background: url('../../../assets/checked.png') no-repeat center;
    	background-size: 20px;
    	border: none;
    }
  }
}

.contact-addr {
  background-color: #fff;
  padding-left: 10px;
  li {
    padding: 10px 0;
    padding-right: 10px;
    border-bottom: 1px solid #f2f2f2;
    overflow: hidden;
    font{
    	color: #797979;
    }
    .area{
    	float: right;
    }
    label {
      width: 36%;
      max-width: 36%;
      float: left;
    }
    input {
      width: 62%;
      float: left;
      border: 0 none;
      outline: none;
    }
  }
}

</style>
