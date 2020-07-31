const app = new Vue({
    el: '#app',
    data() {
        return {
            title: 'Hello Coding Garden'
        }
    },
    methods: {
        addTodo() {
            console.log("form submitted");
        }
    },
})