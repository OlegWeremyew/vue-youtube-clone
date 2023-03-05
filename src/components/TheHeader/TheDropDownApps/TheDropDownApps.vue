<template>
  <div
      class="opacity-0 group-hover:opacity-100 absolute top-9 right-0 sm:left-0 bg-white w-60 border border-t-0"
  >
    <section class="py-2 border-b">
      <ul>
        <drop-downs-list-item label="YouTube TV"></drop-downs-list-item>
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <drop-downs-list-item label="YouTube Music TV"></drop-downs-list-item>
        <drop-downs-list-item label="YouTube Kids"></drop-downs-list-item>
      </ul>
    </section>
    <section class="py-2">
      <ul>
        <drop-downs-list-item label="Creator Academy"></drop-downs-list-item>
        <drop-downs-list-item label="YouTube for Artists"></drop-downs-list-item>
      </ul>
    </section>
  </div>
</template>

<script>
import BaseIcon from "../../Common/BaseIcon.vue";
import DropDownsListItem from "./DropDownsListItem.vue";

export default {
  name: "TheDropDownApps",
  components: {
    DropDownsListItem,
    BaseIcon,
  }

}
</script>

<style scoped>

</style>