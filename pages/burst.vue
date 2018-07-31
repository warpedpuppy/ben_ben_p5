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
import Navy from '~/components/Navy.vue';
import * as p5 from 'p5';
import burst from '~/proj/burst';
import help from '~/proj/help'

export default {
  components: {
    Navy
  },
  mounted() {
    let p5 = require('p5');
    let burst = burst(p5);
    burst.init();
  }
}
</script>
<style>
/*After I switch to this page the body changes. If I click back, the background stays blank, even after
explicitely setting the background in each other view*/
body {
  margin: 0;
  padding: 0;
  background: none;
}

#banner {
  position: absolute;
  width: 100vw;
  -moz-user-select: -moz-none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;
}

.helpText {
  height: 60px;
  float: left;
  padding-left: 10px;
  padding-right: 10px;
}

#tag {
  float: right;
  right: 5px;
  text-align: right;
  padding-top: 10px;
  padding-right: 15px;
  color: black;
}
</style>
