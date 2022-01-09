<template>
  <div class="contents">
    <router-link to="/gigi-shokai"><img class="title-img" src="../assets/gigi_shokai_title.png"></router-link>
    <div class="gigi-img-frame">
      <li><router-link to="/gigi-shokai"><img src="../assets/jirei-etsuran.png"></router-link></li>
      <li><router-link to="/gigi-shokai"><img src="../assets/jirei-toukou.png"></router-link></li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GigiShokai',
  components: {
  }
}
</script>

<style>
.gigi-img-frame {
  list-style: none;
  display: flex;
  padding: 50px 0 300px 100px;  
}
.gigi-img-frame > li {
  margin-right: 40px;
}
</style>
