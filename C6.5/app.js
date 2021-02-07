// const button1 = document.getElementById("btn_1");
// const button2 = document.getElementById("btn_2");
// const button3 = document.getElementById("btn_3");
const section = document.querySelector("section");
section.addEventListener("click", (e) => {
  // alert(
  //   `window.creen.width=${window.screen.width}px\nwindow.screen.height=${window.screen.height}`
  // );
  // alert("target/=" + e.target.id);
  const clickedId = e.target.id;
  let str = "";
  switch (clickedId) {
    case "btn_1":
      str = `window.sreen.width = ${window.screen.width}px\nwindow.screen.height = ${window.screen.height}px`;
      break;
    case "btn_2":
      str = `document.documentElement.clientWidth = ${document.documentElement.clientWidth}px\ndocument.documentElement.clientHeight = ${document.documentElement.clientHeight}px`;
      break;
    case "btn_3":
      str = `window.innerWidth = ${window.innerWidth}px\nwindow.innerHeight = ${window.innerHeight}px`;
      break;
    default:
      str = "Ooops :)";
      break;
  }
  alert(str);
});
