<template>
  <div :class="$style.app">
    <div :class="$style.header">
      <div :class="$style.header_left">Ting components Library</div>
      <div :class="$style.header_left" style="margin-left: 50px">
        <t-input
          border="1px #EDEDED solid"
          placeholder="搜尋組件"
          fontColor="#B8B8B8">
          <template slot="addonBefore">
            <span class="fas fa-search" style="color:#7F7F7F"></span>
          </template>
        </t-input>
      </div>
      <div :class="$style.header_right">
        <a href="https://github.com/lion6420/components" target="blank">
          <img v-if="process.env.NODE_ENV === 'production'" width="30px" height="30px" src="/components/github.png" style="margin-top:2px;" />
          <img v-else width="30px" height="30px" src="/github.png" style="margin-top:2px;" />
        </a>
      </div>
      <div :class="$style.header_right" :style="{'border-bottom': active === 'about' ? '3px #1462D1 solid': 'none'}">
        <router-link to="/about" :class="$style.router_link">About</router-link>
      </div>
      <div :class="$style.header_right">測試</div>
      <div :class="$style.header_right" :style="{'border-bottom': active === 'doc' ? '3px #1462D1 solid': 'none'}">
        <router-link to="/doc/table" :class="$style.router_link">組件</router-link>
      </div>
    </div>
    <div :class="$style.body" :style="{'min-height': bodyMinHeight + 'px'}">
      <div :class="$style.sidebar">
        <sidebar :menu="menu" style="margin-top:60px" :width="230"></sidebar>
      </div>
      <div :class="$style.content">
        <router-view></router-view>
      </div>
    </div>
    <div :class="$style.footer">
      <t-footer></t-footer>
    </div>
  </div>
</template>

<script>
import tInput from '@/components/utils/input'
import sidebar from '@/components/utils/sidebar/sidebar'
import tFooter from '@/components/utils/footer'
export default {
  name: 'App',
  components: {
    tInput,
    sidebar,
    tFooter
  },
  data() {
    return {
      //style
      active: '',

      bodyMinHeight: 0,

      process: process,

      menu: [
        {
          label: 'Table 表格',
          link: '/doc/table',
        },
        {
          label: 'Input 輸入框',
          link: '/doc/input',
        },
        {
          label: 'Select 單選框',
          link: '/doc/single-select',
        },
        {
          label: 'Select 多選框',
          link: '/doc/multi-select',
        },
        {
          label: 'Sidebar 側邊欄',
          link: '/doc/sidebar',
        },
        {
          label: 'Tab 標籤頁',
          link: '/doc/tabs',
        },
        {
          label: 'Progress 進度條',
          link: '/doc/progress',
        },
        {
          label: 'Spin 載入中',
          link: '/doc/spin',
        }
      ]
    }
  },
  created() {
    this.activeCheck()
    window.addEventListener('resize', this.getBodyHeight)
    this.getBodyHeight()
  },
  methods: {
    activeCheck() {
      const path = window.location.pathname
      const regex_doc = new RegExp('/doc')
      const regex_about = new RegExp('/about')
      if (regex_doc.test(path)) {
        this.active = 'doc'
      }
      else if (regex_about.test(path)) {
        this.active = 'about'
      }
    },
    getBodyHeight() {
      this.bodyMinHeight = document.documentElement.clientHeight - 100
    }
  },
  watch: {
    "$route.path": function() {
      this.activeCheck()
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.getBodyHeight)
  }
}
</script>

<style lang="scss" module>
@import '@/styles/general.scss';
.app {
  .header {
    @include block(100%, 60px);
    background-color: $color-white;
    position: fixed;
    top:0px;
    z-index: 5;
    margin-bottom: 5px;
    box-shadow: 0 3px 2px -2px #dfdfdf;
    .header_left {
      float: left;
      font-size: 25px;
      font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      margin-top:10px;
      margin-left: 10px;
      cursor: pointer;
    }
    .header_right {
      float: right;
      font-size: 25px;
      font-family: Microsoft JhengHei;
      margin-right: 20px;
      padding: 12px 2px;
      cursor: pointer;
      .router_link {
        text-decoration: none;
        color: #000;
      }
    }
  }
  .body {
    display: flex;
    margin-top:60px;
    .sidebar {
      @include block(230px);
      background-color: $color-white;
      position: fixed;
      left: 0px;
      bottom: 0px;
      top: 0px;
      box-shadow: 3px 0px 2px -2px #dfdfdf;
    }
    .content {
      @include block(100%);
      background-color: $color-white;
      margin-left: 200px;
    }
  }
}
</style>

<style>
body {
  background-color: #ececec;
  margin: 0px;
}
</style>
