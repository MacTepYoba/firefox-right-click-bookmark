const MENU_ID = "add-bookmark-here";
const POPUP_SIZE = { width: 710, height: 215 };

browser.runtime.onInstalled.addListener(createMenu);
browser.runtime.onStartup.addListener(createMenu);
createMenu();

async function createMenu() {
  try { await browser.menus.removeAll(); } catch (_) {}
  browser.menus.create({ id: MENU_ID, title: "Добавить закладку...", contexts: ["bookmark"] });
}

browser.menus.onClicked.addListener(async (info) => {
  if (info.menuItemId !== MENU_ID || !info.bookmarkId) return;
  try {
    const nodes = await browser.bookmarks.getSubTree(info.bookmarkId);
    const node = nodes[0];
    if (!node) return;
    const folderId = node.type === "folder" ? node.id : node.parentId;
    if (!folderId) return;
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    if (!tab?.url) return;
    await browser.storage.session.set({
      targetFolderId: folderId,
      bookmarkTitle: tab.title || tab.url,
      bookmarkUrl: tab.url
    });
    await openPopup();
  } catch (error) { console.error("Right-Click Bookmark:", error); }
});

async function openPopup() {
  const existing = await browser.storage.session.get("popupWindowId");
  if (existing.popupWindowId) { try { await browser.windows.remove(existing.popupWindowId); } catch (_) {} }
  const currentWindow = await browser.windows.getCurrent();
  const createData = { url: browser.runtime.getURL("popup.htm"), type: "popup", ...POPUP_SIZE };
  if ([currentWindow.left, currentWindow.top, currentWindow.width, currentWindow.height].every(Number.isFinite)) {
    createData.left = Math.round(currentWindow.left + (currentWindow.width - POPUP_SIZE.width) / 2);
    createData.top = Math.round(currentWindow.top + (currentWindow.height - POPUP_SIZE.height) / 2);
  }
  const popup = await browser.windows.create(createData);
  await browser.storage.session.set({ popupWindowId: popup.id });
}

browser.runtime.onMessage.addListener(async (message) => {
  if (message?.action === "getBookmarkData") return browser.storage.session.get(["bookmarkTitle", "bookmarkUrl"]);
  if (message?.action === "saveBookmark") {
    const data = await browser.storage.session.get("targetFolderId");
    if (!data.targetFolderId) throw new Error("Не выбрана папка закладок");
    await browser.bookmarks.create({ parentId: data.targetFolderId, title: String(message.title || message.url || "").trim(), url: String(message.url || "").trim() });
    await closePopup();
    return { ok: true };
  }
  if (message?.action === "cancel") { await closePopup(); return { ok: true }; }
});

async function closePopup() {
  const data = await browser.storage.session.get("popupWindowId");
  await browser.storage.session.remove(["popupWindowId", "targetFolderId", "bookmarkTitle", "bookmarkUrl"]);
  if (data.popupWindowId) { try { await browser.windows.remove(data.popupWindowId); } catch (_) {} }
}


browser.windows.onRemoved.addListener(async (windowId) => {
  const data = await browser.storage.session.get("popupWindowId");
  if (data.popupWindowId === windowId) await browser.storage.session.remove(["popupWindowId", "targetFolderId", "bookmarkTitle", "bookmarkUrl"]);
});
