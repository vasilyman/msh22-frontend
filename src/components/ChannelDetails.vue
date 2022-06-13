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
          <div class="text-h6 my-4">{{ props.name }}</div>
          <div>
            <v-chip
              outlined
              label
              color="white"
              class="mr-3"
            >
              <v-icon left>
                mdi-account-group
              </v-icon>
              {{ props.n_subscribers }}
            </v-chip>
            <v-chip
              outlined
              label
              color="white"
            >
              <v-icon left>
                mdi-check-all
              </v-icon>
              {{ props.category }}
            </v-chip>
          </div>
        </div>
      </v-img>
    </v-card>
    <v-container class="base--text d-flex flex-column white" style="height:100%;">
      <v-row
        align="center"
        class="grey--text text-lighten-1 font-weight-bold"
      >
        <v-col>Подходит для продуктов</v-col>
        <v-col cols="auto">
          <v-icon color="grey lighten-1" small>mdi-help-circle-outline</v-icon>
        </v-col>
      </v-row>
      <v-row
        v-for="item in concurents2"
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
      <v-divider class="my-5"></v-divider>
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
      <v-row
        align="center"
        class="grey--text text-lighten-1 font-weight-bold"
      >
        <v-col>Средний доход ЦА</v-col>
        <v-col cols="auto">
          <v-icon
            color="grey lighten-1" small
            title="Средний доход ЦА"
          >mdi-help-circle-outline</v-icon>
        </v-col>
      </v-row>
      <v-row
        align="center"
      >
        <v-col>
          <span class="text-h4">Выше ₽ 100 000</span>
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
            40%
          </v-chip>
        </v-col>
      </v-row>
      <v-divider class="my-5"></v-divider>
      <v-row
        align="center"
        class="grey--text text-lighten-1 font-weight-bold"
      >
        <v-col>Цитируемые конкуренты</v-col>
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
  data() {
    return {
      concurents: [
        {
          color: 'green',
          name: 'Сбербанк',
          value: '40%',
        },
        {
          color: 'grey',
          name: 'ВТБ',
          value: '20%',
        },
        {
          color: 'blue',
          name: 'УралСиб',
          value: '2%',
        },
      ],
      concurents2: [
        {
          color: 'green',
          name: 'Кредитные карты',
          value: '40%',
        },
        {
          color: 'grey',
          name: 'Автокредиты',
          value: '20%',
        },
        {
          color: 'blue',
          name: 'Ипотечные кредиты',
          value: '2%',
        },
      ],
    };
  },
};
</script>

<style>

</style>
