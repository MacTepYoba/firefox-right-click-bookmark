const titleInput = document.getElementById("title");
const saveButton = document.getElementById("save");
const cancelButton = document.getElementById("cancel");
const errorBox = document.getElementById("error");

titleInput.focus();
saveButton.addEventListener("click", save);
cancelButton.addEventListener("click", () => browser.runtime.sendMessage({action: "cancel"}));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") { event.preventDefault(); browser.runtime.sendMessage({action: "cancel"}); }
  if (event.key === "Enter") { event.preventDefault(); save(); }
});

async function save() {
  const title = titleInput.value.trim();
  errorBox.textContent = "";
  if (!title) return showError("Укажите название папки.");
  saveButton.disabled = true;
  try { await browser.runtime.sendMessage({action: "saveFolder", title}); }
  catch (error) { saveButton.disabled = false; showError(error.message || "Не удалось добавить папку."); }
}
function showError(text) { errorBox.textContent = text; }
