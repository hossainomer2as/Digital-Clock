function localTime() {
    const time = document.getElementById("time");
    const d = new Date();
    const updateTime = d.toLocaleTimeString();
    time.textContent = updateTime;
}
setInterval(localTime, 1000);
localTime();