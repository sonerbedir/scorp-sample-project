
<template>
  <router-view name="appHeader" />
  <router-view name="appFooter" />
  <router-view></router-view>
</template>



<script>
export default {
  created() {
    console.log("contactInfo",this.$store.state.contactInfo);
    // 
  },
  
};
</script>