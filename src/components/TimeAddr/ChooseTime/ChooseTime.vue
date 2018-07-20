<template>
  <div class="ordertime">
    <!-- 日期 -->
    <ul id="box" class="date-box">
      <li :class="{active:!!(dateRadio == 'one')}">
        <label for="dateRadio1">
          <p class="week no-border">今天</p>
          <p class="date no-border">7-28</p>
          <input id="dateRadio1" type="radio" name="date" value="one" v-model="dateRadio">
        </label>
      </li>
      <li :class="{active:!!(dateRadio == 'two')}">
        <label for="dateRadio2">
          <p class="week">今天</p>
          <p class="date">7-28</p>
          <input id="dateRadio2" type="radio" name="date" value="two" v-model="dateRadio">
        </label>
      </li>
      <li :class="{active:!!(dateRadio == 'three')}">
        <label for="dateRadio3">
          <p class="week">今天</p>
          <p class="date">7-28</p>
          <input id="dateRadio3" type="radio" name="date" value="three" v-model="dateRadio">
        </label>
      </li>
      <li :class="{active:!!(dateRadio == 'four')}">
        <label for="dateRadio4">
          <p class="week">今天</p>
          <p class="date">7-28</p>
          <input id="dateRadio4" type="radio" name="date" value="four" v-model="dateRadio">
        </label>
      </li>
      <li :class="{active:!!(dateRadio == 'five')}">
        <label for="dateRadio5">
          <p class="week">今天</p>
          <p class="date">7-28</p>
          <input id="dateRadio5" type="radio" name="date" value="five" v-model="dateRadio">
        </label>
      </li>
    </ul>
    <!-- 时间 -->
    <ul class="time-box">
      <li v-for="time in timeData" :class="{active:!!(timeRadio == time.time)}">
        <label :for="time.timeId">
          <input :id="time.timeId" type="radio" :value="time.time" v-model="timeRadio">
          <p>{{time.time}}</p>
        </label>
      </li>
    </ul>
    <!-- 确定选择 -->
    <a @click="chooseTime" class="choose-btn" href="javascript:;">确定选择</a>
  </div>
</template>
<script>
var time = [
  { timeId: '08', time: '08:00-09:00' },
  { timeId: '09', time: '09:00-10:00' },
  { timeId: '10', time: '10:00-11:00' },
  { timeId: '11', time: '11:00-12:00' },
  { timeId: '12', time: '12:00-13:00' },
  { timeId: '13', time: '13:00-14:00' },
  { timeId: '14', time: '14:00-15:00' },
  { timeId: '15', time: '15:00-16:00' },
  { timeId: '16', time: '16:00-17:00' },
  { timeId: '17', time: '17:00-18:00' }
]
export default {
  name: 'ordertime',
  data() {
    return {
      dateRadio: "two",
      timeRadio: '09:00-10:00',
      timeData: time
    }
  },
  methods:{
  	chooseTime(){
  		var date = document.getElementsByClassName('active')[0].children[0].children;
  		var dateContent = date[1].innerText;
  		var args = dateContent + ' ' + this.timeRadio
  		// this.$router.push({name: 'TimeAddr',query:{"date":dateContent,"time":this.timeRadio}});
  		this.$router.push({name: 'TimeAddr'});
  		this.$store.commit('chooseTime',args)
  	}
  },
  mounted() {
    var curTime = new Date();
    var toDay = ['星期日', '周一', '周二', '周三', '周四', '周五', '周六'];
    var toDayFlag = curTime.getDay();
    var weekObj = document.getElementsByClassName('week');
    var dateObj = document.getElementsByClassName('date');
    // 当前月日
    var curDay, i = 0;
    while (i < weekObj.length) {
      if (curTime.getDay() != 0 && curTime.getDay() != 6) {
        curDay = (curTime.getMonth() + 1) + '-' + curTime.getDate();
        weekObj[i].innerText = curTime.getDay() == toDayFlag ? '今天' : (curTime.getDay() == (toDayFlag + 1) ? '明天' : toDay[curTime.getDay()])
        dateObj[i++].innerText = curDay;
      }
      curTime.setDate(curTime.getDate() + 1);
    }
  }
}

</script>
<style scoped lang="less">
.ordertime {
  margin-top: 20px;
}

.date-box {
  display: flex;
  text-align: center;
  background-color: #fff;

  li {
    flex: 1;
    padding: 10px 0px 0 0;
    label {
      display: block;
      input {
        opacity: 0;
        height: 5px;
        margin: 0;
      }
    }
    p {
      border-left: 1px solid #f2f2f2;
    }
    p.no-border {
      border-left: none;
    }
  }
  li.active {
    background-color: #2fbe9a;
    p {
      border-left: none;
      color: #fff;
    }
  }
}

.time-box {
  overflow: hidden;
  li {
    width: 35%;
    margin-left: 10%;
    margin-top: 20px;
    float: left;
    background-color: #fff;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #f2f2f2;
    overflow: hidden;
    label {
      display: block;
      padding-bottom: 12px;
    }
    input {
      margin: 0;
      height: 5px;
      opacity: 0;
    }
  }
  li.active {
    color: #2fbe9a;
    border: 1px solid #2fbe9a;
  }
}

</style>
