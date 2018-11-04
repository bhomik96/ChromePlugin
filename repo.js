// var games = [];

// games.push("World of Warcraft");
// games.push("Lord of the Rings Online");
// games.push("Aion");
// games.push("Eve Online");
// games.push("Final Fantasy XI");
// games.push("City of Heros");
// games.push("Champions Online");
// games.push("Dark Age of Camelot");
// games.push("Warhammer line");
// games.push("Age of Conan");

// list_=["Music","Games","Entertainment","Security"];
// list_.forEach(function(lis){
//         var gamelist = document.getElementById(lis);
//         var a = document.createElement('a');
//         var linkText = document.createTextNode(game);
//         a.appendChild(linkText);
//         a.title = game;
//         a.href = "https://github.com/TPeterW/Face-Detective";
//         gamelist.appendChild(a);
//         var b = document.createElement("br");
//         gamelist.appendChild(b);
    
// });

//  function openFile(func) {
// 	readFile = function(e) {
// 		var file = e.target.files[0];
// 		if (!file) {
// 			return;
// 		}
// 		var reader = new FileReader();
// 		reader.onload = function(e) {
// 			var contents = e.target.result;
// 			fileInput.func(contents)
// 			document.body.removeChild(fileInput)
// 		}
// 		reader.readAsText(file)
// 	}
// 	fileInput = document.createElement("input")
// 	fileInput.type='file'
// 	fileInput.style.display='none'
// 	fileInput.onchange=readFile
// 	fileInput.func=func
// 	document.body.appendChild(fileInput)
// 	clickElem(fileInput)
// }

// var nodeArray=new Array();  

// function LoadFile() {
//   var oFrame = document.getElementById("frmFile");
//   var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML.replace(/\r/g, '');
//   var arrLines = strRawContents.split("\n");
//   arrLines.forEach(function (line) {
//     nodeArray.push(JSON.parse(line));
//   });
// }

//document.getElementById('someElement').innerHTML = "<p>new content</p>";

