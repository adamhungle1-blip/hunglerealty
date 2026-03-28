export interface RMContent {
  description: string;
  towns: string[];
  highways: string[];
  soilType: string;
  nearestCity: string;
  keywords: string[];
}

export const rmContentBatch1: Record<string, RMContent> = {
  "aberdeen": {
    description: "The RM of Aberdeen No. 373 is located in central Saskatchewan near Aberdeen and Edenburg. The nearest major centre is Saskatoon, ~41 km. The municipality is served by Highway 4, Highway 12, Highway 27, Highway 41 and Highway 784, providing market access and transportation connections. The area falls within the dark grey/black soil zone, mixed grain and forage land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Aberdeen", "Edenburg"],
    highways: ["Highway 4", "Highway 12", "Highway 27", "Highway 41", "Highway 784"],
    soilType: "Dark grey/black soil zone — mixed grain and forage land",
    nearestCity: "Saskatoon, ~41 km",
    keywords: ["farmland for sale RM Aberdeen", "agricultural land Aberdeen area", "Saskatchewan farmland RM Aberdeen", "RM Aberdeen farm property"]
  },
  "abernethy": {
    description: "The RM of Abernethy No. 186 is located in southern eastern Saskatchewan near Balcarres, Abernethy, and Katepwa. The nearest major centre is Regina, ~82 km. The municipality is served by Highway 10, Highway 22, Highway 310 and Highway 619, providing market access and transportation connections. The area falls within the dark brown soil zone, productive grain and oilseed land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Balcarres", "Abernethy", "Katepwa", "Katepwa Beach"],
    highways: ["Highway 10", "Highway 22", "Highway 310", "Highway 619"],
    soilType: "Dark brown soil zone — productive grain and oilseed land",
    nearestCity: "Regina, ~82 km",
    keywords: ["farmland for sale RM Abernethy", "agricultural land Balcarres area", "Saskatchewan farmland RM Abernethy", "RM Abernethy farm property"]
  },
  "antelope-park": {
    description: "The RM of Antelope Park No. 322 is located in central western Saskatchewan near Court, Fusilier, and Hoosier. The nearest major centre is Kindersley, ~56 km. The municipality is served by Highway 51, Highway 317 and Highway 772, providing market access and transportation connections. The area falls within the black soil zone, excellent grain and canola land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Court", "Fusilier", "Hoosier", "Loverna"],
    highways: ["Highway 51", "Highway 317", "Highway 772"],
    soilType: "Black soil zone — excellent grain and canola land",
    nearestCity: "Kindersley, ~56 km",
    keywords: ["farmland for sale RM Antelope Park", "agricultural land Court area", "Saskatchewan farmland RM Antelope Park", "RM Antelope Park farm property"]
  },
  "antler": {
    description: "The RM of Antler No. 61 is located in southern eastern Saskatchewan near Redvers, Antler, and Fry's. The nearest major centre is Estevan, ~99 km. The municipality is served by Highway 8, Highway 13, Highway 600 and Highway 601, providing market access and transportation connections. The area falls within the brown soil zone, suited to grain and pulse crops. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Redvers", "Antler", "Fry's", "Wauchope"],
    highways: ["Highway 8", "Highway 13", "Highway 600", "Highway 601"],
    soilType: "Brown soil zone — suited to grain and pulse crops",
    nearestCity: "Estevan, ~99 km",
    keywords: ["farmland for sale RM Antler", "agricultural land Redvers area", "Saskatchewan farmland RM Antler", "RM Antler farm property"]
  },
  "arborfield": {
    description: "The RM of Arborfield No. 456 is located in northern eastern Saskatchewan near Arborfield, Zenon Park, and Jordan River. The nearest major centre is Melfort, ~76 km. The municipality is served by Highway 23, Highway 335, Highway 679 and Highway 690, providing market access and transportation connections. The area falls within the dark grey/black soil zone, mixed grain and forage land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Arborfield", "Zenon Park", "Jordan River"],
    highways: ["Highway 23", "Highway 335", "Highway 679", "Highway 690"],
    soilType: "Dark grey/black soil zone — mixed grain and forage land",
    nearestCity: "Melfort, ~76 km",
    keywords: ["farmland for sale RM Arborfield", "agricultural land Arborfield area", "Saskatchewan farmland RM Arborfield", "RM Arborfield farm property"]
  },
  "arlington": {
    description: "The RM of Arlington No. 79 is located in southern western Saskatchewan near Dollard and South Fork. The nearest major centre is Swift Current, ~96 km. The municipality is served by Highway 3, Highway 13, Highway 18, Highway 37 and Highway 501, providing market access and transportation connections. The area falls within the brown soil zone, suited to grain and pulse crops. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Dollard", "South Fork"],
    highways: ["Highway 3", "Highway 13", "Highway 18", "Highway 37", "Highway 501"],
    soilType: "Brown soil zone — suited to grain and pulse crops",
    nearestCity: "Swift Current, ~96 km",
    keywords: ["farmland for sale RM Arlington", "agricultural land Dollard area", "Saskatchewan farmland RM Arlington", "RM Arlington farm property"]
  },
  "arm-river": {
    description: "The RM of Arm River No. 252 is located in central Saskatchewan near Davidson and Girvin. The nearest major centre is Moose Jaw, ~93 km. The municipality is served by Highway 11, Highway 653, Highway 747 and Highway 749, providing market access and transportation connections. The area falls within the black soil zone, excellent grain and canola land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Davidson", "Girvin"],
    highways: ["Highway 11", "Highway 653", "Highway 747", "Highway 749"],
    soilType: "Black soil zone — excellent grain and canola land",
    nearestCity: "Moose Jaw, ~93 km",
    keywords: ["farmland for sale RM Arm River", "agricultural land Davidson area", "Saskatchewan farmland RM Arm River", "RM Arm River farm property"]
  },
  "auvergne": {
    description: "The RM of Auvergne No. 76 is located in southern Saskatchewan. The nearest major centre is Swift Current, ~74 km. The area falls within the brown soil zone, suited to grain and pulse crops. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Ponteix", "Aneroid"],
    highways: [],
    soilType: "Brown soil zone — suited to grain and pulse crops",
    nearestCity: "Swift Current, ~74 km",
    keywords: ["RM Auvergne farmland", "central Saskatchewan grain land", "black soil agricultural property", "Ponteix area farmland for sale"]
  },
  "baildon": {
    description: "The RM of Baildon No. 131 is located in southern Saskatchewan near Archive, Baildon, and Buttress. The nearest major centre is Moose Jaw, ~24 km. The area falls within the dark brown soil zone, productive grain and oilseed land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Archive", "Baildon", "Buttress", "Crestwynd"],
    highways: [],
    soilType: "Dark brown soil zone — productive grain and oilseed land",
    nearestCity: "Moose Jaw, ~24 km",
    keywords: ["farmland for sale RM Baildon", "agricultural land Archive area", "Saskatchewan farmland RM Baildon", "RM Baildon farm property"]
  },
  "barrier-valley": {
    description: "The RM of Barrier Valley No. 397 is located in central eastern Saskatchewan near Archerwill, Algrove, and Dahlton. The nearest major centre is Melfort, ~57 km. The municipality is served by Highway 35, Highway 349, Highway 652 and Highway 773, providing market access and transportation connections. The area falls within the dark grey/black soil zone, mixed grain and forage land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Archerwill", "Algrove", "Dahlton", "Lightwoods"],
    highways: ["Highway 35", "Highway 349", "Highway 652", "Highway 773"],
    soilType: "Dark grey/black soil zone — mixed grain and forage land",
    nearestCity: "Melfort, ~57 km",
    keywords: ["farmland for sale RM Barrier Valley", "agricultural land Archerwill area", "Saskatchewan farmland RM Barrier Valley", "RM Barrier Valley farm property"]
  },
  "bayne": {
    description: "The RM of Bayne No. 371 is located in central Saskatchewan near Bremen, Dana, and Muskiki Springs. The nearest major centre is Humboldt, ~37 km. The area falls within the dark grey/black soil zone, mixed grain and forage land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Bremen", "Dana", "Muskiki Springs", "Peterson"],
    highways: [],
    soilType: "Dark grey/black soil zone — mixed grain and forage land",
    nearestCity: "Humboldt, ~37 km",
    keywords: ["farmland for sale RM Bayne", "agricultural land Bremen area", "Saskatchewan farmland RM Bayne", "RM Bayne farm property"]
  },
  "beaver-river": {
    description: "The RM of Beaver River No. 622 is located in northern western Saskatchewan near Goodsoil, Pierceland, and Big Island Lake Cree Territory. The nearest major centre is Meadow Lake, ~71 km. The area falls within the dark grey/black soil zone, mixed grain and forage land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Goodsoil", "Pierceland", "Big Island Lake Cree Territory", "Ministikwan 161A"],
    highways: [],
    soilType: "Dark grey/black soil zone — mixed grain and forage land",
    nearestCity: "Meadow Lake, ~71 km",
    keywords: ["farmland for sale RM Beaver River", "agricultural land Goodsoil area", "Saskatchewan farmland RM Beaver River", "RM Beaver River farm property"]
  },
  "benson": {
    description: "The RM of Benson No. 35 is located in southern eastern Saskatchewan near Benson, Bryant, and Cullen. The nearest major centre is Estevan, ~28 km. The area falls within the brown soil zone, suited to grain and pulse crops. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Benson", "Bryant", "Cullen", "Woodley"],
    highways: [],
    soilType: "Brown soil zone — suited to grain and pulse crops",
    nearestCity: "Estevan, ~28 km",
    keywords: ["farmland for sale RM Benson", "agricultural land Benson area", "Saskatchewan farmland RM Benson", "RM Benson farm property"]
  },
  "big-arm": {
    description: "The RM of Big Arm No. 251 is located in central Saskatchewan near Imperial, Liberty, and Etters Beach. The nearest major centre is Moose Jaw, ~97 km. The area falls within the black soil zone, excellent grain and canola land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Imperial", "Liberty", "Etters Beach", "Hendersons Beach"],
    highways: [],
    soilType: "Black soil zone — excellent grain and canola land",
    nearestCity: "Moose Jaw, ~97 km",
    keywords: ["farmland for sale RM Big Arm", "agricultural land Imperial area", "Saskatchewan farmland RM Big Arm", "RM Big Arm farm property"]
  },
  "big-quill": {
    description: "The RM of Big Quill No. 308 is located in central eastern Saskatchewan near Wynyard, Kandahar, and Dafoe. The nearest major centre is Humboldt, ~78 km. The area falls within the black soil zone, excellent grain and canola land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Wynyard", "Kandahar", "Dafoe", "Copeland"],
    highways: [],
    soilType: "Black soil zone — excellent grain and canola land",
    nearestCity: "Humboldt, ~78 km",
    keywords: ["farmland for sale RM Big Quill", "agricultural land Wynyard area", "Saskatchewan farmland RM Big Quill", "RM Big Quill farm property"]
  },
  "big-river": {
    description: "The RM of Big River No. 555 is located in northern Saskatchewan near Big River, Nesslin Lake, and Phillips Grove. The nearest major centre is Meadow Lake, ~84 km. The area falls within the dark grey/black soil zone, mixed grain and forage land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Big River", "Nesslin Lake", "Phillips Grove", "Bodmin"],
    highways: [],
    soilType: "Dark grey/black soil zone — mixed grain and forage land",
    nearestCity: "Meadow Lake, ~84 km",
    keywords: ["farmland for sale RM Big River", "agricultural land Big River area", "Saskatchewan farmland RM Big River", "RM Big River farm property"]
  },
  "big-stick": {
    description: "The RM of Big Stick No. 141 is located in southern western Saskatchewan near Golden Prairie. The nearest major centre is Swift Current, ~124 km. The area falls within the dark brown soil zone, productive grain and oilseed land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Golden Prairie"],
    highways: [],
    soilType: "Dark brown soil zone — productive grain and oilseed land",
    nearestCity: "Swift Current, ~124 km",
    keywords: ["farmland for sale RM Big Stick", "agricultural land Golden Prairie area", "Saskatchewan farmland RM Big Stick", "RM Big Stick farm property"]
  },
  "biggar": {
    description: "The RM of Biggar No. 347 is located in central western Saskatchewan near Biggar, Springwater, and Argo. The nearest major centre is North Battleford, ~75 km. The municipality is served by Highway 4, Highway 14, Highway 51, Highway 656 and Highway 658, providing market access and transportation connections. The area falls within the black soil zone, excellent grain and canola land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Biggar", "Springwater", "Argo", "Castlewood"],
    highways: ["Highway 4", "Highway 14", "Highway 51", "Highway 656", "Highway 658"],
    soilType: "Black soil zone — excellent grain and canola land",
    nearestCity: "North Battleford, ~75 km",
    keywords: ["farmland for sale RM Biggar", "agricultural land Biggar area", "Saskatchewan farmland RM Biggar", "RM Biggar farm property"]
  },
  "birch-hills": {
    description: "The RM of Birch Hills No. 460 is located in northern Saskatchewan near Birch Hills, Brancepeth, and Hagen. The nearest major centre is Prince Albert, ~24 km. The municipality is served by Highway 3, providing market access and transportation connections. The area falls within the dark grey/black soil zone, mixed grain and forage land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Birch Hills", "Brancepeth", "Hagen", "Muskoday First Nation"],
    highways: ["Highway 3"],
    soilType: "Dark grey/black soil zone — mixed grain and forage land",
    nearestCity: "Prince Albert, ~24 km",
    keywords: ["farmland for sale RM Birch Hills", "agricultural land Birch Hills area", "Saskatchewan farmland RM Birch Hills", "RM Birch Hills farm property"]
  },
  "bjorkdale": {
    description: "The RM of Bjorkdale No. 426 is located in central eastern Saskatchewan near Bjorkdale, Mistatim, and Barrier Ford. The nearest major centre is Melfort, ~76 km. The area falls within the dark grey/black soil zone, mixed grain and forage land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Bjorkdale", "Mistatim", "Barrier Ford", "Chelan"],
    highways: [],
    soilType: "Dark grey/black soil zone — mixed grain and forage land",
    nearestCity: "Melfort, ~76 km",
    keywords: ["farmland for sale RM Bjorkdale", "agricultural land Bjorkdale area", "Saskatchewan farmland RM Bjorkdale", "RM Bjorkdale farm property"]
  },
  "blaine-lake": {
    description: "The RM of Blaine Lake No. 434 is located in central Saskatchewan near Blaine Lake and Marcelin. The nearest major centre is Saskatoon, ~77 km. The municipality is served by Highway 12 and Highway 40, providing market access and transportation connections. The area falls within the dark grey/black soil zone, mixed grain and forage land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Blaine Lake", "Marcelin"],
    highways: ["Highway 12", "Highway 40"],
    soilType: "Dark grey/black soil zone — mixed grain and forage land",
    nearestCity: "Saskatoon, ~77 km",
    keywords: ["farmland for sale RM Blaine Lake", "agricultural land Blaine Lake area", "Saskatchewan farmland RM Blaine Lake", "RM Blaine Lake farm property"]
  },
  "blucher": {
    description: "The RM of Blucher No. 343 is located in central Saskatchewan near Allan, Bradwell, and Clavet. The nearest major centre is Saskatoon, ~36 km. The area falls within the black soil zone, excellent grain and canola land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Allan", "Bradwell", "Clavet", "Elstow"],
    highways: [],
    soilType: "Black soil zone — excellent grain and canola land",
    nearestCity: "Saskatoon, ~36 km",
    keywords: ["farmland for sale RM Blucher", "agricultural land Allan area", "Saskatchewan farmland RM Blucher", "RM Blucher farm property"]
  },
  "bone-creek": {
    description: "The RM of Bone Creek No. 108 is located in southern western Saskatchewan near Simmie, Illerbrun, and Instow. The nearest major centre is Swift Current, ~60 km. The municipality is served by Highway 13, Highway 343 and Highway 631, providing market access and transportation connections. The area falls within the dark brown soil zone, productive grain and oilseed land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Simmie", "Illerbrun", "Instow", "Scotsguard"],
    highways: ["Highway 13", "Highway 343", "Highway 631"],
    soilType: "Dark brown soil zone — productive grain and oilseed land",
    nearestCity: "Swift Current, ~60 km",
    keywords: ["farmland for sale RM Bone Creek", "agricultural land Simmie area", "Saskatchewan farmland RM Bone Creek", "RM Bone Creek farm property"]
  },
  "bratts-lake": {
    description: "The RM of Bratt's Lake No. 129 is located in southern Saskatchewan. The nearest major centre is Regina, ~32 km. The area falls within the dark brown soil zone, productive grain and oilseed land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Wilcox", "Corinne", "Estlin"],
    highways: ["Highway 6", "Highway 39"],
    soilType: "Dark brown soil zone — productive grain and oilseed land",
    nearestCity: "Regina, ~32 km",
    keywords: ["RM Bratt's Lake farmland for sale", "black soil grain belt", "south Saskatchewan premium farmland", "RM Bratt's Lake agricultural property"]
  },
  "britannia": {
    description: "The RM of Britannia No. 502 is located in northern western Saskatchewan near Statistics Canada. The nearest major centre is Lloydminster, ~32 km. The municipality is served by Highway 17, providing market access and transportation connections. The area falls within the dark grey/black soil zone, mixed grain and forage land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Statistics Canada"],
    highways: ["Highway 17"],
    soilType: "Dark grey/black soil zone — mixed grain and forage land",
    nearestCity: "Lloydminster, ~32 km",
    keywords: ["farmland for sale RM Britannia", "agricultural land Statistics Canada area", "Saskatchewan farmland RM Britannia", "RM Britannia farm property"]
  },
  "brock": {
    description: "The RM of Brock No. 64 is located in southern eastern Saskatchewan near Arcola, Kisbey, and Armilla. The nearest major centre is Estevan, ~65 km. The area falls within the brown soil zone, suited to grain and pulse crops. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Arcola", "Kisbey", "Armilla"],
    highways: [],
    soilType: "Brown soil zone — suited to grain and pulse crops",
    nearestCity: "Estevan, ~65 km",
    keywords: ["farmland for sale RM Brock", "agricultural land Arcola area", "Saskatchewan farmland RM Brock", "RM Brock farm property"]
  },
  "brokenshell": {
    description: "The RM of Brokenshell No. 68 is located in southern eastern Saskatchewan near Trossachs, Abbott, and Axford. The nearest major centre is Weyburn, ~28 km. The area falls within the brown soil zone, suited to grain and pulse crops. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Trossachs", "Abbott", "Axford", "Brightmore"],
    highways: [],
    soilType: "Brown soil zone — suited to grain and pulse crops",
    nearestCity: "Weyburn, ~28 km",
    keywords: ["farmland for sale RM Brokenshell", "agricultural land Trossachs area", "Saskatchewan farmland RM Brokenshell", "RM Brokenshell farm property"]
  },
  "buchanan": {
    description: "The RM of Buchanan No. 304 is located in central eastern Saskatchewan near Buchanan, Amsterdam, and Tadmore. The nearest major centre is Yorkton, ~59 km. The area falls within the black soil zone, excellent grain and canola land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Buchanan", "Amsterdam", "Tadmore", "Mitchellview"],
    highways: [],
    soilType: "Black soil zone — excellent grain and canola land",
    nearestCity: "Yorkton, ~59 km",
    keywords: ["farmland for sale RM Buchanan", "agricultural land Buchanan area", "Saskatchewan farmland RM Buchanan", "RM Buchanan farm property"]
  },
  "buckland": {
    description: "The RM of Buckland No. 491 is located in northern Saskatchewan near Alingly, Henribourg, and Little Red River IR #106C. The nearest major centre is Prince Albert, ~12 km. The municipality is served by Highway 2 and Highway 355, providing market access and transportation connections. The area falls within the dark grey/black soil zone, mixed grain and forage land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Alingly", "Henribourg", "Little Red River IR #106C", "Redwing"],
    highways: ["Highway 2", "Highway 355"],
    soilType: "Dark grey/black soil zone — mixed grain and forage land",
    nearestCity: "Prince Albert, ~12 km",
    keywords: ["farmland for sale RM Buckland", "agricultural land Alingly area", "Saskatchewan farmland RM Buckland", "RM Buckland farm property"]
  },
  "buffalo": {
    description: "The RM of Buffalo No. 409 is located in central western Saskatchewan near Wilkie, Bush, and Cloan. The nearest major centre is North Battleford, ~31 km. The area falls within the dark grey/black soil zone, mixed grain and forage land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Wilkie", "Bush", "Cloan", "Phippen"],
    highways: [],
    soilType: "Dark grey/black soil zone — mixed grain and forage land",
    nearestCity: "North Battleford, ~31 km",
    keywords: ["farmland for sale RM Buffalo", "agricultural land Wilkie area", "Saskatchewan farmland RM Buffalo", "RM Buffalo farm property"]
  },
  "calder": {
    description: "The RM of Calder No. 241 is located in central eastern Saskatchewan near Calder, Kessock, and Wroxton. The nearest major centre is Yorkton, ~51 km. The area falls within the black soil zone, excellent grain and canola land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Calder", "Kessock", "Wroxton"],
    highways: [],
    soilType: "Black soil zone — excellent grain and canola land",
    nearestCity: "Yorkton, ~51 km",
    keywords: ["farmland for sale RM Calder", "agricultural land Calder area", "Saskatchewan farmland RM Calder", "RM Calder farm property"]
  },
  "caledonia": {
    description: "The RM of Caledonia No. 99 is located in southern Saskatchewan near Milestone, Parry, and Dummer. The nearest major centre is Regina, ~62 km. The area falls within the dark brown soil zone, productive grain and oilseed land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Milestone", "Parry", "Dummer"],
    highways: [],
    soilType: "Dark brown soil zone — productive grain and oilseed land",
    nearestCity: "Regina, ~62 km",
    keywords: ["farmland for sale RM Caledonia", "agricultural land Milestone area", "Saskatchewan farmland RM Caledonia", "RM Caledonia farm property"]
  },
  "cambria": {
    description: "The RM of Cambria No. 6 is located in southern eastern Saskatchewan near Torquay, Marienthal, and Outram. The nearest major centre is Estevan, ~31 km. The area falls within the brown soil zone, suited to grain and pulse crops. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Torquay", "Marienthal", "Outram", "Rafferty"],
    highways: [],
    soilType: "Brown soil zone — suited to grain and pulse crops",
    nearestCity: "Estevan, ~31 km",
    keywords: ["farmland for sale RM Cambria", "agricultural land Torquay area", "Saskatchewan farmland RM Cambria", "RM Cambria farm property"]
  },
  "cana": {
    description: "The RM of Cana No. 214 is located in southern eastern Saskatchewan. The nearest major centre is Yorkton, ~30 km. The municipality is served by Highway 47, providing market access and transportation connections. The area falls within the black soil zone, excellent grain and canola land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Melville", "Fenwood"],
    highways: ["Highway 47"],
    soilType: "Black soil zone — excellent grain and canola land",
    nearestCity: "Yorkton, ~30 km",
    keywords: ["RM Cana farmland for sale", "grain belt property central Saskatchewan", "Humboldt area agricultural land", "RM Cana farming acreage"]
  },
  "canaan": {
    description: "The RM of Canaan No. 225 is located in southern Saskatchewan near Lucky Lake, Bernard, and Greenbrie. The nearest major centre is Swift Current, ~81 km. The municipality is served by Highway 42, Highway 45, Highway 373, Highway 646 and Highway 737, providing market access and transportation connections. The area falls within the black soil zone, excellent grain and canola land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Lucky Lake", "Bernard", "Greenbrie"],
    highways: ["Highway 42", "Highway 45", "Highway 373", "Highway 646", "Highway 737"],
    soilType: "Black soil zone — excellent grain and canola land",
    nearestCity: "Swift Current, ~81 km",
    keywords: ["farmland for sale RM Canaan", "agricultural land Lucky Lake area", "Saskatchewan farmland RM Canaan", "RM Canaan farm property"]
  },
  "canwood": {
    description: "The RM of Canwood No. 494 is located in northern Saskatchewan near Canwood, Debden, and Hawkeye. The nearest major centre is Prince Albert, ~76 km. The municipality is served by Highway 55, Highway 694 and Highway 793, providing market access and transportation connections. The area falls within the dark grey/black soil zone, mixed grain and forage land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Canwood", "Debden", "Hawkeye", "Mont Nebo"],
    highways: ["Highway 55", "Highway 694", "Highway 793"],
    soilType: "Dark grey/black soil zone — mixed grain and forage land",
    nearestCity: "Prince Albert, ~76 km",
    keywords: ["farmland for sale RM Canwood", "agricultural land Canwood area", "Saskatchewan farmland RM Canwood", "RM Canwood farm property"]
  },
  "caron": {
    description: "The RM of Caron No. 162 is located in southern Saskatchewan near Caronport and Caron. The nearest major centre is Moose Jaw, ~25 km. The municipality is served by Highway 1, providing market access and transportation connections. The area falls within the dark brown soil zone, productive grain and oilseed land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Caronport", "Caron"],
    highways: ["Highway 1"],
    soilType: "Dark brown soil zone — productive grain and oilseed land",
    nearestCity: "Moose Jaw, ~25 km",
    keywords: ["farmland for sale RM Caron", "agricultural land Caronport area", "Saskatchewan farmland RM Caron", "RM Caron farm property"]
  },
  "carmichael": {
    description: "The RM of Carmichael No. 109 is located in southern western Saskatchewan near Carmichael, Garden Head, and Stone. The nearest major centre is Swift Current, ~73 km. The municipality is served by Highway 1, providing market access and transportation connections. The area falls within the dark brown soil zone, productive grain and oilseed land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Carmichael", "Garden Head", "Stone"],
    highways: ["Highway 1"],
    soilType: "Dark brown soil zone — productive grain and oilseed land",
    nearestCity: "Swift Current, ~73 km",
    keywords: ["farmland for sale RM Carmichael", "agricultural land Carmichael area", "Saskatchewan farmland RM Carmichael", "RM Carmichael farm property"]
  },
  "chaplin": {
    description: "The RM of Chaplin No. 164 is located in southern Saskatchewan near Chaplin, Valjean, and Uren. The nearest major centre is Moose Jaw, ~77 km. The municipality is served by Highway 58, providing market access and transportation connections. The area falls within the dark brown soil zone, productive grain and oilseed land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Chaplin", "Valjean", "Uren"],
    highways: ["Highway 58"],
    soilType: "Dark brown soil zone — productive grain and oilseed land",
    nearestCity: "Moose Jaw, ~77 km",
    keywords: ["farmland for sale RM Chaplin", "agricultural land Chaplin area", "Saskatchewan farmland RM Chaplin", "RM Chaplin farm property"]
  },
  "chester": {
    description: "The RM of Chester No. 125 is located in southern eastern Saskatchewan near Glenavon, Peebles, and Baring. The nearest major centre is Weyburn, ~81 km. The area falls within the dark brown soil zone, productive grain and oilseed land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Glenavon", "Peebles", "Baring", "Windthorst"],
    highways: [],
    soilType: "Dark brown soil zone — productive grain and oilseed land",
    nearestCity: "Weyburn, ~81 km",
    keywords: ["farmland for sale RM Chester", "agricultural land Glenavon area", "Saskatchewan farmland RM Chester", "RM Chester farm property"]
  },
  "chesterfield": {
    description: "The RM of Chesterfield No. 261 is located in central western Saskatchewan near Eatonia, Mantario, and Laporte. The nearest major centre is Kindersley, ~60 km. The municipality is served by Highway 21, Highway 44 and Highway 635, providing market access and transportation connections. The area falls within the black soil zone, excellent grain and canola land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Eatonia", "Mantario", "Laporte", "Cuthbert"],
    highways: ["Highway 21", "Highway 44", "Highway 635"],
    soilType: "Black soil zone — excellent grain and canola land",
    nearestCity: "Kindersley, ~60 km",
    keywords: ["farmland for sale RM Chesterfield", "agricultural land Eatonia area", "Saskatchewan farmland RM Chesterfield", "RM Chesterfield farm property"]
  },
  "churchbridge": {
    description: "The RM of Churchbridge No. 211 is located in southern eastern Saskatchewan near Churchbridge and MacNutt. The nearest major centre is Yorkton, ~54 km. The area falls within the black soil zone, excellent grain and canola land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Churchbridge", "MacNutt"],
    highways: [],
    soilType: "Black soil zone — excellent grain and canola land",
    nearestCity: "Yorkton, ~54 km",
    keywords: ["farmland for sale RM Churchbridge", "agricultural land Churchbridge area", "Saskatchewan farmland RM Churchbridge", "RM Churchbridge farm property"]
  },
  "clayton": {
    description: "Clayton RM encompasses productive grain land in west-central Saskatchewan with strong agricultural foundation and established market access. The municipality's location provides good connectivity to Highway 16 and commodity networks. Black soil supports intensive grain production, particularly wheat and canola. Nearby communities provide local agricultural services while larger trading centers offer comprehensive support and commodity trading. Clayton attracts grain operators seeking reliable farmland with good infrastructure, proven soil conditions, and strong commodity market access in Saskatchewan's established grain belt.",
    towns: ["Norquay", "Hyas", "Stenen"],
    highways: ["Highway 16", "Highway 14"],
    soilType: "Black soil — grain land",
    nearestCity: "Biggar, 18 km",
    keywords: ["RM Clayton farmland for sale", "grain belt property west-central Saskatchewan", "Highway 16 agricultural land", "RM Clayton farming property"]
  },
  "clinworth": {
    description: "The RM of Clinworth No. 230 is located in southern western Saskatchewan near Sceptre, Lemsford, and Portreeve. The nearest major centre is Kindersley, ~53 km. The municipality is served by Highway 32 and Highway 649, providing market access and transportation connections. The area falls within the black soil zone, excellent grain and canola land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Sceptre", "Lemsford", "Portreeve"],
    highways: ["Highway 32", "Highway 649"],
    soilType: "Black soil zone — excellent grain and canola land",
    nearestCity: "Kindersley, ~53 km",
    keywords: ["farmland for sale RM Clinworth", "agricultural land Sceptre area", "Saskatchewan farmland RM Clinworth", "RM Clinworth farm property"]
  },
  "coalfields": {
    description: "The RM of Coalfields No. 4 is located in southern eastern Saskatchewan near Bienfait, Frobisher, and North Portal. The nearest major centre is Estevan, ~24 km. The municipality is served by Highway 18, Highway 39, Highway 604, Highway 605 and Highway 703, providing market access and transportation connections. The area falls within the brown soil zone, suited to grain and pulse crops. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Bienfait", "Frobisher", "North Portal", "Roche Percee"],
    highways: ["Highway 18", "Highway 39", "Highway 604", "Highway 605", "Highway 703"],
    soilType: "Brown soil zone — suited to grain and pulse crops",
    nearestCity: "Estevan, ~24 km",
    keywords: ["farmland for sale RM Coalfields", "agricultural land Bienfait area", "Saskatchewan farmland RM Coalfields", "RM Coalfields farm property"]
  },
  "colonsay": {
    description: "The RM of Colonsay No. 342 is located in central Saskatchewan near Colonsay, Meacham, and Arpiers. The nearest major centre is Saskatoon, ~53 km. The area falls within the black soil zone, excellent grain and canola land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Colonsay", "Meacham", "Arpiers", "Neely"],
    highways: [],
    soilType: "Black soil zone — excellent grain and canola land",
    nearestCity: "Saskatoon, ~53 km",
    keywords: ["farmland for sale RM Colonsay", "agricultural land Colonsay area", "Saskatchewan farmland RM Colonsay", "RM Colonsay farm property"]
  },
  "connaught": {
    description: "The RM of Connaught No. 457 is located in northern eastern Saskatchewan near Ridgedale, Armley, and Carlea. The nearest major centre is Melfort, ~49 km. The area falls within the dark grey/black soil zone, mixed grain and forage land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Ridgedale", "Armley", "Carlea", "Leacross"],
    highways: [],
    soilType: "Dark grey/black soil zone — mixed grain and forage land",
    nearestCity: "Melfort, ~49 km",
    keywords: ["farmland for sale RM Connaught", "agricultural land Ridgedale area", "Saskatchewan farmland RM Connaught", "RM Connaught farm property"]
  },
  "corman-park": {
    description: "The RM of Corman Park No. 344 is located in central Saskatchewan near Martensville, Saskatoon, and Warman. The nearest major centre is Saskatoon, ~12 km. The municipality is served by Highway 16 and Highway 219, providing market access and transportation connections. The area falls within the dark grey/black soil zone, mixed grain and forage land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Martensville", "Saskatoon", "Warman", "Dalmeny"],
    highways: ["Highway 16", "Highway 219"],
    soilType: "Dark grey/black soil zone — mixed grain and forage land",
    nearestCity: "Saskatoon, ~12 km",
    keywords: ["farmland for sale RM Corman Park", "agricultural land Martensville area", "Saskatchewan farmland RM Corman Park", "RM Corman Park farm property"]
  },
  "coteau": {
    description: "The RM of Coteau No. 255 is located in central Saskatchewan near Coteau Beach, Hitchcock Bay, and Birsay. The nearest major centre is Saskatoon, ~109 km. The municipality is served by Highway 44, Highway 45, Highway 373 and Highway 646, providing market access and transportation connections. The area falls within the black soil zone, excellent grain and canola land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Coteau Beach", "Hitchcock Bay", "Birsay", "Dunblane"],
    highways: ["Highway 44", "Highway 45", "Highway 373", "Highway 646"],
    soilType: "Black soil zone — excellent grain and canola land",
    nearestCity: "Saskatoon, ~109 km",
    keywords: ["farmland for sale RM Coteau", "agricultural land Coteau Beach area", "Saskatchewan farmland RM Coteau", "RM Coteau farm property"]
  },
  "coulee": {
    description: "The RM of Coulee No. 136 is located in southern Saskatchewan near Chortitz, Braddock, and Burnham. The nearest major centre is Swift Current, ~27 km. The municipality is served by Highway 363, Highway 609, Highway 721 and Highway 739, providing market access and transportation connections. The area falls within the dark brown soil zone, productive grain and oilseed land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Chortitz", "Braddock", "Burnham", "Hallonquist"],
    highways: ["Highway 363", "Highway 609", "Highway 721", "Highway 739"],
    soilType: "Dark brown soil zone — productive grain and oilseed land",
    nearestCity: "Swift Current, ~27 km",
    keywords: ["farmland for sale RM Coulee", "agricultural land Chortitz area", "Saskatchewan farmland RM Coulee", "RM Coulee farm property"]
  },
  "craik": {
    description: "The RM of Craik No. 222 is located in southern Saskatchewan near Craik and Aylesbury. The nearest major centre is Moose Jaw, ~53 km. The area falls within the black soil zone, excellent grain and canola land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Craik", "Aylesbury"],
    highways: [],
    soilType: "Black soil zone — excellent grain and canola land",
    nearestCity: "Moose Jaw, ~53 km",
    keywords: ["farmland for sale RM Craik", "agricultural land Craik area", "Saskatchewan farmland RM Craik", "RM Craik farm property"]
  },
  "cupar": {
    description: "The RM of Cupar No. 218 is located in southern eastern Saskatchewan near Southey, Cupar, and Markinch. The nearest major centre is Regina, ~49 km. The area falls within the black soil zone, excellent grain and canola land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Southey", "Cupar", "Markinch"],
    highways: [],
    soilType: "Black soil zone — excellent grain and canola land",
    nearestCity: "Regina, ~49 km",
    keywords: ["farmland for sale RM Cupar", "agricultural land Southey area", "Saskatchewan farmland RM Cupar", "RM Cupar farm property"]
  },
  "cut-knife": {
    description: "The RM of Cut Knife No. 439 is located in central western Saskatchewan near Cut Knife, Rockhaven, and Cutoff Junction. The nearest major centre is North Battleford, ~45 km. The municipality is served by Highway 21, Highway 40 and Highway 674, providing market access and transportation connections. The area falls within the dark grey/black soil zone, mixed grain and forage land. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Cut Knife", "Rockhaven", "Cutoff Junction", "Gallivan"],
    highways: ["Highway 21", "Highway 40", "Highway 674"],
    soilType: "Dark grey/black soil zone — mixed grain and forage land",
    nearestCity: "North Battleford, ~45 km",
    keywords: ["farmland for sale RM Cut Knife", "agricultural land Cut Knife area", "Saskatchewan farmland RM Cut Knife", "RM Cut Knife farm property"]
  },
  "cymri": {
    description: "The RM of Cymri No. 36 is located in southern eastern Saskatchewan near Midale, Halbrite, and Macoun. The nearest major centre is Weyburn, ~42 km. The area falls within the brown soil zone, suited to grain and pulse crops. The region supports a mix of grain, oilseed, and pulse crop operations, with local communities providing agricultural services and amenities to area producers.",
    towns: ["Midale", "Halbrite", "Macoun", "Blewett"],
    highways: [],
    soilType: "Brown soil zone — suited to grain and pulse crops",
    nearestCity: "Weyburn, ~42 km",
    keywords: ["farmland for sale RM Cymri", "agricultural land Midale area", "Saskatchewan farmland RM Cymri", "RM Cymri farm property"]
  }
};
