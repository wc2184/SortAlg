document.addEventListener("DOMContentLoaded", () => {
  const thing = document.createElement("div");
  thing.width = "400";
  thing.height = "400";
  thing.classList.add("container");
  document.body.append(thing);
  thing.textContent = "Add thingy";
});
