<template>
  <!--结构-->
  <!--template 标签是h5 标签 特点只执行 不在浏览器显示全部代码结构要求之一个唯一的根节点《< div p  等等都可以-->
  <div id="onediv">
    <!-- // ? 公共的头部 -->
    <mt-header fixed title="黑马程序员 vue 项目"></mt-header>
    <!-- // ? 文件出口显示 -->
    <router-view/>
    <!-- // ? 公共的底部 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon">
          <span class="mui-icon-extra mui-icon-extra-cart">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
// 行为

export default {}
</script>

<style lang="less" scoped>
/*样式*/
#onediv {
  height: 100%;
}
</style>
