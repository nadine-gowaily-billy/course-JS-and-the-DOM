document.addEventListener('click',function(){
 const mainHeading= document.querySelector('h1');
 mainHeading.style.backgroundColor='red';
});
document.body.addEventListener('Keypress',function(){
 console.log('Removing First Child');
 document.querySelector('#contain-all').firstElementChild.remove();
});
