<template>
	<div  class='sketch' id="sketch">
	</div>
</template>
<script>
	import sketch from './sketch.js'
	export default {
		data() {
		  return {
		    myp5: null
		  }
		},
		mounted() {
			let p5 = require('p5');
			this.myp5 = new p5(sketch, document.getElementById('sketch'))
		}
	}
</script>
<style>
	#sketch {
	   width: 100%;
	   height:100%;
	   position: absolute;
	   left: 0;
	   top: 0;
	   border: 1px solid black;
	}
</style>