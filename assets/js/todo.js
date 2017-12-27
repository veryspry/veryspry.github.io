 

var addButton = document.getElementById('addBtn');
var clearButton = document.getElementById('clearBtn');
var input = document.getElementById('input');
var list = document.getElementById('list');
var array = [];

/*
function NewTask(task) {
	this.task = task;
	this.clearBtn = ' <button type="button" id=" ' + this.index + ' "> ' + 'Clear Task' + '</button>' 
}

function List(task) {
	this.tasks = [];
	this.Index = 0;
	this.tasks.push(task);
}
*/ 


function pushTask() {
	list.innerHTML += '<li>' + input.value + '</li>';
	list.innerHTML += '<button type="button" id="listItem">' + 'Delete Item' + '</button>' 
	var clearCurrent = document.getElementsByClassName('clearCurrent');
	clearCurrent.onclick = function() {
		alert('hey!');
	}
}


addButton.onclick = function() {
	//alert('hey!');
	console.log(input.value);
	pushTask();
	input.value = '';
}

clearButton.onclick = function() {
	//alert('hey!');
	console.log(input.value);
	list.innerHTML = '';
}




