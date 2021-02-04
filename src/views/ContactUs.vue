<template>
  <div class="row col-12">
    <div class="col-lg-6 offset-lg-3 col-12">
      <div class="card text-center justify-content-center mt-3">
        <div class="card-body">
          <Input type="text" name="contactTitle" v-model="contactInfo.title" />
          <Input type="text" name="contactName" v-model="contactInfo.name" />
          <Input
            type="number"
            name="contactPhone"
            v-model="contactInfo.phonenumber"
            :border="{
              'border border-success': isValidNumber,
              'border border-danger': !isValidNumber,
            }"
          />
          <Input
            type="text"
            name="contactEmail"
            v-model="contactInfo.email"
            :border="{
              'border border-success': isValid,
              'border border-danger': !isValid,
            }"
          />
          <div class="position-relative">
            <Input
              type="text"
              name="country"
              @keyup="someHandler($event)"
              v-model="contactInfo.countryName"
            />
            <ul
              v-if="filteredCountryList.length > 0"
              class="dropdown-menu show position-absolute w-100"
            >
              <li
                v-for="country in filteredCountryList"
                :key="country.id"
                @click="setCountry(country.name)"
              >
                <a class="dropdown-item" href="#">{{ country.name }}</a>
              </li>
            </ul>
          </div>
          <label for="exampleFormControlTextarea1"></label>
          <textarea
            v-model="contactInfo.text"
            style="resize: none"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
          ></textarea>
          <button
            type="button"
            data-dismiss="modal"
            class="btn btn-primary mt-2"
            @click="saveContact"
          >
            {{ $t("message.send") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { countryList } from "@/constants";
import Input from "@/components/Input";
export default {
  components: {
    Input,
  },
  data() {
    return {
      contactInfo: {
        title: "",
        name: "",
        email: "",
        phonenumber: "",
        countryName: "",
        text: "",
      },
      countryList,
      filteredCountryList: [],
      isValid: false,
      isValidNumber: false,
    };
  },

  watch: {
    "contactInfo.email": function (val) {
      //eslint-disable-next-line
      if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(val)) {
        console.log(true);
        this.isValid = true;
      } else {
        this.isValid = false;
        console.log(false);
      }
    },
    "contactInfo.phonenumber": function (val) {
      //eslint-disable-next-line
      if (val.length < 10 || val.length > 11) {
        this.isValidNumber = false;
      } else {
        this.isValidNumber = true;
      }
    },
  },

  created() {
    if (this.$store.state.userInfo.email !== "") {
      const loggedInUser = this.$store.state.userInfo;

      this.contactInfo.email = loggedInUser.email;
      this.contactInfo.name = loggedInUser.name;
    }else {

      this.contactInfo.email = "";
      this.contactInfo.name= "";
    }
  },

  methods: {
    saveContact() {
      this.$store.dispatch("fetchContactInfo", this.contactInfo);
      console.log(this.$store.state.contactInfo);
      this.contactInfo = {
        title: "",
        name: "",
        email: "",
        phonenumber: "",
        countryName: "",
        text: "",
      };
    },
    someHandler(e) {
      if (this.contactInfo.countryName === "") {
        this.clearFoundedCountries();
      }

      if (
        (e.which > 64 && e.which < 91) /* a-z */ ||
        [186, 220, 221].indexOf(e.which) > -1 /* ü,ş,ç */ ||
        (e.which === 8 && this.contactInfo.countryName !== "") /* backspace */
      ) {
        this.filteredCountryList = this.countryList.filter(
          (x) =>
            x.name
              .toLowerCase()
              .indexOf(this.contactInfo.countryName.toLowerCase()) > -1
        );
      }
    },
    setCountry(countryName) {
      this.contactInfo.countryName = countryName;
      this.clearFoundedCountries();
    },
    clearFoundedCountries() {
      this.filteredCountryList = [];
    },
  },
};
</script>

