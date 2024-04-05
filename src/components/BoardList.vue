<template>
  <div v-for="(item, i) in boardDataList" :key="i">
    <h5>{{ item.title }}</h5>
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
