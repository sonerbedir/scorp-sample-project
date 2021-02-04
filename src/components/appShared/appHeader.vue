<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <i class="fab fa-audible"></i>
      <a class="navbar-brand" href="#">
        <i class="bi-alarm"></i>
        <span class="ms-3">{{ $t(`message.${currentRouteName}`) }}</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-md-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <router-link class="nav-link active" aria-current="page" to="/">{{
            $t("message.homepage")
          }}</router-link>
          <router-link class="nav-link me-2 active" to="/contact">{{
            $t("message.contact")
          }}</router-link>
        </div>
        <localization-select />
        <button
          type="button"
          data-bs-target="#loginModal"
          data-bs-toggle="modal"
          class="btn btn-warning ms-2"
          v-if="!isUserExist"
        >
          {{ $t(`message.login`) }}
        </button>
        <user-select v-if="isUserExist" />
        
        <login-modal />
      </div>
    </div>
  </nav>
</template>


<script>
import userSelect from "@/components/userSelect";
import loginModal from "@/components/loginModal";
import localizationSelect from "@/components/localizationSelect";
export default {
  components: {
    localizationSelect,
    loginModal,
    userSelect,
  },
  computed: {
    isUserExist() {
      return this.$store.state.userInfo.email !== "";
    },
    currentRouteName() {
      return this.$route.name.toLowerCase();
    },
    loggedInUser() {
      return {
        name: this.$store.state.userInfo.name,
      };
    },
  },
};
</script>
