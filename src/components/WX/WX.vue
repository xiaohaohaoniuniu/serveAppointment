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
        <label class="needicon" for="noneed"></label>
        <label for="noneed">不需要接车</label>
      </li>
    </ul>
    <!-- 标题公用 -->
    <p class="title"><span class="line"></span>请点击选择修理厂</p>
    <!-- 修理厂列表 -->
    <ul class="repair-list">
    	<!-- 循环 -->
      	<li v-on:click="repairDeatil(repair.repairId)" class="repair-item" v-for="repair in repairList" v-bind:key="repair.repairId">
	        <img class="img" src="../../assets/repair.jpg" alt="">
	        <div class="repair-detail">
	          <p class="repair-title">{{repair.repairName}}</p>
	          <p class="repair-des">{{repair.repairAddress}}</p>
	          <ul class="distance">
	            <li>
	              <img src="" alt="">{{repair.repairDistance}}公里
	            </li>
	            <li>
	              <img src="" alt="">{{repair.repairComment}}评论
	            </li>
	            <li>
	              <img src="" alt="">{{repair.repairCount}}单
	            </li>
	          </ul>
	        </div>
      	</li>
      	<!-- /循环结束 -->
    </ul>
    <div style="height:3rem;"></div>
  </div>
</template>
<script>
	export default {
		name:'wx',
    data(){
      return {
       project:'维修'
      }
    },
		computed:{
			repairList(){
				return this.$store.state.repairList
			}
		},
		created(){
			// var newsID=this.$route.query.id;
			// console.log(newsID)
		},
		methods:{
			repairDeatil(id){
        // 把选择的项目传给vuex
        var project;
        if(this.$route.query.project){
          project = this.$route.query.project
        }else{
          project = this.project
        }

        this.$store.commit("project",project);
        this.$store.commit('NowRepairId',id);
				this.$router.push({name:'RepairDetail'});
			}
		}
	}
</script>
<style lang="less" scoped>
.title {
  height: 42px;
  line-height: 42px;
  position: relative;
  background-color: #fff;
  padding-left: 20px;
  font-size: 14px;
  font-weight: 800;
  margin-top: 15px;
  .line {
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

.isjoin {
  display: flex;
  background-color: #fff;    
  border-top: 1px solid #f2f2f2;
  li {
    flex: 1;
    padding: 12.5px 0;
    text-align: center;
  }
  .needicon {
    display: inline-block;
    width: 21px;
    height: 21px;
    vertical-align: middle;
    border-radius: 360px;
    margin-right: 10px;
    border: 1px solid #ddd;
  }
  input[type="radio"] {
    margin: 0;
    height: 1px;
    opacity: 0;
  }
  input[type="radio"]:checked+label {
    background: url('../../assets/checked.png') no-repeat center;
    background-size: cover;
    border: none;
  }
}

.repair-list {
  overflow: hidden;
  .repair-item {
    padding: 10px 0;
    padding-right: 10px;
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
    background-color: #fff;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
  }
  .img {
    width: 119px;
    max-width: 30%;
    height: 75px;
    float: left;
    margin: 0 10px;
  }
  .repair-detail {
    float: left;
    width: 62%;
    max-width: 62%;
    overflow: hidden;
    .repair-title {
      font-size: 14px;
      font-weight: 800;
    }
    .repair-des {
      color: #797979;
      font-size: 12px;
      margin-top: 6px;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-word;
    }
    .distance {
      width: 62%;
      position: absolute;
      bottom: 10px;
      li {
        width: 33.33%;
        float: left;
        font-size: 10px;
        padding: 0;
      }
    }
  }
}

</style>
