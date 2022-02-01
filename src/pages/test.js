import React from "react"; 
import TypeBanner from "../components/global_component/StrainTypeBanner/TypeBanner";
import ClientReview from "../components/reviews/ClientReview/ClientReview";
import styled from "styled-components";
import BrandLogoBanner from "../components/global_component/BrandLogoBanner/BrandLogoBanner";
import ProducePage from "../templates/ProductPage";
const Wrapper = styled.div`

width: 190px;
height: 57px;
`;
export default function a(){
    const info = {
        "data": {
          "dutchieplus": {
            "menu": {
              "products": [
                {
                  "brand": {
                    "description": "Color Cannabis was created during a time of change in Canada. As perceptions towards cannabis shifted, we set out to champion and inspire people to be open to a world of endless possibilities - a life of limitless Color.\n\nToday is so unlike yesterday. It's time to live life in Color.",
                    "id": "1b0592e8-1966-41c0-a975-d21ce0a1b8ba",
                    "imageUrl": null,
                    "name": "Color Cannabis"
                  },
                  "category": "FLOWER",
                  "description": "Pedro's Sweet Sativa is a Canadian-bred cross of a Dominican Sativa with White Russian and an unknown Indica. The result is a Sativa-dominant hybrid that produces large, airy flowers with a unique terpene profile and high THC content.\n\n",
                  "descriptionHtml": "<p>Pedro's Sweet Sativa is a Canadian-bred cross of a Dominican Sativa with White Russian and an unknown Indica. The result is a Sativa-dominant hybrid that produces large, airy flowers with a unique terpene profile and high THC content.</p><p><br></p>",
                  "effects": [
                    "CREATIVE",
                    "ENERGETIC",
                    "FOCUSED",
                    "HAPPY",
                    "INSPIRED"
                  ],
                  "id": "600f405cb376440003557fd9",
                  "image": "https://images.dutchie.com/f2b3551105cfcd8e9d0c2345e728917a",
                  "name": "Color Cannabis - Pedro's Sweet Sativa Sativa - 3.5g",
                  "posId": "8cc735e4-67f8-4472-b562-21fb1b241f24",
                  "potencyCbd": {
                    "formatted": "0.09%",
                    "range": [
                      0.09
                    ],
                    "unit": "%"
                  },
                  "potencyThc": {
                    "range": [
                      16.4
                    ],
                    "formatted": "16.4%",
                    "unit": "%"
                  },
                  "productBatchId": "4a475653-a34d-4008-8c4d-5826a3527f5a",
                  "slug": "color-cannabis-pedro-s-sweet-sativa-sativa-3-5g-83305",
                  "staffPick": false,
                  "strainType": "SATIVA",
                  "subcategory": "DEFAULT",
                  "variants": [
                    {
                      "id": "600f405cb376440003557fd9~3.5g",
                      "option": "3.5g",
                      "priceRec": 26.85,
                      "quantity": 7,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "Good Supply exists to celebrate everyday occasions. For the user who sees cannabis as an extension of their lifestyle, Good Supply is their brand, and welcomes them to experience the product in their own way. Good stuff at a fair price, without all the frills.",
                    "id": "91e55630-a7fc-4e20-af5d-d07d94422c8d",
                    "imageUrl": "https://s3-us-west-2.amazonaws.com/dutchie-images/9ba9f36cacfbe9c1a477ebb5a428ccf0",
                    "name": "Good Supply"
                  },
                  "category": "FLOWER",
                  "description": "Royal Highness, no gimmicks just nugs. Watch the throne with this uplifting strain. With notes of fruit and spice and a bright green colour, high praise is much deserved. \n",
                  "descriptionHtml": "<p>Royal Highness, no gimmicks just nugs. Watch the throne with this uplifting strain. With notes of fruit and spice and a bright green colour, high praise is much deserved.&nbsp;</p>",
                  "effects": [
                    "CALM",
                    "ENERGETIC",
                    "HAPPY",
                    "RELAXED"
                  ],
                  "id": "600f405cb376440003557fdd",
                  "image": "https://images.dutchie.com/53c6fde6c7b0ac584a41470f6bf414d7",
                  "name": "Royal Highness",
                  "posId": "d5f4b4cf-ee76-430c-a59a-b5e820403af5",
                  "potencyCbd": {
                    "formatted": "0.9%",
                    "range": [
                      0.9
                    ],
                    "unit": "%"
                  },
                  "potencyThc": {
                    "range": [
                      18.9
                    ],
                    "formatted": "18.9%",
                    "unit": "%"
                  },
                  "productBatchId": "ea186e7d-a7ca-4610-b4c8-370d7c89f145",
                  "slug": "royal-highness",
                  "staffPick": false,
                  "strainType": "HYBRID",
                  "subcategory": "DEFAULT",
                  "variants": [
                    {
                      "id": "600f405cb376440003557fdd~3.5g",
                      "option": "3.5g",
                      "priceRec": 17.85,
                      "quantity": 25,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "Redecan believes that everyone should be able to buy high quality cannabis products for reasonable prices. \n\nThey remain one of the very few private, 100% Canadian owned and operated companies in the cannabis industry, and they maintain a family-oriented mindset towards staff and all of their patients and customers across the country.\n\n• 100% Canadian homegrown\n• 100% Greenhouse grown\n• Natural growing conditions",
                    "id": "0a207819-560a-4bcb-94f1-b1500694be15",
                    "imageUrl": "https://s3-us-west-2.amazonaws.com/dutchie-images/1a6139e8e4a86c65dfc534198a95b182",
                    "name": "Redecan"
                  },
                  "category": "PRE_ROLLS",
                  "description": "Pre-rolled joints made from our Wappa buds. Machine-rolled, and never touched by human hands for a one-of-a-kind pre-rolled experience. Rolled with a light-weight rolling paper and completed with a paper mouthpiece for a better user experience. Wappa has a strong yet sweet aroma that verges on skunkiness, both of which come through in the caryophyllene-forward taste profile. This green-and-yellow-coloured, indica-dominant strain with very strong THC potency potential is greenhouse-grown in pesticide-free natural lighting conditions then hang-dried.\n",
                  "descriptionHtml": "<p>Pre-rolled joints made from our Wappa buds. Machine-rolled, and never touched by human hands for a one-of-a-kind pre-rolled experience. Rolled with a light-weight rolling paper and completed with a paper mouthpiece for a better user experience. Wappa has a strong yet sweet aroma that verges on skunkiness, both of which come through in the caryophyllene-forward taste profile. This green-and-yellow-coloured, indica-dominant strain with very strong THC potency potential is greenhouse-grown in pesticide-free natural lighting conditions then hang-dried.</p>",
                  "effects": [
                    "HAPPY",
                    "RELAXED",
                    "SLEEPY"
                  ],
                  "id": "600f405cb376440003557fe0",
                  "image": "https://images.dutchie.com/fbf13d25b69968366e1038df5cb9dae7",
                  "name": "Redees Wappa Pre-Roll 10-pack | 3.5g",
                  "posId": "2f6b3d32-6a11-4be2-b6cb-ed1d41914b3e",
                  "potencyCbd": {
                    "formatted": "",
                    "range": [],
                    "unit": "%"
                  },
                  "potencyThc": {
                    "range": [
                      18.3
                    ],
                    "formatted": "18.3%",
                    "unit": "%"
                  },
                  "productBatchId": "f6f173e4-4236-44c0-a1ed-730ecf99ee67",
                  "slug": "redees-wappa-pre-roll-10-pack-3-5g",
                  "staffPick": false,
                  "strainType": "INDICA",
                  "subcategory": "DEFAULT",
                  "variants": [
                    {
                      "id": "600f405cb376440003557fe0~3.5g",
                      "option": "3.5g",
                      "priceRec": 24.85,
                      "quantity": 25,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "Founded in quality and pursuit of innovation, Haven St. Premium Cannabis offers a curated collection of flower, pre-roll, vape, and tea products. \n\nTo help you decide among the varying effects of our products, they have built a 5-block address system where every block is home to a unique experience. \n\nTheir creative and intuitive approach aims to help you make confident and informed cannabis choices based on your desired effects. So, are you looking for something familiar, or do you want to discover a completely different perspective? Wherever you're going, Haven St. can take you there. ",
                    "id": "c5346f4d-8790-4aab-a128-2c4489f80d31",
                    "imageUrl": "https://s3-us-west-2.amazonaws.com/dutchie-images/2bfe33ef0c7e99117a99b079e0c897e0",
                    "name": "Haven St. Premium Cannabis"
                  },
                  "category": "EDIBLES",
                  "description": "Small-batch Chocolate Rooibos Tea blended using only the highest quality, natural ingredients. Hand-crafted using rooibos, calendula, cacao beans, and natural chocolate flavour, using a proprietary cannabis infusion process. Each teabag contains 10mg of THC and 5mg of CBD.\n",
                  "descriptionHtml": "<p><strong>Drift No. 450 Chocolate Rooibos Tea Containing Cannabis</strong>&nbsp;is made with premium ingredients for superior steep and infusion.&nbsp;</p><p><br></p><p>Crisp chocolate notes complement our fruity rooibos tea.</p><p><br></p><p>Sold as single pyramid-tea bags.</p><p><br></p><p><strong>THC:</strong>&nbsp;10 mg</p><p><strong>CBD:</strong>&nbsp;5 mg</p>",
                  "effects": [
                    "HAPPY",
                    "RELAXED",
                    "SLEEPY"
                  ],
                  "id": "60158a64e25dc70003f5438a",
                  "image": "https://images.dutchie.com/8b4654e4ccdfc862a7877f0144eb4c2d",
                  "name": "Drift No. 450 Tea | 2:1",
                  "posId": "dde60c5d-b0eb-4b3d-9371-11650933f2b5",
                  "potencyCbd": {
                    "formatted": "5mg",
                    "range": [
                      5
                    ],
                    "unit": "mg"
                  },
                  "potencyThc": {
                    "range": [
                      10
                    ],
                    "formatted": "10mg",
                    "unit": "mg"
                  },
                  "productBatchId": null,
                  "slug": "drift-no-450-tea-2-1",
                  "staffPick": false,
                  "strainType": "INDICA",
                  "subcategory": "DRINKS",
                  "variants": [
                    {
                      "id": "60158a64e25dc70003f5438a~N/A",
                      "option": "N/A",
                      "priceRec": 7.35,
                      "quantity": 9,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "The Bhang Corporation brings a decade of experience in the Cannabis Business together with a diverse team of marketers, scientists, innovators, deal makers and business leaders.  Each brings a wealth of experience and a unique set of talents to the team.",
                    "id": "2f062afb-344f-46bc-a8c5-514eea5ac70d",
                    "imageUrl": "https://s3-us-west-2.amazonaws.com/dutchie-images/b49a38a8535eb970af7904415da11725",
                    "name": "Bhang"
                  },
                  "category": "EDIBLES",
                  "description": "Bhang® Dark Chocolate starts with sustainably-sourced and fair-trade cacao beans and is Powered by Indiva. Their bars combine rich 73.8% cocoa and 10 mg of THC, and are scored into four pieces, each containing 2.5 mg of THC.\n\nProduced in Indiva's state-of-the-art facility based in London, Ontario, Bhang® Dark Chocolate offers a cannabis-free flavour that offers hints of sweet, spice and malt in their dark chocolate.\n\n",
                  "descriptionHtml": "<p>Bhang® Dark Chocolate starts with sustainably-sourced and fair-trade cacao beans and is Powered by Indiva. Their bars combine rich 73.8% cocoa and 10 mg of THC, and are scored into four pieces, each containing 2.5 mg of THC.</p><p><br></p><p>Produced in Indiva's state-of-the-art facility based in London, Ontario, Bhang® Dark Chocolate offers a cannabis-free flavour that offers hints of sweet, spice and malt in their dark chocolate.</p><p><br></p>",
                  "effects": [
                    "CALM",
                    "HAPPY",
                    "RELAXED",
                    "ENERGETIC"
                  ],
                  "id": "60158a64e25dc70003f5438c",
                  "image": "https://images.dutchie.com/a7edb67f738437f58526e4c378e63428",
                  "name": "Dark Chocolate Bar",
                  "posId": "738e671e-02ed-4388-b601-4c8257ebda1e",
                  "potencyCbd": {
                    "formatted": "",
                    "range": [],
                    "unit": "mg"
                  },
                  "potencyThc": {
                    "range": [
                      10
                    ],
                    "formatted": "10mg",
                    "unit": "mg"
                  },
                  "productBatchId": null,
                  "slug": "dark-chocolate-bar",
                  "staffPick": false,
                  "strainType": "HYBRID",
                  "subcategory": "DEFAULT",
                  "variants": [
                    {
                      "id": "60158a64e25dc70003f5438c~N/A",
                      "option": "N/A",
                      "priceRec": 4.85,
                      "quantity": 18,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "Designed for the curious, Foray aims to both celebrate and educate one's foray into cannabis—ultimately inviting you to see cannabis differently. Foray is not only a trusted cannabis provider, they are a partner, a guide, and a facilitator of one's desired experiences. Your experience. Your way. No matter what stage of your cannabis journey you're on. \n\nThe brand prides themself on using natural, traceable ingredients. Their vape cartridges are made from only high-quality cannabis distillate and botanical terpenes. Their soft chews are vegan and gluten-free. Their chocolate is natural as well because it is made from premium cocoa.  \n\n\n",
                    "id": "1b2859cf-99c6-4cf1-99a8-24668cf50ae3",
                    "imageUrl": "https://s3-us-west-2.amazonaws.com/dutchie-images/be20262e6eb9c96b3ef9921dc649dff2",
                    "name": "Foray"
                  },
                  "category": "EDIBLES",
                  "description": "Foray Salted Caramel Chocolate Squares offer a delicious and discreet way to consume cannabis. Our chocolates are designed using cannabis distillate; thereby, removing noticeable cannabis taste and smell. Foray Salted Caramel Chocolate Squares contain 10mg of THC and 10mg of CBD. Foray chocolates are developed by the former head of Canada's Smartest Kitchen, renowned for developing cutting-edge food products and ingredients. Our chocolate is sourced from one of the world's leading chocolate suppliers. All of our chocolates contain traceable, natural ingredients. The cocoa in Foray Salted Caramel Chocolates Squares is derived from a Belgian/Ghanaian blend. Foray chocolate products are proudly developed and manufactured in Charlottetown, PEI by our team of experts, and tested rigorously to ensure a high quality, consistent dosage with each use.\n",
                  "descriptionHtml": "<p>Foray Salted Caramel Chocolate Squares offer a delicious and discreet way to consume cannabis. Our chocolates are designed using cannabis distillate; thereby, removing noticeable cannabis taste and smell. Foray Salted Caramel Chocolate Squares contain 10mg of THC and 10mg of CBD. Foray chocolates are developed by the former head of Canada's Smartest Kitchen, renowned for developing cutting-edge food products and ingredients. Our chocolate is sourced from one of the world's leading chocolate suppliers. All of our chocolates contain traceable, natural ingredients. The cocoa in Foray Salted Caramel Chocolates Squares is derived from a Belgian/Ghanaian blend. Foray chocolate products are proudly developed and manufactured in Charlottetown, PEI by our team of experts, and tested rigorously to ensure a high quality, consistent dosage with each use.</p>",
                  "effects": [
                    "CALM",
                    "HAPPY",
                    "RELAXED",
                    "ENERGETIC"
                  ],
                  "id": "60158a64e25dc70003f5438f",
                  "image": "https://images.dutchie.com/b575d0452024afc60b4926441838912b",
                  "name": "1:1 Salted Caramel Chocolate Square",
                  "posId": "e8ed9ff4-c966-4d84-88a6-7dc37bf67d0d",
                  "potencyCbd": {
                    "formatted": "10mg",
                    "range": [
                      10
                    ],
                    "unit": "mg"
                  },
                  "potencyThc": {
                    "range": [
                      10
                    ],
                    "formatted": "10mg",
                    "unit": "mg"
                  },
                  "productBatchId": null,
                  "slug": "1-1-salted-caramel-chocolate-square",
                  "staffPick": false,
                  "strainType": "HYBRID",
                  "subcategory": "DEFAULT",
                  "variants": [
                    {
                      "id": "60158a64e25dc70003f5438f~N/A",
                      "option": "N/A",
                      "priceRec": 4.85,
                      "quantity": 4,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "The Bhang Corporation brings a decade of experience in the Cannabis Business together with a diverse team of marketers, scientists, innovators, deal makers and business leaders.  Each brings a wealth of experience and a unique set of talents to the team.",
                    "id": "2f062afb-344f-46bc-a8c5-514eea5ac70d",
                    "imageUrl": "https://s3-us-west-2.amazonaws.com/dutchie-images/b49a38a8535eb970af7904415da11725",
                    "name": "Bhang"
                  },
                  "category": "EDIBLES",
                  "description": "Bhang® Milk Chocolate starts with sustainably-sourced and fair-trade cacao and is Powered by Indiva. Their bars combine rich 48% cocoa and 10 mg of THC, and are scored into four pieces, each containing 2.5 mg of THC. Produced in Indiva's state-of-the-art facility based in London, Ontario, Bhang® Milk Chocolate offers a cannabis-free flavour. Store in a cool, dry place.\n",
                  "descriptionHtml": "<p>Bhang® Milk Chocolate starts with sustainably-sourced and fair-trade cacao and is Powered by Indiva. Their bars combine rich 48% cocoa and 10 mg of THC, and are scored into four pieces, each containing 2.5 mg of THC. Produced in Indiva's state-of-the-art facility based in London, Ontario, Bhang® Milk Chocolate offers a cannabis-free flavour. Store in a cool, dry place.</p>",
                  "effects": [
                    "CALM",
                    "HAPPY",
                    "RELAXED",
                    "ENERGETIC"
                  ],
                  "id": "60158a64e25dc70003f54390",
                  "image": "https://images.dutchie.com/cc0326616ef7c0ce54083194031a5925",
                  "name": "Milk Chocolate Bar",
                  "posId": "d6600f72-d694-446d-9095-b1f412b45fd5",
                  "potencyCbd": {
                    "formatted": "",
                    "range": [],
                    "unit": "mg"
                  },
                  "potencyThc": {
                    "range": [
                      10
                    ],
                    "formatted": "10mg",
                    "unit": "mg"
                  },
                  "productBatchId": null,
                  "slug": "milk-chocolate-bar",
                  "staffPick": false,
                  "strainType": "HYBRID",
                  "subcategory": "DEFAULT",
                  "variants": [
                    {
                      "id": "60158a64e25dc70003f54390~N/A",
                      "option": "N/A",
                      "priceRec": 4.85,
                      "quantity": 18,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "(M-SEE-GOO)\nFOR THOSE WHO KNOW THE DIFFERENCE\n\nInspired from the original partnership with the First Nations, Msiku celebrates the heritage of the Mi'kmaq people and shared values of quality hand craftsmanship, pride for the East Coast and having a passion for cannabis. Indoor grown in a state of the art facility by cannabis enthusiasts, each flower is nurtured with an intention to create the highest quality products that consistently delivers an exceptional experience.",
                    "id": "15d6a56a-7a9d-451c-b388-7f70c9a9ebac",
                    "imageUrl": "https://s3-us-west-2.amazonaws.com/dutchie-images/ddda4e8bb68d41c4f52bef8b19e1c105",
                    "name": "Msiku"
                  },
                  "category": "PRE_ROLLS",
                  "description": "Large dense buds with a thick layer of trichomes are Gelatti's trademark. Upon first smell, one can expect to find a spicy aroma with hints of hops and earthy undertones. Conveniently available in a pack of three 0.5 g pre-rolls.",
                  "descriptionHtml": "<p>Large dense buds with a thick layer of trichomes are Gelatti's trademark. Upon first smell, one can expect to find a spicy aroma with hints of hops and earthy undertones. Conveniently available in a pack of three 0.5 g pre-rolls.</p>",
                  "effects": [
                    "HAPPY",
                    "RELAXED",
                    "SLEEPY"
                  ],
                  "id": "601f1ad43f654c00039c36b2",
                  "image": "https://images.dutchie.com/7027dc27b02c0fbb7ab9bb7352ce7d49",
                  "name": "Gelatti Pre-Roll 3-Pack | 1.5g",
                  "posId": "feb07342-036c-4c13-97ca-1189acb76786",
                  "potencyCbd": {
                    "formatted": "0.7%",
                    "range": [
                      0.7
                    ],
                    "unit": "%"
                  },
                  "potencyThc": {
                    "range": [
                      21.1
                    ],
                    "formatted": "21.1%",
                    "unit": "%"
                  },
                  "productBatchId": "f1a617e1-61cc-455d-a77a-8423f81c6b47",
                  "slug": "gelatti-pre-roll-3-pack-1-5g",
                  "staffPick": false,
                  "strainType": "INDICA",
                  "subcategory": "PACKS",
                  "variants": [
                    {
                      "id": "601f1ad43f654c00039c36b2~1.5g",
                      "option": "1.5g",
                      "priceRec": 24.85,
                      "quantity": 23,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "Canna Farms prides itself on offering a large selection of strains of award-winning, artisan, and hand-trimmed cannabis flowers with varying levels of THC and CBD. They also offer cannabis oils with varying levels of THC and CBD to clients who prefer ingesting rather than inhaling their medicine.\n\nCanna Farms was the first LP in British Columbia to receive a MMPR/ACMPR/Cannabis Regulations licence. They are 100% Canadian and family operated, and sources all of their supplies and raw materials from local businesses. ",
                    "id": "ea0aaee0-daff-4b8a-b792-540bb522f68d",
                    "imageUrl": "https://s3-us-west-2.amazonaws.com/dutchie-images/06f97dbd2b92f1195bbb03a04b3e58c2",
                    "name": "Canna Farms"
                  },
                  "category": "CONCENTRATES",
                  "description": "Canna Farm's all-natural Bubble Hash is a solventless concentrate that extracts the trichomes from the cannabis plant via ice water. The trichomes are collected then pressed together to achieve a high THC potency. The benefit of this process is that the terpenes that are responsible for aroma and flavour are retained. The bubble hash has minimal residual chlorophyll and lipids from the plant. All our bubble hash has been dried using a freeze dryer rather than conventional heat drying to retain terpene levels as well as keep cannabinoids intact.\n",
                  "descriptionHtml": "<p>Canna Farm's all-natural Bubble Hash is a solventless concentrate that extracts the trichomes from the cannabis plant via ice water. The trichomes are collected then pressed together to achieve a high THC potency. The benefit of this process is that the terpenes that are responsible for aroma and flavour are retained. The bubble hash has minimal residual chlorophyll and lipids from the plant. All our bubble hash has been dried using a freeze dryer rather than conventional heat drying to retain terpene levels as well as keep cannabinoids intact.</p>",
                  "effects": [
                    "CALM",
                    "ENERGETIC",
                    "HAPPY",
                    "RELAXED"
                  ],
                  "id": "601f1ad43f654c00039c36b7",
                  "image": "https://images.dutchie.com/ecc16d5228b18869820cf28d0a65dc1b",
                  "name": "BC Bubble Hash | 1g",
                  "posId": "357aeadc-a9ba-4a84-ac96-231264fec789",
                  "potencyCbd": {
                    "formatted": "0.07%",
                    "range": [
                      0.07
                    ],
                    "unit": "%"
                  },
                  "potencyThc": {
                    "range": [
                      39.9
                    ],
                    "formatted": "39.9%",
                    "unit": "%"
                  },
                  "productBatchId": null,
                  "slug": "bc-bubble-hash-1g",
                  "staffPick": false,
                  "strainType": "HYBRID",
                  "subcategory": "DEFAULT",
                  "variants": [
                    {
                      "id": "601f1ad43f654c00039c36b7~1g",
                      "option": "1g",
                      "priceRec": 39.85,
                      "quantity": 2,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "(M-SEE-GOO)\nFOR THOSE WHO KNOW THE DIFFERENCE\n\nInspired from the original partnership with the First Nations, Msiku celebrates the heritage of the Mi'kmaq people and shared values of quality hand craftsmanship, pride for the East Coast and having a passion for cannabis. Indoor grown in a state of the art facility by cannabis enthusiasts, each flower is nurtured with an intention to create the highest quality products that consistently delivers an exceptional experience.",
                    "id": "15d6a56a-7a9d-451c-b388-7f70c9a9ebac",
                    "imageUrl": "https://s3-us-west-2.amazonaws.com/dutchie-images/ddda4e8bb68d41c4f52bef8b19e1c105",
                    "name": "Msiku"
                  },
                  "category": "PRE_ROLLS",
                  "description": "White Wedding is a unique and heavy hitter with earthy notes and coffee undertones. A vibrant, purple and green strain coated in a heavy layer of trichomes reminiscent of an early winter frost. Conveniently available in a pack of three 0.5 g pre-rolls.\n",
                  "descriptionHtml": "<p>White Wedding is a unique and heavy hitter with earthy notes and coffee undertones. A vibrant, purple and green strain coated in a heavy layer of trichomes reminiscent of an early winter frost. Conveniently available in a pack of three 0.5 g pre-rolls.</p>",
                  "effects": [
                    "CALM",
                    "ENERGETIC",
                    "HAPPY",
                    "RELAXED"
                  ],
                  "id": "601f1ad43f654c00039c36db",
                  "image": "https://images.dutchie.com/09bbb0df69d930b1e2c0c56d5beb4f49",
                  "name": "White Wedding Pre-Roll 3-pack | 1.5g",
                  "posId": "a064318b-3915-4079-89d1-958b473325a9",
                  "potencyCbd": {
                    "formatted": "0.07%",
                    "range": [
                      0.07
                    ],
                    "unit": "%"
                  },
                  "potencyThc": {
                    "range": [
                      24.8
                    ],
                    "formatted": "24.8%",
                    "unit": "%"
                  },
                  "productBatchId": "e6a2a424-21a5-4b52-98aa-e5c65388fdf1",
                  "slug": "white-wedding-pre-roll-3-pack-1-5g",
                  "staffPick": false,
                  "strainType": "HYBRID",
                  "subcategory": "PACKS",
                  "variants": [
                    {
                      "id": "601f1ad43f654c00039c36db~1.5g",
                      "option": "1.5g",
                      "priceRec": 24.85,
                      "quantity": 17,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "Wana's mission is to enhance their customers' lives through the responsible use of cannabis. Why is Wana #1? It starts with consistency. Their entire process is designed to deliver the same great experience time after time. They have spent years fine-tuning their recipes so that their products are delicious as well as consistent and potent. Try Wana and enhance your life!",
                    "id": "2d8a3fcb-19d6-4dc8-95ec-25bd1c10502b",
                    "imageUrl": "https://s3-us-west-2.amazonaws.com/dutchie-images/4e198208b7cc4a73efeecbee9ada72e3",
                    "name": "Wana"
                  },
                  "category": "EDIBLES",
                  "description": "Notes of bright citrus balanced with lush strawberry undertones are what stand out about Wana Strawberry Lemonade Sour Soft Chews. Handcrafted with all-natural ingredients, the soft chews are infused with 10 mg of CBD and 10 mg of THC terpene-enhanced distillate.\n\n2 x 5mg chews\n",
                  "descriptionHtml": "<p>Notes of bright citrus balanced with lush strawberry undertones are what stand out about Wana Strawberry Lemonade Sour Soft Chews. Handcrafted with all-natural ingredients, the soft chews are infused with 10 mg of CBD and 10 mg of THC terpene-enhanced distillate.</p><p><br></p><p>2 x 5mg chews</p>",
                  "effects": [
                    "CALM",
                    "HAPPY",
                    "RELAXED",
                    "ENERGETIC"
                  ],
                  "id": "601f1ad43f654c00039c36c0",
                  "image": "https://images.dutchie.com/560a40eba873779d24169a865f9212fc",
                  "name": "Strawberry Lemonade 1:1 Sour Soft Chews",
                  "posId": "9b6f3619-1e01-43d0-9e3e-372e26c32d30",
                  "potencyCbd": {
                    "formatted": "10mg",
                    "range": [
                      10
                    ],
                    "unit": "mg"
                  },
                  "potencyThc": {
                    "range": [
                      10
                    ],
                    "formatted": "10mg",
                    "unit": "mg"
                  },
                  "productBatchId": null,
                  "slug": "strawberry-lemonade-1-1-sour-soft-chews",
                  "staffPick": false,
                  "strainType": "HYBRID",
                  "subcategory": "GUMMIES",
                  "variants": [
                    {
                      "id": "601f1ad43f654c00039c36c0~N/A",
                      "option": "N/A",
                      "priceRec": 7.85,
                      "quantity": 23,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "The Bhang Corporation brings a decade of experience in the Cannabis Business together with a diverse team of marketers, scientists, innovators, deal makers and business leaders.  Each brings a wealth of experience and a unique set of talents to the team.",
                    "id": "2f062afb-344f-46bc-a8c5-514eea5ac70d",
                    "imageUrl": "https://s3-us-west-2.amazonaws.com/dutchie-images/b49a38a8535eb970af7904415da11725",
                    "name": "Bhang"
                  },
                  "category": "EDIBLES",
                  "description": "ICE MILK CHOCOLATE\nAward-Winning sustainably-sourced 48% cocoa, combines the delicious flavor of pure milk chocolate with cool peppermint, derived from natural peppermint oil.\nFULL BAR     SINGLE SERVE\n​\n• 48% COCOA\n• Sugar, Cocoa Butter, Cocoa Solids, Milk Solids, Cannabis Oil, Lecithin (Sunflower), Vanilla, Peppermint Oil\n​\nContains Milk. Made in a facility that also processes nuts, dairy and other known allergens. May contain Soy (in certain manufacturing states).\n\n\n",
                  "descriptionHtml": "<p>ICE MILK CHOCOLATE</p><p>Award-Winning sustainably-sourced 48% cocoa, combines the delicious flavor of pure milk chocolate with cool peppermint, derived from natural peppermint oil.</p><p>FULL BAR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SINGLE SERVE</p><p>​</p><p><strong>• 48% COCOA</strong></p><p><strong>•&nbsp;Sugar, Cocoa Butter, Cocoa Solids, Milk Solids, Cannabis Oil, Lecithin (Sunflower), Vanilla, Peppermint Oil</strong></p><p><strong>​</strong></p><p><em>Contains Milk. Made in a facility that also processes nuts, dairy and other known allergens.&nbsp;May contain Soy (in certain manufacturing states).</em></p><p><br></p><p><br></p>",
                  "effects": [
                    "CALM",
                    "ENERGETIC",
                    "HAPPY",
                    "RELAXED"
                  ],
                  "id": "601f1ad43f654c00039c36d5",
                  "image": "https://images.dutchie.com/9de3498fd9e1f151d4e0aae7b75f19b7",
                  "name": "Ice Milk Chocolate Bar",
                  "posId": "fcf15232-1bde-4d75-a8f6-7bae10ca2270",
                  "potencyCbd": {
                    "formatted": "",
                    "range": [],
                    "unit": "mg"
                  },
                  "potencyThc": {
                    "range": [
                      10
                    ],
                    "formatted": "10mg",
                    "unit": "mg"
                  },
                  "productBatchId": null,
                  "slug": "ice-milk-chocolate-bar",
                  "staffPick": false,
                  "strainType": "HYBRID",
                  "subcategory": "CHOCOLATES",
                  "variants": [
                    {
                      "id": "601f1ad43f654c00039c36d5~N/A",
                      "option": "N/A",
                      "priceRec": 4.85,
                      "quantity": 16,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "",
                    "id": "0ff975e8-4324-4da0-9124-3a55a93b2c5a",
                    "imageUrl": null,
                    "name": "Deep Space"
                  },
                  "category": "EDIBLES",
                  "description": "Small, potent and ready-to-go. Prepare for the bold taste of this dark, full-flavored 10 mg THC, carbonated drink in a 222 mL sleek can.\n",
                  "descriptionHtml": "<p>Small, potent and ready-to-go. Prepare for the bold taste of this dark, full-flavored 10 mg THC, carbonated drink in a 222 mL sleek can.</p>",
                  "effects": [
                    "CREATIVE",
                    "ENERGETIC",
                    "FOCUSED",
                    "HAPPY",
                    "INSPIRED"
                  ],
                  "id": "601f1ad43f654c00039c36e1",
                  "image": "https://images.dutchie.com/ca961f33a893b926f5783c51019b0d28",
                  "name": "Deep Space",
                  "posId": "df0e6cf2-481b-48f7-87a3-c04467b8e9c9",
                  "potencyCbd": {
                    "formatted": "",
                    "range": [],
                    "unit": "mg"
                  },
                  "potencyThc": {
                    "range": [
                      10
                    ],
                    "formatted": "10mg",
                    "unit": "mg"
                  },
                  "productBatchId": null,
                  "slug": "deep-space",
                  "staffPick": false,
                  "strainType": "SATIVA",
                  "subcategory": "DRINKS",
                  "variants": [
                    {
                      "id": "601f1ad43f654c00039c36e1~N/A",
                      "option": "N/A",
                      "priceRec": 8.85,
                      "quantity": 3,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "(M-SEE-GOO)\nFOR THOSE WHO KNOW THE DIFFERENCE\n\nInspired from the original partnership with the First Nations, Msiku celebrates the heritage of the Mi'kmaq people and shared values of quality hand craftsmanship, pride for the East Coast and having a passion for cannabis. Indoor grown in a state of the art facility by cannabis enthusiasts, each flower is nurtured with an intention to create the highest quality products that consistently delivers an exceptional experience.",
                    "id": "15d6a56a-7a9d-451c-b388-7f70c9a9ebac",
                    "imageUrl": "https://s3-us-west-2.amazonaws.com/dutchie-images/ddda4e8bb68d41c4f52bef8b19e1c105",
                    "name": "Msiku"
                  },
                  "category": "FLOWER",
                  "description": "A vibrant, purple and green strain coated in a heavy layer of trichomes reminiscent of an early winter frost. White Wedding is a unique and heavy hitter with earthy notes and coffee undertones. Hang Dried and hand trimmed to preserve aroma and flavours.\n\n",
                  "descriptionHtml": "<p>A vibrant, purple and green strain coated in a heavy layer of trichomes reminiscent of an early winter frost. White Wedding is a unique and heavy hitter with earthy notes and coffee undertones. Hang Dried and hand trimmed to preserve aroma and flavours.</p><p><br></p>",
                  "effects": [
                    "CALM",
                    "ENERGETIC",
                    "HAPPY",
                    "RELAXED"
                  ],
                  "id": "601f1ad43f654c00039c36d0",
                  "image": "https://images.dutchie.com/d0b557a4d8f2a25df79ff84db41ebab2",
                  "name": "White Wedding",
                  "posId": "b632d8e9-74d0-477f-94f8-704be48bc6fc",
                  "potencyCbd": {
                    "formatted": "0.07%",
                    "range": [
                      0.07
                    ],
                    "unit": "%"
                  },
                  "potencyThc": {
                    "range": [
                      24.8
                    ],
                    "formatted": "24.8%",
                    "unit": "%"
                  },
                  "productBatchId": "b56fc85f-dba5-4bac-a964-e868a293ceea",
                  "slug": "white-wedding",
                  "staffPick": false,
                  "strainType": "HYBRID",
                  "subcategory": "DEFAULT",
                  "variants": [
                    {
                      "id": "601f1ad43f654c00039c36d0~3.5g",
                      "option": "3.5g",
                      "priceRec": 42.85,
                      "quantity": 2,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "The story of Houseplant starts with its founders. Their work has helped bring cannabis to the forefront of culture, while de-stigmatizing outdated notions about the plant. Houseplant is continuing this work with a relentless focus on the highest quality products that allow people to trust, try, and enjoy cannabis in the format that's right for them. Houseplant has a sincere love for cannabis and thinks it should be treated with the reverence it deserves. They are on a mission to enhance people's lives through curating quality products that elevate cannabis and its surrounding culture.",
                    "id": "34bb12c1-a99b-465f-b4d2-a466c6ee360d",
                    "imageUrl": "https://s3-us-west-2.amazonaws.com/dutchie-images/89d494f28d64884eabc5b05529ccba25",
                    "name": "Houseplant"
                  },
                  "category": "EDIBLES",
                  "description": "Houseplant Grapefruit is a refreshing, cannabis-infused sparkling water with natural grapefruit flavour and 2.5mg of THC. Great for any occasion, especially occasions where you feel like drinking a cannabis-infused sparkling water.\n",
                  "descriptionHtml": "<p>Houseplant Grapefruit is a refreshing, cannabis-infused sparkling water with natural grapefruit flavour and 2.5mg of THC. Great for any occasion, especially occasions where you feel like drinking a cannabis-infused sparkling water.</p>",
                  "effects": [
                    "CALM",
                    "ENERGETIC",
                    "HAPPY",
                    "RELAXED"
                  ],
                  "id": "601f1ad43f654c00039c36ee",
                  "image": "https://images.dutchie.com/4d0a88e4de3cbcfb40ae190691d9cbb7",
                  "name": "Houseplant - Grapefruit Sparkling Water Sativa - 1x355ml",
                  "posId": "4ede2898-5ab5-4d8d-a3be-e1b5ec043a40",
                  "potencyCbd": {
                    "formatted": "",
                    "range": [],
                    "unit": "mg"
                  },
                  "potencyThc": {
                    "range": [
                      2.5
                    ],
                    "formatted": "2.5mg",
                    "unit": "mg"
                  },
                  "productBatchId": null,
                  "slug": "houseplant-grapefruit-sparkling-water-sativa-1x355ml-67951",
                  "staffPick": false,
                  "strainType": "SATIVA",
                  "subcategory": "DEFAULT",
                  "variants": [
                    {
                      "id": "601f1ad43f654c00039c36ee~N/A",
                      "option": "N/A",
                      "priceRec": 4.85,
                      "quantity": 19,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "Daily Special is a no-frills brand that is focused on providing the best value across multiple formats for consumers seeking reliable & high potency cannabis. ",
                    "id": "0422d1c2-37da-4ea2-8b09-34419df26a2a",
                    "imageUrl": "https://s3-us-west-2.amazonaws.com/dutchie-images/c462d02b945162797131ab1db5861fa3",
                    "name": "Daily Special"
                  },
                  "category": "FLOWER",
                  "description": "Don't expect a fancy product description. This is straight up good quality flower with no nonsense and fair prices. This indica provides a smooth, earthy and affordable experience. This product is available in an eighth. Sorry Ontario, a half quarter.",
                  "descriptionHtml": "<p>Don't expect a fancy product description. This is straight up good quality flower with no nonsense and fair prices. This indica provides a smooth, earthy and affordable experience. This product is available in an eighth. Sorry Ontario, a half quarter.</p>",
                  "effects": [
                    "HAPPY",
                    "RELAXED",
                    "SLEEPY"
                  ],
                  "id": "601f1ad43f654c00039c36b5",
                  "image": "https://images.dutchie.com/d5a4cacae8ad8aec6e0c4f7cf8ea2515",
                  "name": "Daily Special - Daily Special Indica Indica",
                  "posId": "bbbfdb26-8de8-49df-a77e-1e61245ee783",
                  "potencyCbd": {
                    "formatted": "",
                    "range": [],
                    "unit": "%"
                  },
                  "potencyThc": {
                    "range": [
                      20
                    ],
                    "formatted": "20%",
                    "unit": "%"
                  },
                  "productBatchId": "2101b127-8c0a-4ca0-9a41-e6bb315b6f05",
                  "slug": "daily-special-daily-special-indica-indica",
                  "staffPick": false,
                  "strainType": "INDICA",
                  "subcategory": "DEFAULT",
                  "variants": [
                    {
                      "id": "601f1ad43f654c00039c36b5~7g",
                      "option": "7g",
                      "priceRec": 38.85,
                      "quantity": 25,
                      "specialPriceRec": null
                    },
                    {
                      "id": "601f1ad43f654c00039c36b5~28g",
                      "option": "28g",
                      "priceRec": 124.45,
                      "quantity": 12,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "",
                    "id": "075f788e-a1ec-4eaa-8d18-bfeb06820d0d",
                    "imageUrl": null,
                    "name": "MTL Cannabis"
                  },
                  "category": "FLOWER",
                  "description": "Sage N' Sour is a Sativa-dominant cross between the pungent Sour Diesel and S.A.G.E. This strain takes its well-known Sour Diesel lineage to the next level with a citric bouquet of aromas. Sage N' Sour has over 1% CBG and its dominant terpene is Terpinolene, typically found in true Sativas and lilac, nutmeg and cumin.\n\nTerpene profile: Beta-Caryophyllene, Limonene, Myrcene, Ocimene, Terpinolene\n",
                  "descriptionHtml": "<p>Sage N' Sour is a Sativa-dominant cross between the pungent Sour Diesel and S.A.G.E. This strain takes its well-known Sour Diesel lineage to the next level with a citric bouquet of aromas. Sage N' Sour has over 1% CBG and its dominant terpene is Terpinolene, typically found in true Sativas and lilac, nutmeg and cumin.</p><p><br></p><p>Terpene profile: Beta-Caryophyllene, Limonene, Myrcene, Ocimene, Terpinolene</p>",
                  "effects": [
                    "CREATIVE",
                    "ENERGETIC",
                    "FOCUSED",
                    "HAPPY",
                    "INSPIRED"
                  ],
                  "id": "601f1ad43f654c00039c36cd",
                  "image": "https://images.dutchie.com/98c2b6c20c06f5717482caabebfd7c1e",
                  "name": "MTL Cannabis - Sage N Sour Sativa - 3.5g",
                  "posId": "89b28f2a-232d-4c7d-bb05-578c4324395f",
                  "potencyCbd": {
                    "formatted": "0.08%",
                    "range": [
                      0.08
                    ],
                    "unit": "%"
                  },
                  "potencyThc": {
                    "range": [
                      24.2
                    ],
                    "formatted": "24.2%",
                    "unit": "%"
                  },
                  "productBatchId": "bd5743e7-c003-433d-97e1-1f0191861cbc",
                  "slug": "mtl-cannabis-sage-n-sour-sativa-3-5g",
                  "staffPick": false,
                  "strainType": "SATIVA",
                  "subcategory": "DEFAULT",
                  "variants": [
                    {
                      "id": "601f1ad43f654c00039c36cd~3.5g",
                      "option": "3.5g",
                      "priceRec": 35.4,
                      "quantity": 2,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "(M-SEE-GOO)\nFOR THOSE WHO KNOW THE DIFFERENCE\n\nInspired from the original partnership with the First Nations, Msiku celebrates the heritage of the Mi'kmaq people and shared values of quality hand craftsmanship, pride for the East Coast and having a passion for cannabis. Indoor grown in a state of the art facility by cannabis enthusiasts, each flower is nurtured with an intention to create the highest quality products that consistently delivers an exceptional experience.",
                    "id": "15d6a56a-7a9d-451c-b388-7f70c9a9ebac",
                    "imageUrl": "https://s3-us-west-2.amazonaws.com/dutchie-images/ddda4e8bb68d41c4f52bef8b19e1c105",
                    "name": "Msiku"
                  },
                  "category": "FLOWER",
                  "description": "Large dense buds with a thick layer of trichomes are Gelatti's trademark. Upon first smell, one can expect to find a spicy aroma with hints of hops and earthy undertones. Hang Dried and hand trimmed to preserve aroma and flavours.\n",
                  "descriptionHtml": "<p>Large dense buds with a thick layer of trichomes are Gelatti's trademark. Upon first smell, one can expect to find a spicy aroma with hints of hops and earthy undertones. Hang Dried and hand trimmed to preserve aroma and flavours.</p>",
                  "effects": [
                    "CALM",
                    "ENERGETIC",
                    "HAPPY",
                    "RELAXED"
                  ],
                  "id": "601f1ad43f654c00039c36d2",
                  "image": "https://images.dutchie.com/cc46605246286bd44360c9e464c91d66",
                  "name": "Gelatti",
                  "posId": "c5d53bf3-dce6-4973-b89a-795568ae0688",
                  "potencyCbd": {
                    "formatted": "0.07%",
                    "range": [
                      0.07
                    ],
                    "unit": "%"
                  },
                  "potencyThc": {
                    "range": [
                      22.1
                    ],
                    "formatted": "22.1%",
                    "unit": "%"
                  },
                  "productBatchId": "81510350-2814-4b95-9644-90a43292ee8c",
                  "slug": "gelatti",
                  "staffPick": false,
                  "strainType": "INDICA",
                  "subcategory": "DEFAULT",
                  "variants": [
                    {
                      "id": "601f1ad43f654c00039c36d2~3.5g",
                      "option": "3.5g",
                      "priceRec": 39.85,
                      "quantity": 9,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "Tweed is Canada's leading source for all things cannabis, and they're about more than just growing seeds into plants. Tweed is about starting conversations, and opening minds to a fresh perspective. They're about becoming part of the fabric of each neighbourhood that embraces them, and their wide selection of products is as diverse as the communities they serve. \n\nWith a commitment to best-in-class customer service, strain variety, and quality assurance, Tweed is setting the new standard for cannabis, right here in Canada.",
                    "id": "c0d96b35-defa-436f-9aab-8e81ce2b0ccf",
                    "imageUrl": "https://s3-us-west-2.amazonaws.com/dutchie-images/77cdfce9af9b39bbb413a223ec51c9eb",
                    "name": "Tweed"
                  },
                  "category": "EDIBLES",
                  "description": "Tweed masterfully combined Tweed Houndstooth Distilled Cannabis with soda water and other ingredients to create a refreshing cannabis experience. The convenient 355 mL can contains 2 mg of THC.\n",
                  "descriptionHtml": "<p>Tweed masterfully combined Tweed Houndstooth Distilled Cannabis with soda water and other ingredients to create a refreshing cannabis experience. The convenient 355 mL can contains 2 mg of THC.</p>",
                  "effects": [
                    "CALM",
                    "HAPPY",
                    "RELAXED",
                    "ENERGETIC"
                  ],
                  "id": "601f1ad43f654c00039c36da",
                  "image": "https://images.dutchie.com/ebb92fca54adadc296c35a7a16347a2c",
                  "name": "Houndstooth Soda",
                  "posId": "49115e3e-3388-41fe-8eb9-93d0b8cb8b19",
                  "potencyCbd": {
                    "formatted": "",
                    "range": [],
                    "unit": "mg"
                  },
                  "potencyThc": {
                    "range": [
                      2
                    ],
                    "formatted": "2mg",
                    "unit": "mg"
                  },
                  "productBatchId": null,
                  "slug": "houndstooth-soda",
                  "staffPick": false,
                  "strainType": "SATIVA",
                  "subcategory": "DEFAULT",
                  "variants": [
                    {
                      "id": "601f1ad43f654c00039c36da~N/A",
                      "option": "N/A",
                      "priceRec": 2.95,
                      "quantity": 2,
                      "specialPriceRec": null
                    }
                  ]
                },
                {
                  "brand": {
                    "description": "Redecan believes that everyone should be able to buy high quality cannabis products for reasonable prices. \n\nThey remain one of the very few private, 100% Canadian owned and operated companies in the cannabis industry, and they maintain a family-oriented mindset towards staff and all of their patients and customers across the country.\n\n• 100% Canadian homegrown\n• 100% Greenhouse grown\n• Natural growing conditions",
                    "id": "0a207819-560a-4bcb-94f1-b1500694be15",
                    "imageUrl": "https://s3-us-west-2.amazonaws.com/dutchie-images/1a6139e8e4a86c65dfc534198a95b182",
                    "name": "Redecan"
                  },
                  "category": "PRE_ROLLS",
                  "description": "Cold Creek Kush is a cross between MK Ultra and fellow Colorado native Chemdawg 91, and has very strong THC potency potential and a recognizable dank smell, much like a forest after a rainfall. Its taste profile, informed by its beta-pinene, nerolidol, trans-caryophyllene, linalool and limonene terpene mix, is strongly herbal, earthy and woody, with fresh sour pine.\n",
                  "descriptionHtml": "<p>Cold Creek Kush is a cross between MK Ultra and fellow Colorado native Chemdawg 91, and has very strong THC potency potential and a recognizable dank smell, much like a forest after a rainfall. Its taste profile, informed by its beta-pinene, nerolidol, trans-caryophyllene, linalool and limonene terpene mix, is strongly herbal, earthy and woody, with fresh sour pine.</p>",
                  "effects": [
                    "CREATIVE",
                    "ENERGETIC",
                    "FOCUSED",
                    "HAPPY",
                    "INSPIRED"
                  ],
                  "id": "601f1ad43f654c00039c36e5",
                  "image": "https://images.dutchie.com/fbf13d25b69968366e1038df5cb9dae7",
                  "name": "Redees Cold Creek Kush Pre-Roll 10-pack | 3.5g",
                  "posId": "9ac17f10-a5cd-4877-bcc6-cae20392c8bd",
                  "potencyCbd": {
                    "formatted": "",
                    "range": [],
                    "unit": "%"
                  },
                  "potencyThc": {
                    "range": [
                      18.5
                    ],
                    "formatted": "18.5%",
                    "unit": "%"
                  },
                  "productBatchId": "88622a3a-afd2-4a04-aa33-173cbfa9399a",
                  "slug": "redees-cold-creek-kush-pre-roll-10-pack-3-5g",
                  "staffPick": false,
                  "strainType": "SATIVA",
                  "subcategory": "DEFAULT",
                  "variants": [
                    {
                      "id": "601f1ad43f654c00039c36e5~3.5g",
                      "option": "3.5g",
                      "priceRec": 24.85,
                      "quantity": 25,
                      "specialPriceRec": null
                    }
                  ]
                }
              ],
              "productsCount": 427,
              "weights": [
                "3.5g",
                "1.5g",
                "1g",
                "7g",
                "28g",
                "14g",
                ".5g",
                "1.05g",
                ".7g",
                "9g",
                "3g",
                "2g",
                "100g",
                ".4g",
                "4.2g",
                ".99g",
                ".47g",
                ".45g",
                "25g",
                "12g",
                "20g",
                ".25g",
                "7.2g",
                "4g",
                "55g",
                "6g",
                "5g",
                "10g",
                "50g",
                "85g",
                "11.8g",
                "60g",
                ".95g",
                "15g",
                "2.25g",
                "250g",
                "7.5g",
                "57g",
                "8g",
                "32g",
                "45g",
                "2.45g",
                "6.4g",
                ".3g",
                "17.5g",
                "13.5g",
                "16g",
                "40g",
                "33.5g"
              ]
            }
          }
        },
        "extensions": {}
      }
      const product=info.data.dutchieplus.menu;
    return(
        <ProducePage product={product.products[0]}/>
    )
}