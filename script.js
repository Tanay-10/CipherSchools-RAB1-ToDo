// document.querySelector("#add-btn").onclick = function () {
//   if (document.querySelector("#new-task input").value.length == 0) {
//     alert("Please Enter a Task");
//   } else {
//     document.querySelector("#tasks").innerHTML += `
//             <div class="task">
//                 <span id="taskname">
//                     ${document.querySelector("#new-task input").value}
//                 </span>
//             </div>
//         `;
//     document.querySelector("#new-task input").value = null;

//     var toggleDiv = (id) => {
//       var div = document.getElementById(id);
//       div.style.display = div.style.display == "none" ? "block" : "none";
//     };

//     // var current_tasks = document.querySelectorAll(".delete");
//     // for (var i = 0; i < current_tasks.length; i++) {
//     //   current_tasks[i].onclick = function () {
//     //     this.parentNode.remove();
//     //   };
//     // }
//   }
// };

function btnClick(id) {
  var div = document.getElementById(id);
  div.style.display = div.style.display == "none" ? "block" : "block";

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
  }
}
