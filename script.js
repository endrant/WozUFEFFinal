
$(document).ready(function(){
    $(".fa").hover(function() {
        $(this).addClass("fachange");
    }, function () {
        $(this).removeClass("fachange");
    });
});

function turnColor(){
    document.getElementById("original").href="style1.css";
    };

function loadRepo() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200 ) {

            results = JSON.parse(this.responseText);
            for(var i = 0; i < results.length; i++) {
                console.log(results[i].name);

                var ul = document.getElementById("repositories");
                var li = document.createElement("LI");
                var a = document.createElement("a");

                li.appendChild(document.createTextNode(results[i].name));

                a.appendChild(li);
                a.setAttribute("class","styled");
                a.setAttribute("href",results[i].html_url);
                ul.appendChild(a);
            }
        }
    }
    xhttp.open("GET","https://api.github.com/users/zfloydbell/repos",true)
    xhttp.send();
};

