<template>
  <div>
    <v-system-bar v-if="system" app color="primary" dark window>
      <v-spacer></v-spacer>
      <span class="accent--text">Личный кабинет</span>
    </v-system-bar>
    <v-app-bar
      app
      color="primary"
      dark
      flat
      clipped-left
      clipped-right
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click="drawerLocal = !drawerLocal"
      ></v-app-bar-nav-icon>
      <slot v-if="!$vuetify.breakpoint.smAndDown" name="user"></slot>
      <v-toolbar-title v-if="title">{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="menu"></slot>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: String,
    drawer: Boolean,
    system: Boolean,
  },
  data() {
    return {
      drawerLocal: true,
    };
  },
  watch: {
    drawer: {
      immediate: true,
      handler(val) {
        this.drawerLocal = val;
      },
    },
    drawerLocal: {
      handler(val) {
        this.$emit('update:drawer', val);
      },
    },
    '$vuetify.breakpoint.smAndDown': {
      immediate: true,
      handler(val) {
        this.drawerLocal = !val;
      },
    },
  },
};
</script>

<style>

</style>
