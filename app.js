/**
 * RikMakersHub PRO — High-Velocity Local Commerce Engine
 * Core Architecture & Logic: 100% Rik Independent Property
 * Integrated Layout Matrix System (Aesthetic Upgrade Mode)
 */

const vendorRegistry = {
    "demo_stall": {
        name: "RikMakersHub Showcase",
        motto: "Where High-Velocity Coding Meets Hyper-Local Commerce.",
        ambience: "A high-performance sandboxed operational engine running live asynchronous parameters straight from our desktop console. Built with zero cloud-computing overhead.",
        phone: "+91 XXXXX XXXXX",
        opsLead: "Rik (CTO & Systems Architect)",
        location: "Prototype Test Zone, Purulia",
        hours: "Mon – Sun: 10:00 AM – 9:00 PM",
        license: "DEVELOPER CORE SECURE",
        ratings: [],
        menu: [
            { name: "Special Egg Chicken Hakka Noodles", desc: "Fresh wok-tossed premium long noodles wrapped in seasoned pulled chicken breast and slow-braised egg ribbons", price: "₹90", category: "mains" },
            { name: "Double Egg Crispy Lachha Roll", desc: "Layered flaky golden paratha wrap loaded with spicy red onions and fresh lime zests", price: "₹50", category: "breakfast" }
        ]
    },
    "lamaland_momos": {
        name: "The LamaLand",
        motto: "Authentic Himalayan Flame — Where Every Bite Ignites.",
        ambience: "A high-traffic, roadside container installation sitting right on the Raghabpur More hub. Perfect for quick on-the-go snacks or casual community seating options.",
        phone: "+91 98321 47650",
        opsLead: "Arghya Lohar (Field Operations Partner)",
        location: "Raghabpur More, Near Hotel N Lake Road, Purulia",
        hours: "Daily: 4:00 PM – 9:30 PM (Special Soup Weekends)",
        license: "FSSAI No. 22823168000053",
        ratings: [],
        menu: [
            { name: "Steam Veg Momo (5 Pcs)", desc: "Fresh minced garden vegetables infused with local herbs wrapped in delicate wheat layers", price: "₹39", category: "breakfast" },
            { name: "Steam Chicken Momo (5 Pcs)", desc: "Tender fine minced lean chicken breast seasoned with scallions and garlic juices", price: "₹49", category: "mains" },
            { name: "Fried Veg Momo (5 Pcs)", desc: "Crisp golden outer crunch layers surrounding high-flavor seasoned vegetable fillings", price: "₹45", category: "breakfast" },
            { name: "Fried Chicken Momo (5 Pcs)", desc: "Deep-fried premium chicken pockets tossed to a crispy textured structure", price: "₹55", category: "mains" },
            { name: "Gondhoraj Veg Momo (5 Pcs)", desc: "Steamed vegetable pockets flavored with aromatic zest of premium local Gondhoraj lime", price: "₹55", category: "breakfast" },
            { name: "Gondhoraj Chicken Momo (5 Pcs)", desc: "Succulent minced chicken pocket folds packing an explosion of fragrant lime extracts", price: "₹65", category: "mains" },
            { name: "Taifu Momo (2 Pcs)", desc: "Large oversized fluffy Tibetan-style steamed specialty buns loaded with rich savory centers", price: "₹55", category: "mains" },
            { name: "Panfried Veg Momo (5 Pcs)", desc: "Pan-seared base crisped momos coated fully in a rich, mild hot chili oil splash", price: "₹55", category: "breakfast" },
            { name: "Panfried Chicken Momo (5 Pcs)", desc: "Crisp skillet-seared chicken dumplings tossed entirely in savory house garlic glazes", price: "₹65", category: "mains" },
            { name: "Moburg (Veg)", desc: "A creative fusion burger packing crisp fried vegetable momos between toasted bun sets", price: "₹69", category: "desserts" },
            { name: "Moburg (Chicken)", desc: "Toasted artisanal burger buns layered with crunch-fried chicken momo cores and signature sauces", price: "₹75", category: "desserts" },
            { name: "Lamaland Spl Soup (Sat & Sun)", desc: "Exquisite slow-brewed hot spiced black pepper marrow and clear herb broth extract", price: "₹49", category: "drinks" }
        ]
    }
};

let activeStallId = "demo_stall";
let currentTabFilter = "all";

function bootstrapApp() {
    const urlParams = new URLSearchParams(window.location.search);
    const stallParam = urlParams.get('stall');

    injectDropdownControls();

    if (stallParam && vendorRegistry[stallParam]) {
        activeStallId = stallParam;
    } else {
        activeStallId = "demo_stall";
        updateURLQuery("demo_stall");
    }

    document.getElementById('stall-picker').value = activeStallId;
    renderDashboard(vendorRegistry[activeStallId]);
}

function injectDropdownControls() {
    const picker = document.getElementById('stall-picker');
    if (!picker) return;
    picker.innerHTML = "";
    
    Object.keys(vendorRegistry).forEach(key => {
        let opt = document.createElement('option');
        opt.value = key;
        opt.innerText = vendorRegistry[key].name;
        picker.appendChild(opt);
    });
}

function switchStallRoute(selectedStallId) {
    if (!selectedStallId || !vendorRegistry[selectedStallId]) return;
    activeStallId = selectedStallId;
    updateURLQuery(selectedStallId);
    renderDashboard(vendorRegistry[activeStallId]);
}

function updateURLQuery(id) {
    const cleanPath = window.location.pathname + '?stall=' + id;
    window.history.pushState({}, '', cleanPath);
}

function renderDashboard(data) {
    document.getElementById('vendor-name-display').innerText = data.name;
    document.getElementById('vendor-motto-display').innerText = data.motto;
    document.getElementById('vendor-ambiance-text').innerText = data.ambience;
    
    // Address & Metadata Injections
    document.getElementById('vd-location-text').innerHTML = `${data.location}<br><span style="font-size:0.8rem;color:var(--warm-grey)">Operations: ${data.opsLead}</span>`;
    document.getElementById('vd-hours-text').innerHTML = data.hours;
    document.getElementById('vd-contact-text').innerHTML = `${data.phone}<br><span class="badge-hygiene">${data.license}</span>`;

    calculateRating(data);
    generateLiveQR();
    filterMenu(currentTabFilter, document.querySelector(`.tab-btn[onclick*="'${currentTabFilter}'"]`) || null);
}

function filterMenu(category, buttonElement) {
    currentTabFilter = category;
    
    if (buttonElement) {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        buttonElement.classList.add('active');
    }

    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;
    menuGrid.innerHTML = "";

    const activeMenu = vendorRegistry[activeStallId].menu;
    const filteredItems = category === 'all' ? activeMenu : activeMenu.filter(item => item.category === category);

    if (filteredItems.length === 0) {
        menuGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:var(--warm-grey); padding:40px 0;">No active verified options in this field tier today.</p>`;
        return;
    }

    filteredItems.forEach(item => {
        const itemMarkup = `
            <div class="menu-item-card">
                <div class="mic-details">
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                </div>
                <div class="mic-price">${item.price}</div>
            </div>
        `;
        menuGrid.innerHTML += itemMarkup;
    });
}

function calculateRating(data) {
    const scoreNode = document.getElementById('avg-rating-display');
    if (!scoreNode) return;

    if (data.ratings.length === 0) {
        scoreNode.innerText = "0.0";
        return;
    }

    const total = data.ratings.reduce((sum, current) => sum + current, 0);
    const average = (total / data.ratings.length).toFixed(1);
    scoreNode.innerText = average;

    if (parseFloat(average) < 3.0) {
        document.getElementById('menu-grid').innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding: 60px 20px; border:1px dashed var(--ember); background:rgba(255,107,0,0.02)">
                <h3 style="color:var(--ember); font-family:'Playfair Display', serif; font-size:1.8rem; margin-bottom:10px;">Registry Clearance Required</h3>
                <p style="color:var(--cream); font-size:0.9rem;">This field location has been hidden from active data loops as public score dropped to ${average}★.</p>
            </div>
        `;
    }
}

function submitLiveFieldReport(ratingScore) {
    if (!vendorRegistry[activeStallId]) return;
    vendorRegistry[activeStallId].ratings.push(ratingScore);
    renderDashboard(vendorRegistry[activeStallId]);
}

function generateLiveQR() {
    const qrImageNode = document.getElementById('dynamic-qr-target');
    if (!qrImageNode) return;
    const currentURL = window.location.href;
    qrImageNode.src = `https://qrserver.com{encodeURIComponent(currentURL)}&color=1e1208`;
}

window.onload = bootstrapApp;
