console.log("hello world");

// const addBox = (parent) => {
//   let clickbox = document.createElement("div");
//   clickbox.setAttribute("id", "clickBox");
//   parent.appendChild(clickbox);
// };
const characterSet = ["jigglypuff", "mewtwo", "squirtle"];

const imageHolder = document.getElementById("imageHolder");
// imageHolder.addEventListener("click", addBox(imageHolder));

function createSelectorBox(clickedBox) {
  let clickedId = clickedBox;
  sideBoxId = Number(clickedId) + 1;
  sideBox = document.getElementById(`${sideBoxId}`);

  for (let n = 0; n < 3; n++) {
    let button = document.createElement("button");

    button.setAttribute("id", characterSet[n]);
    button.textContent = characterSet[n];
    sideBox.appendChild(button);

    sideBox.style.background = "white";
  }
  let hideButton = document.createElement("button");
  hideButton.addEventListener("click", function hideClicked() {
    let clickCounter = 0;
    let sideBox = document.getElementById("sideBox");
    if (clickCounter % 2 != 0) {
      sideBox.style.display = "block";
      clickCounter++;
      console.log(clickCounter);
    } else {
      sideBox.style.display = "none";
    }
  });
  hideButton.textContent = "hide";
  hideButton.setAttribute("id", "hideButton");
  hideButton.style.marginTop = "12px";
  sideBox.appendChild(hideButton);
}

function createBoxOverlay(parent) {
  for (i = 0; i < 130; i++) {
    let box = document.createElement("div");
    box.addEventListener("click", function boxClicked() {
      createSelectorBox(box.id);
    });
    box.classList = "boxOverlay";

    box.setAttribute("id", i);
    parent.appendChild(box);
  }
}
createBoxOverlay(imageHolder);
