//联动菜单
	var array=new Array();
	array[0]=["请选择"];
	array[1]=["海淀","朝阳","西城","东城"];
	array[2]=["石家庄","邢台","保定"];

	function showCities(){
		var i=document.getElementById("sel1").selectedIndex;
		var sellObj=document.getElementById("sel2");
		for(var j=0;j<sellObj.childNodes.length;j++){
			sellObj.removeChild(sellObj.childNodes[j]);
		}
		while(sellObj.childNodes.length>0){
			sellObj.removeChild(sellObj.firstChild);
		}
		var cities=array[i];
		for(var index=0;index<cities.length;index++){
			var newNode=document.createElement("option");
			newNode.innerHTML=cities[index];
			document.getElementById("sel2").appendChild(newNode);
		}
	}