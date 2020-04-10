<template>
  <div>
    <div class="buyers-show">
      <label>购买用户：</label>
      <AvatarList :avatarList="avatarList"/>
    </div>
  </div>
</template>

<script>
import AvatarList from '../avatarList/avatarList.vue'
import API from '../../assets/js/common/api'

export default {
  name: 'Reviews',
  props: {
    id: String
  },
  watch: {
    id (val) {
      this.goodsId = val
    }
  },
  data () {
    return {
      goodsId: '', // 当前商品id
      avatarList: []
    }
  },
  mounted () {
    this._getAvatarList()
  },
  methods: {
    _getAvatarList () {
      const param = {
        id: this.goodsId
      }
      API.getAvatarList(param)
        .then(result => {
          this.avatarList = result
        })
        .catch(err => {
          this.$message.error(err.message)
        })
    }
  },
  components: {
    AvatarList
  }
}
</script>

<style scoped>

</style>
