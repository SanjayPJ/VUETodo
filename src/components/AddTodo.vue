<template>
<div class="card mb-4">
	<div class="card-header">
		Create Todo
	</div>
	<div class="card-body">
		<form @submit.prevent="onFormSubmit">
			<div class="input-group mb-3">
			  <input v-model="title" type="text" class="form-control" placeholder="What do you wanna do?" aria-label="Recipient's username" aria-describedby="button-addon2">
			  <div class="input-group-append">
			    <button class="btn btn-outline-success" type="submit" id="button-addon2">Create Todo</button>
			  </div>
			</div>
		</form>
	</div>
</div>
</template>

<script>
import { mapActions } from 'vuex'; 

export default {
  	name: 'AddTodo',
  	data(){
  		return {
  			title: '',
  		}
  	},
  	methods: {
		...mapActions(['add_todos']),
		onFormSubmit(){
			this.add_todos(this.title);
		}
	},
}
</script>

<style scoped>
</style>