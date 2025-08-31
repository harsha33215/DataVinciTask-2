Nested Checkbox Component 

Published Link : https://data-vinci-task-2.vercel.app/

This project implements a Nested Checkbox Component using only HTML, CSS, and Vanilla JavaScript.

The component supports hierarchical selection where parent checkboxes control their children, and child selections update their parents.

🚀 Features

Select All → Selects/deselects every node (Fruits + Vegetables).

Category Level Selection → Selecting "Fruits" selects/deselects all fruits, selecting "Vegetables" selects/deselects all vegetables.

Individual Selection → Each item can be checked or unchecked independently.

Indeterminate State → Parent checkboxes display an indeterminate state when only some of their children are selected.

🛠️ Tech Stack

HTML5

CSS3

JavaScript (ES6)


🎯 Usage

Open the app in your browser.

Use the "Select All" checkbox to toggle all items.

Select/deselect entire categories (Fruits / Vegetables) or individual items.

The parent checkbox automatically updates when children are toggled.

🐞 Known Issues

Fixed: Parent categories now properly check/uncheck all their children.

Fixed: Children update their parent state correctly (including indeterminate).
