<template>
  <div class="flex w-full mr-2">
    <TheSearchInput/>
    <TheSearchButton/>
  </div>
</template>

<script>
import TheSearchInput from "./TheSearchInput/TheSearchInput.vue";
import TheSearchButton from "./TheSearchButton/TheSearchButton.vue";

export default {
  name: "TheSearch",
  components: {TheSearchButton, TheSearchInput}
}
</script>
