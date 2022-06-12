<template>
  <v-card>
    <v-card-text>
      <v-row
        align="center"
        class="grey--text text-lighten-1 font-weight-bold"
      >
        <v-col>{{ info.title }}</v-col>
        <v-col cols="auto">
          <v-icon
            color="grey lighten-1" small
            :title="info.description"
          >mdi-help-circle-outline</v-icon>
        </v-col>
      </v-row>
      <v-row
        align="center"
      >
        <v-col>
          <span class="text-h4">{{ info.value }}</span>
        </v-col>
        <v-col cols="auto">
          <v-chip
            v-if="info.dynamics"
            color="success"
            label
            text-color="white"
          >
            <v-icon left>
              mdi-triangle-small-up
            </v-icon>
            {{ info.dynamics }}
          </v-chip>
        </v-col>
      </v-row>
      <v-row
        align="center"
      >
        <v-col>
          {{ info.text1 }}
        </v-col>
        <v-col cols="auto" class="success--text">
          {{ info.text2 }}
        </v-col>
      </v-row>
      <v-row
        align="center"
      >
        <v-col>
          <v-btn
            color="primary"
            :to="{ name: info.actionName }"
          >Оптимизация</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn plain><v-icon class="mr-2">mdi-trending-up</v-icon> График</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TileCard',
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style>

</style>
