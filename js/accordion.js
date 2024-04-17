const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");

accordionHeaders.forEach((header, index) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    accordionContents[index].classList.toggle("active");
  });
});

// варіант, коли потрібно щоб при натисканні на вкладку всі інші активні закривались
/*
accordionHeaders.forEach((header, index) => {
  header.addEventListener("click", () => {
    if (header.classList.contains("active")) {
      header.classList.remove("active");
      accordionContents[index].classList.remove("active");
    } else {
      accordionHeaders.forEach((item, i) => {
        item.classList.remove("active");
        accordionContents[i].classList.remove("active");
      });
      header.classList.add("active");
      accordionContents[index].classList.add("active");
    }
  });
});
*/
