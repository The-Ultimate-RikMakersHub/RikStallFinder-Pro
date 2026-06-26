// Master Unified Data Matrix Layout Panel
const vendorRegistry = {
    "sizzle_cafe": {
        name: "Sizzle Cafe",
        location: "Raghabpur More, Purulia",
        timings: "11:00 AM - 10:00 PM",
        seating: 12,
        trialStarted: "2026-06-22", // Active System Tracker Timestamp
        ratings:,
        menu: [
            { name: "Crispy Chicken Burger", desc: "Fresh toasted buns with house sauce", price: "₹120" },
            { name: "Cheese Grilled Sandwich", desc: "Triple layered mozzarella blend", price: "₹80" },
            { name: "Virgin Mojito", desc: "Fresh mint and crushed ice cooling base", price: "₹60" }
        ]
    },
        "nagaland_momos": {
        name: "Nagaland Momos",
        location: "north lake road",
        timings: "4:00 PM - 9:30 PM",
        seating: 4,
        trialStarted: "2026-06-25",
        ratings:, // Restored active evaluation seed integers
        menu: [
            { name: "Steamed Chicken Momos", desc: "Authentic North-East style fillings (6 Pcs)", price: "₹30" },
            { name: "Classic chicken Dumplings", desc: "Traditional slow-steamed ginger wrappers", price: "₹35" },
            { name: "Fried Schezwan Momos", desc: "Tossed in hot spicy garlic chili oil", price: "₹50" },
            { name: "Special Hot Clear Soup", desc: "Slow-brewed pepper vegetable broth", price: "₹15" }
        ]
    }

};

let activeStallId = null;

function bootstrapApp() {
    const urlParams = new URLSearchParams(window.location.search);
    const stallParam = urlParams.get('stall');

    // Trigger state safety filter if route parameter is blank
    if (!stallParam || !vendorRegistry[stallParam]) {
        document.getElementById('app-screen').classList.add('hidden');
        document.getElementById('error-screen').classList.remove('hidden');
        return;
    }

    activeStallId = stallParam;
    renderDashboard(vendorRegistry[activeStallId]);
}

function renderDashboard(data) {
    // Inject core elements
    document.getElementById('vendor-name').innerText = data.name;
    document.getElementById('vendor-location').innerText = data.location;
    document.getElementById('vendor-time').innerText = data.timings;
    document.getElementById('vendor-seating').innerText = data.seating;

    // Run active calculus mechanics
    calculateRating(data);
    calculateTrial(data.trialStarted);
    generateQRTarget();

    // Render Menu Loop Array
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = ""; 
    
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
    
    document.getElementById('avg-rating').innerText = average;

    // Automated 3-Star Purge Algorithm Execution Block
    if (parseFloat(average) < 3.0) {
        document.getElementById('app-screen').innerHTML = `
            <div class="card error-card" style="margin-top:40px; max-width: 500px;">
                <h2>Stall Suspended</h2>
                <p><strong>${data.name}</strong> has been auto-purged from the active registry loop as score dropped to ${average}⭐.</p>
                <p style="font-size:0.85rem; color:#94a3b8;">RikMakersHub Operations team must execute an on-site safety and quality re-survey loop before visibility restoration.</p>
            </div>
        `;
    }
}

function calculateTrial(startDateString) {
    const start = new Date(startDateString);
    const current = new Date();
    const diffTime = Math.abs(current - start);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const daysLeft = 7 - diffDays;

    const trialBox = document.getElementById('trial-container');
    
    if (daysLeft <= 0) {
        trialBox.innerHTML = `<div class="trial-header" style="color:#4ade80; font-weight:700;"><span>💸 Trial Cycle Expired. ₹100 Subscription Balance Due.</span></div>`;
        trialBox.classList.remove('hidden');
    } else {
        document.getElementById('trial-days').innerText = `${daysLeft} days left`;
        const percentage = ((daysLeft / 7) * 100).toFixed(0);
        document.getElementById('trial-progress').style.width = `${percentage}%`;
        trialBox.classList.remove('hidden');
    }
}

// AUTOMATED DYNAMIC QR ENGINE LOOP: Generates code targeting the exact parameter viewed
function generateQRTarget() {
    const activeRouteURL = window.location.href;
    const qrNode = document.getElementById('dynamic-qr');
    
    // Links direct payload path straight to the open-source QRServer network tool
    qrNode.src = `https://qrserver.com{encodeURIComponent(activeRouteURL)}&color=0f172a`;
}

function submitRating(val) {
    if (!activeStallId) return;
    vendorRegistry[activeStallId].ratings.push(val);
    renderDashboard(vendorRegistry[activeStallId]);
}

window.onload = bootstrapApp;
