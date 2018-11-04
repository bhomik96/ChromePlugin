function FileHelper()

{
    FileHelper.readStringFromFileAtPath = function(pathOfFileToReadFrom)
    {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
    }

    var text = FileHelper.readStringFromFileAtPath("music.txt");
    document.getElementById('t').innerHTML +=text;

}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('t');
    link.addEventListener('click', function() {
        FileHelper();
    });
    
});







    

