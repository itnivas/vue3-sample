<template>
  <div>hi</div>
  <input type="text" v-focus />
</template>

<script>
export default {
  name: 'Measurement',
  props: {
    msg: String,
  },
  // directives: {
  //   color: function (el, binding) {
  //     el.syle.color = binding.value;
  //   },
  // },
  mounted: function () {
    console.log('Mounted-> Measurement');
  },
};
</script>

<style scoped></style>
