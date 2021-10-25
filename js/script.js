const row = document.querySelector('.row');


for (let i = 1; i <= 100; i++){
  const box = document.createElement('div');
  box.className = 'box';
  box.innerHTML = i;
  row.append(box);
  
  if(!(i % 3) && !(i % 5)){
    box.classList.add('divisible-both');
    box.innerHTML = 'fizzbuzz';
  }else if(!(i % 3)){
    box.classList.add('divisible-3');
    box.innerHTML = 'fizz';
  }else if(!(i % 5)){
    box.classList.add('divisible-5');
    box.innerHTML = 'buzz';
  }
}