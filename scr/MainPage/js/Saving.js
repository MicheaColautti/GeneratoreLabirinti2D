

function saveParam(param){
    var saveData = (function () { 
        var a = document.createElement("a"); 
        document.body.appendChild(a); 
        a.style = "display: none"; 
        return function (data, fileName) { 
            var json = JSON.stringify(data), 
                blob = new Blob([json], {type: "octet/stream"}), 
                url = window.URL.createObjectURL(blob); 
            a.href = url; 
            a.download = fileName; 
            a.click(); 
            window.URL.revokeObjectURL(url); 
        }; 
    }()); 
     
    var data = param, 
    fileName = "Parameters.json"; 
     
    saveData(data, fileName); 
}

