<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/Logo-CoWaf.png"/>
    <div class="head">
      <div style="display: flex; margin-right: 20px;">
        <div class="ckoi">Co'Waf c'est quoi ?</div>
        <div class="ckoi">Boutique</div>
      </div>
      <div style="display: flex; margin-right: 20px;">
        <div class="btn-recherche">Rechercher un trajet</div>
        <div class="proposer">Proposer un trajet</div>
      </div>
      <div style="display: flex; margin-right: 10px;">
        <div class="shopbag"><img src="@/assets/shopping-bag-line.png"/></div>
        <div class="ckoi">profil</div>
      </div>
    </div>
    

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>
  <div class="body">
    <div class="header-image">
      <div class="laisse">Laissez vos animaux voyager</div>
      <div class="laisse2">en première classe</div>
      <div class="rechercher">
        <div><input type="text"><input type="text"><input type="date"><input type="number"><input type="submit"></div>
      </div>
    </div>
  </div>
  <div style="margin-top: 300px;">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </div>
  <footer>
    hbikhbjhbj
  </footer>

  <!-- <RouterView /> -->
</template>

<style scoped>

.rechercher {
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  margin-top: 355px;
  /* margin-left: 100px; */
  box-shadow: 0px 4px 44px -9px rgba(0, 0, 0, 0.15);
  width: 1155px;
  height: 77px;
  /* flex-shrink: 0; */
  border-radius: 10px;
  background: #FFF;
  margin-left :auto ;
  margin-right:auto ;
}
.laisse2 {
  background: #F5F7FB;
  color: #09458E;
  width: 309px;
  height: 61.381px;
  border-bottom-right-radius: 31px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  font-size: xx-large;
  font-weight: bold;
}

.laisse {
  background: #F5F7FB;
  width: 459px;
  height: 61.381px;
  border-bottom-right-radius: 31px;
  /* border-top-right-radius: 31px / 60px; */
  align-items: center;
  justify-content: space-between;
  display: flex;
  font-size: xx-large;
  font-weight: bold;
}

.header-image {
  background-image: url("assets/waf.png");
  height: 494px;
  background-size: 100% 100%;
  border-radius: 31px;
}

header {
  /* line-height: 1.5; */
  padding-left: 50px;
  padding-right: 50px;

  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'felix';
  src: local('@/assets/Fellix-Regular.woff2') format('woff2');
}

.body {
  padding: 50px;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: #09458E;
}

.proposer {
  border-radius: 20px;
  background: #09458E;
  color: white;
  width: 219px;
  height: 40px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: flex;
}
.btn-recherche {
  width: 219px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 20px;
  color: #09458E;
  border: 2px solid #09458E;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  display: flex;
  margin-right: 5px;
}

.shopbag {
  width: 33px;
  height: 30px;
  flex-shrink: 0;
  justify-content: center;
  display: flex;
}

.head {
  display: flex;
  align-items: center;
  align-items: center;
}

.logo {
  display: block;
  /* margin: 0 auto 2rem; */
  width: 61px;
  height: 101px;
  flex-shrink: 0;
}
.ckoi {
  display: flex;
  width: 136px;
  height: 19px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
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
  header {
    /* display: flex; */
    /* place-items: center; */
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
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
