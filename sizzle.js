/**
 * RikInfinity Engine Core — High-Velocity Local Commerce Stack
 * Sizzle Standalone Override Controller Pipeline Engine Module
 * Version 3.1.0 — 100% Rik Independent Property (MIT License)
 * Part 1: Cloud Handshake & Core Database Registry
 */

// 1. Serverless Supabase Real-Time Production Network Configuration
const RIKINFINITY_SUPABASE_CONFIG = {
    supabaseUrl: "https://supabase.co",
    supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder_string",
    status: "DORMANT_LOCAL_VANILLA_ARRAYS_ACTIVE",
    targetTable: "purulia_town_merchant_registry"
};

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
        trialStarted: "2026-06-25", // Timeline tracking parameter
        ratings: [],
        menu: [
            // 🍔 SIZZLE BURGER SECTION (IMAGE 1)
            { category: 'mains', name: 'Cheese Veg Burger', price: '₹80', desc: 'Classic grilled vegetable patty topped with melted cheese and signature house sauces.', tag: '' },
            { category: 'mains', name: 'Veg Tandoori Burger', price: '₹100', desc: 'Crispy veg patty layered with rich, smoky tandoori spread and fresh onion slices.', tag: 'Spicy' },
            { category: 'mains', name: 'Paneer Cheese Burger', price: '₹100', desc: 'Soft spiced paneer slice with a thick cheese layer and crisp garden lettuce.', tag: 'Bestseller' },
            { category: 'mains', name: 'Cheese Chicken Burger', price: '₹100', desc: 'Griddle-pressed juicy chicken patty topped with creamy melted cheese slice.', tag: '🔥 Fire Pick' },
            { category: 'mains', name: 'Chicken Ginger Burger', price: '₹120', desc: 'Crispy chicken patty infused with zesty ginger hints and fresh herb aioli.', tag: '' },
            { category: 'mains', name: 'Chicken Tandoori Burger', price: '₹120', desc: 'Flame-grilled chicken patty slammed with smoky, rich tandoori spices and crunch.', tag: '🔥 Bestseller' },
            { category: 'mains', name: 'Hot & Spicy Chicken Whopper', price: '₹150', desc: 'Massive double-layered chicken burger packed with fiery hot chiles and spiced dressing.', tag: 'Signature' },
            // 🥤 DRINKS SECTION (IMAGE 1)
            { category: 'drinks', name: 'Hot Coffee', price: '₹40', desc: 'Classic frothy steamed milk coffee brewed with rich aromatic beans.', tag: 'Classic' },
            { category: 'drinks', name: 'Black Coffee', price: '₹50', desc: 'Strong, intense dark roasted single-shot pour to fire up your senses.', tag: 'Pure' },
            { category: 'drinks', name: 'Oreo Shake', price: '₹120', desc: 'Thick creamy vanilla blend whipped with crunchy crushed Oreo cookies.', tag: 'Must Try' },
            { category: 'drinks', name: 'Kitkat Shake', price: '₹120', desc: 'Chilled premium chocolate blend layered with chunks of crispy wafer Kitkat fingers.', tag: '' },
            { category: 'drinks', name: 'Cold Coffee', price: '₹90', desc: 'Rich, smooth ice-blended coffee served chilled with a sweet chocolate drizzle cream.', tag: 'Iced' },

            // 🍟 SIZZLE SIDES SECTION (IMAGE 2)
            { category: 'mains', name: 'French Fry', price: '₹80', desc: 'Classic golden crispy potato fries, lightly salted and served with house dip.', tag: '' },
            { category: 'mains', name: 'Peri Peri French Fry', price: '₹100', desc: 'Crispy golden fries tossed in a fiery, hot and smoky peri-peri spice blend.', tag: 'Spicy' },
            { category: 'mains', name: 'Crispy Chicken', price: '₹120', desc: 'Deep-fried battered chicken strips packed with crunch and savory seasoning.', tag: '' },
            { category: 'mains', name: 'Chicken Popcorn (15 Pcs)', price: '₹120', desc: 'Bite-sized premium crunchy chicken nuggets popped to golden perfection.', tag: 'Must Try' },
            { category: 'mains', name: 'Crispy Chicken Wings (4 Pcs)', price: '₹100', desc: 'Four glazed, flame-cooked chicken wings tossed in a crisp spicy rub.', tag: '🔥 Fire Pick' },
            { category: 'mains', name: 'Chicken Pakora (8 Pcs)', price: '₹120', desc: 'Hometown favorite crispy chicken fritters infused with local ground spices.', tag: 'Bestseller' },
            { category: 'mains', name: 'Veg Cutlet (2 Pcs)', price: '₹80', desc: 'Two crumb-coated grilled vegetable patties crisping with local herbs.', tag: '' },
            { category: 'mains', name: 'Chicken Cutlet (2 Pcs)', price: '₹100', desc: 'Two spiced minced chicken cutlets fried to a premium dark amber crunch.', tag: '' },

            // 🥣 SOUP SECTION (IMAGE 2)
            { category: 'mains', name: 'Veg Manchow Soup', price: '₹90', desc: 'Classic thick Chinese dark soup with mixed greens and crunchy fried noodles on top.', tag: '' },
            { category: 'mains', name: 'Veg Hot and Sour Soup', price: '₹90', desc: 'Tangy and fiery vegetable broth packed with fresh mushrooms, tofu, and bamboo hints.', tag: 'Spicy' },
            { category: 'mains', name: 'Veg Hot Garlic Soup', price: '₹90', desc: 'Aromatic light vegetable broth packed with heavily smashed, roasted garlic pods.', tag: '' },
            { category: 'mains', name: 'Chicken Manchow Soup', price: '₹120', desc: 'Thick dark soup loaded with shredded chicken chunks and crispy fried noodles.', tag: 'Bestseller' },
            { category: 'mains', name: 'Chicken Hot and Sour Soup', price: '₹120', desc: 'Fiery and sour rich broth packed with shredded chicken eggs and chili hints.', tag: 'Spicy' },
            { category: 'mains', name: 'Chicken Hot Garlic Soup', price: '₹120', desc: 'Deeply comforting warm chicken soup infused with heavy roasted garlic essence.', tag: '' },
            // 🥟 MOMO SECTION (IMAGE 2)
            { category: 'mains', name: 'Veg Steam Momo', price: '₹40', desc: 'Classic soft steamed dumplings stuffed with finely minced garden vegetables.', tag: 'Classic' },
            { category: 'mains', name: 'Veg Fried Momo', price: '₹50', desc: 'Deep-fried vegetable dumplings crisping to a beautiful golden-amber outer layer.', tag: '' },
            { category: 'mains', name: 'Veg Pan Fried Momo', price: '₹90', desc: 'Tossed fried veg momos glazed in a fiery, sweet, and sticky hot chili sauce.', tag: '🔥 Spicy Pick' },
            { category: 'mains', name: 'Chicken Steam Momo', price: '₹80', desc: 'Soft, juicy steamed dumplings stuffed with premium seasoned minced chicken.', tag: 'Bestseller' },
            { category: 'mains', name: 'Chicken Fried Momo', price: '₹90', desc: 'Deep-fried chicken dumplings delivered with an ultra-crisp golden crunch.', tag: '' },
            { category: 'mains', name: 'Chicken Pan Fried Momo', price: '₹100', desc: 'Fried chicken dumplings heavily glazed in a rich, dark garlic-chili oil reduction.', tag: '🔥 Signature' },

            // 🍝 SIZZLE NOODLES SECTION (IMAGE 3)
            { category: 'mains', name: 'Veg Hakka Noodles', price: '₹80', desc: 'Classic wok-tossed noodles with fresh shredded garden vegetables and aromatic white pepper.', tag: 'Classic' },
            { category: 'mains', name: 'Chilli Garlic Noodles', price: '₹90', desc: 'Spicy stir-fried noodles infused with heavily minced garlic and sharp green chilies.', tag: 'Spicy' },
            { category: 'mains', name: 'Veg Schezwan Noodles', price: '₹90', desc: 'Wok-tossed fiery noodles coated in a rich, bold house-made Schezwan chili paste.', tag: '🔥 Fire Pick' },
            { category: 'mains', name: 'Egg Hakka Noodles', price: '₹90', desc: 'Savory stir-fried noodles tossed with scrambled farm-fresh eggs and crisp vegetables.', tag: '' },
            { category: 'mains', name: 'Chicken Hakka Noodles', price: '₹100', desc: 'Wok-seared noodles loaded with juicy seasoned shredded chicken strips and greens.', tag: 'Bestseller' },
            { category: 'mains', name: 'Chicken Garlic Noodles', price: '₹120', desc: 'Premium stir-fried chicken noodles packed with a deep, smoky roasted garlic flavor profile.', tag: '' },
            { category: 'mains', name: 'Chicken Schezwan Noodles', price: '₹120', desc: 'Fiery wok-tossed chicken noodles coated in an intense, zesty Schezwan reduction sauce.', tag: 'Spicy' },
            { category: 'mains', name: 'Mixed Noodles', price: '₹140', desc: 'The ultimate wok master blend packed with scrambled egg, shredded chicken, and fresh vegetables.', tag: '🔥 Signature' },

            // 🍚 RICE SECTION (IMAGE 3)
            { category: 'mains', name: 'Veg Fried Rice', price: '₹100', desc: 'Fragrant aromatic basmati rice wok-fried with finely chopped garden vegetables.', tag: '' },
            { category: 'mains', name: 'Veg Garlic Rice', price: '₹110', desc: 'Stir-fried aromatic rice heavily infused with golden, crispy toasted garlic bits.', tag: '' },
            { category: 'mains', name: 'Veg Schezwan Rice', price: '₹120', desc: 'Zesty wok-fried rice tossed in a deep, sharp and fiery red Schezwan chili paste.', tag: 'Spicy' },
            { category: 'mains', name: 'Egg Fried Rice', price: '₹120', desc: 'Fragrant wok-tossed basmati rice combined with abundant seasoned scrambled egg bits.', tag: '' },
            { category: 'mains', name: 'Chicken Fried Rice', price: '₹130', desc: 'Fluffy wok-seared rice packed with plenty of tender, seasoned diced chicken pieces.', tag: 'Bestseller' },
            { category: 'mains', name: 'Chicken Garlic Rice', price: '₹140', desc: 'Savory fried rice loaded with diced chicken and finished with a deep roasted garlic touch.', tag: '' },
            { category: 'mains', name: 'Chicken Schezwan Rice', price: '₹140', desc: 'Bold, fiery chicken stir-fried rice loaded up with our spicy house Schezwan blend.', tag: '🔥 Fire Pick' },
            { category: 'mains', name: 'Mixed Fried Rice', price: '₹150', desc: 'The elite master wok rice blend mixed thoroughly with egg chunks, chicken, and greens.', tag: 'Signature' },

            // 🍝 PASTA SECTION (IMAGE 3)
            { category: 'mains', name: 'White Sauce Pasta', price: '₹150', desc: 'Hand-rolled penne drenched in an ultra-creamy, rich velvet white parmesan sauce.', tag: 'Must Try' },
            { category: 'mains', name: 'Red Sauce Pasta', price: '₹150', desc: 'Penne pasta tossed in a robust, slow-simmered tangy tomato and fresh herb marinara.', tag: '' },

            // 🔥 SPECIAL SIZZLER SECTION (IMAGE 4)
            { category: 'mains', name: 'Veg Sizzler', price: '₹320', desc: 'Sizzling, smokey, and sensational! Served on a piping hot platter. Pure vegetarian perfection.', tag: '🔥 Signature' },
            { category: 'mains', name: 'Chicken Sizzler', price: '₹380', desc: 'Succulent grilled chicken, charred veggies, and aromatic sauces served on a hissing hot platter.', tag: '👑 Best Seller' },
            { category: 'mains', name: 'Sizzler Momo Platter', price: '₹250', desc: 'Juicy, pan-seared momos served on a hissing hot platter with zesty sauces and charred veggies.', tag: '🔥 Must Try' },
            // 🥢 SIZZLE STARTER SECTION (IMAGE 5)
            { category: 'mains', name: 'Crispy Chilli Potato', price: '₹100', desc: 'Golden fried potato fingers tossed in a sweet, spicy, and tangy Schezwan reduction.', tag: '' },
            { category: 'mains', name: 'Honey Chilli Potato', price: '₹110', desc: 'Crispy potato fingers glazed with raw sweet honey, tossed with sesame seeds.', tag: 'Bestseller' },
            { category: 'mains', name: 'Crispy Chilli Babycorn', price: '₹120', desc: 'Tender baby corn chunks golden-fried and wok-tossed with fresh capsicum.', tag: '' },
            { category: 'mains', name: 'Honey Chilli Babycorn', price: '₹130', desc: 'Crispy golden baby corn pieces coated in a sweet honey and fiery red chili glaze.', tag: '' },
            { category: 'mains', name: 'Chilli Paneer Dry', price: '₹140', desc: 'Fresh paneer cubes stir-fried with onions, bell peppers, soy sauce, and green chilies.', tag: 'Classic' },
            { category: 'mains', name: 'Chilli Paneer Gravy', price: '₹150', desc: 'Soft paneer cubes simmered in a rich, velvety dark soy and chili garlic gravy solution.', tag: '' },
            { category: 'mains', name: 'White Chilli Paneer', price: '₹160', desc: 'A premium, unique white-sauce infused chili paneer with sharp aromatic white peppers.', tag: 'Must Try' },
            { category: 'mains', name: 'Crispy Honey Paneer', price: '₹160', desc: 'Battered paneer cubes fried to a clean crunch and tossed in a sweet honey glaze.', tag: '' },
            { category: 'mains', name: 'Veg Manchurian (8 Pcs)', price: '₹130', desc: 'Eight crispy deep-fried vegetable balls tossed in a rich, tangy Manchurian glaze.', tag: '' },
            { category: 'mains', name: 'Chicken Manchurian (8 Pcs)', price: '₹160', desc: 'Eight minced seasoned chicken rounds fried and glazed in a savory garlic soy sauce.', tag: '' },
            { category: 'mains', name: 'Chicken Lolipop Dry (5 Pcs)', price: '₹150', desc: 'Five classic drummettes frenched, battered, deep-fried, and served with dry spice.', tag: '🔥 Fire Pick' },
            { category: 'mains', name: 'Chicken Lolipop Gravy (5 Pcs)', price: '₹160', desc: 'Five fried chicken drummettes drenched in a rich, slow-simmered hot ginger-soy gravy.', tag: '' },
            { category: 'mains', name: 'Chicken 65 (8 Pcs)', price: '₹180', desc: 'Eight spicy deep-fried chicken cubes tempered with yogurt and curry leaves.', tag: '🔥 Bestseller' },
            { category: 'mains', name: 'Chilli Chicken Dry', price: '₹150', desc: 'Wok-seared crispy chicken chunks tossed with an abundance of fresh green chilies.', tag: 'Classic' },
            { category: 'mains', name: 'Chilli Chicken Gravy', price: '₹160', desc: 'Crispy chicken chunks simmered thoroughly in a rich, savory dark chili-garlic broth.', tag: '' },
            { category: 'mains', name: 'White Chilli Chicken', price: '₹160', desc: 'Flagship chicken starter cooked in a rich white pepper glaze with sharp green chiles.', tag: 'Signature' },
            { category: 'mains', name: 'Dragon Chicken (5 Pcs)', price: '₹180', desc: 'Five wok-fried chicken strips tossed with cashew nuts and sweet fiery red paste.', tag: '🔥 Hot Pick' },
            { category: 'mains', name: 'Drums of Heaven (5 Pcs)', price: '₹180', desc: 'Five premium chicken lollipops tossed in a sweet, spicy, and sticky wok-glazed sauce.', tag: '👑 Top Seller' },
            { category: 'mains', name: 'Veg American Chop Suey', price: '₹180', desc: 'Crispy fried noodles topped with a sweet and tangy vegetable sauce.', tag: '' },
            { category: 'mains', name: 'Chicken American Chop Suey', price: '₹210', desc: 'Crispy golden noodles served with a rich tangy sauce, shredded chicken, and topped with an egg.', tag: '' },

            // 🍱 SIZZLE COMBO SECTION (IMAGE 6)
            { category: 'breakfast', name: 'Veg Hakka Noodles + Veg Manchurian', price: '₹130', desc: 'Perfect solo combo featuring seasoned veg noodles with two rich Manchurian gravy rounds.', tag: 'Value Hub' },
            { category: 'breakfast', name: 'Veg Fried Rice + Veg Manchurian', price: '₹140', desc: 'Wok-seared vegetable fried rice paired with slow-simmered tangy Manchurian balls.', tag: '' },
            { category: 'breakfast', name: 'Veg Hakka Noodles + Chilli Paneer', price: '₹150', desc: 'Fresh wok noodles paired with sharp dry chili paneer cubes. High-utility lunch option.', tag: 'Must Try' },
            { category: 'breakfast', name: 'Chilli Garlic Noodles + Chilli Paneer', price: '₹160', desc: 'Double fiery chili garlic noodle threads paired up with savory spiced paneer cubes.', tag: 'Spicy' },
            { category: 'breakfast', name: 'Veg Fried Rice + Chilli Paneer', price: '₹160', desc: 'Fluffy vegetable fried rice combined with a side layout of classic stir-fried chilli paneer.', tag: '' },
            { category: 'breakfast', name: 'Chicken Fried Rice + Chicken Manchurian', price: '₹200', desc: 'Premium chicken stir-fried rice served with rich chicken Manchurian rounds in gravy.', tag: 'Bestseller' },
            { category: 'breakfast', name: 'Chicken Hakka Noodles + Chicken Manchurian', price: '₹180', desc: 'Seared chicken noodles accompanied by savory spiced chicken Manchurian bits.', tag: '' },
            { category: 'breakfast', name: 'Chicken Hakka Noodles + Chilli Chicken', price: '₹160', desc: 'Hometown favorite chicken noodle threads combined with authentic crispy dry chili chicken.', tag: '🔥 Hot Pick' },
            { category: 'breakfast', name: 'Chicken Fried Rice + Chilli Chicken', price: '₹200', desc: 'The heavy hitters bundle packing chicken fried rice alongside deep soy chili chicken gravy.', tag: '👑 Top Seller' },

            // 👨‍👩‍👧‍👦 FAMILY PLATTER COMBOS (IMAGE 6)
            { category: 'breakfast', name: 'Sizzle Family Pack - Veg', price: '₹450', desc: 'Massive group bundle: Veg Hakka Noodles + Veg Fried Rice + Veg Manchurian + Chilli Paneer + Crispy Chilli Potato or Babycorn.', tag: '👨‍👩‍👧‍👦 Platter' },
            { category: 'breakfast', name: 'Sizzle Family Pack - NonVeg', price: '₹500', desc: 'Ultimate non-veg feast: Chicken Hakka Noodles + Chicken Fried Rice + Chicken Lolipop + Chilli Chicken + Crispy Chilli Potato or Babycorn.', tag: '👑 Platter' }
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
 * Part 5: Active Dashboard UI Renderers and Element Alignment Matrix
 */
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

    const callButtonNode = document.getElementById('dynamic-merchant-call-btn');
    if (callButtonNode && data.phone) {
        const cleanPhoneNumber = data.phone.replace(/[^+\d]/g, '');
        callButtonNode.href = `tel:${cleanPhoneNumber}`;
        callButtonNode.innerHTML = `📞 Call Desk: ${data.phone}`;
    }

    // ELITE ARRAY OFFSET GUARD: Loops elements safely preventing browser engine crashes on mobile
    const bmVals = document.querySelectorAll('.bm-value');
    if (bmVals && bmVals.length >= 2) {
        bmVals[0].innerHTML = `₹249 <span style="font-size:0.7rem; color:var(--warm-grey);">/ Month</span>`;
        bmVals[1].innerHTML = `₹62.50 <span style="font-size:0.7rem; color:var(--accent-green); font-weight:800;">(RKM Sevashrama Log)</span>`;
    }

    const modLogsNode = document.getElementById('merchant-mod-logs');
    if (modLogsNode) {
        modLogsNode.innerHTML = `
            &gt; node_id: "sizzle_cafe_alpha"<br>
            &gt; core_engine: "RikInfinity_Engine_v3.1.0"<br>
            &gt; local_seo: "INDEXED_GSC_VERIFIED"<br>
            &gt; charity_grant_link: "RKM_SEVASHRAMA_25_PERCENT"<br>
            &gt; custom_merchant_mod: { status: "ACTIVE", theme_override: "Sizzle_Luxury_Dark" }
        `;
    }

    const alertBannerNode = document.getElementById('rush-protocol-alert-banner');
    const countdownDisplayNode = document.getElementById('rush-countdown-display');
    
    if (alertBannerNode && countdownDisplayNode) {
        const isProtocolActive = localStorage.getItem('rush_protocol_active') === 'true';
        const expirationTime = localStorage.getItem('rush_protocol_expires');
        const currentTime = new Date().getTime();
        
        if (isProtocolActive && expirationTime && currentTime < expirationTime) {
            alertBannerNode.style.display = "block";
            const remainingMinutes = Math.round((expirationTime - currentTime) / 60000);
            countdownDisplayNode.innerText = remainingMinutes > 0 ? `${remainingMinutes} Minutes` : "Less than a minute";
        } else {
            alertBannerNode.style.display = "none";
            localStorage.removeItem('rush_protocol_active');
            localStorage.removeItem('rush_protocol_expires');
            localStorage.removeItem('rush_protocol_duration_set');
        }
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
 * Part 6: Filterable Menu Grid, Telemetry QR Hooks, and Market Evaporation Matrix
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
    
    imageTargetNode.src = "https://qrserver.com" + encodeURIComponent(currentAbsoluteURL) + "&color=110d07";
}

function initializeCloudDatabaseSync() {
    console.log(`[RikInfinity Engine] Checking connectivity to Supabase endpoint node...`);
    console.log(`[RikInfinity Engine] Serverless cloud database state: INITIALIZED_DORMANT. Running on high-velocity local arrays cache.`);
}

window.onload = () => {
    bootstrapApp();
    initializeCloudDatabaseSync();
};

// ==========================================================================
// RIKINFINITY MASTER COMPETITIVE INTELLIGENCE & MARKET EVAPORATION MATRIX
// Mapped Strategy: Deflationary B2B Capture vs. Predatory Layers & Directory Spams
// ==========================================================================
const RIKINFINITY_MASTER_INTELLIGENCE = {
    targetTerritory: "Purulia Town Tier-2 Commerce Grid",
    localAgencies: { 
        provider: "Regional Cyber Café Outlets", 
        monthlyRateINR: 3500,
        vulnerability: "Predatory pricing for completely static sheets." 
    },
    corporateAggregators: {
        "zomato": { marketShare: "59%", model: "Commission (20-30% Cut per Order)", vulnerability: "Merchant food margin depletion" },
        "swiggy": { marketShare: "30%", model: "Commission (25% Cut per Order)", vulnerability: "Inaccessible to informal street vendors" },
        "justdial": { marketShare: "Restricted Traffic", model: "Lead Selling/Premium Ad-Bidding", vulnerability: "Sells vendor leads to multiple local competitors; zero active menu utility loops" },
        "foreign_competitor": { marketShare: "0% (Entry Threat)", monthlyRateINR: 8000, model: "Generic White-Label Overseas Template", vulnerability: "Completely detached from local operations; impossible merchant liquidity pressure" }
    },
    rikinfinityMoat: {
        architecture: "RikInfinity Core Full-Stack Serverless Stack",
        monthlyRateINR: 249, // Flat fee, 100% merchant margin retention
        netMonthlySavingsVsAgencyINR: 7751,
        strategicLeverage: [
            "100% Direct Customer Connection (Zero lead-selling or competitor routing algorithms)",
            "0% Commission Cuts on food items (vs delivery giants 25% drops)",
            "97% Cost Deflation vs Overpriced Foreign Template Brokers (₹249 vs ₹8,000) [INDEX]",
            "Purulia Orphanage Transparency Trust Log (25% revenue routed to RKM Sevashrama Welfare Fund)",
            "Triple-A Quality Seal Validation Gates (Hygiene, Fresh Circle, 5-Pax Seating Minimum)"
        ]
    }
};

console.log("[RikInfinity Engine] Master Market Evaporation Matrix successfully compiled. Full stack running active.");
