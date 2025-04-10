document.addEventListener("DOMContentLoaded", function () {
    // Ocultar el loader cuando la página se haya cargado completamente
    var loader = document.getElementById("onload");
    var body = document.body;
  
    window.addEventListener("load", function () {
      // Ocultar el loader y mostrar el contenido
      loader.style.display = "none";
      body.classList.remove("hidden");
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var section1 = document.getElementById("section_1");
    var section2 = document.getElementById("section_2");
    var section3 = document.getElementById("section_3");
    var section4 = document.getElementById("section_4");
  
    var textSup1_2 = document.getElementById("text_sup_1");
    var textSup2_2 = document.getElementById("text_sup_2");
  
    var textSup1_3= document.getElementById("text_3_sup_1");
    var textSup2_3= document.getElementById("text_3_sup_2");
    
    var brain = document.getElementById("brain");
    var buttonArticles = document.getElementById("articulos")
  
    var vocationlab = document.getElementById("vocationlab");
    var buttonInfo = document.getElementById("info");
  
    var textSect2 = document.getElementById("text_inf");
    var textSect3 = document.getElementById("text_dif");
  
    var hasAnimated_1 = false;
    var hasAnimated_2 = false;
    var hasAnimated_3 = false;
    var hasAnimated_4 = false;
  
    function checkScroll() {
      if (isInViewport(section2) && !hasAnimated_2) {
        // Elemento section_2 está en el viewport y la animación no se ha aplicado aún
        textSup1_2.style.animation = "slideUp 1s ease"; // Aplicar la animación
        textSup2_2.style.animation = "slideLeft 2s ease";
        brain.style.animation = "slideDown 2s ease";
        buttonArticles.style.animation = "slideUp 2s ease";
        textSect2.style.animation = "fadeIn 4s ease";
        hasAnimated_2 = true; // Marcar que la animación se ha aplicado
      }
  
      if (isInViewport(section3) && !hasAnimated_3) {
        // Elemento section_3 está en el viewport y la animación no se ha aplicado aún
        textSup1_3.style.animation = "slideUp 1s ease"; // Aplicar la animación
        textSup2_3.style.animation = "slideRight 2s ease";
        vocationlab.style.animation = "slideDown 2s ease";
        buttonInfo.style.animation = "slideUp 2s ease";
        textSect3.style.animation = "fadeIn 1s ease";
        hasAnimated_3 = true; // Marcar que la animación se ha aplicado
      }
  
      /*if (isInViewport(section4) && !hasAnimated_4) {
        // Elemento section_4 está en el viewport y la animación no se ha aplicado aún
        textSup1_4.style.animation = "slideLeft 2s ease"; // Aplicar la animación
        textSup2_4.style.animation = "slideUp 1s ease";
        vocationlab.style.animation = "slideUp 2s ease";
        buttonInfo.style.animation = "fadeIn 2s ease";
        textSect3.style.animation = "slideUp 1s ease";
        hasAnimated_3 = true; // Marcar que la animación se ha aplicado
      }*/
    }
  
    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    }
  
    // Escuchar eventos de scroll para verificar cuando se hace scroll hacia section_2
    window.addEventListener("scroll", checkScroll);
    
    // Llamar a checkScroll inicialmente para verificar si ya está en la vista en la carga de la página
    checkScroll();
  });
  
    