	var fs = require('fs'),
		obj

	fs.readFile('task_definition.json', handleFile)

	function handleFile(err, data) {
		if (err) throw err
		obj = JSON.parse(data)
		var environmentVariables = obj.containerDefinitions[0].environment
		var envVars = ""
		for (var key in environmentVariables) {
			envVars += environmentVariables[key].name + '=' + environmentVariables[key].value + ' \n'
		}		
		fs.writeFile(".env", envVars, function(err) {
			if(err) {
				return console.log(err);
			}

			console.log(".env saved");
		}); 
	}
