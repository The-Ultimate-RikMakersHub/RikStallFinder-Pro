// Master Local State Variable Arrays System Matrix (Fully Real & Verified Data)
const vendorRegistry = {
    "demo_stall": {
        name: "RikMakersHub Flagship Showcase",
        motto: "Where High-Velocity Coding Meets Hyper-Local Commerce.",
        ambience: "A pristine testing ground running serverless data parameters directly from our bedroom command center. Built with absolute zero operational overhead.",
        phone: "+91 XXXXX XXXXX",
        opsLead: "Rik (CTO & Systems Architect)",
        location: "Prototype Test Zone, Purulia",
        timings: "10:00 AM - 9:00 PM",
        seating: 10,
        trialStarted: new Date().toISOString().split('T')[0], 
        ratings:,
        menu: [
            { name: "Special Egg Chicken Hakka Noodles", desc: "Fresh wok-tossed noodles wrapped in spiced shredded chicken and slow-braised egg ribbons", price: "₹90" },
            { name: "Double Egg Crispy Lachha Roll", desc: "Layered flaky golden paratha wrapped around seasoned red onions and fresh lime extract", price: "₹50" },
            { name: "Pan-Fried Schezwan Chili Dumplings", desc: "Hand-pleated wheat wrappers tossed in a fiery dark soy garlic and chili oil infusion (4 Pcs)", price: "₹80" },
            { name: "Signature Assamese Spiced Ice Tea", desc: "Slow-brewed rich malt ginger black tea leaves cold-served over crushed crystal ice cores", price: "₹25" }
        ]
    },
    "lamaland_momos": {
        name: "Lamaland Momos",
        motto: "Authentic Himalayan Flame — Where Every Bite Ignites.",
        ambience: "A busy, high-volume counter station sitting right on the Raghabpur More intersection. Perfect for quick standing snacks or a 6-person roadside wooden bench layout under bamboo covers.",
        phone: "+91 98321 47650",
        opsLead: "Arghya Lohar (Field Surveyor Group)",
        location: "Raghabpur More Counter",
        timings: "4:00 PM - 9:30 PM",
        seating: 6,
        trialStarted: "2026-06-25",
        ratings:,
        menu: [
            { name: "Steamed Chicken Momos", desc: "Authentic North-East style herb-infused vegetable and fine meat minced wrappers (6 Pcs)", price: "₹60" },
            { name: "Classic Ginger Pork Dumplings", desc: "Traditional slow-steamed ginger root spiced pocket folds served with garlic dipping fluid", price: "₹70" },
            { name: "Fried Schezwan Chili Momos", desc: "Crisp golden fried momos tossed completely in a hot garlic chili glaze coating", price: "₹80" },
            { name: "Special Hot Clear Broth Soup", desc: "Slow-brewed hot black pepper crushed vegetable extract soup served steaming hot", price: "₹20" }
        ]
    }
};

let activeStallId = null;

function bootstrapApp() {
    const urlParams = new URLSearchParams(window.location.search);
    const stallParam = urlParams.get('stall');

    if (!stallParam || !vendorRegistry[stallParam]) {
        activeStallId = "demo_stall";
        document.getElementById('stall-picker').value = "demo_stall";
        const cleanPath = window.location.pathname + '?stall=demo_stall';
        window.history.replaceState({}, '', cleanPath);
    } else {
        activeStallId = stallParam;
        document.getElementById('stall-picker').value = stallParam;
    }
    
    renderDashboard(vendorRegistry[activeStallId]);
}

function switchStallRoute(selectedStallId) {
    if (!selectedStallId) return;

    activeStallId = selectedStallId;
    const newRelativePathQuery = window.location.pathname + '?stall=' + selectedStallId;
    window.history.pushState({}, '', newRelativePathQuery);
    renderDashboard(vendorRegistry[activeStallId]);
}

function renderDashboard(data) {
    // Ingest core text and branding values dynamically
    document.getElementById('vendor-name').innerText = data.name;
    document.getElementById('vendor-motto').innerText = data.motto;
    document.getElementById('vendor-ambience-text').innerText = data.ambience;
    document.getElementById('vendor-phone').innerText = data.phone;
    document.getElementById('vendor-ops').innerText = data.opsLead;
    
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
    if (data.ratings.length === 0) return;
    const total = data.ratings.reduce((sum, current) => sum + current, 0);
    const average = (total / data.ratings.length).toFixed(1);
    
    document.getElementById('avg-rating').innerText = average;

    if (parseFloat(average) < 3.0) {
        document.getElementById('app-screen').innerHTML = `
            <div class="card error-card" style="margin-top:40px; max-width: 500px;">
                <h2>Stall Suspended</h2>
                <p><strong>${data.name}</strong> has been auto-purged from the active registry loop as score dropped to ${average}★.</p>
                <p style="font-size:0.85rem; color:var(--warm-grey);">RikMakersHub Operations team must execute an on-site safety and quality re-survey loop before visibility restoration.</p>
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
    qrNode.src = `https://qrserver.com{encodeURIComponent(activeRouteURL)}&color=1e1208`;
}

function submitRating(val) {
    if (!activeStallId) return;
    vendorRegistry[activeStallId].ratings.push(val);
    renderDashboard(vendorRegistry[activeStallId]);
}

window.onload = bootstrapApp;
