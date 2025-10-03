function buscar() {
    const query = document.getElementById("searchBox").value.trim();
    if (query !== "") {
        const url = "https://www.google.com/search?q=" + encodeURIComponent(query + " site:.ar");
        window.open(url, "_blank");
    }
}

// Permitir buscar al presionar Enter
document.getElementById("searchBox").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        buscar();
    }
});
