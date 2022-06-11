<template>
  <div>
    <v-list-item>
      <v-list-item-avatar color="primary">
        <v-img v-if="getAvatar" :src="getAvatar" outlined></v-img>
        <div v-else>{{ getFullname | getInitials }}</div>
      </v-list-item-avatar>
      <!-- <v-list-item-content v-if="getFullname">
        {{ getFullname | getInitials}}
      </v-list-item-content> -->
    </v-list-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'appUser',
  computed: {
    ...mapGetters('User', ['getFullname', 'getAvatar']),
  },
  filters: {
    getInitials(val) {
      return val?.split(' ')?.map((word) => word[0]?.toUpperCase()).join('');
    },
  },
};
</script>

<style>

</style>
