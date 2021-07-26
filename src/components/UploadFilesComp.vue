<template>

  <div>
    <div>
      <label for="fileInput">Choose an file ({{ titleTest }}):</label>
      <input
        type="file" id="fileInput" name="uploader" multiple @change="handleSelected" />
    </div>

    <div>
      <span>Progress: {{ currentProgress }}</span>
    </div>

    <div>
      <button @click="handleUploadButtonClick">Upload</button>
    </div>

  </div>

</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import UploadFilesService from "@/services/UploadFilesService";

export default defineComponent({
  name: "UploadFilesComp",

  setup() {
    const titleTest = ref<number | string>("qw111eqwe");
    const uploader = ref(null);

    let files: FileList;

    const handleSelected = (e: any): void => {
      console.log(e.target.files);

      files = e.target.files;
    };


    function handleUploadButtonClick(e: any) {
      UploadFilesService.upload(files, 0);
    }

    return { titleTest, handleSelected, uploader, handleUploadButtonClick };
  }
});
</script>

<style scoped>

</style>