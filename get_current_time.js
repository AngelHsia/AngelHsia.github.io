function get_current_time(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    var second = now.getSeconds();
    var time_format = (month+1).toString();
    document.getElementById("current_time").innerHTML = time_format;
}

setInterval(() => {
    get_current_time()
},1000);