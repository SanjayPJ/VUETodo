<template>
	<div class="container">
		<div class="row">
	        <div class="col-6">
	          <h3>Update Todo</h3>
	          <form class="mt-4" @submit.prevent="sendUpdate">
	          	<div class="form-group">
				    <label for="exampleFormControlInput1">Todo Id</label>
				    <input type="number" class="form-control" id="exampleFormControlInput1" v-model="todo.id">
				  </div>
				  <div class="form-group">
				    <label for="exampleFormControlInput1">Todo Title</label>
				    <input type="text" class="form-control" id="exampleFormControlInput1" v-model="todo.title">
				  </div>
				  <div class="form-check form-check-inline">
					  <input  class="form-check-input" type="checkbox" id="inlineCheckbox1" v-model="todo.completed">
					  <label class="form-check-label" for="inlineCheckbox1">Completed</label>
					</div>
					<div>
					<button class="btn btn-success mt-3 btn-block" type="submit">Update</button>
					</div>
	          </form>
	        </div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'; 

    export default {
	    name: "Update",
	    data() {
	        return {
	        	todo: {
	        		id: 1,
	        		title: "Hello World",
	        		completed: true
	        	}
	        };
	    },
	    methods: {
	    	...mapActions(['update_todo']),
	    	sendUpdate(){
	    		const new_todo = {
	    			id: this.todo.id,
	    			title: this.todo.title,
	    			completed: this.todo.completed
	    		}
	    		// console.log(new_todo);
	    		this.update_todo(new_todo);
	    		this.$router.push({ name: "home" });
	    	},
	        updateId() {
	        	this.todo = this.$route.params.todo;
	        },
	    },
	    watch: {
	        $route: "updateTodo"
	    },
	    computed: {
			...mapGetters(['all_todos']),
		},
		created(){
			this.todo = this.all_todos.filter(todo => { return todo.id == this.$route.params.todoID })[0];
		}
    };
</script>