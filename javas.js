const ticket=200

function calculo(){
    let cant=document.getElementById("cant").value

    let categoria=document.getElementById("categoria").value

    let total=0

    if(categoria==1){
        total=(cant*ticket*0.2)
    }else if(categoria==2){
        total=(cant*ticket*0.5)
    }else{
        total=(cant*ticket*0.85)
    }

    document.getElementById("total").innerHTML=`total a pagar: $${total}`
       
}
