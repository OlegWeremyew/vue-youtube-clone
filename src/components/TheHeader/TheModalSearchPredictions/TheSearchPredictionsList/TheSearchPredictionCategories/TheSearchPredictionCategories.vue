<template>
  <div class="space-y-3 text-black text-sm mt-3">
<!--    <div-->
<!--        v-for="(label, index) in categories"-->
<!--        :key="label"-->
<!--        class="flex items-center cursor-pointer"-->
<!--    >-->
<!--      <BaseRadio-->
<!--          :id="`search-prediction-category-${index}`"-->
<!--          :value="label"-->
<!--          v-bind="$attrs"-->
<!--          v-model="modelValue"-->
<!--      >-->
<!--        {{ label }}-->
<!--      </BaseRadio>-->
<!--    </div>-->
  </div>
</template>

<script>
import BaseRadio from "@/components/Common/BaseRadio/BaseRadio.vue";

export default {
  name: "TheSearchPredictionCategories",
  components: {BaseRadio},
  props: {
    categories: Array,
    modelValue: String,
  },
}
</script>
