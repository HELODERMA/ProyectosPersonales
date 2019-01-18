<template>
  <b-media :right-align="WrittenByMe" vertical-align="center" class="mb-2">
    <b-img rounded="circle" slot="aside" blank blank-color="#ccc" width="60" alt="placeholder"/>
    <b-card>
      <slot></slot>
    </b-card>
  </b-media>
</template>

<script>
export default {
  props: {
    WrittenByMe: Boolean
  },

  data() {
    return {};
  },

  mounted() {}
};
</script>
