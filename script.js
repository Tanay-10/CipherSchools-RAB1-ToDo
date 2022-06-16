function btnClick(id) {
  var div = document.getElementById(id);
  //   div.style.display = div.style.display == "none" ? "block" : "block";

  if (document.querySelector("#new-task input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector("#new-task input").value}
                </span>
            </div>
        `;
    document.querySelector("#new-task input").value = null;

    div.style.display = "block";
  }
}
