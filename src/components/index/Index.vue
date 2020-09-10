<template>
  <div class="panel">
    <div class="main-content">
      <div class="top-bg">
        <div class="black-bg"></div>
      </div>
      <!--<p class="module-title">-->
        <!--主页-->
      <!--</p>-->
      <!--<el-select placeholder="请选择活动区域" value="">
        <el-option label="不限制" value=null>不限制</el-option>
        <el-option label="区域二" v-for="(value, key) in planStatusText" :value="key" :key="key">{{ value }}</el-option>
      </el-select>-->

      <div class="top-data-statistic">
        <div :class="item.className" v-for="(item, key, index) in loginUserInfo.topDataMap" :key="index">
          <p class="top-title">{{item.name}}</p>
          <p class="top-value">{{item.value}}</p>
        </div>
      </div>

      <!--用户头像展示-->
      <div class="block-user-header">
        <div class="avatar-container">
          <img :src="loginUserInfo.avatarPic" alt="">
        </div>
      </div>

      <!--用户信息展示-->
      <div class="home-information-box center">
        <p class="people-nick-name">{{loginUserInfo.userName}}</p>
        <p class="user-address">{{loginUserInfo.address}} | {{loginUserInfo.jod}}</p>
        <p class="user-signature">交流Q Q/微 信：{{loginUserInfo.contact}} {{loginUserInfo.workYear}}年工作经验</p>
      </div>

      <!--关注、私信-->
      <div class="block-follow center">
        <el-button type="primary">关 注</el-button>
        <el-button size="medium">私 信</el-button>
      </div>

      <!--标签页-->
      <div class="block-tab-bg">
        <div class="block-tab-info">
          <el-tabs style="height: 200px;">
            <el-tab-pane label="首页">
              <TabIndex></TabIndex>
            </el-tab-pane>
            <el-tab-pane label="推荐">推荐</el-tab-pane>
            <el-tab-pane label="资料">资料</el-tab-pane>
            <el-tab-pane label="收藏">收藏</el-tab-pane>
            <el-tab-pane label="生活el">生活</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabIndex from '@/components/index/TabIndex';

export default {
  name: 'Index',
  data () {
    return {
      loginUserInfo: {
        userId: '001',
        userName: '测试123',
        avatarPic: 'https://img.zcool.cn/community/01c7905d71d78fa801202f1767010d.jpg@160w_160h_1c_1e_1o_100sh.jpg',
        topDataMap: {
          popularity: {
            name: '人气',
            value: 3402,
            className: 'top-item top-item-1'
          },
          points: {
            name: '积分',
            value: 10,
            className: 'top-item top-item-2'
          },
          nodata: {
            name: '',
            value: '',
            className: 'top-item top-item-nodata'
          },
          fans: {
            name: '粉丝',
            value: 50,
            className: 'top-item top-item-3'
          },
          followed: {
            name: '关注',
            value: 150,
            className: 'top-item top-item-4'
          }
        },
        address: '北京',
        jod: '网页设计师',
        contact: '15735166538',
        workYear: 8
      },
      planStatusText: {
        0: '已取消',
        1: '未开始',
        2: '执行中',
        3: '执行完成',
        4: '已停止',
        5: '执行失败'
      }
    }
  },
  methods: {

  },
  components: {
    TabIndex
  }
}
</script>

<style scoped lang="scss">
.top-bg {
  width: 100%;
  height: 140px;
  background-color: #333;
  .black-bg{
    width: 1130px;
    margin: 0 auto;
  }
}

.top-data-statistic{
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  margin-top: -124px;
  .top-item{
    padding: 20px;
    p.top-title{
      font-size: 14px;
      line-height: 40px;
      font-weight: bold;
      color: #b4b4b4;
    }
    p.top-value{
      font-size: 30px;
      line-height: 40px;
      color: #fff;
    }
    &:after{
      content: '';
      width: 1px;
      height: 32px;
      background: rgba(255, 255, 255, 0.5);
      display: block;
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -16px;
    }
  }
}
.block-user-header {
  position: relative;
  height: 124px;
  margin-bottom: 40px;
  margin-top: -68px;
  .avatar-container{
    position: absolute;
    width: 128px;
    height: 128px;
    border: 4px solid #fff;
    border-radius: 50%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
.home-information-box {
  .people-nick-name {
    margin-top: 20px;
    font-size: 24px;
    color: #444444;
  }
  .user-address {
    margin-top: 10px;
    font-size: 12px;
    color: #bbbbbb;
  }
  .user-signature{
    margin-top: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #666666;
  }
}
.block-tab-bg {
  background-color: #f5f4f4;
  padding: 24px;
  height: 350px;
  .block-tab-info{
    padding: 10px;
    width: 1130px;
  }
}

.center {
  text-align: center;
}
.block-follow {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
<style lang="scss">
.block-follow {
  /deep/ .el-button, .el-button--medium{
    padding: 4px 16px;
  }
}
</style>
