<template>
  <div class="side">
    <div class="brand">Vue Prj</div>
    <div class="menu">
      <span class="group">main</span>
      <a v-link="{ path: '/posts/1' }">Home</a>
      <a v-link="{ path: '/charts/' }">Charts</a>
    </div>
  </div>
  <div class="main">
    <div class="header">
      header
    </div>
    <div class="container">

      <router-view class="view" keep-alive transition transition-mode="out-in">
      </router-view>

    </div>
    <div class="footer">
    </div>
  </div>
</template>

<style lang="less">
  @import "../_less/v2/base";
  @import "../_less/component/animation";
  .side {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 14em;
    .green-pure-bg();
    .brand {
      text-align: center;
      color: #fff;
      margin: 0;
      height: 4em;
      line-height: 4em;
    }
    .menu {
      .group {
        display: block;
        padding: 0.5em;
        background: #edf1f7;
        color: #bbb;
        font-size: 0.6em;
        text-align: right;
      }
      a {
        display: block;
        padding: 0.5em 1em;
        color: #272D4E;
      }
    }
  }
  
  .main {
    width: 100%;
    padding-left: 14em;
    overflow: hidden;
    .header {
      display: block;
      height: 4em;
      line-height: 4em;
      background: #edf1f7;
      color: #bbb;     
      padding: 0 2em; 
    }
    .footer {}
    .container {
      margin: 0 auto;
    }
  }
</style>