import Vue from 'vue'

Vue.directive('roleBtn', {
  // 只调用一次，指令第一次绑定到元素时调用
  bind: function (el, binding) {
    let roleArr = binding.value
    let userRole = JSON.parse(sessionStorage.getItem('info')).role
    if (roleArr && roleArr.indexOf(userRole) !== -1) {
      return false
    } else {
      el.parentNode.removeChild(el)
    }
  }
})

// 暂无数据
Vue.directive('no-data-word', {
  // 只调用一次，指令第一次绑定到元素时调用
  bind: function (el, binding) {
    el.innerText = binding.value.message
    el.style.color = binding.value.color
  }
})

// 文本超出显示省略号
Vue.directive('multi-ellipsis', {
  // 只调用一次，指令第一次绑定到元素时调用
  bind: function (el, binding) {
    el.style.overflow = 'hidden'
    el.style.display = '-webkit-box'
    el.style['-webkitBoxOrient'] = 'vertical'
    el.style['-webkitLineClamp'] = binding.value
  }
})

export default Vue

/**
 * vue 自定义指令
 *
 * ## 钩子函数
 *  bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
 *  inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
 *  update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
 *  componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用
 *  unbind：只调用一次，指令与元素解绑时调用
 */
