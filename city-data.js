var metroAreas = [
  // ALABAMA
  { name: "Birmingham", coords: [33.5186, -86.8104], score: 0.32, avgRent: 950, r: 18000 },
  { name: "Huntsville", coords: [34.7304, -86.5861], score: 0.35, avgRent: 1000, r: 15000 },
  { name: "Mobile", coords: [30.6954, -88.0399], score: 0.28, avgRent: 850, r: 14000 },
  { name: "Montgomery", coords: [32.3668, -86.3000], score: 0.30, avgRent: 900, r: 14000 },
  { name: "Tuscaloosa", coords: [33.2098, -87.5692], score: 0.32, avgRent: 950, r: 12000 },
  { name: "Hoover", coords: [33.4054, -86.8114], score: 0.42, avgRent: 1150, r: 10000 },
  // ALASKA
  { name: "Anchorage", coords: [61.2181, -149.9003], score: 0.55, avgRent: 1350, r: 20000 },
  { name: "Fairbanks", coords: [64.8378, -147.7164], score: 0.48, avgRent: 1200, r: 12000 },
  { name: "Juneau", coords: [58.3005, -134.4197], score: 0.52, avgRent: 1300, r: 10000 },
  { name: "Wasilla", coords: [61.5814, -149.4394], score: 0.45, avgRent: 1200, r: 10000 },
  { name: "Sitka", coords: [57.0531, -135.3300], score: 0.50, avgRent: 1300, r: 8000 },
  // ARIZONA
  { name: "Phoenix", coords: [33.4484, -112.0740], score: 0.52, avgRent: 1400, r: 30000 },
  { name: "Scottsdale", coords: [33.4942, -111.9261], score: 0.75, avgRent: 2000, r: 18000 },
  { name: "Tucson", coords: [32.2226, -110.9747], score: 0.38, avgRent: 1050, r: 22000 },
  { name: "Mesa", coords: [33.4152, -111.8315], score: 0.45, avgRent: 1250, r: 16000 },
  { name: "Tempe", coords: [33.4255, -111.9400], score: 0.50, avgRent: 1350, r: 12000 },
  { name: "Chandler", coords: [33.3062, -111.8413], score: 0.52, avgRent: 1400, r: 14000 },
  { name: "Gilbert", coords: [33.3528, -111.7890], score: 0.55, avgRent: 1500, r: 14000 },
  { name: "Flagstaff", coords: [35.1983, -111.6513], score: 0.50, avgRent: 1400, r: 10000 },
  // ARKANSAS
  { name: "Little Rock", coords: [34.7465, -92.2896], score: 0.30, avgRent: 900, r: 16000 },
  { name: "Fayetteville", coords: [36.0626, -94.1574], score: 0.33, avgRent: 950, r: 12000 },
  { name: "Fort Smith", coords: [35.3859, -94.3985], score: 0.25, avgRent: 750, r: 12000 },
  { name: "Jonesboro", coords: [35.8423, -90.7043], score: 0.28, avgRent: 800, r: 10000 },
  { name: "Springdale", coords: [36.1867, -94.1288], score: 0.30, avgRent: 850, r: 10000 },
  { name: "Rogers AR", coords: [36.3320, -94.1185], score: 0.32, avgRent: 900, r: 10000 },
  { name: "Conway AR", coords: [35.0887, -92.4421], score: 0.28, avgRent: 800, r: 8000 },
  // CALIFORNIA
  { name: "Los Angeles", coords: [34.0522, -118.2437], score: 0.85, avgRent: 2500, r: 35000 },
  { name: "Beverly Hills", coords: [34.0736, -118.4004], score: 0.97, avgRent: 3800, r: 8000 },
  { name: "South LA", coords: [33.9425, -118.2551], score: 0.55, avgRent: 1500, r: 12000 },
  { name: "East LA", coords: [34.0239, -118.1723], score: 0.50, avgRent: 1400, r: 10000 },
  { name: "San Fernando Valley", coords: [34.2011, -118.4754], score: 0.65, avgRent: 1900, r: 18000 },
  { name: "San Francisco", coords: [37.7749, -122.4194], score: 0.92, avgRent: 3200, r: 15000 },
  { name: "San Jose", coords: [37.3382, -121.8863], score: 0.88, avgRent: 2900, r: 20000 },
  { name: "San Diego", coords: [32.7157, -117.1611], score: 0.72, avgRent: 2200, r: 25000 },
  { name: "Sacramento", coords: [38.5816, -121.4944], score: 0.55, avgRent: 1550, r: 20000 },
  { name: "Fresno", coords: [36.7378, -119.7871], score: 0.38, avgRent: 1100, r: 16000 },
  { name: "Oakland", coords: [37.8044, -122.2712], score: 0.75, avgRent: 2300, r: 14000 },
  { name: "Riverside", coords: [33.9533, -117.3962], score: 0.48, avgRent: 1350, r: 18000 },
  { name: "Bakersfield", coords: [35.3733, -119.0187], score: 0.35, avgRent: 1050, r: 16000 },
  { name: "Stockton", coords: [37.9577, -121.2908], score: 0.40, avgRent: 1150, r: 14000 },
  { name: "Long Beach", coords: [33.7701, -118.1937], score: 0.68, avgRent: 2000, r: 16000 },
  { name: "Modesto", coords: [37.6391, -120.9969], score: 0.38, avgRent: 1100, r: 12000 },
  { name: "Santa Rosa", coords: [38.4404, -122.7141], score: 0.60, avgRent: 1700, r: 12000 },
  // COLORADO
  { name: "Denver", coords: [39.7392, -104.9903], score: 0.65, avgRent: 1800, r: 22000 },
  { name: "Colorado Springs", coords: [38.8339, -104.8214], score: 0.50, avgRent: 1400, r: 18000 },
  { name: "Boulder", coords: [40.0150, -105.2705], score: 0.78, avgRent: 2100, r: 10000 },
  { name: "Aurora", coords: [39.7294, -104.8319], score: 0.48, avgRent: 1350, r: 16000 },
  { name: "Fort Collins", coords: [40.5853, -105.0844], score: 0.55, avgRent: 1500, r: 14000 },
  { name: "Pueblo", coords: [38.2544, -104.6091], score: 0.32, avgRent: 900, r: 12000 },
  { name: "Lakewood CO", coords: [39.7047, -105.0814], score: 0.52, avgRent: 1450, r: 14000 },
  // CONNECTICUT
  { name: "Hartford", coords: [41.7658, -72.6734], score: 0.52, avgRent: 1350, r: 14000 },
  { name: "New Haven", coords: [41.3083, -72.9279], score: 0.55, avgRent: 1450, r: 12000 },
  { name: "Stamford", coords: [41.0534, -73.5387], score: 0.80, avgRent: 2400, r: 10000 },
  { name: "Bridgeport", coords: [41.1865, -73.1952], score: 0.48, avgRent: 1300, r: 12000 },
  { name: "Waterbury", coords: [41.5582, -73.0515], score: 0.42, avgRent: 1150, r: 10000 },
  // DELAWARE
  { name: "Wilmington", coords: [39.7391, -75.5398], score: 0.48, avgRent: 1250, r: 12000 },
  { name: "Dover", coords: [39.1582, -75.5244], score: 0.38, avgRent: 1050, r: 10000 },
  { name: "Newark DE", coords: [39.6837, -75.7497], score: 0.42, avgRent: 1150, r: 10000 },
  { name: "Middletown DE", coords: [39.4496, -75.7163], score: 0.35, avgRent: 1000, r: 8000 },
  { name: "Smyrna DE", coords: [39.2998, -75.6046], score: 0.32, avgRent: 950, r: 8000 },
  // FLORIDA
  { name: "Miami", coords: [25.7617, -80.1918], score: 0.78, avgRent: 2300, r: 25000 },
  { name: "Miami Beach", coords: [25.7907, -80.1300], score: 0.90, avgRent: 3000, r: 8000 },
  { name: "Little Havana", coords: [25.7653, -80.2291], score: 0.52, avgRent: 1400, r: 8000 },
  { name: "Orlando", coords: [28.5383, -81.3792], score: 0.55, avgRent: 1550, r: 22000 },
  { name: "Tampa", coords: [27.9506, -82.4572], score: 0.52, avgRent: 1500, r: 20000 },
  { name: "Jacksonville", coords: [30.3322, -81.6557], score: 0.42, avgRent: 1250, r: 22000 },
  { name: "Fort Lauderdale", coords: [26.1224, -80.1373], score: 0.68, avgRent: 2000, r: 16000 },
  { name: "St Petersburg", coords: [27.7676, -82.6403], score: 0.52, avgRent: 1450, r: 16000 },
  { name: "Tallahassee", coords: [30.4383, -84.2807], score: 0.40, avgRent: 1100, r: 14000 },
  { name: "Cape Coral", coords: [26.5629, -81.9495], score: 0.48, avgRent: 1350, r: 14000 },
  { name: "Gainesville FL", coords: [29.6516, -82.3248], score: 0.38, avgRent: 1050, r: 12000 },
  { name: "Pembroke Pines", coords: [26.0128, -80.2239], score: 0.58, avgRent: 1650, r: 12000 },
  { name: "Port St Lucie", coords: [27.2730, -80.3582], score: 0.42, avgRent: 1200, r: 14000 },
  // GEORGIA
  { name: "Atlanta", coords: [33.7490, -84.3880], score: 0.58, avgRent: 1600, r: 28000 },
  { name: "Buckhead", coords: [33.8384, -84.3791], score: 0.82, avgRent: 2400, r: 8000 },
  { name: "East Atlanta", coords: [33.7400, -84.3400], score: 0.45, avgRent: 1250, r: 10000 },
  { name: "Savannah", coords: [32.0809, -81.0912], score: 0.42, avgRent: 1200, r: 14000 },
  { name: "Augusta", coords: [33.4735, -81.9748], score: 0.30, avgRent: 900, r: 14000 },
  { name: "Columbus GA", coords: [32.4610, -84.9877], score: 0.30, avgRent: 900, r: 14000 },
  { name: "Macon", coords: [32.8407, -83.6324], score: 0.28, avgRent: 850, r: 12000 },
  { name: "Athens GA", coords: [33.9519, -83.3576], score: 0.38, avgRent: 1050, r: 10000 },
  { name: "Marietta", coords: [33.9526, -84.5499], score: 0.52, avgRent: 1400, r: 12000 },
  // HAWAII
  { name: "Honolulu", coords: [21.3069, -157.8583], score: 0.92, avgRent: 2800, r: 18000 },
  { name: "Kailua", coords: [21.4022, -157.7394], score: 0.85, avgRent: 2500, r: 10000 },
  { name: "Hilo", coords: [19.7241, -155.0868], score: 0.65, avgRent: 1700, r: 10000 },
  { name: "Kapolei", coords: [21.3350, -158.0581], score: 0.80, avgRent: 2400, r: 10000 },
  // IDAHO
  { name: "Boise", coords: [43.6150, -116.2023], score: 0.50, avgRent: 1350, r: 16000 },
  { name: "Idaho Falls", coords: [43.4917, -112.0339], score: 0.38, avgRent: 1000, r: 10000 },
  { name: "Nampa", coords: [43.5407, -116.5635], score: 0.42, avgRent: 1150, r: 12000 },
  { name: "Meridian", coords: [43.6121, -116.3915], score: 0.48, avgRent: 1300, r: 12000 },
  { name: "Coeur d Alene", coords: [47.6777, -116.7805], score: 0.52, avgRent: 1400, r: 10000 },
  { name: "Twin Falls", coords: [42.5558, -114.4601], score: 0.35, avgRent: 1000, r: 10000 },
  { name: "Pocatello", coords: [42.8713, -112.4455], score: 0.32, avgRent: 900, r: 10000 },
  // ILLINOIS
  { name: "Chicago", coords: [41.8781, -87.6298], score: 0.62, avgRent: 1750, r: 30000 },
  { name: "Lincoln Park", coords: [41.9214, -87.6513], score: 0.80, avgRent: 2300, r: 8000 },
  { name: "South Side Chicago", coords: [41.7800, -87.6150], score: 0.35, avgRent: 950, r: 15000 },
  { name: "West Loop Chicago", coords: [41.8827, -87.6555], score: 0.82, avgRent: 2400, r: 8000 },
  { name: "Springfield IL", coords: [39.7817, -89.6501], score: 0.30, avgRent: 850, r: 14000 },
  { name: "Rockford", coords: [42.2711, -89.0940], score: 0.28, avgRent: 800, r: 12000 },
  { name: "Naperville", coords: [41.7508, -88.1535], score: 0.68, avgRent: 1900, r: 12000 },
  { name: "Peoria IL", coords: [40.6936, -89.5890], score: 0.30, avgRent: 850, r: 12000 },
  { name: "Champaign", coords: [40.1164, -88.2434], score: 0.35, avgRent: 950, r: 10000 },
  { name: "Joliet", coords: [41.5250, -88.0817], score: 0.40, avgRent: 1100, r: 12000 },
  // INDIANA
  { name: "Indianapolis", coords: [39.7684, -86.1581], score: 0.38, avgRent: 1050, r: 22000 },
  { name: "Fort Wayne", coords: [41.0793, -85.1394], score: 0.30, avgRent: 850, r: 14000 },
  { name: "South Bend", coords: [41.6764, -86.2520], score: 0.28, avgRent: 800, r: 12000 },
  { name: "Evansville", coords: [37.9716, -87.5711], score: 0.30, avgRent: 850, r: 14000 },
  { name: "Carmel IN", coords: [39.9784, -86.1180], score: 0.60, avgRent: 1650, r: 12000 },
  { name: "Bloomington IN", coords: [39.1653, -86.5264], score: 0.38, avgRent: 1050, r: 10000 },
  { name: "Lafayette IN", coords: [40.4167, -86.8753], score: 0.32, avgRent: 900, r: 10000 },
  // IOWA
  { name: "Des Moines", coords: [41.5868, -93.6250], score: 0.35, avgRent: 1000, r: 16000 },
  { name: "Cedar Rapids", coords: [41.9779, -91.6656], score: 0.32, avgRent: 900, r: 12000 },
  { name: "Iowa City", coords: [41.6611, -91.5302], score: 0.40, avgRent: 1100, r: 10000 },
  { name: "Davenport", coords: [41.5236, -90.5776], score: 0.32, avgRent: 900, r: 12000 },
  { name: "Sioux City", coords: [42.4963, -96.4049], score: 0.30, avgRent: 850, r: 12000 },
  // KANSAS
  { name: "Wichita", coords: [37.6872, -97.3301], score: 0.30, avgRent: 850, r: 16000 },
  { name: "Kansas City KS", coords: [39.1142, -94.6275], score: 0.35, avgRent: 1000, r: 14000 },
  { name: "Topeka", coords: [39.0473, -95.6752], score: 0.28, avgRent: 800, r: 12000 },
  { name: "Overland Park", coords: [38.9822, -94.6708], score: 0.52, avgRent: 1400, r: 14000 },
  { name: "Lawrence KS", coords: [38.9717, -95.2353], score: 0.42, avgRent: 1100, r: 10000 },
  // KENTUCKY
  { name: "Louisville", coords: [38.2527, -85.7585], score: 0.35, avgRent: 1000, r: 18000 },
  { name: "Lexington", coords: [38.0406, -84.5037], score: 0.38, avgRent: 1050, r: 14000 },
  { name: "Bowling Green KY", coords: [36.9685, -86.4808], score: 0.30, avgRent: 850, r: 10000 },
  { name: "Covington KY", coords: [39.0837, -84.5086], score: 0.40, avgRent: 1100, r: 8000 },
  { name: "Owensboro", coords: [37.7719, -87.1112], score: 0.30, avgRent: 850, r: 10000 },
  // LOUISIANA
  { name: "New Orleans", coords: [29.9511, -90.0715], score: 0.48, avgRent: 1300, r: 20000 },
  { name: "Baton Rouge", coords: [30.4515, -91.1871], score: 0.38, avgRent: 1050, r: 16000 },
  { name: "Shreveport", coords: [32.5252, -93.7502], score: 0.28, avgRent: 800, r: 14000 },
  { name: "Lafayette LA", coords: [30.2241, -92.0198], score: 0.35, avgRent: 950, r: 12000 },
  { name: "Lake Charles", coords: [30.2266, -93.2174], score: 0.30, avgRent: 850, r: 10000 },
  // MAINE
  { name: "Portland ME", coords: [43.6591, -70.2568], score: 0.58, avgRent: 1600, r: 10000 },
  { name: "Bangor", coords: [44.8016, -68.7712], score: 0.38, avgRent: 1050, r: 10000 },
  { name: "Lewiston", coords: [44.1004, -70.2148], score: 0.35, avgRent: 1000, r: 8000 },
  { name: "Biddeford", coords: [43.4926, -70.4534], score: 0.42, avgRent: 1150, r: 8000 },
  { name: "Augusta ME", coords: [44.3106, -69.7795], score: 0.38, avgRent: 1050, r: 8000 },
  // MARYLAND
  { name: "Baltimore", coords: [39.2904, -76.6122], score: 0.50, avgRent: 1400, r: 20000 },
  { name: "Bethesda", coords: [38.9847, -77.0947], score: 0.88, avgRent: 2700, r: 10000 },
  { name: "Silver Spring", coords: [38.9907, -77.0261], score: 0.62, avgRent: 1800, r: 10000 },
  { name: "Frederick MD", coords: [39.4143, -77.4105], score: 0.50, avgRent: 1400, r: 10000 },
  { name: "Rockville", coords: [39.0840, -77.1528], score: 0.72, avgRent: 2100, r: 10000 },
  // MASSACHUSETTS
  { name: "Boston", coords: [42.3601, -71.0589], score: 0.82, avgRent: 2800, r: 18000 },
  { name: "Cambridge", coords: [42.3736, -71.1097], score: 0.85, avgRent: 3000, r: 10000 },
  { name: "Worcester", coords: [42.2626, -71.8023], score: 0.48, avgRent: 1350, r: 14000 },
  { name: "Springfield MA", coords: [42.1015, -72.5898], score: 0.38, avgRent: 1100, r: 12000 },
  { name: "Lowell", coords: [42.6334, -71.3162], score: 0.45, avgRent: 1250, r: 10000 },
  { name: "New Bedford", coords: [41.6362, -70.9342], score: 0.38, avgRent: 1100, r: 10000 },
  { name: "Brockton", coords: [42.0834, -71.0184], score: 0.42, avgRent: 1200, r: 10000 },
  // MICHIGAN
  { name: "Detroit", coords: [42.3314, -83.0458], score: 0.32, avgRent: 950, r: 25000 },
  { name: "Grand Rapids", coords: [42.9634, -85.6681], score: 0.40, avgRent: 1150, r: 14000 },
  { name: "Ann Arbor", coords: [42.2808, -83.7430], score: 0.58, avgRent: 1550, r: 10000 },
  { name: "Lansing", coords: [42.7325, -84.5555], score: 0.32, avgRent: 900, r: 12000 },
  { name: "Flint", coords: [43.0125, -83.6875], score: 0.25, avgRent: 750, r: 12000 },
  { name: "Kalamazoo", coords: [42.2917, -85.5872], score: 0.35, avgRent: 1000, r: 12000 },
  { name: "Sterling Heights", coords: [42.5803, -83.0302], score: 0.45, avgRent: 1250, r: 12000 },
  { name: "Warren MI", coords: [42.4775, -83.0277], score: 0.40, avgRent: 1100, r: 12000 },
  // MINNESOTA
  { name: "Minneapolis", coords: [44.9778, -93.2650], score: 0.55, avgRent: 1500, r: 18000 },
  { name: "St Paul", coords: [44.9537, -93.0900], score: 0.48, avgRent: 1300, r: 16000 },
  { name: "Rochester MN", coords: [44.0121, -92.4802], score: 0.45, avgRent: 1200, r: 12000 },
  { name: "Duluth", coords: [46.7867, -92.1005], score: 0.40, avgRent: 1100, r: 12000 },
  { name: "Bloomington MN", coords: [44.8408, -93.2983], score: 0.55, avgRent: 1500, r: 12000 },
  { name: "Plymouth MN", coords: [45.0105, -93.4555], score: 0.58, avgRent: 1600, r: 10000 },
  // MISSISSIPPI
  { name: "Jackson MS", coords: [32.2988, -90.1848], score: 0.25, avgRent: 800, r: 16000 },
  { name: "Gulfport", coords: [30.3674, -89.0928], score: 0.28, avgRent: 850, r: 12000 },
  { name: "Hattiesburg", coords: [31.3271, -89.2903], score: 0.22, avgRent: 750, r: 10000 },
  { name: "Biloxi", coords: [30.3960, -88.8853], score: 0.30, avgRent: 900, r: 10000 },
  { name: "Tupelo", coords: [34.2576, -88.7034], score: 0.25, avgRent: 800, r: 8000 },
  { name: "Meridian MS", coords: [32.3643, -88.7037], score: 0.22, avgRent: 700, r: 8000 },
  // MISSOURI
  { name: "Kansas City MO", coords: [39.0997, -94.5786], score: 0.42, avgRent: 1150, r: 22000 },
  { name: "St Louis", coords: [38.6270, -90.1994], score: 0.38, avgRent: 1050, r: 22000 },
  { name: "Columbia MO", coords: [38.9517, -92.3341], score: 0.35, avgRent: 950, r: 10000 },
  { name: "Springfield MO", coords: [37.2090, -93.2923], score: 0.30, avgRent: 850, r: 14000 },
  { name: "Independence MO", coords: [39.0911, -94.4155], score: 0.35, avgRent: 1000, r: 12000 },
  { name: "Lee Summit", coords: [38.9108, -94.3822], score: 0.45, avgRent: 1200, r: 10000 },
  // MONTANA
  { name: "Billings", coords: [45.7833, -108.5007], score: 0.42, avgRent: 1100, r: 12000 },
  { name: "Missoula", coords: [46.8721, -113.9940], score: 0.50, avgRent: 1350, r: 10000 },
  { name: "Great Falls", coords: [47.5002, -111.3008], score: 0.35, avgRent: 950, r: 10000 },
  { name: "Bozeman", coords: [45.6770, -111.0429], score: 0.65, avgRent: 1800, r: 10000 },
  { name: "Helena", coords: [46.5958, -112.0270], score: 0.42, avgRent: 1100, r: 8000 },
  // NEBRASKA
  { name: "Omaha", coords: [41.2565, -95.9345], score: 0.38, avgRent: 1050, r: 18000 },
  { name: "Lincoln NE", coords: [40.8136, -96.7026], score: 0.35, avgRent: 950, r: 14000 },
  { name: "Grand Island", coords: [40.9264, -98.3420], score: 0.28, avgRent: 800, r: 10000 },
  { name: "Bellevue NE", coords: [41.1544, -95.8908], score: 0.38, avgRent: 1050, r: 10000 },
  // NEVADA
  { name: "Las Vegas", coords: [36.1699, -115.1398], score: 0.52, avgRent: 1450, r: 28000 },
  { name: "Reno", coords: [39.5296, -119.8138], score: 0.55, avgRent: 1500, r: 14000 },
  { name: "Henderson", coords: [36.0395, -114.9817], score: 0.55, avgRent: 1550, r: 14000 },
  { name: "North Las Vegas", coords: [36.1989, -115.1175], score: 0.42, avgRent: 1200, r: 14000 },
  { name: "Sparks NV", coords: [39.5349, -119.7527], score: 0.48, avgRent: 1350, r: 10000 },
  // NEW HAMPSHIRE
  { name: "Manchester NH", coords: [42.9956, -71.4548], score: 0.52, avgRent: 1450, r: 10000 },
  { name: "Nashua", coords: [42.7654, -71.4676], score: 0.55, avgRent: 1550, r: 10000 },
  { name: "Concord NH", coords: [43.2081, -71.5376], score: 0.48, avgRent: 1300, r: 8000 },
  { name: "Portsmouth NH", coords: [43.0718, -70.7626], score: 0.62, avgRent: 1750, r: 8000 },
  { name: "Dover NH", coords: [43.1979, -70.8737], score: 0.48, avgRent: 1350, r: 8000 },
  // NEW JERSEY
  { name: "Newark", coords: [40.7357, -74.1724], score: 0.55, avgRent: 1500, r: 14000 },
  { name: "Jersey City", coords: [40.7178, -74.0431], score: 0.72, avgRent: 2200, r: 10000 },
  { name: "Trenton", coords: [40.2171, -74.7429], score: 0.42, avgRent: 1200, r: 10000 },
  { name: "Paterson", coords: [40.9168, -74.1718], score: 0.48, avgRent: 1350, r: 10000 },
  { name: "Elizabeth NJ", coords: [40.6640, -74.2107], score: 0.50, avgRent: 1400, r: 10000 },
  { name: "Edison NJ", coords: [40.5187, -74.4121], score: 0.58, avgRent: 1600, r: 10000 },
  // NEW MEXICO
  { name: "Albuquerque", coords: [35.0844, -106.6504], score: 0.40, avgRent: 1100, r: 20000 },
  { name: "Santa Fe", coords: [35.6870, -105.9378], score: 0.58, avgRent: 1550, r: 10000 },
  { name: "Las Cruces", coords: [32.3199, -106.7637], score: 0.32, avgRent: 900, r: 12000 },
  { name: "Rio Rancho", coords: [35.2334, -106.6646], score: 0.38, avgRent: 1050, r: 12000 },
  { name: "Roswell NM", coords: [33.3943, -104.5230], score: 0.28, avgRent: 800, r: 10000 },
  // NEW YORK
  { name: "Manhattan", coords: [40.7831, -73.9712], score: 0.95, avgRent: 3500, r: 12000 },
  { name: "Brooklyn", coords: [40.6782, -73.9442], score: 0.80, avgRent: 2600, r: 15000 },
  { name: "Bronx", coords: [40.8448, -73.8648], score: 0.55, avgRent: 1500, r: 12000 },
  { name: "Queens", coords: [40.7282, -73.7949], score: 0.62, avgRent: 1900, r: 15000 },
  { name: "Staten Island", coords: [40.5795, -74.1502], score: 0.52, avgRent: 1450, r: 12000 },
  { name: "Buffalo", coords: [42.8864, -78.8784], score: 0.35, avgRent: 1000, r: 14000 },
  { name: "Rochester NY", coords: [43.1566, -77.6088], score: 0.35, avgRent: 1000, r: 14000 },
  { name: "Syracuse", coords: [43.0481, -76.1474], score: 0.33, avgRent: 950, r: 12000 },
  { name: "Albany NY", coords: [42.6526, -73.7562], score: 0.42, avgRent: 1200, r: 14000 },
  { name: "Yonkers", coords: [40.9312, -73.8988], score: 0.62, avgRent: 1800, r: 12000 },
  { name: "White Plains", coords: [41.0340, -73.7629], score: 0.72, avgRent: 2100, r: 10000 },
  { name: "New Rochelle", coords: [40.9115, -73.7824], score: 0.65, avgRent: 1850, r: 10000 },
  // NORTH CAROLINA
  { name: "Charlotte", coords: [35.2271, -80.8431], score: 0.52, avgRent: 1450, r: 22000 },
  { name: "Raleigh", coords: [35.7796, -78.6382], score: 0.55, avgRent: 1500, r: 18000 },
  { name: "Durham", coords: [35.9940, -78.8986], score: 0.48, avgRent: 1350, r: 14000 },
  { name: "Greensboro", coords: [36.0726, -79.7920], score: 0.38, avgRent: 1050, r: 14000 },
  { name: "Winston-Salem", coords: [36.0999, -80.2442], score: 0.38, avgRent: 1050, r: 14000 },
  { name: "Fayetteville NC", coords: [35.0527, -78.8784], score: 0.32, avgRent: 950, r: 14000 },
  { name: "Asheville", coords: [35.5951, -82.5515], score: 0.55, avgRent: 1500, r: 12000 },
  { name: "Wilmington NC", coords: [34.2257, -77.9447], score: 0.48, avgRent: 1350, r: 12000 },
  { name: "Cary NC", coords: [35.7915, -78.7811], score: 0.58, avgRent: 1550, r: 10000 },
  // NORTH DAKOTA
  { name: "Fargo", coords: [46.8772, -96.7898], score: 0.38, avgRent: 1050, r: 12000 },
  { name: "Bismarck", coords: [46.8083, -100.7837], score: 0.38, avgRent: 1000, r: 10000 },
  { name: "Grand Forks", coords: [47.9253, -97.0329], score: 0.35, avgRent: 950, r: 10000 },
  { name: "Minot", coords: [48.2330, -101.2923], score: 0.35, avgRent: 950, r: 10000 },
  // OHIO
  { name: "Columbus OH", coords: [39.9612, -82.9988], score: 0.42, avgRent: 1150, r: 20000 },
  { name: "Cleveland", coords: [41.4993, -81.6944], score: 0.35, avgRent: 1000, r: 18000 },
  { name: "Cincinnati", coords: [39.1031, -84.5120], score: 0.40, avgRent: 1100, r: 18000 },
  { name: "Dayton", coords: [39.7589, -84.1916], score: 0.28, avgRent: 800, r: 14000 },
  { name: "Toledo", coords: [41.6528, -83.5379], score: 0.30, avgRent: 850, r: 14000 },
  { name: "Akron", coords: [41.0814, -81.5190], score: 0.30, avgRent: 850, r: 14000 },
  { name: "Canton OH", coords: [40.7989, -81.3784], score: 0.28, avgRent: 800, r: 10000 },
  { name: "Youngstown", coords: [41.0998, -80.6495], score: 0.22, avgRent: 700, r: 10000 },
  // OKLAHOMA
  { name: "Oklahoma City", coords: [35.4676, -97.5164], score: 0.32, avgRent: 950, r: 22000 },
  { name: "Tulsa", coords: [36.1540, -95.9928], score: 0.32, avgRent: 900, r: 18000 },
  { name: "Norman", coords: [35.2226, -97.4395], score: 0.35, avgRent: 950, r: 10000 },
  { name: "Broken Arrow", coords: [36.0609, -95.7975], score: 0.35, avgRent: 1000, r: 10000 },
  { name: "Edmond", coords: [35.6528, -97.4781], score: 0.42, avgRent: 1150, r: 10000 },
  { name: "Lawton", coords: [34.6036, -98.3959], score: 0.28, avgRent: 800, r: 10000 },
  // OREGON
  { name: "Portland OR", coords: [45.5152, -122.6784], score: 0.62, avgRent: 1700, r: 20000 },
  { name: "Eugene", coords: [44.0521, -123.0868], score: 0.50, avgRent: 1350, r: 12000 },
  { name: "Salem OR", coords: [44.9429, -123.0351], score: 0.42, avgRent: 1200, r: 12000 },
  { name: "Bend", coords: [44.0582, -121.3153], score: 0.62, avgRent: 1750, r: 10000 },
  { name: "Medford", coords: [42.3265, -122.8756], score: 0.45, avgRent: 1250, r: 12000 },
  // PENNSYLVANIA
  { name: "Philadelphia", coords: [39.9526, -75.1652], score: 0.55, avgRent: 1500, r: 22000 },
  { name: "Pittsburgh", coords: [40.4406, -79.9959], score: 0.45, avgRent: 1250, r: 18000 },
  { name: "Allentown", coords: [40.6084, -75.4902], score: 0.40, avgRent: 1100, r: 12000 },
  { name: "Harrisburg", coords: [40.2732, -76.8867], score: 0.35, avgRent: 1000, r: 10000 },
  { name: "Erie PA", coords: [42.1292, -80.0851], score: 0.30, avgRent: 850, r: 12000 },
  { name: "Reading PA", coords: [40.3357, -75.9269], score: 0.35, avgRent: 950, r: 10000 },
  { name: "Scranton", coords: [41.4090, -75.6624], score: 0.32, avgRent: 900, r: 10000 },
  { name: "Bethlehem PA", coords: [40.6259, -75.3705], score: 0.42, avgRent: 1150, r: 10000 },
  // RHODE ISLAND
  { name: "Providence", coords: [41.8240, -71.4128], score: 0.52, avgRent: 1450, r: 12000 },
  { name: "Warwick", coords: [41.7001, -71.4162], score: 0.48, avgRent: 1300, r: 10000 },
  { name: "Cranston", coords: [41.7798, -71.4373], score: 0.48, avgRent: 1350, r: 10000 },
  { name: "Pawtucket", coords: [41.8787, -71.3826], score: 0.45, avgRent: 1250, r: 8000 },
  // SOUTH CAROLINA
  { name: "Charleston SC", coords: [32.7765, -79.9311], score: 0.55, avgRent: 1550, r: 16000 },
  { name: "Columbia SC", coords: [34.0007, -81.0348], score: 0.38, avgRent: 1050, r: 16000 },
  { name: "Greenville SC", coords: [34.8526, -82.3940], score: 0.40, avgRent: 1100, r: 14000 },
  { name: "Myrtle Beach", coords: [33.6891, -78.8867], score: 0.48, avgRent: 1350, r: 14000 },
  { name: "North Charleston", coords: [32.8546, -79.9748], score: 0.38, avgRent: 1050, r: 12000 },
  // SOUTH DAKOTA
  { name: "Sioux Falls", coords: [43.5460, -96.7313], score: 0.38, avgRent: 1050, r: 14000 },
  { name: "Rapid City", coords: [44.0805, -103.2310], score: 0.38, avgRent: 1000, r: 10000 },
  { name: "Aberdeen SD", coords: [45.4647, -98.4865], score: 0.30, avgRent: 850, r: 8000 },
  { name: "Brookings", coords: [44.3114, -96.7984], score: 0.35, avgRent: 950, r: 8000 },
  // TENNESSEE
  { name: "Nashville", coords: [36.1627, -86.7816], score: 0.55, avgRent: 1550, r: 22000 },
  { name: "Memphis", coords: [35.1495, -90.0490], score: 0.35, avgRent: 1000, r: 22000 },
  { name: "Knoxville", coords: [35.9606, -83.9207], score: 0.38, avgRent: 1050, r: 14000 },
  { name: "Chattanooga", coords: [35.0456, -85.3097], score: 0.38, avgRent: 1050, r: 12000 },
  { name: "Franklin TN", coords: [35.9251, -86.8689], score: 0.62, avgRent: 1750, r: 10000 },
  { name: "Jackson TN", coords: [35.6145, -88.8139], score: 0.28, avgRent: 800, r: 10000 },
  { name: "Clarksville TN", coords: [36.5298, -87.3595], score: 0.35, avgRent: 1000, r: 14000 },
  { name: "Murfreesboro", coords: [35.8456, -86.3903], score: 0.42, avgRent: 1150, r: 14000 },
  // TEXAS
  { name: "Houston", coords: [29.7604, -95.3698], score: 0.50, avgRent: 1350, r: 35000 },
  { name: "River Oaks Houston", coords: [29.7548, -95.4270], score: 0.88, avgRent: 2800, r: 8000 },
  { name: "Third Ward Houston", coords: [29.7213, -95.3547], score: 0.32, avgRent: 900, r: 8000 },
  { name: "Dallas", coords: [32.7767, -96.7970], score: 0.55, avgRent: 1500, r: 30000 },
  { name: "Highland Park Dallas", coords: [32.8335, -96.7920], score: 0.90, avgRent: 3000, r: 8000 },
  { name: "South Dallas", coords: [32.7300, -96.7700], score: 0.30, avgRent: 850, r: 10000 },
  { name: "San Antonio", coords: [29.4241, -98.4936], score: 0.40, avgRent: 1100, r: 28000 },
  { name: "Austin", coords: [30.2672, -97.7431], score: 0.62, avgRent: 1750, r: 22000 },
  { name: "Fort Worth", coords: [32.7555, -97.3308], score: 0.42, avgRent: 1200, r: 20000 },
  { name: "El Paso", coords: [31.7619, -106.4850], score: 0.32, avgRent: 900, r: 20000 },
  { name: "Arlington TX", coords: [32.7357, -97.1081], score: 0.42, avgRent: 1200, r: 18000 },
  { name: "Plano", coords: [33.0198, -96.6989], score: 0.60, avgRent: 1700, r: 14000 },
  { name: "Corpus Christi", coords: [27.8006, -97.3964], score: 0.35, avgRent: 1000, r: 16000 },
  { name: "Laredo", coords: [27.5036, -99.5076], score: 0.30, avgRent: 900, r: 14000 },
  { name: "Lubbock", coords: [33.5779, -101.8552], score: 0.30, avgRent: 900, r: 14000 },
  { name: "Amarillo", coords: [35.2220, -101.8313], score: 0.30, avgRent: 900, r: 12000 },
  { name: "McKinney TX", coords: [33.1972, -96.6397], score: 0.55, avgRent: 1500, r: 12000 },
  { name: "Frisco TX", coords: [33.1507, -96.8236], score: 0.62, avgRent: 1750, r: 12000 },
  { name: "Brownsville", coords: [25.9017, -97.4975], score: 0.28, avgRent: 800, r: 12000 },
  { name: "Midland TX", coords: [31.9973, -102.0779], score: 0.40, avgRent: 1100, r: 10000 },
  // UTAH
  { name: "Salt Lake City", coords: [40.7608, -111.8910], score: 0.52, avgRent: 1400, r: 18000 },
  { name: "Provo", coords: [40.2338, -111.6585], score: 0.48, avgRent: 1300, r: 12000 },
  { name: "Ogden", coords: [41.2230, -111.9738], score: 0.40, avgRent: 1100, r: 12000 },
  { name: "West Jordan", coords: [40.6097, -111.9391], score: 0.45, avgRent: 1250, r: 10000 },
  { name: "St George UT", coords: [37.0965, -113.5684], score: 0.48, avgRent: 1350, r: 10000 },
  { name: "Sandy UT", coords: [40.5649, -111.8590], score: 0.50, avgRent: 1400, r: 10000 },
  // VERMONT
  { name: "Burlington VT", coords: [44.4759, -73.2121], score: 0.58, avgRent: 1600, r: 8000 },
  { name: "Montpelier", coords: [44.2601, -72.5754], score: 0.52, avgRent: 1400, r: 8000 },
  { name: "Rutland", coords: [43.6106, -72.9726], score: 0.42, avgRent: 1150, r: 8000 },
  { name: "South Burlington", coords: [44.4669, -73.1710], score: 0.55, avgRent: 1550, r: 8000 },
  // VIRGINIA
  { name: "Virginia Beach", coords: [36.8529, -75.9780], score: 0.52, avgRent: 1450, r: 18000 },
  { name: "Richmond", coords: [37.5407, -77.4360], score: 0.48, avgRent: 1300, r: 16000 },
  { name: "Arlington VA", coords: [38.8816, -77.0910], score: 0.80, avgRent: 2400, r: 10000 },
  { name: "Norfolk", coords: [36.8508, -76.2859], score: 0.42, avgRent: 1150, r: 14000 },
  { name: "Chesapeake VA", coords: [36.7682, -76.2875], score: 0.45, avgRent: 1250, r: 14000 },
  { name: "Alexandria VA", coords: [38.8048, -77.0469], score: 0.78, avgRent: 2200, r: 10000 },
  { name: "Newport News", coords: [37.0871, -76.4730], score: 0.38, avgRent: 1050, r: 14000 },
  { name: "Charlottesville", coords: [38.0293, -78.4767], score: 0.52, avgRent: 1400, r: 10000 },
  { name: "Roanoke", coords: [37.2710, -79.9414], score: 0.35, avgRent: 1000, r: 12000 },
  { name: "Lynchburg", coords: [37.4138, -79.1422], score: 0.32, avgRent: 900, r: 10000 },
  // WASHINGTON
  { name: "Seattle", coords: [47.6062, -122.3321], score: 0.78, avgRent: 2200, r: 20000 },
  { name: "Capitol Hill Seattle", coords: [47.6253, -122.3222], score: 0.82, avgRent: 2400, r: 8000 },
  { name: "South Seattle", coords: [47.5400, -122.3200], score: 0.55, avgRent: 1500, r: 10000 },
  { name: "Tacoma", coords: [47.2529, -122.4443], score: 0.48, avgRent: 1350, r: 16000 },
  { name: "Spokane", coords: [47.6588, -117.4260], score: 0.40, avgRent: 1100, r: 14000 },
  { name: "Vancouver WA", coords: [45.6387, -122.6615], score: 0.50, avgRent: 1400, r: 14000 },
  { name: "Bellevue WA", coords: [47.6101, -122.2015], score: 0.85, avgRent: 2600, r: 12000 },
  { name: "Olympia", coords: [47.0379, -122.9007], score: 0.48, avgRent: 1350, r: 10000 },
  { name: "Everett WA", coords: [47.9790, -122.2021], score: 0.50, avgRent: 1400, r: 12000 },
  { name: "Kennewick", coords: [46.2112, -119.1372], score: 0.40, avgRent: 1100, r: 10000 },
  // WEST VIRGINIA
  { name: "Charleston WV", coords: [38.3498, -81.6326], score: 0.28, avgRent: 800, r: 12000 },
  { name: "Huntington WV", coords: [38.4192, -82.4452], score: 0.25, avgRent: 750, r: 10000 },
  { name: "Morgantown", coords: [39.6295, -79.9559], score: 0.35, avgRent: 950, r: 8000 },
  { name: "Wheeling WV", coords: [40.0640, -80.7209], score: 0.25, avgRent: 700, r: 8000 },
  { name: "Parkersburg", coords: [39.2667, -81.5615], score: 0.25, avgRent: 700, r: 8000 },
  // WISCONSIN
  { name: "Milwaukee", coords: [43.0389, -87.9065], score: 0.42, avgRent: 1150, r: 18000 },
  { name: "Madison WI", coords: [43.0731, -89.4012], score: 0.52, avgRent: 1400, r: 14000 },
  { name: "Green Bay", coords: [44.5133, -88.0133], score: 0.35, avgRent: 950, r: 12000 },
  { name: "Kenosha", coords: [42.5847, -87.8212], score: 0.38, avgRent: 1050, r: 10000 },
  { name: "Racine", coords: [42.7261, -87.7829], score: 0.35, avgRent: 950, r: 10000 },
  { name: "Appleton WI", coords: [44.2619, -88.4154], score: 0.38, avgRent: 1000, r: 10000 },
  { name: "Eau Claire", coords: [44.8113, -91.4985], score: 0.35, avgRent: 950, r: 10000 },
  { name: "Oshkosh", coords: [44.0247, -88.5426], score: 0.32, avgRent: 900, r: 8000 },
  // WYOMING
  { name: "Cheyenne", coords: [41.1400, -104.8202], score: 0.38, avgRent: 1050, r: 10000 },
  { name: "Casper", coords: [42.8666, -106.3131], score: 0.35, avgRent: 950, r: 10000 },
  { name: "Laramie", coords: [41.3114, -105.5911], score: 0.38, avgRent: 1000, r: 8000 },
  { name: "Gillette", coords: [44.2911, -105.5022], score: 0.35, avgRent: 950, r: 8000 },
  { name: "Rock Springs", coords: [41.5875, -109.2029], score: 0.35, avgRent: 950, r: 8000 },
  { name: "Sheridan WY", coords: [44.7972, -106.9562], score: 0.38, avgRent: 1000, r: 8000 }
];

var listings = [
  // ALABAMA - Birmingham
  { name: "Avondale Gardens", address: "1200 41st St S, Birmingham, AL", coords: [33.5210, -86.7720], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Birmingham", state: "Alabama", zip: "35222", yearBuilt: 2010, features: ["Laundry", "Parking", "Central AC"], scores: { affordability: 88, safety: 60, schools: 55, transit: 65, walkability: 60, parks: 50 }, waitlist: false, contact: "(205) 555-0142" },
  { name: "Southtown Court", address: "800 Southtown Dr, Birmingham, AL", coords: [33.4950, -86.8200], rent: 625, beds: 1, baths: 1, type: "Public Housing", sqft: 600, city: "Birmingham", state: "Alabama", zip: "35205", yearBuilt: 1985, features: ["Laundry", "Playground"], scores: { affordability: 92, safety: 50, schools: 48, transit: 60, walkability: 55, parks: 45 }, waitlist: true, contact: "(205) 555-0198" },
  { name: "Mountain Brook Terrace", address: "345 Crestwood Blvd, Birmingham, AL", coords: [33.5050, -86.7900], rent: 900, beds: 3, baths: 2, type: "Income-Restricted", sqft: 1100, city: "Birmingham", state: "Alabama", zip: "35210", yearBuilt: 2018, features: ["Parking", "Playground", "Pet Friendly", "Dishwasher"], scores: { affordability: 80, safety: 72, schools: 68, transit: 55, walkability: 50, parks: 65 }, waitlist: false, contact: "(205) 555-0234" },
  // ALABAMA - Huntsville
  { name: "Redstone Family Housing", address: "200 Sparkman Dr, Huntsville, AL", coords: [34.7250, -86.5850], rent: 825, beds: 2, baths: 1, type: "LIHTC", sqft: 900, city: "Huntsville", state: "Alabama", zip: "35805", yearBuilt: 2015, features: ["Parking", "Central AC", "Dishwasher"], scores: { affordability: 82, safety: 75, schools: 72, transit: 50, walkability: 45, parks: 60 }, waitlist: false, contact: "(256) 555-0187" },
  // ALABAMA - Mobile
  { name: "Gulf Breeze Apartments", address: "450 Government St, Mobile, AL", coords: [30.6900, -88.0450], rent: 650, beds: 2, baths: 1, type: "Section 8", sqft: 780, city: "Mobile", state: "Alabama", zip: "36602", yearBuilt: 2005, features: ["Laundry", "Central AC", "Pet Friendly"], scores: { affordability: 90, safety: 55, schools: 52, transit: 55, walkability: 50, parks: 55 }, waitlist: false, contact: "(251) 555-0165" },

  // ALASKA - Anchorage
  { name: "Northern Lights Village", address: "3100 Spenard Rd, Anchorage, AK", coords: [61.1950, -149.9100], rent: 1100, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Anchorage", state: "Alaska", zip: "99503", yearBuilt: 2012, features: ["Parking", "Laundry", "Security"], scores: { affordability: 65, safety: 68, schools: 65, transit: 55, walkability: 50, parks: 70 }, waitlist: false, contact: "(907) 555-0121" },
  { name: "Mountainview Commons", address: "800 Mountain View Dr, Anchorage, AK", coords: [61.2300, -149.8700], rent: 950, beds: 1, baths: 1, type: "Income-Restricted", sqft: 650, city: "Anchorage", state: "Alaska", zip: "99501", yearBuilt: 2008, features: ["Parking", "Central AC"], scores: { affordability: 72, safety: 60, schools: 58, transit: 50, walkability: 48, parks: 65 }, waitlist: false, contact: "(907) 555-0156" },
  // ALASKA - Fairbanks
  { name: "Aurora Borealis Homes", address: "1500 College Rd, Fairbanks, AK", coords: [64.8500, -147.7200], rent: 900, beds: 2, baths: 1, type: "Public Housing", sqft: 800, city: "Fairbanks", state: "Alaska", zip: "99709", yearBuilt: 2000, features: ["Parking", "Laundry"], scores: { affordability: 70, safety: 65, schools: 62, transit: 40, walkability: 35, parks: 60 }, waitlist: true, contact: "(907) 555-0189" },
  // ALASKA - Wasilla
  { name: "Valley View Apartments", address: "600 E Swanson Ave, Wasilla, AK", coords: [61.5810, -149.4300], rent: 950, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Wasilla", state: "Alaska", zip: "99654", yearBuilt: 2015, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 72, safety: 68, schools: 65, transit: 30, walkability: 32, parks: 65 }, waitlist: false, contact: "(907) 555-0210" },
  // ALASKA - Sitka
  { name: "Baranof Island Housing", address: "200 Katlian St, Sitka, AK", coords: [57.0530, -135.3350], rent: 1050, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Sitka", state: "Alaska", zip: "99835", yearBuilt: 2013, features: ["Parking", "Laundry", "Security"], scores: { affordability: 65, safety: 75, schools: 70, transit: 35, walkability: 55, parks: 78 }, waitlist: false, contact: "(907) 555-0225" },

  // ARIZONA - Phoenix
  { name: "Desert Bloom Apartments", address: "2400 W McDowell Rd, Phoenix, AZ", coords: [33.4614, -112.1050], rent: 950, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Phoenix", state: "Arizona", zip: "85009", yearBuilt: 2016, features: ["Pool", "Parking", "Central AC", "Laundry"], scores: { affordability: 78, safety: 62, schools: 58, transit: 65, walkability: 55, parks: 50 }, waitlist: false, contact: "(602) 555-0134" },
  { name: "Sunridge Commons", address: "5100 N 19th Ave, Phoenix, AZ", coords: [33.5000, -112.0950], rent: 1100, beds: 3, baths: 2, type: "Income-Restricted", sqft: 1100, city: "Phoenix", state: "Arizona", zip: "85015", yearBuilt: 2019, features: ["Pool", "Gym", "Parking", "Dishwasher"], scores: { affordability: 72, safety: 70, schools: 65, transit: 60, walkability: 50, parks: 55 }, waitlist: false, contact: "(602) 555-0178" },
  { name: "Maryvale Family Housing", address: "6700 W Indian School Rd, Phoenix, AZ", coords: [33.4950, -112.1800], rent: 800, beds: 2, baths: 1, type: "Section 8", sqft: 750, city: "Phoenix", state: "Arizona", zip: "85033", yearBuilt: 2002, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 85, safety: 52, schools: 50, transit: 55, walkability: 40, parks: 45 }, waitlist: true, contact: "(602) 555-0212" },
  // ARIZONA - Tucson
  { name: "Pueblo Del Sol", address: "1800 S 4th Ave, Tucson, AZ", coords: [32.2050, -110.9700], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Tucson", state: "Arizona", zip: "85713", yearBuilt: 2011, features: ["Pool", "Parking", "Central AC"], scores: { affordability: 85, safety: 60, schools: 55, transit: 60, walkability: 55, parks: 50 }, waitlist: false, contact: "(520) 555-0145" },

  // ARKANSAS - Little Rock
  { name: "Capitol View Apartments", address: "600 W Capitol Ave, Little Rock, AR", coords: [34.7465, -92.2950], rent: 700, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Little Rock", state: "Arkansas", zip: "72201", yearBuilt: 2014, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 88, safety: 58, schools: 55, transit: 55, walkability: 60, parks: 50 }, waitlist: false, contact: "(501) 555-0132" },
  { name: "River Valley Homes", address: "1200 Rebsamen Park Rd, Little Rock, AR", coords: [34.7350, -92.3100], rent: 600, beds: 1, baths: 1, type: "Public Housing", sqft: 600, city: "Little Rock", state: "Arkansas", zip: "72202", yearBuilt: 1998, features: ["Laundry", "Parking"], scores: { affordability: 92, safety: 52, schools: 50, transit: 50, walkability: 48, parks: 55 }, waitlist: true, contact: "(501) 555-0176" },
  // ARKANSAS - Fayetteville
  { name: "Ozark Terrace", address: "750 N College Ave, Fayetteville, AR", coords: [36.0700, -94.1600], rent: 725, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Fayetteville", state: "Arkansas", zip: "72701", yearBuilt: 2017, features: ["Parking", "Pet Friendly", "Dishwasher"], scores: { affordability: 82, safety: 72, schools: 70, transit: 45, walkability: 55, parks: 65 }, waitlist: false, contact: "(479) 555-0198" },

  // CALIFORNIA - Los Angeles
  { name: "Downtown LA Lofts", address: "900 S Broadway, Los Angeles, CA", coords: [34.0400, -118.2550], rent: 1800, beds: 1, baths: 1, type: "Income-Restricted", sqft: 650, city: "Los Angeles", state: "California", zip: "90015", yearBuilt: 2020, features: ["Elevator", "Gym", "Security", "Laundry"], scores: { affordability: 50, safety: 58, schools: 52, transit: 90, walkability: 88, parks: 45 }, waitlist: false, contact: "(213) 555-0123" },
  { name: "Westlake Village Apts", address: "2200 W 7th St, Los Angeles, CA", coords: [34.0560, -118.2700], rent: 1500, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Los Angeles", state: "California", zip: "90057", yearBuilt: 2015, features: ["Laundry", "Parking", "Playground"], scores: { affordability: 60, safety: 52, schools: 48, transit: 85, walkability: 80, parks: 40 }, waitlist: true, contact: "(213) 555-0167" },
  { name: "East Hollywood Family", address: "4500 Hollywood Blvd, Los Angeles, CA", coords: [34.0780, -118.2980], rent: 1650, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Los Angeles", state: "California", zip: "90027", yearBuilt: 2008, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 55, safety: 55, schools: 50, transit: 82, walkability: 78, parks: 42 }, waitlist: true, contact: "(323) 555-0145" },
  // CALIFORNIA - South LA
  { name: "Watts Towers Gardens", address: "1700 E 103rd St, Los Angeles, CA", coords: [33.9420, -118.2400], rent: 1000, beds: 3, baths: 1, type: "Public Housing", sqft: 950, city: "South LA", state: "California", zip: "90002", yearBuilt: 1995, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 80, safety: 40, schools: 38, transit: 65, walkability: 60, parks: 35 }, waitlist: true, contact: "(323) 555-0189" },
  // CALIFORNIA - San Francisco
  { name: "Tenderloin Family Housing", address: "201 Turk St, San Francisco, CA", coords: [37.7825, -122.4130], rent: 1800, beds: 1, baths: 1, type: "LIHTC", sqft: 550, city: "San Francisco", state: "California", zip: "94102", yearBuilt: 2018, features: ["Elevator", "Laundry", "Security"], scores: { affordability: 45, safety: 38, schools: 42, transit: 95, walkability: 92, parks: 50 }, waitlist: true, contact: "(415) 555-0134" },
  { name: "Bayview Commons", address: "1500 Innes Ave, San Francisco, CA", coords: [37.7300, -122.3800], rent: 2100, beds: 2, baths: 1, type: "Income-Restricted", sqft: 750, city: "San Francisco", state: "California", zip: "94124", yearBuilt: 2021, features: ["Parking", "Laundry", "Balcony", "Pet Friendly"], scores: { affordability: 40, safety: 50, schools: 48, transit: 78, walkability: 70, parks: 55 }, waitlist: false, contact: "(415) 555-0178" },
  // CALIFORNIA - San Diego
  { name: "City Heights Village", address: "4300 University Ave, San Diego, CA", coords: [32.7600, -117.1000], rent: 1400, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "San Diego", state: "California", zip: "92105", yearBuilt: 2016, features: ["Parking", "Laundry", "Central AC", "Playground"], scores: { affordability: 60, safety: 58, schools: 55, transit: 70, walkability: 65, parks: 55 }, waitlist: false, contact: "(619) 555-0156" },
  // CALIFORNIA - Sacramento
  { name: "Oak Park Family Housing", address: "3400 5th Ave, Sacramento, CA", coords: [38.5500, -121.4700], rent: 1050, beds: 2, baths: 1, type: "Section 8", sqft: 850, city: "Sacramento", state: "California", zip: "95817", yearBuilt: 2010, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 72, safety: 55, schools: 52, transit: 60, walkability: 55, parks: 50 }, waitlist: false, contact: "(916) 555-0143" },
  // CALIFORNIA - Fresno
  { name: "Fresno Gardens", address: "2700 E Belmont Ave, Fresno, CA", coords: [36.7500, -119.7600], rent: 800, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Fresno", state: "California", zip: "93701", yearBuilt: 2013, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 82, safety: 55, schools: 50, transit: 50, walkability: 45, parks: 45 }, waitlist: false, contact: "(559) 555-0167" },

  // COLORADO - Denver
  { name: "Five Points Family Apts", address: "2800 Welton St, Denver, CO", coords: [39.7580, -104.9800], rent: 1200, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Denver", state: "Colorado", zip: "80205", yearBuilt: 2017, features: ["Parking", "Laundry", "Gym"], scores: { affordability: 65, safety: 62, schools: 58, transit: 80, walkability: 78, parks: 65 }, waitlist: false, contact: "(303) 555-0132" },
  { name: "Montbello Village", address: "4800 Chambers Rd, Denver, CO", coords: [39.7800, -104.8600], rent: 1000, beds: 3, baths: 2, type: "Section 8", sqft: 1050, city: "Denver", state: "Colorado", zip: "80239", yearBuilt: 2005, features: ["Parking", "Playground", "Pet Friendly"], scores: { affordability: 75, safety: 55, schools: 52, transit: 60, walkability: 45, parks: 50 }, waitlist: true, contact: "(303) 555-0178" },
  // COLORADO - Colorado Springs
  { name: "Pioneer Village", address: "1200 E Platte Ave, Colorado Springs, CO", coords: [38.8350, -104.8000], rent: 950, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Colorado Springs", state: "Colorado", zip: "80909", yearBuilt: 2014, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 78, safety: 68, schools: 65, transit: 50, walkability: 48, parks: 60 }, waitlist: false, contact: "(719) 555-0145" },

  // CONNECTICUT - Hartford
  { name: "Charter Oak Terrace", address: "550 New Britain Ave, Hartford, CT", coords: [41.7500, -72.6900], rent: 950, beds: 2, baths: 1, type: "Public Housing", sqft: 800, city: "Hartford", state: "Connecticut", zip: "06106", yearBuilt: 2001, features: ["Laundry", "Parking", "Playground"], scores: { affordability: 78, safety: 48, schools: 45, transit: 65, walkability: 62, parks: 50 }, waitlist: true, contact: "(860) 555-0123" },
  { name: "Asylum Hill Commons", address: "200 Asylum St, Hartford, CT", coords: [41.7670, -72.6800], rent: 1100, beds: 1, baths: 1, type: "LIHTC", sqft: 650, city: "Hartford", state: "Connecticut", zip: "06103", yearBuilt: 2019, features: ["Elevator", "Laundry", "Security"], scores: { affordability: 70, safety: 55, schools: 50, transit: 75, walkability: 78, parks: 52 }, waitlist: false, contact: "(860) 555-0167" },
  // CONNECTICUT - New Haven
  { name: "Elm City Village", address: "85 Frank St, New Haven, CT", coords: [41.3100, -72.9200], rent: 1000, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "New Haven", state: "Connecticut", zip: "06519", yearBuilt: 2007, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 75, safety: 50, schools: 52, transit: 72, walkability: 70, parks: 55 }, waitlist: false, contact: "(203) 555-0189" },
  // CONNECTICUT - Bridgeport
  { name: "East Side Bridgeport Apts", address: "1100 East Main St, Bridgeport, CT", coords: [41.1870, -73.1750], rent: 1000, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Bridgeport", state: "Connecticut", zip: "06608", yearBuilt: 2016, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 75, safety: 48, schools: 45, transit: 68, walkability: 62, parks: 48 }, waitlist: false, contact: "(203) 555-0210" },
  // CONNECTICUT - Waterbury
  { name: "Brass City Village", address: "200 Grand St, Waterbury, CT", coords: [41.5560, -73.0450], rent: 875, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Waterbury", state: "Connecticut", zip: "06702", yearBuilt: 2011, features: ["Parking", "Laundry", "Playground"], scores: { affordability: 80, safety: 48, schools: 42, transit: 55, walkability: 58, parks: 45 }, waitlist: false, contact: "(203) 555-0230" },

  // DELAWARE - Wilmington
  { name: "Riverside Apartments", address: "600 N Market St, Wilmington, DE", coords: [39.7450, -75.5480], rent: 950, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Wilmington", state: "Delaware", zip: "19801", yearBuilt: 2014, features: ["Parking", "Laundry", "Elevator"], scores: { affordability: 75, safety: 55, schools: 52, transit: 68, walkability: 70, parks: 50 }, waitlist: false, contact: "(302) 555-0134" },
  // DELAWARE - Dover
  { name: "Silver Lake Gardens", address: "300 S State St, Dover, DE", coords: [39.1550, -75.5200], rent: 800, beds: 2, baths: 1, type: "Section 8", sqft: 780, city: "Dover", state: "Delaware", zip: "19901", yearBuilt: 2009, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 82, safety: 65, schools: 60, transit: 45, walkability: 50, parks: 55 }, waitlist: false, contact: "(302) 555-0178" },
  // DELAWARE - Newark DE
  { name: "Main Street Commons", address: "200 E Main St, Newark, DE", coords: [39.6840, -75.7480], rent: 950, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Newark DE", state: "Delaware", zip: "19711", yearBuilt: 2017, features: ["Parking", "Laundry", "Pet Friendly", "Dishwasher"], scores: { affordability: 72, safety: 72, schools: 75, transit: 58, walkability: 68, parks: 60 }, waitlist: false, contact: "(302) 555-0210" },
  // DELAWARE - Middletown DE
  { name: "Appoquinimink Village", address: "500 N Broad St, Middletown, DE", coords: [39.4500, -75.7150], rent: 850, beds: 2, baths: 1, type: "Income-Restricted", sqft: 900, city: "Middletown DE", state: "Delaware", zip: "19709", yearBuilt: 2019, features: ["Parking", "Central AC", "Playground", "Laundry"], scores: { affordability: 78, safety: 78, schools: 75, transit: 30, walkability: 42, parks: 62 }, waitlist: false, contact: "(302) 555-0235" },

  // FLORIDA - Miami
  { name: "Liberty City Commons", address: "1400 NW 62nd St, Miami, FL", coords: [25.8200, -80.2200], rent: 1100, beds: 2, baths: 1, type: "Public Housing", sqft: 800, city: "Miami", state: "Florida", zip: "33150", yearBuilt: 2005, features: ["Parking", "Playground", "Central AC"], scores: { affordability: 70, safety: 42, schools: 40, transit: 72, walkability: 65, parks: 40 }, waitlist: true, contact: "(305) 555-0123" },
  { name: "Brickell Key Residences", address: "50 SW 10th St, Miami, FL", coords: [25.7650, -80.1950], rent: 1800, beds: 1, baths: 1, type: "Income-Restricted", sqft: 650, city: "Miami", state: "Florida", zip: "33130", yearBuilt: 2021, features: ["Pool", "Gym", "Elevator", "Security"], scores: { affordability: 48, safety: 75, schools: 60, transit: 88, walkability: 90, parks: 55 }, waitlist: false, contact: "(305) 555-0167" },
  { name: "Overtown Transit Village", address: "700 NW 3rd Ave, Miami, FL", coords: [25.7800, -80.2000], rent: 1200, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Miami", state: "Florida", zip: "33136", yearBuilt: 2018, features: ["Laundry", "Security", "Central AC"], scores: { affordability: 65, safety: 48, schools: 45, transit: 85, walkability: 78, parks: 42 }, waitlist: false, contact: "(305) 555-0198" },
  // FLORIDA - Orlando
  { name: "Pine Hills Village", address: "5400 N Pine Hills Rd, Orlando, FL", coords: [28.5700, -81.4500], rent: 1000, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Orlando", state: "Florida", zip: "32808", yearBuilt: 2013, features: ["Pool", "Parking", "Central AC", "Laundry"], scores: { affordability: 75, safety: 52, schools: 50, transit: 55, walkability: 42, parks: 48 }, waitlist: false, contact: "(407) 555-0134" },
  { name: "Parramore Oaks", address: "600 W Church St, Orlando, FL", coords: [28.5400, -81.3900], rent: 900, beds: 2, baths: 1, type: "Section 8", sqft: 780, city: "Orlando", state: "Florida", zip: "32805", yearBuilt: 2008, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 80, safety: 45, schools: 42, transit: 68, walkability: 62, parks: 45 }, waitlist: true, contact: "(407) 555-0178" },
  // FLORIDA - Tampa
  { name: "Ybor City Lofts", address: "1800 E 7th Ave, Tampa, FL", coords: [27.9600, -82.4350], rent: 1100, beds: 1, baths: 1, type: "LIHTC", sqft: 700, city: "Tampa", state: "Florida", zip: "33605", yearBuilt: 2019, features: ["Laundry", "Central AC", "Balcony"], scores: { affordability: 70, safety: 58, schools: 50, transit: 72, walkability: 75, parks: 50 }, waitlist: false, contact: "(813) 555-0145" },
  // FLORIDA - Jacksonville
  { name: "Springfield Family", address: "1500 N Main St, Jacksonville, FL", coords: [30.3400, -81.6500], rent: 850, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Jacksonville", state: "Florida", zip: "32206", yearBuilt: 2006, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 82, safety: 50, schools: 48, transit: 55, walkability: 50, parks: 48 }, waitlist: false, contact: "(904) 555-0156" },

  // GEORGIA - Atlanta
  { name: "Peachtree Place", address: "1000 Peachtree St NE, Atlanta, GA", coords: [33.7810, -84.3830], rent: 1200, beds: 1, baths: 1, type: "LIHTC", sqft: 700, city: "Atlanta", state: "Georgia", zip: "30309", yearBuilt: 2017, features: ["Gym", "Elevator", "Laundry", "Security"], scores: { affordability: 62, safety: 68, schools: 58, transit: 82, walkability: 85, parks: 60 }, waitlist: false, contact: "(404) 555-0123" },
  { name: "Westside Village", address: "800 Donald Lee Hollowell Pkwy, Atlanta, GA", coords: [33.7660, -84.4200], rent: 900, beds: 2, baths: 1, type: "Section 8", sqft: 850, city: "Atlanta", state: "Georgia", zip: "30318", yearBuilt: 2010, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 80, safety: 48, schools: 42, transit: 65, walkability: 55, parks: 45 }, waitlist: true, contact: "(404) 555-0167" },
  { name: "Bankhead Courts Renewal", address: "600 Bankhead Hwy, Atlanta, GA", coords: [33.7700, -84.4400], rent: 750, beds: 3, baths: 1, type: "Public Housing", sqft: 1000, city: "Atlanta", state: "Georgia", zip: "30318", yearBuilt: 2022, features: ["Parking", "Playground", "Pet Friendly", "Laundry"], scores: { affordability: 88, safety: 42, schools: 40, transit: 58, walkability: 48, parks: 42 }, waitlist: true, contact: "(404) 555-0198" },
  // GEORGIA - Savannah
  { name: "Savannah Gardens", address: "1200 E Gwinnett St, Savannah, GA", coords: [32.0600, -81.0800], rent: 850, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Savannah", state: "Georgia", zip: "31404", yearBuilt: 2015, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 78, safety: 58, schools: 55, transit: 55, walkability: 60, parks: 58 }, waitlist: false, contact: "(912) 555-0134" },
  // GEORGIA - Augusta
  { name: "Harrisburg Family Apts", address: "900 Broad St, Augusta, GA", coords: [33.4750, -81.9700], rent: 650, beds: 2, baths: 1, type: "Section 8", sqft: 780, city: "Augusta", state: "Georgia", zip: "30901", yearBuilt: 2004, features: ["Parking", "Laundry"], scores: { affordability: 90, safety: 50, schools: 48, transit: 45, walkability: 50, parks: 45 }, waitlist: false, contact: "(706) 555-0189" },

  // HAWAII - Honolulu
  { name: "Kalihi Valley Homes", address: "1500 Dillingham Blvd, Honolulu, HI", coords: [21.3200, -157.8700], rent: 1800, beds: 2, baths: 1, type: "Public Housing", sqft: 750, city: "Honolulu", state: "Hawaii", zip: "96817", yearBuilt: 2010, features: ["Parking", "Laundry", "Playground"], scores: { affordability: 45, safety: 55, schools: 58, transit: 75, walkability: 68, parks: 60 }, waitlist: true, contact: "(808) 555-0123" },
  { name: "Palolo Valley Terrace", address: "2100 10th Ave, Honolulu, HI", coords: [21.2900, -157.7900], rent: 2000, beds: 1, baths: 1, type: "LIHTC", sqft: 600, city: "Honolulu", state: "Hawaii", zip: "96816", yearBuilt: 2018, features: ["Parking", "Balcony", "Security"], scores: { affordability: 38, safety: 70, schools: 65, transit: 70, walkability: 65, parks: 72 }, waitlist: false, contact: "(808) 555-0167" },
  // HAWAII - Hilo
  { name: "Waiakea Villas", address: "400 Hualani St, Hilo, HI", coords: [19.7200, -155.0900], rent: 1200, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Hilo", state: "Hawaii", zip: "96720", yearBuilt: 2014, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 55, safety: 70, schools: 62, transit: 40, walkability: 45, parks: 75 }, waitlist: false, contact: "(808) 555-0198" },

  // IDAHO - Boise
  { name: "Capitol Park Apartments", address: "700 W Main St, Boise, ID", coords: [43.6150, -116.2100], rent: 950, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Boise", state: "Idaho", zip: "83702", yearBuilt: 2016, features: ["Parking", "Laundry", "Dishwasher"], scores: { affordability: 72, safety: 75, schools: 72, transit: 55, walkability: 65, parks: 70 }, waitlist: false, contact: "(208) 555-0134" },
  { name: "Vista Village", address: "3200 Vista Ave, Boise, ID", coords: [43.6000, -116.2200], rent: 850, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Boise", state: "Idaho", zip: "83705", yearBuilt: 2011, features: ["Parking", "Pet Friendly", "Central AC"], scores: { affordability: 78, safety: 72, schools: 68, transit: 48, walkability: 55, parks: 65 }, waitlist: false, contact: "(208) 555-0178" },
  // IDAHO - Meridian
  { name: "Ten Mile Crossing", address: "1400 W Pine Ave, Meridian, ID", coords: [43.6120, -116.3920], rent: 1050, beds: 2, baths: 1, type: "Income-Restricted", sqft: 900, city: "Meridian", state: "Idaho", zip: "83642", yearBuilt: 2020, features: ["Parking", "Central AC", "Dishwasher", "Pet Friendly"], scores: { affordability: 68, safety: 80, schools: 78, transit: 40, walkability: 45, parks: 65 }, waitlist: false, contact: "(208) 555-0210" },
  // IDAHO - Coeur d Alene
  { name: "Lakeside Family Apts", address: "700 E Lakeside Ave, Coeur d Alene, ID", coords: [47.6780, -116.7750], rent: 1100, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Coeur d Alene", state: "Idaho", zip: "83814", yearBuilt: 2018, features: ["Parking", "Laundry", "Pet Friendly", "Balcony"], scores: { affordability: 65, safety: 78, schools: 72, transit: 35, walkability: 55, parks: 80 }, waitlist: false, contact: "(208) 555-0240" },

  // ILLINOIS - Chicago
  { name: "Wicker Park Artist Lofts", address: "1600 N Milwaukee Ave, Chicago, IL", coords: [41.9100, -87.6700], rent: 1400, beds: 1, baths: 1, type: "LIHTC", sqft: 700, city: "Chicago", state: "Illinois", zip: "60622", yearBuilt: 2018, features: ["Laundry", "Elevator", "Balcony"], scores: { affordability: 58, safety: 65, schools: 60, transit: 90, walkability: 92, parks: 60 }, waitlist: false, contact: "(773) 555-0123" },
  { name: "Englewood Gardens", address: "6300 S Halsted St, Chicago, IL", coords: [41.7780, -87.6440], rent: 750, beds: 3, baths: 1, type: "Public Housing", sqft: 1000, city: "South Side Chicago", state: "Illinois", zip: "60621", yearBuilt: 2000, features: ["Parking", "Playground", "Laundry", "Security"], scores: { affordability: 90, safety: 35, schools: 32, transit: 70, walkability: 62, parks: 38 }, waitlist: true, contact: "(773) 555-0167" },
  { name: "Pilsen Community Homes", address: "1800 S Blue Island Ave, Chicago, IL", coords: [41.8580, -87.6620], rent: 1100, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Chicago", state: "Illinois", zip: "60608", yearBuilt: 2015, features: ["Laundry", "Parking", "Pet Friendly"], scores: { affordability: 70, safety: 58, schools: 55, transit: 85, walkability: 82, parks: 55 }, waitlist: false, contact: "(312) 555-0198" },
  { name: "West Loop Residences", address: "300 N Halsted St, Chicago, IL", coords: [41.8870, -87.6470], rent: 1800, beds: 1, baths: 1, type: "Income-Restricted", sqft: 650, city: "West Loop Chicago", state: "Illinois", zip: "60661", yearBuilt: 2022, features: ["Gym", "Elevator", "Dishwasher", "Security"], scores: { affordability: 42, safety: 72, schools: 62, transit: 92, walkability: 95, parks: 55 }, waitlist: false, contact: "(312) 555-0234" },
  // ILLINOIS - Springfield IL
  { name: "Lincoln Park Estates", address: "900 S Grand Ave E, Springfield, IL", coords: [39.7750, -89.6400], rent: 650, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Springfield IL", state: "Illinois", zip: "62703", yearBuilt: 2008, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 90, safety: 62, schools: 58, transit: 45, walkability: 50, parks: 55 }, waitlist: false, contact: "(217) 555-0145" },

  // INDIANA - Indianapolis
  { name: "Fountain Square Flats", address: "1100 Shelby St, Indianapolis, IN", coords: [39.7500, -86.1450], rent: 800, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Indianapolis", state: "Indiana", zip: "46203", yearBuilt: 2016, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 82, safety: 60, schools: 55, transit: 60, walkability: 65, parks: 55 }, waitlist: false, contact: "(317) 555-0123" },
  { name: "Martindale Commons", address: "2500 E 25th St, Indianapolis, IN", coords: [39.7900, -86.1300], rent: 650, beds: 2, baths: 1, type: "Public Housing", sqft: 780, city: "Indianapolis", state: "Indiana", zip: "46218", yearBuilt: 2003, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 88, safety: 48, schools: 42, transit: 50, walkability: 45, parks: 40 }, waitlist: true, contact: "(317) 555-0167" },
  // INDIANA - Fort Wayne
  { name: "Renaissance Pointe", address: "800 Oxford St, Fort Wayne, IN", coords: [41.0850, -85.1350], rent: 650, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Fort Wayne", state: "Indiana", zip: "46806", yearBuilt: 2012, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 88, safety: 62, schools: 58, transit: 45, walkability: 48, parks: 52 }, waitlist: false, contact: "(260) 555-0134" },

  // IOWA - Des Moines
  { name: "River Bend Place", address: "600 SE 6th St, Des Moines, IA", coords: [41.5800, -93.6100], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Des Moines", state: "Iowa", zip: "50309", yearBuilt: 2015, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 85, safety: 68, schools: 65, transit: 55, walkability: 62, parks: 58 }, waitlist: false, contact: "(515) 555-0123" },
  { name: "Capitol East Residences", address: "1200 E Grand Ave, Des Moines, IA", coords: [41.5950, -93.6000], rent: 650, beds: 1, baths: 1, type: "Section 8", sqft: 600, city: "Des Moines", state: "Iowa", zip: "50316", yearBuilt: 2007, features: ["Parking", "Laundry"], scores: { affordability: 90, safety: 60, schools: 58, transit: 50, walkability: 55, parks: 52 }, waitlist: false, contact: "(515) 555-0167" },
  // IOWA - Iowa City
  { name: "Pheasant Ridge", address: "2626 Bartelt Rd, Iowa City, IA", coords: [41.6500, -91.5400], rent: 800, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Iowa City", state: "Iowa", zip: "52240", yearBuilt: 2011, features: ["Parking", "Laundry", "Playground"], scores: { affordability: 78, safety: 72, schools: 75, transit: 60, walkability: 55, parks: 65 }, waitlist: false, contact: "(319) 555-0189" },
  // IOWA - Davenport
  { name: "Village of East Davenport", address: "1100 E River Dr, Davenport, IA", coords: [41.5250, -90.5550], rent: 700, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Davenport", state: "Iowa", zip: "52803", yearBuilt: 2014, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 85, safety: 62, schools: 58, transit: 48, walkability: 52, parks: 55 }, waitlist: false, contact: "(563) 555-0123" },
  // IOWA - Sioux City
  { name: "Morningside Village", address: "3900 Morningside Ave, Sioux City, IA", coords: [42.4850, -96.3700], rent: 650, beds: 2, baths: 1, type: "Section 8", sqft: 780, city: "Sioux City", state: "Iowa", zip: "51106", yearBuilt: 2010, features: ["Parking", "Laundry", "Playground"], scores: { affordability: 88, safety: 60, schools: 58, transit: 40, walkability: 42, parks: 50 }, waitlist: false, contact: "(712) 555-0134" },

  // KANSAS - Wichita
  { name: "Prairie Village Apts", address: "1500 N Broadway, Wichita, KS", coords: [37.7000, -97.3350], rent: 650, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Wichita", state: "Kansas", zip: "67214", yearBuilt: 2013, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 88, safety: 62, schools: 58, transit: 48, walkability: 50, parks: 52 }, waitlist: false, contact: "(316) 555-0134" },
  // KANSAS - Topeka
  { name: "Topeka Towers", address: "200 SE 6th Ave, Topeka, KS", coords: [39.0500, -95.6700], rent: 575, beds: 1, baths: 1, type: "Public Housing", sqft: 600, city: "Topeka", state: "Kansas", zip: "66603", yearBuilt: 1998, features: ["Elevator", "Laundry"], scores: { affordability: 92, safety: 52, schools: 48, transit: 45, walkability: 52, parks: 48 }, waitlist: true, contact: "(785) 555-0178" },
  // KANSAS - Overland Park
  { name: "College Blvd Residences", address: "7800 W 95th St, Overland Park, KS", coords: [38.9400, -94.6700], rent: 1100, beds: 2, baths: 1, type: "Income-Restricted", sqft: 900, city: "Overland Park", state: "Kansas", zip: "66212", yearBuilt: 2019, features: ["Parking", "Central AC", "Dishwasher", "Pool"], scores: { affordability: 65, safety: 82, schools: 85, transit: 50, walkability: 52, parks: 68 }, waitlist: false, contact: "(913) 555-0145" },
  // KANSAS - Lawrence KS
  { name: "East Lawrence Village", address: "800 E 9th St, Lawrence, KS", coords: [38.9680, -95.2250], rent: 825, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Lawrence KS", state: "Kansas", zip: "66044", yearBuilt: 2016, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 78, safety: 70, schools: 72, transit: 55, walkability: 62, parks: 65 }, waitlist: false, contact: "(785) 555-0210" },

  // KENTUCKY - Louisville
  { name: "Smoketown Family Housing", address: "800 S Shelby St, Louisville, KY", coords: [38.2400, -85.7400], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Louisville", state: "Kentucky", zip: "40203", yearBuilt: 2016, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 85, safety: 52, schools: 48, transit: 62, walkability: 60, parks: 50 }, waitlist: false, contact: "(502) 555-0123" },
  { name: "Portland Place", address: "2600 N Western Pkwy, Louisville, KY", coords: [38.2700, -85.7800], rent: 650, beds: 2, baths: 1, type: "Public Housing", sqft: 780, city: "Louisville", state: "Kentucky", zip: "40212", yearBuilt: 2002, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 90, safety: 42, schools: 40, transit: 55, walkability: 48, parks: 42 }, waitlist: true, contact: "(502) 555-0167" },
  // KENTUCKY - Lexington
  { name: "Distillery District Apts", address: "400 Manchester St, Lexington, KY", coords: [38.0450, -84.4900], rent: 800, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Lexington", state: "Kentucky", zip: "40508", yearBuilt: 2018, features: ["Parking", "Laundry", "Pet Friendly", "Dishwasher"], scores: { affordability: 80, safety: 65, schools: 62, transit: 58, walkability: 65, parks: 55 }, waitlist: false, contact: "(859) 555-0189" },
  // KENTUCKY - Covington KY
  { name: "Mainstrasse Village Apts", address: "600 Main St, Covington, KY", coords: [39.0840, -84.5100], rent: 850, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Covington KY", state: "Kentucky", zip: "41011", yearBuilt: 2017, features: ["Parking", "Laundry", "Central AC", "Balcony"], scores: { affordability: 78, safety: 60, schools: 55, transit: 68, walkability: 72, parks: 52 }, waitlist: false, contact: "(859) 555-0210" },
  // KENTUCKY - Owensboro
  { name: "Frederica Street Commons", address: "1500 Frederica St, Owensboro, KY", coords: [37.7600, -87.1100], rent: 650, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Owensboro", state: "Kentucky", zip: "42301", yearBuilt: 2012, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 88, safety: 68, schools: 62, transit: 38, walkability: 48, parks: 52 }, waitlist: false, contact: "(270) 555-0134" },

  // LOUISIANA - New Orleans
  { name: "Treme Family Homes", address: "1200 N Claiborne Ave, New Orleans, LA", coords: [29.9650, -90.0650], rent: 900, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "New Orleans", state: "Louisiana", zip: "70116", yearBuilt: 2015, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 75, safety: 48, schools: 42, transit: 72, walkability: 75, parks: 50 }, waitlist: false, contact: "(504) 555-0123" },
  { name: "Gentilly Terrace", address: "3400 Gentilly Blvd, New Orleans, LA", coords: [29.9800, -90.0400], rent: 800, beds: 3, baths: 1, type: "Section 8", sqft: 1000, city: "New Orleans", state: "Louisiana", zip: "70122", yearBuilt: 2008, features: ["Parking", "Playground", "Central AC"], scores: { affordability: 82, safety: 50, schools: 45, transit: 60, walkability: 58, parks: 48 }, waitlist: true, contact: "(504) 555-0167" },
  { name: "Algiers Point Commons", address: "400 Pelican Ave, New Orleans, LA", coords: [29.9500, -90.0300], rent: 1050, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "New Orleans", state: "Louisiana", zip: "70114", yearBuilt: 2019, features: ["Parking", "Balcony", "Pet Friendly"], scores: { affordability: 70, safety: 62, schools: 55, transit: 65, walkability: 62, parks: 55 }, waitlist: false, contact: "(504) 555-0198" },
  // LOUISIANA - Baton Rouge
  { name: "Capitol Lakes Apts", address: "1800 N Foster Dr, Baton Rouge, LA", coords: [30.4600, -91.1700], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Baton Rouge", state: "Louisiana", zip: "70806", yearBuilt: 2012, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 85, safety: 55, schools: 52, transit: 48, walkability: 45, parks: 50 }, waitlist: false, contact: "(225) 555-0134" },
  // LOUISIANA - Shreveport
  { name: "Red River Terrace", address: "600 Spring St, Shreveport, LA", coords: [32.5200, -93.7500], rent: 600, beds: 2, baths: 1, type: "Public Housing", sqft: 750, city: "Shreveport", state: "Louisiana", zip: "71101", yearBuilt: 2001, features: ["Parking", "Laundry"], scores: { affordability: 92, safety: 45, schools: 42, transit: 40, walkability: 45, parks: 42 }, waitlist: true, contact: "(318) 555-0145" },
  // LOUISIANA - Lafayette LA
  { name: "Evangeline Place", address: "1200 W University Ave, Lafayette, LA", coords: [30.2200, -92.0300], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Lafayette LA", state: "Louisiana", zip: "70506", yearBuilt: 2016, features: ["Parking", "Central AC", "Laundry", "Pet Friendly"], scores: { affordability: 82, safety: 60, schools: 58, transit: 42, walkability: 48, parks: 52 }, waitlist: false, contact: "(337) 555-0123" },
  // LOUISIANA - Lake Charles
  { name: "Lakeshore Family Housing", address: "900 Lakeshore Dr, Lake Charles, LA", coords: [30.2250, -93.2100], rent: 650, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Lake Charles", state: "Louisiana", zip: "70601", yearBuilt: 2012, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 88, safety: 58, schools: 52, transit: 35, walkability: 42, parks: 50 }, waitlist: false, contact: "(337) 555-0167" },

  // MAINE - Portland ME
  { name: "East End Community Housing", address: "120 Congress St, Portland, ME", coords: [43.6600, -70.2500], rent: 1100, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Portland ME", state: "Maine", zip: "04101", yearBuilt: 2017, features: ["Laundry", "Pet Friendly", "Parking"], scores: { affordability: 62, safety: 72, schools: 70, transit: 65, walkability: 78, parks: 65 }, waitlist: false, contact: "(207) 555-0123" },
  // MAINE - Bangor
  { name: "Penobscot Place", address: "200 State St, Bangor, ME", coords: [44.8000, -68.7700], rent: 750, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Bangor", state: "Maine", zip: "04401", yearBuilt: 2010, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 82, safety: 68, schools: 65, transit: 40, walkability: 52, parks: 58 }, waitlist: false, contact: "(207) 555-0167" },
  // MAINE - Lewiston
  { name: "Bates Mill Village", address: "35 Canal St, Lewiston, ME", coords: [44.1000, -70.2100], rent: 800, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Lewiston", state: "Maine", zip: "04240", yearBuilt: 2016, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 82, safety: 60, schools: 58, transit: 42, walkability: 58, parks: 52 }, waitlist: false, contact: "(207) 555-0210" },
  // MAINE - Augusta ME
  { name: "Capitol Heights Apts", address: "150 State St, Augusta, ME", coords: [44.3100, -69.7800], rent: 825, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Augusta ME", state: "Maine", zip: "04330", yearBuilt: 2014, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 80, safety: 72, schools: 68, transit: 38, walkability: 52, parks: 60 }, waitlist: false, contact: "(207) 555-0240" },

  // MARYLAND - Baltimore
  { name: "Harbor Point Village", address: "1400 E Pratt St, Baltimore, MD", coords: [39.2850, -76.5950], rent: 1100, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Baltimore", state: "Maryland", zip: "21231", yearBuilt: 2016, features: ["Parking", "Laundry", "Security", "Balcony"], scores: { affordability: 68, safety: 55, schools: 48, transit: 75, walkability: 78, parks: 55 }, waitlist: false, contact: "(410) 555-0123" },
  { name: "Sandtown-Winchester Homes", address: "1700 N Fulton Ave, Baltimore, MD", coords: [39.3100, -76.6400], rent: 800, beds: 3, baths: 1, type: "Public Housing", sqft: 1000, city: "Baltimore", state: "Maryland", zip: "21217", yearBuilt: 2004, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 85, safety: 35, schools: 32, transit: 65, walkability: 60, parks: 38 }, waitlist: true, contact: "(410) 555-0167" },
  { name: "Remington Row", address: "2700 Remington Ave, Baltimore, MD", coords: [39.3200, -76.6100], rent: 1050, beds: 1, baths: 1, type: "Income-Restricted", sqft: 650, city: "Baltimore", state: "Maryland", zip: "21211", yearBuilt: 2020, features: ["Gym", "Laundry", "Elevator"], scores: { affordability: 72, safety: 62, schools: 55, transit: 70, walkability: 75, parks: 60 }, waitlist: false, contact: "(410) 555-0198" },
  // MARYLAND - Silver Spring
  { name: "Long Branch Crossing", address: "8800 Piney Branch Rd, Silver Spring, MD", coords: [38.9900, -77.0100], rent: 1400, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Silver Spring", state: "Maryland", zip: "20901", yearBuilt: 2018, features: ["Parking", "Laundry", "Elevator", "Dishwasher"], scores: { affordability: 55, safety: 68, schools: 72, transit: 82, walkability: 75, parks: 62 }, waitlist: false, contact: "(301) 555-0134" },

  // MASSACHUSETTS - Boston
  { name: "Roxbury Crossing Apts", address: "1500 Tremont St, Boston, MA", coords: [42.3300, -71.0900], rent: 1600, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Boston", state: "Massachusetts", zip: "02120", yearBuilt: 2017, features: ["Laundry", "Elevator", "Security"], scores: { affordability: 50, safety: 55, schools: 52, transit: 90, walkability: 85, parks: 55 }, waitlist: true, contact: "(617) 555-0123" },
  { name: "Dorchester Bay Homes", address: "500 Columbia Rd, Boston, MA", coords: [42.3200, -71.0600], rent: 1400, beds: 2, baths: 1, type: "Section 8", sqft: 850, city: "Boston", state: "Massachusetts", zip: "02125", yearBuilt: 2012, features: ["Parking", "Laundry", "Playground"], scores: { affordability: 58, safety: 50, schools: 48, transit: 82, walkability: 78, parks: 50 }, waitlist: true, contact: "(617) 555-0167" },
  { name: "East Boston Waterfront", address: "200 Border St, Boston, MA", coords: [42.3700, -71.0350], rent: 1800, beds: 1, baths: 1, type: "Income-Restricted", sqft: 650, city: "Boston", state: "Massachusetts", zip: "02128", yearBuilt: 2021, features: ["Elevator", "Gym", "Balcony", "Security"], scores: { affordability: 42, safety: 68, schools: 62, transit: 85, walkability: 80, parks: 60 }, waitlist: false, contact: "(617) 555-0198" },
  // MASSACHUSETTS - Worcester
  { name: "Main South Village", address: "100 Main St, Worcester, MA", coords: [42.2550, -71.8100], rent: 1000, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Worcester", state: "Massachusetts", zip: "01608", yearBuilt: 2014, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 75, safety: 58, schools: 55, transit: 62, walkability: 65, parks: 52 }, waitlist: false, contact: "(508) 555-0134" },

  // MICHIGAN - Detroit
  { name: "Corktown Lofts", address: "1400 Michigan Ave, Detroit, MI", coords: [42.3300, -83.0600], rent: 750, beds: 1, baths: 1, type: "LIHTC", sqft: 700, city: "Detroit", state: "Michigan", zip: "48216", yearBuilt: 2018, features: ["Laundry", "Parking", "Balcony"], scores: { affordability: 82, safety: 58, schools: 45, transit: 65, walkability: 68, parks: 52 }, waitlist: false, contact: "(313) 555-0123" },
  { name: "Brightmoor Family Homes", address: "20000 Fenkell St, Detroit, MI", coords: [42.3800, -83.2500], rent: 600, beds: 3, baths: 1, type: "Public Housing", sqft: 1000, city: "Detroit", state: "Michigan", zip: "48223", yearBuilt: 2002, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 92, safety: 38, schools: 35, transit: 45, walkability: 38, parks: 35 }, waitlist: true, contact: "(313) 555-0167" },
  { name: "Midtown Place", address: "3800 Woodward Ave, Detroit, MI", coords: [42.3500, -83.0600], rent: 900, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Detroit", state: "Michigan", zip: "48201", yearBuilt: 2020, features: ["Gym", "Laundry", "Elevator", "Security"], scores: { affordability: 78, safety: 65, schools: 52, transit: 72, walkability: 75, parks: 58 }, waitlist: false, contact: "(313) 555-0198" },
  // MICHIGAN - Grand Rapids
  { name: "Heartside Park Apts", address: "400 S Division Ave, Grand Rapids, MI", coords: [42.9580, -85.6680], rent: 800, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Grand Rapids", state: "Michigan", zip: "49503", yearBuilt: 2015, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 80, safety: 62, schools: 60, transit: 58, walkability: 65, parks: 58 }, waitlist: false, contact: "(616) 555-0134" },

  // MINNESOTA - Minneapolis
  { name: "Phillips Community Housing", address: "2400 Park Ave, Minneapolis, MN", coords: [44.9600, -93.2650], rent: 1050, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Minneapolis", state: "Minnesota", zip: "55404", yearBuilt: 2016, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 72, safety: 52, schools: 50, transit: 80, walkability: 78, parks: 65 }, waitlist: false, contact: "(612) 555-0123" },
  { name: "North Loop Lofts", address: "300 N 1st Ave, Minneapolis, MN", coords: [44.9850, -93.2700], rent: 1400, beds: 1, baths: 1, type: "Income-Restricted", sqft: 700, city: "Minneapolis", state: "Minnesota", zip: "55401", yearBuilt: 2020, features: ["Gym", "Elevator", "Laundry", "Security"], scores: { affordability: 55, safety: 72, schools: 60, transit: 88, walkability: 90, parks: 70 }, waitlist: false, contact: "(612) 555-0167" },
  // MINNESOTA - St Paul
  { name: "Frogtown Family Apts", address: "700 University Ave W, St Paul, MN", coords: [44.9550, -93.1100], rent: 900, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "St Paul", state: "Minnesota", zip: "55104", yearBuilt: 2010, features: ["Parking", "Laundry", "Playground"], scores: { affordability: 80, safety: 50, schools: 48, transit: 75, walkability: 68, parks: 55 }, waitlist: true, contact: "(651) 555-0189" },

  // MISSISSIPPI - Jackson MS
  { name: "Capitol Street Commons", address: "400 S State St, Jackson, MS", coords: [32.2950, -90.1800], rent: 600, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Jackson MS", state: "Mississippi", zip: "39201", yearBuilt: 2012, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 92, safety: 42, schools: 38, transit: 45, walkability: 50, parks: 42 }, waitlist: false, contact: "(601) 555-0123" },
  { name: "Farish Street Village", address: "800 N Farish St, Jackson, MS", coords: [32.3050, -90.1850], rent: 525, beds: 2, baths: 1, type: "Public Housing", sqft: 750, city: "Jackson MS", state: "Mississippi", zip: "39202", yearBuilt: 1999, features: ["Parking", "Playground"], scores: { affordability: 95, safety: 38, schools: 35, transit: 40, walkability: 45, parks: 38 }, waitlist: true, contact: "(601) 555-0167" },
  // MISSISSIPPI - Gulfport
  { name: "Gulf Gardens", address: "1200 Pass Rd, Gulfport, MS", coords: [30.3700, -89.0900], rent: 650, beds: 2, baths: 1, type: "Section 8", sqft: 780, city: "Gulfport", state: "Mississippi", zip: "39501", yearBuilt: 2007, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 88, safety: 55, schools: 50, transit: 38, walkability: 40, parks: 50 }, waitlist: false, contact: "(228) 555-0134" },

  // MISSOURI - Kansas City MO
  { name: "Troost Avenue Village", address: "3100 Troost Ave, Kansas City, MO", coords: [39.0750, -94.5700], rent: 800, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Kansas City MO", state: "Missouri", zip: "64109", yearBuilt: 2015, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 82, safety: 50, schools: 48, transit: 62, walkability: 58, parks: 50 }, waitlist: false, contact: "(816) 555-0123" },
  { name: "Westport Commons", address: "4000 Broadway, Kansas City, MO", coords: [39.0600, -94.5900], rent: 950, beds: 1, baths: 1, type: "Income-Restricted", sqft: 650, city: "Kansas City MO", state: "Missouri", zip: "64111", yearBuilt: 2019, features: ["Laundry", "Pet Friendly", "Dishwasher"], scores: { affordability: 72, safety: 62, schools: 58, transit: 68, walkability: 72, parks: 55 }, waitlist: false, contact: "(816) 555-0167" },
  // MISSOURI - St Louis
  { name: "Dutchtown Family Apts", address: "3900 S Grand Blvd, St Louis, MO", coords: [38.5900, -90.2400], rent: 700, beds: 2, baths: 1, type: "Section 8", sqft: 850, city: "St Louis", state: "Missouri", zip: "63118", yearBuilt: 2009, features: ["Parking", "Laundry", "Playground"], scores: { affordability: 85, safety: 48, schools: 45, transit: 62, walkability: 60, parks: 50 }, waitlist: false, contact: "(314) 555-0189" },
  { name: "Tower Grove Heights", address: "4200 Arsenal St, St Louis, MO", coords: [38.6100, -90.2500], rent: 850, beds: 2, baths: 1, type: "LIHTC", sqft: 900, city: "St Louis", state: "Missouri", zip: "63116", yearBuilt: 2017, features: ["Parking", "Laundry", "Pet Friendly", "Balcony"], scores: { affordability: 78, safety: 58, schools: 55, transit: 65, walkability: 68, parks: 65 }, waitlist: false, contact: "(314) 555-0198" },

  // MONTANA - Billings
  { name: "Rimrock Apartments", address: "800 N 27th St, Billings, MT", coords: [45.7850, -108.5000], rent: 800, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Billings", state: "Montana", zip: "59101", yearBuilt: 2014, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 78, safety: 68, schools: 65, transit: 40, walkability: 50, parks: 60 }, waitlist: false, contact: "(406) 555-0123" },
  // MONTANA - Missoula
  { name: "Garden District Housing", address: "500 E Broadway, Missoula, MT", coords: [46.8700, -113.9900], rent: 950, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Missoula", state: "Montana", zip: "59802", yearBuilt: 2017, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 68, safety: 75, schools: 72, transit: 50, walkability: 65, parks: 72 }, waitlist: false, contact: "(406) 555-0167" },
  // MONTANA - Bozeman
  { name: "Gallatin Valley Apts", address: "700 N 7th Ave, Bozeman, MT", coords: [45.6800, -111.0400], rent: 1350, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Bozeman", state: "Montana", zip: "59715", yearBuilt: 2020, features: ["Parking", "Laundry", "Dishwasher", "Pet Friendly"], scores: { affordability: 52, safety: 82, schools: 78, transit: 42, walkability: 62, parks: 75 }, waitlist: false, contact: "(406) 555-0210" },
  // MONTANA - Helena
  { name: "Last Chance Gulch Apts", address: "400 N Last Chance Gulch, Helena, MT", coords: [46.5960, -112.0250], rent: 850, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Helena", state: "Montana", zip: "59601", yearBuilt: 2015, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 78, safety: 78, schools: 72, transit: 38, walkability: 58, parks: 68 }, waitlist: false, contact: "(406) 555-0240" },

  // NEBRASKA - Omaha
  { name: "South Omaha Village", address: "2400 L St, Omaha, NE", coords: [41.2400, -95.9400], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Omaha", state: "Nebraska", zip: "68107", yearBuilt: 2015, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 85, safety: 58, schools: 55, transit: 52, walkability: 55, parks: 50 }, waitlist: false, contact: "(402) 555-0123" },
  { name: "Benson Park Estates", address: "6100 Military Ave, Omaha, NE", coords: [41.2850, -95.9800], rent: 850, beds: 2, baths: 1, type: "Income-Restricted", sqft: 900, city: "Omaha", state: "Nebraska", zip: "68104", yearBuilt: 2018, features: ["Parking", "Laundry", "Pet Friendly", "Dishwasher"], scores: { affordability: 78, safety: 68, schools: 65, transit: 55, walkability: 58, parks: 55 }, waitlist: false, contact: "(402) 555-0167" },
  // NEBRASKA - Lincoln NE
  { name: "Near South Apts", address: "1400 A St, Lincoln, NE", coords: [40.8100, -96.6900], rent: 700, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Lincoln NE", state: "Nebraska", zip: "68502", yearBuilt: 2010, features: ["Parking", "Laundry"], scores: { affordability: 88, safety: 65, schools: 62, transit: 50, walkability: 55, parks: 58 }, waitlist: false, contact: "(402) 555-0198" },
  // NEBRASKA - Grand Island
  { name: "Platte Valley Housing", address: "1600 W 2nd St, Grand Island, NE", coords: [40.9250, -98.3500], rent: 625, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Grand Island", state: "Nebraska", zip: "68801", yearBuilt: 2013, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 90, safety: 65, schools: 60, transit: 35, walkability: 45, parks: 52 }, waitlist: false, contact: "(308) 555-0123" },
  // NEBRASKA - Bellevue NE
  { name: "Mission Hills Village", address: "1200 Cornhusker Rd, Bellevue, NE", coords: [41.1550, -95.8900], rent: 850, beds: 2, baths: 1, type: "Income-Restricted", sqft: 900, city: "Bellevue NE", state: "Nebraska", zip: "68005", yearBuilt: 2018, features: ["Parking", "Central AC", "Laundry", "Playground"], scores: { affordability: 78, safety: 75, schools: 72, transit: 48, walkability: 50, parks: 60 }, waitlist: false, contact: "(402) 555-0220" },

  // NEVADA - Las Vegas
  { name: "Desert Springs Village", address: "3200 E Charleston Blvd, Las Vegas, NV", coords: [36.1600, -115.1100], rent: 1000, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Las Vegas", state: "Nevada", zip: "89104", yearBuilt: 2015, features: ["Pool", "Parking", "Central AC", "Laundry"], scores: { affordability: 72, safety: 55, schools: 48, transit: 60, walkability: 52, parks: 45 }, waitlist: false, contact: "(702) 555-0123" },
  { name: "North Las Vegas Family", address: "2400 N Las Vegas Blvd, Las Vegas, NV", coords: [36.2100, -115.1200], rent: 850, beds: 3, baths: 2, type: "Section 8", sqft: 1050, city: "Las Vegas", state: "Nevada", zip: "89030", yearBuilt: 2008, features: ["Parking", "Playground", "Central AC"], scores: { affordability: 80, safety: 45, schools: 42, transit: 55, walkability: 42, parks: 38 }, waitlist: true, contact: "(702) 555-0167" },
  { name: "Sunrise Manor Apts", address: "4800 E Sahara Ave, Las Vegas, NV", coords: [36.1450, -115.0700], rent: 950, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Las Vegas", state: "Nevada", zip: "89104", yearBuilt: 2019, features: ["Pool", "Parking", "Central AC", "Gym"], scores: { affordability: 75, safety: 52, schools: 48, transit: 55, walkability: 45, parks: 42 }, waitlist: false, contact: "(702) 555-0198" },
  // NEVADA - Reno
  { name: "Truckee Meadows Housing", address: "800 E 2nd St, Reno, NV", coords: [39.5250, -119.8000], rent: 1050, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Reno", state: "Nevada", zip: "89501", yearBuilt: 2016, features: ["Parking", "Laundry", "Dishwasher"], scores: { affordability: 68, safety: 62, schools: 58, transit: 55, walkability: 60, parks: 55 }, waitlist: false, contact: "(775) 555-0134" },

  // NEW HAMPSHIRE - Manchester NH
  { name: "Millyard Crossing", address: "200 Commercial St, Manchester, NH", coords: [42.9900, -71.4600], rent: 1100, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Manchester NH", state: "New Hampshire", zip: "03101", yearBuilt: 2017, features: ["Parking", "Laundry", "Elevator"], scores: { affordability: 68, safety: 68, schools: 65, transit: 55, walkability: 62, parks: 55 }, waitlist: false, contact: "(603) 555-0123" },
  // NEW HAMPSHIRE - Nashua
  { name: "Tree Streets Village", address: "50 Pine St, Nashua, NH", coords: [42.7650, -71.4700], rent: 1050, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Nashua", state: "New Hampshire", zip: "03060", yearBuilt: 2015, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 70, safety: 72, schools: 70, transit: 48, walkability: 58, parks: 58 }, waitlist: false, contact: "(603) 555-0167" },
  // NEW HAMPSHIRE - Portsmouth NH
  { name: "Market Square Residences", address: "100 Market St, Portsmouth, NH", coords: [43.0720, -70.7600], rent: 1400, beds: 1, baths: 1, type: "Income-Restricted", sqft: 700, city: "Portsmouth NH", state: "New Hampshire", zip: "03801", yearBuilt: 2019, features: ["Elevator", "Laundry", "Security", "Balcony"], scores: { affordability: 55, safety: 82, schools: 80, transit: 52, walkability: 85, parks: 65 }, waitlist: false, contact: "(603) 555-0210" },
  // NEW HAMPSHIRE - Dover NH
  { name: "Cocheco Falls Apts", address: "300 Central Ave, Dover, NH", coords: [43.1980, -70.8740], rent: 1050, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Dover NH", state: "New Hampshire", zip: "03820", yearBuilt: 2017, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 68, safety: 75, schools: 72, transit: 45, walkability: 62, parks: 58 }, waitlist: false, contact: "(603) 555-0240" },

  // NEW JERSEY - Newark
  { name: "Ironbound Village", address: "350 Ferry St, Newark, NJ", coords: [40.7300, -74.1500], rent: 1100, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Newark", state: "New Jersey", zip: "07105", yearBuilt: 2016, features: ["Parking", "Laundry", "Security"], scores: { affordability: 68, safety: 52, schools: 48, transit: 82, walkability: 78, parks: 48 }, waitlist: false, contact: "(973) 555-0123" },
  { name: "Central Ward Homes", address: "400 S Orange Ave, Newark, NJ", coords: [40.7350, -74.1800], rent: 900, beds: 2, baths: 1, type: "Public Housing", sqft: 850, city: "Newark", state: "New Jersey", zip: "07103", yearBuilt: 2005, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 80, safety: 42, schools: 40, transit: 78, walkability: 72, parks: 42 }, waitlist: true, contact: "(973) 555-0167" },
  // NEW JERSEY - Jersey City
  { name: "Journal Square Place", address: "2800 Kennedy Blvd, Jersey City, NJ", coords: [40.7350, -74.0650], rent: 1500, beds: 1, baths: 1, type: "Income-Restricted", sqft: 650, city: "Jersey City", state: "New Jersey", zip: "07306", yearBuilt: 2020, features: ["Elevator", "Gym", "Laundry", "Security"], scores: { affordability: 52, safety: 65, schools: 58, transit: 90, walkability: 85, parks: 52 }, waitlist: false, contact: "(201) 555-0189" },
  // NEW JERSEY - Trenton
  { name: "Capitol City Apts", address: "200 S Broad St, Trenton, NJ", coords: [40.2150, -74.7400], rent: 850, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Trenton", state: "New Jersey", zip: "08608", yearBuilt: 2009, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 82, safety: 45, schools: 42, transit: 68, walkability: 62, parks: 45 }, waitlist: false, contact: "(609) 555-0198" },

  // NEW MEXICO - Albuquerque
  { name: "Rio Grande Village", address: "1200 Rio Grande Blvd NW, Albuquerque, NM", coords: [35.0900, -106.6700], rent: 800, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Albuquerque", state: "New Mexico", zip: "87104", yearBuilt: 2014, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 82, safety: 55, schools: 52, transit: 55, walkability: 58, parks: 55 }, waitlist: false, contact: "(505) 555-0123" },
  { name: "International District Homes", address: "300 San Mateo Blvd SE, Albuquerque, NM", coords: [35.0700, -106.5800], rent: 700, beds: 2, baths: 1, type: "Section 8", sqft: 780, city: "Albuquerque", state: "New Mexico", zip: "87108", yearBuilt: 2007, features: ["Parking", "Laundry", "Playground"], scores: { affordability: 88, safety: 42, schools: 40, transit: 52, walkability: 48, parks: 42 }, waitlist: true, contact: "(505) 555-0167" },
  // NEW MEXICO - Santa Fe
  { name: "Southside Santa Fe", address: "1600 St Michaels Dr, Santa Fe, NM", coords: [35.6650, -105.9600], rent: 1050, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Santa Fe", state: "New Mexico", zip: "87505", yearBuilt: 2018, features: ["Parking", "Laundry", "Central AC", "Pet Friendly"], scores: { affordability: 65, safety: 72, schools: 68, transit: 48, walkability: 55, parks: 62 }, waitlist: false, contact: "(505) 555-0198" },
  // NEW MEXICO - Rio Rancho
  { name: "Enchanted Hills Apts", address: "1700 Enchanted Hills Dr, Rio Rancho, NM", coords: [35.2850, -106.6700], rent: 850, beds: 2, baths: 1, type: "LIHTC", sqft: 900, city: "Rio Rancho", state: "New Mexico", zip: "87144", yearBuilt: 2018, features: ["Parking", "Central AC", "Laundry", "Playground"], scores: { affordability: 78, safety: 72, schools: 68, transit: 38, walkability: 40, parks: 55 }, waitlist: false, contact: "(505) 555-0220" },
  // NEW MEXICO - Roswell NM
  { name: "Pecos Valley Village", address: "500 N Main St, Roswell, NM", coords: [33.3950, -104.5200], rent: 625, beds: 2, baths: 1, type: "Section 8", sqft: 780, city: "Roswell NM", state: "New Mexico", zip: "88201", yearBuilt: 2010, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 90, safety: 62, schools: 55, transit: 30, walkability: 42, parks: 48 }, waitlist: false, contact: "(575) 555-0134" },

  // NEW YORK - Manhattan
  { name: "East Harlem Houses", address: "2050 2nd Ave, New York, NY", coords: [40.7950, -73.9400], rent: 1800, beds: 2, baths: 1, type: "Public Housing", sqft: 750, city: "Manhattan", state: "New York", zip: "10029", yearBuilt: 2000, features: ["Elevator", "Laundry", "Playground", "Security"], scores: { affordability: 55, safety: 48, schools: 50, transit: 95, walkability: 95, parks: 55 }, waitlist: true, contact: "(212) 555-0123" },
  { name: "Chelsea LIHTC Residences", address: "300 W 23rd St, New York, NY", coords: [40.7450, -73.9980], rent: 2200, beds: 1, baths: 1, type: "LIHTC", sqft: 550, city: "Manhattan", state: "New York", zip: "10011", yearBuilt: 2019, features: ["Elevator", "Laundry", "Gym", "Security"], scores: { affordability: 35, safety: 78, schools: 65, transit: 98, walkability: 98, parks: 60 }, waitlist: true, contact: "(212) 555-0167" },
  { name: "Washington Heights Family", address: "600 W 181st St, New York, NY", coords: [40.8500, -73.9350], rent: 1600, beds: 3, baths: 1, type: "Section 8", sqft: 950, city: "Manhattan", state: "New York", zip: "10033", yearBuilt: 2010, features: ["Elevator", "Laundry", "Playground"], scores: { affordability: 60, safety: 55, schools: 52, transit: 92, walkability: 90, parks: 62 }, waitlist: true, contact: "(212) 555-0198" },
  // NEW YORK - Brooklyn
  { name: "Bed-Stuy Brownstone Apts", address: "450 Halsey St, Brooklyn, NY", coords: [40.6830, -73.9350], rent: 1800, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Brooklyn", state: "New York", zip: "11233", yearBuilt: 2018, features: ["Laundry", "Pet Friendly", "Dishwasher"], scores: { affordability: 48, safety: 55, schools: 52, transit: 88, walkability: 90, parks: 55 }, waitlist: false, contact: "(718) 555-0123" },
  { name: "East New York Housing", address: "500 Stanley Ave, Brooklyn, NY", coords: [40.6600, -73.8800], rent: 1200, beds: 3, baths: 1, type: "Public Housing", sqft: 1000, city: "Brooklyn", state: "New York", zip: "11207", yearBuilt: 2005, features: ["Elevator", "Playground", "Laundry", "Security"], scores: { affordability: 72, safety: 38, schools: 35, transit: 78, walkability: 72, parks: 42 }, waitlist: true, contact: "(718) 555-0167" },
  // NEW YORK - Bronx
  { name: "Hunts Point Family", address: "900 Faile St, Bronx, NY", coords: [40.8200, -73.8900], rent: 1200, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Bronx", state: "New York", zip: "10474", yearBuilt: 2008, features: ["Elevator", "Playground", "Laundry"], scores: { affordability: 72, safety: 40, schools: 38, transit: 82, walkability: 75, parks: 42 }, waitlist: true, contact: "(718) 555-0234" },
  { name: "Fordham Manor Apts", address: "2500 Grand Concourse, Bronx, NY", coords: [40.8600, -73.8970], rent: 1400, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Bronx", state: "New York", zip: "10468", yearBuilt: 2017, features: ["Elevator", "Laundry", "Security", "Parking"], scores: { affordability: 62, safety: 52, schools: 50, transit: 85, walkability: 82, parks: 55 }, waitlist: false, contact: "(718) 555-0256" },
  // NEW YORK - Buffalo
  { name: "Elmwood Village Apts", address: "700 Elmwood Ave, Buffalo, NY", coords: [42.9200, -78.8770], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Buffalo", state: "New York", zip: "14222", yearBuilt: 2015, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 85, safety: 68, schools: 62, transit: 62, walkability: 72, parks: 60 }, waitlist: false, contact: "(716) 555-0189" },
  // NEW YORK - Syracuse
  { name: "Near Westside Homes", address: "200 Gifford St, Syracuse, NY", coords: [43.0450, -76.1600], rent: 700, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Syracuse", state: "New York", zip: "13204", yearBuilt: 2011, features: ["Parking", "Laundry"], scores: { affordability: 88, safety: 48, schools: 45, transit: 58, walkability: 55, parks: 48 }, waitlist: false, contact: "(315) 555-0198" },

  // NORTH CAROLINA - Charlotte
  { name: "NoDa Mill Lofts", address: "400 E 36th St, Charlotte, NC", coords: [35.2500, -80.8200], rent: 1050, beds: 1, baths: 1, type: "LIHTC", sqft: 700, city: "Charlotte", state: "North Carolina", zip: "28205", yearBuilt: 2018, features: ["Laundry", "Gym", "Pet Friendly"], scores: { affordability: 68, safety: 65, schools: 58, transit: 72, walkability: 70, parks: 55 }, waitlist: false, contact: "(704) 555-0123" },
  { name: "West Blvd Homes", address: "2800 West Blvd, Charlotte, NC", coords: [35.2000, -80.8700], rent: 850, beds: 3, baths: 1, type: "Section 8", sqft: 1000, city: "Charlotte", state: "North Carolina", zip: "28208", yearBuilt: 2008, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 82, safety: 48, schools: 42, transit: 58, walkability: 48, parks: 42 }, waitlist: true, contact: "(704) 555-0167" },
  // NORTH CAROLINA - Raleigh
  { name: "Southeast Raleigh Commons", address: "1400 S Wilmington St, Raleigh, NC", coords: [35.7600, -78.6300], rent: 1000, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Raleigh", state: "North Carolina", zip: "27601", yearBuilt: 2016, features: ["Parking", "Laundry", "Central AC", "Dishwasher"], scores: { affordability: 72, safety: 60, schools: 58, transit: 62, walkability: 58, parks: 52 }, waitlist: false, contact: "(919) 555-0189" },
  // NORTH CAROLINA - Durham
  { name: "Durham Central Park Apts", address: "300 E Main St, Durham, NC", coords: [35.9950, -78.8950], rent: 950, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Durham", state: "North Carolina", zip: "27701", yearBuilt: 2019, features: ["Parking", "Laundry", "Pet Friendly", "Balcony"], scores: { affordability: 72, safety: 62, schools: 60, transit: 58, walkability: 65, parks: 60 }, waitlist: false, contact: "(919) 555-0198" },
  // NORTH CAROLINA - Greensboro
  { name: "Gate City Village", address: "800 E Market St, Greensboro, NC", coords: [36.0700, -79.7800], rent: 750, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Greensboro", state: "North Carolina", zip: "27401", yearBuilt: 2010, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 85, safety: 55, schools: 52, transit: 50, walkability: 55, parks: 50 }, waitlist: false, contact: "(336) 555-0134" },

  // NORTH DAKOTA - Fargo
  { name: "Prairie Rose Apartments", address: "1200 3rd Ave N, Fargo, ND", coords: [46.8800, -96.7900], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Fargo", state: "North Dakota", zip: "58102", yearBuilt: 2015, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 82, safety: 72, schools: 70, transit: 48, walkability: 55, parks: 55 }, waitlist: false, contact: "(701) 555-0123" },
  // NORTH DAKOTA - Bismarck
  { name: "Missouri River Place", address: "400 E Main Ave, Bismarck, ND", coords: [46.8100, -100.7800], rent: 725, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Bismarck", state: "North Dakota", zip: "58501", yearBuilt: 2013, features: ["Parking", "Laundry", "Dishwasher"], scores: { affordability: 82, safety: 75, schools: 72, transit: 42, walkability: 50, parks: 58 }, waitlist: false, contact: "(701) 555-0167" },
  // NORTH DAKOTA - Grand Forks
  { name: "University Park Apts", address: "1800 University Ave, Grand Forks, ND", coords: [47.9250, -97.0350], rent: 700, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Grand Forks", state: "North Dakota", zip: "58203", yearBuilt: 2015, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 85, safety: 72, schools: 70, transit: 42, walkability: 52, parks: 55 }, waitlist: false, contact: "(701) 555-0210" },
  // NORTH DAKOTA - Minot
  { name: "Magic City Village", address: "1000 S Broadway, Minot, ND", coords: [48.2300, -101.2900], rent: 725, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Minot", state: "North Dakota", zip: "58701", yearBuilt: 2014, features: ["Parking", "Laundry", "Central AC", "Pet Friendly"], scores: { affordability: 82, safety: 75, schools: 68, transit: 35, walkability: 48, parks: 55 }, waitlist: false, contact: "(701) 555-0240" },

  // OHIO - Columbus OH
  { name: "Franklinton Commons", address: "500 W Town St, Columbus, OH", coords: [39.9550, -83.0100], rent: 850, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Columbus OH", state: "Ohio", zip: "43215", yearBuilt: 2017, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 78, safety: 58, schools: 52, transit: 65, walkability: 62, parks: 55 }, waitlist: false, contact: "(614) 555-0123" },
  { name: "Linden Village", address: "1500 Cleveland Ave, Columbus, OH", coords: [39.9900, -82.9700], rent: 700, beds: 2, baths: 1, type: "Public Housing", sqft: 780, city: "Columbus OH", state: "Ohio", zip: "43211", yearBuilt: 2005, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 88, safety: 42, schools: 40, transit: 58, walkability: 52, parks: 42 }, waitlist: true, contact: "(614) 555-0167" },
  // OHIO - Cleveland
  { name: "Tremont Place", address: "2200 W 11th St, Cleveland, OH", coords: [41.4800, -81.7000], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Cleveland", state: "Ohio", zip: "44113", yearBuilt: 2016, features: ["Parking", "Laundry", "Balcony"], scores: { affordability: 82, safety: 62, schools: 55, transit: 68, walkability: 70, parks: 58 }, waitlist: false, contact: "(216) 555-0189" },
  { name: "Hough Family Homes", address: "7500 Hough Ave, Cleveland, OH", coords: [41.5100, -81.6500], rent: 600, beds: 3, baths: 1, type: "Section 8", sqft: 1000, city: "Cleveland", state: "Ohio", zip: "44103", yearBuilt: 2003, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 92, safety: 40, schools: 38, transit: 62, walkability: 55, parks: 42 }, waitlist: true, contact: "(216) 555-0198" },
  // OHIO - Cincinnati
  { name: "Over-the-Rhine Lofts", address: "1400 Vine St, Cincinnati, OH", coords: [39.1100, -84.5150], rent: 900, beds: 1, baths: 1, type: "Income-Restricted", sqft: 700, city: "Cincinnati", state: "Ohio", zip: "45202", yearBuilt: 2019, features: ["Laundry", "Elevator", "Pet Friendly"], scores: { affordability: 72, safety: 58, schools: 52, transit: 72, walkability: 78, parks: 55 }, waitlist: false, contact: "(513) 555-0134" },

  // OKLAHOMA - Oklahoma City
  { name: "Capitol Hill Village", address: "2400 S Robinson Ave, Oklahoma City, OK", coords: [35.4400, -97.5100], rent: 700, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Oklahoma City", state: "Oklahoma", zip: "73109", yearBuilt: 2014, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 88, safety: 52, schools: 48, transit: 48, walkability: 45, parks: 42 }, waitlist: false, contact: "(405) 555-0123" },
  { name: "Midtown OKC Flats", address: "1000 N Walker Ave, Oklahoma City, OK", coords: [35.4800, -97.5200], rent: 850, beds: 1, baths: 1, type: "Income-Restricted", sqft: 650, city: "Oklahoma City", state: "Oklahoma", zip: "73103", yearBuilt: 2020, features: ["Laundry", "Gym", "Pet Friendly"], scores: { affordability: 78, safety: 65, schools: 58, transit: 55, walkability: 62, parks: 52 }, waitlist: false, contact: "(405) 555-0167" },
  // OKLAHOMA - Tulsa
  { name: "Greenwood District Apts", address: "400 N Greenwood Ave, Tulsa, OK", coords: [36.1600, -95.9900], rent: 700, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Tulsa", state: "Oklahoma", zip: "74120", yearBuilt: 2016, features: ["Parking", "Laundry", "Security"], scores: { affordability: 85, safety: 55, schools: 52, transit: 52, walkability: 58, parks: 50 }, waitlist: false, contact: "(918) 555-0189" },
  { name: "Kendall-Whittier Homes", address: "2100 E Admiral Pl, Tulsa, OK", coords: [36.1650, -95.9500], rent: 625, beds: 2, baths: 1, type: "Section 8", sqft: 780, city: "Tulsa", state: "Oklahoma", zip: "74110", yearBuilt: 2007, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 90, safety: 48, schools: 45, transit: 48, walkability: 50, parks: 45 }, waitlist: false, contact: "(918) 555-0198" },

  // OREGON - Portland OR
  { name: "Lents Commons", address: "9200 SE Foster Rd, Portland, OR", coords: [45.4800, -122.5800], rent: 1100, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Portland OR", state: "Oregon", zip: "97266", yearBuilt: 2018, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 65, safety: 55, schools: 52, transit: 72, walkability: 65, parks: 60 }, waitlist: false, contact: "(503) 555-0123" },
  { name: "Cully Place", address: "4900 NE 72nd Ave, Portland, OR", coords: [45.5600, -122.5700], rent: 1000, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Portland OR", state: "Oregon", zip: "97218", yearBuilt: 2012, features: ["Parking", "Playground", "Laundry", "Central AC"], scores: { affordability: 72, safety: 55, schools: 52, transit: 68, walkability: 58, parks: 55 }, waitlist: true, contact: "(503) 555-0167" },
  { name: "Old Town Lofts", address: "20 NW 5th Ave, Portland, OR", coords: [45.5230, -122.6750], rent: 1250, beds: 1, baths: 1, type: "Income-Restricted", sqft: 650, city: "Portland OR", state: "Oregon", zip: "97209", yearBuilt: 2020, features: ["Elevator", "Laundry", "Security"], scores: { affordability: 58, safety: 45, schools: 48, transit: 90, walkability: 92, parks: 55 }, waitlist: false, contact: "(503) 555-0198" },
  // OREGON - Eugene
  { name: "Whiteaker Community Apts", address: "400 Blair Blvd, Eugene, OR", coords: [44.0550, -123.1000], rent: 900, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Eugene", state: "Oregon", zip: "97402", yearBuilt: 2015, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 72, safety: 60, schools: 62, transit: 60, walkability: 65, parks: 68 }, waitlist: false, contact: "(541) 555-0134" },
  // OREGON - Bend
  { name: "Juniper Ridge Apts", address: "1500 NE Neff Rd, Bend, OR", coords: [44.0900, -121.2900], rent: 1350, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Bend", state: "Oregon", zip: "97701", yearBuilt: 2020, features: ["Parking", "Laundry", "Dishwasher", "Pet Friendly"], scores: { affordability: 55, safety: 82, schools: 78, transit: 42, walkability: 52, parks: 80 }, waitlist: false, contact: "(541) 555-0210" },
  // OREGON - Medford
  { name: "Bear Creek Village", address: "800 E Main St, Medford, OR", coords: [42.3270, -122.8600], rent: 975, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Medford", state: "Oregon", zip: "97504", yearBuilt: 2017, features: ["Parking", "Central AC", "Laundry", "Playground"], scores: { affordability: 70, safety: 62, schools: 58, transit: 42, walkability: 52, parks: 58 }, waitlist: false, contact: "(541) 555-0240" },

  // PENNSYLVANIA - Philadelphia
  { name: "Kensington Family Apts", address: "2200 N Front St, Philadelphia, PA", coords: [39.9850, -75.1250], rent: 950, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Philadelphia", state: "Pennsylvania", zip: "19125", yearBuilt: 2016, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 72, safety: 45, schools: 42, transit: 82, walkability: 78, parks: 48 }, waitlist: false, contact: "(215) 555-0123" },
  { name: "West Philly Village", address: "4800 Spruce St, Philadelphia, PA", coords: [39.9500, -75.2100], rent: 1100, beds: 2, baths: 1, type: "Income-Restricted", sqft: 900, city: "Philadelphia", state: "Pennsylvania", zip: "19139", yearBuilt: 2018, features: ["Laundry", "Parking", "Balcony"], scores: { affordability: 65, safety: 52, schools: 50, transit: 78, walkability: 75, parks: 55 }, waitlist: false, contact: "(215) 555-0167" },
  { name: "Point Breeze Homes", address: "1600 S 20th St, Philadelphia, PA", coords: [39.9350, -75.1750], rent: 850, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Philadelphia", state: "Pennsylvania", zip: "19145", yearBuilt: 2010, features: ["Parking", "Laundry"], scores: { affordability: 78, safety: 48, schools: 45, transit: 75, walkability: 72, parks: 50 }, waitlist: true, contact: "(215) 555-0198" },
  // PENNSYLVANIA - Pittsburgh
  { name: "Lawrenceville Lofts", address: "4000 Butler St, Pittsburgh, PA", coords: [40.4650, -79.9600], rent: 950, beds: 1, baths: 1, type: "LIHTC", sqft: 700, city: "Pittsburgh", state: "Pennsylvania", zip: "15201", yearBuilt: 2017, features: ["Laundry", "Pet Friendly", "Dishwasher"], scores: { affordability: 72, safety: 68, schools: 60, transit: 72, walkability: 78, parks: 58 }, waitlist: false, contact: "(412) 555-0134" },
  { name: "Homewood Family Housing", address: "7200 Hamilton Ave, Pittsburgh, PA", coords: [40.4550, -79.8900], rent: 700, beds: 3, baths: 1, type: "Public Housing", sqft: 1000, city: "Pittsburgh", state: "Pennsylvania", zip: "15208", yearBuilt: 2006, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 88, safety: 42, schools: 38, transit: 60, walkability: 52, parks: 42 }, waitlist: true, contact: "(412) 555-0178" },

  // RHODE ISLAND - Providence
  { name: "South Providence Village", address: "400 Broad St, Providence, RI", coords: [41.8100, -71.4100], rent: 1050, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Providence", state: "Rhode Island", zip: "02907", yearBuilt: 2016, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 70, safety: 52, schools: 48, transit: 68, walkability: 72, parks: 52 }, waitlist: false, contact: "(401) 555-0123" },
  { name: "Federal Hill Flats", address: "200 Atwells Ave, Providence, RI", coords: [41.8200, -71.4200], rent: 1200, beds: 1, baths: 1, type: "Income-Restricted", sqft: 650, city: "Providence", state: "Rhode Island", zip: "02903", yearBuilt: 2020, features: ["Elevator", "Laundry", "Dishwasher"], scores: { affordability: 62, safety: 62, schools: 55, transit: 72, walkability: 80, parks: 55 }, waitlist: false, contact: "(401) 555-0167" },
  // RHODE ISLAND - Cranston
  { name: "Knightsville Commons", address: "1050 Cranston St, Cranston, RI", coords: [41.7800, -71.4400], rent: 1100, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Cranston", state: "Rhode Island", zip: "02920", yearBuilt: 2017, features: ["Parking", "Laundry", "Central AC", "Dishwasher"], scores: { affordability: 68, safety: 70, schools: 68, transit: 55, walkability: 58, parks: 55 }, waitlist: false, contact: "(401) 555-0210" },
  // RHODE ISLAND - Pawtucket
  { name: "Slater Mill Village", address: "200 Main St, Pawtucket, RI", coords: [41.8790, -71.3830], rent: 975, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Pawtucket", state: "Rhode Island", zip: "02860", yearBuilt: 2014, features: ["Parking", "Laundry", "Playground"], scores: { affordability: 75, safety: 55, schools: 52, transit: 62, walkability: 65, parks: 50 }, waitlist: false, contact: "(401) 555-0240" },

  // SOUTH CAROLINA - Charleston SC
  { name: "North Charleston Family", address: "4500 Rivers Ave, Charleston, SC", coords: [32.8500, -80.0000], rent: 950, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Charleston SC", state: "South Carolina", zip: "29405", yearBuilt: 2016, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 72, safety: 55, schools: 52, transit: 50, walkability: 48, parks: 50 }, waitlist: false, contact: "(843) 555-0123" },
  { name: "East Side Commons", address: "800 King St, Charleston, SC", coords: [32.7900, -79.9350], rent: 1100, beds: 1, baths: 1, type: "Income-Restricted", sqft: 650, city: "Charleston SC", state: "South Carolina", zip: "29403", yearBuilt: 2019, features: ["Laundry", "Pet Friendly", "Balcony"], scores: { affordability: 62, safety: 65, schools: 60, transit: 58, walkability: 72, parks: 58 }, waitlist: false, contact: "(843) 555-0167" },
  // SOUTH CAROLINA - Columbia SC
  { name: "Five Points Apts", address: "700 Harden St, Columbia, SC", coords: [34.0050, -81.0250], rent: 750, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Columbia SC", state: "South Carolina", zip: "29205", yearBuilt: 2011, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 82, safety: 58, schools: 55, transit: 50, walkability: 58, parks: 52 }, waitlist: false, contact: "(803) 555-0189" },
  // SOUTH CAROLINA - Greenville SC
  { name: "Nicholtown Gardens", address: "300 Nicholtown Rd, Greenville, SC", coords: [34.8500, -82.3800], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Greenville SC", state: "South Carolina", zip: "29607", yearBuilt: 2015, features: ["Parking", "Laundry", "Playground"], scores: { affordability: 82, safety: 58, schools: 55, transit: 48, walkability: 52, parks: 55 }, waitlist: false, contact: "(864) 555-0134" },
  // SOUTH CAROLINA - Myrtle Beach
  { name: "Ocean Pines Family Apts", address: "1200 N Kings Hwy, Myrtle Beach, SC", coords: [33.7000, -78.8800], rent: 1000, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Myrtle Beach", state: "South Carolina", zip: "29577", yearBuilt: 2018, features: ["Pool", "Parking", "Central AC", "Laundry"], scores: { affordability: 72, safety: 62, schools: 55, transit: 38, walkability: 45, parks: 60 }, waitlist: false, contact: "(843) 555-0210" },
  // SOUTH CAROLINA - North Charleston
  { name: "Rivers Avenue Village", address: "5200 Rivers Ave, North Charleston, SC", coords: [32.8550, -79.9800], rent: 825, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "North Charleston", state: "South Carolina", zip: "29406", yearBuilt: 2013, features: ["Parking", "Central AC", "Laundry", "Playground"], scores: { affordability: 80, safety: 50, schools: 48, transit: 48, walkability: 42, parks: 48 }, waitlist: false, contact: "(843) 555-0240" },

  // SOUTH DAKOTA - Sioux Falls
  { name: "Falls Park Village", address: "400 N Weber Ave, Sioux Falls, SD", coords: [43.5500, -96.7250], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Sioux Falls", state: "South Dakota", zip: "57103", yearBuilt: 2015, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 82, safety: 72, schools: 68, transit: 45, walkability: 52, parks: 58 }, waitlist: false, contact: "(605) 555-0123" },
  // SOUTH DAKOTA - Rapid City
  { name: "Black Hills Housing", address: "600 E North St, Rapid City, SD", coords: [44.0850, -103.2250], rent: 725, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Rapid City", state: "South Dakota", zip: "57701", yearBuilt: 2013, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 82, safety: 70, schools: 65, transit: 38, walkability: 48, parks: 62 }, waitlist: false, contact: "(605) 555-0167" },
  // SOUTH DAKOTA - Aberdeen SD
  { name: "Hub City Village", address: "400 S Main St, Aberdeen, SD", coords: [45.4650, -98.4850], rent: 625, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Aberdeen SD", state: "South Dakota", zip: "57401", yearBuilt: 2013, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 90, safety: 72, schools: 68, transit: 32, walkability: 45, parks: 52 }, waitlist: false, contact: "(605) 555-0210" },
  // SOUTH DAKOTA - Brookings
  { name: "Prairie Winds Apts", address: "800 6th St, Brookings, SD", coords: [44.3100, -96.8000], rent: 700, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Brookings", state: "South Dakota", zip: "57006", yearBuilt: 2016, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 85, safety: 78, schools: 75, transit: 35, walkability: 50, parks: 58 }, waitlist: false, contact: "(605) 555-0240" },

  // TENNESSEE - Nashville
  { name: "East Nashville Village", address: "1200 Gallatin Ave, Nashville, TN", coords: [36.1800, -86.7500], rent: 1050, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Nashville", state: "Tennessee", zip: "37206", yearBuilt: 2017, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 68, safety: 62, schools: 58, transit: 62, walkability: 65, parks: 55 }, waitlist: false, contact: "(615) 555-0123" },
  { name: "Antioch Crossing", address: "3400 Murfreesboro Pike, Nashville, TN", coords: [36.0800, -86.6700], rent: 900, beds: 3, baths: 2, type: "Section 8", sqft: 1100, city: "Nashville", state: "Tennessee", zip: "37013", yearBuilt: 2010, features: ["Parking", "Playground", "Central AC", "Laundry"], scores: { affordability: 78, safety: 52, schools: 48, transit: 50, walkability: 40, parks: 42 }, waitlist: true, contact: "(615) 555-0167" },
  { name: "Jefferson Street Homes", address: "1600 Jefferson St, Nashville, TN", coords: [36.1700, -86.8000], rent: 850, beds: 2, baths: 1, type: "Public Housing", sqft: 800, city: "Nashville", state: "Tennessee", zip: "37208", yearBuilt: 2005, features: ["Parking", "Laundry", "Playground"], scores: { affordability: 82, safety: 48, schools: 45, transit: 60, walkability: 58, parks: 48 }, waitlist: true, contact: "(615) 555-0198" },
  // TENNESSEE - Memphis
  { name: "South Memphis Crossings", address: "1200 S 3rd St, Memphis, TN", coords: [35.1200, -90.0500], rent: 700, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Memphis", state: "Tennessee", zip: "38106", yearBuilt: 2014, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 88, safety: 42, schools: 38, transit: 55, walkability: 50, parks: 42 }, waitlist: false, contact: "(901) 555-0134" },
  { name: "Binghampton Gateway", address: "300 Tillman St, Memphis, TN", coords: [35.1500, -89.9800], rent: 750, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Memphis", state: "Tennessee", zip: "38112", yearBuilt: 2009, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 85, safety: 45, schools: 42, transit: 52, walkability: 48, parks: 45 }, waitlist: false, contact: "(901) 555-0178" },
  // TENNESSEE - Knoxville
  { name: "Five Points Knoxville", address: "2100 Martin Luther King Jr Ave, Knoxville, TN", coords: [35.9650, -83.9100], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Knoxville", state: "Tennessee", zip: "37915", yearBuilt: 2016, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 82, safety: 55, schools: 52, transit: 52, walkability: 55, parks: 50 }, waitlist: false, contact: "(865) 555-0189" },
  // TENNESSEE - Clarksville TN
  { name: "Fort Campbell Blvd Apts", address: "1800 Fort Campbell Blvd, Clarksville, TN", coords: [36.5300, -87.3600], rent: 775, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Clarksville TN", state: "Tennessee", zip: "37042", yearBuilt: 2017, features: ["Parking", "Central AC", "Laundry", "Playground"], scores: { affordability: 82, safety: 62, schools: 58, transit: 38, walkability: 42, parks: 52 }, waitlist: false, contact: "(931) 555-0123" },
  // TENNESSEE - Murfreesboro
  { name: "Stones River Village", address: "1200 Old Fort Pkwy, Murfreesboro, TN", coords: [35.8450, -86.3900], rent: 900, beds: 2, baths: 1, type: "Income-Restricted", sqft: 900, city: "Murfreesboro", state: "Tennessee", zip: "37129", yearBuilt: 2019, features: ["Parking", "Central AC", "Dishwasher", "Pet Friendly"], scores: { affordability: 75, safety: 68, schools: 65, transit: 40, walkability: 48, parks: 55 }, waitlist: false, contact: "(615) 555-0230" },

  // TEXAS - Houston
  { name: "Midtown Houston Flats", address: "2500 Main St, Houston, TX", coords: [29.7450, -95.3800], rent: 1000, beds: 1, baths: 1, type: "LIHTC", sqft: 700, city: "Houston", state: "Texas", zip: "77002", yearBuilt: 2018, features: ["Gym", "Elevator", "Laundry", "Security"], scores: { affordability: 72, safety: 62, schools: 55, transit: 78, walkability: 75, parks: 52 }, waitlist: false, contact: "(713) 555-0123" },
  { name: "Gulfton Village", address: "6300 Hillcroft Ave, Houston, TX", coords: [29.6900, -95.5100], rent: 750, beds: 2, baths: 1, type: "Section 8", sqft: 850, city: "Houston", state: "Texas", zip: "77081", yearBuilt: 2006, features: ["Parking", "Playground", "Central AC"], scores: { affordability: 85, safety: 42, schools: 40, transit: 58, walkability: 48, parks: 38 }, waitlist: true, contact: "(713) 555-0167" },
  { name: "Fifth Ward Gardens", address: "3500 Lyons Ave, Houston, TX", coords: [29.7800, -95.3300], rent: 700, beds: 3, baths: 1, type: "Public Housing", sqft: 1000, city: "Third Ward Houston", state: "Texas", zip: "77020", yearBuilt: 2002, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 90, safety: 38, schools: 35, transit: 55, walkability: 48, parks: 35 }, waitlist: true, contact: "(713) 555-0198" },
  // TEXAS - Dallas
  { name: "Deep Ellum Lofts", address: "2800 Main St, Dallas, TX", coords: [32.7830, -96.7800], rent: 1100, beds: 1, baths: 1, type: "LIHTC", sqft: 700, city: "Dallas", state: "Texas", zip: "75226", yearBuilt: 2019, features: ["Laundry", "Elevator", "Pet Friendly"], scores: { affordability: 68, safety: 58, schools: 50, transit: 75, walkability: 78, parks: 50 }, waitlist: false, contact: "(214) 555-0123" },
  { name: "Oak Cliff Family Housing", address: "800 W Jefferson Blvd, Dallas, TX", coords: [32.7450, -96.8300], rent: 800, beds: 3, baths: 1, type: "Section 8", sqft: 1000, city: "South Dallas", state: "Texas", zip: "75208", yearBuilt: 2008, features: ["Parking", "Playground", "Central AC", "Laundry"], scores: { affordability: 85, safety: 45, schools: 42, transit: 58, walkability: 52, parks: 42 }, waitlist: true, contact: "(214) 555-0167" },
  // TEXAS - San Antonio
  { name: "Westside Village", address: "2100 Culebra Rd, San Antonio, TX", coords: [29.4350, -98.5300], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "San Antonio", state: "Texas", zip: "78228", yearBuilt: 2015, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 85, safety: 55, schools: 50, transit: 55, walkability: 48, parks: 45 }, waitlist: false, contact: "(210) 555-0189" },
  { name: "Eastside Promise", address: "1400 E Commerce St, San Antonio, TX", coords: [29.4200, -98.4700], rent: 650, beds: 2, baths: 1, type: "Section 8", sqft: 780, city: "San Antonio", state: "Texas", zip: "78205", yearBuilt: 2010, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 90, safety: 48, schools: 42, transit: 58, walkability: 55, parks: 42 }, waitlist: false, contact: "(210) 555-0198" },
  // TEXAS - Austin
  { name: "East Austin Commons", address: "1100 E 7th St, Austin, TX", coords: [30.2650, -97.7200], rent: 1200, beds: 1, baths: 1, type: "LIHTC", sqft: 700, city: "Austin", state: "Texas", zip: "78702", yearBuilt: 2018, features: ["Laundry", "Gym", "Pet Friendly"], scores: { affordability: 58, safety: 62, schools: 58, transit: 72, walkability: 75, parks: 60 }, waitlist: false, contact: "(512) 555-0134" },
  { name: "Rundberg Family Apts", address: "8200 N Lamar Blvd, Austin, TX", coords: [30.3600, -97.7100], rent: 950, beds: 2, baths: 1, type: "Section 8", sqft: 850, city: "Austin", state: "Texas", zip: "78753", yearBuilt: 2011, features: ["Pool", "Parking", "Central AC", "Laundry"], scores: { affordability: 72, safety: 48, schools: 45, transit: 60, walkability: 45, parks: 42 }, waitlist: true, contact: "(512) 555-0178" },
  // TEXAS - El Paso
  { name: "Sun City Apartments", address: "4500 N Mesa St, El Paso, TX", coords: [31.7800, -106.5000], rent: 650, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "El Paso", state: "Texas", zip: "79902", yearBuilt: 2013, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 88, safety: 62, schools: 55, transit: 50, walkability: 48, parks: 45 }, waitlist: false, contact: "(915) 555-0145" },

  // UTAH - Salt Lake City
  { name: "Rose Park Village", address: "1300 W 600 N, Salt Lake City, UT", coords: [40.7800, -111.9200], rent: 950, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Salt Lake City", state: "Utah", zip: "84116", yearBuilt: 2016, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 72, safety: 60, schools: 58, transit: 65, walkability: 58, parks: 55 }, waitlist: false, contact: "(801) 555-0123" },
  { name: "Glendale Family Housing", address: "1700 W California Ave, Salt Lake City, UT", coords: [40.7550, -111.9300], rent: 850, beds: 3, baths: 1, type: "Section 8", sqft: 1000, city: "Salt Lake City", state: "Utah", zip: "84104", yearBuilt: 2009, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 80, safety: 52, schools: 48, transit: 58, walkability: 48, parks: 50 }, waitlist: true, contact: "(801) 555-0167" },
  // UTAH - Provo
  { name: "Joaquin Village", address: "500 N Freedom Blvd, Provo, UT", coords: [40.2400, -111.6600], rent: 900, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Provo", state: "Utah", zip: "84601", yearBuilt: 2017, features: ["Parking", "Laundry", "Dishwasher"], scores: { affordability: 72, safety: 72, schools: 70, transit: 55, walkability: 60, parks: 65 }, waitlist: false, contact: "(801) 555-0198" },

  // VERMONT - Burlington VT
  { name: "Old North End Apts", address: "300 N Winooski Ave, Burlington, VT", coords: [44.4800, -73.2100], rent: 1150, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Burlington VT", state: "Vermont", zip: "05401", yearBuilt: 2016, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 60, safety: 72, schools: 70, transit: 60, walkability: 75, parks: 68 }, waitlist: false, contact: "(802) 555-0123" },
  // VERMONT - Montpelier
  { name: "State Street Commons", address: "100 State St, Montpelier, VT", coords: [44.2600, -72.5750], rent: 1050, beds: 1, baths: 1, type: "Income-Restricted", sqft: 650, city: "Montpelier", state: "Vermont", zip: "05602", yearBuilt: 2018, features: ["Parking", "Laundry"], scores: { affordability: 65, safety: 80, schools: 78, transit: 42, walkability: 72, parks: 70 }, waitlist: false, contact: "(802) 555-0167" },
  // VERMONT - Rutland
  { name: "Marble Valley Apts", address: "50 Merchants Row, Rutland, VT", coords: [43.6110, -72.9730], rent: 875, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Rutland", state: "Vermont", zip: "05701", yearBuilt: 2015, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 78, safety: 68, schools: 65, transit: 38, walkability: 62, parks: 60 }, waitlist: false, contact: "(802) 555-0210" },
  // VERMONT - South Burlington
  { name: "Williston Road Village", address: "1200 Williston Rd, South Burlington, VT", coords: [44.4670, -73.1700], rent: 1200, beds: 2, baths: 1, type: "Income-Restricted", sqft: 900, city: "South Burlington", state: "Vermont", zip: "05403", yearBuilt: 2019, features: ["Parking", "Laundry", "Dishwasher", "Central AC"], scores: { affordability: 58, safety: 80, schools: 82, transit: 52, walkability: 55, parks: 68 }, waitlist: false, contact: "(802) 555-0240" },

  // VIRGINIA - Richmond
  { name: "Church Hill Village", address: "3000 E Broad St, Richmond, VA", coords: [37.5350, -77.4100], rent: 950, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Richmond", state: "Virginia", zip: "23223", yearBuilt: 2016, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 75, safety: 55, schools: 50, transit: 62, walkability: 60, parks: 52 }, waitlist: false, contact: "(804) 555-0123" },
  { name: "Highland Park Homes", address: "600 E Brookland Park Blvd, Richmond, VA", coords: [37.5750, -77.4200], rent: 750, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Richmond", state: "Virginia", zip: "23222", yearBuilt: 2008, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 85, safety: 45, schools: 42, transit: 55, walkability: 52, parks: 45 }, waitlist: true, contact: "(804) 555-0167" },
  // VIRGINIA - Virginia Beach
  { name: "Oceanfront Pointe", address: "1900 Atlantic Ave, Virginia Beach, VA", coords: [36.8550, -75.9750], rent: 1100, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Virginia Beach", state: "Virginia", zip: "23451", yearBuilt: 2017, features: ["Pool", "Parking", "Central AC", "Balcony"], scores: { affordability: 65, safety: 72, schools: 68, transit: 48, walkability: 55, parks: 65 }, waitlist: false, contact: "(757) 555-0189" },
  // VIRGINIA - Norfolk
  { name: "Ghent Station Apts", address: "1300 Colonial Ave, Norfolk, VA", coords: [36.8650, -76.2950], rent: 900, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Norfolk", state: "Virginia", zip: "23517", yearBuilt: 2015, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 78, safety: 58, schools: 55, transit: 62, walkability: 65, parks: 55 }, waitlist: false, contact: "(757) 555-0198" },

  // WASHINGTON - Seattle
  { name: "Rainier Valley Homes", address: "4800 Rainier Ave S, Seattle, WA", coords: [47.5600, -122.2850], rent: 1400, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Seattle", state: "Washington", zip: "98118", yearBuilt: 2017, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 55, safety: 58, schools: 55, transit: 78, walkability: 72, parks: 60 }, waitlist: false, contact: "(206) 555-0123" },
  { name: "Beacon Hill Commons", address: "2800 Beacon Ave S, Seattle, WA", coords: [47.5700, -122.3100], rent: 1500, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "South Seattle", state: "Washington", zip: "98144", yearBuilt: 2019, features: ["Parking", "Laundry", "Elevator", "Dishwasher"], scores: { affordability: 52, safety: 65, schools: 62, transit: 82, walkability: 75, parks: 62 }, waitlist: false, contact: "(206) 555-0167" },
  { name: "Capitol Hill LIHTC", address: "1500 Broadway, Seattle, WA", coords: [47.6150, -122.3200], rent: 1800, beds: 1, baths: 1, type: "LIHTC", sqft: 650, city: "Capitol Hill Seattle", state: "Washington", zip: "98122", yearBuilt: 2020, features: ["Elevator", "Laundry", "Gym", "Security"], scores: { affordability: 40, safety: 68, schools: 60, transit: 90, walkability: 92, parks: 65 }, waitlist: true, contact: "(206) 555-0198" },
  // WASHINGTON - Tacoma
  { name: "Hilltop Family Housing", address: "1200 S Yakima Ave, Tacoma, WA", coords: [47.2500, -122.4500], rent: 1000, beds: 2, baths: 1, type: "Section 8", sqft: 850, city: "Tacoma", state: "Washington", zip: "98405", yearBuilt: 2012, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 72, safety: 50, schools: 48, transit: 62, walkability: 58, parks: 50 }, waitlist: true, contact: "(253) 555-0134" },
  // WASHINGTON - Spokane
  { name: "East Central Village", address: "2000 E Sprague Ave, Spokane, WA", coords: [47.6500, -117.3900], rent: 800, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Spokane", state: "Washington", zip: "99202", yearBuilt: 2015, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 82, safety: 58, schools: 55, transit: 52, walkability: 55, parks: 52 }, waitlist: false, contact: "(509) 555-0145" },

  // WEST VIRGINIA - Charleston WV
  { name: "Kanawha Valley Apts", address: "800 Virginia St E, Charleston, WV", coords: [38.3500, -81.6250], rent: 600, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Charleston WV", state: "West Virginia", zip: "25301", yearBuilt: 2012, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 90, safety: 58, schools: 52, transit: 45, walkability: 55, parks: 50 }, waitlist: false, contact: "(304) 555-0123" },
  // WEST VIRGINIA - Huntington WV
  { name: "Highlawn Family Homes", address: "1500 8th Ave, Huntington, WV", coords: [38.4150, -82.4400], rent: 550, beds: 2, baths: 1, type: "Section 8", sqft: 780, city: "Huntington WV", state: "West Virginia", zip: "25701", yearBuilt: 2005, features: ["Parking", "Laundry"], scores: { affordability: 92, safety: 52, schools: 48, transit: 40, walkability: 48, parks: 45 }, waitlist: false, contact: "(304) 555-0167" },
  // WEST VIRGINIA - Morgantown
  { name: "Sunnyside Village", address: "400 Beechurst Ave, Morgantown, WV", coords: [39.6300, -79.9550], rent: 700, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Morgantown", state: "West Virginia", zip: "26505", yearBuilt: 2016, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 82, safety: 65, schools: 68, transit: 48, walkability: 62, parks: 55 }, waitlist: false, contact: "(304) 555-0198" },

  // WISCONSIN - Milwaukee
  { name: "Brewers Hill Apts", address: "200 E Pleasant St, Milwaukee, WI", coords: [43.0550, -87.9050], rent: 850, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Milwaukee", state: "Wisconsin", zip: "53212", yearBuilt: 2017, features: ["Parking", "Laundry", "Balcony"], scores: { affordability: 78, safety: 62, schools: 55, transit: 68, walkability: 72, parks: 58 }, waitlist: false, contact: "(414) 555-0123" },
  { name: "Lindsay Heights Homes", address: "2700 N Teutonia Ave, Milwaukee, WI", coords: [43.0650, -87.9200], rent: 650, beds: 3, baths: 1, type: "Public Housing", sqft: 1000, city: "Milwaukee", state: "Wisconsin", zip: "53206", yearBuilt: 2004, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 90, safety: 40, schools: 35, transit: 60, walkability: 55, parks: 42 }, waitlist: true, contact: "(414) 555-0167" },
  // WISCONSIN - Madison WI
  { name: "Allied Drive Village", address: "2000 Allied Dr, Madison, WI", coords: [43.0400, -89.4200], rent: 950, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Madison WI", state: "Wisconsin", zip: "53711", yearBuilt: 2016, features: ["Parking", "Laundry", "Pet Friendly", "Dishwasher"], scores: { affordability: 70, safety: 60, schools: 62, transit: 62, walkability: 55, parks: 58 }, waitlist: false, contact: "(608) 555-0189" },
  // WISCONSIN - Green Bay
  { name: "East Side Green Bay", address: "800 E Walnut St, Green Bay, WI", coords: [44.5150, -88.0050], rent: 700, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Green Bay", state: "Wisconsin", zip: "54301", yearBuilt: 2010, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 85, safety: 65, schools: 62, transit: 45, walkability: 52, parks: 55 }, waitlist: false, contact: "(920) 555-0134" },

  // WYOMING - Cheyenne
  { name: "Capitol Village Apts", address: "300 E 17th St, Cheyenne, WY", coords: [41.1420, -104.8150], rent: 775, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Cheyenne", state: "Wyoming", zip: "82001", yearBuilt: 2014, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 80, safety: 70, schools: 65, transit: 38, walkability: 48, parks: 55 }, waitlist: false, contact: "(307) 555-0123" },
  // WYOMING - Casper
  { name: "Oil City Family Housing", address: "500 S Center St, Casper, WY", coords: [42.8600, -106.3150], rent: 700, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Casper", state: "Wyoming", zip: "82601", yearBuilt: 2012, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 82, safety: 72, schools: 68, transit: 35, walkability: 45, parks: 58 }, waitlist: false, contact: "(307) 555-0167" },
  // WYOMING - Laramie
  { name: "University Heights Apts", address: "1200 N 3rd St, Laramie, WY", coords: [41.3150, -105.5900], rent: 775, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Laramie", state: "Wyoming", zip: "82072", yearBuilt: 2016, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 80, safety: 75, schools: 72, transit: 35, walkability: 55, parks: 62 }, waitlist: false, contact: "(307) 555-0210" },
  // WYOMING - Gillette
  { name: "Energy Capital Village", address: "800 E 2nd St, Gillette, WY", coords: [44.2910, -105.5000], rent: 725, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Gillette", state: "Wyoming", zip: "82716", yearBuilt: 2014, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 82, safety: 72, schools: 65, transit: 30, walkability: 40, parks: 55 }, waitlist: false, contact: "(307) 555-0240" },

  // === NEW LISTINGS BELOW ===

  // ALABAMA - Montgomery
  { name: "Capitol Heights Apts", address: "1400 S Court St, Montgomery, AL", coords: [32.3600, -86.2950], rent: 700, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Montgomery", state: "Alabama", zip: "36104", yearBuilt: 2014, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 88, safety: 52, schools: 50, transit: 48, walkability: 50, parks: 48 }, waitlist: false, contact: "(334) 555-0123" },
  { name: "Southlawn Village", address: "3100 Mobile Hwy, Montgomery, AL", coords: [32.3400, -86.3200], rent: 625, beds: 2, baths: 1, type: "Section 8", sqft: 780, city: "Montgomery", state: "Alabama", zip: "36108", yearBuilt: 2006, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 92, safety: 45, schools: 42, transit: 40, walkability: 38, parks: 42 }, waitlist: true, contact: "(334) 555-0167" },
  // ALABAMA - Tuscaloosa
  { name: "Druid City Commons", address: "800 15th St, Tuscaloosa, AL", coords: [33.2050, -87.5600], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Tuscaloosa", state: "Alabama", zip: "35401", yearBuilt: 2016, features: ["Parking", "Laundry", "Central AC", "Pet Friendly"], scores: { affordability: 82, safety: 62, schools: 60, transit: 50, walkability: 55, parks: 55 }, waitlist: false, contact: "(205) 555-0300" },
  // ALABAMA - Hoover
  { name: "Riverchase Family Apts", address: "2300 Riverchase Galleria, Hoover, AL", coords: [33.3800, -86.8100], rent: 950, beds: 2, baths: 2, type: "Income-Restricted", sqft: 950, city: "Hoover", state: "Alabama", zip: "35244", yearBuilt: 2019, features: ["Pool", "Parking", "Central AC", "Gym"], scores: { affordability: 72, safety: 80, schools: 82, transit: 45, walkability: 48, parks: 62 }, waitlist: false, contact: "(205) 555-0310" },

  // ARIZONA - Chandler
  { name: "San Marcos Village", address: "200 N Arizona Ave, Chandler, AZ", coords: [33.3100, -111.8400], rent: 1100, beds: 2, baths: 1, type: "LIHTC", sqft: 900, city: "Chandler", state: "Arizona", zip: "85225", yearBuilt: 2018, features: ["Pool", "Parking", "Central AC", "Dishwasher"], scores: { affordability: 68, safety: 75, schools: 78, transit: 55, walkability: 52, parks: 58 }, waitlist: false, contact: "(480) 555-0300" },
  // ARIZONA - Gilbert
  { name: "Heritage Village", address: "1400 S Gilbert Rd, Gilbert, AZ", coords: [33.3300, -111.7900], rent: 1200, beds: 2, baths: 2, type: "Income-Restricted", sqft: 950, city: "Gilbert", state: "Arizona", zip: "85296", yearBuilt: 2020, features: ["Pool", "Gym", "Parking", "Central AC"], scores: { affordability: 62, safety: 82, schools: 85, transit: 48, walkability: 50, parks: 62 }, waitlist: false, contact: "(480) 555-0310" },
  // ARIZONA - Flagstaff
  { name: "Ponderosa Pines Apts", address: "900 W Route 66, Flagstaff, AZ", coords: [35.2000, -111.6600], rent: 1100, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Flagstaff", state: "Arizona", zip: "86001", yearBuilt: 2017, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 65, safety: 75, schools: 72, transit: 48, walkability: 60, parks: 78 }, waitlist: false, contact: "(928) 555-0300" },
  // ARIZONA - Mesa
  { name: "Mesa Verde Commons", address: "1800 E Main St, Mesa, AZ", coords: [33.4150, -111.8000], rent: 1000, beds: 2, baths: 1, type: "Section 8", sqft: 850, city: "Mesa", state: "Arizona", zip: "85203", yearBuilt: 2012, features: ["Pool", "Parking", "Central AC", "Laundry"], scores: { affordability: 75, safety: 65, schools: 62, transit: 58, walkability: 50, parks: 52 }, waitlist: false, contact: "(480) 555-0320" },
  // ARIZONA - Scottsdale
  { name: "Old Town Scottsdale Flats", address: "7300 E Indian School Rd, Scottsdale, AZ", coords: [33.4900, -111.9200], rent: 1600, beds: 1, baths: 1, type: "Income-Restricted", sqft: 700, city: "Scottsdale", state: "Arizona", zip: "85251", yearBuilt: 2021, features: ["Pool", "Gym", "Parking", "Elevator"], scores: { affordability: 48, safety: 82, schools: 78, transit: 52, walkability: 65, parks: 60 }, waitlist: false, contact: "(480) 555-0330" },
  // ARIZONA - Tempe
  { name: "University Commons", address: "1200 E Apache Blvd, Tempe, AZ", coords: [33.4140, -111.9300], rent: 1050, beds: 1, baths: 1, type: "LIHTC", sqft: 650, city: "Tempe", state: "Arizona", zip: "85281", yearBuilt: 2019, features: ["Laundry", "Gym", "Pet Friendly"], scores: { affordability: 68, safety: 70, schools: 68, transit: 72, walkability: 78, parks: 55 }, waitlist: false, contact: "(480) 555-0340" },

  // ARKANSAS - Jonesboro
  { name: "Craighead Village", address: "500 S Church St, Jonesboro, AR", coords: [35.8400, -90.7000], rent: 600, beds: 2, baths: 1, type: "Section 8", sqft: 780, city: "Jonesboro", state: "Arkansas", zip: "72401", yearBuilt: 2010, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 90, safety: 62, schools: 58, transit: 35, walkability: 42, parks: 50 }, waitlist: false, contact: "(870) 555-0300" },
  // ARKANSAS - Fort Smith
  { name: "Garrison Avenue Place", address: "1200 Garrison Ave, Fort Smith, AR", coords: [35.3850, -94.4000], rent: 575, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Fort Smith", state: "Arkansas", zip: "72901", yearBuilt: 2013, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 92, safety: 55, schools: 52, transit: 38, walkability: 45, parks: 48 }, waitlist: false, contact: "(479) 555-0300" },

  // CALIFORNIA - Riverside
  { name: "Mission Grove Apts", address: "3200 Mission Inn Ave, Riverside, CA", coords: [33.9500, -117.3950], rent: 1100, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Riverside", state: "California", zip: "92501", yearBuilt: 2017, features: ["Pool", "Parking", "Central AC", "Laundry"], scores: { affordability: 68, safety: 58, schools: 55, transit: 55, walkability: 50, parks: 48 }, waitlist: false, contact: "(951) 555-0300" },
  { name: "Eastside Community Housing", address: "4800 University Ave, Riverside, CA", coords: [33.9650, -117.3600], rent: 950, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Riverside", state: "California", zip: "92507", yearBuilt: 2011, features: ["Parking", "Laundry", "Playground"], scores: { affordability: 75, safety: 52, schools: 50, transit: 50, walkability: 42, parks: 45 }, waitlist: true, contact: "(951) 555-0310" },
  // CALIFORNIA - Bakersfield
  { name: "Valley Plaza Village", address: "2800 Ming Ave, Bakersfield, CA", coords: [35.3500, -119.0200], rent: 850, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Bakersfield", state: "California", zip: "93304", yearBuilt: 2015, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 80, safety: 55, schools: 50, transit: 42, walkability: 38, parks: 42 }, waitlist: false, contact: "(661) 555-0300" },
  // CALIFORNIA - Stockton
  { name: "Downtown Stockton Lofts", address: "400 E Main St, Stockton, CA", coords: [37.9550, -121.2900], rent: 900, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Stockton", state: "California", zip: "95202", yearBuilt: 2018, features: ["Parking", "Laundry", "Elevator"], scores: { affordability: 78, safety: 48, schools: 45, transit: 55, walkability: 55, parks: 45 }, waitlist: false, contact: "(209) 555-0300" },
  // CALIFORNIA - Long Beach
  { name: "Signal Hill Commons", address: "2400 Cherry Ave, Long Beach, CA", coords: [33.8000, -118.1800], rent: 1400, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Long Beach", state: "California", zip: "90806", yearBuilt: 2019, features: ["Parking", "Laundry", "Pool", "Central AC"], scores: { affordability: 55, safety: 60, schools: 55, transit: 75, walkability: 68, parks: 52 }, waitlist: false, contact: "(562) 555-0300" },
  { name: "North Long Beach Family", address: "6200 Atlantic Ave, Long Beach, CA", coords: [33.8300, -118.1900], rent: 1200, beds: 3, baths: 1, type: "Section 8", sqft: 1000, city: "Long Beach", state: "California", zip: "90805", yearBuilt: 2010, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 62, safety: 48, schools: 42, transit: 68, walkability: 58, parks: 42 }, waitlist: true, contact: "(562) 555-0310" },
  // CALIFORNIA - Oakland
  { name: "Fruitvale Transit Village", address: "3300 E 12th St, Oakland, CA", coords: [37.7750, -122.2250], rent: 1600, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Oakland", state: "California", zip: "94601", yearBuilt: 2019, features: ["Parking", "Laundry", "Elevator", "Security"], scores: { affordability: 48, safety: 50, schools: 48, transit: 88, walkability: 82, parks: 50 }, waitlist: false, contact: "(510) 555-0300" },
  // CALIFORNIA - San Jose
  { name: "East San Jose Village", address: "2100 Story Rd, San Jose, CA", coords: [37.3300, -121.8500], rent: 1800, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "San Jose", state: "California", zip: "95122", yearBuilt: 2020, features: ["Parking", "Laundry", "Central AC", "Dishwasher"], scores: { affordability: 42, safety: 55, schools: 52, transit: 72, walkability: 65, parks: 48 }, waitlist: false, contact: "(408) 555-0300" },
  // CALIFORNIA - Santa Rosa
  { name: "Coffey Park Rebuild", address: "1600 Hopper Ave, Santa Rosa, CA", coords: [38.4600, -122.7400], rent: 1350, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Santa Rosa", state: "California", zip: "95403", yearBuilt: 2021, features: ["Parking", "Laundry", "Central AC", "Pet Friendly"], scores: { affordability: 58, safety: 68, schools: 65, transit: 48, walkability: 52, parks: 60 }, waitlist: false, contact: "(707) 555-0300" },
  // CALIFORNIA - Modesto
  { name: "McHenry Village Apts", address: "1700 McHenry Ave, Modesto, CA", coords: [37.6400, -120.9900], rent: 900, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Modesto", state: "California", zip: "95350", yearBuilt: 2012, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 78, safety: 55, schools: 52, transit: 42, walkability: 45, parks: 48 }, waitlist: false, contact: "(209) 555-0310" },

  // COLORADO - Fort Collins
  { name: "Old Town Family Apts", address: "300 N College Ave, Fort Collins, CO", coords: [40.5900, -105.0800], rent: 1100, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Fort Collins", state: "Colorado", zip: "80524", yearBuilt: 2018, features: ["Parking", "Laundry", "Pet Friendly", "Dishwasher"], scores: { affordability: 65, safety: 78, schools: 75, transit: 55, walkability: 68, parks: 72 }, waitlist: false, contact: "(970) 555-0300" },
  // COLORADO - Pueblo
  { name: "Union Avenue Village", address: "200 S Union Ave, Pueblo, CO", coords: [38.2600, -104.6100], rent: 700, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Pueblo", state: "Colorado", zip: "81003", yearBuilt: 2011, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 88, safety: 52, schools: 48, transit: 42, walkability: 50, parks: 48 }, waitlist: false, contact: "(719) 555-0300" },
  // COLORADO - Aurora
  { name: "Havana Street Commons", address: "1600 S Havana St, Aurora, CO", coords: [39.6900, -104.8350], rent: 1050, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Aurora", state: "Colorado", zip: "80012", yearBuilt: 2017, features: ["Parking", "Laundry", "Central AC", "Playground"], scores: { affordability: 72, safety: 58, schools: 55, transit: 62, walkability: 50, parks: 52 }, waitlist: false, contact: "(303) 555-0300" },
  // COLORADO - Boulder
  { name: "North Boulder Flats", address: "2800 Broadway, Boulder, CO", coords: [40.0200, -105.2700], rent: 1650, beds: 1, baths: 1, type: "Income-Restricted", sqft: 650, city: "Boulder", state: "Colorado", zip: "80304", yearBuilt: 2020, features: ["Laundry", "Pet Friendly", "Balcony"], scores: { affordability: 42, safety: 82, schools: 80, transit: 68, walkability: 82, parks: 80 }, waitlist: true, contact: "(303) 555-0310" },

  // CONNECTICUT - Stamford
  { name: "South End Commons", address: "60 Elm St, Stamford, CT", coords: [41.0500, -73.5400], rent: 1800, beds: 1, baths: 1, type: "Income-Restricted", sqft: 700, city: "Stamford", state: "Connecticut", zip: "06902", yearBuilt: 2020, features: ["Elevator", "Gym", "Laundry", "Security"], scores: { affordability: 42, safety: 72, schools: 68, transit: 80, walkability: 82, parks: 55 }, waitlist: false, contact: "(203) 555-0300" },

  // FLORIDA - St Petersburg
  { name: "Midtown St Pete", address: "1800 22nd St S, St Petersburg, FL", coords: [27.7600, -82.6500], rent: 1000, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "St Petersburg", state: "Florida", zip: "33712", yearBuilt: 2017, features: ["Pool", "Parking", "Central AC", "Laundry"], scores: { affordability: 72, safety: 55, schools: 52, transit: 58, walkability: 55, parks: 60 }, waitlist: false, contact: "(727) 555-0300" },
  { name: "Grand Central District Apts", address: "2400 Central Ave, St Petersburg, FL", coords: [27.7700, -82.6600], rent: 1150, beds: 1, baths: 1, type: "Income-Restricted", sqft: 700, city: "St Petersburg", state: "Florida", zip: "33713", yearBuilt: 2019, features: ["Laundry", "Pet Friendly", "Balcony"], scores: { affordability: 68, safety: 62, schools: 55, transit: 62, walkability: 68, parks: 62 }, waitlist: false, contact: "(727) 555-0310" },
  // FLORIDA - Tallahassee
  { name: "Frenchtown Heritage Apts", address: "600 W Brevard St, Tallahassee, FL", coords: [30.4450, -84.2900], rent: 800, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Tallahassee", state: "Florida", zip: "32301", yearBuilt: 2015, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 82, safety: 55, schools: 52, transit: 50, walkability: 55, parks: 52 }, waitlist: false, contact: "(850) 555-0300" },
  // FLORIDA - Cape Coral
  { name: "Cape Coral Gardens", address: "1500 SE 47th St, Cape Coral, FL", coords: [26.5800, -81.9400], rent: 1100, beds: 2, baths: 1, type: "Income-Restricted", sqft: 900, city: "Cape Coral", state: "Florida", zip: "33904", yearBuilt: 2018, features: ["Pool", "Parking", "Central AC", "Laundry"], scores: { affordability: 68, safety: 72, schools: 65, transit: 35, walkability: 38, parks: 55 }, waitlist: false, contact: "(239) 555-0300" },
  // FLORIDA - Gainesville FL
  { name: "University Heights", address: "1300 SW 5th Ave, Gainesville, FL", coords: [29.6500, -82.3300], rent: 800, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Gainesville FL", state: "Florida", zip: "32601", yearBuilt: 2016, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 80, safety: 62, schools: 65, transit: 55, walkability: 62, parks: 58 }, waitlist: false, contact: "(352) 555-0300" },
  // FLORIDA - Fort Lauderdale
  { name: "Progresso Village Apts", address: "700 NW 6th St, Fort Lauderdale, FL", coords: [26.1300, -80.1500], rent: 1400, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Fort Lauderdale", state: "Florida", zip: "33311", yearBuilt: 2018, features: ["Pool", "Parking", "Central AC", "Laundry"], scores: { affordability: 55, safety: 50, schools: 48, transit: 72, walkability: 65, parks: 48 }, waitlist: false, contact: "(954) 555-0300" },
  // FLORIDA - Port St Lucie
  { name: "Tradition Field Village", address: "1800 SW Tradition Blvd, Port St Lucie, FL", coords: [27.2700, -80.3600], rent: 1050, beds: 2, baths: 2, type: "LIHTC", sqft: 900, city: "Port St Lucie", state: "Florida", zip: "34987", yearBuilt: 2019, features: ["Pool", "Parking", "Central AC", "Playground"], scores: { affordability: 72, safety: 72, schools: 68, transit: 32, walkability: 35, parks: 58 }, waitlist: false, contact: "(772) 555-0300" },

  // GEORGIA - Columbus GA
  { name: "Uptown Columbus Apts", address: "1000 Broadway, Columbus, GA", coords: [32.4600, -84.9900], rent: 700, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Columbus GA", state: "Georgia", zip: "31901", yearBuilt: 2015, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 88, safety: 55, schools: 50, transit: 42, walkability: 50, parks: 48 }, waitlist: false, contact: "(706) 555-0300" },
  // GEORGIA - Macon
  { name: "Ocmulgee Heritage Village", address: "600 Poplar St, Macon, GA", coords: [32.8400, -83.6300], rent: 650, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Macon", state: "Georgia", zip: "31201", yearBuilt: 2010, features: ["Parking", "Laundry", "Playground"], scores: { affordability: 90, safety: 48, schools: 45, transit: 40, walkability: 48, parks: 45 }, waitlist: false, contact: "(478) 555-0300" },
  // GEORGIA - Athens GA
  { name: "Classic City Village", address: "400 E Broad St, Athens, GA", coords: [33.9500, -83.3550], rent: 800, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Athens GA", state: "Georgia", zip: "30601", yearBuilt: 2017, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 78, safety: 62, schools: 60, transit: 55, walkability: 62, parks: 58 }, waitlist: false, contact: "(706) 555-0310" },
  // GEORGIA - Marietta
  { name: "Marietta Square Flats", address: "200 S Marietta Pkwy, Marietta, GA", coords: [33.9500, -84.5500], rent: 1100, beds: 2, baths: 1, type: "Income-Restricted", sqft: 900, city: "Marietta", state: "Georgia", zip: "30060", yearBuilt: 2019, features: ["Parking", "Laundry", "Central AC", "Dishwasher"], scores: { affordability: 65, safety: 68, schools: 65, transit: 55, walkability: 58, parks: 55 }, waitlist: false, contact: "(770) 555-0300" },

  // HAWAII - Kapolei
  { name: "West Oahu Village", address: "600 Kapolei Pkwy, Kapolei, HI", coords: [21.3370, -158.0550], rent: 1800, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Kapolei", state: "Hawaii", zip: "96707", yearBuilt: 2019, features: ["Parking", "Laundry", "Pool", "Playground"], scores: { affordability: 42, safety: 75, schools: 70, transit: 55, walkability: 52, parks: 65 }, waitlist: true, contact: "(808) 555-0300" },
  // HAWAII - Kailua
  { name: "Windward Village Apts", address: "300 Kuulei Rd, Kailua, HI", coords: [21.4000, -157.7400], rent: 1900, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Kailua", state: "Hawaii", zip: "96734", yearBuilt: 2018, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 38, safety: 80, schools: 78, transit: 48, walkability: 55, parks: 75 }, waitlist: false, contact: "(808) 555-0310" },

  // IDAHO - Twin Falls
  { name: "Snake River Village", address: "400 Blue Lakes Blvd N, Twin Falls, ID", coords: [42.5600, -114.4600], rent: 800, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Twin Falls", state: "Idaho", zip: "83301", yearBuilt: 2016, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 82, safety: 72, schools: 68, transit: 32, walkability: 48, parks: 58 }, waitlist: false, contact: "(208) 555-0300" },
  // IDAHO - Idaho Falls
  { name: "River Walk Apts", address: "800 W Broadway St, Idaho Falls, ID", coords: [43.4900, -112.0400], rent: 800, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Idaho Falls", state: "Idaho", zip: "83402", yearBuilt: 2015, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 82, safety: 72, schools: 70, transit: 35, walkability: 50, parks: 62 }, waitlist: false, contact: "(208) 555-0310" },
  // IDAHO - Nampa
  { name: "Canyon County Village", address: "500 12th Ave S, Nampa, ID", coords: [43.5400, -116.5600], rent: 900, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Nampa", state: "Idaho", zip: "83651", yearBuilt: 2017, features: ["Parking", "Laundry", "Central AC", "Playground"], scores: { affordability: 78, safety: 68, schools: 65, transit: 35, walkability: 42, parks: 55 }, waitlist: false, contact: "(208) 555-0320" },

  // ILLINOIS - Naperville
  { name: "Downtown Naperville Apts", address: "200 S Washington St, Naperville, IL", coords: [41.7700, -88.1500], rent: 1500, beds: 2, baths: 1, type: "Income-Restricted", sqft: 900, city: "Naperville", state: "Illinois", zip: "60540", yearBuilt: 2020, features: ["Parking", "Laundry", "Dishwasher", "Gym"], scores: { affordability: 50, safety: 85, schools: 88, transit: 58, walkability: 65, parks: 68 }, waitlist: false, contact: "(630) 555-0300" },
  // ILLINOIS - Peoria IL
  { name: "Warehouse District Lofts", address: "300 SW Water St, Peoria, IL", coords: [40.6900, -89.5900], rent: 650, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Peoria IL", state: "Illinois", zip: "61602", yearBuilt: 2014, features: ["Parking", "Laundry", "Elevator"], scores: { affordability: 88, safety: 58, schools: 55, transit: 48, walkability: 55, parks: 50 }, waitlist: false, contact: "(309) 555-0300" },
  // ILLINOIS - Champaign
  { name: "Campustown Village", address: "600 E Green St, Champaign, IL", coords: [40.1100, -88.2300], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Champaign", state: "Illinois", zip: "61820", yearBuilt: 2016, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 82, safety: 68, schools: 70, transit: 58, walkability: 65, parks: 60 }, waitlist: false, contact: "(217) 555-0300" },
  // ILLINOIS - Rockford
  { name: "Rock River Village", address: "400 E State St, Rockford, IL", coords: [42.2700, -89.0900], rent: 600, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Rockford", state: "Illinois", zip: "61104", yearBuilt: 2009, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 92, safety: 50, schools: 48, transit: 42, walkability: 50, parks: 48 }, waitlist: false, contact: "(815) 555-0300" },

  // INDIANA - Evansville
  { name: "Historic Downtown Apts", address: "400 Main St, Evansville, IN", coords: [37.9750, -87.5700], rent: 650, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Evansville", state: "Indiana", zip: "47708", yearBuilt: 2015, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 88, safety: 60, schools: 58, transit: 42, walkability: 52, parks: 50 }, waitlist: false, contact: "(812) 555-0300" },
  // INDIANA - Bloomington IN
  { name: "College Mall Village", address: "1000 N College Ave, Bloomington, IN", coords: [39.1700, -86.5250], rent: 800, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Bloomington IN", state: "Indiana", zip: "47404", yearBuilt: 2017, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 78, safety: 72, schools: 72, transit: 55, walkability: 62, parks: 62 }, waitlist: false, contact: "(812) 555-0310" },
  // INDIANA - South Bend
  { name: "West Side Bend Apts", address: "1500 W Western Ave, South Bend, IN", coords: [41.6700, -86.2600], rent: 625, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "South Bend", state: "Indiana", zip: "46619", yearBuilt: 2010, features: ["Parking", "Laundry", "Playground"], scores: { affordability: 90, safety: 50, schools: 48, transit: 45, walkability: 48, parks: 45 }, waitlist: false, contact: "(574) 555-0300" },
  // INDIANA - Lafayette IN
  { name: "Wabash Landing Apts", address: "300 S 2nd St, Lafayette, IN", coords: [40.4200, -86.8800], rent: 700, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Lafayette IN", state: "Indiana", zip: "47901", yearBuilt: 2016, features: ["Parking", "Laundry", "Dishwasher"], scores: { affordability: 85, safety: 68, schools: 65, transit: 48, walkability: 55, parks: 55 }, waitlist: false, contact: "(765) 555-0300" },

  // IOWA - Cedar Rapids
  { name: "NewBo Village", address: "1100 3rd St SE, Cedar Rapids, IA", coords: [41.9750, -91.6600], rent: 700, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Cedar Rapids", state: "Iowa", zip: "52401", yearBuilt: 2016, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 85, safety: 65, schools: 62, transit: 48, walkability: 55, parks: 55 }, waitlist: false, contact: "(319) 555-0300" },

  // KANSAS - Kansas City KS
  { name: "Strawberry Hill Apts", address: "600 N 5th St, Kansas City, KS", coords: [39.1200, -94.6300], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Kansas City KS", state: "Kansas", zip: "66101", yearBuilt: 2015, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 85, safety: 52, schools: 48, transit: 55, walkability: 52, parks: 48 }, waitlist: false, contact: "(913) 555-0300" },

  // KENTUCKY - Bowling Green KY
  { name: "Fountain Square Village", address: "800 State St, Bowling Green, KY", coords: [36.9700, -86.4800], rent: 650, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Bowling Green KY", state: "Kentucky", zip: "42101", yearBuilt: 2015, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 88, safety: 68, schools: 62, transit: 38, walkability: 52, parks: 52 }, waitlist: false, contact: "(270) 555-0300" },

  // MARYLAND - Bethesda
  { name: "Woodmont Triangle Apts", address: "4800 Auburn Ave, Bethesda, MD", coords: [38.9850, -77.0950], rent: 2000, beds: 1, baths: 1, type: "Income-Restricted", sqft: 700, city: "Bethesda", state: "Maryland", zip: "20814", yearBuilt: 2020, features: ["Elevator", "Gym", "Laundry", "Security"], scores: { affordability: 35, safety: 85, schools: 88, transit: 85, walkability: 88, parks: 68 }, waitlist: true, contact: "(301) 555-0300" },

  // MASSACHUSETTS - Cambridge
  { name: "Central Square Residences", address: "500 Massachusetts Ave, Cambridge, MA", coords: [42.3650, -71.1050], rent: 2200, beds: 1, baths: 1, type: "Income-Restricted", sqft: 600, city: "Cambridge", state: "Massachusetts", zip: "02139", yearBuilt: 2021, features: ["Elevator", "Laundry", "Security", "Gym"], scores: { affordability: 32, safety: 75, schools: 82, transit: 92, walkability: 95, parks: 62 }, waitlist: true, contact: "(617) 555-0300" },
  // MASSACHUSETTS - Springfield MA
  { name: "State Street Commons", address: "200 State St, Springfield, MA", coords: [42.1050, -72.5900], rent: 850, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Springfield MA", state: "Massachusetts", zip: "01103", yearBuilt: 2012, features: ["Parking", "Laundry", "Elevator"], scores: { affordability: 82, safety: 48, schools: 45, transit: 58, walkability: 62, parks: 48 }, waitlist: false, contact: "(413) 555-0300" },

  // MICHIGAN - Flint
  { name: "Carriage Town Lofts", address: "500 S Saginaw St, Flint, MI", coords: [43.0100, -83.6900], rent: 575, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Flint", state: "Michigan", zip: "48502", yearBuilt: 2014, features: ["Parking", "Laundry", "Security"], scores: { affordability: 92, safety: 38, schools: 35, transit: 45, walkability: 50, parks: 40 }, waitlist: false, contact: "(810) 555-0300" },
  // MICHIGAN - Kalamazoo
  { name: "Northside Village", address: "1200 N Westnedge Ave, Kalamazoo, MI", coords: [42.3000, -85.5850], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Kalamazoo", state: "Michigan", zip: "49007", yearBuilt: 2016, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 82, safety: 62, schools: 58, transit: 52, walkability: 58, parks: 55 }, waitlist: false, contact: "(269) 555-0300" },
  // MICHIGAN - Ann Arbor
  { name: "Kerrytown Village", address: "400 N 4th Ave, Ann Arbor, MI", coords: [42.2850, -83.7400], rent: 1200, beds: 1, baths: 1, type: "Income-Restricted", sqft: 650, city: "Ann Arbor", state: "Michigan", zip: "48104", yearBuilt: 2019, features: ["Laundry", "Elevator", "Pet Friendly"], scores: { affordability: 55, safety: 78, schools: 82, transit: 68, walkability: 82, parks: 65 }, waitlist: false, contact: "(734) 555-0300" },
  // MICHIGAN - Lansing
  { name: "REO Town Lofts", address: "1200 S Washington Ave, Lansing, MI", coords: [42.7250, -84.5500], rent: 700, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Lansing", state: "Michigan", zip: "48910", yearBuilt: 2015, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 85, safety: 58, schools: 55, transit: 52, walkability: 55, parks: 50 }, waitlist: false, contact: "(517) 555-0300" },

  // MINNESOTA - Duluth
  { name: "Lincoln Park Village", address: "2000 W Superior St, Duluth, MN", coords: [46.7800, -92.1200], rent: 800, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Duluth", state: "Minnesota", zip: "55806", yearBuilt: 2016, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 78, safety: 65, schools: 62, transit: 48, walkability: 55, parks: 68 }, waitlist: false, contact: "(218) 555-0300" },
  // MINNESOTA - Rochester MN
  { name: "Downtown Rochester Apts", address: "300 S Broadway, Rochester, MN", coords: [44.0100, -92.4800], rent: 950, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Rochester MN", state: "Minnesota", zip: "55904", yearBuilt: 2018, features: ["Parking", "Laundry", "Elevator", "Dishwasher"], scores: { affordability: 72, safety: 78, schools: 75, transit: 52, walkability: 62, parks: 60 }, waitlist: false, contact: "(507) 555-0300" },

  // MISSISSIPPI - Biloxi
  { name: "Biloxi Bay Village", address: "900 Howard Ave, Biloxi, MS", coords: [30.3950, -88.8850], rent: 700, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Biloxi", state: "Mississippi", zip: "39530", yearBuilt: 2015, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 85, safety: 58, schools: 52, transit: 38, walkability: 42, parks: 55 }, waitlist: false, contact: "(228) 555-0300" },
  // MISSISSIPPI - Hattiesburg
  { name: "Pine Belt Village", address: "500 W Pine St, Hattiesburg, MS", coords: [31.3300, -89.2900], rent: 575, beds: 2, baths: 1, type: "Section 8", sqft: 780, city: "Hattiesburg", state: "Mississippi", zip: "39401", yearBuilt: 2010, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 92, safety: 55, schools: 52, transit: 32, walkability: 42, parks: 48 }, waitlist: false, contact: "(601) 555-0300" },

  // MISSOURI - Springfield MO
  { name: "Commercial Street Village", address: "400 E Commercial St, Springfield, MO", coords: [37.2150, -93.2900], rent: 650, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Springfield MO", state: "Missouri", zip: "65803", yearBuilt: 2016, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 88, safety: 60, schools: 58, transit: 42, walkability: 50, parks: 52 }, waitlist: false, contact: "(417) 555-0300" },
  // MISSOURI - Columbia MO
  { name: "East Campus Apts", address: "1200 E Broadway, Columbia, MO", coords: [38.9500, -92.3200], rent: 750, beds: 2, baths: 1, type: "Income-Restricted", sqft: 800, city: "Columbia MO", state: "Missouri", zip: "65201", yearBuilt: 2017, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 82, safety: 68, schools: 70, transit: 50, walkability: 58, parks: 60 }, waitlist: false, contact: "(573) 555-0300" },

  // MONTANA - Great Falls
  { name: "Electric City Village", address: "500 Central Ave, Great Falls, MT", coords: [47.5050, -111.3000], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Great Falls", state: "Montana", zip: "59401", yearBuilt: 2014, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 82, safety: 65, schools: 62, transit: 35, walkability: 50, parks: 58 }, waitlist: false, contact: "(406) 555-0300" },

  // NEVADA - North Las Vegas
  { name: "Aliante Village Apts", address: "6000 N Decatur Blvd, North Las Vegas, NV", coords: [36.2650, -115.1900], rent: 1000, beds: 2, baths: 1, type: "LIHTC", sqft: 900, city: "North Las Vegas", state: "Nevada", zip: "89131", yearBuilt: 2018, features: ["Pool", "Parking", "Central AC", "Playground"], scores: { affordability: 75, safety: 58, schools: 52, transit: 48, walkability: 40, parks: 48 }, waitlist: false, contact: "(702) 555-0300" },
  // NEVADA - Henderson
  { name: "Water Street District", address: "200 S Water St, Henderson, NV", coords: [36.0400, -114.9800], rent: 1200, beds: 2, baths: 1, type: "Income-Restricted", sqft: 900, city: "Henderson", state: "Nevada", zip: "89015", yearBuilt: 2019, features: ["Pool", "Gym", "Parking", "Dishwasher"], scores: { affordability: 62, safety: 75, schools: 72, transit: 48, walkability: 55, parks: 58 }, waitlist: false, contact: "(702) 555-0310" },

  // NEW HAMPSHIRE - Concord NH
  { name: "Main Street Village", address: "200 N Main St, Concord, NH", coords: [43.2100, -71.5350], rent: 1000, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Concord NH", state: "New Hampshire", zip: "03301", yearBuilt: 2016, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 72, safety: 78, schools: 75, transit: 42, walkability: 60, parks: 62 }, waitlist: false, contact: "(603) 555-0300" },

  // NEW JERSEY - Paterson
  { name: "Great Falls Village", address: "200 McBride Ave, Paterson, NJ", coords: [40.9200, -74.1750], rent: 1050, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Paterson", state: "New Jersey", zip: "07501", yearBuilt: 2016, features: ["Parking", "Laundry", "Security"], scores: { affordability: 72, safety: 45, schools: 42, transit: 72, walkability: 68, parks: 48 }, waitlist: false, contact: "(973) 555-0300" },
  // NEW JERSEY - Elizabeth NJ
  { name: "Midtown Elizabeth Apts", address: "500 Elizabeth Ave, Elizabeth, NJ", coords: [40.6650, -74.2100], rent: 1100, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Elizabeth NJ", state: "New Jersey", zip: "07206", yearBuilt: 2017, features: ["Parking", "Laundry", "Elevator"], scores: { affordability: 68, safety: 48, schools: 45, transit: 82, walkability: 75, parks: 45 }, waitlist: false, contact: "(908) 555-0300" },

  // NEW MEXICO - Las Cruces
  { name: "Mesilla Valley Village", address: "600 S Main St, Las Cruces, NM", coords: [32.3200, -106.7600], rent: 700, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Las Cruces", state: "New Mexico", zip: "88001", yearBuilt: 2015, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 88, safety: 60, schools: 55, transit: 38, walkability: 48, parks: 50 }, waitlist: false, contact: "(575) 555-0300" },

  // NEW YORK - Albany NY
  { name: "South End Village", address: "200 S Pearl St, Albany, NY", coords: [42.6450, -73.7550], rent: 900, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Albany NY", state: "New York", zip: "12202", yearBuilt: 2016, features: ["Parking", "Laundry", "Security"], scores: { affordability: 78, safety: 55, schools: 52, transit: 65, walkability: 68, parks: 52 }, waitlist: false, contact: "(518) 555-0300" },
  { name: "Arbor Hill Commons", address: "400 N Pearl St, Albany, NY", coords: [42.6600, -73.7500], rent: 750, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Albany NY", state: "New York", zip: "12204", yearBuilt: 2010, features: ["Parking", "Playground", "Laundry"], scores: { affordability: 85, safety: 45, schools: 42, transit: 60, walkability: 62, parks: 48 }, waitlist: true, contact: "(518) 555-0310" },
  // NEW YORK - Yonkers
  { name: "Waterfront Yonkers Apts", address: "200 Warburton Ave, Yonkers, NY", coords: [40.9350, -73.8950], rent: 1400, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Yonkers", state: "New York", zip: "10701", yearBuilt: 2019, features: ["Parking", "Laundry", "Elevator", "Security"], scores: { affordability: 55, safety: 60, schools: 55, transit: 78, walkability: 72, parks: 55 }, waitlist: false, contact: "(914) 555-0300" },
  // NEW YORK - Rochester NY
  { name: "South Wedge Village", address: "500 South Ave, Rochester, NY", coords: [43.1400, -77.6100], rent: 750, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Rochester NY", state: "New York", zip: "14620", yearBuilt: 2015, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 85, safety: 62, schools: 58, transit: 58, walkability: 65, parks: 55 }, waitlist: false, contact: "(585) 555-0300" },
  // NEW YORK - Queens
  { name: "Jackson Heights Village", address: "3700 82nd St, Jackson Heights, NY", coords: [40.7500, -73.8800], rent: 1500, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Queens", state: "New York", zip: "11372", yearBuilt: 2018, features: ["Elevator", "Laundry", "Security"], scores: { affordability: 55, safety: 62, schools: 60, transit: 90, walkability: 85, parks: 52 }, waitlist: false, contact: "(718) 555-0300" },
  // NEW YORK - Staten Island
  { name: "St George Landing", address: "75 Bay St, Staten Island, NY", coords: [40.6430, -74.0770], rent: 1200, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Staten Island", state: "New York", zip: "10301", yearBuilt: 2019, features: ["Parking", "Laundry", "Elevator", "Balcony"], scores: { affordability: 62, safety: 68, schools: 62, transit: 72, walkability: 68, parks: 58 }, waitlist: false, contact: "(718) 555-0310" },

  // NORTH CAROLINA - Winston-Salem
  { name: "Arts District Village", address: "600 N Trade St, Winston-Salem, NC", coords: [36.1050, -80.2400], rent: 800, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Winston-Salem", state: "North Carolina", zip: "27101", yearBuilt: 2017, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 82, safety: 58, schools: 55, transit: 48, walkability: 55, parks: 52 }, waitlist: false, contact: "(336) 555-0300" },
  // NORTH CAROLINA - Fayetteville NC
  { name: "Haymount Village", address: "400 Hay St, Fayetteville, NC", coords: [35.0550, -78.8800], rent: 750, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Fayetteville NC", state: "North Carolina", zip: "28301", yearBuilt: 2012, features: ["Parking", "Laundry", "Central AC", "Playground"], scores: { affordability: 85, safety: 52, schools: 48, transit: 42, walkability: 48, parks: 45 }, waitlist: false, contact: "(910) 555-0300" },
  // NORTH CAROLINA - Asheville
  { name: "River Arts District Lofts", address: "200 Clingman Ave, Asheville, NC", coords: [35.5800, -82.5700], rent: 1100, beds: 1, baths: 1, type: "LIHTC", sqft: 700, city: "Asheville", state: "North Carolina", zip: "28801", yearBuilt: 2019, features: ["Laundry", "Pet Friendly", "Balcony"], scores: { affordability: 62, safety: 72, schools: 68, transit: 48, walkability: 65, parks: 72 }, waitlist: false, contact: "(828) 555-0300" },
  { name: "Kenilworth Village", address: "1400 Hendersonville Rd, Asheville, NC", coords: [35.5500, -82.5400], rent: 950, beds: 2, baths: 1, type: "Section 8", sqft: 850, city: "Asheville", state: "North Carolina", zip: "28803", yearBuilt: 2014, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 72, safety: 65, schools: 62, transit: 42, walkability: 48, parks: 62 }, waitlist: true, contact: "(828) 555-0310" },
  // NORTH CAROLINA - Wilmington NC
  { name: "Castle Street Commons", address: "800 Castle St, Wilmington, NC", coords: [34.2200, -77.9400], rent: 1000, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Wilmington NC", state: "North Carolina", zip: "28401", yearBuilt: 2018, features: ["Parking", "Laundry", "Central AC", "Pet Friendly"], scores: { affordability: 72, safety: 62, schools: 58, transit: 42, walkability: 55, parks: 60 }, waitlist: false, contact: "(910) 555-0310" },

  // OHIO - Toledo
  { name: "Uptown Toledo Village", address: "400 N Superior St, Toledo, OH", coords: [41.6550, -83.5350], rent: 650, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Toledo", state: "Ohio", zip: "43604", yearBuilt: 2015, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 90, safety: 52, schools: 48, transit: 52, walkability: 55, parks: 48 }, waitlist: false, contact: "(419) 555-0300" },
  // OHIO - Akron
  { name: "Highland Square Apts", address: "800 W Market St, Akron, OH", coords: [41.0850, -81.5250], rent: 650, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Akron", state: "Ohio", zip: "44303", yearBuilt: 2016, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 88, safety: 60, schools: 55, transit: 48, walkability: 55, parks: 52 }, waitlist: false, contact: "(330) 555-0300" },
  // OHIO - Dayton
  { name: "Oregon District Flats", address: "400 E 5th St, Dayton, OH", coords: [39.7600, -84.1850], rent: 625, beds: 1, baths: 1, type: "Income-Restricted", sqft: 650, city: "Dayton", state: "Ohio", zip: "45402", yearBuilt: 2018, features: ["Laundry", "Pet Friendly", "Elevator"], scores: { affordability: 90, safety: 55, schools: 48, transit: 52, walkability: 62, parks: 50 }, waitlist: false, contact: "(937) 555-0300" },
  // OHIO - Youngstown
  { name: "Mahoning Valley Village", address: "300 W Federal St, Youngstown, OH", coords: [41.1000, -80.6500], rent: 525, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Youngstown", state: "Ohio", zip: "44503", yearBuilt: 2010, features: ["Parking", "Laundry"], scores: { affordability: 95, safety: 42, schools: 38, transit: 42, walkability: 48, parks: 42 }, waitlist: false, contact: "(330) 555-0310" },

  // OKLAHOMA - Norman
  { name: "Campus Corner Village", address: "700 Asp Ave, Norman, OK", coords: [35.2200, -97.4400], rent: 750, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Norman", state: "Oklahoma", zip: "73069", yearBuilt: 2017, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 82, safety: 72, schools: 70, transit: 42, walkability: 55, parks: 58 }, waitlist: false, contact: "(405) 555-0300" },
  // OKLAHOMA - Broken Arrow
  { name: "Rose District Apts", address: "300 S Main St, Broken Arrow, OK", coords: [36.0600, -95.7950], rent: 800, beds: 2, baths: 1, type: "LIHTC", sqft: 900, city: "Broken Arrow", state: "Oklahoma", zip: "74012", yearBuilt: 2018, features: ["Parking", "Central AC", "Laundry", "Dishwasher"], scores: { affordability: 80, safety: 72, schools: 72, transit: 38, walkability: 48, parks: 55 }, waitlist: false, contact: "(918) 555-0300" },
  // OKLAHOMA - Lawton
  { name: "Fort Sill Village", address: "500 SW Lee Blvd, Lawton, OK", coords: [34.6050, -98.4000], rent: 600, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Lawton", state: "Oklahoma", zip: "73501", yearBuilt: 2011, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 92, safety: 55, schools: 50, transit: 32, walkability: 38, parks: 42 }, waitlist: false, contact: "(580) 555-0300" },

  // OREGON - Salem OR
  { name: "Capitol Mall Village", address: "600 State St, Salem, OR", coords: [44.9400, -123.0350], rent: 950, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Salem OR", state: "Oregon", zip: "97301", yearBuilt: 2017, features: ["Parking", "Laundry", "Central AC", "Pet Friendly"], scores: { affordability: 75, safety: 62, schools: 58, transit: 50, walkability: 55, parks: 55 }, waitlist: false, contact: "(503) 555-0300" },

  // PENNSYLVANIA - Allentown
  { name: "Center City Allentown", address: "600 Hamilton St, Allentown, PA", coords: [40.6050, -75.4900], rent: 850, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Allentown", state: "Pennsylvania", zip: "18101", yearBuilt: 2016, features: ["Parking", "Laundry", "Elevator"], scores: { affordability: 78, safety: 52, schools: 48, transit: 58, walkability: 62, parks: 48 }, waitlist: false, contact: "(610) 555-0300" },
  // PENNSYLVANIA - Harrisburg
  { name: "Midtown Harrisburg Apts", address: "300 N 3rd St, Harrisburg, PA", coords: [40.2750, -76.8850], rent: 800, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Harrisburg", state: "Pennsylvania", zip: "17101", yearBuilt: 2017, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 82, safety: 55, schools: 48, transit: 55, walkability: 60, parks: 52 }, waitlist: false, contact: "(717) 555-0300" },
  // PENNSYLVANIA - Erie PA
  { name: "Bayfront Village", address: "200 State St, Erie, PA", coords: [42.1300, -80.0850], rent: 650, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Erie PA", state: "Pennsylvania", zip: "16501", yearBuilt: 2015, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 88, safety: 55, schools: 52, transit: 45, walkability: 52, parks: 55 }, waitlist: false, contact: "(814) 555-0300" },
  // PENNSYLVANIA - Scranton
  { name: "Lackawanna Station Apts", address: "400 Lackawanna Ave, Scranton, PA", coords: [41.4100, -75.6600], rent: 700, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Scranton", state: "Pennsylvania", zip: "18503", yearBuilt: 2016, features: ["Parking", "Laundry", "Elevator"], scores: { affordability: 85, safety: 62, schools: 58, transit: 48, walkability: 58, parks: 50 }, waitlist: false, contact: "(570) 555-0300" },

  // RHODE ISLAND - Warwick
  { name: "Apponaug Village", address: "3100 Post Rd, Warwick, RI", coords: [41.7050, -71.4200], rent: 1050, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Warwick", state: "Rhode Island", zip: "02886", yearBuilt: 2018, features: ["Parking", "Laundry", "Central AC", "Dishwasher"], scores: { affordability: 72, safety: 72, schools: 68, transit: 50, walkability: 52, parks: 55 }, waitlist: false, contact: "(401) 555-0300" },

  // SOUTH CAROLINA - Greenville SC (additional)
  { name: "West End Village", address: "600 S Main St, Greenville, SC", coords: [34.8400, -82.4000], rent: 850, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Greenville SC", state: "South Carolina", zip: "29601", yearBuilt: 2018, features: ["Parking", "Laundry", "Pet Friendly", "Dishwasher"], scores: { affordability: 78, safety: 65, schools: 62, transit: 50, walkability: 62, parks: 58 }, waitlist: false, contact: "(864) 555-0300" },

  // TENNESSEE - Chattanooga
  { name: "Southside Village", address: "1400 Cowart St, Chattanooga, TN", coords: [35.0400, -85.3050], rent: 850, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Chattanooga", state: "Tennessee", zip: "37408", yearBuilt: 2017, features: ["Parking", "Laundry", "Central AC", "Pet Friendly"], scores: { affordability: 78, safety: 62, schools: 58, transit: 52, walkability: 58, parks: 55 }, waitlist: false, contact: "(423) 555-0300" },
  // TENNESSEE - Franklin TN
  { name: "Five Points Franklin", address: "200 5th Ave N, Franklin, TN", coords: [35.9250, -86.8700], rent: 1350, beds: 2, baths: 1, type: "Income-Restricted", sqft: 900, city: "Franklin TN", state: "Tennessee", zip: "37064", yearBuilt: 2020, features: ["Parking", "Central AC", "Dishwasher", "Gym"], scores: { affordability: 55, safety: 82, schools: 85, transit: 42, walkability: 55, parks: 62 }, waitlist: false, contact: "(615) 555-0300" },
  // TENNESSEE - Jackson TN
  { name: "Hub City Village", address: "300 E Main St, Jackson, TN", coords: [35.6150, -88.8100], rent: 600, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Jackson TN", state: "Tennessee", zip: "38301", yearBuilt: 2014, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 90, safety: 58, schools: 52, transit: 35, walkability: 42, parks: 48 }, waitlist: false, contact: "(731) 555-0300" },

  // TEXAS - Arlington TX
  { name: "Division Street Village", address: "1000 E Division St, Arlington, TX", coords: [32.7350, -97.1000], rent: 950, beds: 2, baths: 1, type: "LIHTC", sqft: 900, city: "Arlington TX", state: "Texas", zip: "76011", yearBuilt: 2017, features: ["Pool", "Parking", "Central AC", "Laundry"], scores: { affordability: 75, safety: 62, schools: 60, transit: 45, walkability: 42, parks: 52 }, waitlist: false, contact: "(817) 555-0300" },
  // TEXAS - Plano
  { name: "Downtown Plano Commons", address: "1000 E 15th St, Plano, TX", coords: [33.0200, -96.6950], rent: 1350, beds: 2, baths: 1, type: "Income-Restricted", sqft: 900, city: "Plano", state: "Texas", zip: "75074", yearBuilt: 2019, features: ["Parking", "Central AC", "Gym", "Dishwasher"], scores: { affordability: 58, safety: 82, schools: 85, transit: 52, walkability: 55, parks: 62 }, waitlist: false, contact: "(972) 555-0300" },
  // TEXAS - Corpus Christi
  { name: "Bayfront Village", address: "400 N Shoreline Blvd, Corpus Christi, TX", coords: [27.8000, -97.3900], rent: 800, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Corpus Christi", state: "Texas", zip: "78401", yearBuilt: 2015, features: ["Parking", "Central AC", "Laundry", "Pool"], scores: { affordability: 82, safety: 58, schools: 52, transit: 42, walkability: 48, parks: 55 }, waitlist: false, contact: "(361) 555-0300" },
  // TEXAS - Lubbock
  { name: "Depot District Lofts", address: "600 Buddy Holly Ave, Lubbock, TX", coords: [33.5800, -101.8500], rent: 700, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Lubbock", state: "Texas", zip: "79401", yearBuilt: 2016, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 88, safety: 60, schools: 55, transit: 38, walkability: 48, parks: 48 }, waitlist: false, contact: "(806) 555-0300" },
  // TEXAS - Amarillo
  { name: "Sixth Street Village", address: "400 SW 6th Ave, Amarillo, TX", coords: [35.2200, -101.8350], rent: 700, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Amarillo", state: "Texas", zip: "79101", yearBuilt: 2012, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 88, safety: 60, schools: 55, transit: 35, walkability: 42, parks: 48 }, waitlist: false, contact: "(806) 555-0310" },
  // TEXAS - Laredo
  { name: "San Bernardo Village", address: "1400 San Bernardo Ave, Laredo, TX", coords: [27.5100, -99.5050], rent: 700, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Laredo", state: "Texas", zip: "78040", yearBuilt: 2015, features: ["Parking", "Central AC", "Laundry", "Playground"], scores: { affordability: 88, safety: 55, schools: 48, transit: 40, walkability: 45, parks: 42 }, waitlist: false, contact: "(956) 555-0300" },
  // TEXAS - Fort Worth (additional)
  { name: "Near Southside Village", address: "1100 S Main St, Fort Worth, TX", coords: [32.7400, -97.3300], rent: 950, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Fort Worth", state: "Texas", zip: "76104", yearBuilt: 2018, features: ["Parking", "Laundry", "Central AC", "Pet Friendly"], scores: { affordability: 75, safety: 58, schools: 55, transit: 55, walkability: 58, parks: 50 }, waitlist: false, contact: "(817) 555-0310" },
  // TEXAS - Brownsville
  { name: "Downtown Brownsville Apts", address: "600 E Elizabeth St, Brownsville, TX", coords: [25.9050, -97.4950], rent: 600, beds: 2, baths: 1, type: "Section 8", sqft: 780, city: "Brownsville", state: "Texas", zip: "78520", yearBuilt: 2010, features: ["Parking", "Central AC", "Laundry"], scores: { affordability: 92, safety: 52, schools: 45, transit: 38, walkability: 42, parks: 42 }, waitlist: false, contact: "(956) 555-0310" },
  // TEXAS - Midland TX
  { name: "Midland Towers Apts", address: "300 N Big Spring St, Midland, TX", coords: [32.0000, -102.0800], rent: 900, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Midland TX", state: "Texas", zip: "79701", yearBuilt: 2017, features: ["Parking", "Central AC", "Laundry", "Pool"], scores: { affordability: 78, safety: 65, schools: 60, transit: 30, walkability: 38, parks: 45 }, waitlist: false, contact: "(432) 555-0300" },

  // UTAH - West Jordan
  { name: "Jordan Landing Village", address: "3700 W 7800 S, West Jordan, UT", coords: [40.6100, -111.9400], rent: 1050, beds: 2, baths: 1, type: "LIHTC", sqft: 900, city: "West Jordan", state: "Utah", zip: "84088", yearBuilt: 2018, features: ["Parking", "Central AC", "Laundry", "Playground"], scores: { affordability: 72, safety: 72, schools: 68, transit: 48, walkability: 42, parks: 55 }, waitlist: false, contact: "(801) 555-0300" },
  // UTAH - St George UT
  { name: "Red Rock Village", address: "500 E St George Blvd, St George, UT", coords: [37.1000, -113.5650], rent: 1100, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "St George UT", state: "Utah", zip: "84770", yearBuilt: 2019, features: ["Pool", "Parking", "Central AC", "Laundry"], scores: { affordability: 68, safety: 78, schools: 72, transit: 32, walkability: 48, parks: 62 }, waitlist: false, contact: "(435) 555-0300" },
  // UTAH - Ogden
  { name: "25th Street Lofts", address: "200 25th St, Ogden, UT", coords: [41.2250, -111.9700], rent: 900, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Ogden", state: "Utah", zip: "84401", yearBuilt: 2017, features: ["Parking", "Laundry", "Pet Friendly", "Elevator"], scores: { affordability: 78, safety: 62, schools: 58, transit: 52, walkability: 60, parks: 58 }, waitlist: false, contact: "(801) 555-0310" },

  // VIRGINIA - Chesapeake VA
  { name: "Great Bridge Village", address: "800 S Battlefield Blvd, Chesapeake, VA", coords: [36.7200, -76.2300], rent: 1000, beds: 2, baths: 1, type: "LIHTC", sqft: 900, city: "Chesapeake VA", state: "Virginia", zip: "23322", yearBuilt: 2017, features: ["Parking", "Central AC", "Laundry", "Pool"], scores: { affordability: 72, safety: 72, schools: 70, transit: 38, walkability: 42, parks: 55 }, waitlist: false, contact: "(757) 555-0300" },
  // VIRGINIA - Alexandria VA
  { name: "Arlandria Commons", address: "3800 Mt Vernon Ave, Alexandria, VA", coords: [38.8300, -77.0600], rent: 1700, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Alexandria VA", state: "Virginia", zip: "22305", yearBuilt: 2020, features: ["Parking", "Laundry", "Elevator", "Security"], scores: { affordability: 45, safety: 72, schools: 70, transit: 82, walkability: 78, parks: 60 }, waitlist: false, contact: "(703) 555-0300" },
  // VIRGINIA - Newport News
  { name: "Warwick Village Apts", address: "600 Warwick Blvd, Newport News, VA", coords: [37.0900, -76.4700], rent: 800, beds: 2, baths: 1, type: "Section 8", sqft: 850, city: "Newport News", state: "Virginia", zip: "23607", yearBuilt: 2012, features: ["Parking", "Laundry", "Central AC", "Playground"], scores: { affordability: 82, safety: 50, schools: 48, transit: 45, walkability: 48, parks: 48 }, waitlist: false, contact: "(757) 555-0310" },
  // VIRGINIA - Charlottesville
  { name: "Belmont Village", address: "400 Monticello Rd, Charlottesville, VA", coords: [38.0250, -78.4750], rent: 1100, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Charlottesville", state: "Virginia", zip: "22902", yearBuilt: 2018, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 65, safety: 72, schools: 72, transit: 52, walkability: 62, parks: 65 }, waitlist: false, contact: "(434) 555-0300" },
  // VIRGINIA - Roanoke
  { name: "Market Square Village", address: "200 Market St, Roanoke, VA", coords: [37.2700, -79.9400], rent: 775, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Roanoke", state: "Virginia", zip: "24011", yearBuilt: 2016, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 82, safety: 62, schools: 58, transit: 45, walkability: 55, parks: 55 }, waitlist: false, contact: "(540) 555-0300" },
  // VIRGINIA - Arlington VA
  { name: "Columbia Pike Village", address: "3500 Columbia Pike, Arlington, VA", coords: [38.8600, -77.1000], rent: 1800, beds: 1, baths: 1, type: "Income-Restricted", sqft: 700, city: "Arlington VA", state: "Virginia", zip: "22204", yearBuilt: 2020, features: ["Elevator", "Gym", "Laundry", "Security"], scores: { affordability: 40, safety: 78, schools: 80, transit: 85, walkability: 82, parks: 62 }, waitlist: true, contact: "(703) 555-0310" },

  // WASHINGTON - Vancouver WA
  { name: "Uptown Village Apts", address: "1400 Broadway, Vancouver, WA", coords: [45.6350, -122.6650], rent: 1100, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Vancouver WA", state: "Washington", zip: "98660", yearBuilt: 2018, features: ["Parking", "Laundry", "Pet Friendly", "Central AC"], scores: { affordability: 68, safety: 65, schools: 62, transit: 55, walkability: 58, parks: 55 }, waitlist: false, contact: "(360) 555-0300" },
  // WASHINGTON - Olympia
  { name: "Capitol Campus Village", address: "400 Capitol Way, Olympia, WA", coords: [47.0400, -122.9000], rent: 1050, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Olympia", state: "Washington", zip: "98501", yearBuilt: 2017, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 72, safety: 72, schools: 70, transit: 48, walkability: 58, parks: 65 }, waitlist: false, contact: "(360) 555-0310" },
  // WASHINGTON - Everett WA
  { name: "Bayside Village", address: "2800 Hoyt Ave, Everett, WA", coords: [47.9800, -122.2050], rent: 1100, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Everett WA", state: "Washington", zip: "98201", yearBuilt: 2018, features: ["Parking", "Laundry", "Balcony"], scores: { affordability: 68, safety: 62, schools: 58, transit: 62, walkability: 58, parks: 55 }, waitlist: false, contact: "(425) 555-0300" },
  // WASHINGTON - Kennewick
  { name: "Columbia Center Village", address: "400 N Columbia Center Blvd, Kennewick, WA", coords: [46.2100, -119.1400], rent: 900, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Kennewick", state: "Washington", zip: "99336", yearBuilt: 2016, features: ["Parking", "Central AC", "Laundry", "Playground"], scores: { affordability: 78, safety: 68, schools: 65, transit: 35, walkability: 42, parks: 52 }, waitlist: false, contact: "(509) 555-0300" },

  // WEST VIRGINIA - Wheeling WV
  { name: "Wheeling Island Village", address: "200 Main St, Wheeling, WV", coords: [40.0650, -80.7200], rent: 525, beds: 2, baths: 1, type: "Section 8", sqft: 780, city: "Wheeling WV", state: "West Virginia", zip: "26003", yearBuilt: 2008, features: ["Parking", "Laundry"], scores: { affordability: 95, safety: 55, schools: 52, transit: 35, walkability: 48, parks: 48 }, waitlist: false, contact: "(304) 555-0300" },
  // WEST VIRGINIA - Parkersburg
  { name: "Market Street Apts", address: "400 Market St, Parkersburg, WV", coords: [39.2650, -81.5600], rent: 500, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Parkersburg", state: "West Virginia", zip: "26101", yearBuilt: 2012, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 95, safety: 58, schools: 52, transit: 30, walkability: 45, parks: 48 }, waitlist: false, contact: "(304) 555-0310" },

  // WISCONSIN - Kenosha
  { name: "Harborpark Village", address: "400 56th St, Kenosha, WI", coords: [42.5850, -87.8200], rent: 850, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Kenosha", state: "Wisconsin", zip: "53140", yearBuilt: 2017, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 78, safety: 62, schools: 58, transit: 45, walkability: 52, parks: 55 }, waitlist: false, contact: "(262) 555-0300" },
  // WISCONSIN - Racine
  { name: "Uptown Racine Apts", address: "200 6th St, Racine, WI", coords: [42.7250, -87.7850], rent: 750, beds: 2, baths: 1, type: "Section 8", sqft: 800, city: "Racine", state: "Wisconsin", zip: "53403", yearBuilt: 2012, features: ["Parking", "Laundry", "Playground"], scores: { affordability: 82, safety: 52, schools: 48, transit: 42, walkability: 50, parks: 48 }, waitlist: false, contact: "(262) 555-0310" },
  // WISCONSIN - Appleton WI
  { name: "College Avenue Lofts", address: "300 W College Ave, Appleton, WI", coords: [44.2620, -88.4150], rent: 800, beds: 2, baths: 1, type: "LIHTC", sqft: 850, city: "Appleton WI", state: "Wisconsin", zip: "54911", yearBuilt: 2017, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 82, safety: 72, schools: 72, transit: 42, walkability: 58, parks: 55 }, waitlist: false, contact: "(920) 555-0300" },
  // WISCONSIN - Eau Claire
  { name: "Water Street Village", address: "200 S Barstow St, Eau Claire, WI", coords: [44.8100, -91.5000], rent: 750, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Eau Claire", state: "Wisconsin", zip: "54701", yearBuilt: 2016, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 82, safety: 72, schools: 70, transit: 42, walkability: 55, parks: 58 }, waitlist: false, contact: "(715) 555-0300" },

  // WYOMING - Rock Springs
  { name: "Sweetwater Village", address: "400 N Center St, Rock Springs, WY", coords: [41.5900, -109.2050], rent: 700, beds: 2, baths: 1, type: "LIHTC", sqft: 800, city: "Rock Springs", state: "Wyoming", zip: "82901", yearBuilt: 2014, features: ["Parking", "Laundry", "Central AC"], scores: { affordability: 85, safety: 68, schools: 62, transit: 28, walkability: 38, parks: 52 }, waitlist: false, contact: "(307) 555-0300" },
  // WYOMING - Sheridan WY
  { name: "Main Street Commons", address: "200 N Main St, Sheridan, WY", coords: [44.7980, -106.9550], rent: 775, beds: 2, baths: 1, type: "Income-Restricted", sqft: 850, city: "Sheridan WY", state: "Wyoming", zip: "82801", yearBuilt: 2016, features: ["Parking", "Laundry", "Pet Friendly"], scores: { affordability: 80, safety: 75, schools: 72, transit: 28, walkability: 48, parks: 60 }, waitlist: false, contact: "(307) 555-0310" }
];
