function FileHelper(filename)

{
    FileHelper.readStringFromFileAtPath = function(pathOfFileToReadFrom)
    {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
    }

    var text = FileHelper.readStringFromFileAtPath(filename);
    document.getElementById('t').innerHTML +=text+"<br>";
}

var arr=['game_url.txt','gstar.txt','gdes.txt']

arr.forEach(function(lis){
    FileHelper(lis);
});
