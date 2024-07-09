function openModal() {
  var modal = document.getElementById("modal");
  var imgside = document.querySelector("#imgside");
  modal.style.display = "flex";

  imgside.innerHTML = "";
  var selected = document.querySelector(".imgs").prop("checked");
  selected.forEach(element => {
    if(element !== ""){
      imgside.innerHTML += `<div><input class="s_imgs" id=${element} value=${element} type="checkbox">
                            <label for=${element}></label></div>`;
    }
  });
  // var selectedText = document.getElementById("data").innerText.trim();
  // selectedText.split(" ").forEach(element => {
  //   if(element !== ""){
  //     imgside.innerHTML += `<div><input class="s_imgs" id=${element} value=${element} type="checkbox">
  //                           <label for=${element}></label></div>`;
      
  //   }
  // });
  
  var items = document.getElementsByClassName("s_imgs");
  Array.from(items).forEach(element => {
    var label = element.nextElementSibling;
    label.style.backgroundImage = `url("./resources/img/${element.id}.png")`;
  });
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";

  var aside = document.querySelector("#imgside");
  aside.innerHTML = "";
}

window.onload = function getImage() {
  var items = document.getElementsByClassName("imgs");

  Array.from(items).forEach(element => {
    var label = element.nextElementSibling;
    label.style.backgroundImage = `url("./resources/img/${element.id}.png")`;
  });
}

function isSelected(element){
  var selected = $(element).attr('id');
  var p = document.getElementById("data");
  p.innerText += selected + " ";
}