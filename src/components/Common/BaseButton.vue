<template>
  <button
      type="button"
      class="uppercase text-sm font-medium tracking-wider py-2.5 px-4 focus:outline-none"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
}
</script>
