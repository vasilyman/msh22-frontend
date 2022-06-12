<template>
  <v-card>
    <v-card-text>
      <v-row
        align="center"
        class="grey--text text-lighten-1 font-weight-bold"
      >
        <v-col>Активность конкурентов в эфире</v-col>
        <v-col cols="auto">
          <v-icon color="grey lighten-1" small>mdi-help-circle-outline</v-icon>
        </v-col>
      </v-row>
      <v-row
        v-for="item in concurents"
        :key="item.name"
        justify="center"
      >
        <v-col class="d-flex align-center">
          <v-icon class="mr-2" :color="item.color">mdi-circle</v-icon>
          <span>{{ item.name }}</span>
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
            {{ item.value }}
          </v-chip>
        </v-col>
      </v-row>
      <v-row
        align="center"
      >
        <v-col>
          После оптимизации
        </v-col>
        <v-col cols="auto" class="success--text">
          Механики привлечения
        </v-col>
      </v-row>
      <v-row
        align="center"
      >
        <v-col><v-btn color="primary">Оптимизация</v-btn></v-col>
        <v-col cols="auto">
          <v-btn plain><v-icon class="mr-2">mdi-trending-up</v-icon> График</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ConcurentActivity',
  props: {
    concurents: {
      type: Array,
      default: () => ([
        {
          color: 'green',
          name: 'Сбербанк',
          value: '2.53%',
        },
        {
          color: 'grey',
          name: 'Новосиб-Инвест',
          value: '4.08%',
        },
        {
          color: 'blue',
          name: 'ВТБ',
          value: '1.15%',
        },
      ]),
    },
  },
};
</script>

<style>

</style>
