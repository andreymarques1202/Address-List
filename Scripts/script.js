function color() {
    document.getElementById("save").style.backgroundColor = "#a72323"
    document.getElementById("save").addEventListener("mouseout", color1)
    function color1() {
        document.getElementById("save").style.backgroundColor = "#9251f7"
        setTimeout(()=> {document.getElementById("save").style.backgroundColor = "transparent"},1000)
    }
}