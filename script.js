function toggle() {
  const html = document.documentElement
  html.classList.toggle('light')
  
 
  const img = document.querySelector("#profile img") 
  
  if(html.classList.contains('light')) {
  img.setAttribute("src", './assets/avatar-light.png')
  } else {
    img.setAttribute('src', '/assets/avatar.png')
  }
//pega tag img

// substituir a imagem
// se tiver light mode, adicionar a imagem light 
// sem light mode, manter a img normal 




}