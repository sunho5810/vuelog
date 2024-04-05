<template>
  <div>
    <h5>{{boardDataList[0].title}}</h5>
    <p>{{ boardDataList[0].content }}</p>
    <p>{{ boardDataList[0].date }}</p>
    <p>{{ boardDataList[0].number }}</p>
  </div>
  <div>
    <h5>{{boardDataList[1].title}}</h5>
    <p>{{ boardDataList[1].content }}</p>
    <p>{{ boardDataList[1].date }}</p>
    <p>{{ boardDataList[1].number }}</p>
  </div>
  <div>
    <h5>{{boardDataList[2].title}}</h5>
    <p>{{ boardDataList[2].content }}</p>
    <p>{{ boardDataList[2].date }}</p>
    <p>{{ boardDataList[2].number }}</p>
  </div>
</template>

<script>
export default {
  name: "BoardList",
  props:{
    boardDataList: Array,
  }
}
</script>

<style>

</style>