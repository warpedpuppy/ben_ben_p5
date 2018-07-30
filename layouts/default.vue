<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
.form-control {
  background-color: #f2f6fc;
  border-color: #f2f6fc;
}

.giant {
  font-size: 45vw;
  color: #5bc0de;
}

.vertical-center {
  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
  min-height: 100vh; /* These two lines are counted as one :-)       */

  display: flex;
  align-items: center;
}
body {
  background: url('../static/Dramatic_Glacier.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
}
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
  height: 33vh;
	margin-top: 0px;
	padding-bottom: 20px;
}
</style>
