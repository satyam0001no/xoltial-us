
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const pdfLink = document.getElementById("pdfDownload");
    const user = localStorage.getItem("paidUser");

    if (user === "true") {
        pdfLink.style.display = "block";
    } else {
        pdfLink.style.display = "none";
    }

    // Simulate payment confirmation
    const payButton = document.getElementById("confirmPayment");
    if (payButton) {
        payButton.addEventListener("click", () => {
            localStorage.setItem("paidUser", "true");
            alert("Payment confirmed!");
            window.location.href = "success.html";
        });
    }
});
