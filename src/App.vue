<template>
  <v-app>
    <routerView name="sidebar" v-model="drawer" />
    <AppHeader
      :drawer.sync="drawer"
    >
      <template #user>
        <Logo class="mr-2" />
      </template>
      <template #menu>
        <HorizontalMenu
          v-if="!$vuetify.breakpoint.smAndDown"
          :items="getMenu"
          text
          dark
          v-model="currentMenu"
        />
      </template>
    </AppHeader>
    <v-main class="grey lighten-4">
      <v-container fluid grid-list-xs class="min-100">
         <router-view/>
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'App',
  components: {
    AppHeader: () => import('@/components/appHeader.vue'),
    Logo: () => import('@/components/logo.vue'),
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
    currentMenu: {
      get() {
        return this.$store.getters['App/getCurrentMenu'];
      },
      set(val) {
        this.setCurrentMenu(val);
      },
    },
  },
  watch: {
    currentMenu: {
      handler(val = 'index') {
        if (this.$route.name !== val) {
          this.$router.push({ name: val })
            .catch((e) => {
              console.log(e);
            });
        }
      },
    },
    $route: {
      immediate: true,
      handler({ name }) {
        this.currentMenu = name;
      },
    },
  },
  methods: {
    ...mapActions('User', ['fetchUser']),
    ...mapMutations('App', ['setCurrentMenu']),
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
