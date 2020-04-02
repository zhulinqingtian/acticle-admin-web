<template>
  <div class="hello">
    <p>优化过后store的使用</p>

    <div class="info-block">
      平台名称：{{plat && plat.name || ''}}
      版本：{{plat && plat.version}}
      更新时间： {{plat && plat.updateTime}}
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'

export default {
  name: 'OptimizeVuex',
  data () {
    return {
      currentUser: {
        name: 'test',
        role: 'test01'
      }
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['user', 'plat'])
  },
  watch: {
    user: 'changeUser' // 检测user对象变化，检测方法：changeUser
  },
  methods: {
    // 触发的方法要和action里的方法名一致才可以这样写
    ...mapActions(['incrementIfOdd', 'getUserInfo', 'getPlatInfo', 'getRoutes']),
    ...mapMutations(['increment', 'decrement'])
  }
}
</script>

<style scoped>
  .info-block{
    margin: 20px;
    padding: 10px;
    border: 1px solid #d8d8d8;
    color: #333;
  }
</style>
