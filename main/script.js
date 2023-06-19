// Obtém uma lista de todas as imagens do slider
const imgs = document.querySelectorAll(".slider img");
// Obtém as setas de navegação
const dots = document.querySelectorAll(".botao i");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
// Define o índice da imagem atual
let currentIndex = 0;
// Define o tempo de transição entre as imagens
let time = 7000;
// Define a classe que será aplicada à imagem e ao ponto
const defClass = (startPos, index) => {
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
    dots[i].classList.remove("fa-dot-circle");
    dots[i].classList.add("fa-circle");
  }
  imgs[index].style.display = "block";
  dots[index].classList.add("fa-dot-circle");
};
// Inicia o slider
defClass(1, 0);
// Adciona o evento de clique às setas de navegação
leftArrow.addEventListener("click", function(){
  currentIndex <= 0 ? currentIndex = imgs.length-1 : currentIndex--;
  defClass(0, currentIndex);
});
rightArrow.addEventListener("click", function(){
  currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
  defClass(0, currentIndex);
});
// Função que inicia o auto slide
const startAutoSlide = () => {
  setInterval(() => {
    currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
    defClass(0, currentIndex);
  }, time);
};
// Inicia o auto slide
startAutoSlide();