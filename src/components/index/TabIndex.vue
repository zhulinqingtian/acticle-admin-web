<template>
  <div class="tab-index-container">
    <div class="tab-index">
      <div class="tab-index-item" v-for="(item, index) in myCreatedList" :key="index">
        <a href="" class="work-img">
          <img :src="item.src" alt=""/>
        </a>
        <div class="work-bottom-item">
          <p class="info-title">{{item.title}}</p>
          <p class="info-desc">{{item.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabIndex',
  data() {
    return {
      myCreatedList: [
        {
          title: '电子科技公司网站设计',
          desc: '网页-企业官网',
          views: 520,
          likes: 100,
          comments: 25,
          src: 'https://img.zcool.cn/community/01636f5e3d5886a801216518073876.jpg@260w_195h_1c_1e_1o_100sh.jpg'
        },
        {
          title: '旅游公司网站设计制作',
          desc: '网页-企业官网',
          views: 520,
          likes: 100,
          comments: 25,
          src: 'https://img.zcool.cn/community/01636f5e3d5886a801216518073876.jpg@260w_195h_1c_1e_1o_100sh.jpg'
        },
        {
          title: '财务会计网站设计制作',
          desc: '网页-企业官网',
          views: 520,
          likes: 100,
          comments: 25,
          src: 'https://img.zcool.cn/community/01636f5e3d5886a801216518073876.jpg@260w_195h_1c_1e_1o_100sh.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.tab-index {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.tab-index-item {
  background: #fff;
  border-radius: 4px;
  margin: 0 20px 20px 0;
  width: 20%;
  .work-img{
    img{
      vertical-align: middle;
      border: none;
      width: 100%;
      border-radius: 4px 4px 0 0;
      -webkit-transition: .1s linear;
      transition: .1s linear;
      display: block;
    }
  }
  .work-bottom-item {
    padding: 4px 10px;
  }
  .info-title {
    margin-bottom: 0px;
    position: relative;
    line-height: 40px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
  }
  .info-desc {
    margin-bottom: 10px;
    position: relative;
    line-height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #666;
  }
}
</style>
