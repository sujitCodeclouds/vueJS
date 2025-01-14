const app = Vue.createApp({
    data() {
        return {
            name: 'Sujit',
            age: 38,
            imageURL: 'https://images.pexels.com/photos/30145492/pexels-photo-30145492/free-photo-of-traditional-vietnamese-dress-in-l-ng-s-n.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        };
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }
})
app.mount('#assignment');
