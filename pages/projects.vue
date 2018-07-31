<template>
  <section class="container">
    <Navy/>
    <div class="jumbotron over-jumbo">
  	   <div class="container" >
  		     <h1>Projects</h1>
  		 </div>
  	 </div>
     <div class="container marketing col-md-12">
       <div class="row text-center">
         <div class="col-md-4">
           <h3>Betting Simulator</h3>
           <p>Betting simulator with customizable odds, wager, stacksize, and martingale mode</p>
           <nuxt-link class="btn btn-primary link" to="/bet/">View Project &raquo;</nuxt-link>
         </div>
         <div class="col-md-4">
           <h3>Burst Brush</h3>
           <p>Unique and highly customizable js drawing app</p>
           <nuxt-link class="btn btn-primary link" to="/burst/">View Project &raquo;</nuxt-link>
         </div>
         <div class="col-md-4">
           <h3>Betting Simulator</h3>
           <p>Betting simulator with customizable odds, wager, and stacksize. It has the ability to simulate multiple rolls in one click, and also features a Martingale option.</p>
           <nuxt-link class="btn btn-primary link" to="/bet/">View Project &raquo;</nuxt-link>
         </div>
       </div>
     </div>
   </section>
</template>
<script>
import Navy from '~/components/Navy.vue'

export default {
  components: {
    Navy
  }
}
</script>
<style>
.over-jumbo {
  border-radius: 0px !important;
  padding-left: 5vh !important;
  padding-top: 15vh !important;
  background-color: rgba(242, 242, 242, .9);
}


.marketing {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

</style>
