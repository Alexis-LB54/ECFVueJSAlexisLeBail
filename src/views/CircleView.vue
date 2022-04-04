<template>
  <div>
    <form @submit.prevent="CalculCircle(circle)">
      <table>
        <thead>
          <label for="rayon">Rayon de votre cercle</label>
        </thead>
        <tbody>
          <input type="number" min="0" v-model="circle.rayon" id="rayon" />
        </tbody>

        <input type="submit" value="Vive les Maths !" />
      </table>
    </form>
  </div>
</template>

<script>
import { CircleStore } from "../stores/circle";
import { mapState, mapWritableState } from "pinia";
import { useRouter, useRoute } from "vue-router";

export default {
  data() {
    return {
      circle: {
        rayon: 0,
      },
    };
  },
  computed: {
    ...mapWritableState(CircleStore, ["list"]),
  },
  methods: {
    CalculCircle(circle) {
      console.log(circle);
      let error = "Vous ne pouvez entrer que un entier non nul";
      if (this.circle.rayon > 0) {
        (circle.perimeter = this.circle.rayon * 2 * 3), 14;
        (circle.area = this.circle.rayon * this.circle.rayon * 3), 14;
        (circle.volume =
          (4 / 3) *
          (this.circle.rayon * this.circle.rayon * this.circle.rayon) *
          3),
          14;
        this.list.push(circle);
        this.$router.push("/CircleList");
      } else {
        alert(error);
      }
    },
  },
};
</script>

<style scoped>
form {
  background-color: #e5f9ff;
  padding: 10px;
  width: 280px;
  border: 3px solid #49b0ff;
  border-radius: 5px;
}

input {
  width: 100px;
  margin-left: 5px;
  box-shadow: 1px 1px 1px #002fff;
  cursor: pointer;
}
</style>