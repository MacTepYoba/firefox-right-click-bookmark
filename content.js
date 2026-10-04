const titleInput = document.getElementById("title");
const urlInput = document.getElementById("url");
const saveButton = document.getElementById("save");
const cancelButton = document.getElementById("cancel");
const errorBox = document.getElementById("error");

init();

async function init() {
  try {
    const data = await browser.runtime.sendMessage({action: "getBookmarkData"});
    titleInput.value = data?.bookmarkTitle || "";
    urlInput.value = data?.bookmarkUrl || "";
    titleInput.focus();
    titleInput.select();
  } catch (error) {
    showError(error.message);
  }
}

saveButton.addEventListener("click", save);
cancelButton.addEventListener("click", () => browser.runtime.sendMessage({action: "cancel"}));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    browser.runtime.sendMessage({action: "cancel"});
  }
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    save();
  }
});

async function save() {
  const title = titleInput.value.trim();
  const url = urlInput.value.trim();
  errorBox.textContent = "";

  if (!url) return showError("Укажите URL.");
  try { new URL(url); } catch (_) { return showError("Некорректный URL."); }

  saveButton.disabled = true;
  try {
    await browser.runtime.sendMessage({action: "saveBookmark", title, url});
  } catch (error) {
    saveButton.disabled = false;
    showError(error.message || "Не удалось добавить закладку.");
  }
}

function showError(text) {
  errorBox.textContent = text;
}
