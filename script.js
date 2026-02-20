$(document).ready(function () {
  $("#addBtn").click(function () {
    var name = $("#name").val();
    var age = $("#age").val();
    var course = $("#course").val();
  });
});
if (name == "" || age == "" || course == "") {
  alert("Please fill all fields");
  return;
}
$("#name").val("");
$("#age").val("");
$("#course").val("");
$(document).on("click", ".deleteBtn", function () {
  $(this).closest("tr").remove();
});
$(document).on("click", ".editBtn", function () {
  var row = $(this).closest("tr");
  var name = row.find("td:eq(0)").text();
  var age = row.find("td:eq(1)").text();
  var course = row.find("td:eq(2)").text();
  $("#name").val(name);
  $("#age").val(age);
  $("#course").val(course);
  row.remove();
});
