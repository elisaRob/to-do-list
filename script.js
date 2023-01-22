let input=document.getElementsByClassName("input")[0];
let input2=document.getElementsByClassName("bouton")[0];
let tacheUl=document.querySelector('.tacheUl');
let form=document.getElementsByTagName('form')[0];
let nouveauIdSpan=document.getElementsByClassName("nouveauIdSpan");
let counter=0;

/*localStorage.setItem("recuperationListe",tacheUl);
tacheUl=localStorage.getItem("recuperationListe");*/

input2.addEventListener('click',function()
{

    evenement();
    
});

input.addEventListener('keyup',function(event)
{
    if(event.keyCode===13)
    {
        evenement();
    }
})

function evenement()
{
    if(input.value=='')
    {

    }


    else
    {
        
        let nouvelleElementLi=document.createElement("li");
        let nouveauContenu=document.createTextNode(input.value+"    ");
        nouvelleElementLi.appendChild(nouveauContenu);
        let nouvelleElementSpan=document.createElement("span");
        let nouveauContenuSpan=document.createTextNode("supprimer ");
        nouvelleElementSpan.style.color="rgb(219 103 100)";
        nouvelleElementSpan.style.fontWeight="bold";
        nouvelleElementSpan.style.cursor="pointer";
        nouvelleElementLi.setAttribute("id","lii-"+counter);
        nouvelleElementSpan.setAttribute("id","li-"+counter);
        nouvelleElementSpan.setAttribute("onclick","deleteLi(this.parentNode.id)");
        nouvelleElementSpan.appendChild(nouveauContenuSpan);
        nouvelleElementLi.appendChild(nouvelleElementSpan);
        tacheUl.appendChild(nouvelleElementLi);

      
        
       counter++;
        
        input.value='';
    }

    
}



function deleteLi(id)
 {
    const li = document.getElementById(id);
    li.parentNode.removeChild(li);
  }

/*function supprimer()
{
    const ailElements = document.querySelectorAll("*");
for (let i = 0; i < allElements.length; i++) {
  if (allElements[i].getAttribute("id")){
    if (allElements[i].getAttribute("id").startsWith("id_")) {
      console.log(allElements[i].getAttribute("id"));
    }
  }
}*/
    /*var recupererId=document
    param.remove();*/
/*}*/




