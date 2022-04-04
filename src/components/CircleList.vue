<template>
  <table>
    <thead>
      <tr>
        <th>Périmètre du cercle</th>
        <th>Aire de disque</th>
        <th>Volume de la sphère</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="circle in getList" :key="circle">
        <th>{{ circle.perimeter }} cm</th>
        <th>{{ circle.area }} cm2</th>
        <th>{{ circle.volume }} cm3</th>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { CircleStore } from "../stores/circle";
import { mapState, mapWritableState } from "pinia";
export default {
  computed: {
    ...mapState(CircleStore, ["getList"]),
  },
};
</script>

<style scoped>
table {
  border: 3px solid #49b0ff;
  width: 300px;
  background-color: #e5f9ff;
}
td,
th {
  border: thin solid #6495ed;
  width: 300px;
}
</style>