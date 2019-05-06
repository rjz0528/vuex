<template>
  <div id="onediv">
    <!-- // ? 轮播图 -->

    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="k in imgsdt" :key="k.id">
        <img :src="k.img" alt>
      </mt-swipe-item>
    </mt-swipe>

    <!-- // ? 点击数据 样式 -->

    <div id="but">
      <div id="oneclassify">
        <a href>
          <img src="../../images/menu1.png" alt>
          <span>新闻咨询</span>
        </a>
        <a href>
          <img src="../../images/menu2.png" alt>
          <span>图片分享</span>
        </a>
        <a href>
          <img src="../../images/menu3.png" alt>
          <span>商品购买</span>
        </a>
        <a href>
          <img src="../../images/menu4.png" alt>
          <span>留言反馈</span>
        </a>
        <a href>
          <img src="../../images/menu5.png" alt>
          <span>视频专区</span>
        </a>
        <a href>
          <img src="../../images/menu6.png" alt>
          <span>联系我们</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // ?用于接收轮播图数据
      imgsdt: []
    }
  },
  created() {
    this.imgsdata()
  },
  methods: {
    // ?发送axios 请求 请求图片数据  并赋值
    async imgsdata() {
      const { data: dt } = await this.$http.get('/api/getlunbo')
      this.imgsdt = dt.message
    }
  }
}
</script>


<style lang="less" scoped>
#onediv {
  padding-top: 40px;
  height: 100%;
  .mint-swipe,
  .mint-swipe-items-wrap {
    width: 100%;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  #but {
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow: hidden;
    #oneclassify {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-top: 20px;
      a {
        text-align: center;
        width: 32%;
        padding: 20px 10px;
        img {
          width: 60px;
          height: 60px;
        }
        span {
          display: block;
          font-size: 14px;
          color: black;
          font-weight: 700px;
          padding-top: 10px;
        }
      }
    }
  }
}
</style>
