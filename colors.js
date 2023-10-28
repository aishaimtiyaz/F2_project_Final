const picker = document.getElementById("color-pick");
const colorPicker = document.getElementById("color-picker");
const fillColor = document.getElementById("fillColor");
const BGL = document.getElementById("BGLable");
const chooseTheme = document.getElementById("chooseTheme");
const themeColor = document.getElementById("themeColor");
const bgColorpicker = document.getElementById("bgColorpicker");
const clearCanvas = document.getElementById("clearBtn");
const clearCanvas1 = document.getElementById("clearBtn1");
const saveBtn = document.getElementById("saveBtn");
const saveBtn1 = document.getElementById("saveBtn1");
const darkMode = document.getElementById("tbtn");


function clearCan() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveButton(){
const link = document.createElement("a");
  link.download = `${Date.now()}.png`;
  link.href = canvas.toDataURL();
  link.click();
}
darkMode.addEventListener("click",()=>{
    var element = document.body;    
    element.classList.toggle("darkMode");
    
});


picker.addEventListener("click", () => {
  colorPicker.classList.toggle("disp");
});

colorPicker.addEventListener("input", () => {
  drawingColor = colorPicker.value;
  picker.style.background = colorPicker.value;
});

BGL.addEventListener("click", () => {
  bgColorpicker.classList.toggle("disp");
});

bgColorpicker.addEventListener("input", () => {
  bgColor = bgColorpicker.value;
  BGL.style.background = bgColorpicker.value;
});

chooseTheme.addEventListener("click", () => {
  themeColor.classList.toggle("disp");
});

themeColor.addEventListener("input", () => {
  canvasBG = themeColor.value;
  canvas.style.background = themeColor.value;
  chooseTheme.style.background = themeColor.value;
  clearCan();
});


clearCanvas.addEventListener("click", clearCan);
clearCanvas1.addEventListener("click", clearCan);

saveBtn.addEventListener("click", saveButton);
saveBtn1.addEventListener("click", saveButton);
