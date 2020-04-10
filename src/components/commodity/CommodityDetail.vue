<template>
  <div class="panel">
    <p class="module-title">商品详情</p>
    <div class="flex-container">
      <div class="flex-width flex-width-500">
        <el-carousel trigger="click" :autoplay=autoplay height="350px">
          <el-carousel-item v-for="x in imgList" :key="x.index">
            <img :src="x.src" alt="" lazy>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="flex-auto">
        <h3 class="c-title">
          <label class="name">宝贝名称：</label>
          {{item.title}}
        </h3>
        <div class="desc-block">
          <p class="c-desc">{{item.desc}}</p>
        </div>
        <div class="price-block">
          <label class="name">宝贝价格：</label>
          ￥ <span>100</span>元
        </div>
        <div class="city-block">
          <label class="name">收货地址：</label>
          <v-distpicker
            @selected="changeAddress"
            province="江苏省"
            city="南京市"
            area="雨花台区"
            :rows="17"/>
        </div>
        <div class="buy-num-block">
          <label class="name">购买数量：</label>
          <el-input-number
            v-model="buyNum"
            controls-position="right"
            @change="changeNumber"
            :min="1"
            :max="10"/>
        </div>
        <div class="buy-block">
          <el-button @click="toAddCart" icon='el-icon-shopping-cart-full' type="danger" size="small">加入购物车</el-button>
          <el-button @click='toCollect' icon='el-icon-collection' type="danger" size="small">收藏</el-button>
          <el-button @click="toBack" type="primary" size="small">返回</el-button>
        </div>
      </div>
    </div>

    <!-- 标签页 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="基本参数" name="baseParam">
        基本参数
      </el-tab-pane>
      <el-tab-pane label="详情展示" name="details">
        详情展示
      </el-tab-pane>
      <el-tab-pane label="宝贝评价" name="evaluates">
        <Reviews :id="item.id"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'
import Reviews from './Reviews'

export default {
  name: 'CommodityList',
  props: {
    currentData: Object
  },
  watch: {
    currentData (data) {
      this.item = data
    }
  },
  data () {
    return {
      autoplay: false,
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
      ],
      listData: [
        {
          id: 1,
          title: '早安，满天星。',
          desc: '早已过了做梦的年龄，也不是个浪漫之人，喜欢花，却很少买。',
          src: '/img/slider/01.png'
        },
        {
          id: 2,
          title: '又见满天星',
          desc: '早已过了做梦的年龄，也不是个浪漫之人，喜欢花，却很少买。',
          src: '/img/slider/02.png'
        },
        {
          id: 3,
          title: '白色满天星',
          desc: '总是这样认为，鲜花的生命过于短暂，它们总是在我的面前无奈地凋零，一片又一片地落下，无论我怎样的精心呵护，却也无法挽留住它们瞬间的美丽。',
          src: '/img/slider/03.png'
        },
        {
          id: 4,
          title: '绿色满天星',
          desc: '花开，花落，总带着一种凄凉，这是我最不愿看到的。所以，我宁愿买绢花，虽然是一种不真实的美，却也是永恒的美丽。',
          src: '/img/slider/04.png'
        },
        {
          id: 5,
          title: '黄色满天星-橙色满天星毛茛花束',
          desc: '仔细看那些细细小小的白色花朵，它们太普通了，小的毫不起眼，任凭你怎样的细数，却也数不出它到底有几层花瓣，可就是这样普通至极的满天星却让我对它独有情钟。',
          src: '/img/slider/05.png'
        },
        {
          id: 6,
          title: '紫色满天星',
          desc: '星河明淡，春来深浅。红莲正、满城开遍。禁街行乐，暗尘香拂面。皓月随人近远。\n' +
            '天半鳌山，光动凤楼两观。东风静、珠帘不卷。玉辇将归，云外闻弦管。认得宫花影转。',
          src: '/img/slider/06.png'
        },
        {
          id: 7,
          title: '紫色满天星-2',
          desc: '天上不会夜夜都有晶莹闪烁的星，夜空有时阴云笼罩，漆黑如墨，然而只要有你温柔的目光，我的心中便有一片灿烂的星光。',
          src: '/img/slider/06.png'
        },
        {
          id: 8,
          title: '早安，满天星。',
          desc: '早已过了做梦的年龄，也不是个浪漫之人，喜欢花，却很少买。',
          src: '/img/slider/01.png'
        },
        {
          id: 9,
          title: '又见满天星',
          desc: '早已过了做梦的年龄，也不是个浪漫之人，喜欢花，却很少买。',
          src: '/img/slider/02.png'
        },
        {
          id: 10,
          title: '白色满天星',
          desc: '总是这样认为，鲜花的生命过于短暂，它们总是在我的面前无奈地凋零，一片又一片地落下，无论我怎样的精心呵护，却也无法挽留住它们瞬间的美丽。',
          src: '/img/slider/03.png'
        },
        {
          id: 11,
          title: '绿色满天星',
          desc: '花开，花落，总带着一种凄凉，这是我最不愿看到的。所以，我宁愿买绢花，虽然是一种不真实的美，却也是永恒的美丽。',
          src: '/img/slider/04.png'
        },
        {
          id: 12,
          title: '黄色满天星-橙色满天星毛茛花束',
          desc: '仔细看那些细细小小的白色花朵，它们太普通了，小的毫不起眼，任凭你怎样的细数，却也数不出它到底有几层花瓣，可就是这样普通至极的满天星却让我对它独有情钟。',
          src: '/img/slider/05.png'
        },
        {
          id: 13,
          title: '紫色满天星',
          desc: '星河明淡，春来深浅。红莲正、满城开遍。禁街行乐，暗尘香拂面。皓月随人近远。\n' +
            '天半鳌山，光动凤楼两观。东风静、珠帘不卷。玉辇将归，云外闻弦管。认得宫花影转。',
          src: '/img/slider/06.png'
        },
        {
          id: 14,
          title: '紫色满天星-2',
          desc: '天上不会夜夜都有晶莹闪烁的星，夜空有时阴云笼罩，漆黑如墨，然而只要有你温柔的目光，我的心中便有一片灿烂的星光。',
          src: '/img/slider/06.png'
        }
      ], // 所有列表数据
      item: {}, // 当前商品数据
      activeName: 'baseParam', // 当前激活的标签页
      areaStartCode: '', // 地址
      buyNum: 1 // 购买数量
    }
  },
  created () {

  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    toBack () {
      this.$emit('changeShowState', true)
    },
    changeAddress: function (data) {
      // this.provincedata = data.province.value // 省名称
      // this.citydata = data.city.value // 市名称
      // this.provincecode = data.province.code // 省编码
      // this.citycode = data.city.code // 市编码
      console.log(data.area.code) // 打印地区编码
      console.log(data.area.value) // 打印地区名称
      this.areaStartCode = data.area.code // 将编码赋值给form，给后端时候，template中需加入 <el-form></el-form>
    },
    changeNumber (value) {
      this.buyNum = value
    },

    /**
     * 加购
     */
    toAddCart () {
      this.$message('加入购物车成功')
    },
    toCollect () {
      this.$message('收藏成功')
    }
  },
  components: {
    VDistpicker, Reviews
  }
}
</script>

<style scoped lang="scss">
  @mixin text-overflow($val) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: $val;
    overflow: hidden;
  }
  .panel {
    padding: 0;
  }
  .c-title {
    padding-right: 8px;
    font-size: 22px;
    line-height: 50px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .c-desc {
    color: #828181;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 14px;
    line-height: 24px;
  }
  .flex-width {
    img {
      width: 100%;
    }
  }
  .price-block{
    font-size: 18px;
    line-height: 40px;
  }
  .buy-num-block{
    margin-top: 24px;
  }
  .el-button {
    margin-top: 10px;
    padding: 4px 15px;
  }
  label.name{
    display: inline-block;
    width: 90px;
    &+div{
      display: inline-block;
    }
  }
  .flex-auto{
    font-size: 1rem;
    &>div{
      margin-bottom: 24px;
    }
    &>h3{
      margin-bottom: 4px;
    }
    .desc-block{
      margin-bottom: 14px;
    }
  }
</style>
