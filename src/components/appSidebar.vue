<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    color="grey lighten-4"
    clipped
    touchless
    :mobile-breakpoint="0"
    :temporary="$vuetify.breakpoint.smAndDown"
  >
    <slot />
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppSidebar',
  props: {
    value: Boolean,
  },
  data() {
    return {
      drawer: false,
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.drawer = val;
      },
    },
    drawer: {
      handler(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>

<style>

</style>
