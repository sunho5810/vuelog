<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Vuelog</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <!-- router 5 : a태그 처럼 사용한다. href대신 to속성을 사용한다. -->
            <router-link to="/" class="nav-link">홈 페이지</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list" class="nav-link">리스트 페이지</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/detail" class="nav-link">리스트 상세</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- router 4 : router-view태그를 이용해 설정했던 라우터를 path에 따라 보여준다 -->
  <router-view :boardDataList="boardDataList"></router-view>
</template>

<script>

import boardDataList from './assets/data_boardList.js';
// import BoardList from './components/BoardList.vue';

export default {
  name: 'App',
  data(){
    return{
      boardDataList: boardDataList,
    }
  },
  components: {
    // BoardList
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
