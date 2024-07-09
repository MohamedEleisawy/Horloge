document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  horloge();

  function horloge() {
    // instance de l'objet Date 
    const date = new Date();
    // const hours = date.getHours() % 12;
    //
    const hours = date.getHours();
    // instantiation qui permet de recuperer les minutes
    const minutes = date.getMinutes();
    // instantiation qui permet de recuperer les secondes
    // objet date,  seconde actuelle  
    const seconds = date.getSeconds();
    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;

    document.querySelector('.petiteaiguille').style.transform = `rotate(${hour}deg)`;
    document.querySelector('.grandeaiguille').style.transform = `rotate(${minute}deg)`;
    document.querySelector('.trotteuse').style.transform = `rotate(${second}deg)`;
  }

  setInterval(horloge, 1000);

});
