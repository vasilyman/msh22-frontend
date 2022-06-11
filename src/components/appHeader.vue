<template>
  <div>
    <v-system-bar app color="primary" dark window>
      <v-spacer></v-spacer>
      <span class="">Личный кабинет</span>
    </v-system-bar>
    <v-app-bar
      app
      color="secondary"
      dark
      flat
      clipped-left
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click="drawerLocal = !drawerLocal"
      ></v-app-bar-nav-icon>
      <slot v-if="!$vuetify.breakpoint.smAndDown" name="user"></slot>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
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
  },
  data() {
    return {
      drawerLocal: false,
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
      handler() {
        this.drawerLocal = false;
      },
    },
  },
};
</script>

<style>

</style>
