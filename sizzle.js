/**
 * RikMakersHub PRO — High-Velocity Local Commerce Engine
 * Sizzle Standalone Override Controller Pipeline Engine Module
 * Operational Node Patch: 100% Rik Independent Property
 */

const vendorRegistry = {
    "lamaland_momos": {
        name: "The LamaLand",
        motto: "Authentic Himalayan Flame — Where Every Bite Ignites.",
        ambience: "A high-traffic counter installation sitting right on North Lake Road. Perfect for quick standing snacks or casual community seating options under classic bamboo structures.",
        phone: "+91 98321 47650",
        opsLead: "Arghya Lohar (Field Surveyor Group)",
        location: "North Lake Road Near District Stadium, Purulia",
        hours: "Daily: 4:00 PM – 9:30 PM (Special Soup Weekends)",
        license: "FSSAI Lic. 22823168000053",
        trialStarted: "2026-06-25", // Hardlocked baseline to calculate the active 7 days trial
        ratings: [],
        menu: [
            { name: "Steam Veg Momo (5 PIC)", desc: "Fresh garden vegetable mince seasoned with premium mountain herbs wrapped in thin wheat envelopes", price: "₹39", category: "breakfast" },
            { name: "Steam Chicken Momo (5 PIC)", desc: "Fine minced lean chicken breast meat tossed with green scallions and clear garlic stock", price: "₹49", category: "mains" },
            { name: "Fried Veg Momo (5 PIC)", desc: "Crisp skillet golden deep fried vegetable momos served with spicy home chili paste oil", price: "₹45", category: "breakfast" },
            { name: "Fried Chicken Momo (5 PIC)", desc: "Crunchy textured deep fried chicken dumplings packing heavy local spices and juices", price: "₹55", category: "mains" },
            { name: "Gondhoraj Veg Momo (5 PIC)", desc: "Steamed vegetable pocket folds carrying an exquisite fragrance of local Gondhoraj lime leaf extracts", price: "₹55", category: "breakfast" },
            { name: "Gondhoraj Chicken Momo (5 PIC)", desc: "Succulent minced chicken breast packing an explosive aromatic kick of native Gondhoraj lime juice", price: "₹65", category: "mains" },
            { name: "Taifu Momo (2 PIC)", desc: "Traditional oversized fluffy Tibetan-style steamed bun pockets filled with highly seasoned centers", price: "₹55", category: "mains" },
            { name: "Panfried Veg Momo (5 PIC)", desc: "Skillet seared base pan-fried vegetable momos glazed fully in hot dark chili soy infusions", price: "₹55", category: "breakfast" },
            { name: "Panfried Chicken Momo (5 PIC)", desc: "Pan-crisped bottom chicken momos tossed intensely in a fiery Schezwan sweet and sour chili sauce", price: "₹65", category: "mains" },
            { name: "Moburg (Veg)", desc: "Experimental fusion burger loaded with a crisp deep fried vegetable momo core and signature dressings", price: "₹69", category: "desserts" },
            { name: "Moburg (Chicken)", desc: "Toasted artisanal buns containing an ultra-crisp chicken momo center with spicy mayonnaise layers", price: "₹75", category: "desserts" },
            { name: "Lamaland Spl Soup (SAT & SUN)", desc: "Exclusive weekend slow-brewed rich marrow and clear black pepper herb extract broth served steaming hot", price: "₹49", category: "drinks" }
        ]
    }
};

let activeStallId = "lamaland_momos";
let currentTabFilter = "all";

function bootstrapApp() {
    const picker = document.getElementById('stall-picker');
    if (picker) {
        picker.innerHTML = `<option value="lamaland_momos">The LamaLand (North Lake Road)</option>`;
        picker.value = activeStallId;
    }
    renderActiveDashboard(vendorRegistry[activeStallId]);
}

function renderActiveDashboard(data) {
    if (!data) return;

    document.getElementById('vendor-name-node').innerText = data.name;
    document.getElementById('vendor-motto-node').innerText = data.motto;
    document.getElementById('vendor-ambience-node').innerText = data.ambience;
    
    document.getElementById('vd-location-pane').innerHTML = `${data.location}<br><span style="font-size:0.8rem;color:var(--warm-grey)">Verification Lead: ${data.opsLead}</span>`;
    document.getElementById('vd-hours-pane').innerHTML = data.hours;
    document.getElementById('vd-credentials-pane').innerHTML = `${data.phone}<br><span class="badge-fssai-layer">${data.license}</span>`;

    calculateLiveAuditScore(data);
    calculateTrialMetric(data.trialStarted);
    triggerLiveQRGenerator();
    filterMenu(currentTabFilter, document.querySelector(`.tab-btn[onclick*="'${currentTabFilter}'"]`) || null);
}

function calculateTrialMetric(startDateString) {
    const start = new Date(startDateString);
    const current = new Date();
    const diffTime = Math.abs(current - start);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const daysLeft = 7 - diffDays;

    const daysTextNode = document.getElementById('trial-days-left-text');
    const barFillNode = document.getElementById('trial-progress-bar-fill');
    
    if (daysLeft <= 0) {
        if (daysTextNode) daysTextNode.innerHTML = `<span style="color:#4ade80; font-weight:800;">🔒 Trial Ended. ₹250 Subscription Due.</span>`;
        if (barFillNode) barFillNode.style.width = "0%";
    } else {
        if (daysTextNode) daysTextNode.innerText = `${daysLeft} days remaining`;
        const percentage = ((daysLeft / 7) * 100).toFixed(0);
        if (barFillNode) barFillNode.style.width = `${percentage}%`;
    }
}

function filterMenu(category, triggerButton) {
    currentTabFilter = category;
    if (triggerButton) {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        triggerButton.classList.add('active');
    }

    const clusterNode = document.getElementById('menu-grid');
    if (!clusterNode) return;
    clusterNode.innerHTML = "";

    const fullMenuArray = vendorRegistry[activeStallId].menu;
    const filteredArray = category === 'all' ? fullMenuArray : fullMenuArray.filter(i => i.category === category);

    filteredArray.forEach(item => {
        const structuralMarkup = `
            <div class="menu-item-card">
                <div class="mic-info">
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                </div>
                <div class="mic-pricing-tag">${item.price}</div>
            </div>
        `;
        clusterNode.innerHTML += structuralMarkup;
    });
}

function calculateLiveAuditScore(data) {
    const dashboardRatingField = document.getElementById('avg-rating-value');
    if (!dashboardRatingField) return;

    if (data.ratings.length === 0) {
        dashboardRatingField.innerText = "0.0";
        return;
    }

    const totalSum = data.ratings.reduce((accumulator, current) => accumulator + current, 0);
    const scoreAverage = (totalSum / data.ratings.length).toFixed(1);
    dashboardRatingField.innerText = scoreAverage;
}

function pushVerificationReport(scoreInput) {
    if (!vendorRegistry[activeStallId]) return;
    vendorRegistry[activeStallId].ratings.push(scoreInput);
    renderActiveDashboard(vendorRegistry[activeStallId]);
}

function triggerLiveQRGenerator() {
    const imageTargetNode = document.getElementById('telemetry-qr-element');
    if (!imageTargetNode) return;
    imageTargetNode.src = `https://qrserver.com{encodeURIComponent(window.location.href)}&color=1e1208`;
}

window.onload = bootstrapApp;
