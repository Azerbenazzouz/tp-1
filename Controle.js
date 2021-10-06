function GenererCaptcha(){
    str=""
    mag=0
    for (var i=0;i<10 ; i++) {
        Key=Math.floor(Math.random()*25)+1
        if( Key %2==0){
            str+=String.fromCharCode("A".charCodeAt()+Key-1)
            mag+=1
        }else{
            str+=String.fromCharCode("a".charCodeAt()+Key-1)

        }
    }
	document.f1.cap.value = str
}
function verif(){
    // la sélection d'un hotel
    if(document.f1.hotel.value=="choisir un hotel"){
        alert("choisir un hotel SVP")
        return false
    }
    // "Accueil" "Restauration" obligatoire
    if(document.f1.acc.value==""){
        alert("choisir une Eavaluation de l'accueil ")
        return false
    }
    if(document.f1.res.value==""){
        alert("choisir une Eavaluation de la restauration ")
        return false
    }
    // choisir au mois un extra
    if((document.f1.piscine.checked || document.f1.plage.checked || document.f1.wifi.checked)!=true){
        alert("choisir au mois un extra ")
        return false
    }
    // check captcha
    if(document.f1.T1.value!=mag){
        alert("Captcha error")
        return false
    }
    return true
}