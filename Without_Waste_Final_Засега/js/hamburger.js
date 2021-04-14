const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.mainUl');
  const navLinks = document.querySelectorAll('.mainUl li');
  const ResponsiveBackground = document.querySelector('.ResponsiveBackground');


  burger.addEventListener('click',() =>{
    nav.classList.toggle('nav-active');
    ResponsiveBackground.classList.toggle('toggled');
    

    navLinks.forEach((link,store) =>{
      if(link.style.animation){
        link.style.animation = '';
      } else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${store / 7 + 0.35}s`;
      }
    });
    //burger animation
    burger.classList.toggle('toggle');
  });


  document.onclick = function(e){
    if(e.target.id !== 'burger' && e.target.id !== 'line1' && e.target.id !== 'line2'
    && e.target.id !== 'line3' && e.target.id !== 'mainUl' && e.target.id !== 'navbar' && e.target.id !== 'dropbtn' && e.target.id !== 'dropdown'){  
      nav.classList.remove('nav-active'); 
      burger.classList.remove('toggle');
      ResponsiveBackground.classList.remove('toggled');
      navLinks.forEach((link,store) =>{
      link.style.animation = '';      
      });
    }
  }
  window.addEventListener("resize",() =>{
      if((window.innerWidth>768)  && (ResponsiveBackground.classList.contains('toggled'))){
        document.getElementById("ResponsiveBackground").classList.remove('toggled');
        
      }
      else if((window.innerWidth<768) && (burger.classList.contains('toggle'))){
        document.getElementById("ResponsiveBackground").classList.toggle('toggled');
      }
});

}

navSlide();