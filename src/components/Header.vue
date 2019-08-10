<template>
	<nav class="navbar navbar-expand-lg navbar-dark nav-green mb-4">
	  <router-link to="/" class="navbar-brand">VUETodo</router-link>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNav">
	    <ul class="navbar-nav ml-auto">
	      <li class="nav-item active">
	      	<router-link to="/create" class="nav-link">Create</router-link>
	      </li>
	      <li class="nav-item active">
	      	<router-link to="/about" class="nav-link">About</router-link>
	      </li>
	    </ul>
	  </div>
	</nav>
</template>

<style>
	.nav-green{
		background-color: grey;
	}
</style>
