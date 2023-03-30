<template>
  <div class="flex w-full mr-2">
    <div class="relative flex w-full">
      <TheSearchInput
          v-model:query="query"
          :has-results="results.length"
          @update:query="updateSearchResults"
          @change-state="toggleSearchResults"
          @keyup.up="handlePreviousSearchResult"
          @keyup.down="handleNextSearchResult"
          @keydown.up.prevent
          @enter="selectSearchResult"
      />
      <TheSearchResults
          v-show="isSearchResultsShown"
          :results="results"
          :active-result-id="activeSearchResultId"
          @search-result-mouseenter="activeSearchResultId = $event"
          @search-result-mouseleave="activeSearchResultId = null"
          @search-result-click="selectSearchResult"
      />
    </div>

    <TheSearchButton @click.stop="selectSearchResult"/>
  </div>
</template>

<script>
import TheSearchInput from "./TheSearchInput/TheSearchInput.vue";
import TheSearchButton from "./TheSearchButton/TheSearchButton.vue";
import TheSearchResults from "./TheSearchResults/TheSearchResults.vue";

export default {
  name: 'TheSearch',
  components: {
    TheSearchInput,
    TheSearchButton,
    TheSearchResults,
  },
  data() {
    return {
      query: '',
      activeQuery: '',
      isSearchResultsShown: false,
      activeSearchResultId: null,
      results: [],
      keywords: [
        'new york giants',
        'new york alicia keys',
        'new york giants vs washington football',
        'new york',
        'new york song',
        'new york new york frank sinatra',
        'new york jets',
        'new york city',
        'new york giants live',
        'new york state of mind',
        'new york giants vs washington football live',
        'new york giants injury',
        'new york giants live stream',
        'new york accent'
      ],
    }
  },

  computed: {
    trimmedQuery() {
      return this.query.replace(/\s+/g, ' ').trim()
    }
  },

  methods: {
    updateSearchResults() {
      this.activeSearchResultId = null
      this.activeQuery = this.query

      if (this.query === '') {
        this.results = []
        return
      }

      this.results = this.keywords.filter(result => {
        return result.includes(this.trimmedQuery)
      })
    },
    toggleSearchResults(isSearchInputActive) {
      this.isSearchResultsShown = isSearchInputActive && this.results.length > 0
    },
    handlePreviousSearchResult() {
      if (this.isSearchResultsShown) {
        this.makePreviousSearchResultActive()
        this.updateQueryWithSearchResult()
        return
      }

      this.toggleSearchResults(true)
    },
    handleNextSearchResult() {
      if (this.isSearchResultsShown) {
        this.makeNextSearchResultActive()
        this.updateQueryWithSearchResult()
        return
      }

      this.toggleSearchResults(true)
    },
    makePreviousSearchResultActive() {
      if (this.activeSearchResultId === null) {
        this.activeSearchResultId = this.results.length - 1
      } else if (this.activeSearchResultId === 0) {
        this.activeSearchResultId = null
      } else {
        this.activeSearchResultId -= 1
      }
    },
    makeNextSearchResultActive() {
      if (this.activeSearchResultId === null) {
        this.activeSearchResultId = 0
      } else if (this.activeSearchResultId + 1 === this.results.length) {
        this.activeSearchResultId = null
      } else {
        this.activeSearchResultId += 1
      }
    },
    updateQueryWithSearchResult() {
      const hasActiveSearchResult = this.activeSearchResultId !== null

      this.query = hasActiveSearchResult
          ? this.results[this.activeSearchResultId]
          : this.activeQuery
    },
    onClickAndResize() {
      this.toggleSearchResults(false)
    },
    selectSearchResult() {
      this.query = this.activeSearchResultId === null
          ? this.query
          : this.results[this.activeSearchResultId]

      this.toggleSearchResults(false)
      this.updateSearchResults()
    },
  },
  mounted() {
    window.addEventListener('click', this.onClickAndResize)
    window.addEventListener('resize', this.onClickAndResize)
  },
}
</script>
