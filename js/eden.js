var eden = 
{
    buttons: function()
    {
        const toggler = document.getElementsByClassName("toggler-link");
        const menu = document.getElementsByClassName("menu");
        toggler[0].addEventListener("click", (event) => 
        {
            event.preventDefault();
            menu[0].style.top = 0;
        });
        
        const buttons = document.getElementsByClassName("clicker");
        const sections = document.getElementsByClassName("section");
        for(b = 0; b < buttons.length; b++)
        {
            buttons[b].addEventListener("click", (event) => 
            {
                let hash = "#" + event.target.baseURI.split('#')[1];
                if(typeof event.target.hash != 'undefined') hash = event.target.hash;
                const nav = document.querySelector('a[data-id="' + hash + '"]');
                for(but = 0; but < buttons.length; but++)
                {
                    buttons[but].classList.remove("active");
                }
                if
                (
                    nav
                    && event.srcElement.className != 'racing'
                    && event.srcElement.className != 'chin'
                )
                {
                    //nav.classList.add("active");
                    
                    menu[0].style.top = '-100vh';
                    
                    for(s = 0; s < sections.length; s++)
                    {
                        sections[s].scrollTop = 0;
                    }
                }
            });
        }
    },
    init: function()
    {
        eden.buttons();
        eden.state();
        eden.scroll();
    },
    scroll: function()
    {
        // TODO
        // change active state when scrolling to relevant section ...
        const sections = document.querySelectorAll(".sectioner");
        const navLi = document.querySelectorAll(".header .menu a");
        window.addEventListener("scroll", () => {
          let current = "";
          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute("id");
            }
          });

          navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.classList.contains(current)) {
              li.classList.add("active");
            }
          });
        });
    },
    state: function()
    {
        const hash = window.location.hash;
        if(typeof hash != 'undefined' && hash != '#' && hash != '' && hash)
        {
            document.querySelector('a[data-id="' + hash + '"]').click();
        }
    }
};

window.onload = function(e)
{
    eden.init();
};