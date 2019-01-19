// handle spawn process with button
function spawnEvent(event){
	var data = [2,2,1,1];
	var dataString = "";

	//https://ourcodeworld.com/articles/read/286/how-to-execute-a-python-script-and-retrieve-output-data-and-errors-in-node-js
	//npm install python-shell
	const {PythonShell} = require('python-shell');
	console.log(PythonShell);
	var pyProcess = new PythonShell('./sum.py');

	pyProcess.send(JSON.stringify(data));
	pyProcess.on('message', function(message){
		// receive output from py
		console.log('log',message);
	});

	pyProcess.end(function(err){
		if(err){
			throw err;
		};
		console.log('Done pyProcess');
	});
}


function fileHandler(event){
	console.log("Handling File");
}

//TODO:
function validateFormOnSubmite(){
	console.log("validating form o submit");
	return true;
}