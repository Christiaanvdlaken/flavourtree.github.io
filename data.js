const flavorWheel = {
  Fruity: {
    Berry: [
      "Blackcurrant",
      "Blackberry",
      "Raspberry",
      "Blueberry",
      "Strawberry",
      "Gooseberry",
      "Elderberry",
      "Boysenberry",
      "Mulberry"
    ],
    "Dried Fruit": [
      "Raisin",
      "Prune",
      "Dried Fig",
      "Dried Date"
    ],
    "Other Fruit": [
      "Coconut",
      "Cherry",
      "Pomegranate",
      "Pineapple",
      "Grape",
      "Apple",
      "Peach",
      "Pear",
      "Banana",
      "Kiwi",
      "Passion Fruit",
      "Mango",
      "Papaya",
      "Guava"
    ],
    Citrus: [
      "Grapefruit",
      "Orange",
      "Lemon",
      "Lime",
      "Mandarin",
      "Tangerine",
      "Clementine"
    ]
  },
  "Sour/Fermented": {
    "Sour/Aromatics": [
      "Acetic Acid",
      "Butyric Acid",
      "Isovaleric Acid",
      "Citric Acid",
      "Malic Acid",
      "Lactic Acid",
      "Tartaric Acid"
    ],
    "Alcoholic/Boozy": [
      "Winey",
      "Whiskey",
      "Fermented",
      "Overripe",
      "Beer",
      "Rum"
    ]
  },
  "Green/Vegetative": {
    "Olive Oil": [
      "Olive Oil"
    ],
    Raw: [
      "Raw"
    ],
    "Green Vegetative": [
      "Pea Pod",
      "Fresh",
      "Dark Green",
      "Vegetative",
      "Hay-like",
      "Herb-like",
      "Green Pepper",
      "Grass"
    ],
    Beany: [
      "Beany"
    ]
  },
  Other: {
    Chemical: [
      "Bitter",
      "Salty",
      "Medicinal",
      "Petroleum",
      "Skunky",
      "Rubber",
      "Chlorine",
      "Ammonia"
    ],
    "Papery/Musty": [
      "Stale",
      "Cardboard",
      "Papery",
      "Woody",
      "Moldy/Damp",
      "Musty/Dusty",
      "Musty/Earthy",
      "Animalic",
      "Meaty Brothy",
      "Phenolic",
      "Milky",
      "Yeasty"
    ]
  },
  "Brown Spice": {
    "Brown Spice": [
      "Nutmeg",
      "Anise",
      "Clove",
      "Cinnamon",
      "Allspice",
      "Ginger",
      "Cardamom",
      "Coriander"
    ],
    Nutty: [
      "Peanuts",
      "Hazelnut",
      "Almond",
      "Walnut",
      "Pecan",
      "Cashew",
      "Chestnut"
    ],
    "Brown Sugar": [
      "Molasses",
      "Maple Syrup",
      "Caramelized",
      "Honey",
      "Toffee",
      "Brown Sugar"
    ],
    Vanilla: [
      "Vanilla"
    ],
    Chocolate: [
      "Dark Chocolate",
      "Chocolate",
      "Milk Chocolate",
      "White Chocolate"
    ]
  },
  Sweet: {
    "Nutty/Cocoa": [
      "Nutty/Cocoa"
    ],
    Vanilla: [
      "Vanilla"
    ],
    "Sweet Spice": [
      "Licorice",
      "Fennel",
      "Star Anise"
    ],
    Syrup: [
      "Maple Syrup",
      "Molasses",
      "Golden Syrup"
    ]
  },
  Floral: {
    Floral: [
      "Chamomile",
      "Rose",
      "Jasmine",
      "Lavender",
      "Hibiscus",
      "Elderflower",
      "Orange Blossom",
      "Linden"
    ]
  },
  Spices: {
    Pepper: [
      "Pepper",
      "Black Pepper",
      "White Pepper",
      "Pink Pepper",
      "Green Pepper"
    ],
    Pungent: [
      "Pungent",
      "Mustard",
      "Horseradish",
      "Wasabi"
    ],
    "Herbal Spices": [
      "Thyme",
      "Basil",
      "Oregano",
      "Rosemary",
      "Sage",
      "Parsley",
      "Dill",
      "Mint"
    ]
  },
  Cereal: {
    Grain: [
      "Grain",
      "Barley",
      "Wheat",
      "Oat",
      "Rye",
      "Corn",
      "Rice"
    ],
    Malt: [
      "Malt",
      "Malted Milk",
      "Toasted Malt"
    ]
  },
  Roasted: {
    "Brown Roast": [
      "Brown, Roast"
    ],
    Smoky: [
      "Smoky",
      "Charcoal",
      "Burnt"
    ],
    Acrid: [
      "Acrid"
    ],
    Ashy: [
      "Ashy"
    ],
    "Roasted Nuts": [
      "Roasted Almonds",
      "Roasted Peanuts",
      "Roasted Hazelnuts"
    ]
  }
};

const flavorColors = {
  Fruity: "#FF6347",
  Berry: "#8A2BE2",
  Blackcurrant: "#34013F",
  Blackberry: "#4D0A18",
  Raspberry: "#C71585",
  Blueberry: "#4666FF",
  Strawberry: "#FF0058",
  Gooseberry: "#89A203",
  Elderberry: "#311432",
  Boysenberry: "#9E2A2B",
  Mulberry: "#3E1F47",
  "Dried Fruit": "#B86500",
  Raisin: "#4A2D19",
  Prune: "#661F1F",
  "Dried Fig": "#7C3A2D",
  "Dried Date": "#A0522D",
  "Other Fruit": "#FFCBA4",
  Coconut: "#FFF8F0",
  Cherry: "#DE3163",
  Pomegranate: "#D11111",
  Pineapple: "#FFD700",
  Grape: "#4D1979",
  Apple: "#8DB600",
  Peach: "#FFE5B4",
  Pear: "#D1E231",
  Banana: "#FFE135",
  Kiwi: "#76B947",
  "Passion Fruit": "#E79F3D",
  Mango: "#FFA500",
  Papaya: "#FFDAB9",
  Guava: "#FF6F61",
  Citrus: "#FFD700",
  Grapefruit: "#FF6347",
  Orange: "#FFA500",
  Lemon: "#FFF700",
  Lime: "#00FF00",
  Mandarin: "#FFB347",
  Tangerine: "#FFCC00",
  Clementine: "#FF9F00",
  "Sour/Fermented": "#FF4500",
  "Sour/Aromatics": "#FF2400",
  "Acetic Acid": "#FF4800",
  "Butyric Acid": "#FBEC5D",
  "Isovaleric Acid": "#FFB347",
  "Citric Acid": "#FAD201",
  "Malic Acid": "#E6F20D",
  "Lactic Acid": "#FFFACD",
  "Tartaric Acid": "#E3C94A",
  "Alcoholic/Boozy": "#FF5733",
  Winey: "#870D0D",
  Whiskey: "#D19A66",
  Fermented: "#8F3B35",
  Overripe: "#D2691E",
  Beer: "#F7A600",
  Rum: "#8B5E3C",
  "Green/Vegetative": "#3B5323",
  "Olive Oil": "#808000",
  Raw: "#7CFC00",
  "Green Vegetative": "#556B2F",
  "Pea Pod": "#87A96B",
  Fresh: "#A4C639",
  "Dark Green": "#254117",
  Vegetative: "#556B2F",
  "Hay-like": "#C9C299",
  "Herb-like": "#6C8E23",
  "Green Pepper": "#4CBB17",
  Grass: "#7CFC00",
  Beany: "#6B4226",
  Other: "#F0E68C",
  Chemical: "#D4AF37",
  Bitter: "#9B870C",
  Salty: "#C0C0C0",
  Medicinal: "#FF6347",
  Petroleum: "#2F4F4F",
  Skunky: "#4E551F",
  Rubber: "#1C1C1C",
  Chlorine: "#DFFF00",
  Ammonia: "#BFFF00",
  "Papery/Musty": "#C3B091",
  Stale: "#7C7C7C",
  Cardboard: "#B8860B",
  Papery: "#F0E68C",
  Woody: "#8B4513",
  "Moldy/Damp": "#556B2F",
  "Musty/Dusty": "#B5651D",
  "Musty/Earthy": "#826644",
  Animalic: "#A52A2A",
  "Meaty Brothy": "#CD5C5C",
  Phenolic: "#8B0000",
  Milky: "#FFFDD0",
  Yeasty: "#F5DEB3",
  "Brown Spice": "#8B4513",
  Nutmeg: "#FF7F00",
  Anise: "#3B3B3B",
  Clove: "#3D2B1F",
  Cinnamon: "#D2691E",
  Allspice: "#3E2723",
  Ginger: "#B06500",
  Cardamom: "#A3C1AD",
  Coriander: "#C8B35A",
  Nutty: "#A0522D",
  Peanuts: "#D99058",
  Hazelnut: "#8B4500",
  Almond: "#FFEBCD",
  Walnut: "#8B5A2B",
  Pecan: "#A0522D",
  Cashew: "#FFD700",
  Chestnut: "#CD5C5C",
  "Brown Sugar": "#A52A2A",
  Molasses: "#5C4033",
  "Maple Syrup": "#6F2DA8",
  Caramelized: "#E97451",
  Honey: "#F0C300",
  Toffee: "#D2B48C",
  Vanilla: "#F3E5AB",
  Chocolate: "#7B3F00",
  "Dark Chocolate": "#3B2F2F",
  "Milk Chocolate": "#8B4513",
  "White Chocolate": "#F5F5DC",
  Sweet: "#FFB6C1",
  "Nutty/Cocoa": "#A0522D",
  "Sweet Spice": "#FF6347",
  Licorice: "#2E2E2E",
  Fennel: "#A9DFBF",
  "Star Anise": "#4F2F1D",
  Syrup: "#F5DEB3",
  Floral: "#FF69B4",
  Chamomile: "#E9D66B",
  Rose: "#FF007F",
  Jasmine: "#F8DE7E",
  Lavender: "#E6E6FA",
  Hibiscus: "#B53389",
  Elderflower: "#F3E5AB",
  "Orange Blossom": "#FFA500",
  Linden: "#FFB347",
  Spices: "#4A235A",
  Pepper: "#4A235A",
  "Black Pepper": "#2E2E2E",
  "White Pepper": "#E5E4E2",
  "Pink Pepper": "#FFC0CB",
  "Green Pepper": "#32CD32",
  Pungent: "#FF4500",
  Mustard: "#FFDB58",
  Horseradish: "#F5F5DC",
  Wasabi: "#A4C639",
  "Herbal Spices": "#228B22",
  Thyme: "#C2B280",
  Basil: "#B2D3C2",
  Oregano: "#645F40",
  Rosemary: "#A2CD5A",
  Sage: "#BC8F8F",
  Parsley: "#7F8E2D",
  Dill: "#C9E265",
  Mint: "#98FF98",
  Cereal: "#C2B280",
  Grain: "#E4D96F",
  Barley: "#FFE135",
  Wheat: "#F5DEB3",
  Oat: "#E5D8BD",
  Rye: "#D2B48C",
  Corn: "#FFD700",
  Rice: "#FFFFF0",
  Malt: "#DAA520",
  "Malted Milk": "#FFE4B5",
  "Toasted Malt": "#C3B091",
  Roasted: "#8B4513",
  "Brown Roast": "#8B4513",
  Smoky: "#848482",
  Charcoal: "#36454F",
  Burnt: "#5E2129",
  Acrid: "#B22222",
  Ashy: "#BEBEBE",
  "Roasted Nuts": "#A0522D",
  "Roasted Almonds": "#A0522D",
  "Roasted Peanuts": "#D99058",
  "Roasted Hazelnuts": "#8B4500"
};

console.log(flavorWheel);
console.log(flavorColors);
