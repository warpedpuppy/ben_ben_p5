<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
		 <div class="container">
			 <div class="navbar-header">
				 <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					 <span class="sr-only">Toggle navigation</span>
					 <span class="icon-bar"></span>
					 <span class="icon-bar"></span>
					 <span class="icon-bar"></span>
				 </button>
				 <a class="navbar-brand" href="/">Ben Tripp</a>
			 </div>
			 <div id="navbar" class="navbar-collapse collapse">
				 <ul class="nav navbar-nav navbar-right">
					 <li><router-link class="link" to="/">Home</router-link></li>
					 <li><router-link class="link" to="/projects/">Projects</router-link></li>
					 <li><router-link class="link" to="/music/">Music</router-link></li>
					 <li><router-link class="link" to="/photography/">Photography</router-link></li>
				 </ul>
			 </div>
		 </div>
	 </nav>
</template>

<style>
.navbar-inverse {
	background-color: #f9f9f9;
	border-color: #595959;
	border-width: 0px;
	border-bottom-width: 3px;
	color: #595959;
	margin-bottom: 0px;
}

.navbar-inverse .navbar-brand {
	color: #595959;
}

.nav.navbar-nav.navbar-right li a {
    color: #595959;
}

.navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus, .navbar-inverse .navbar-brand:hover {
    background-color: #595959;
    color: #f9f9f9;
}

.navbar-inverse .navbar-header .icon-bar{
	background-color: #595959
}
.navbar-inverse .navbar-header > button:hover{
	background-color: #595959
}
</style>
