<template>
  <div>
    <v-file-input
      v-model="inputCsv"
      label="Загрузить датасет"
      outlined
      clearable
      dense
      accept=".csv"
    ></v-file-input>
    <v-btn
      :disabled="uploadBtnDisabled"
      block
      @click="uploadCsv"
    >Загрузить датасет</v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UploadDataset',
  data() {
    return {
      inputCsv: null,
    };
  },
  computed: {
    uploadBtnDisabled() {
      return !(this.inputCsv instanceof File);
    },
  },
  methods: {
    ...mapActions('ClientData', ['uploadFile']),
    async uploadCsv() {
      this.uploadFile(this.inputCsv);
    },
  },
};
</script>

<style>

</style>
