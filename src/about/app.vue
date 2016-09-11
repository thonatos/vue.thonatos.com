<template>
  <div class="container">
    <div id="about" class="about">
      <img class="avatar" src="../_assets/mtt.jpg">
      <article class="detail">
        <h1>{{ name }}</h1>
        <p>{{ detail.email }}<br> {{ detail.career }}<br> {{ detail.degree }}</p>
      </article>
      <ul class="social">
        <li v-for="link in links">
          <a href="{{ link.href }}">
            <i class="iconfont">{{{ link.icon }}}</i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'Thonatos.Yang',
        detail: {
          email: 'thonatos.yang@gmail.com',
          career: 'Frontend Developer / 前端汪, DevOps / 运维开发',
          degree: '09/2011 - 06/2015, Department of Remote sensing science and technology, NUIST, NanJing'
        },
        links: [
          {
            name: 'weibo',
            href: 'http://weibo.com/thonatos',
            icon: '&#xe619;'
          },
          {
            name: 'github',
            href: 'https://github.com/thonatos',
            icon: '&#xe69f;'
          }]
      }
    }
  }
</script>


<style lang="less">
  @import "../_less/v2/base";
  @import "../_less/component/animation";
  @import "../_less/iconfont/about";

  .container {
    display: flex;
    align-items: center;
    min-height: 100vh;
    .about {
      padding: 2em;
      .avatar {
        width: 20em;
      }
      .detail {
        h1 {
          font-size: 1.2rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
      ul.social {
        padding: 0;
        margin: 4em 0 1em 0;
        list-style: none;
        li {
          display: inline-block;
          padding-right: 0.6em;
          a {
            color: #2d2d2d;
            i {
              font-size: 24px;
            }
          }
        }
      }
    }
  }
</style>
