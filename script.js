const selectAll = document.getElementById("selectAll");
const categoryCheckboxes = document.querySelectorAll(".category-checkbox");
const children = document.querySelectorAll(".child");

// ✅ Select All toggle
selectAll.addEventListener("change", (e) => {
  const checked = e.target.checked;
  categoryCheckboxes.forEach((cb) => {
    cb.checked = checked;
    cb.indeterminate = false;
  });
  children.forEach((cb) => (cb.checked = checked));
});

// ✅ Parent → Children
categoryCheckboxes.forEach((parent) => {
  parent.addEventListener("change", () => {
    const category = parent.dataset.category;
    const kids = document.querySelectorAll(`.child.${category}`);
    kids.forEach((kid) => (kid.checked = parent.checked));
    updateSelectAll();
  });
});

// ✅ Children → Parent
children.forEach((child) => {
  child.addEventListener("change", () => {
    const category = child.classList[1]; // e.g. "fruits"
    updateCategory(category);
    updateSelectAll();
  });
});

// ✅ Update parent from children
function updateCategory(category) {
  const kids = document.querySelectorAll(`.child.${category}`);
  const parent = document.querySelector(
    `.category-checkbox[data-category="${category}"]`
  );
  const allChecked = [...kids].every((cb) => cb.checked);
  const someChecked = [...kids].some((cb) => cb.checked);

  parent.checked = allChecked;
  parent.indeterminate = !allChecked && someChecked;
}

// ✅ Update Select All checkbox
function updateSelectAll() {
  const allChecked = [...children].every((cb) => cb.checked);
  const someChecked = [...children].some((cb) => cb.checked);

  selectAll.checked = allChecked;
  selectAll.indeterminate = !allChecked && someChecked;
}
