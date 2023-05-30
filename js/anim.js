

  // function onEntry(entry) {
  //   console.log(entry)
  //   entry.forEach(change => {
  //     if (change.isIntersecting) {
  //      change.target.classList.add('element-show');
  //     }
  //   });
  // }
  
  // let options = {
  //   threshold: [.7] };
  // let observerFirstBlock = new IntersectionObserver(onEntry, options);

  // let elements=document.querySelectorAll(".animation");
  // elements.forEach(element => {
  //   observerFirstBlock.observe(element)
  // });


    // let observerConsult = new IntersectionObserver(onEntry, options);
  // let elements = document.querySelector('.first-block-container-title');

  // observerFirstBlock.observe(elements);
  
  
  // let consult = document.querySelector('.consult-container');
  // observerConsult.observe(consult);

let animation=document.querySelectorAll('.animation');
let callback = function(entries, observer){
  entries.forEach(entry => {
          
          if (entry.isIntersecting){entry.target.classList.add('element-show')}
      
  
  })
}
let observer = new IntersectionObserver(callback, {
  threshold: .1
})
animation.forEach(element => {
  observer.observe(element)
});




