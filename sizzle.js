/**
 * RikMakersHub PRO — High-Velocity Local Commerce Engine
 * Sizzle Standalone Override Controller Pipeline Engine Module
 * Operational Core Data Restoration: Arghya's Authentic Menu Matrix
 */

const vendorRegistry = {
    "sizzle_cafe": {
        name: "Sizzle Cafe",
        motto: "Where every bite ignites a moment worth remembering.",
        ambience: "A luxury, high-end culinary space built around the sound of the perfect sear. Operating an open theater cast-iron kitchen with curated lo-fi acoustics at the Raghabpur More hub.",
        phone: "+91 98321 47650",
        opsLead: "Arghya Lohar (Field Surveyor Group)",
        location: "12 Ember Lane, Raghabpur More, Purulia",
        hours: "Mon – Fri: 7:00 AM – 10:00 PM | Sat – Sun: 8:00 AM – 11:00 PM",
        license: "FSSAI Lic. 22823168000053",
        trialStarted: "2026-06-25", // Hardlocked baseline to calculate the active 7 days trial
        ratings: [],
        menu: [
            { category: 'breakfast', name: 'The Sizzle Stack',    price: '₹349', desc: 'Triple griddle-pressed pancakes, caramelised banana, amber maple drizzle, sea salt butter.',   tag: '🔥 Chef\'s Pick' },
            { category: 'breakfast', name: 'Ember Eggs Benedict', price: '₹299', desc: 'Slow-poached eggs on toasted sourdough, charred prosciutto, smoked paprika hollandaise.',        tag: 'Bestseller' },
            { category: 'breakfast', name: 'Sunrise Açaí Bowl',   price: '₹249', desc: 'Cold-pressed açaí, fresh mango, granola crunch, honey dust, and edible flower.',                 tag: 'Plant-Based' },
            { category: 'mains',     name: 'Cast-Iron Burger',    price: '₹449', desc: 'Double smash patty, aged cheddar, pickled jalapeño, ember-roasted garlic aioli, brioche bun.',   tag: '🔥 Signature' },
            { category: 'mains',     name: 'Sizzle Steak Wrap',   price: '₹399', desc: 'Griddle-seared flank steak, chimichurri, caramelised onion, roasted peppers, warm tortilla.',   tag: '' },
            { category: 'mains',     name: 'Truffle Mushroom Pasta', price: '₹379', desc: 'Hand-rolled tagliatelle, wild mushroom ragu, black truffle shavings, parmesan snow.',          tag: 'Vegetarian' },
            { category: 'drinks',    name: 'Ember Pour-Over',     price: '₹179', desc: 'Single-origin Ethiopian beans, slow-filtered to perfection. Notes of dark chocolate & citrus.', tag: 'Small Batch' },
            { category: 'drinks',    name: 'Spiced Chai Latte',   price: '₹149', desc: 'Masala chai brewed with oat milk, saffron cream top, dusted cinnamon.',                          tag: '' },
            { category: 'drinks',    name: 'Sizzle Cold Brew',    price: '₹199', desc: '18-hour cold-steeped brew, salted caramel ribbon, topped with whipped oat cream.',               tag: 'Iced' },
            { category: 'desserts',  name: 'Lava Choco Cake',     price: '₹259', desc: 'Warm molten chocolate heart, single-origin ganache, vanilla bean ice cream, ember sugar.',       tag: '🔥 Must Try' },
            { category: 'desserts',  name: 'Crème Brûlée',        price: '₹229', desc: 'Classic vanilla custard, torched sugar crust cracked tableside. Simple. Perfect.',               tag: '' },
            { category: 'desserts',  name: 'Mango Saffron Panna Cotta', price: '₹199', desc: 'Silky panna cotta, alphonso mango coulis, candied saffron thread.',                        tag: 'Seasonal' }
        ]
    }
};

let activeStallId = "sizzle_cafe";
let currentTabFilter = "all";

function bootstrapApp() {
    const picker = document.getElementById('stall-picker');
    if (picker) {
        picker.innerHTML = `<option value="sizzle_cafe">Sizzle Cafe (Raghabpur More)</option>`;
        picker.value = activeStallId;
    }
    renderActiveDashboard(vendorRegistry[activeStallId]);
}

function renderActiveDashboard(data) {
    if (!data) return;

    // Direct text injections straight into your HTML landmarks
    document.getElementById('vendor-name-node').innerText = data.name;
    document.getElementById('vendor-motto-node').innerText = data.motto;
    document.getElementById('vendor-ambience-node').innerText = data.ambience;
    
    // Address / Hours / Contact Node Bindings
    document.getElementById('vd-location-pane').innerHTML = `${data.location}<br><span style="font-size:0.8rem;color:var(--warm-grey)">Verification Lead: ${data.opsLead}</span>`;
    document.getElementById('vd-hours-pane').innerHTML = data.hours;
    document.getElementById('vd-credentials-pane').innerHTML = `${data.phone}<br><span class="badge-fssai-layer">${data.license}</span>`;

    calculateLiveAuditScore(data);
    calculateTrialMetric(data.trialStarted);
    triggerLiveQRGenerator();
    filterMenu(currentTabFilter, document.querySelector(`.tab-btn[onclick*="'${currentTabFilter}'"]`) || null);

    // Dynamic dealer dialer routing
    const callButtonNode = document.getElementById('dynamic-merchant-call-btn');
    if (callButtonNode && data.phone) {
        const cleanPhoneNumber = data.phone.replace(/[^+\d]/g, '');
        callButtonNode.href = `tel:${cleanPhoneNumber}`;
        callButtonNode.innerHTML = `📞 Call Desk: ${data.phone}`;
    }
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
        const tagMarkup = item.tag ? `<span class="badge-fssai-layer" style="margin-top:0; margin-bottom:6px; background-color:rgba(255,107,0,0.1); border-color:rgba(255,107,0,0.3); color:var(--amber); font-size:0.6rem;">${item.tag}</span>` : '';
        
        const structuralMarkup = `
            <div class="menu-item-card">
                <div class="mic-info">
                    ${tagMarkup}
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
    // Look for the exact matching ID inside your four-part index layout
    const imageTargetNode = document.getElementById('telemetry-qr-element');
    
    if (!imageTargetNode) {
        console.log("[RikMakersHub Engine] Error: QR Image DOM target node not found.");
        return;
    }
    
    // Fallback logic: If local file path is detected, encode a standard baseline URL parameters string
    let currentAbsoluteURL = window.location.href;
    if (currentAbsoluteURL.startsWith('file:///')) {
        currentAbsoluteURL = "https://the-ultimate-rikmakershub.github.io/RikStallFinder-Pro/sizzle.html"
    }
    
    // Clear, fully structured, secure HTTPS API query parameter string
    const secureQRAPIUrl = "https://qrserver.com" + encodeURIComponent(currentAbsoluteURL) + "&color=1e1208";
    
    // Force the browser source layout to bind instantly
    imageTargetNode.src = secureQRAPIUrl;
    
    console.log("[RikMakersHub Engine] Secure dynamic QR tracking matrix generated successfully.");
}


window.onload = bootstrapApp;

// ==========================================================================
// RIKMAKERSHUB PRO — COMPETITIVE INTELLIGENCE DATA MATRIX BLOCK
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
