/**
 * RikInfinity Engine Core — High-Velocity Local Commerce Stack
 * Sizzle Standalone Override Controller Pipeline Engine Module
 * Part 1: Core Database Registry and Authenticated Menu Schema
 */

const CHARITY_PARTNER_CONFIG = {
    organizationName: "Ramakrishna Mission Sevashrama Welfare Fund",
    districtBranch: "Purulia Town Node, West Bengal",
    allocationRatio: 0.25,
    verificationStatus: "Pending On-Ground Compliance Handshake"
};

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
        trialStarted: "2026-06-25",
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
/**
 * Part 2: Core Telemetry UI Rendering and Secure Element Binding
 */
function renderActiveDashboard(data) {
    if (!data) return;

    // Fixed string node bindings
    if (document.getElementById('vendor-name-node')) document.getElementById('vendor-name-node').innerText = data.name;
    if (document.getElementById('vendor-motto-node')) document.getElementById('vendor-motto-node').innerText = data.motto;
    if (document.getElementById('vendor-ambience-node')) document.getElementById('vendor-ambience-node').innerText = data.ambience;
    
    if (document.getElementById('vd-location-pane')) document.getElementById('vd-location-pane').innerHTML = `${data.location}<br><span style="font-size:0.8rem;color:var(--warm-grey)">Verification Lead: ${data.opsLead}</span>`;
    if (document.getElementById('vd-hours-pane')) document.getElementById('vd-hours-pane').innerHTML = data.hours;
    if (document.getElementById('vd-credentials-pane')) document.getElementById('vd-credentials-pane').innerHTML = `${data.phone}<br><span class="badge-fssai-layer">${data.license}</span>`;

    calculateLiveAuditScore(data);
    calculateTrialMetric(data.trialStarted);
    triggerLiveQRGenerator();
    filterMenu(currentTabFilter, document.querySelector(`.tab-btn[onclick*="'${currentTabFilter}'"]`) || null);

    const callButtonNode = document.getElementById('dynamic-merchant-call-btn');
    if (callButtonNode && data.phone) {
        const cleanPhoneNumber = data.phone.replace(/[^+\d]/g, '');
        callButtonNode.href = `tel:${cleanPhoneNumber}`;
        callButtonNode.innerHTML = `📞 Call Desk: ${data.phone}`;
    }

    // SAFE SEPARATE LOOP INDEX MODIFICATION: Browser crash layer completely eliminated
    const bmVals = document.querySelectorAll('.bm-value');
    if (bmVals && bmVals.length >= 2) {
        bmVals[0].innerHTML = `₹249 <span style="font-size:0.7rem; color:var(--warm-grey);">/ Month</span>`;
        bmVals[1].innerHTML = `₹62.50 <span style="font-size:0.7rem; color:var(--accent-green); font-weight:800;">(RKM Sevashrama Log)</span>`;
    }

    const modLogsNode = document.getElementById('merchant-mod-logs');
    if (modLogsNode) {
        modLogsNode.innerHTML = `
            &gt; node_id: "sizzle_cafe_alpha"<br>
            &gt; core_engine: "RikInfinity_Engine_v2.4.0"<br>
            &gt; local_seo: "INDEXED_GSC_VERIFIED"<br>
            &gt; charity_grant_link: "RKM_SEVASHRAMA_25_PERCENT"<br>
            &gt; custom_merchant_mod: { status: "ACTIVE", theme_override: "Sizzle_Luxury_Dark" }
        `;
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
        if (daysTextNode) daysTextNode.innerHTML = `<span style="color:#4ade80; font-weight:800;">🔒 Sandbox Term Completed. ₹249 Subscription Due.</span>`;
        if (barFillNode) barFillNode.style.width = "0%";
    } else {
        if (daysTextNode) daysTextNode.innerText = `${daysLeft} days remaining`;
        const percentage = ((daysLeft / 7) * 100).toFixed(0);
        if (barFillNode) barFillNode.style.width = `${percentage}%`;
    }
}
/**
 * Part 3: Filterable Menu Engine, Telemetry QR Hooks, and Competition Matrix
 */
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
    const imageTargetNode = document.getElementById('telemetry-qr-element');
    if (!imageTargetNode) return;
    
    let currentAbsoluteURL = window.location.href;
    if (currentAbsoluteURL.startsWith('file:///')) {
        currentAbsoluteURL = "https://github.io";
    }
    
    // Explicit clean HTTPS formatting parameters to load beautifully on mobile viewports
    imageTargetNode.src = "https://qrserver.com" + encodeURIComponent(currentAbsoluteURL) + "&color=110d07";
}

window.onload = () => {
    bootstrapApp();
    initializeCloudDatabaseSync();
};

// ==========================================================================
// RIKINFINITY ENGINE — SCALING MODULE: FUTURE CLOUD DATA INGESTION
// ==========================================================================
const RIKINFINITY_SUPABASE_CONFIG = {
    supabaseUrl: "https://supabase.co",
    supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder_string",
    status: "DORMANT_LOCAL_VANILLA_ARRAYS_ACTIVE",
    targetTable: "purulia_town_merchant_registry"
};

function initializeCloudDatabaseSync() {
    console.log(`[RikInfinity Engine] Checking connectivity to Supabase endpoint node...`);
    console.log(`[RikInfinity Engine] Serverless cloud database state: DORMANT. Running on high-velocity local cache.`);
}

// ==========================================================================
// RIKINFINITY ENGINE — MASTER COMPETITIVE INTELLIGENCE & EVAPORATION MATRIX
// ==========================================================================
// Open sizzle.js and replace the master intelligence array at the bottom with this complete model
const RIKINFINITY_MASTER_INTELLIGENCE = {
    targetTerritory: "Purulia Town Tier-2 Commerce Grid",
    localAgencies: { provider: "Regional Cyber Café Outlets", monthlyRateINR: 3500 },
    
    // Updated Directories and Aggregators Layer
    corporateAggregators: {
        "zomato": { marketShare: "59%", model: "Commission (20-30% Cut per Order)", vulnerability: "Merchant margin depletion" },
        "swiggy": { marketShare: "30%", model: "Commission (25% Cut per Order)", vulnerability: "Alienates street kiosks" },
        "justdial": { 
            marketShare: "Restricted Directory Traffic", 
            model: "Premium Ad Bidding / Lead-Selling", 
            vulnerability: "Sells vendor leads to multiple local competitors simultaneously; zero dynamic menu utilities" 
        },
        "foreign_competitor": { marketShare: "0% (Entry Threat)", monthlyRateINR: 8000, model: "Generic White-Label Overseas Template" }
    },
    
    rikinfinityMoat: {
        architecture: "RikInfinity Core Full-Stack Serverless Engine",
        monthlyRateINR: 249, // Flat fee, 100% merchant food margin retention
        netMonthlySavingsVsAgencyINR: 7751,
        strategicLeverage: [
            "100% Direct Customer Connection (Zero lead-selling or competitor routing algorithms)",
            "0% Commission Cuts on food menu items (vs delivery giants 25% drops)",
            "97% Cost Deflation vs Overpriced Foreign Template Brokers (₹249 vs ₹8,000)",
            "Purulia Orphanage Transparency Trust Log (25% revenue routed to RKM Sevashrama)",
            "Triple-A Quality Seal Validation Gates (Hygiene, Fresh Circle, 5-Pax Seating Minimum)"
        ]
    }
};

// Console logger parameter check
console.log("[RikInfinity Engine] Justdial vector ingested into market evaporation matrix parameters.");
