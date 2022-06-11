<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
    :mobile-breakpoint="0"
    :temporary="true"
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
