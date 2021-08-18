<template>
  <v-card class="mx-auto pt-5" max-width="800">
    <div>
      <v-chip
        class="ma-1"
        v-for="item in selectedFields"
        close
        :key="item"
        outlined
        @click:close="removeFields(item)"
        >{{ item }}</v-chip
      >
    </div>
    <v-checkbox
      class="mx-5 mb-0 c-box"
      v-for="item in list"
      :label="item"
      v-model="selectedFields"
      :value="item"
      :key="item"
      @change="submitList"
    ></v-checkbox>
  </v-card>
</template>


<script>
import { ALL_FIELD_LIST } from "../fieldTable.js";
export default {
  name: "InputArea",
  data() {
    return {
      list: ALL_FIELD_LIST,
      selectedFields: [],
    };
  },
  methods: {
    submitList: function () {
      this.$emit(
        "changedList",
        this.selectedFields.map((field) => this.list.indexOf(field))
      );
    },
    removeFields: function (item) {
      this.selectedFields.splice(this.selectedFields.indexOf(item), 1);
    },
  },
  watch: {
    selectedFields: function () {
      this.submitList();
    },
  },
};
</script>
