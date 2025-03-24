document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById("calendar");
    const today = new Date();
    let html = "<table class='table table-bordered'><tr>";
    
    for (let i = 0; i < 7; i++) {
        let date = new Date();
        date.setDate(today.getDate() + i);
        let dateStr = date.toISOString().split("T")[0];
        const isPastDate = date < new Date(); // Check if the date is in the past

        html += `<td>
                    <strong>${date.toLocaleDateString()}</strong><br>
                    <button class='btn btn-success' 
                            onclick='requestPresence("${dateStr}")'
                            ${isPastDate ? "disabled" : ""}>
                            Demander Présence
                    </button>
                 </td>`;
    }

    html += "</tr></table>";
    calendar.innerHTML = html;
});

function requestPresence(date) {
    alert(`Demande de présence pour le ${date} envoyée !`);
}
