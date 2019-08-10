<template>
  <div class="home">
  	<div class="container">
       <div class="row">
        <div class="col-10">
          <SearchTodo />
        </div>
        <div class="col-2">
          <FilterTodos />
        </div>
      </div>
      <Todos /> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue'
import FilterTodos from '@/components/FilterTodos.vue'
import SearchTodo from '@/components/SearchTodo.vue'

export default {
  name: 'home',
  components: {
    Todos, FilterTodos, SearchTodo
  }
}
</script>
