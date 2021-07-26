<template>
  <input ref="upload"
         type="file"
         name="file-upload"
         multiple=""
         accept="image/jpeg, image/png"
         @change="onUploadFiles">
</template>

<script>
export default {
  name: "Up"
};
</script>

<style scoped>

</style>