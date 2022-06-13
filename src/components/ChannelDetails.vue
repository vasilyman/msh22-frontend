<template>
  <div>
    <v-card
      flat
      class="rounded-0"
    >
      <v-img
        class="white--text primary"
        height="200px"
      >
        <div
          class="d-flex flex-column justify-space-between container container--fluid"
          style="height:100%;"
        >
          <v-row>
            <v-col>Телеграм</v-col>
            <v-col class="text-end">
              <v-btn class="primary--text">
                В кабинет<v-icon class="ml-2" small>mdi-open-in-new</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-card-title>Артемий Лебедев</v-card-title>
        </div>
      </v-img>
    </v-card>
    <v-container class="base--text d-flex flex-column white" style="height:100%;">
      <v-row
        align="center"
        class="grey--text text-lighten-1 font-weight-bold"
      >
        <v-col>CPM (за 1000 показов)</v-col>
        <v-col cols="auto">
          <v-icon
            color="grey lighten-1" small
            title="CPM (за 1000 показов)"
          >mdi-help-circle-outline</v-icon>
        </v-col>
      </v-row>
      <v-row
        align="center"
      >
        <v-col>
          <span class="text-h4">₽ 120 000</span>
        </v-col>
        <v-col cols="auto">
          <v-chip
            color="success"
            label
            text-color="white"
          >
            <v-icon left>
              mdi-triangle-small-up
            </v-icon>
            2.53%
          </v-chip>
        </v-col>
      </v-row>
      <v-divider class="my-5"></v-divider>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'ChannelDetails',
  props: {
    props: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style>

</style>
