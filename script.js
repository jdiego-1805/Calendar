// defined so that you can use them down below
let saveB9 = document.querySelector('.saveBtn[data-time="9"');
let saveNine = document.querySelector('textarea[data-time="9"]');
let textSave9 = localStorage.getItem("textSave9");
let sI9 = document.querySelector('i[data-time="9"]')

let saveB10 = document.querySelector('.saveBtn[data-time="10"');
let saveTen = document.querySelector('textarea[data-time="10"]');
let textSave10 = localStorage.getItem("textSave10");
let sI10 = document.querySelector('i[data-time="10"]')
let H10 = document.querySelector("#hour-10")

let saveB11 = document.querySelector('.saveBtn[data-time="11"');
let saveEl = document.querySelector('textarea[data-time="11"]');
let textSave11 = localStorage.getItem("textSave11");
let sI11 = document.querySelector('i[data-time="11"]')
let H11 = document.querySelector("#hour-11")

let saveB12 = document.querySelector('.saveBtn[data-time="12"');
let saveTwe = document.querySelector('textarea[data-time="12"]');
let textSave12 = localStorage.getItem("textSave12");
let sI12 = document.querySelector('i[data-time="12"]')
let H12 = document.querySelector("#hour-12")

let saveB1 = document.querySelector('.saveBtn[data-time="1"');
let saveOne = document.querySelector('textarea[data-time="1"]');
let textSave1 = localStorage.getItem("textSave1");
let sI1 = document.querySelector('i[data-time="1"]')
let H1 = document.querySelector("#hour-1")

let saveB2 = document.querySelector('.saveBtn[data-time="2"');
let saveTwo = document.querySelector('textarea[data-time="2"]');
let textSave2 = localStorage.getItem("textSave2");
let sI2 = document.querySelector('i[data-time="2"]')
let H2 = document.querySelector("#hour-2")

let saveB3 = document.querySelector('.saveBtn[data-time="3"');
let saveThr = document.querySelector('textarea[data-time="3"]');
let textSave3 = localStorage.getItem("textSave3");
let sI3 = document.querySelector('i[data-time="3"]')
let H3 = document.querySelector("#hour-3")

let saveB4 = document.querySelector('.saveBtn[data-time="4"');
let saveFour = document.querySelector('textarea[data-time="4"]');
let textSave4 = localStorage.getItem("textSave4");
let sI4 = document.querySelector('i[data-time="4"]')
let H4 = document.querySelector("#hour-4")

let saveB5 = document.querySelector('.saveBtn[data-time="5"');
let saveFiv = document.querySelector('textarea[data-time="5"]');
let textSave5 = localStorage.getItem("textSave5");
let sI5 = document.querySelector('i[data-time="5"]')
let H5 = document.querySelector("#hour-5")

// the date to be presented on the page
let date = document.querySelector("#currentDay")
date.textContent = dayjs().format("MMM DD, YYYY")
let currentTime = dayjs().hour()

// to change the color from past, present, and future
for (let i = 0; i < 9; i++) {

  let hourEl = document.querySelector("#hour-" + (i + 9))

  if (parseInt(document.querySelectorAll(".row")[i].dataset.time) < currentTime) {

    hourEl.classList.add("past");
  }
  else if (parseInt(document.querySelectorAll(".row")[i].dataset.time) === currentTime) {

    hourEl.classList.add("present");
  }
  else {

    hourEl.classList.add("future");
  }
}

// to save in the text area
saveB9.addEventListener("click", function (event) {

  event.preventDefault();
  let inputNine = saveNine.value;
  localStorage.setItem("textSave9", inputNine)

})

sI9.addEventListener("click", function (event) {

  event.preventDefault();
  let inputNine = saveNine.value;
  localStorage.setItem("textSave9", inputNine)

})

if (textSave9) {
  saveNine.value = textSave9;
}

// functions for hour 10
saveB10.addEventListener("click", function (event) {

  event.preventDefault();
  let inputTen = saveTen.value;
  localStorage.setItem("textSave10", inputTen)

})

sI10.addEventListener("click", function (event) {

  event.preventDefault();
  let inputTen = saveTen.value;
  localStorage.setItem("textSave10", inputTen)

})
// functions for hour 11
saveB11.addEventListener("click", function (event) {

  event.preventDefault();
  let inputEl = saveEl.value;
  localStorage.setItem("textSave11", inputEl)

})

sI11.addEventListener("click", function (event) {

  event.preventDefault();
  let inputEl = saveEl.value;
  localStorage.setItem("textSave11", inputEl)

})

if (textSave11) {
  saveEl.value = textSave11;
}
// functions for hour 12
saveB12.addEventListener("click", function (event) {

  event.preventDefault();
  let inputTwe = saveTwe.value;
  localStorage.setItem("textSave12", inputTwe)

})

sI12.addEventListener("click", function (event) {

  event.preventDefault();
  let inputTwe = saveTwe.value;
  localStorage.setItem("textSave12", inputTwe)

})

if (textSave12) {
  saveTwe.value = textSave12;
}
// functions for hour 1
saveB1.addEventListener("click", function (event) {

  event.preventDefault();
  let inputOne = saveOne.value;
  localStorage.setItem("textSave1", inputOne)

})

sI1.addEventListener("click", function (event) {

  event.preventDefault();
  let inputOne = saveOne.value;
  localStorage.setItem("textSave1", inputOne)

})

if (textSave1) {
  saveOne.value = textSave1;
}
// functions for hour 2
saveB2.addEventListener("click", function (event) {

  event.preventDefault();
  let inputTwo = saveTwo.value;
  localStorage.setItem("textSave2", inputTwo)

})

sI2.addEventListener("click", function (event) {

  event.preventDefault();
  let inputTwo = saveTwo.value;
  localStorage.setItem("textSave2", inputTwo)

})

if (textSave2) {
  saveTwo.value = textSave2;
}
// functions for hour 3
saveB3.addEventListener("click", function (event) {

  event.preventDefault();
  let inputThr = saveThr.value;
  localStorage.setItem("textSave3", inputThr)

})

sI3.addEventListener("click", function (event) {

  event.preventDefault();
  let inputThr = saveThr.value;
  localStorage.setItem("textSave3", inputThr)

})

if (textSave3) {
  saveThr.value = textSave3;
}
// functions for hour 4
saveB4.addEventListener("click", function (event) {

  event.preventDefault();
  let inputFour = saveFour.value;
  localStorage.setItem("textSave4", inputFour)

})

sI4.addEventListener("click", function (event) {

  event.preventDefault();
  let inputFour = saveFour.value;
  localStorage.setItem("textSave4", inputFour)

})

if (textSave4) {
  saveFour.value = textSave4;
}
// functions for hour 5
saveB5.addEventListener("click", function (event) {

  event.preventDefault();
  let inputFiv = saveFiv.value;
  localStorage.setItem("textSave5", inputFiv)

})

sI5.addEventListener("click", function (event) {

  event.preventDefault();
  let inputFiv = saveFiv.value;
  localStorage.setItem("textSave5", inputFiv)

})

if (textSave5) {
  saveNine.value = textSave5;
}