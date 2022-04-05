const app = Vue.createApp({
    data() {
        return {
            title: 'Mr',
            firstName: 'Moyen',
            lastName: 'islam',
            email: 'moyenislam75@gmail.com',
            gender: 'male',
            phoneNumber: '+8801308989743',
            picture: 'https://i.ibb.co/JRzXY6W/thrive-market-chicken-rice-one-pot.jpg',
            age: 23
        }
    },
    methods: {
        async getInfo() {
            const res = await fetch('https://randomuser.me/api/')
            const { results } = await res.json()
            // console.log(results[0])
            this.title = results[0].name.title
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
            this.phoneNumber = results[0].phone
            this.age = results[0].dob.age
        }
    }
})
app.mount('#app')