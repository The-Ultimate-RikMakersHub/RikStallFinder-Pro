function renderDashboard(data) {
    // ... (vendor data rendering)
    const currentURL = window.location.href; //
    const qrImageElement = document.getElementById('dynamic-qr');
    // Generates QR code based on current URL
    qrImageElement.src = `https://qrserver.com{encodeURIComponent(currentURL)}`;
}
// ... rest of the logic

// Master Data Payload Matrix (Add unlimited stalls here)
const vendorRegistry = {
    "sizzle_cafe": {
        name: "Sizzle Cafe",
        location: "Raghabpur More, Purulia",
        timings: "11:00 AM - 10:00 PM",
        seating: 12,
        trialStarted: "2026-06-22", // YYYY-MM-DD
        ratings:,
        menu: [
            { name: "Crispy Chicken Burger", desc: "Fresh toasted buns with house sauce", price: "₹120" },
            { name: "Cheese Grilled Sandwich", desc: "Triple layered mozzarella blend", price: "₹80" },
            { name: "Virgin Mojito", desc: "Fresh mint and crushed ice cooling base", price: "₹60" }
        ]
    },
    "nagaland_momos": {
        name: "Nagaland Momos",
        location: "Raghabpur More Counter",
        timings: "4:00 PM - 9:30 PM",
        seating: 6,
        trialStarted: "2026-06-25",
        ratings:,
        menu: [
            { name: "Steamed Chicken Momos", desc: "Authentic North-East style fillings (6 Pcs)", price: "₹60" },
            { name: "Fried Schezwan Momos", desc: "Tossed in hot spicy garlic chili oil", price: "₹80" },
            { name: "Special Clear Soup", desc: "Slow-brewed hot pepper vegetable broth", price: "₹20" }
        ]
    }
};

// Main Routing State
let activeStallId = null;

function bootstrapApp() {
    // Parse the URL tracking variables
    const urlParams = new URLSearchParams(window.location.search);
    const stallParam = urlParams.get('stall');

    // Default to error screen if route is blank or invalid
    if (!stallParam || !vendorRegistry[stallParam]) {
        document.getElementById('app-screen').classList.add('hidden');
        document.getElementById('error-screen').classList.remove('hidden');
        return;
    }

    activeStallId = stallParam;
    renderDashboard(vendorRegistry[activeStallId]);
}

function renderDashboard(data) {
    // Ingest profile metadata
    document.getElementById('vendor-name').innerText = data.name;
    document.getElementById('vendor-location').innerText = data.location;
    document.getElementById('vendor-time').innerText = data.timings;
    document.getElementById('vendor-seating').innerText = data.seating;

    // Execute Rating calculations
    calculateRating(data);

    // Run Trial Clock Calculations
    calculateTrial(data.trialStarted);

    // Ingest Dynamic Menu Loop
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = ""; // Clear buffer
    
    data.menu.forEach(item => {
        const itemHTML = `
            <div class="menu-item">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                </div>
                <div class="item-price">${item.price}</div>
            </div>
        `;
        menuContainer.innerHTML += itemHTML;
    });
}

function calculateRating(data) {
    const total = data.ratings.reduce((sum, current) => sum + current, 0);
    const average = (total / data.ratings.length).toFixed(1);
    
    const ratingDisplay = document.getElementById('avg-rating');
    ratingDisplay.innerText = average;

    // THE PURGE LIMIT CRITERIA: Automated suspension logic
    if (parseFloat(average) < 3.0) {
        document.getElementById('app-screen').innerHTML = `
            <div class="card error-card" style="margin-top:40px;">
                <h2>Stall Suspended</h2>
                <p><strong>${data.name}</strong> has dropped below the required 3.0⭐ hygiene threshold (${average}⭐).</p>
                <p style="font-size:0.8rem; color:#94a3b8;">RikMakersHub Operations field team has been notified to execute a safety audit loop.</p>
            </div>
        `;
    }
}

function calculateTrial(startDateString) {
    const start = new Date(startDateString);
    const current = new Date(); // Injects system clock
    
    // Determine delta days
    const diffTime = Math.abs(current - start);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const daysLeft = 7 - diffDays;

    const trialBox = document.getElementById('trial-container');
    
    if (daysLeft <= 0) {
        trialBox.innerHTML = `<div class="trial-header" style="color:#4ade80;"><span>💸 Free Trial Expired. ₹100 Monthly Cycle Due.</span></div>`;
        trialBox.classList.remove('hidden');
    } else {
        document.getElementById('trial-days').innerText = `${daysLeft} days left`;
        const percentage = ((daysLeft / 7) * 100).toFixed(0);
        document.getElementById('trial-progress').style.width = `${percentage}%`;
        trialBox.classList.remove('hidden');
    }
}

function submitRating(val) {
    if (!activeStallId) return;
    
    // Inject review payload into RAM matrix array
    vendorRegistry[activeStallId].ratings.push(val);
    
    // Re-trigger visual pipeline calculation
    renderDashboard(vendorRegistry[activeStallId]);
    alert(`Telemetry Verified: Added ${val}⭐ rating to calculation framework.`);
}

// Start application framework on load
window.onload = bootstrapApp;
