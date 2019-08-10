import axios from 'axios'

const state = {
    todos: [],
};

const getters = {
    all_todos: state => state.todos,
};

const actions = {
    async get_todos( { commit } ){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        // console.log(response.data);
        commit('post_todos', response.data);
    },
    async add_todos( { commit }, title ){
        // console.log(title);
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });
        // console.log(response.data);
        commit('update_todo', response.data);
    },
    async remove_todo ( {commit}, id ){
        // console.log(id);
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('commit_delete_todo', id);
    },
    async filter_todos( {commit}, e ){
        // console.log(e.target.value);
        const response = await axios.get(`http://jsonplaceholder.typicode.com/photos?_start=0&_limit=${e.target.value}`);
        commit('post_todos', response.data);
    },
    async search_todo( {commit}, e ){
        commit('commit_search_todo', e.target.value)
    },
    async complete_todo( {commit}, todo ){
        todo.completed = true;
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);
        commit('commit_complete_todo', response.data.id);
    }, 
    async update_todo( {commit}, todo ){
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);
        commit('commit_update_todo', response.data);
    },
};

const mutations = {
    post_todos: (state, todos) => {state.todos = todos}, 
    update_todo: (state, todo) => {state.todos.unshift(todo)},
    commit_delete_todo: (state, id) => {state.todos = state.todos.filter(todo => { return todo.id != id })}, 
    commit_search_todo: (state, search_key) => { state.todos = state.todos.filter(todo => { return todo.title.match(search_key) }) },
    commit_complete_todo: (state, id) => {
        state.todos.map(todo => {
            if(id == todo.id){
                todo.completed = true;
                return todo;
            }
        })
    },
    commit_update_todo: (state, given_todo) => {
        state.todos.map(todo => {
            if(given_todo.id == todo.id){
                todo.id = given_todo.id;
                todo.title = given_todo.title;
                todo.completed = given_todo.completed;
                return todo;
            }
        })
    },
}

export default {
    state,
    getters,
    actions,
    mutations
};