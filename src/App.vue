<template>
  <v-app>
    <AppSidebar v-model="drawer" />
    <AppHeader
      :title="getTitle"
      :drawer.sync="drawer"
    >
      <template #user>
        <AppUser />
      </template>
      <template #menu>
        <HorizontalMenu :items="getMenu" text />
      </template>
    </AppHeader>
    <v-main class="grey lighten-4">
      <v-container grid-list-xs class="min-100">
         <router-view/>
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    AppHeader: () => import('@/components/appHeader.vue'),
    AppSidebar: () => import('@/components/appSidebar.vue'),
    AppUser: () => import('@/components/appUser.vue'),
    AppFooter: () => import('@/components/appFooter.vue'),
    HorizontalMenu: () => import('@/components/HorizontalMenu.vue'),
  },
  computed: {
    ...mapGetters('App', ['getTitle', 'getMenu']),
    ...mapGetters('User', ['getIsAuthenticated']),
    drawer: {
      get() {
        return this.$store.getters['App/getDrawer'];
      },
      set(val) {
        this.$store.commit('App/setDrawer', val);
      },
    },
  },
  created() {
    this.checkAuth();
  },
  methods: {
    ...mapActions('User', ['fetchUser']),
    checkAuth() {
      if (!this.getIsAuthenticated) {
        this.fetchUser(1);
      }
    },
  },
};
</script>

<style lang="scss">
.min-100 {
  min-height: 100%;
}
</style>
