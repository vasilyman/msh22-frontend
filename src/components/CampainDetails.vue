<template>
  <v-container class="base--text d-flex flex-column" style="height:100%;">
    <div class="text-h5 mb-5">Канал</div>
    <div class="">Площадка: {{ props.source }}</div>
    <div class="">Канал: {{ props.channel }}</div>
    <div class="">CPM: {{ props.cpm }}</div>
    <div class="">Закупка постов/страниц: {{ props.posts }}</div>
    <div class="">CPL: {{ props.cpl }}</div>
    <div class="mb-5">Ожидается заявок: {{ props.appliedFormCountPrediction }}</div>
    <v-btn to="#" color="primary">В кабинет <v-icon small>mdi-open-in-new</v-icon></v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'CampainDetails',
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
