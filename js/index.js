

// Note this is just basic javascript, not fully optimized

function darkTheme(){
  var element = document.getElementById("theme")
  element.classList.remove("light-theme")
  element.classList.add("dark-theme");
}

function lightTheme(){
  var element = document.getElementById("theme")
  element.classList.remove("dark-theme")
  element.classList.add("light-theme");
}

function reset(){
  var element = document.getElementById("theme")
  element.classList.remove("dark-theme")
  element.classList.remove("light-theme");
}
