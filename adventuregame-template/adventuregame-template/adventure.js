var container = document.getElementById("container");
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var description = document.getElementById('description');
var inventoryItem = document.getElementById ("inventoryItem");
var inventory = {'key':false};

button1.innerHTML = 'start';
button1.onclick = start;
button2.style.display = 'none';
button3.style.display = 'none';
inventoryItem.style.display = 'none';


function start(){
	description.innerHTML = 'je ben een journalist je gaat onderzoek doen bij het psychiatrisch ziekenhuis genaamd Mount Massive Asylum maar als je naar binnen gaat kom je erachter dat je dockter hele erge experimenten heeft uitgevoert maar dat is uit de hand gelopen. je zit vast in het psychiatrisch ziekenhuis met als die gekken en moet zien te ontsnappen.'
	button1.innerHTML = 'start';
   	button1.onclick = level1 ;
   	button2.style.display = 'none';
	button3.style.display = 'none';
	container.className = 'container-level0';
	inventoryItem.style.display = 'none';

   	

}
   

function level1(){
	container.className = 'container-level1';
	description.innerHTML = 'je bent gepakt door de doktor hij had je buiten westen geslagen. je word wakker in een kamer de docter is er niet wat doe je.';
	button1.onclick = dood;
	button2.onclick = dood;
	button3.onclick = level2;
	button2.style.display = 'inline';
	button3.style.display = 'inline';
	button1.innerHTML = 'vecht';
	button2.innerHTML = 'ren';
	button3.innerHTML = 'verstoppen';
	inventoryItem.style.display = 'none';
	
}   


function level2(){
	description.innerHTML = 'de dokter kon je niet vinden en je bent ontsnapt. je bent in een gang waar ga je heen';
	container.className = 'container-level2';
	button1.innerHTML = 'links';
	button2.innerHTML = 'rechtdoor';
	button3.innerHTML = 'rechts';
	if (inventory ['key'] == true){
	button1.style.visibility = 'hidden';
}
	else{

	button1.style.visibility = 'visible';
}
	button3.style.visibility = 'visible';
	button1.onclick = level3;
	button2.onclick = dood;
	button3.onclick = level4;
	inventoryItem.style.display = 'none';
	
}


function level3(){
	description.innerHTML = 'er ligt heel toevallig een sleutel in deze kamer';
	container.className = 'container-level3';
	button2.innerHTML = 'ga terug';
	button1.style.visibility = 'hidden';
	button3.style.visibility = 'hidden';
	button2.onclick = level2;
	inventoryItem.style.visibility = 'visible';
	inventoryItem.onclick = pickUpKey;
	inventoryItem.style.display = '';
	inventoryItem.src = 'images/keyItem.png';
	
}


function level4(){
	description.innerHTML = 'welke kan ga je op?';
	container.className = 'container-level4';
	inventoryItem.style.display = 'none';
	button1.innerHTML = 'terug';
	button2.innerHTML = 'rechtdoor';
	button3.innerHTML = 'rechts';
	button1.style.visibility = 'visible';
	button1.onclick = level2;
	button2.onclick = level6;
	button3.onclick = level5;
	button3.style.visibility = 'visible';
	button1.style.visibility = 'visible';
}

function level5(){
	description.innerHTML = 'het is een dead end ga terug voor dat hij je ziet!';
	container.className = 'container-level5';
	button1.style.visibility = 'hidden';
	button3.style.visibility = 'hidden';
	button2.innerHTML = 'ga terug';
	button2.onclick = level4;

}

 function level6(){
 	container.className = 'container-level6';
 	button1.style.visibility = 'visible';
	button3.style.visibility = 'hidden';
	button2.innerHTML = 'lift';
	button1.innerHTML = 'terug';
	description.innerHTML = 'ga met de lift naar de lobby';
	button1.onclick = level4;
	if (inventory ['key'] == true){
		button2.onclick = level7;
	}
	else{
		alert('je hebt een sleutel nodig')
	}
 }

 function level7(){
 	container.className = 'container-level7';
 	button1.style.visibility = 'hidden';
 	button2.style.visibility = 'visible';
	button3.style.visibility = 'hidden';
	description.innerHTML = 'ren naar buiten!';	
	button2.innerHTML = 'ren';
	button2.onclick = level8;
 }

 function level8(){
 	container.className = 'container-level8';
 	button1.style.visibility = 'visible';
 	button2.style.visibility = 'visible';
	button3.style.visibility = 'visible';
	button1.innerHTML = 'ren';
	button2.innerHTML = 'verstop';
	button3.innerHTML = 'afleiden';
	description.innerHTML = 'iemand staat je buiten op te wachten, wat doe je';	
	button1.onclick = dood;
	button2.onclick = dood;
	button3.onclick = level9;
 }

 function level9(){
 	container.className = 'container-level9';
 	button1.style.visibility = 'hidden';
 	button2.style.visibility = 'visible';
	button3.style.visibility = 'hidden';
	button2.innerHTML = 'stap in';
	description.innerHTML = 'je hebt hem afgeleid en gaat naar je auto. je auto staat er nog, stap in!';
	button2.onclick = level10;

 }

 function level10(){
 	container.className = 'container-level10';
 	description.innerHTML = 'je bent ontsnapt, very nice!';
 	button1.style.visibility = 'hidden';
 	button2.style.visibility = 'hidden';
	button3.style.visibility = 'hidden';
 }


function dood(){
	container.className = 'container-dood'
	description.innerHTML = 'dat was geen goeie keus je bent dood';
	button2.style.display = 'none';
	button3.style.display = 'none';
	button1.innerHTML = 'restart';
	button1.onclick = start;
	inventoryItem.style.display = 'none';
	button1.style.visibility = 'visible';
	resetInventory();
}

function resetInventory(){
	inventory['key']=false;
}

function pickUpKey(){
	inventoryItem.style.display = 'none';
    inventory['key']=true;
    if(inventory['key'] != null) {
        description.innerHTML = 'Je hebt de sleutel gevonden';
    }
}