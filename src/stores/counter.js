
import { defineStore } from 'pinia'
import * as lodash from 'lodash'

export const useGenerateStore = defineStore('counter', {
  state: () => ({
    day1Generate: '',
    day2Generate: '',
    day3Generate: '',
    day4Generate: '',
    day5Generate: '',
    day6Generate: '',

  }),
  actions: {
    getRemoteData(){
      this.day1Generate = lodash.random(10000, 50000);
      this.day2Generate = lodash.random(10000, 50000);
      this.day3Generate = lodash.random(10000, 50000);
      this.day4Generate = lodash.random(10000, 50000);
      this.day5Generate = lodash.random(10000, 50000);
      this.day6Generate = lodash.random(10000, 50000);
    },
    getDay1(){
      return this.day1Generate;
    },
    getDay2(){
      return this.day2Generate;
    },
    getDay3(){
      return this.day3Generate;
    },
    getDay4(){
      return this.day4Generate;
    },
    getDay5(){
      return this.day5Generate;
    },
    getDay6(){
      return this.day6Generate;
    },

    // updateDay1Ge{nerate(state, newData) {
    //   this.day1Generate = newData;
    // },
    // updateDay2Generate(state, newData) {
    //   this.day2Generate = newData;
    // },
    // updateDay3Generate(state, newData) {
    //   this.day3Generate = newData;
    // },
    // updateDay4Generate(state, newData) {
    //   this.day4Generate = newData;
    // },
    // updateDay5Generate(state, newData) {
    //   this.day5Generate = newData;
    // },
    // updateDay6Generate(state, newData) {
    //   this.day6Generate = newData;
    // },

  }
})
