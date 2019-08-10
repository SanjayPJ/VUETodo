<template>
<div class="card mb-4">
	<div class="card-header">
		Search Todo
	</div>
	<div class="card-body">
		<div class="form-group mb-3">
		    <input @keyup="search_todo" type="text" class="form-control" id="exampleFormControlInput1" placeholder="type here...">
		  </div>
	</div>
</div>
</template>

<script>
import { mapActions } from 'vuex'; 

export default {
  	name: 'SearchTodo',
  	data(){
  		return {
  			title: ''
  		}
  	},
  	methods: {
		...mapActions(['search_todo']),
	},
}
</script>