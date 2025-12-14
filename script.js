// Modal Functions
function openModal() {
    document.getElementById("modal").classList.add("active");
}

function closeModal() {
    document.getElementById("modal").classList.remove("active");
}

// Tabs
function switchTab(event, tabId) {
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

    event.target.classList.add("active");
    document.getElementById(tabId).classList.add("active");
}
