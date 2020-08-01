import $ from "jquery";
import "./css/index.css";
import App from "./components/App.Vue";
$(function () {
  $("li:odd").css("backgroundColor", "pink");
  $("li:even").css("backgroundColor", "blue");
});

class Person {
  static info = "aaa";
}
console.log(Person.info);
