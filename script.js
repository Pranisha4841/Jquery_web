$(document).ready(function () {
  $("#addBtn").click(function () {
    var name = $("#name").val();
    var age = $("#age").val();
    var course = $("#course").val();

    if (name == "" || age == "" || course == "") {
      alert("Please fill all fields");
      return;
    }

    $("#studentTable").append(
      "<tr>" +
        "<td>" +
        name +
        "</td>" +
        "<td>" +
        age +
        "</td>" +
        "<td>" +
        course +
        "</td>" +
        "<td><button class='deleteBtn'>Delete</button></td>" +
        "</tr>",
    );

    $("#name").val("");
    $("#age").val("");
    $("#course").val("");
  });

  $(document).on("click", ".deleteBtn", function () {
    $(this).closest("tr").remove();
  });
});
