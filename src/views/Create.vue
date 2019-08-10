<template>
	<div class="container">
		<div class="row">
	        <div class="col-10">
	          <AddTodo />
	        </div>
		</div>
	</div>
</template>

<script>
	import AddTodo from '@/components/AddTodo.vue'
	export default {
	  name: 'create',
	  components: {
	    AddTodo
	  }
	}
</script>