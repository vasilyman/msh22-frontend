export default {
  filters: {
    rangeToText(val) {
      return Array.isArray(val) ? val.join(' - ') : val;
    },
  },
};
