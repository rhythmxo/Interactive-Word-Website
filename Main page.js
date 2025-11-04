function backtomain()
{
    window.location.href = ("frontpage.html");
}

function showword(x)
{
    var top = document.getElementById("topic")
    var pro = document.getElementById("pronunciation");
    var def = document.getElementById("definition");

   
    if (x=='Anime')
    {
      top.innerHTML = "Anime";
      pro.innerHTML = "/æn.ɪ.meɪ/";
      def.innerHTML = "a genre of film and television animation created in or influenced by the traditional style of Japanese 2D animation and characterized by highly stylized, colorful art, fantastic settings, and mature themes."
    }
    else if(x=='Galaxy')
    {
        top.innerHTML = "Galaxy";
        pro.innerHTML = "/ɡæl.ək.si/";
        def.innerHTML = "a large system of stars held together by mutual gravitation and isolated from similar systems by vast regions of space."
    }
    else if (x=='Computer')
    {
        top.innerHTML = "Computer";
        pro.innerHTML = "/kəmˈpjuː.tər/";
        def.innerHTML = " a programmable electronic device designed to accept data, perform prescribed mathematical and logical operations at high speed, and display the results of these operations."
    }
    else if(x=='Coffee')
    {
        top.innerHTML = "Coffee";
        pro.innerHTML = "/kɒf.i/";
        def.innerHTML = "a dark brown powder with a strong flavour and smell that is made by crushing dark beans from a tropical bush and used to make a drink: "
    }
    else if(x=='Olympic')
    {
        top.innerHTML = "Olympic";
        pro.innerHTML = "/əˈlɪm.pɪk/";
        def.innerHTML = "The modern Olympic Games or Olympics are the leading international sporting events "
    }
    else if(x=='Bulldog')
    {
        top.innerHTML = "Bulldog";
        pro.innerHTML =  "/əˈlɪm.pɪk/";
        def.innerHTML = "a small dog that can be frightening and has a strong body, short legs, and a large, square-shaped face"
    }
    
    else if(x=='Candle')
    {
        top.innerHTML = "Candle";
        pro.innerHTML =  "/kæn.dəl/";
        def.innerHTML = "a stick-shaped piece of wax with a wick (= piece of string) in the middle of it that produces light as it slowly burns"
    }
    else if(x=='Xbox')
    {
        top.innerHTML = "Xbox";
        pro.innerHTML =  "/eks·baaks/";
        def.innerHTML = "Xbox is a video gaming brand created and owned by Microsoft"
    }
    else if(x=='Apple')
    {
        top.innerHTML = "Apple";
        pro.innerHTML =  "/ˈæp.əl/";
        def.innerHTML = "a round fruit with firm, white flesh and a green, red, or yellow skin:"
    }
    else if(x=='Mars')
    {
        top.innerHTML = "Mars";
        pro.innerHTML =  "/mɑːz/";
        def.innerHTML = "the planet fourth in order of distance from the sun, after Earth and before Jupiter: "
    }
    else if(x=='Cyan')
    {
        top.innerHTML = "Cyan";
        pro.innerHTML =  "/saɪ.ən/";
        def.innerHTML = "a deep greenish-blue colour, one of the main colours that are used in colour printing and photography: "
    }
    else if(x=='Courage')
    {
        top.innerHTML = "Courage";
        pro.innerHTML =  "/kʌr.ɪdʒ/";
        def.innerHTML = "They showed great courage when they found out about their baby's disability. "
    }
    else if(x=='Atlas')
    {
        top.innerHTML = "Atlas";
        pro.innerHTML =  "/æt.ləs/";
        def.innerHTML = "a book containing maps: . "
    }
    else if(x=='Halo')
    {
        top.innerHTML = "Halo";
        pro.innerHTML =  "/heɪ.ləʊ/";
        def.innerHTML = "a bright circle of light around something, or something that looks like this: "
    }
    else if(x=='Reincarnate')
    {
        top.innerHTML = "Reincarnate";
        pro.innerHTML =  "/riː.ɪn.kɑːˈneɪt/";
        def.innerHTML = "If a dead person or animal is reincarnated as someone or something else, their spirit returns to life in that person or animal.: "
    }
    else if(x=='Burst')
    {
        top.innerHTML = "Burst";
        pro.innerHTML =  "/bɜːst/";
        def.innerHTML = "to break open or apart suddenly, or to make something do this "
    }

}

function addfavorite()
{
    var topi = document.getElementById("topic")
    var favo = document.getElementById("fav")
    let butt = document.createElement("button");
    butt.classList.add("my-button");
    butt.innerText = topi.innerText;
    butt.addEventListener("click", showword(butt.innerText) );
   favo.appendChild(butt);
}


function addnewword()
{
    var nw = document.getElementById("nw")
    var w = document.getElementById("worrd")
    var d = document.getElementById("def")
     let button = document.createElement("button");
    button.innerText = w.value + " ('" + d.value+"')\n";
    button.classList.add("addbutton");
    
    nw.appendChild(button);
   
}

