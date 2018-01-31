var add = document.getElementById('addElem');
var list = document.getElementById('list');

add.addEventListener('click', 

	function() {

		var element = document.createElement('li');
		var deleteBtn = document.createElement('button');

        element.innerHTML = '(click me to remove) item ' + list.getElementsByTagName('li').length;
		list.appendChild(element);


		element.onclick = function() {	//bonus
    	this.remove();
  			
  		}
	}
);

