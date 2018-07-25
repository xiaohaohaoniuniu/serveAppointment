<template>
  <div class="repairDetail">
    <div class="img-box">
      <img class="repair-img" src="../../assets/repairDetail.jpg" alt="">
      <div class="name-addr">
        <p class="repair-name">{{repairNow.repairName}}</p>
        <p><img src="../../assets/addr-icon.png">{{repairNow.repairAddress}}</p>
      </div>
      <div class="star">
        <template v-for="n in allGrade">
          <img src="../../assets/star1.png">
        </template>
        <template v-for="n in 5-allGrade">
          <img src="../../assets/star0.png">
        </template>
      </div>
    </div>
    <!-- 主营项目 -->
    <ul class="action">
      <li v-for="action in repairAction">{{action}}</li>
    </ul>
    <!-- 会员评价 -->
    <div class="vip-evaluate">
      <p class="vip-title">会员评价</p>
      <div class="vip-body">
        <div class="vip-grade">
          <p class="average">{{(wxGrade+fwGrade)/2}}分</p>
          <p>总体点评</p>
        </div>
        <div class="vip-wx-fw">
          <span>维修满意度</span>
          <div class="star-box">
          	<template v-for="n in wxGrade">
          		<img src="../../assets/star1.png">
          	</template>
            <template v-for="n in 5-wxGrade">
          		<img src="../../assets/star0.png">
          	</template>
          </div>
          <span class="number">{{wxGrade}}分</span>
        </div>
        <div class="vip-wx-fw">
          <span>服务满意度</span>
          <div class="star-box">
            <template v-for="n in fwGrade">
          		<img src="../../assets/star1.png">
          	</template>
            <template v-for="n in 5-fwGrade">
          		<img src="../../assets/star0.png">
          	</template>
          </div>
          <span class="number">{{fwGrade}}分</span>
        </div>
      </div>
    </div>
    <!-- 评论 -->
    <all-discuss></all-discuss>
    <!-- 确认选择 -->
    <div style="height: 50px;"></div>
    <a @click="chooseBtn" class="choose-btn" href="javascript:;">确认选择</a>
  </div>
</template>
<script>
import axios from 'axios'
import AllDiscuss from './Discuss/AllDiscuss'
export default {
  data() {
    return {
      repairNow: {},
      allGrade: 0,
      repairAction: [],
      wxGrade:0,
      fwGrade:0
    }
  },
  methods:{
    chooseBtn(){
      this.$router.push({name: 'TimeAddr',query:{'repairId':this.$route.query.repairId}})
    }
  },
  created() {
    var repairId = this.$store.state.repairIdNow;
    axios.get('/repairList/' + repairId + '.json')
      .then(res => {
        this.repairNow = res.data;
        // 系统星星
        this.allGrade = parseInt(this.repairNow.repairAllGrade);
        // 主营项目
        this.repairAction = this.repairNow.repairAction.split(',');
        // 维修满意度
        this.wxGrade = parseInt(this.repairNow.repairWxGrade);
        this.fwGrade = parseInt(this.repairNow.repairFwGrade);
      })
  },
  components:{
  	AllDiscuss
  }
}

</script>
<style scoped lang="less">
.img-box {
  height: 10.506666666666666rem;
  position: relative;
  .repair-img {
    width: 100%;
    height: 100%;
  }
  .name-addr {
    width: 100%;
    padding: 0.5333333333333333rem;
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.4);
    .repair-name {
      font-weight: 800;
    }
    img {
      width: 0.5866666666666667rem;
      margin-right: 0.10666666666666667rem;
    }
  }
  .star {
    position: absolute;
    bottom: 0.5333333333333333rem;
    right: 0.5333333333333333rem;
  }
  .star img {
    width: 1.1733333333333333rem;
    float: left;
  }
}

.action {
  display: flex;
  background-color: #fff;
  padding: 0.5333333333333333rem;
  text-align: center;
  margin-top: 0.5333333333333333rem;
  li {
    flex: 1;
  }
}

.vip-evaluate {
  margin-top: 0.5333333333333333rem;
  background-color: #fff;
  .vip-body {
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
    padding: 0.5333333333333333rem;
    overflow: hidden;
    .vip-grade {
      width: 3.7333333333333334rem;
      height: 3.7333333333333334rem;
      background-color: #ffac3a;
      text-align: center;
      color: #fff;
      float: left;
      margin-right: 0.5333333333333333rem;
      .average {
        font-size: 1.0666666666666667rem;
        margin-top: 0.7rem;
      }
    }
  }
  .vip-title {
    padding: 0.5333333333333333rem;
    font-size: 0.8533333333333334rem;
  }
  .vip-wx-fw {
    float: left;
    padding: 0.4rem;
    padding-left: 0.5333333333333333rem;
    border-left: 1px solid #f2f2f2;
    span {
      float: left;
    }
    .number{
    	color: #ffac3a;
    }
    .star-box {
      float: left;
      margin: 0 0.5rem;
      img {
        width: 1.0666666666666667rem;
        float: left;
        margin-top: -2px;
      }
    }
  }
}
.choose-btn{
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  background-color: #2fbe9a;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 16px;
}
</style>
