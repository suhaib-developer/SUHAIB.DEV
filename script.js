function scrollToElement(ElementSelector, instance = 0){
  // select all elements that match the given selector
  const elements = document.querySelectorAll(ElementSelector);
  // check is there are elements matching the selector adn if the requested instance exists
  if(elements.length > instance){
    // scroll to the specified instance of the element
    elements[instance].scrollIntoView({ behavior: 'smooth'});
  }
}

const Link1 = document.getElementById("link1");
const Link2 = document.getElementById("link2");
const Link3 = document.getElementById("link3");

Link1.addEventListener('click', () =>{
  scrollToElement('.header')
});

Link2.addEventListener('click', () =>{
  //scroll to the secont element with "header" class
  scrollToElement('.header', 1)
});

Link3.addEventListener('click', () =>{
  scrollToElement('.column')
});