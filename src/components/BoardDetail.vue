<template>
  <div>
    <h4>상세페이지</h4>
    <!-- router param 2 : $route.params.파라미터
        router.js에서 설정한 파라미터의 값을 받아온다.
    -->
    <h5>{{ boardDataList[$route.params.id].title }}</h5>
    <p>{{ boardDataList[$route.params.id].content }}</p>
  </div>
</template>

<script>
export default {
  name: "BoardDetail",
  props: {
    boardDataList: Array,
  },
};
</script>

<style></style>
