import $ from 'jquery';
import './css/index.css';
import App from './components/App.vue';
import Vue from 'vue';
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
