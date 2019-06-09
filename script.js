    var last,temp;
    function loader(){
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            temp = req.responseText;
            last = JSON.parse(req.responseText).data;
            this.show(last);
            }
        };

        req.open("GET", "https://api.jsonbin.io/s/5cfc124958196b429f50ad8d", true);
        req.setRequestHeader("Content-type", "application/json");
        req.setRequestHeader("secret-key", "$2a$10$T4A0vojC9ffvrUo9t9B44euZmspAa3x57VvnkYNHoGrkb8SafuTru");
        req.send();
    }
    function apiCall(){
        let req = new XMLHttpRequest();
        req.open("PUT", "https://api.jsonbin.io/s/5cfc124958196b429f50ad8d", true);
        req.setRequestHeader("Content-type", "application/json");
        req.setRequestHeader("secret-key","$2a$10$T4A0vojC9ffvrUo9t9B44euZmspAa3x57VvnkYNHoGrkb8SafuTru");
        var myObj=temp;
        req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            var resp = JSON.parse(req.responseText);        
            location.reload();
            }
        };
        var jsonObj = JSON.parse(myObj);
        if(document.getElementById('inputData').value !== "")
            jsonObj.data.push(document.getElementById('inputData').value);
        req.send(JSON.stringify(jsonObj));
    }
    function show(data){
        for(var i=0;i<data.length;i++){
            document.getElementById('show').innerHTML += "<span class='card cards'>"+data[i]+"<i class='fas fa-times' onclick='remove(event)'></i></span><br>"
        }
    }
    function remove(e){
        let s = e.target.parentElement.innerText;
        this.last = this.find(this.last,s);
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            console.log(req.responseText);
            }
        };

        req.open("PUT", "https://api.jsonbin.io/s/5cfc124958196b429f50ad8d", true);
        req.setRequestHeader("Content-type", "application/json");
        req.setRequestHeader("secret-key", "$2a$10$T4A0vojC9ffvrUo9t9B44euZmspAa3x57VvnkYNHoGrkb8SafuTru");
        req.send(JSON.stringify({"data":this.last}));
        location.reload();
    }
    function find(array, element) {
        const index = array.indexOf(element);
        array.splice(index, 1);
        return array;
    }
