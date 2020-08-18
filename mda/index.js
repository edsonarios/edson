const fs = require('fs')
let archivo = fs.readFileSync('mda.txt', 'utf-8');

//console.log(archivo)
var final=""
for (let i = 0; i < archivo.length; i++) {
    var aux=""
    aux =archivo[i]

    if(archivo[i]=="1"){aux="++C"}
    if(archivo[i]=="8"){aux="+C"}
    if(archivo[i]=="t"){aux="C"}
    if(archivo[i]=="s"){aux="-C"}
    if(archivo[i]=="l"){aux="--C"}

    if(archivo[i]=="!"){aux="++C#"}
    if(archivo[i]=="*"){aux="+C#"}
    if(archivo[i]=="T"){aux="C#"}
    if(archivo[i]=="S"){aux="-C#"}
    if(archivo[i]=="L"){aux="--C#"}

    if(archivo[i]=="2"){aux="++D"}
    if(archivo[i]=="9"){aux="+D"}
    if(archivo[i]=="y"){aux="D"}
    if(archivo[i]=="d"){aux="-D"}
    if(archivo[i]=="z"){aux="--D"}

    if(archivo[i]=="@"){aux="++D#"}
    if(archivo[i]=="("){aux="+D#"}
    if(archivo[i]=="Y"){aux="D#"}
    if(archivo[i]=="D"){aux="-D#"}
    if(archivo[i]=="Z"){aux="--D#"}

    if(archivo[i]=="3"){aux="++E"}
    if(archivo[i]=="0"){aux="+E"}
    if(archivo[i]=="u"){aux="E"}
    if(archivo[i]=="f"){aux="-E"}
    if(archivo[i]=="x"){aux="--E"}

    if(archivo[i]=="4"){aux="++F"}
    if(archivo[i]=="q"){aux="+F"}
    if(archivo[i]=="i"){aux="F"}
    if(archivo[i]=="g"){aux="-F"}
    if(archivo[i]=="c"){aux="--F"}

    if(archivo[i]=="$"){aux="++F#"}
    if(archivo[i]=="Q"){aux="+F#"}
    if(archivo[i]=="I"){aux="F#"}
    if(archivo[i]=="G"){aux="-F#"}
    if(archivo[i]=="C"){aux="--F#"}

    if(archivo[i]=="5"){aux="++G"}
    if(archivo[i]=="w"){aux="+G"}
    if(archivo[i]=="o"){aux="G"}
    if(archivo[i]=="h"){aux="-G"}
    if(archivo[i]=="v"){aux="--G"}

    if(archivo[i]=="%"){aux="++G#"}
    if(archivo[i]=="W"){aux="+G#"}
    if(archivo[i]=="O"){aux="G#"}
    if(archivo[i]=="H"){aux="-G#"}
    if(archivo[i]=="V"){aux="--G#"}

    if(archivo[i]=="6"){aux="++A"}
    if(archivo[i]=="e"){aux="+A"}
    if(archivo[i]=="p"){aux="A"}
    if(archivo[i]=="j"){aux="-A"}
    if(archivo[i]=="b"){aux="--A"}

    if(archivo[i]=="^"){aux="++A#"}
    if(archivo[i]=="E"){aux="+A#"}
    if(archivo[i]=="P"){aux="A#"}
    if(archivo[i]=="J"){aux="-A#"}
    if(archivo[i]=="B"){aux="--A#"}

    if(archivo[i]=="7"){aux="++B"}
    if(archivo[i]=="r"){aux="+B"}
    if(archivo[i]=="a"){aux="B"}
    if(archivo[i]=="k"){aux="-B"}
    if(archivo[i]=="n"){aux="--B"}
    
    final+=aux
    
}

fs.writeFile('./archivo1.txt', final, error => {
    if (error)
      console.log(error);
    else
      console.log('El archivo fue creado');
  });

console.log(archivo.length)
console.log(final)