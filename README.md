# Right-Click Bookmark

[![Firefox](https://img.shields.io/badge/Firefox-142%2B-FF7139?logo=firefoxbrowser&logoColor=white)](https://www.mozilla.org/firefox/)
[![Manifest](https://img.shields.io/badge/Manifest-V3-blue)](https://github.com/MacTepYoba/firefox-right-click-bookmark/blob/main/manifest.json)
[![License](https://img.shields.io/badge/License-MPL--2.0-blue)](https://github.com/MacTepYoba/firefox-right-click-bookmark/blob/main/LICENSE)
[![Version](https://img.shields.io/badge/version-1.3.2-brightgreen)](https://github.com/MacTepYoba/firefox-right-click-bookmark/releases)

<p align="center">
  <a href="#русский">
    <img src="https://img.shields.io/badge/РУС-Русский-7C3AED?style=for-the-badge" alt="Русский">
  </a>
  &nbsp;
  <a href="#english">
    <img src="https://img.shields.io/badge/ENG-English-FF7139?style=for-the-badge" alt="English">
  </a>
</p>

---

<a id="русский"></a>

# Русский

**Right-Click Bookmark** добавляет в Mozilla Firefox возможность создавать новую закладку прямо из контекстного меню панели и дерева закладок.

Расширение реализует привычный функционал **Google Chrome и других браузеров на базе Chromium**, где при нажатии правой кнопкой мыши на папке закладок можно сразу добавить в неё новую закладку.

В Firefox такой возможности в контекстном меню закладок по умолчанию нет. **Right-Click Bookmark** добавляет её, сохраняя привычный и простой сценарий работы с закладками.

## Возможности

- Добавление новой закладки через контекстное меню закладок Firefox.
- Привычный сценарий работы с закладками, аналогичный Google Chrome и другим Chromium-подобным браузерам.
- Использование текущей активной вкладки для создания новой закладки.
- Возможность изменить название и URL закладки перед сохранением.
- При вызове меню на закладке новая закладка сохраняется в родительскую папку выбранной закладки.
- Управление с клавиатуры:
  - **Enter** — сохранить;
  - **Esc** — отменить.
- Русская и английская локализация.
- Отсутствие внешних сервисов и сетевых запросов.

## Использование

Щёлкните правой кнопкой мыши по папке закладок или по закладке внутри неё и выберите **«Добавить закладку...»**.

Проверьте или измените название и URL, после чего сохраните закладку.

## Требования

- Mozilla Firefox **142.0 или новее**
- Использование системы закладок Firefox

## Установка

### Временная установка для разработки

1. Скачайте или клонируйте репозиторий.
2. Откройте в Firefox: `about:debugging#/runtime/this-firefox`
3. Нажмите **«Загрузить временное дополнение...»**.
4. Выберите файл `manifest.json` из каталога проекта.

Временное дополнение будет удалено после перезапуска Firefox.

Для постоянного использования рекомендуется устанавливать подписанную версию расширения.

## Разрешения

| Разрешение | Назначение |
| --- | --- |
| `menus` | Добавление команды в контекстное меню закладок. |
| `bookmarks` | Чтение выбранной закладки или папки и создание новой закладки. |
| `tabs` | Получение названия и URL активной вкладки. |
| `storage` | Временное хранение состояния окна в session storage. |

Расширение не требует сбора пользовательских данных.

## Структура проекта

- `background.js` — обработка контекстного меню и создание закладки.
- `popup.htm` — окно добавления закладки.
- `popup.css` — стили окна.
- `content.js` — логика окна подтверждения и редактирования.
- `_locales/` — файлы локализации.
- `manifest.json` — манифест расширения Firefox.
- `LICENSE` — лицензия Mozilla Public License 2.0.

## Конфиденциальность

Расширение не собирает, не передаёт, не продаёт и не предоставляет третьим лицам персональные данные.

Расширение не выполняет внешние сетевые запросы.

Название и URL активной вкладки считываются только после вызова расширения и временно сохраняются в session storage Firefox, пока открыто окно добавления закладки.

Эти данные используются исключительно для создания запрошенной пользователем закладки.

Подробнее: [PRIVACY.md](https://github.com/MacTepYoba/firefox-right-click-bookmark/blob/main/PRIVACY.md)

## Участие в разработке

Сообщения об ошибках, предложения и Pull Request приветствуются.

Подробнее: [CONTRIBUTING.md](https://github.com/MacTepYoba/firefox-right-click-bookmark/blob/main/CONTRIBUTING.md)

## Безопасность

Пожалуйста, не публикуйте информацию об обнаруженных уязвимостях в открытых Issues.

Подробнее: [SECURITY.md](https://github.com/MacTepYoba/firefox-right-click-bookmark/blob/main/SECURITY.md)

## Лицензия

Проект распространяется по лицензии **Mozilla Public License 2.0**.

См. [LICENSE](https://github.com/MacTepYoba/firefox-right-click-bookmark/blob/main/LICENSE).

## Автор

**Evgeny Khramtsov** — [MacTepYoba](https://github.com/MacTepYoba)

---

<a id="english"></a>

# English

**Right-Click Bookmark** adds the ability to create a new bookmark directly from the bookmarks context menu in Mozilla Firefox.

The extension brings to Firefox the familiar functionality available in **Google Chrome and other Chromium-based browsers**, where you can right-click a bookmarks folder and immediately add a new bookmark to it.

Firefox does not provide this option in the bookmarks context menu by default. **Right-Click Bookmark** adds it while preserving the simple and familiar bookmark management workflow.

## Features

- Add a new bookmark directly from the Firefox bookmarks context menu.
- Familiar bookmark workflow similar to Google Chrome and other Chromium-based browsers.
- Uses the currently active tab to create a new bookmark.
- Lets you edit the bookmark title and URL before saving.
- When invoked on a bookmark, the new bookmark is saved to the parent folder of the selected bookmark.
- Keyboard controls:
  - **Enter** — save;
  - **Esc** — cancel.
- Russian and English localization.
- No external services or network requests.

## Usage

Right-click a bookmarks folder or a bookmark inside it and select **“Add Bookmark...”**.

Review or edit the title and URL, then save the bookmark.

## Requirements

- Mozilla Firefox **142.0 or newer**
- Firefox bookmarks

## Installation

### Temporary installation for development

1. Download or clone this repository.
2. Open `about:debugging#/runtime/this-firefox` in Firefox.
3. Click **Load Temporary Add-on...**
4. Select `manifest.json` from the project directory.

The temporary add-on will be removed when Firefox restarts.

For normal use, installing a signed release is recommended.

## Permissions

| Permission | Purpose |
| --- | --- |
| `menus` | Adds the command to the bookmarks context menu. |
| `bookmarks` | Reads the selected bookmark or folder and creates a new bookmark. |
| `tabs` | Reads the title and URL of the active tab. |
| `storage` | Temporarily stores dialog state in session storage. |

The extension does not require the collection of user data.

## Project Structure

- `background.js` — context menu handling and bookmark creation.
- `popup.htm` — add bookmark dialog.
- `popup.css` — dialog styles.
- `content.js` — confirmation and editing dialog logic.
- `_locales/` — localization files.
- `manifest.json` — Firefox extension manifest.
- `LICENSE` — Mozilla Public License 2.0.

## Privacy

The extension does not collect, transmit, sell, or share personal data.

It does not make external network requests.

The active tab title and URL are read only when you invoke the extension and are temporarily stored in Firefox session storage while the add bookmark dialog is open.

This information is used solely to create the bookmark requested by the user.

See [PRIVACY.md](https://github.com/MacTepYoba/firefox-right-click-bookmark/blob/main/PRIVACY.md) for details.

## Contributing

Bug reports, suggestions, and pull requests are welcome.

See [CONTRIBUTING.md](https://github.com/MacTepYoba/firefox-right-click-bookmark/blob/main/CONTRIBUTING.md).

## Security

Please do not publish information about security vulnerabilities in public Issues.

See [SECURITY.md](https://github.com/MacTepYoba/firefox-right-click-bookmark/blob/main/SECURITY.md).

## License

Licensed under the **Mozilla Public License 2.0**.

See [LICENSE](https://github.com/MacTepYoba/firefox-right-click-bookmark/blob/main/LICENSE).

## Author

**Evgeny Khramtsov** — [MacTepYoba](https://github.com/MacTepYoba)
