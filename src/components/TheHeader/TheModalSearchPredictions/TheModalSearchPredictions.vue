<template>
  <BaseModal class="md:w-4/5 max-w-2xl">
    <p class="text-base text-black tracking-wide">Report search predictions</p>
    <TheSearchPredictionsList
        :list="selectedSearchPredictions"
        :search-predictions="searchPredictions"
    />

    <p class="text-xs text-gray-600 mt-5">The selected predictions are:</p>

    <!--    <TheSearchPredictionCategories-->
    <!--        :categories="searchPredictionCategories"-->
    <!--        v-model="selectedSearchPredictionCategory"-->
    <!--    />-->

    <div class="space-y-3 text-black text-sm mt-3">
      <div
          v-for="(label, index) in searchPredictionCategories"
          :key="label"
          class="flex items-center cursor-pointer"
      >
        <input
            type="radio"
            class="h-5 w-5 cursor-pointer"
            :id="`search-prediction-category-${index}`"
            :value="label"
            v-model="selectedSearchPredictionCategory"
        />
        <label
            :for="`search-prediction-category-${index}`"
            class="ml-4 cursor-pointer flex-grow"
        >
          {{ label }}
        </label>
      </div>
    </div>

    <div class="text-black mt-6 text-sm">
      <BaseTextarea
          :value="searchPredictionDetails"
          :limit="500"
          @set-value="updateDetailsValue"
      />
    </div>

    <template v-slot:footer="{ close }">
      <BaseButton @click="close" class="ml-auto">
        Cancel
      </BaseButton>

      <BaseButton class="mx-1 text-gray-400 cursor-auto" disabled>
        Report
      </BaseButton>
    </template>

  </BaseModal>
</template>

<script>
import BaseModal from "@/components/Common/BaseModal/BaseModal.vue";
import TheSearchPredictionsList from "./TheSearchPredictionsList/TheSearchPredictionsList.vue";
import BaseButton from "@/components/Common/BaseButton/BaseButton.vue";
import TheSearchPredictionCategories
  from "./TheSearchPredictionsList/TheSearchPredictionCategories/TheSearchPredictionCategories.vue";
import BaseTextarea from "@/components/Common/BaseTextarea/BaseTextarea.vue";

export default {
  components: {
    BaseTextarea,
    TheSearchPredictionCategories,
    BaseButton,
    BaseModal,
    TheSearchPredictionsList
  },
  props: {
    searchPredictions: Array
  },
  data: () => ({
      selectedSearchPredictions: [],
      searchPredictionDetails: '',
      selectedSearchPredictionCategory: null,
      searchPredictionCategories: [
        'Hateful',
        'Sexually Explicit',
        'Violent',
        'Dangerous and harmful activity',
        'Other'
      ],
  }),
  methods: {
    updateDetailsValue(value) {
      this.searchPredictionDetails = value
    },
  },
}
</script>
