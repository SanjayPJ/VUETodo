<template>
	<div class="card">
		<div class="card-header">
		    Todos
		  </div>
		<div class="card-body">
			<div class="row">
			  <div class="col-4" v-for="todo in all_todos" :key="todo.id" @dblclick="complete_todo(todo)">
			    <div class="alert alert-dismissible fade show" :class="[todo.completed ? 'alert-success': 'alert-dark']" role="alert">
				  <p>{{ todo.title | capitalize }}</p>
				  <small><router-link class="text-success" :to="{ name: 'update', params: { todoID: todo.id }}"><strong>Update</strong></router-link></small>
				  <button @click.prevent="remove_todo(todo.id)" type="button" class="close" data-dismiss="alert" aria-label="Close">
				    <span aria-hidden="true">&times;</span>
				  </button>
				</div>
			  </div>
		</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'; 

export default {
  	name: 'Todos',
	methods: {
		...mapActions(['get_todos', 'remove_todo', 'complete_todo']),
	},
	computed: {
		...mapGetters(['all_todos']),
	},
	filters: {
	  capitalize: function (value) {
	    if (!value) return ''
	    value = value.toString()
	    return value.charAt(0).toUpperCase() + value.slice(1)
	  }
	},
	created(){
		this.get_todos();
	},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
