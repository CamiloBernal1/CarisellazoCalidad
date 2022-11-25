const cara = document.getElementById('caras')
const sello = document.getElementById('sellos')
const gana= document.getElementById('ganar')
const pierde = document.getElementById('perder')
const intentos = document.getElementById('intento')
let a = 1, b = 1, i = 1, total = 0
const termina = document.getElementById('terminarr')
const nombre = document.getElementById('name')

termina.addEventListener('click',()=>{
      if(total<0){      
            Swal.fire({title: `Gracias por participar`, text: `Perdiste ${total} y tus intentos fueron ${i}, 
            reinicia para volver a jugar :b`,  icon:`error`});
      }else{
            Swal.fire({title: `Gracias por participar`, text:`Ganaste ${total} y tus intentos fueron ${i},
            reinicia para volver a jugar :b`, icon:`success`}); 
      }
})

cara.addEventListener('click',()=>{
    let apuesta = document.getElementById('inputt').value;
      apuesta = parseFloat(apuesta)
        if(apuesta >= 999){
            let random =  Math.random()*1 + 1;
            let cara = random.toPrecision(1);
                i = a + b - 1 ;
                if(cara == 1){    
                      gana.innerText = a
                      a = a + 1 
                      intentos.innerText = i;
                      total = total + apuesta * 2;
                }else if(cara > 1 || cara < 1){
                      b = b + 1 
                      pierde.innerHTML = b;
                      intentos.innerHTML = i;    
                      total = total - apuesta;
                }
          }else{
                Swal.fire({title: `Valor de apuesta no permitido`, icon:`error`});
          }
})

sello.addEventListener('click', ()=>{
    let apuesta = document.getElementById('inputt').value;
      apuesta = parseFloat(apuesta)
        if(apuesta >= 999){
            let random =  Math.random()*1 + 1;
            let sello = random.toPrecision(1);
            i = a + b - 1; 
                if(sello == 2){
                    gana.innerText= a
                    a = a + 1
                    intentos.innerText = i;
                    total = total + apuesta * 2;
                      
                }else if(sello <2 || sello >2){
                    b = b + 1 
                    pierde.innerHTML = b;                
                    intentos.innerHTML = i;    
                    total = total - apuesta; 
                }
        }else{
                Swal.fire({title: `Valor de apuesta no permitido`, icon:`error`});
            } 
})

const moneda = document.getElementById('a')
const animation = moneda.animate([
    {
        transform:'rotateY(0)'
    },
    {
        transform: 'rotateY(360deg)'
    }
],{
    duration: 2000,
    direction: 'normal',  
    easing: 'linear',
    iterations: Infinity
})

const monedas = document.getElementById('b')
const animation2 = monedas.animate([
      {
          transform:'rotateY(0)'
      },
      {
          transform: 'rotateY(360deg)'
      }
  ],{
      duration: 2000,
      direction: 'normal',  
      easing: 'linear',
      iterations: Infinity
  })