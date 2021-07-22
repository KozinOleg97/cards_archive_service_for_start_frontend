<template>
  <div class="test-form">
    <p>
      data = {{ data.code }}
    </p>
    <p>
      name = {{ data.name }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TestDataService from "@/services/TestDataService";
import TestData from "@/types/TestData";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "DataTestComp",
  data() {
    return {
      data: {} as TestData
    };
  },
  methods: {
    doTest() {
      TestDataService.get().then((response: ResponseData) => {
        this.data = response.data;
        console.log(response.data);
      }).catch((e: Error) => {
        console.log(e);
      });
    }
  },
  mounted() {
    this.doTest();
  }
});
</script>

<style scoped>

</style>