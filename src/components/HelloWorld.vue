<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="greetings">
    <h3>
      Cette application Web permet de calculer le périmètre d'un cercle, l'aire
      d'un disque et le volume d'une sphère à partir de seulement un rayon r
      exprimé en cm
    </h3>
    <p>
      N'hésitez pas à consulter notre Notice d'utilisation pour plus de détail
      et pour prendre connaissances de proprirétés mathémathiques.
    </p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
