<template>
  <div>
    <form @submit.prevent="CalculCircle(circle)">
      <p>Entrez le rayon de votre cercle en cm !</p>
      <label for="rayon">Rayon de votre cercle</label>
      <input type="number" min="0" v-model="circle.rayon" id="rayon" />
      <input type="submit" value="Vive les Maths !" />
    </form>
  </div>
</template>

<script>
import { CircleStore } from "../stores/circle";         // les imports dont on a besoin, le stire, pinia et vue-router
import { mapState, mapWritableState } from "pinia";
import { useRouter, useRoute } from "vue-router";

export default {           // les données que l'on exporte du formualaire
  data() {
    return {
      circle: {
        rayon: 0,
      },
    };
  },
  computed: {
    ...mapWritableState(CircleStore, ["list"]),     // on utilise notre store et le tableau et mapWritableState pour le séter
  },
  methods: {
    CalculCircle(circle) {
      let error = "Vous ne pouvez entrer que un entier non nul"; //on créer une variable error qu'on affichera en cas de valeurs nul reçu
      if (this.circle.rayon > 0) {                               // on pose une condition pour sécuriser l'application, on lance les calculs que si l'entier est supérieur à 0
        (circle.perimeter = this.circle.rayon * 2 * 3), 14;       // on ajoute des clés à notre store qui prennent des valeurs obtenus grâce aux calculs à partir du rayon donnée apr l'utilisateur
        (circle.area = this.circle.rayon * this.circle.rayon * 3), 14;
        (circle.volume =
          (4 / 3) *
          (this.circle.rayon * this.circle.rayon * this.circle.rayon) *
          3),
          14;
        this.list.push(circle);             // on set notre tableau avec nos nouvelles valeurs
        this.$router.push("/CircleList");   // on redirige notre utilisateur vers une autre page avec les données qu'il vas recevoir
      } else {
        alert(error);                       // si condition non respéctée alors une alerte s'affiche avec error
      }
    },
  },
};
</script>

<style scoped>
form {
  background-color: #e5f9ff;
  padding: 10px;
  width: 300px;
  border: 3px solid #49b0ff;
  border-radius: 5px;
}


input {
  width: 120px;
  margin-left: 5px;
  box-shadow: 1px 1px 1px #002fff;
  cursor: pointer;
}
</style>