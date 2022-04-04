<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="data:image/png;base64,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"
      width="550" height="180"
    />

    <div class="wrapper">
      <HelloWorld msg="Pour calculer les dimensions de votre Cerlce c'est ici !" />

      <nav>
        <RouterLink to="/about">Notice d'utilisation</RouterLink>
        <RouterLink to="/Calculateur">Calculateur</RouterLink>
        <RouterLink to="/CircleList">Historiques de vos cercles</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: rgb(0, 13, 255);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(229, 100%, 30%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
