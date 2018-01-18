<template>
  <div class="banner-container">
      <div class="banner-intro">
          <h1>资源&分享</h1>
          <h1>职共享欢迎您！</h1>
          <a class="effect effect-3" href="#" title="Learn More">关于我们</a>
      </div>
  </div>
</template>

<script>
export default{

}
</script>

<style scoped>
.banner-container{
    position: relative;
    color: #ffffff;
}

.banner-container .banner-intro{
    position: absolute;
    left: 13em;
    top: 5em;
    /* transform: translate(18em,7em); */
}

.banner-container .banner-intro h1:nth-child(1){
    font-size: 3em;
    letter-spacing: 6px;
}

.banner-container .banner-intro h1:nth-child(2){
    font-size: 3.5em;
    letter-spacing: 6px;
}

.effect {
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: #fff;
  /* text-transform: capitalize; */
  font-family: 'Roboto', sans-serif;
  padding: 20px 0px;
  width: 150px;
  border-radius: 6px;
  overflow: hidden;
  background-color: rgba(71, 86, 105, 0.64);
  text-align: center;
}

.effect.effect-3 {
  -webkit-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
}
.effect.effect-3:before {
  content: "了解更多";
  /* font-family: FontAwesome; */
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  position: absolute;
  top: 100%;
  left: 0px;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.5em;
  -webkit-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
}
.effect.effect-3:hover {
  text-indent: -9999px;
}
.effect.effect-3:hover:before {
  top: 0;
  text-indent: 0;
}

</style>


