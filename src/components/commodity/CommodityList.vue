<template>
  <div class="panel">
    <p>商品列表</p>
    <ul class="list-container">
      <li v-for="item in list" :key="item.id" @click="viewDetail(item)">
        <h3 class="c-title">{{item.title}}</h3>
        <el-image :src="item.src" lazy></el-image>
        <p :title="item.desc" class="c-desc ellipse">{{item.desc}}</p>
      </li>
    </ul>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="currentSize"
      :current-page="currentPage"
      :page-sizes="sizesList"
      @current-change="changePages"
      @size-change="changeSize"
      :total="listData.length">
    </el-pagination>

    <!-- 商品详情 -->
    <el-drawer
      title="商品详情"
      :visible.sync="showDetails"
      :direction="direction"
      :before-close="handleClose">
      <h3 class="c-title">{{currentData.title}}</h3>
      <el-image :src="currentData.src" lazy class="detail-pic"></el-image>
      <p class="c-desc">{{currentData.desc}}</p>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'CommodityList',
  data () {
    return {
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
      list: [], // 当前页数据
      currentData: {}, // 当前正在编辑查看的item
      showDetails: false, // 是否展示详情
      direction: 'rtl', // 详情打开的方向
      currentPage: 1, // 当前页码
      currentSize: 10, // 当前每页条数
      sizesList: [10, 20, 30, 40, 50, 100]
    }
  },
  created () {
    this.getCommodityList()
  },
  methods: {
    changePages (page = 1) {
      this.currentPage = page
      this.getCommodityList()
    },
    changeSize (size = 5) {
      this.currentPage = 0
      this.currentSize = size
      this.getCommodityList()
    },
    getCommodityList () {
      const param = {
        page: this.currentPage,
        size: this.currentSize
      }
      this.list = this.listData.slice(param.size * param.page + 1 - param.size, param.size * param.page + 1)
    },
    viewDetail (item) {
      this.currentData = item
      this.showDetails = true
      this.$message('这是' + item.title)
    },
    handleClose (done) {
      // 关闭前的回调，会暂停 Drawer 的关闭
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
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
  .c-title{
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .c-desc{
    color: #828181;
    padding-left: 8px;
    padding-right: 8px;
    text-indent: 25px;
    &.ellipse{
      @include text-overflow(2)
    }
  }
  .list-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    li{
      width: 260px;
      height: 305px;
      overflow: hidden;
      margin: 10px;
      border: 1px solid #f0f0f0;
      cursor: pointer;
      transition: border-color linear 0.5s;
      &:hover{
        border-width: 2px;
        border-color: #47be22;
      }
      .c-title{
        font-size: 16px;
        line-height: 50px;
      }
      .c-desc{
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
  .el-drawer__body{
    .c-title{
      font-size: 18px;
      line-height: 50px;
    }
    .c-desc{
      text-align: center;
      font-size: 14px;
      line-height: 24px;
    }
    .detail-pic{
      width: 350px;
      display: block;
      margin: 20px auto;
    }
  }
</style>
