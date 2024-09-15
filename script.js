document.getElementById('rollButton').addEventListener('click', () => {
    const dice = document.getElementById('dice');
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    
    let rotationX = 0;
    let rotationY = 0;


      rotationX = Math.floor(Math.random() * 360);
      rotationY = Math.floor(Math.random() * 360);
    dice.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  setTimeout(() => {
        rotationX = Math.floor(Math.random() * 360);
      rotationY = Math.floor(Math.random() * 360);
      dice.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }, 1500);
    setTimeout(() => {
        rotationX = Math.floor(Math.random() * 360);
      rotationY = Math.floor(Math.random() * 360);
      dice.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }, 3000);
    setTimeout(() => {
        rotationX = Math.floor(Math.random() * 360);
      rotationY = Math.floor(Math.random() * 360);
      dice.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }, 4500);
    
    

    setTimeout(() => {
      if (randomNumber === 1) {
      rotationX = 0;
      rotationY = 0;
    }else if (randomNumber === 2) {
      rotationX = 180;
      rotationY = 90;
    }else if (randomNumber === 3) {
      rotationX = 180;
      rotationY = 0;
    }else if (randomNumber === 4) {
      rotationX = 180;
      rotationY = 270;
    }else if (randomNumber === 5) {
      rotationX = 270;
      rotationY = 90;
    }else{
      rotationX = 90;
      rotationY = 90;
    }
    dice.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        
    }, 6000);
    setTimeout(() => {
      let score = document.getElementById("score");
      score.value = `You rolled a ${randomNumber}`;
        
    }, 8500);
    
});
