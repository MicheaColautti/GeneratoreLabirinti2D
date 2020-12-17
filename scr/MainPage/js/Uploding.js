
    
(function Upload(){        
        function onChange(event) {
            var reader = new FileReader();
            reader.onload = onReaderLoad;
            reader.readAsText(event.target.files[0]);
        }
    
        function onReaderLoad(event){
            console.log(event.target.result);
            var obj = JSON.parse(event.target.result);
            alert_data(obj.mazeShape, obj.pathShape);
        }
        
    function alert_data(mazeShape, pathShape){
        alert('Forma Labirinto : ' + mazeShape + ', Forma percorsi : ' + pathShape);
    }
     
    document.getElementById('file').addEventListener('change', onChange);
    
}());
