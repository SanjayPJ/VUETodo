<template>
	<div class="card mb-4">
		<div class="card-header">
			Filter Todo
		</div>
		<div class="card-body">
		  <div class="form-group mb-3">
		    <select @change="filter_todos" class="form-control" id="exampleFormControlSelect1">
		      <option value="200">200</option>
		      <option value="100">100</option>
		      <option value="50">50</option>
		      <option value="20">20</option>
		      <option value="10">10</option>
		      <option value="5">5</option>
		    </select>
		  </div>
	</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'; 
	export default {
  		name: 'FilterTodos',
  		methods: {
			...mapActions(['filter_todos']),
		},
	}
</script>

<style scoped>
</style>