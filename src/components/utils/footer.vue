<template>
  <div :class="$style.footer" :style="{top: footerPosition + 'px'}">
    <p style="position:relative;top:5px;margin:0px">2021 &copy; Jian Ting Chen. </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerPosition: '',
    }
  },
  created() {
    this.footerPosition = 0
  },
}
</script>

<style lang="scss" module>
@import './common/general.scss';
.footer {
  @include block(100%, $height:45px, $background-color: #000);
  text-align: center;
  color:#fff;
  font-size: 16px;
  position: relative;
  z-index: 1;
}
</style>