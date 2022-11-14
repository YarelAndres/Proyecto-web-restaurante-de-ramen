$(document).ready(function(){

    var animate= $('.animate');
    

    // 1. MOSTRAR FLECHA SUBIR AL PRINCIPIO DE LA WEB.

    function upScroll(){
        let scrollTop= document.documentElement.scrollTop;
        let arrow_up= $("#arrow_up");
        
        if(scrollTop > 300){
            arrow_up.fadeIn();
        }else{
            arrow_up.fadeOut();
        }
    }
    window.addEventListener("scroll", () => {
        upScroll();
    });
    

    // 2. FUNCIONALIDAD DE FLECHA.
    
    let arrow_up_img= $("#arrow_up img");
    arrow_up_img.click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    // Código de función jQuery para ejecutar funciones solamente en una o varias páginas seleccionadas. Esto permite 
    // utilizar un solo script para varias páginas del sitio web.
    var act = { 
        rut : {},
        pag : function(url, fun){ 
        this.rut[url] = fun;
        },
        lan : function(){ 
            jQuery.each(this.rut, function(par){ 
                if(location.href.match(par)){
                    this(); 
                } 
            }); 
        }
    }


    // Actúa solamente en la página index.html.
    act.pag('index.html',function(){ 

        // SLIDER.

        // El código javascript se copia de la página web del slider y se modifican las características o no, segun la 
        // utilización.
        $('.bxslider').bxSlider({
            auto: true,
            autoControls: true,
            stopAutoOnClick: true,
            mode: 'fade',
            captions: true,
            controls: false,
            slideWidth: 800
        });


        // MOSTRAR TíTULOS E IMAGENES.

        function showElements(){
            let scrollTop= document.documentElement.scrollTop;

            for(var i = 0; i < animate.length; i++){
                let hightAnimate= animate[i].offsetTop;

                if(hightAnimate - 300 < scrollTop){
                    animate[i].style.opacity= 1;
                }
            }
        }
        window.addEventListener("scroll", () => {
            showElements();
        });
    });
    


    // Actúa solamente en la página carta.html.
    act.pag('carta.html',function(){ 

        // POP-UP.

        let overlay= $("#overlay"),
        popUp= $("#pop-up"),
        arrow_close_popUp= $("#close_pop-up"),
        ramen= $("#ramen_container");


        // Funciones para agregar los elementos imagen, título y descripción al pop-up emergente. Se accede al contenedor 
        // de ramen vacío del DOM(#ramen_container) y adjunta el código HTML de un ramen u otro según la función a la que
        // llame. 
        function ramen1(){
            ramen.append('<img class="image_pop-up" src="img/carta/corralCurryRamen.jpg">'); 
            ramen.append('<h2 class="chicken_ramen">Curry Ramen</h2><br/>');                    
            ramen.append('<p>Udon con tiras crujientes de pollo de corral, cebolla, zanahoria, brócoli, espinacas, shiitake, huevo, lima, cebolleta y dashi con curry.</p>');                   
        }

        function ramen2(){
            ramen.append('<img class="image_pop-up" src="img/carta/curryRamen.jpg">'); 
            ramen.append('<h2 class="meat_ramen">Corral Curry Ramen</h2><br/>');                    
            ramen.append('<p>Ramen con caldo de pollo elaborado con soja, miso y curry amarillo. Con láminas de secreto de cerdo de granja (chashu), bambú, setas shiitake, huevo de corral semicocido y marinado con cebolleta tierna.</p>');                   
        }

        function ramen3(){
            ramen.append('<img class="image_pop-up" src="img/carta/KahiwaSoba.jpg">'); 
            ramen.append('<h2 class="chicken_ramen">Kahiwa Soba</h2><br/>');                    
            ramen.append('<p>Fideos de trigo sarraceno con tiras de pollo rebozadas, brotes de soja, setas shiitake y puerro salteados con salsa Miren y semillas de sésamo.</p>');                   
        }

        function ramen4(){
            ramen.append('<img class="image_pop-up" src="img/carta/kimchiChicken.jpg">'); 
            ramen.append('<h2 class="chicken_ramen">Kimchi Chicken</h2><br/>');                    
            ramen.append('<p>Udon con caldo de pollo elaborado con soja, kimuchi no moto, col china, cebolla morada, brócoli, espárragos trigueros, espinacas y bastoncitos de pollo de corral rebozados.</p>');                   
        }

        function ramen5(){
            ramen.append('<img class="image_pop-up" src="img/carta/misoRamen.jpg">'); 
            ramen.append('<h2 class="meat_ramen">Miso Ramen</h2><br/>');                    
            ramen.append('<p>Fideos Ramen con caldo de pollo elaborado con soja y miso. Con láminas de cerdo marinado (chashu), algas wakame, huevo de corral semicocido y marinado, alga nori y cebolleta tierna.</p>');                   
        }

        function ramen6(){
            ramen.append('<img class="image_pop-up" src="img/carta/nabeyakyRamen.jpg">'); 
            ramen.append('<h2 class="chicken_ramen">Nabeyaky Ramen</h2><br/>');                    
            ramen.append('<p>Udon con láminas de pollo marinado, tempura de langostino, espinacas, huevo de corral semicocido, setas shiitake, semillas de sésamo, cebollino y tallos de bambú.</p>');                   
        }

        function ramen7(){
            ramen.append('<img class="image_pop-up" src="img/carta/spicyThai.jpg">'); 
            ramen.append('<h2 class="meat_ramen">Spicy Thai</h2><br/>');                    
            ramen.append('<p>Udon con caldo vegetal, leche de coco, miso y langostino crujiente. Salteados con cebolla morada, brócoli, pak choi, zanahoria, setas shimeji, espinacas y huevo de corral semicocido.</p>');                   
        }

        function ramen8(){
            ramen.append('<img class="image_pop-up" src="img/carta/tampopoRamen.jpg">'); 
            ramen.append('<h2 class="meat_ramen">Tampopo Ramen</h2><br/>');                    
            ramen.append('<p>Fideos Ramen con caldo de pollo elaborado con soja, láminas de cerdo marinado (chashu), maíz dulce, huevo de corral semicocido y marinado, naruto, alga nori, láminas de bambú y cebolleta tierna.</p>');                   
        }

        function ramen9(){
            ramen.append('<img class="image_pop-up" src="img/carta/TempuraSoba.jpg">'); 
            ramen.append('<h2 class="meat_ramen">Tempura Soba</h2><br/>');                    
            ramen.append('<p>Soba con una deliciosa y crujiente tempura de verduras ecológicas y langostino con alga nori.</p>');                   
        }

        function ramen10(){
            ramen.append('<img class="image_pop-up" src="img/carta/veganRamen.jpg">'); 
            ramen.append('<h2 class="vegan_ramen">Vegan Ramen</h2><br/>');                    
            ramen.append('<p>Ramen con caldo de verduras y miso, proteína vegetal Heura, rodajas de bambú, cebolla roja, cebollino, pak choi, hongos shimeji y maíz.</p>');                   
        }


        // Función que añade la clase active a overlay y pop-up. Además captura la altura a la que se encuentra la ventana
        // y deshabilita el funcionamiento de la barra de scroll.
        function active() {

            overlay.addClass('active');
            popUp.addClass('active');

            let presentScroll= document.documentElement.scrollTop;
            window.onscroll = function () { window.scrollTo(0, presentScroll); };
        }


        let array_ramen= $('.image_ramen'); 

        $.each(array_ramen, function(index, element) {

            array_ramen[index].addEventListener('click', function(){
                active();
                // Se utiliza eval() para llamar a las funciones ramen1(), ramen2()... Ya que si solo se adiciona el id 
                // del elemento + (); este no llama a la función, ya que no se interpreta el string como una ejecución de 
                // código. Con eval, la adición del id de cada elemento + (); ejecuta la cadena de código y realiza la 
                // llamada a la función de ramen que corresponda para adjuntar la imagen, título y descripción al pop-up.
                eval(element.id + '();');
            });
        });


        // Función que elimina la clase active de overlay y pop-up, vaciando el contenido de ramen_container. Además 
        // mantiene la altura a la que se encuentra la página.
        function close_popUp() {

            overlay.removeClass('active');
            popUp.removeClass('active');
            ramen.empty();

            let presentScroll= document.documentElement.scrollTop;
            window.onscroll = function () { window.scrollTo(0, presentScroll); };
            window.onscroll=function(){};
        }

        // LLama a la función al hacer click en la flecha volver. 
        arrow_close_popUp.click(function(){
            close_popUp();
        });

        // LLama a la función al hacer click  en algun punto del overlay(menos dentro del pop-up).
        overlay.click(function(){
            close_popUp();
        });
    });


    // Actúa solamente en la página ingredientes.html.
    act.pag('ingredientes.html',function(){ 

        // EFECTO IMÁGENES DE TÍTULOS

        // Función que muestra las imagenes de cada título. El parámetro array_img_title se reemplazará en cada llamada a 
        // la función por el array de las imágenes de cada título.
        function showPicture(array_img_title) {
            array_img_title.each(function(index){
                var $this = $(this);
                // Multiplica los milisegundos indicados por su índice, indicando el retraso al final de cada iteración.
                setTimeout(function () {
                    $this.addClass("active");
                    $this.removeClass("inactive");
                }, 100 * index);
            });
        }

        // Función que oculta las imágenes de cada título.
        function hidePicture(array_img_title) {
            // Funciona de la mima forma que showPicture, pero aplica un retraso con setTimeout al iniciar la animación.
            setTimeout(function(){
                array_img_title.each(function(index){
                    var $this = $(this);
                    setTimeout(function(){
                        $this.addClass("inactive");
                        $this.removeClass("active");
                    }, 100 * index);
                });
            }, 400);
        }


        // EFECTO PROTEÍNAS
        
        var title_protein= $('#title_protein');                             
        var array_img_title_protein= $('#protein_title_box .title_img_box');
        var array_protein= $("#ingredients_container .protein_box");

        array_protein.each(function(){
            $(this).hide();
        });

        title_protein.mouseenter(function(){
            showPicture( array_img_title_protein);
        });

        title_protein.mouseleave(function(){
            hidePicture( array_img_title_protein);
        });
        
        title_protein.click(function(){
            array_protein.each(function(){
        	   $(this).toggle(1000);
        	});

            $('.protein_box .description').removeClass('active');
            $('.protein_box .img_protein').removeClass('img_enter');
        });


        // EFECTO VERDURAS

        var title_vegetable= $('#title_vegetable');
        var array_vegetable= $("#ingredients_container .vegetable_box");
        var array_img_title_vegetable= $('#vegetable_title_box .title_img_box');

        array_vegetable.each(function(){
            $(this).hide();
        });

        title_vegetable.mouseenter(function(){
            showPicture( array_img_title_vegetable);
        });

        title_vegetable.mouseleave(function(){
            hidePicture( array_img_title_vegetable);
        });

        title_vegetable.click(function(){
            array_vegetable.each(function(){
        	   $(this).toggle(1000);
        	});

            $('.vegetable_box .description').removeClass('active');
            $('.vegetable_box .img_vegetable').removeClass('img_enter');
        });



        // EFECTO FIDEOS

        var title_noodle= $('#title_noodle');
        var array_noodle= $("#ingredients_container .noodle_box");
        var array_img_title_noodle= $('#noodle_title_box .title_img_box');

        array_noodle.each(function(){
            $(this).hide();
        });

        title_noodle.mouseenter(function(){
            showPicture( array_img_title_noodle);
        });

        title_noodle.mouseleave(function(){
            hidePicture( array_img_title_noodle);
        });

        title_noodle.click(function(){ 
            array_noodle.each(function(){
        	   $(this).toggle(1000);
        	});

            $('.noodle_box .description').removeClass('active');
            $('.noodle_box .img_noodle').removeClass('img_enter');
        });


        // EFECTO ANIMADO AL HACER HOVER(PARA TODAS LAS IMAGENES DE INGREDIENTES)
  
        var array_img= $('.img_ingredient');

        array_img.each(function(){
           $(this).mouseenter(function(){
                $(this).addClass("img_enter");
                // Obtiene el contenedor de la descripción del ingrediente. Primero accede al padre(parent) y después al
                // hermano(next).
                var box_description= $(this).parent().next();
                box_description.addClass('active');
            });
        });
    });
    


    // Actúa solamente en la página contacto.html.
    act.pag('contacto.html',function(){ 

        // FORMULARIO

        var array_input= $('#contact_form .form_input')

        for (let i= 0; i< array_input.length; i++) {
            array_input[i].addEventListener('blur', function(){

                // Accede al hermano mas próximo de cada input, que es cada etiqueta correspondiente. 
                let label= $(this).next();

                if (this.value.length >= 1) {
                    label.addClass('active');
                }else if (this.value.length = " ") {
                    label.removeClass('active');
                }else{
                    label.removeClass('active');
                }
            });
        }


        // MENSAJES DE ERROR Y CONFIRMACIÓN.

        var contact_form= $('#contact_form');
        var array_mistake= $('.mistake');
        var confirmation= $('#confirmation');

        array_mistake.hide();
        confirmation.hide();

        contact_form.submit(function() {

            // Variable booleana con_errores, por defecto en false.
            let b_with_mistake= false;

            array_input.each(function(){

                // En cada input, accede al hermano(label) y al siguiente hermano(mistake) siguiendo la estructura del DOM. 
                var mistake= $(this).next().next();

                if ($(this).val().trim().length < 1) {
                    mistake.show();
                    // Si existe algun error en cualquiera de los input, poner la variable a true.
                    b_with_mistake= true;
                }else{
                    mistake.hide();
                }
            });

            // Si no hay errores:
            if (b_with_mistake == false) {
                confirmation.show();
                array_input.each(function(){
                    $(this).val('');
                    // Accede al hermano de cada input que es la etiqueta.
                    let label= $(this).next();
                    label.removeClass('active');
                    label.addClass('inactive');
                });
            }else{
                confirmation.hide();
            }
        });
    });

    // Se aplica act.lan() al final de todas las funciones creadas para cada página.
    act.lan();
});