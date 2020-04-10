<template>
  <div class="avatar-list-container">
    <div class="avatar-item" v-for="item in avatarList" :key="item.id">
      <el-tooltip class="item" effect="dark" :content="item.name" placement="top-start">
        <el-avatar size="medium" :src="item.src"></el-avatar>
      </el-tooltip>
    </div>
    <div class="avatar-item" v-show="avatarList.length > 3">
      <el-tooltip class="item" effect="dark" content="查看更多···" placement="top-start">
        <el-avatar size="medium" icon="el-icon-arrow-right"/>
      </el-tooltip>
    </div>
  </div>
</template>

<script>

export default {
  name: 'avatarList',
  props: {
    avatarList: Array
  },
  watch: {},
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.avatar-list-container{
  display: inline-block;
  .avatar-item{
    display: inline-block;
    margin-left: -12px;
    cursor: pointer;
    &:first-child{
      margin-left: 0px;
    }
  }
  .el-avatar--medium{
    border: 1px solid #fff;
  }
}
</style>
