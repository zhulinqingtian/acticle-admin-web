<template>
  <div class="panel flex-container space-between">
    <div class="flex-auto">
      <p>
        <el-link href="/login" target="_blank" type="primary">登陆</el-link>
      </p>
      <p>
        <el-link href="/view/hello" target="_blank" type="primary">hello</el-link>
      </p>
      <p>
        <el-link href="/view/mainLayout" target="_blank" type="primary">layout</el-link>
      </p>
    </div>
    <div class="flex-width flex-width-500">
      <span class="demonstration">Click 指示器触发</span>
      <el-carousel trigger="click">
        <el-carousel-item v-for="item in imgList" :key="item.index">
          <img :src="item.src" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      imgList: [
        {
          index: 1,
          src: '/img/slider/01.png'
        },
        {
          index: 2,
          src: '/img/slider/02.png'
        },
        {
          index: 3,
          src: '/img/slider/03.png'
        },
        {
          index: 4,
          src: '/img/slider/04.png'
        },
        {
          index: 5,
          src: '/img/slider/05.png'
        },
        {
          index: 6,
          src: '/img/slider/06.png'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .red{
    color: red
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__item{
    img{
      width: 100%;
    }
  }
</style>
