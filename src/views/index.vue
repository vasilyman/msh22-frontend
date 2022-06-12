<template>
  <div>
    <v-row class="my-3">
      <v-col>
        <h1 class="text-h4 base--text">Сквозная аналитика</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="card in cards.slice(0,3)" :key="card.title">
        <TileCard :info="card" />
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="7">
        <ClientLeads />
      </v-col>
      <v-col cols="5">
        <ConcurentActivity />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="card in cards.slice(3,6)" :key="card.title">
        <TileCard :info="card" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    ClientLeads: () => import('@/components/diagrams/clientLeads.vue'),
    TileCard: () => import('@/components/TileCard.vue'),
    ConcurentActivity: () => import('@/components/ConcurentActivity.vue'),
  },
  data() {
    return {
      cards: [
        {
          title: 'Клиенты банка, среди подписчиков',
          description: 'Клиенты банка, среди подписчиков',
          value: '+ 45',
          dynamics: '2.53%',
          text1: 'После оптимизации',
          text2: 'Механики привлечения',
          actionName: 'combine',
        },
        {
          title: 'Ценность клиента, LTV',
          description: 'Ценность клиента, LTV',
          value: '₽ 320 000',
          dynamics: '2.53%',
          text1: 'После оптимизации',
          text2: 'Детальная расшифровка',
          actionName: 'combine',
        },
        {
          title: 'Прогноз бюджета',
          description: 'Прогноз бюджета',
          value: '₽ 120 000',
          dynamics: '2.53%',
          text1: 'После оптимизации',
          text2: 'Механики привлечения',
          actionName: 'combine',
        },
        {
          title: 'Доступ по регионам',
          description: 'Доступ по регионам',
          value: 'База по городам',
          dynamics: '',
          text1: 'После оптимизации',
          text2: 'Механики привлечения',
          actionName: 'region',
        },
        {
          title: 'Вовлеченность аудитории, за 24 часа',
          description: 'Вовлеченность аудитории, за 24 часа',
          value: '56%',
          dynamics: '2.53%',
          text1: 'После оптимизации',
          text2: 'Детальная расшифровка',
          actionName: 'combine',
        },
        {
          title: 'Сегментация ЦА',
          description: 'Сегментация ЦА',
          value: 'Детальная аналитика',
          dynamics: '',
          text1: 'После оптимизации',
          text2: 'Механики привлечения',
          actionName: 'combine',
        },
      ],
    };
  },
};
</script>

<style>

</style>
