/**
 * RikMakersHub PRO — High-Velocity Local Commerce Engine
 * Core Architecture & Logic: 100% Rik Independent Property
 * Production Drop-In Stability Patch Module
 */

const vendorRegistry = {
    "demo_stall": {
        name: "RikMakersHub Showcase",
        motto: "Where High-Velocity Coding Meets Hyper-Local Commerce.",
        ambience: "A pristine serverless test pipeline running dynamic array tracking variables directly from our central development board with absolute zero operational overhead.",
        phone: "+91 XXXXX XXXXX",
        opsLead: "Rik (CTO & Systems Architect)",
        location: "Prototype Test Zone, Purulia",
        hours: "Mon – Sun: 10:00 AM – 9:00 PM",
        license: "DEVELOPER SYSTEM CORE SECURE",
        ratings: [],
        menu: [
            { name: "Special Egg Chicken Hakka Noodles", desc: "Fresh wok-tossed long noodles wrapped in spiced shredded chicken and slow-braised egg ribbons", price: "₹90", category: "mains" },
            { name: "Double Egg Crispy Lachha Roll", desc: "Layered flaky golden paratha wrapped around seasoned red onions and fresh lime extract", price: "₹50", category: "breakfast" }
        ]
    },
    "lamaland_momos": {
        name: "The LamaLand",
        motto: "Authentic Himalayan Flame — Where Every Bite Ignites.",
        ambience: "A high-traffic, roadside container installation sitting right on the Raghabpur More intersection. Perfect for quick standing snacks or temporary seating under bamboo structures.",
        phone: "+91 98321 47650",
        opsLead: "Arghya Lohar (Field Surveyor Group)",
        location: "Raghabpur More Counter, Purulia",
        hours: "Daily: 4:00 PM – 9:30 PM (Special Soup Weekends)",
        license: "FSSAI Lic. 22823168000053",
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

let activeStallId = "demo_stall";
let currentTabFilter = "all";

function bootstrapApp() {
    const urlParams = new URLSearchParams(window.location.search);
    const stallParam = urlParams.get('stall');

    syncControlNavigation();

    if (stallParam && vendorRegistry[stallParam]) {
        activeStallId = stallParam;
    } else {
        activeStallId = "demo_stall";
        mutateURLParam("demo_stall");
    }

    const picker = document.getElementById('stall-picker');
    if (picker) picker.value = activeStallId;
    
    renderActiveDashboard(vendorRegistry[activeStallId]);
}

function syncControlNavigation() {
    const selectorNode = document.getElementById('stall-picker');
    if (!selectorNode) return;
    selectorNode.innerHTML = "";
    
    Object.keys(vendorRegistry).forEach(key => {
        let option = document.createElement('option');
        option.value = key;
        option.innerText = vendorRegistry[key].name;
        selectorNode.appendChild(option);
    });
}

function switchStallRoute(selectedId) {
    if (!selectedId || !vendorRegistry[selectedId]) return;
    activeStallId = selectedId;
    mutateURLParam(selectedId);
    renderActiveDashboard(vendorRegistry[activeStallId]);
}

function mutateURLParam(id) {
    const trackingPath = window.location.pathname + '?stall=' + id;
    window.history.pushState({}, '', trackingPath);
}

function renderActiveDashboard(data) {
    if (!data) return;

    // Safe DOM Injection helper function to guard against script crashes
    const safeInject = (id, htmlContent) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = htmlContent;
    };

    const safeInnerText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    };

    // Text & Branding Node Mappings
    safeInnerText('vendor-name-node', data.name || "Loading Node...");
    safeInnerText('vendor-motto-node', data.motto || "");
    safeInnerText('vendor-ambience-node', data.ambience || "");
    
    // Physical Coordinate & Verification Pane Mappings
    const locationHTML = `${data.location || "N/A"}<br><span style="font-size:0.8rem;color:var(--warm-grey)">Verification Lead: ${data.opsLead || "Unassigned"}</span>`;
    safeInject('vd-location-pane', locationHTML);
    safeInject('vd-hours-pane', data.hours || "N/A");
    
    const credsHTML = `${data.phone || "--"}<br><span class="badge-fssai-layer">${data.license || "SECURE LAYER"}</span>`;
    safeInject('vd-credentials-pane', credsHTML);

    // Run underlying telemetry components safely
    calculateLiveAuditScore(data);
    triggerLiveQRGenerator();
    filterMenu(currentTabFilter, document.querySelector(`.tab-btn[onclick*="'${currentTabFilter}'"]`) || null);
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

    const fullMenuArray = vendorRegistry[activeStallId].menu || [];
    const filteredArray = category === 'all' ? fullMenuArray : fullMenuArray.filter(i => i.category === category);

    if (filteredArray.length === 0) {
        clusterNode.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:var(--warm-grey); padding:50px 0; font-family:'Inter',sans-serif; font-size:0.9rem;">No dynamic data records mapped in this segment block.</p>`;
        return;
    }

    filteredArray.forEach(item => {
        const structuralMarkup = `
            <div class="menu-item-card">
                <div class="mic-info">
                    <h4>${item.name}</h4>
                    <p>${item.desc || ""}</p>
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

    if (!data.ratings || data.ratings.length === 0) {
        dashboardRatingField.innerText = "0.0";
        return;
    }

    const totalSum = data.ratings.reduce((accumulator, current) => accumulator + current, 0);
    const scoreAverage = (totalSum / data.ratings.length).toFixed(1);
    dashboardRatingField.innerText = scoreAverage;

    if (parseFloat(scoreAverage) < 3.0) {
        document.getElementById('menu-grid').innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding: 70px 30px; border:2px dashed var(--ember); background:rgba(255,107,0,0.01)">
                <h3 style="color:var(--ember); font-family:'Playfair Display', serif; font-size:2rem; margin-bottom:8px;">Circuit Safety Auto-Purge Triggered</h3>
                <p style="color:var(--cream); font-size:0.95rem;">This merchant field loop has been suspended from our live public database stack. Quality score dropped to ${scoreAverage}★.</p>
            </div>
        `;
    }
}

function pushVerificationReport(scoreInput) {
    if (!vendorRegistry[activeStallId]) return;
    if (!vendorRegistry[activeStallId].ratings) vendorRegistry[activeStallId].ratings = [];
    vendorRegistry[activeStallId].ratings.push(scoreInput);
    renderActiveDashboard(vendorRegistry[activeStallId]);
}

function triggerLiveQRGenerator() {
    const imageTargetNode = document.getElementById('telemetry-qr-element');
    if (!imageTargetNode) return;
    const currentAbsoluteURL = window.location.href;
    imageTargetNode.src = `https://qrserver.com{encodeURIComponent(currentAbsoluteURL)}&color=1e1208`;
}

window.onload = bootstrapApp;
