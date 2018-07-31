<template>
  <section class='container'>
    <div id='banner'>
      <div id='help'>
        <p class='helpText'>new burst: click and drag<br>toggle multishade burst: x<br>toggle colors/grayscale: r</p>
        <p class='helpText'>toggle autoburst: a<br>toggle sclamp: z<br>toggle connected mode: c</p>
        <p class='helpText'>clear screen: space<br>download drawing: s<br>hide instructions: h</p>
      </div>
    <a id='tag' href='../'>bentripp.net</a>
  </div>
  </section>
</template>
<script>
export default {
  head () {
    return {
      script: [
        { src: '../assets/p5.js'},
        { src: '../assets/burst.js' },
        { src: '../assets/help.js' }
      ]
    }
  }
}
</script>
<style>
body {
  background: none;
}
</style>
