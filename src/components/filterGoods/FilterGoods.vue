<template>
  <div class="filter-condition">
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText">
    </el-input>

    <div class="mt-20">
      <el-tree
        ref="tree"
        :highlight-current=true
        show-checkbox
        empty-text="无内容"
        node-key="id"
        accordion
        :check-on-click-node="canClickLabel"
        :filter-node-method="filterNode"
        :data="data"
        :default-expanded-keys="defaultExpandGroup"
        :default-checked-keys="defaultCheckedGroup"
        :props="defaultProps"
        @node-click="handleNodeClick"
      >
      </el-tree>
    </div>

    <div class="buttons mt-20">
      <el-button @click="getCheckedNodes">获取选中的节点</el-button>
      <el-button @click="getCheckedKeys">通过 key 获取</el-button>
      <el-button @click="setCheckedNodes">通过 node 设置选中的节点</el-button>
      <el-button @click="setCheckedKeys">通过 key 设置选中的节点</el-button>
      <el-button @click="resetChecked">清空</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterGoods',
  data () {
    return {
      data: [
        {
          id: 1,
          label: '教育类',
          subList: [
            {
              id: 4,
              label: '在校教育类',
              subList: [
                {
                  id: 9,
                  label: '职场技能类'
                },
                {
                  id: 10,
                  label: '校园知识类'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '历史类',
          subList: [
            {
              id: 5,
              label: '中国史'
            },
            {
              id: 6,
              label: '国外史'
            }
          ]
        },
        {
          id: 3,
          label: '艺术类',
          subList: [
            {
              id: 7,
              label: '音乐类'
            },
            {
              id: 8,
              label: '舞蹈类'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'subList', // 数据中，节点的子节点数据对应的字段名
        label: 'label' // 节点名称对应的字段名
      },
      defaultExpandGroup: [2], // 默认展开的id集合
      defaultCheckedGroup: [5], // 默认选中节点的id集合
      filterText: '', // 过滤的关键字
      canClickLabel: true
    }
  },
  watch: {
    filterText (val) {
      this.$refs.tree.filter(val)
      // filter()：手动调用过滤， 必须配合 :filter-node-method="filterNode"
    }
  },
  methods: {
    getCheckedNodes () {
      // [{id: 6, label: "国外史"}]
      console.log('getCheckedNodes:', this.$refs.tree.getCheckedNodes())
    },
    getCheckedKeys () {
      // [1, 6]：选中的节点的key组成的数组
      console.log('getCheckedKeys:', this.$refs.tree.getCheckedKeys())
    },
    setCheckedNodes () {
      this.$refs.tree.setCheckedNodes([{
        id: 5,
        label: '中国史'
      }, {
        id: 9,
        label: '职场技能类'
      }])
    },
    setCheckedKeys () {
      this.$refs.tree.setCheckedKeys([3])
    },
    resetChecked () {
      this.$refs.tree.setCheckedKeys([])
    },

    // 过滤模式
    filterNode (value, data) { // value：label对应值
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    // 点击节点
    handleNodeClick (data) {
      // data: 节点数据
      console.log(data)
    }

    /**
     * Attributes：
     * =============
     * check-on-click-node：是否在点击节点的时候选中节点。默认值为 false，即只有在点击复选框时才会选中节点。
     * accordion：手风琴模式,对于同一级的节点，每次只能展开一个
     * empty-text：内容为空的时候展示的文本（String）
     * node-key：每个树节点唯一标识的属性，整棵树应该是唯一的
     * show-checkbox：节点是否可被选择
     * default-checked-keys：默认勾选的节点的 key 的数组
     * current-node-key：当前选中的节点（string, number）
     * filter-node-method：对树节点进行筛选时执行的方法。
     * * 返回 true：表示这个节点可以显示；
     * * 返回 false：表示这个节点会被隐藏
     * * Function(value, data, node)
     * icon-class：自定义树节点的图标
     *
     * lazy：是否懒加载子节点，需与 load 方法结合使用
     * load：加载子树数据的方法。仅当 lazy 属性为 true 时生效 （function(node, resolve)）
     * default-expand-all：是否默认展开所有节点
     * default-expanded-keys：默认展开的节点的 key 的数组
     * indent：相邻级节点间的水平缩进，单位为像素（number）
     */

    /**
     * props (data, node)
     * ======
     * label：指定节点标签为节点对象的某个属性值
     * children：指定子树为节点对象的某个属性值
     * disabled：指定节点选择框是否禁用为节点对象的某个属性值
     * isLeaf：指定节点是否为叶子节点。仅在指定了lazy属性的情况下生效
     */

    /**
     * 树具有的方法
     * =====
     * filter(val，data)：手动调用过滤， 必须配合 filter-node-method 属性使用
     * val:搜索的关键字  data:树对应的数组
     *
     * getCheckedNodes：返回目前被选中的节点所组成的数组（节点设置 show-checkbox 为 true）
     *
     * 必须设置 node-key 属性的方法：
     * setCheckedNodes：设置目前勾选的节点
     * getCheckedKeys：返回目前被选中的节点的 key 所组成的数组
     * setCheckedKeys：通过 keys 设置目前勾选的节点
     * getCurrentKey：获取当前被选中节点的 key
     * remove：删除 Tree 中的一个节点
     * append：为 Tree 中的一个节点追加一个子节点
     */

    /**
     * 树具有的事件：
     */

  }
}
</script>

<style scoped lang="scss">
.mt-20 {
  margin-top: 20px;
}
</style>
