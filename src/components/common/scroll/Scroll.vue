<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    }
  },
  created() {
   // console.log(this);
  window.sss = this;


  },
  mounted() {

    // setTimeout(this._initScroll, 1000)
    if(this.$store.state.isGoodsComplete&&this.$store.state.isBannerComplete&&this.$store.state.isRecommendsComplete){
      this._initScroll
    }

  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }

      // better-scroll的初始化
      //this.scroll = new BScroll(this.$refs.wrapper, {})
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3,
        pullUpLoad: true
      })
      this.scroll.on("scroll", position => {
        //console.log(position);
        //position>-300?this.backTopIsShow=true:this.backTopIsShow
        //this.backTopIsShow = (-position.y)>500
        this.$emit("showScroll", position)
      })
      this.scroll.on("pullingUp", () => {
        this.$emit("pullUpLoad")
      })


      // this.scroll.scrollTo(0,0)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()

    },
    refresh() {
      console.log("img");
      this.scroll && this.scroll.refresh()

    }

  }
}
</script>

<style scoped>

</style>