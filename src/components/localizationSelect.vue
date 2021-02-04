<template>
  <div class="dropdown me-2">
    <button
      class="btn btn-primary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ currentLanguage.text }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li
        v-for="language in languages"
        :key="language.code"
        @click="changeLanguage(language)"
      >
        <a class="dropdown-item" href="#">{{ language.text }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import { languages } from "@/constants";
export default {
  components: {},
  data() {
    return {
      languages,
    };
  },
  computed: {
    currentLanguage() {
      return this.$store.state.currentLanguage;
    },
  },
  methods: {
    changeLanguage(language) {
      this.$root.$i18n.locale = language.code;
      this.$store.commit("changeLanguage", language);
    },
  },
};
</script>