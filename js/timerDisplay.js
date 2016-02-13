function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timer').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
    getConcatenatedTime(h, m, s);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function getConcatenatedTime(h, m, s){
    h = h.toString();
    m = m.toString();
    s = s.toString();
    var timeInString = h + m + s;
    document.getElementById('hex').innerHTML = "#"+timeInString;
    document.body.style.backgroundColor = "#"+timeInString;
    var timeInHex = parseInt(timeInString,16);
    getTimeInHex(timeInHex);
};