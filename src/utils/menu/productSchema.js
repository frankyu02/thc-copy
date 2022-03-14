const productSchemaMaker = (product, siteUrl) => {
    const prodUrl = siteUrl + "/products/" + product
    const schema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "image": "https://images.dutchie.com/7ac09c5804bfc4c4eb69c602279ff62c",
        "description": product.description,
        "brand": {
            "@type": "Brand",
            "name": product?.brand?.name
        },
        "sku": "OR GTIN#",
        "category": product.category,
        "offers": {
            "@type": "Offer",
            "url": prodUrl,
            "priceCurrency": "CAD",
            "price": product?.variants[0].priceRec,
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition",
        },
        "additionalType":
            ["http://en.wikipedia.org/wiki/Cannabis_sativa", 
            "https://www.wikidata.org/wiki/Q26726", 
            "https://www.google.com/search?kgmid=/m/03zbj_"],
        "sameas": "strains, strain, sativa, cannabis, indica, effects, thc, plant, plants, marijuana, cbd, haze, terpenes, effect, hybrid, seeds, time, pain, flavor, cannabinoids, weed, diesel, people, hybrids, kush, indoors, buds, growers, content, outdoors, body, anxiety, view, type, taste, genetics, types, experience, sativas"
        [
            {"@type": "thing", "name": "sativa", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_sativa","https://www.google.com/search?q=sativa&kgmid=/m/03zbj_"]},
            {"@type": "thing", "name": "strains", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_strain","https://www.google.com/search?q=strains&kgmid=/m/0hr2vhp"]},
            {"@type": "thing", "name": "indica", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_indica","https://www.google.com/search?q=indica&kgmid=/m/06qst_"]},
            {"@type": "thing", "name": "cannabis", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_sativa","https://www.google.com/search?q=cannabis&kgmid=/m/03zbj_"]},
            {"@type": "thing", "name": "hybrid", "sameAs": ["http://en.wikipedia.org/wiki/Hybrid_(biology)","https://www.google.com/search?q=hybrid&kgmid=/m/0b9r9"]},
            {"@type": "thing", "name": "thc", "sameAs": ["http://en.wikipedia.org/wiki/Tetrahydrocannabinol","https://www.google.com/search?q=thc&kgmid=/m/0gjwh"]},
            {"@type": "thing", "name": "cbd", "sameAs": ["http://en.wikipedia.org/wiki/Cannabidiol","https://www.google.com/search?q=cbd&kgmid=/m/04klcx"]},
            {"@type": "thing", "name": "seeds", "sameAs": ["http://en.wikipedia.org/wiki/Seed","https://www.google.com/search?q=seeds&kgmid=/m/09dh0"]},
            {"@type": "thing", "name": "haze", "sameAs": ["http://en.wikipedia.org/wiki/Haze","https://www.google.com/search?q=haze&kgmid=/m/03xxq7"]},
            {"@type": "thing", "name": "marijuana", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_(drug)","https://www.google.com/search?q=marijuana&kgmid=/m/054yc0"]},
            {"@type": "thing", "name": "buds", "sameAs": ["http://en.wikipedia.org/wiki/Bud","https://www.google.com/search?q=buds&kgmid=/m/0by2r"]},
            {"@type": "thing", "name": "sativa strains", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_sativa","https://www.google.com/search?q=sativa+strains&kgmid=/m/03zbj_"]},
            {"@type": "thing", "name": "terpenes", "sameAs": ["http://en.wikipedia.org/wiki/Terpene","https://www.google.com/search?q=terpenes&kgmid=/m/01fcyh"]},
            {"@type": "thing", "name": "flavor", "sameAs": ["http://en.wikipedia.org/wiki/Flavor","https://www.google.com/search?q=flavor&kgmid=/m/02w08"]},
            {"@type": "thing", "name": "flowering", "sameAs": ["http://en.wikipedia.org/wiki/Flower","https://www.google.com/search?q=flowering&kgmid=/m/0c9ph5"]},
            {"@type": "thing", "name": "weed", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_(drug)","https://www.google.com/search?q=weed&kgmid=/m/054yc0"]},
            {"@type": "thing", "name": "aroma", "sameAs": ["http://en.wikipedia.org/wiki/Odor","https://www.google.com/search?q=aroma&kgmid=/m/01jqkv"]},
            {"@type": "thing", "name": "genetics", "sameAs": ["http://en.wikipedia.org/wiki/Genetics","https://www.google.com/search?q=genetics&kgmid=/m/036_2"]},
            {"@type": "thing", "name": "landrace", "sameAs": ["http://en.wikipedia.org/wiki/Landrace","https://www.google.com/search?q=landrace&kgmid=/m/0415d5"]},
            {"@type": "thing", "name": "sour diesel", "sameAs": ["http://en.wikipedia.org/wiki/Sour_Diesel","https://www.google.com/search?q=sour+diesel&kgmid=/m/0gg9z0v"]},
            {"@type": "thing", "name": "cannabinoids", "sameAs": ["http://en.wikipedia.org/wiki/Cannabinoid","https://www.google.com/search?q=cannabinoids&kgmid=/m/01dyv8"]},
            {"@type": "thing", "name": "strawberry", "sameAs": ["http://en.wikipedia.org/wiki/Strawberry","https://www.google.com/search?q=strawberry&kgmid=/m/07fbm7"]},
            {"@type": "thing", "name": "anxiety", "sameAs": ["http://en.wikipedia.org/wiki/Anxiety","https://www.google.com/search?q=anxiety&kgmid=/m/0k_9"]},
            {"@type": "thing", "name": "citrus", "sameAs": ["http://en.wikipedia.org/wiki/Citrus","https://www.google.com/search?q=citrus&kgmid=/m/0dqb5"]},
            {"@type": "thing", "name": "colas", "sameAs": ["http://en.wikipedia.org/wiki/Cola","https://www.google.com/search?q=colas&kgmid=/m/023ls"]}],
        "mentions":
        [
            {"@type": "thing", "name": "hemp", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis","https://www.google.com/search?q=hemp&kgmid=/m/09k2t"]},
            {"@type": "thing", "name": "cannabis products", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_(drug)","https://www.google.com/search?q=cannabis+products&kgmid=/m/054yc0"]},
            {"@type": "thing", "name": "jack herer", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_strain","https://www.google.com/search?q=jack+herer&kgmid=/m/0hr2vhp"]},
            {"@type": "thing", "name": "skunk", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_strain","https://www.google.com/search?q=skunk&kgmid=/m/0hr2vhp"]},
            {"@type": "thing", "name": "delta-8-thc", "sameAs": ["http://en.wikipedia.org/wiki/Delta-8-Tetrahydrocannabinol","https://www.google.com/search?q=delta-8-thc&kgmid="]},
            {"@type": "thing", "name": "cannabis plants", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis","https://www.google.com/search?q=cannabis+plants&kgmid=/m/09k2t"]},
            {"@type": "thing", "name": "cannabinoid", "sameAs": ["http://en.wikipedia.org/wiki/Cannabinoid","https://www.google.com/search?q=cannabinoid&kgmid=/m/01dyv8"]},
            {"@type": "thing", "name": "cannabis strain", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_strain","https://www.google.com/search?q=cannabis+strain&kgmid=/m/0hr2vhp"]},
            {"@type": "thing", "name": "durban poison", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_strain","https://www.google.com/search?q=durban+poison&kgmid=/m/0hr2vhp"]},
            {"@type": "thing", "name": "girl scout cookies", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_strain","https://www.google.com/search?q=girl+scout+cookies&kgmid=/m/0hr2vhp"]},
            {"@type": "thing", "name": "purple kush", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_strain","https://www.google.com/search?q=purple+kush&kgmid=/m/0hr2vhp"]},
            {"@type": "thing", "name": "scrog", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_cultivation","https://www.google.com/search?q=scrog&kgmid=/m/06hpc3"]},
            {"@type": "thing", "name": "marijuana strain", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_strain","https://www.google.com/search?q=marijuana+strain&kgmid=/m/0hr2vhp"]},
            {"@type": "thing", "name": "sativa strains", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_sativa","https://www.google.com/search?q=sativa+strains&kgmid=/m/03zbj_"]},
            {"@type": "thing", "name": "sativa", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_sativa","https://www.google.com/search?q=sativa&kgmid=/m/03zbj_"]},
            {"@type": "thing", "name": "cannabis sativa", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_sativa","https://www.google.com/search?q=cannabis+sativa&kgmid=/m/03zbj_"]},
            {"@type": "thing", "name": "medical use", "sameAs": ["http://en.wikipedia.org/wiki/Medical_cannabis","https://www.google.com/search?q=medical+use&kgmid=/m/017r31"]},
            {"@type": "thing", "name": "hindu kush", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_strain","https://www.google.com/search?q=hindu+kush&kgmid=/m/0hr2vhp"]},
            {"@type": "thing", "name": "cannabidiol", "sameAs": ["http://en.wikipedia.org/wiki/Cannabidiol","https://www.google.com/search?q=cannabidiol&kgmid=/m/04klcx"]},
            {"@type": "thing", "name": "cannabis ruderalis", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_ruderalis","https://www.google.com/search?q=cannabis+ruderalis&kgmid=/m/06qsx3"]},
            {"@type": "thing", "name": "granddaddy purple", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_strain","https://www.google.com/search?q=granddaddy+purple&kgmid=/m/0hr2vhp"]},
            {"@type": "thing", "name": "blue dream", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_strain","https://www.google.com/search?q=blue+dream&kgmid="]},
            {"@type": "thing", "name": "nyc diesel", "sameAs": ["http://en.wikipedia.org/wiki/Cannabis_strain","https://www.google.com/search?q=nyc+diesel&kgmid=/m/0hr2vhp"]}
        ],
        "audience":  
        {
            "@type": "audience",
            "audienceType": ["cannabis consumers"],
            "geographicArea": ["https://en.wikipedia.org/wiki/Vancouver"]
        },
        "contentLocation":
        {
            "@type":"Place",
            "address":
            {
                "@type": "PostalAddress",
                "addressLocality": "Vancouver",
                "addressRegion": "British Columbia",
                "postalCode":"V5W 2V4",
                "streetAddress": "6416 Main St"}
        },
        "mainEntity":{
            "@type": "LocalBusiness",
            "@id":"9407473232994958313",
            "url":"https://www.thccanada.ca/",
            "name":"THC Canada",
            "image":"https://images.squarespace-cdn.com/content/v1/5fe310c4d3e6cb218de941ad/33f71666-8abf-4da8-98cc-fb149c8de361/thccan-whtblk.jpg?format=1500w",
            "telephone": "604-499-8420",
            "address":
            {
            "@type": "PostalAddress",
            "addressLocality": "Vancouver",
            "addressRegion": "BC",
            "postalCode":"V5W 2V4",
            "streetAddress": "6416 Main St"}
        }
    }

    return schema;
}

export {productSchemaMaker};