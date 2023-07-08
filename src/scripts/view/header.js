const body = document.querySelector("body")

function renderHeader() {
   const header = document.createElement("header");
   header.classList.add("header");

   const heading = document.createElement("h1");
   heading.classList.add("heading");

   heading.textContent = "Todo";

   header.appendChild(heading)

   body.appendChild(header)
}

export default renderHeader;
