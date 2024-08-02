const menu_icono = document.getElementById("menu_icono")
const menu_desplegable = document.getElementById("menu_desplegable")
let mostrar_menu_icono = true

menu_icono.addEventListener("click", function(){
   if (mostrar_menu_icono){
      menu_desplegable.classList.remove("clip_circle_1")
      menu_desplegable.classList.add("clip_circle_2")
      mostrar_menu_icono = false
   }
   else{
      menu_desplegable.classList.remove("clip_circle_2")
      menu_desplegable.classList.add("clip_circle_1")
      mostrar_menu_icono = true
   }
})