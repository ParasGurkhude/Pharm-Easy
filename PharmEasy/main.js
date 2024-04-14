let Products1 = [
    {
        img : "https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0",
        title : "Medicine",
        offer : "UPTO 27% OFF",
        link :"https://pharmeasy.in/online-medicine-order?src=homecard"
    },
    {
        img : "https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0",
        title : "Lab Tests",
        offer : "UPTO 70% OFF",
        link :"https://pharmeasy.in/diagnostics?src=homecard"
    },
    {
        img : "https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0",
        title : "Healthcare",
        offer : "UPTO 60% OFF",
        link :"https://pharmeasy.in/health-care?src=homecard"
    },
    {
        img : "https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0",
        title : "Health Blogs",
        offer : "",
        link :"https://pharmeasy.in/blog/"
    },
    {
        img : "https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0",
        title : "PLUS",
        offer : "SAVE 5% EXTRA",
        link :"https://pharmeasy.in/plus?src=homecard"
    },
    {
        img : "https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0",
        title : "Offers",
        offer : "",
        link :"https://pharmeasy.in/offers?src=homecard"
    },
    {
        img : "https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0",
        title : "Value Store",
        offer : "UPTO 50% OFF",
        link :"https://pharmeasy.in/offers?src=homecard"
    }
]


let Section1 = document.querySelector("#Section1")
let ProductDiv = document.createElement("div")
Section1.append(ProductDiv)

Products1.forEach(function(el){
    let Pdiv = document.createElement("a")
    // Pdiv.href = el.link

    let img = document.createElement('img')
    img.src = el.img

    let title = document.createElement("p")
    title.innerHTML = el.title

    let offer = document.createElement("p")
    offer.innerHTML = el.offer
    offer.className = "Red"

    Pdiv.append(img, title, offer)
    ProductDiv.append(Pdiv)
})


//--------------------------------------------------
let ArrAds = [
    {link: "https://pharmeasy.in/online-medicine-order?src=header", image: "https://cdn01.pharmeasy.in/dam/banner/banner/3820fdf2bc7-25OFFER.jpg"},
    {link: "https://pharmeasy.in/diagnostics/packages/aarogyam-full-body-checkup-with-vitamins-1794", image: "https://cdn01.pharmeasy.in/dam/banner/banner/df4321df50a-211.jpg"},
    {link: "https://pharmeasy.in/health-care/12379", image: "https://cdn01.pharmeasy.in/dam/banner/banner/4d4f7e94057-NewSlipperLaunchHP.jpg"},
    {link: "https://app.flash.co/?utm_source=pharmasy&utm_campaign=pharmasy_Banner", image: "https://cdn01.pharmeasy.in/dam/banner/banner/480aa5499c8-flashhp.jpg"}
]

let scrollcontainer = document.querySelector(".gallery")
let backBtn = document.querySelector(".backBtn")
let nextBtn = document.querySelector(".nextBtn")

ArrAds.forEach((el) => {
    let span = document.createElement("span")
    let A = document.createElement("a")
    // A.href = el.link
    let img = document.createElement("img")
    img.src = el.image
    img.className = "images"

    A.append(img)
    span.append(A)
    scrollcontainer.append(span)

})

scrollcontainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollcontainer.scrollLeft += event.deltaY;
    scrollcontainer.style.scrollBehavior = "auto"
})

nextBtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth"
    scrollcontainer.scrollLeft += 500;
})

backBtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth"
    scrollcontainer.scrollLeft -= 500;
})
// ---------------------------------------------------------

let ArrLab = [
    {image : "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
        link : "https://pharmeasy.in/diagnostics/diag_collection?id=113"},
    {image : "https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1a18d8deac-Vitamins.png?dim=256x0",
        link : "https://pharmeasy.in/diagnostics/diag_collection/?id=34&title=Vitamins"},
    {image : "https://cms-contents.pharmeasy.in/homepage_top_categories_images/1e927857c26-Diabetes.png?dim=256x0",
        link : "https://pharmeasy.in/diagnostics/diag_collection/?id=46&title=Diabetes"},
    {image : "https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1c60c444bf-Fever.png?dim=256x0",
        link : "https://pharmeasy.in/diagnostics/diag_collection?id=62"},
    {image : "https://cms-contents.pharmeasy.in/homepage_top_categories_images/7b238cdbb60-womencare.png?dim=256x0",
        link : "https://pharmeasy.in/diagnostics/diag_collection/?id=49&title=Women%20Care"},
    {image : "https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=256x0",
        link : "https://pharmeasy.in/diagnostics/diag_collection?id=48&title=Thyroid"},
    {image : "https://cms-contents.pharmeasy.in/homepage_top_categories_images/cd9606a9173-efr.png?dim=256x0",
        link : "https://pharmeasy.in/diagnostics/diag_collection/?id=110&title=Covid%20Care"},
    {image : "https://cms-contents.pharmeasy.in/homepage_top_categories_images/bca113a1b80-Bone.png?dim=256x0",
        link : "https://pharmeasy.in/diagnostics/diag_collection/?id=31&title=Bone%20Health"},
    {image : "https://cms-contents.pharmeasy.in/homepage_top_categories_images/520acd31898-heart.png?dim=256x0",
        link : "https://pharmeasy.in/diagnostics/diag_collection?id=37"},
    {image : "https://cms-contents.pharmeasy.in/homepage_top_categories_images/9696ef00b0a-lifestyle.png?dim=256x0",
        link : "https://pharmeasy.in/diagnostics/diag_collection?id=83"}
]

let LabTests = document.querySelector("#LabTests")
let BackBtn = document.querySelector("#backBtn")
let NextBtn = document.querySelector("#nextBtn")


ArrLab.forEach(el => {
    let TestBox = document.createElement("div")

    let link = document.createElement("a")
    // link.href = el.link
    let poster = document.createElement("img")
    poster.src = el.image
    poster.className = "poster"

    link.append(poster)
    TestBox.append(link)
    LabTests.append(TestBox)

})



LabTests.addEventListener("wheel", (event) => {
    event.preventDefault();
    LabTests.scrollLeft += event.deltaY;
    LabTests.style.scrollBehavior = "auto"
})

NextBtn.addEventListener("click", () => {
    LabTests.style.scrollBehavior = "smooth"
    LabTests.scrollLeft += 500;
})
BackBtn.addEventListener("click", () => {
    LabTests.style.scrollBehavior = "smooth"
    LabTests.scrollLeft -= 500;
})
// -----------------------------------------------------------

let box1 = document.querySelector("#A")

    let Img = document.createElement('img')
    Img.src = "https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0"
    Img.style.width = "100px"
    box1.append(Img)
    let Box = document.createElement('div')

    let h4 = document.createElement('h4')
    h4.innerHTML = "Order with Prescription"

    let p = document.createElement('p')
    p.innerHTML = "Upload prescription and we will<br> deliver your medicines"
    p.style.cssText = `font-size: small; margin-top:-10px`

    let btn = document.createElement('button')
    btn.innerText = "🔗 Upload"

    Box.append(h4, p, btn)
    box1.append(Img,Box)

let box2 = document.querySelector("#B")
let pB = document.createElement("P")
pB.style.marginLeft = "30px"
pB.innerHTML="<b>How does this work?</b>"

let div1 = document.createElement('div')
div1.id = "Div1"

let N1 = document.createElement('div')
N1.innerHTML = "<div>1</div> Upload a photo of your prescription"
let N2 = document.createElement("div")
N2.innerHTML = "<div>2</div> We will call you to confirm the medicines"
let N3 = document.createElement("div")
N3.innerHTML = "<div>3</div> Add delivery address and place the order"
let N4 = document.createElement("div")
N4.innerHTML = "<div>4</div> Now, sit back! your medicines will get delivered at your doorstep"


div1.append(N1,N2,N3,N4)
box2.append(pB, div1)

// ---------------------------------------------------------------------

let ProductA = [
    {
        image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png?f=png?dim=256x0",
        title: "Top products",
        link: "https://pharmeasy.in/health-care/9297"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/fa936f30b4563fc4abd187fb22fe5258.png?f=png?dim=256x0",
        title: "Elderly care",
        link: "https://pharmeasy.in/health-care/750"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1e622b0308ec3ab48887512eaa3488a5.png?f=png?dim=256x0",
        title: "Personal care",
        link: "https://pharmeasy.in/health-care/877"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cc9a28ea4513009966cae794114eefd.png?f=png?dim=256x0",
        title: "Healthcare devices",
        link: "https://pharmeasy.in/health-care/717"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/335dae76832d370c94f0440f5ba89e1f.png?f=png?dim=256x0",
        title: "Health food and drinks",
        link: "https://pharmeasy.in/health-care/648"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ce48d6d71ace3892945f0b0a64c1f0e9.png?f=png?dim=256x0",
        title: "Skin care",
        link: "https://pharmeasy.in/health-care/93"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/11315fee93053980af48fd871bf687b8.png?f=png?dim=256x0",
        title: "Mother and baby care",
        link: "https://pharmeasy.in/health-care/838"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/4405b7900b0b34fcb5c8572aae9d4b2e.png?f=png?dim=256x0",
        title: "Accessories & wearables",
        link: "https://pharmeasy.in/health-care/788"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/514d0d7d01a63502b4ebfec9ae26f4d2.png?f=png?dim=256x0",
        title: "Fitness supplements",
        link: "https://pharmeasy.in/health-care/623"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png?dim=256x0",
        title: "Ayurvedic care",
        link: "https://pharmeasy.in/health-care/765"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/af7a9b53ad1239659615c6895b0972d7.png?f=png?dim=256x0",
        title: "Sexual wellness",
        link: "https://pharmeasy.in/health-care/575"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/105ceca515ee30509f93309ae75306aa.png?f=png?dim=256x0",
        title: "Diabetic care",
        link: "https://pharmeasy.in/health-care/145"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/35d6d4e00e5d3058906cfa8b92ca799c.png?f=png?dim=256x0",
        title: "Health condition",
        link: "https://pharmeasy.in/health-care/693"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=256x0",
        title: "Home care",
        link: "https://pharmeasy.in/health-care/734"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ef15f03b682d37c994eb978d6c85c455.png?f=png?dim=256x0",
        title: "Trending products",
        link: "https://pharmeasy.in/health-care/10827"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/2e58770425cc39a983d6d71fb0cc07e2.png?f=png?dim=256x0",
        title: "Surgicals and dressings",
        link: "https://pharmeasy.in/health-care/599"
    }
]

let ProductB = [
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/Q84402/abzorb-total-skin-relief-dusting-powder-20-extra-bottle-of-120gm-2-1712152617.jpg?dim=1440x0",
        title: "Abzorb Total Skin Relief Dusting Powder",
        price: "MRP ₹160.00",
        offer: "₹150.40 (6%)",
        link: "https://pharmeasy.in/health-care/products/abzorb-total-skin-relief-dusting-powder-20-extra-bottle-of-120gm-4151486?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/L91519/pharmeasy-womens-diabetic-orthopedic-slippers-olive-green-size-uk-8-6.1-1709288073.jpg?dim=1440x0",
        title: "Pharmeasy Women'S Diabetic & Orthopedic",
        price: "MRP ₹1049.00",
        offer: "₹545.48 (48%)",
        link: "https://pharmeasy.in/health-care/products/pharmeasy-women-s-diabetic-orthopedic-slippers--olive-green---size-uk-8-4141021?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/Y46579/baidyanath-nagpur-vita-ex-gold-strength-stamina-for-men-20-capsules-2-1671744946.jpg?dim=1440x0",
        title: "Baidyanath Nagpur Vita Ex Gold - Strength",
        price: "MRP ₹475.00",
        offer: "₹356.25 (25%)",
        link: "https://pharmeasy.in/health-care/products/baidyanath-nagpur-vita-ex-gold---strength-stamina-for-men---20-capsules-3749801?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/U16920/baidyanath-nagpur-ashwagandha-tablet-60-tablets-immunity-and-strength-2-1677243413.jpg?dim=1440x0",
        title: "Baidyanath Nagpur Ashwagandha Tablet -",
        price: "MRP ₹180.00",
        offer: "₹178.20 (1%)",
        link: "https://pharmeasy.in/health-care/products/baidyanath-nagpur-ashwagandha-tablet---60-tablets-immunity-and-strength-3930843?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/F46480/diataal-d-multivitamin-with-vitamin-d-for-heart-health-strong-bones-immunity-health-30-capsules-2-1705912936.jpg?dim=1440x0",
        title: "Diataal-D Multivitamin With Vitamin D For",
        price: "MRP ₹405.00",
        offer: "₹364.50 (10%)",
        link: "https://pharmeasy.in/health-care/products/diataal-d-multivitamin-with-vitamin-d-for-heart-health-strong-bones-immunity-health-30-capsules-4141468?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/M69853/chilrunfull-chocolate-flavour-total-nutrition-to-support-childs-growth-devlopment-box-of-400gm-6.1-1706527777.jpg?dim=1440x0",
        title: "Chilrunfull Chocolate Flavour Total Nutrition...",
        price: "MRP ₹650.00",
        offer: "₹643.50 (1%)",
        link: "https://pharmeasy.in/health-care/products/chilrunfull-chocolate-flavour-total-nutrition-to-support-childs-growth-devlopment-box-of-400gm-4143849?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/H82654/vansaar-45-diab-balance-juice-bottle-of-1-ltr-2-1698925291.jpg?dim=720x0",
        title: "Vansaar 45+ Diab Balance Juice Bottle Of..",
        price: "MRP ₹549.00",
        offer: "₹516.06 (6%)",
        link: "https://pharmeasy.in/health-care/products/vansaar-45-diab-balance-juice-bottle-of-1-ltr-4074356?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/T71975/amrutanjan-stop-itch-anti-fungal-powder-spray-bottle-of-100gm-2-1697103513.jpg?dim=720x0",
        title: "Amrutanjan Stop Itch Anti Fungal Powder...",
        price: "MRP ₹300.00",
        offer: "₹297.00 (1%) ",
        link: "https://pharmeasy.in/health-care/products/amrutanjan-stop-itch-anti-fungal-powder-spray-bottle-of-100gm-4069238?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/K13490/glenmark-elovera-cream-for-protect-nourish-repair-skin-naturally-tube-of-150g-2-1698736770.jpg?dim=720x0",
        title: "Glenmark Elovera Cream For Protect, Nourish &...",
        price: "MRP ₹375.00",
        offer: "₹318.75 (15%)",
        link: "https://pharmeasy.in/health-care/products/glenmark-elovera-cream-for-protect-nourish-repair-skin-naturally-tube-of-150g-3971159?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/O25519/zandu-vigorex-gold-ayurvedic-capsule-for-stamina-energy-and-vitality-strip-of-102-free-capsule-2-1680098601.jpg?dim=720x0",
        title: " Zandu Vigorex Gold Ayurvedic Capsule..",
        price: "MRP ₹255.00",
        offer: "₹234.60 (8%)",
        link: "https://pharmeasy.in/health-care/products/zandu-vigorex-gold-ayurvedic-capsule-for-stamina-energy-and-vitality-strip-of-10-2-free-capsule-3958475?src=ooc-recommendation"
    }
]

let ProductC = [
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1661760061.jpg?dim=1440x0",
        title: "Liveasy Wellness Calcium Magnesium Vitamin D3..",
        price: "MRP ₹599.00",
        offer: "₹347.42 (42%)",
        link: "https://pharmeasy.in/health-care/products/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc---bones-dental-health---bottle-of-60-tablets-235886?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1698385993.jpg?dim=1440x0",
        title: "Everherb Karela Jamun Juice - Helps Maintains..",
        price: "MRP ₹399.00",
        offer: "₹207.48 (48%)",
        link: "https://pharmeasy.in/health-care/products/everherb-karela-jamun-juice---helps-maintains-healthy-sugar-levels--helps-in-weight-management---1l--501050?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/159115/shelcal-500mg-strip-of-15-tablets-2-1679999355.jpg?dim=1440x0",
        title: "Shelcal 500mg Strip Of 15 Tablets",
        price: "MRP ₹144.30",
        offer: "₹126.98 (12%)",
        link: "https://pharmeasy.in/health-care/products/shelcal-500mg-strip-of-15-tablets-9033?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/S04683/evion-400mg-strip-of-20-capsule-2-1683208555.jpg?dim=700x0&dpr=1&q=100",
        title: "Evion 400mg Strip Of 20 Capsule",
        price: "MRP ₹78.98",
        offer: "₹72.66 (8%)",
        link: "https://pharmeasy.in/health-care/products/evion-400mg-strip-of-20-capsule-3110481?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/D52223/liveasy-foods-healthy-roasted-seed-mix-blend-of-6-fibre-rich-healthy-roasted-seeds-200-gms-2-1656420865.jpg?dim=1440x0",
        title: "Liveasy Foods Healthy Roasted Seed Mix...",
        price: "MRP ₹399.00",
        offer: "₹199.50 (50%)",
        link: "https://pharmeasy.in/health-care/products/liveasy-foods-healthy-seed-mix-3515408?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1669655233.jpg?dim=1440x0",
        title: "Dr. Morepen Gluco One Bg 03 Glucometer.",
        price: "MRP ₹849.00",
        offer: "₹602.79 (29%)",
        link: "https://pharmeasy.in/health-care/products/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-172151?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/O80793/pharmeasy-ironfolic-acid-with-zinc-vitamin-c-b12-maintains-overall-health-bottle-of-60-2-1668672053.jpg?dim=1440x0",
        title: "Pharmeasy Iron+Folic Acid With Zinc...",
        price: "MRP ₹599.00",
        offer: "₹299.50 (50%)",
        link: "https://pharmeasy.in/health-care/products/pharmeasy-iron-folic-acid-with-zinc-vitamin-c-b12---maintains-overall-health---bottle-of-60-3864226?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/188996/zincovit-strip-of-15-tablets-green-2-1702990444.jpg?dim=1440x0",
        title: "Zincovit Strip Of 15 Tablets (Green)",
        price: "MRP ₹110.00",
        offer: "₹99.00 (10%)",
        link: "https://pharmeasy.in/health-care/products/zincovit-strip-of-15-tablets-green--3318?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/000665/accu-chek-active-glucometer-test-strips-box-of-50-1-1669655023.jpg?dim=1440x0",
        title: "Accu-Chek Active Glucometer Test Strips Box Of 50",
        price: "MRP ₹1145.00",
        offer: "₹984.70(14%)",
        link: "https://pharmeasy.in/health-care/products/accu-chek-active-glucometer-test-strips-box-of-50-172157?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/192351/i-pill-emergency-contraceptive-pill-2-1672279640.jpg?dim=1440x0",
        title: "I-Pill Emergency Contraceptive Pill",
        price: "MRP ₹110.00",
        offer: " ₹99.00 (10%)",
        link: "https://pharmeasy.in/health-care/products/i-pill-tab-22168?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/I00623/cetaphil-gentle-skin-cleanser-125ml-2-1671740876.jpg?dim=1440x0",
        title: "Cetaphil Gentle Skin Cleanser - 125ml",
        price: "MRP ₹399.00",
        offer: "₹359.10 (10%)",
        link: "https://pharmeasy.in/health-care/products/cetaphil-gentle-skin-cleanser---125ml-11064?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/177755/unwanted-72-strip-of-1-tablet-2-1669655391.jpg?dim=1440x0",
        title: "Unwanted 72 Strip Of 1 Tablet",
        price: "MRP ₹110.00",
        offer: "₹91.30 (17%)",
        link: "https://pharmeasy.in/health-care/products/unwanted-72-strip-of-1-tablet-179163?src=ooc-recommendation"
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/031531/calcimax-500-health-supplement-tablets-500-mg-of-calcium-box-of-30-2-1702961571.jpg?dim=720x0",
        title: "Calcimax 500 Health Supplement...",
        price: "MRP ₹405.00",
        offer: "₹356.40 (12%)",
        link: "https://pharmeasy.in/health-care/products/calcimax-500-health-supplement-tablets-500-mg-of-calcium-box-of-30-38706?src=ooc-recommendation"
    }
]

let Product1 = document.querySelector("#gallery1");
let Product2 = document.querySelector("#gallery2");
let Product3 = document.querySelector("#gallery3");

let L = document.querySelector(".ButtonL")
let R = document.querySelector(".ButtonR")

let L1 = document.querySelector(".ButtonL1")
let R1 = document.querySelector(".ButtonR1")

let L2 = document.querySelector(".ButtonL2")
let R2 = document.querySelector(".ButtonR2")

ProductA.forEach((ele) => {
    let link = document.createElement("a")
    // link.href = ele.link

    let img = document.createElement("img")
    img.src = ele.image;
    img.className = "image"
    let title = document.createElement("p")
    title.innerText = ele.title;

    link.append(img, title)
    Product1.append(link)
})

// Product1.addEventListener("wheel", (event) => {
//     event.preventDefault();
//     Product1.scrollLeft += event.deltaY;
//     Product1.style.scrollBehavior = "auto"
// })

L.addEventListener("click", () => {
    Product1.style.scrollBehavior = "smooth"
    Product1.scrollLeft -= 500;

})
R.addEventListener("click", () => {
    Product1.style.scrollBehavior = "smooth"
    Product1.scrollLeft += 500;

})

ProductB.forEach((ele) => {
    let link = document.createElement("a")
    // link.href = ele.link

    let img = document.createElement("img")
    img.src = ele.image;
    img.className = "image"
    let title = document.createElement("h4")
    title.innerText = ele.title;
    let price = document.createElement("p")
    price.innerText = ele.price
    let offer = document.createElement("h4")
    offer.innerText = ele.offer

    link.append(img, title, price, offer)
    Product2.append(link)
})
// Product2.addEventListener("wheel", (event) => {
//     event.preventDefault();
//     Product2.scrollLeft += event.deltaY;
//     Product2.style.scrollBehavior = "auto"
// })

L1.addEventListener("click", () => {
    Product2.style.scrollBehavior = "smooth"
    Product2.scrollLeft -= 500;
})
R1.addEventListener("click", () => {
    Product2.style.scrollBehavior = "smooth"
    Product2.scrollLeft += 500;
})



ProductC.forEach((ele) => {
    let link = document.createElement("a")
    // link.href = ele.link

    let img = document.createElement("img")
    img.src = ele.image;
    img.className = "image"
    let title = document.createElement("h4")
    title.innerText = ele.title;
    let price = document.createElement("p")
    price.innerText = ele.price
    let offer = document.createElement("h4")
    offer.innerText = ele.offer

    link.append(img, title, price, offer)
    Product3.append(link)
})


// Product3.addEventListener("wheel", (event) => {
//     event.preventDefault();
//     Product3.scrollLeft += event.deltaY;
//     Product3.style.scrollBehavior = "auto"
// })

L2.addEventListener("click", () => {
    Product3.style.scrollBehavior = "smooth"
    Product3.scrollLeft -= 500;
})
R2.addEventListener("click", () => {
    Product3.style.scrollBehavior = "smooth"
    Product3.scrollLeft += 500;
})