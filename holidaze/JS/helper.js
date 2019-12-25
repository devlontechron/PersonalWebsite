var thisFName = "";
var thisLName = "";
var thisScore = 0;


function saveName(){
    var thisFName = document.getElementById("fname").value;
    var thisLName = document.getElementById("lname").value;
    
    readTextFile("database/users.json", function(text){
        var data = JSON.parse(text);
        var found = false;
        for (var i = 0; i < data.users.length && !found; i++) {
            if(thisFName == data.users[i].firstName && thisLName==data.users[i].lastName){
                
                thisScore = data.users[i].score;
                alert("User already exists")        
                found=true;
            }
        }
        if(!found){
            data.users.push({"name":thisFName, "score":0});
        }
        window.location = 'main.html';
    });
}


function getTopUsers(){
    readTextFile("database/users.json", function(text){
        var topRank = []; 
        var data = JSON.parse(text);
        for (var i = 0; i < data.users.length; i++) {
            var currScore = data.users[i].score;
            
            var leader = document.createElement('div');
            leader.setAttribute("class", "currLeader");

            var score = document.createElement('p');
            score.setAttribute("class", "score");
            score.appendChild(document.createTextNode(data.users[i].score));

            var name = document.createElement('p');
            name.setAttribute("class", "name");
            name.appendChild(document.createTextNode(data.users[i].name));

            leader.appendChild(score);
            leader.appendChild(name);
            
            document.getElementById("leaders").appendChild(leader);


            // for(var j = 0; j < topRank.length; j++){
            //     if(topRank[j].score > currScore){
            //         topRank[j].put
            //     }else if(topRank[j].score > currScore){
            //         topRank[j-1].put();
            //     }
            // }
        }
    });
}


function getTopPhrases(){
    readTextFile("database/phrases.json", function(text){
        var data = JSON.parse(text);
        var topPhrase = data;
        for (var i = 0; i < data.phrases.length; i++) {
            var newRow = document.createElement("tr");
            var data1 = document.createElement("td");
            data1.appendChild(document.createTextNode(data.phrases[i].phrase));
            var data2 = document.createElement("td");
            data2.appendChild(document.createTextNode(data.phrases[i].count));
            newRow.appendChild(data1);
            newRow.appendChild(data2);
            document.getElementById("phraseTable").appendChild(newRow);
        }

        // for (var i = 0; i < data.phrases.length; i++) {
        //     var currPhase = data.phrases[i].phrase ;
        //     var currPhraseCount = data.phrases[i].count;

        //     for (var j = 0; j < topPhrase.length; j++) {
        //         if(topPhrase[j].count > currPhase){
        //             if(topPhrase.length > j && topPhrase[j+1].score<currPhraseCount){
        //                 topPhrase.put(j, data.phrase[i]);
        //             }
        //         }
        //     }
        // }
    });
}


function loadMainData(){
    var phrases = getTopPhrases();
    var users = getTopUsers();
    
    console.log(phrases);
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
