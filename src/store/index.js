import { createStore } from 'vuex';
import { languages } from "../constants";
import axios from "axios";
export default createStore({
  state: {

    currentLanguage: languages[0],
    userInfo: {
      title: "",
      name: "",
      email: "",
      password: "",
    },
    contactInfo: []
  },
  mutations: {
    changeLanguage(state, language) {
      state.currentLanguage = language;
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    removeUserInfo(state) {
      state.userInfo = {
        title: "",
        name: "",
        email: "",
        password: "",
      }
    },
    setcontactInfo(state, contact) {
      state.contactInfo.push(contact);
    }
  },
  actions: {
    fetchContactInfo({ commit }, contactInfo) {
      axios.post("http://localhost:3000/contact", contactInfo).then((response) => {
        commit("setcontactInfo", response?.data || []);
      })
    }
  },

  getters: {
 },
  modules: {
  }
})
