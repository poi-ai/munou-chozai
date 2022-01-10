<template>
  <div class="contents">
    <router-link to="/"><img class="title-img" src="../assets/title.png"></router-link><!-- width: 1135px -->
    <div class="sentence">
      <div>コミュ障、精神疾患、努力が報われない人など、</div>
      <div>どんな人でも肯定し、受け入れます！</div>
      <div>AIやコロナに仕事を奪われ、世間からも沙汰され、</div>
      <div>将来に不安を抱いている方々の心の拠り所になるよう、</div>
      <div>サイト運営頑張ります。</div>
    </div>
    <div class="img-frame">
      <li><router-link to="/gigi-shokai"><img src="../assets/gigi_shokai.png"></router-link></li>
      <li><router-link to="/problem"><img src="../assets/problem.png"></router-link></li>
    </div>
    <div class="img-frame">
      <li><router-link to="/gacha"><img src="../assets/gacha.png"></router-link></li>
      <li><img src="../assets/1.png" width="410px"></li>
      <li><img src="../assets/okusuri_nometane.png"></li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
  }
}
</script>

<style>
img {
  height: 300px;
}
.title-img{
  height: 358px !important;
}
.contents {
  margin: 0 max(50% - 567px, 30px);
  background: black;
  display:  inline-block;
}
.sentence {
  margin: 40px 0 50px 10px;
  color: white;
}
.sentence div {
  margin-top: 10px;
}
.img-frame {
  list-style: none;
  display: flex;
	width: 1000px;
  padding-bottom: 30px;
}
.img-frame > li {
  margin-right: 20px;
}
</style>
