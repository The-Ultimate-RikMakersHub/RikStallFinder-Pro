// Master Unified Data Matrix Layout Panel
const vendorRegistry = {
    "sizzle_cafe": {
        name: "Sizzle Cafe",
        location: "Raghabpur More, Purulia",
        timings: "11:00 AM - 10:00 PM",
        seating: 12,
        trialStarted: "2026-06-22", 
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
            { name: "Classic Pork Dumplings", desc: "Traditional slow-steamed ginger wrappers", price: "₹70" },
            { name: "Fried Schezwan Momos", desc: "Tossed in hot spicy garlic chili oil", price: "₹80" },
            { name: "Special Hot Clear Soup", desc: "Slow-brewed pepper vegetable broth", price: "₹20" }
        ]
    }
};

let activeStallId = null;

function bootstrapApp() {
    const urlParams = new URLSearchParams(window.location.search);
    const stallParam = urlParams.get('stall');

    if (stallParam && vendorRegistry[stallParam]) {
        activeStallId = stallParam;
        document.getElementById('stall-picker').value = stallParam;
        renderDashboard(vendorRegistry[activeStallId]);
    } else {
        // Handle landing view gracefully without broken metrics or placeholders
        document.getElementById('vendor-name').innerText = "Select a Stall Above...";
        document.getElementById('menu-container').innerHTML = `<p style="color:var(--text-muted); text-align:center; padding: 20px;">Choose a vendor from the dropdown menu to see their active telemetry profile.</p>`;
    }
}

function switchStallRoute(selectedStallId) {
    if (!selectedStallId) {
        window.history.pushState({}, '', window.location.pathname);
        bootstrapApp();
        document.getElementById('dynamic-qr').src = "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='180' height='180' viewBox='0 0 180 180'><rect width='180' height='180' fill='%23ffffff'/><text x='50%25' y='50%25' font-family='sans-serif' font-size='12' fill='%2394a3b8' text-anchor='middle' dominant-baseline='middle'>Select Stall Above</text></svg>";
        return;
    }

    activeStallId = selectedStallId;
    const newRelativePathQuery = window.location.pathname + '?stall=' + selectedStallId;
    window.history.pushState({}, '', newRelativePathQuery);
    renderDashboard(vendorRegistry[activeStallId]);
}

function renderDashboard(data) {
    document.getElementById('vendor-name').innerText = data.name;
    document.getElementById('vendor-location').innerText = data.location;
    document.getElementById('vendor-time').innerText = data.timings;
    document.getElementById('vendor-seating').innerText = data.seating;

    calculateRating(data);
    calculateTrial(data.trialStarted);
    generateQRTarget();

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

function generateQRTarget() {
    const activeRouteURL = window.location.href;
    const qrNode = document.getElementById('dynamic-qr');
    qrNode.src = `https://qrserver.com{encodeURIComponent(activeRouteURL)}&color=0f172a`;
}

function submitRating(val) {
    if (!activeStallId) return;
    vendorRegistry[activeStallId].ratings.push(val);
    renderDashboard(vendorRegistry[activeStallId]);
}

window.onload = bootstrapApp;
