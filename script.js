$(document).ready(function () {
  let selectedRow = null;

  $("#addBtn").click(function () {
    var name = $("#name").val();
    var age = $("#age").val();
    var course = $("#course").val();

    if (name == "" || age == "" || course == "") {
      alert("Please fill all fields");
      return;
    }

    var newRow = `
      <tr>
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        
        <td>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        </td>
      </tr>
    `;

    $("#studentTable").append(newRow);

    clearFields();
  });

  $(document).on("click", ".deleteBtn", function () {
    $(this)
      .closest("tr")
      .fadeOut(300, function () {
        $(this).remove();
      });
  });

  $(document).on("click", ".editBtn", function () {
    selectedRow = $(this).closest("tr");

    const name = selectedRow.find("td:eq(0)").text();
    const age = selectedRow.find("td:eq(1)").text();
    const course = selectedRow.find("td:eq(2)").text();

    $("#name").val(name);
    $("#age").val(age);
    $("#course").val(course);

    selectedRow.addClass("editing-row");

    $("#addBtn").hide();
    $("#updateBtn").show();
    $("#cancelBtn").show();
  });
  $("#updateBtn").click(function () {
    const name = $("#name").val().trim();
    const age = $("#age").val().trim();
    const course = $("#course").val().trim();

    if (name === "" || age === "" || course === "") {
      alert("Please fill all fields");
      return;
    }

    selectedRow.find("td:eq(0)").text(name);
    selectedRow.find("td:eq(1)").text(age);
    selectedRow.find("td:eq(2)").text(course);

    selectedRow.removeClass("editing-row");

    resetButtons();
    clearFields();
  });

  $("#cancelBtn").click(function () {
    selectedRow.removeClass("editing-row");
    resetButtons();
    clearFields();
  });

  function clearFields() {
    $("#name").val("");
    $("#age").val("");
    $("#course").val("");
  }

  function resetButtons() {
    $("#addBtn").show();
    $("#updateBtn").hide();
    $("#cancelBtn").hide();
    selectedRow = null;
  }
});
