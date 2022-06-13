<template>
  <v-navigation-drawer
    v-model="drawerRight"
    clipped
    color="grey lighten-4"
    touchless
    right
    app
    :mobile-breakpoint="0"
    :temporary="true"
    width="40%"
  >
    <component
      v-if="getDrawerRightComponent"
      :is="getDrawerRightComponent"
      :props="getDrawerRightProps"
    />
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'appRightSidebar',
  props: {
    value: Boolean,
    props: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    CampainDetails: () => import('@/components/CampainDetails.vue'),
    ChannelDetails: () => import('@/components/ChannelDetails.vue'),
  },
  data() {
    return {
      drawerRight: false,
    };
  },
  computed: {
    ...mapGetters('App', ['getDrawerRightComponent', 'getDrawerRightProps']),
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.drawerRight = val;
      },
    },
    drawerRight: {
      handler(val) {
        this.$emit('input', val);

        if (!val) {
          this.$store.commit('App/setDrawerRightComponent', null);
          this.$store.commit('App/setDrawerRightProps', {});
        }
      },
    },
  },
};
</script>

<style>

</style>
