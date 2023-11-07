document.getElementById("saveButton").addEventListener("click", function () {
  const name = document.getElementById("formName").value;
  if (name) {
    localStorage.setItem("userName", name);
  }
});

document.getElementById("removeButton").addEventListener("click", function () {
  const remove = localStorage.getItem("userName");
  if (remove) {
    localStorage.removeItem("userName");
  }
});

const saveName = document.getElementById("nameSave");
const nameSaved = localStorage.getItem("userName");
if (nameSaved) {
  saveName.innerHTML = "Previosly names saved: " + nameSaved;
}
