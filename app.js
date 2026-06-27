/**
 * RikMakersHub PRO — High-Velocity Local Commerce Engine
 * Core Master State System Controller Pipeline Layer Architecture
 * Clean Drop-In Stability Patch Module (100% Rik Proprietary Property)
 */

const vendorRegistry = {
    "demo_stall": {
        name: "RikMakersHub Sandbox Showcase",
        motto: "Where High-Velocity Coding Meets Hyper-Local Commerce.",
        ambience: "A pristine testing ground running serverless data parameters directly from our master repository panel. Engineered with absolute zero backend server maintenance overhead.",
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
        ambience: "A high-traffic, roadside container installation running right along North Lake Road. Perfectly configured for quick standing street side snacks or a casual 6-person wooden layout table under clean bamboo setups near the Prestigious Saheb Bandh.",
        phone: "+91 98321 47650",
        opsLead: "Arghya Lohar (Field Operations Surveyor)",
        location: "North Lake Road Near Saheb Bandh, Purulia",
        hours: "Daily: 4:00 PM – 9:30 PM (Special Soups on Weekends)",
        license: "FSSAI Lic. 22823168000053",
        ratings: [],
        menu: [
            { name: "Steam Veg Momo (5 Pcs)", desc: "Fresh garden vegetable mince seasoned with premium mountain herbs wrapped in thin wheat envelopes", price: "₹39", category: "breakfast" },
            { name: "Steam Chicken Momo (5 Pcs)", desc: "Fine minced lean chicken breast meat tossed with green scallions and clear garlic stock", price: "₹49", category: "mains" },
            { name: "Fried Veg Momo (5 Pcs)", desc: "Crisp skillet golden deep fried vegetable momos served with spicy home chili paste oil", price: "₹45", category: "breakfast" },
            { name: "Fried Chicken Momo (5 Pcs)", desc: "Crunchy textured deep fried chicken dumplings packing heavy local spices and juices", price: "₹55", category: "mains" },
            { name: "Gondhoraj Veg Momo (5 Pcs)", desc: "Steamed vegetable pocket folds carrying an exquisite fragrance of local Gondhoraj lime leaf extracts", price: "₹55", category: "breakfast" },
            { name: "Gondhoraj Chicken Momo (5 Pcs)", desc: "Succulent minced chicken breast packing an explosive aromatic kick of native Gondhoraj lime juice", price: "₹65", category: "mains" },
            { name: "Taifu Momo (2 Pcs)", desc: "Traditional oversized fluffy Tibetan-style steamed bun pockets filled with highly seasoned centers", price: "₹55", category: "mains" },
            { name: "Panfried Veg Momo (5 Pcs)", desc: "Skillet seared base pan-fried vegetable momos glazed fully in hot dark chili soy infusions", price: "₹55", category: "breakfast" },
            { name: "Panfried Chicken Momo (5 Pcs)", desc: "Pan-crisped bottom chicken momos tossed intensely in a fiery Schezwan sweet and sour chili sauce", price: "₹65", category: "mains" },
            { name: "Moburg (Veg)", desc: "Experimental fusion burger loaded with a crisp deep fried vegetable momo core and signature dressings", price: "₹69", category: "desserts" },
            { name: "Moburg (Chicken)", desc: "Toasted artisanal buns containing an ultra-crisp chicken momo center with spicy mayonnaise layers", price: "₹75", category: "desserts" },
            { name: "Lamaland Spl Soup (Sat & Sun)", desc: "Exclusive weekend slow-brewed rich marrow and clear black pepper herb extract broth served steaming hot", price: "₹49", category: "drinks" }
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

    document.getElementById('vendor-name-node').innerText = data.name;
    document.getElementById('vendor-motto-node').innerText = data.motto;
    document.getElementById('vendor-ambience-node').innerText = data.ambience;
    
    document.getElementById('vd-location-pane').innerHTML = `${data.location}<br><span style="font-size:0.8rem;color:var(--warm-grey)">Verification Inspector: ${data.opsLead}</span>`;
    document.getElementById('vd-hours-pane').innerHTML = data.hours;
    document.getElementById('vd-credentials-pane').innerHTML = `${data.phone}<br><span class="badge-fssai-layer">${data.license}</span>`;

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
        clusterNode.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:var(--warm-grey); padding:50px 0; font-family:'Inter',sans-serif; font-size:0.9rem;">No dynamic data records mapped in this section today.</p>`;
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
    imageTargetNode.src = `https://qrserver.com{encodeURIComponent(window.location.href)}&color=1e1208`;
}

window.onload = bootstrapApp;
// ==========================================================================
// RIKMAKERSHUB PRO — COMPETITIVE INTELLIGENCE DATA MATRIX BLOCK
// Mapped Strategy: Bottom-of-the-Pyramid Market Disruption Loop
// ==========================================================================
// ==========================================================================
// RIKMAKERSHUB PRO — MASTER COMPETITIVE INTELLIGENCE & MARKET EVAPORATION MATRIX
// Mapped Strategy: Deflationary B2B Capture vs. Predatory & Corporate Layers
// ==========================================================================
const RIKMAKERSHUB_MASTER_INTELLIGENCE = {
    targetTerritory: "Purulia Town Tier-2 Commerce Grid",
    
    // 1. Local Predatory Layer (Cyber Cafés Charging Hyper-Inflated Fees)
    localAgencies: {
        provider: "Regional Cyber Café Outlets",
        monthlyRateINR: 3500,
        deliveredValue: "Static single-page link sheets with zero automation or indexing",
        vulnerability: "Extremely high predatory pricing models. Boxed out by RikMakersHub's 93% cost cut."
    },
    
    // 2. Heavy Corporate Layer (The Delivery Giants Commission Walls)
    corporateAggregators: {
        "zomato": {
            marketShare: "59%",
            model: "Commission-Based (20-30% Cut per Order) + Onboarding Fees",
            vulnerability: "Destroys street food counter margins; completely inaccessible to informal kiosk vendors."
        },
        "swiggy": {
            marketShare: "30%",
            model: "Commission-Based (25% Cut per Order) + Ad Bidding Taxes",
            vulnerability: "Requires high-overhead restaurant setups; alienates the bottom-of-the-pyramid scale volume."
        },
        "yelp": {
            marketShare: "5%",
            model: "Static Advertising Models",
            vulnerability: "Zero local data currency parameters; completely unused by Tier-3 citizens."
        }
    },
    
    // 3. The RikMakersHub PRO Ultimo Execution Moat
    ultimoDisruptorEngine: {
        architecture: "RikMakersHub PRO Core Serverless Stack",
        monthlyRateINR: 249, // Flat fee, 100% merchant margin retention
        netMonthlySavingsVsCafesINR: 3251,
        
        // The Triple-Lock Strategic Weapon
        strategicLeverage: [
            "100% Food Margin Retention (0% commission cuts vs Zomato/Swiggy 25% hits)",
            "Purulia Orphanage Transparency Trust Log (25% revenue routed to local children)",
            "Triple-A Quality Seal Validation Gates (Hygiene, Fresh Circle, 5-Pax Seating Minimum)"
        ]
    },
    
    // 4. Regional Scaling Roadmap Vector
    takeoverCircuit: [
        "Phase I: Purulia Town Core Dominance (North Lake Road / Raghabpur More)",
        "Phase II: Purulia District Satellites (Raghunathpur / Adra Municipal Nodes)",
        "Phase III: External Cross-District Expansion (Bankura Takeover Circuit)"
    ]
};

// System Terminal Verification Hook
console.log(`[RikMakersHub Engine] Master Market Evaporation Matrix successfully compiled. Deflationary warfare architecture is active.`);
