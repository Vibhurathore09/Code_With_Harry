function loadScript(src , callback){
    let script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Loaded script src : "+src);
        callback(null , src);
    }
    script.onerror = function(){
        console.log("Error loading script with SRC : "+src);
        callback(new Error("Src got some error"), src)
    }
    document.body.appendChild(script);
}

function hello(error , name ){
    if(error){
        console.log(error);
        return;
    }
    alert("Hello world"+name);
}
function goodMorning(error , name ){
    if(error){
        console.log(error);
        sendEmergencyMessageToCeo();
        return;
    }
    alert("Good Morning"+name);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",goodMorning)