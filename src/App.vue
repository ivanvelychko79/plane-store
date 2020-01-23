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
    
  </v-list>
</v-navigation-drawer>

<v-app-bar
app
color="#424242"
dark
>
<v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"/>
<v-toolbar-title>
  <router-link to='/' tag='span' class='pointer' style="font-size: 45px; font-family: 'Tangerine', cursive; font-weight: bold;">Business Jet Charter</router-link>
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
    links: [
    {title: 'Вход', icon: 'mdi-account-lock', url: '/login'},
    {title: 'Регистрация', icon: 'mdi-account-card-details', url: '/registration'},
    {title: 'Заказы', icon: 'mdi-clipboard-multiple-outline', url: '/orders'},
    {title: 'Новый борт', icon: 'mdi-note-plus', url: '/new'},
    {title: 'Мой парк', icon: 'mdi-clipboard-list', url: '/list'}
    ]
  }),

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Tangerine:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Istok+Web:400,400i,700,700i&display=swap&subset=cyrillic,cyrillic-ext');

  .pointer{
    cursor: pointer
  }
</style>
