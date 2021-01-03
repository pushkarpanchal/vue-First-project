// var app = new Vue({
//   el: '#app',
//   data: {
//     user: {
//       login: "mojombo",
//       id: 1,
//       avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
//       url: "https://api.github.com/users/mojombo",
//       html_url: "https://github.com/mojombo",
//       likes: 0
//     }
//   },
//   methods: {
//     newLikes: function(){
//       this.user.likes = this.user.likes + 1
//     }
//   }
// })

Vue.component('user-item', {
  props: ['users'],
  template: `
      <div class="card text-center">
        <div><img :src="users.avatar_url" alt="" class='round-img' style="width:60px;"/></div>
        <h3>{{users.login}}</h3>
        <div>
          <a :href="users.html_url" class="btn btn-dark btn-sm my-1">User</a>
        </div>
      </div>`
})

var app = new Vue({
  el: '#app',
  data: {
    userList: ''
  },
  mounted: function () {
    this.$nextTick(async function () {
      const response = await fetch("https://api.github.com/users")
      const data = await response.json();
      this.userList = data;
    })
  }
})