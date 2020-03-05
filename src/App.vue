<template>
  <v-app id="inspire">
    <v-navigation-drawer
    v-model="drawer"
    app
    >
    <v-list dense>
      <v-list-item
      link
      v-for="link of links"
      :key="link.title"
      :to='link.url'
      >
      <v-list-item-action>
        <v-icon>{{ link.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="link.title"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item
    v-if="isUserLoggedIn"
    @click='onLogout'
    >
    <v-list-item-action>
      <v-icon>mdi-exit-to-app</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title v-text="'Выход'"></v-list-item-title>
    </v-list-item-content>
  </v-list-item>

</v-list>
</v-navigation-drawer>

<v-app-bar
app
color="#424242"
dark
>
<v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"/>
<v-toolbar-title>
  <router-link to='/' tag='span' class='pointer' style="font-size: 45px; font-family: 'Tangerine', cursive; font-weight: bold;">Plane Store</router-link>
</v-toolbar-title>
<v-spacer></v-spacer>
<v-toolbar-items link class="hidden-sm-and-down">
  <v-btn
  v-for="link in links"
  text
  :key="link.title"
  :to="link.url"
  style="font-family: 'Istok Web', sans-serif; font-size: 13px;"
  >
  <v-icon left>{{link.icon}}</v-icon>
  {{link.title}}
</v-btn>
<v-btn
v-if="isUserLoggedIn"
@click='onLogout'
text
style="font-family: 'Istok Web', sans-serif; font-size: 13px;"
>
<v-icon left>mdi-exit-to-app</v-icon>
Выход
</v-btn>
</v-toolbar-items>
</v-app-bar>

<v-content>
  <v-container
  class="fill-height"
  fluid
  >
  <v-row
  align="center"
  justify="center"
  >
</v-row>
</v-container>
</v-content>
<template v-if="error">
  <v-snackbar
  v-model="snackbar"
  @input='closeError'
  :color="color"
  :multi-line="mode === 'multi-line'"
  :timeout="timeout"
  >
  {{error}}
  <v-btn
  dark
  text
  @click="closeError"
  value="true"
  >
  Close
</v-btn>
</v-snackbar>
</template>

<v-footer
color="#424242"
app
>
<span class="white--text" style="font-family: 'Istok Web', sans-serif; margin:auto; display:table;">&copy; 2019</span>
</v-footer>
<router-view></router-view>
</v-app>
</template>

<script>


export default {
  data: () => ({
    drawer: null,
    color: 'error',
    timeout: 5000,
    mode: '',
    snackbar: true
  }),
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
        {title: 'Заказы', icon: 'mdi-clipboard-multiple-outline', url: '/orders'},
        {title: 'Новый товар', icon: 'mdi-note-plus', url: '/new'},
        {title: 'Мои товары', icon: 'mdi-clipboard-list', url: '/list'}
        ]
      }

      return [
      {title: 'Вход', icon: 'mdi-account-lock', url: '/login'},
      {title: 'Регистрация', icon: 'mdi-account-card-details', url: '/registration'}
      ]
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Tangerine:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Istok+Web:400,400i,700,700i&display=swap&subset=cyrillic,cyrillic-ext');

.pointer{
  cursor: pointer
}
</style>
