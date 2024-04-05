<template>
  <div>
    <h5>{{dataList.title}}</h5>
    <p>{{ dataList.content }}</p>
    <p>{{ dataList.date }}</p>
    <p>{{ dataList.number }}</p>
  </div>
</template>

<script>
export default {
  name: "BoardList",
  props:{
    dataList: Array,
  }
}
</script>

<style>

</style>