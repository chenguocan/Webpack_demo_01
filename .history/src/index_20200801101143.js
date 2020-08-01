import $ from "jquery";
import "./css/index.css";
$(function () {
  $("li:odd").css("backgroundColor", "pink");
  $("li:even").css("backgroundColor", "blue");
});

class person {
  static info = "aaa";
}
console.log(pseron.info);
