<template>
  <div class="filter-item"
       :style="`background-image: url(${uploadedImg})`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  data() {
    return {

    }
  },
  methods: {

  },
  props: {
    uploadedImg: String,
  }
}
</script>

<style scoped>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}</style>