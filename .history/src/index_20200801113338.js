import $ from 'jquery';
import './css/index.css';
import Vue from 'vue';
// 导入单文件组件
import App from './components/App.vue';
$(function() {
  $('li:odd').css('backgroundColor', 'pink');
  $('li:even').css('backgroundColor', 'blue');
});

class Person {
  static info = 'aaa';
}
console.log(Person.info);
const vm = new Vue({
  el: '#app',
  render: (h) => h(App),
});
