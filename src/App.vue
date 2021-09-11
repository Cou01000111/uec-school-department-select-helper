<template>
  <v-app v-model="theme">
    <v-app-bar app color="primary">
      <div class="d-flex align-center">
        <span style="color: white">UEC school/department select helper</span>
      </div>

      <v-spacer></v-spacer>
      <v-btn @click="changeColor" class="mx-2" icon small color="white">
        <v-icon> mdi-invert-colors </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="6">
            <InputArea @changedList="makeResult" />
          </v-col>

          <v-col cols="6">
            <OutputArea :result_datas="result" :theme="theme" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer v-bind:fixed="true"> v1.0.1<v-spacer></v-spacer> 2021 - kamiya cou</v-footer>
  </v-app>
</template>

<script>
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";
import { ALL_FIELD_LIST, DEPARTMENT_TABLE } from "./fieldTable.js";

export default {
  name: "App",
  components: {
    InputArea,
    OutputArea,
  },
  data: () => {
    return {
      fieldList: ALL_FIELD_LIST,
      result: [],
      theme: true,
    };
  },
  methods: {
    makeResult(list) {
      //rate:一致率,count:一致数
      var selectedBitList = [];
      DEPARTMENT_TABLE[0].bitList.forEach((element, index) => {
        selectedBitList.push(list.indexOf(index) != -1);
      });
      var _result = [];
      //学科ごとに処理
      DEPARTMENT_TABLE.forEach((departmentList, index) => {
        _result.push({
          departmentName: departmentList.key,
          result: {
            rate: 0,
            count: 0,
            all: departmentList.bitList.filter((el) => el).length,
            matchedFieldIndexes: [],
          },
        });
        departmentList.bitList.forEach((b, bitListIndex) => {
          _result[index].result.rate += !(
            departmentList.bitList[bitListIndex] ^ selectedBitList[bitListIndex]
          );
          _result[index].result.count +=
            departmentList.bitList[bitListIndex] & selectedBitList[bitListIndex];
          if (departmentList.bitList[bitListIndex] & selectedBitList[bitListIndex])
            _result[index].result.matchedFieldIndexes.push(bitListIndex);
        });
        _result[index].result.rate = _result[index].result.rate / departmentList.bitList.length;
      });
      this.result = _result;
    },
    changeColor: function () {
      this.theme = !this.theme;
      localStorage.setItem("uec_department_select_helper", this.theme);
    },
  },
  watch: {
    theme() {
      this.$vuetify.theme.dark = this.theme;
    },
  },
  created() {
    var theme = localStorage.getItem("uec_department_select_helper");
    console.log(theme);
    if (theme) this.theme = theme == "true";
  },
};
</script>
