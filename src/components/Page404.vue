<template>
  <div class="box">
    <div class="clearfix">
      <figure class="figure"><img src="https://cdn.segmentfault.com/v-5e7854c5/global/img/404.svg" alt="杯具啊"></figure>

      <h1>杯具啊！</h1>

      <div class="p">HTTP 404……<br>可能这个页面已经飞走了</div>

      <div class="p">
        <el-button type="success">返回首页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page404'
}
</script>

<style scoped>
  .box {
    margin: 0 auto;
    padding: 40px;
    background-color: #fff;
    width: 540px;
  }
  .clearfix:before, .clearfix:after {
    content: " ";
    display: table;
  }
  .clearfix:after {
    clear: both;
  }
  .figure {
    float: right;
    line-height: 0;
  }
  h1 {
    color: #555;
    font-size: 2em;
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  p, .p {
    margin: 10px 0 15px;
  }
</style>
