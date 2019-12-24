function saveName(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    
    readTextFile("database/users.json", function(text){
        var data = JSON.parse(text);
        var found = false;
        for (var i = 0; i < data.users.length && !found; i++) {
            if(fname == data.users[i].firstName && lname==data.users[i].lastName){
                alert("User already exists")
                window.location = 'main.html';
                found=true;
            }
        }
        if(!found){
            data.users.push({firstName:fname, lastName:lname, score:0});
        }
    });
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function getTopUsers(){
    readTextFile("database/users.json", function(text){
        var topRank = []; 
        var data = JSON.parse(text);
        for (var i = 0; i < data.users.length; i++) {
            var currScore = data.users[i].score;
            for(var j = 0; j < topRank.length; j++){
                if(topRank[j].score > currScore){
                    topRank[j].put
                }else if(topRank[j].score > currScore){
                    topRank[j-1].put();
                }
            }
        }
    });
}


function getTopPhrases(){
    readTextFile("database/phrases.json", function(text){
        var data = JSON.parse(text);
        var topPhrase = []; 
        for (var i = 0; i < data.phrases.length; i++) {
            var currPhase = data.phrases[i].phrase ;
            var currPhraseCount = data.phrases[i].count;

            for (var j = 0; j < topPhrase.length; j++) {
                if(topPhrase[j].count > currPhase){
                    if(topPhrase.length > j && topPhrase[j+1].score<currPhraseCount){
                        topPhrase.put(j, data.phrase[i]);
                    }
                }
            }
        }
    });
}


function loadMainData(){
    var phrases = getTopPhrases();
    var users = getTopUsers();
}