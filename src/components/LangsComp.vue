<template>
  <div>
    <span v-for="locale in locales" class="lang" :key="locale" @click="setLocale(locale)">{{ locale }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locales: []
    };
  },
  mounted() {
    this.locales = this.$i18n.availableLocales
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale }
      })
    }
  }
};
</script>

<style>
.lang {
  margin: 0 10px;
  cursor: pointer;
}
</style>
