function getVideoUrl() {
    var url = document.getElementById("input").value;
    var x = new XMLHttpRequest();
    x.onreadystatechange = function() {
        if (x.readyState == XMLHttpRequest.DONE) {
           getUrl(x.responseText, url);
        }
    }
    x.open("GET", url, true);
    x.send();



}

function getUrl(content, url) {
    var pat1 = content.match(/<input type=\"hidden\" name=\"fname\" value=\"(.*?)\"/i)[1];
    var pat2 = content.match(/<input type=\"hidden\" name=\"hash\" value=\"(.*?)\"/i)[1];
    var pat3 = content.match(/<input type=\"hidden\" name=\"id\" value=\"(.*?)\"/i)[1];
    var pat4 = content.match(/<input type=\"submit\" name=\"imhuman\" id=\"btn_download\" class=\"button gray\" value=\"(.*?)\"/i)[1];
    var pat6 = content.match(/<input type=\"hidden\" name=\"referer\" value=\"(.*?)\"/i)[1];
    var pat7 = content.match(/<input type=\"hidden\" name=\"usr_login\" value=\"(.*?)\"/i)[1];
    var postString = "fname=" + pat1 + "&hash=" + pat2 + "&id=" + pat3 + "&imhuman=" + pat4 + "&op=" + "download2" + "&referer=" + pat6 + "&usr_login=" + pat7
    var endx = new XMLHttpRequest();
    endx.onreadystatechange = function() {
        if (endx.readyState == XMLHttpRequest.DONE) {
           var content = endx.responseText;
           var videoUrl = content.match(/file: \"(.*?)"/i)[1];
           window.location.href = videoUrl;
        }
    }
    endx.open("POST", url, true);
    endx.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    endx.send(postString);
}
