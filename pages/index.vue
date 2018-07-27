<template>
  <section class="container">
    <Navy/>
    <div class="jumbotron">
		 <div class="container" >
			 <h1>Welcome</h1>
			 <p>Welcome to bentripp.net. This website is a way for me to showcase my various projects, experiment with new ideas, and challenge myself intellectually and creatively. <br> <br>Enjoy!</p>
		 </div>
	 </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Navy from '~/components/Navy.vue'

export default {
  components: {
    AppLogo,
    Navy
  }
}
</script>

<style>
.jumbotron{
	background-color: rgb(242, 242, 242);
	background-color: rgba(242, 242, 242, 0.7);
	margin-bottom: 0px;
}
.marketing .col-lg-4 {
  margin-bottom: 20px;
  text-align: center;
	color: #f9f9f9
}
.marketing h2 {
  font-weight: normal;
	color: #f9f9f9
}
.marketing .col-lg-4 p {
  margin-right: 10px;
  margin-left: 10px;
	color: #f9f9f9
}

.marketing {
	background-color: #f9f9f9;
	width: 100vw;
	margin-top: 0px;
	padding-bottom: 20px;
}
</style>
