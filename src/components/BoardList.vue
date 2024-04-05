<template>
  <div v-for="(item, i) in boardDataList" :key="i">
    <!-- router push 1 : $router.push()를 사용하여 url에 경로를 넘겨줄 수 있다.
      **$route는 현재 경로 $router는 페이지 이동 관련 기능
    -->
    <h5><router-link :to="/detail/+i">{{ item.title }}</router-link></h5>
    <p>{{ item.content }}</p>
    <p>{{ item.date }}</p>
    <p>{{ item.number }}</p>
  </div>
</template>

<script>
export default {
  name: "BoardList",
  props: {
    boardDataList: Array,
  },
};
</script>

<style></style>
