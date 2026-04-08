var zipPrefixes = {
  // 001-009: Massachusetts
  "001": [42.10, -72.59, 11], // Springfield, MA
  "002": [42.37, -71.06, 11], // Boston, MA (partial)
  "003": [42.27, -71.80, 10], // Worcester, MA area
  "004": [42.27, -71.80, 10], // Worcester, MA area
  "005": [42.45, -73.25, 10], // Western MA
  "006": [18.41, -66.06, 11], // San Juan, PR
  "007": [18.35, -66.05, 11], // San Juan, PR area
  "008": [18.20, -66.50, 10], // Puerto Rico
  "009": [18.25, -67.15, 10], // Puerto Rico (west)
  // 010-019: Massachusetts
  "010": [42.10, -72.59, 11], // Springfield, MA
  "011": [42.10, -72.59, 11], // Springfield, MA
  "012": [42.45, -73.25, 10], // Pittsfield, MA
  "013": [42.10, -72.59, 11], // Springfield, MA area
  "014": [42.27, -71.80, 11], // Worcester, MA
  "015": [42.27, -71.80, 11], // Worcester, MA
  "016": [42.27, -71.80, 10], // Worcester, MA area
  "017": [42.46, -71.28, 11], // Framingham, MA area
  "018": [42.46, -71.17, 11], // Woburn, MA area
  "019": [42.52, -70.89, 11], // Lynn, MA area
  // 020-029: Massachusetts, Rhode Island
  "020": [42.00, -71.50, 11], // Brockton, MA area
  "021": [42.36, -71.06, 11], // Boston, MA
  "022": [42.36, -71.06, 11], // Boston, MA
  "023": [42.06, -71.87, 10], // Southeastern MA
  "024": [42.46, -71.17, 11], // Lexington, MA area
  "025": [41.65, -70.29, 10], // Cape Cod, MA
  "026": [41.65, -70.29, 10], // Cape Cod, MA
  "027": [41.70, -71.15, 11], // Fall River/New Bedford, MA
  "028": [41.82, -71.41, 11], // Providence, RI
  "029": [41.82, -71.41, 11], // Providence, RI
  // 030-039: New Hampshire
  "030": [42.99, -71.45, 11], // Manchester, NH
  "031": [42.99, -71.45, 11], // Manchester, NH
  "032": [42.99, -71.45, 10], // NH
  "033": [43.21, -71.54, 10], // Concord, NH
  "034": [42.99, -71.45, 10], // Manchester, NH area
  "035": [43.63, -72.32, 10], // Littleton/White Mts, NH
  "036": [43.63, -72.32, 10], // NH
  "037": [43.63, -71.50, 10], // NH
  "038": [42.76, -71.47, 11], // Nashua/Salem, NH
  "039": [43.21, -71.54, 10], // NH
  // 040-049: Maine
  "040": [43.66, -70.26, 11], // Portland, ME
  "041": [43.66, -70.26, 11], // Portland, ME
  "042": [43.50, -70.45, 10], // ME
  "043": [44.31, -69.78, 10], // Augusta, ME
  "044": [44.80, -68.77, 10], // Bangor, ME
  "045": [43.91, -69.97, 10], // Bath, ME
  "046": [44.80, -68.77, 10], // Bangor, ME area
  "047": [46.86, -68.01, 9], // Northern ME
  "048": [44.56, -67.58, 9], // Downeast ME
  "049": [43.66, -70.26, 10], // ME
  // 050-059: Vermont
  "050": [44.26, -72.58, 10], // White River Junction, VT
  "051": [44.26, -72.58, 10], // VT
  "052": [42.85, -72.56, 10], // Bennington, VT area
  "053": [43.61, -72.97, 10], // Rutland, VT area
  "054": [44.48, -73.21, 11], // Burlington, VT
  "055": [44.48, -73.21, 10], // Burlington, VT area
  "056": [44.42, -72.02, 10], // Montpelier, VT
  "057": [44.42, -72.02, 10], // VT
  "058": [44.92, -72.20, 9], // Northern VT
  "059": [44.92, -72.20, 9], // Northern VT
  // 060-069: Connecticut
  "060": [41.76, -72.68, 11], // Hartford, CT
  "061": [41.76, -72.68, 11], // Hartford, CT
  "062": [41.53, -72.82, 11], // Willimantic/Middletown, CT
  "063": [41.31, -72.92, 11], // New Haven, CT
  "064": [41.31, -72.92, 11], // New Haven, CT
  "065": [41.31, -72.92, 11], // New Haven, CT area
  "066": [41.18, -73.19, 11], // Bridgeport, CT
  "067": [41.05, -73.54, 11], // Stamford/Norwalk, CT
  "068": [41.56, -73.05, 10], // Danbury/Waterbury, CT
  "069": [41.35, -72.10, 10], // New London, CT area
  // 070-089: New Jersey
  "070": [40.73, -74.17, 11], // Newark, NJ
  "071": [40.73, -74.17, 11], // Newark, NJ
  "072": [40.49, -74.26, 11], // Elizabeth/Perth Amboy, NJ
  "073": [40.49, -74.45, 11], // Central NJ
  "074": [40.88, -74.23, 11], // Paterson, NJ
  "075": [40.88, -74.23, 11], // Paterson, NJ
  "076": [40.87, -74.04, 11], // Hackensack, NJ
  "077": [40.22, -74.01, 11], // Long Branch/Red Bank, NJ
  "078": [40.63, -74.59, 11], // Somerville/Bound Brook, NJ
  "079": [40.85, -74.82, 10], // NW NJ
  "080": [39.95, -75.12, 11], // South NJ (near Philly)
  "081": [39.80, -75.00, 11], // Camden, NJ area
  "082": [39.37, -74.44, 11], // Atlantic City, NJ area
  "083": [39.37, -74.44, 10], // Southern NJ coast
  "084": [39.48, -75.23, 10], // Southern NJ
  "085": [40.22, -74.74, 11], // Trenton, NJ
  "086": [40.22, -74.74, 11], // Trenton, NJ area
  "087": [39.46, -74.63, 10], // Southern NJ
  "088": [40.49, -74.45, 11], // New Brunswick, NJ
  "089": [40.49, -74.45, 10], // Central NJ
  // 090-099: Military/APO (AE)
  "090": [49.00, 8.00, 9], // APO AE (Europe)
  "091": [49.00, 8.00, 9], // APO AE (Europe)
  "092": [49.00, 8.00, 9], // APO AE (Europe)
  "093": [33.00, 44.00, 9], // APO AE (Middle East)
  "094": [49.00, 8.00, 9], // APO AE (Europe)
  "095": [49.00, 8.00, 9], // APO AE (Europe)
  "096": [35.68, 139.69, 9], // APO AP (Pacific/Japan)
  "097": [35.68, 139.69, 9], // APO AP (Pacific)
  "098": [64.84, -147.72, 9], // APO AK area
  "099": [64.84, -147.72, 9], // APO AK area
  // 100-119: New York
  "100": [40.75, -73.97, 11], // New York, NY (Manhattan)
  "101": [40.72, -74.00, 11], // New York, NY
  "102": [40.75, -73.97, 11], // New York, NY
  "103": [40.58, -74.15, 11], // Staten Island, NY
  "104": [40.85, -73.87, 11], // Bronx, NY
  "105": [40.94, -73.87, 11], // Westchester, NY
  "106": [41.03, -73.76, 11], // White Plains, NY
  "107": [41.03, -73.96, 11], // Yonkers, NY area
  "108": [40.95, -73.80, 11], // New Rochelle, NY
  "109": [41.50, -74.01, 10], // Suffern/Rockland, NY
  "110": [40.65, -73.95, 11], // Queens/Brooklyn, NY
  "111": [40.71, -73.83, 11], // Queens, NY
  "112": [40.65, -73.95, 11], // Brooklyn, NY
  "113": [40.69, -73.94, 11], // Flushing, NY
  "114": [40.58, -73.83, 11], // Jamaica/Far Rockaway, NY
  "115": [40.72, -73.69, 11], // Western Nassau, NY
  "116": [40.72, -73.50, 11], // Nassau, NY
  "117": [40.78, -73.25, 10], // Suffolk, NY (west)
  "118": [40.92, -72.64, 10], // Suffolk, NY (east)
  "119": [40.78, -72.86, 10], // Riverhead/Suffolk, NY
  // 120-149: New York
  "120": [42.65, -73.76, 11], // Albany, NY
  "121": [42.65, -73.76, 11], // Albany, NY
  "122": [42.65, -73.76, 11], // Albany, NY area
  "123": [42.73, -73.69, 10], // Schenectady/Troy, NY
  "124": [41.70, -73.93, 10], // Kingston, NY
  "125": [41.50, -74.01, 10], // Poughkeepsie, NY area
  "126": [41.93, -74.00, 10], // Poughkeepsie/Kingston, NY
  "127": [42.09, -75.91, 10], // Mid-Hudson, NY
  "128": [42.45, -76.50, 10], // Glens Falls area, NY
  "129": [43.31, -73.64, 10], // Plattsburgh, NY
  "130": [43.05, -76.15, 11], // Syracuse, NY
  "131": [43.05, -76.15, 11], // Syracuse, NY
  "132": [43.05, -76.15, 11], // Syracuse, NY area
  "133": [43.10, -75.23, 10], // Utica, NY
  "134": [43.10, -75.23, 10], // Utica, NY area
  "135": [43.10, -75.23, 10], // Utica/Rome, NY
  "136": [44.00, -75.17, 9], // Watertown, NY
  "137": [42.70, -73.80, 10], // Binghamton area, NY
  "138": [42.10, -76.05, 10], // Binghamton, NY
  "139": [42.10, -76.05, 10], // Binghamton, NY area
  "140": [42.89, -78.88, 11], // Buffalo, NY
  "141": [42.89, -78.88, 11], // Buffalo, NY
  "142": [42.89, -78.88, 10], // Buffalo, NY area
  "143": [43.16, -77.61, 11], // Niagara Falls, NY area
  "144": [43.16, -77.61, 11], // Rochester, NY
  "145": [43.16, -77.61, 11], // Rochester, NY
  "146": [43.16, -77.61, 10], // Rochester, NY area
  "147": [42.10, -79.24, 10], // Jamestown/Olean, NY
  "148": [42.44, -76.50, 10], // Elmira/Ithaca, NY
  "149": [42.44, -76.50, 10], // Elmira, NY area
  // 150-196: Pennsylvania
  "150": [40.44, -80.00, 11], // Pittsburgh, PA
  "151": [40.44, -80.00, 11], // Pittsburgh, PA
  "152": [40.44, -80.00, 11], // Pittsburgh, PA
  "153": [40.44, -80.00, 10], // Pittsburgh, PA (east)
  "154": [40.44, -80.00, 10], // Pittsburgh, PA area
  "155": [40.32, -78.92, 10], // Johnstown, PA
  "156": [41.23, -78.72, 9], // Greensburg, PA area
  "157": [40.50, -79.95, 10], // McKeesport, PA area
  "158": [41.10, -80.09, 10], // New Castle/Sharon, PA
  "159": [40.32, -78.92, 10], // Johnstown, PA area
  "160": [41.41, -79.67, 10], // Butler/New Castle, PA
  "161": [41.23, -78.72, 9], // Indiana, PA
  "162": [41.41, -79.67, 9], // Oil City/Titusville, PA
  "163": [42.13, -80.09, 10], // Erie, PA area
  "164": [42.13, -80.09, 10], // Erie, PA
  "165": [42.13, -80.09, 10], // Erie, PA
  "166": [40.51, -78.40, 10], // Altoona, PA
  "167": [40.91, -77.77, 9], // Bradford/St Marys, PA
  "168": [40.80, -77.86, 10], // State College, PA
  "169": [41.24, -76.92, 10], // Wellsboro, PA
  "170": [40.04, -76.31, 11], // Harrisburg, PA
  "171": [40.04, -76.31, 11], // Harrisburg, PA
  "172": [40.04, -76.68, 10], // Chambersburg, PA
  "173": [39.96, -76.73, 10], // York, PA
  "174": [39.96, -76.73, 10], // York, PA area
  "175": [40.04, -76.31, 10], // Lancaster, PA
  "176": [40.04, -76.31, 11], // Lancaster, PA
  "177": [41.24, -76.92, 10], // Williamsport, PA
  "178": [41.24, -76.92, 10], // Sunbury/Williamsport, PA
  "179": [40.34, -75.93, 10], // Reading/Pottsville, PA
  "180": [40.63, -75.37, 11], // Lehigh Valley, PA
  "181": [40.63, -75.37, 11], // Allentown, PA
  "182": [41.41, -75.66, 11], // Wilkes-Barre/Hazleton, PA
  "183": [41.41, -75.66, 11], // Scranton/Wilkes-Barre, PA
  "184": [41.41, -75.66, 10], // Scranton, PA
  "185": [41.41, -75.66, 10], // Scranton, PA area
  "186": [41.41, -75.66, 10], // Wilkes-Barre, PA area
  "187": [41.00, -76.45, 10], // Bloomsburg/Berwick, PA
  "188": [41.05, -75.55, 10], // Stroudsburg/Poconos, PA
  "189": [40.10, -75.29, 11], // Doylestown/SE PA
  "190": [39.95, -75.17, 11], // Philadelphia, PA
  "191": [39.95, -75.17, 11], // Philadelphia, PA
  "192": [39.95, -75.17, 11], // Philadelphia, PA
  "193": [39.97, -75.56, 11], // Southeastern PA
  "194": [40.09, -75.38, 11], // Norristown, PA
  "195": [40.34, -75.93, 10], // Reading, PA
  "196": [40.00, -75.60, 10], // West Chester/Media, PA
  // 197-199: Delaware
  "197": [39.74, -75.55, 11], // Wilmington, DE
  "198": [39.74, -75.55, 11], // Wilmington, DE
  "199": [39.16, -75.52, 10], // Dover, DE
  // 200-205: Washington DC
  "200": [38.90, -77.04, 11], // Washington, DC
  "201": [38.85, -77.28, 11], // Dulles/Northern VA area
  "202": [38.90, -77.04, 11], // Washington, DC
  "203": [38.90, -77.04, 11], // Washington, DC
  "204": [38.90, -77.04, 11], // Washington, DC
  "205": [38.90, -77.04, 11], // Washington, DC
  // 206-219: Maryland
  "206": [38.98, -76.94, 11], // Southern MD/Waldorf
  "207": [38.98, -76.94, 11], // Southern MD
  "208": [38.98, -76.94, 11], // Suburban MD
  "209": [39.41, -76.78, 11], // Silver Spring, MD area
  "210": [39.29, -76.61, 11], // Baltimore, MD
  "211": [39.29, -76.61, 11], // Baltimore, MD
  "212": [39.29, -76.61, 11], // Baltimore, MD
  "214": [39.18, -76.67, 11], // Annapolis, MD
  "215": [39.64, -77.72, 10], // Cumberland, MD
  "216": [38.35, -75.60, 10], // Easton/Eastern Shore, MD
  "217": [39.41, -77.41, 10], // Frederick, MD
  "218": [38.35, -75.60, 10], // Salisbury, MD
  "219": [39.64, -77.72, 9], // Western MD
  // 220-246: Virginia
  "220": [38.80, -77.05, 11], // Northern Virginia
  "221": [38.80, -77.05, 11], // Northern Virginia
  "222": [38.85, -77.30, 11], // Arlington, VA
  "223": [38.75, -77.47, 11], // Alexandria, VA area
  "224": [38.30, -77.46, 10], // Fredericksburg, VA area
  "225": [38.30, -77.46, 10], // Fredericksburg, VA
  "226": [39.19, -77.27, 10], // Winchester, VA
  "227": [38.43, -78.87, 10], // Culpeper, VA
  "228": [38.30, -77.46, 10], // Fredericksburg, VA area
  "229": [38.03, -78.48, 10], // Charlottesville, VA
  "230": [37.54, -77.43, 11], // Richmond, VA
  "231": [37.54, -77.43, 11], // Richmond, VA
  "232": [37.54, -77.43, 11], // Richmond, VA
  "233": [36.85, -76.29, 11], // Norfolk, VA
  "234": [36.85, -76.29, 11], // Norfolk, VA area
  "235": [36.85, -76.29, 11], // Norfolk/VA Beach, VA
  "236": [36.85, -76.29, 11], // Norfolk/Newport News, VA
  "237": [36.98, -76.43, 11], // Portsmouth/Suffolk, VA
  "238": [37.54, -77.43, 10], // Richmond, VA area
  "239": [37.08, -76.47, 10], // Farmville, VA area
  "240": [37.27, -79.94, 10], // Roanoke, VA
  "241": [37.27, -79.94, 10], // Roanoke, VA
  "242": [36.70, -80.41, 10], // Bristol, VA area
  "243": [37.27, -79.94, 10], // Roanoke, VA area
  "244": [38.15, -79.07, 10], // Staunton/Charlottesville, VA
  "245": [37.41, -79.14, 10], // Lynchburg, VA
  "246": [36.98, -81.15, 10], // Bluefield, VA
  // 247-268: West Virginia, North/South Carolina
  "247": [36.98, -81.15, 10], // Bluefield, WV area
  "248": [37.78, -81.19, 10], // Bluefield/Princeton, WV
  "249": [37.78, -80.45, 10], // Lewisburg, WV
  "250": [38.35, -81.63, 11], // Charleston, WV
  "251": [38.35, -81.63, 11], // Charleston, WV
  "252": [38.35, -81.63, 10], // Charleston, WV area
  "253": [38.42, -82.44, 10], // Huntington, WV
  "254": [39.46, -77.96, 10], // Martinsburg, WV
  "255": [38.42, -82.44, 10], // Huntington, WV area
  "256": [38.42, -82.44, 10], // Huntington, WV area
  "257": [38.92, -80.18, 9], // Central WV
  "258": [37.80, -80.44, 10], // Beckley, WV
  "259": [37.80, -80.44, 10], // Beckley, WV area
  "260": [39.63, -79.95, 10], // Wheeling, WV
  "261": [39.28, -80.34, 10], // Parkersburg, WV area
  "262": [39.27, -81.56, 10], // Buckhannon/Elkins, WV
  "263": [39.28, -80.34, 10], // Clarksburg, WV
  "264": [39.63, -79.95, 10], // Clarksburg/Morgantown, WV
  "265": [39.63, -79.95, 10], // Morgantown, WV
  "266": [39.63, -79.95, 10], // Gassaway, WV area
  "267": [39.46, -77.96, 10], // Cumberland/Martinsburg, WV
  "268": [39.46, -77.96, 10], // Petersburg, WV
  // 270-289: North Carolina
  "270": [35.99, -78.90, 11], // Greensboro, NC
  "271": [36.10, -80.24, 11], // Winston-Salem, NC
  "272": [35.99, -78.90, 11], // Greensboro, NC
  "273": [35.99, -78.90, 10], // Greensboro, NC area
  "274": [36.10, -80.24, 10], // Winston-Salem, NC area
  "275": [35.78, -78.64, 11], // Raleigh, NC
  "276": [36.07, -79.79, 11], // Greensboro, NC area
  "277": [35.78, -78.64, 11], // Durham, NC
  "278": [36.21, -81.67, 10], // Rocky Mount, NC area
  "279": [36.21, -81.67, 10], // Boone area, NC
  "280": [35.23, -80.84, 11], // Charlotte, NC
  "281": [35.23, -80.84, 11], // Charlotte, NC
  "282": [35.23, -80.84, 11], // Charlotte, NC area
  "283": [35.08, -80.84, 10], // Fayetteville, NC area
  "284": [35.05, -78.88, 11], // Fayetteville, NC
  "285": [35.60, -77.37, 10], // Kinston/Greenville, NC
  "286": [35.60, -77.37, 10], // Hickory, NC area
  "287": [35.58, -82.55, 10], // Asheville, NC
  "288": [34.24, -77.95, 11], // Wilmington, NC
  "289": [35.58, -82.55, 10], // Asheville, NC area
  // 290-299: South Carolina
  "290": [34.00, -81.03, 11], // Columbia, SC
  "291": [34.00, -81.03, 11], // Columbia, SC
  "292": [34.00, -81.03, 10], // Columbia, SC area
  "293": [34.85, -82.40, 11], // Greenville, SC
  "294": [32.78, -79.93, 11], // Charleston, SC
  "295": [34.20, -79.76, 10], // Florence, SC
  "296": [34.85, -82.40, 10], // Greenville, SC area
  "297": [35.03, -81.03, 10], // Rock Hill/Charlotte area, SC
  "298": [32.43, -80.67, 10], // Beaufort/Hilton Head, SC
  "299": [32.78, -79.93, 10], // Charleston, SC area
  // 300-319: Georgia
  "300": [33.75, -84.39, 11], // Atlanta, GA
  "301": [33.75, -84.39, 11], // Atlanta, GA
  "302": [33.75, -84.39, 11], // Atlanta, GA
  "303": [33.75, -84.39, 11], // Atlanta, GA
  "304": [33.47, -82.01, 10], // Statesboro, GA area
  "305": [33.75, -84.39, 11], // Atlanta, GA area
  "306": [33.47, -82.01, 11], // Augusta, GA
  "307": [31.58, -84.16, 10], // Chattanooga area, GA
  "308": [33.47, -82.01, 10], // Augusta, GA area
  "309": [33.47, -82.01, 10], // Augusta, GA area
  "310": [33.75, -84.39, 10], // Atlanta, GA area
  "311": [33.75, -84.39, 11], // Atlanta, GA
  "312": [32.08, -81.09, 11], // Macon, GA area
  "313": [32.08, -81.09, 11], // Savannah, GA
  "314": [32.08, -81.09, 10], // Savannah, GA area
  "315": [31.14, -81.50, 10], // Waycross, GA
  "316": [31.58, -84.16, 10], // Valdosta, GA area
  "317": [31.58, -84.16, 10], // Albany, GA
  "318": [32.46, -83.65, 10], // Columbus, GA area
  "319": [32.46, -84.99, 10], // Columbus, GA
  // 320-349: Florida
  "320": [30.33, -81.66, 11], // Jacksonville, FL
  "321": [30.33, -81.66, 11], // Jacksonville/Daytona, FL
  "322": [30.33, -81.66, 10], // Jacksonville, FL area
  "323": [30.44, -84.28, 11], // Tallahassee, FL
  "324": [30.44, -84.28, 10], // Panama City, FL
  "325": [30.40, -86.87, 10], // Pensacola, FL
  "326": [29.19, -82.14, 10], // Gainesville, FL
  "327": [28.54, -81.38, 11], // Orlando, FL (mid)
  "328": [28.54, -81.38, 11], // Orlando, FL
  "329": [28.54, -81.38, 10], // Orlando, FL area
  "330": [25.76, -80.19, 11], // Miami, FL
  "331": [25.76, -80.19, 11], // Miami, FL
  "332": [25.76, -80.19, 11], // Miami, FL area
  "333": [26.12, -80.14, 11], // Fort Lauderdale, FL
  "334": [26.71, -80.05, 11], // West Palm Beach, FL
  "335": [27.95, -82.46, 11], // Tampa, FL
  "336": [27.95, -82.46, 11], // Tampa, FL
  "337": [27.77, -82.64, 11], // St. Petersburg, FL
  "338": [28.06, -81.95, 10], // Lakeland, FL
  "339": [26.64, -81.87, 10], // Fort Myers, FL
  "340": [18.34, -64.93, 10], // US Virgin Islands
  "341": [26.64, -81.87, 10], // Fort Myers, FL area
  "342": [28.80, -82.32, 10], // Brooksville/Spring Hill, FL
  "344": [29.65, -82.32, 10], // Gainesville, FL area
  "346": [27.50, -82.58, 11], // Bradenton/Sarasota, FL
  "347": [28.54, -81.38, 10], // Orlando, FL area
  "349": [26.01, -80.20, 10], // Jupiter/Palm Beach, FL
  // 350-369: Alabama
  "350": [33.52, -86.81, 11], // Birmingham, AL
  "351": [33.52, -86.81, 11], // Birmingham, AL
  "352": [33.52, -86.81, 10], // Birmingham, AL area
  "354": [33.52, -86.81, 10], // Tuscaloosa, AL area
  "355": [33.21, -87.57, 10], // Tuscaloosa, AL
  "356": [34.73, -86.59, 11], // Huntsville/Decatur, AL
  "357": [34.73, -86.59, 11], // Huntsville, AL
  "358": [34.73, -86.59, 10], // Huntsville, AL area
  "359": [33.52, -86.81, 10], // Birmingham, AL area
  "360": [32.38, -86.30, 11], // Montgomery, AL
  "361": [32.38, -86.30, 10], // Montgomery, AL area
  "362": [33.66, -85.83, 10], // Anniston, AL
  "363": [31.22, -85.39, 10], // Dothan, AL
  "364": [31.22, -85.39, 10], // Evergreen, AL area
  "365": [30.69, -88.04, 11], // Mobile, AL
  "366": [30.69, -88.04, 10], // Mobile, AL area
  "367": [32.41, -87.02, 10], // Selma, AL
  "368": [32.41, -87.02, 10], // Montgomery area, AL
  "369": [31.32, -85.39, 10], // Meridian, AL area
  // 370-385: Tennessee
  "370": [35.05, -85.31, 11], // Chattanooga, TN
  "371": [35.05, -85.31, 10], // Chattanooga, TN area
  "372": [36.17, -86.78, 11], // Nashville, TN
  "373": [36.17, -86.78, 11], // Nashville, TN
  "374": [36.17, -86.78, 10], // Nashville, TN area
  "375": [36.17, -86.78, 10], // Nashville, TN area
  "376": [36.54, -82.56, 10], // Johnson City, TN
  "377": [35.96, -83.92, 11], // Knoxville, TN
  "378": [35.96, -83.92, 11], // Knoxville, TN
  "379": [35.96, -83.92, 10], // Knoxville, TN area
  "380": [35.15, -90.05, 11], // Memphis, TN
  "381": [35.15, -90.05, 11], // Memphis, TN
  "382": [35.62, -88.81, 10], // McKenzie, TN
  "383": [35.61, -88.40, 10], // Jackson, TN
  "384": [35.18, -86.12, 10], // Columbia, TN area
  "385": [36.30, -86.69, 10], // Cookeville, TN
  // 386-397: Mississippi
  "386": [34.26, -88.70, 10], // Greenville, MS area
  "387": [34.26, -88.70, 10], // Greenville, MS
  "388": [34.77, -89.99, 10], // Tupelo, MS
  "389": [33.45, -88.82, 10], // Grenada, MS
  "390": [32.30, -90.18, 11], // Jackson, MS
  "391": [32.30, -90.18, 11], // Jackson, MS
  "392": [32.30, -90.18, 10], // Jackson, MS area
  "393": [32.35, -88.70, 10], // Meridian, MS
  "394": [31.33, -89.29, 10], // Hattiesburg, MS
  "395": [30.40, -89.09, 10], // Biloxi/Gulfport, MS
  "396": [32.35, -90.88, 10], // McComb, MS area
  "397": [34.26, -88.70, 10], // Columbus/Starkville, MS
  // 398-399: Georgia (additional)
  "398": [31.96, -83.77, 10], // Albany, GA area
  "399": [33.75, -84.39, 10], // Atlanta, GA area
  // 400-427: Kentucky
  "400": [38.25, -85.76, 11], // Louisville, KY
  "401": [38.25, -85.76, 11], // Louisville, KY
  "402": [38.25, -85.76, 10], // Louisville, KY area
  "403": [38.04, -84.50, 11], // Lexington, KY
  "404": [38.04, -84.50, 11], // Lexington, KY area
  "405": [38.04, -84.50, 10], // Lexington, KY
  "406": [38.04, -84.50, 10], // Frankfort, KY
  "407": [37.08, -84.62, 10], // Corbin, KY area
  "408": [37.08, -84.62, 10], // London, KY area
  "409": [37.08, -84.62, 10], // SE KY
  "410": [38.98, -84.66, 10], // Covington, KY
  "411": [38.05, -83.43, 10], // Ashland, KY area
  "412": [38.05, -83.43, 10], // Ashland, KY
  "413": [38.98, -84.66, 10], // Campton/Eastern KY
  "414": [37.84, -83.32, 10], // Eastern KY
  "415": [37.52, -83.72, 9], // Pikeville/Hazard, KY
  "416": [37.52, -82.52, 9], // Pikeville, KY
  "417": [37.08, -85.31, 10], // Hazard, KY area
  "418": [37.08, -85.31, 10], // Hazard, KY area
  "420": [36.99, -86.44, 10], // Bowling Green, KY area
  "421": [36.99, -86.44, 10], // Bowling Green, KY
  "422": [37.78, -87.11, 10], // Owensboro, KY area
  "423": [37.78, -87.57, 10], // Owensboro, KY
  "424": [37.08, -88.60, 10], // Paducah, KY area
  "425": [36.89, -86.86, 10], // Somerset, KY area
  "426": [36.89, -86.86, 10], // Somerset, KY
  "427": [37.97, -84.47, 10], // Elizabethtown, KY
  // 430-458: Ohio
  "430": [39.96, -82.99, 11], // Columbus, OH
  "431": [39.96, -82.99, 11], // Columbus, OH
  "432": [39.96, -82.99, 11], // Columbus, OH
  "433": [39.96, -82.99, 10], // Columbus, OH area
  "434": [40.34, -83.76, 10], // Marion/Bucyrus, OH
  "435": [40.76, -82.52, 10], // Mansfield/Wooster, OH
  "436": [41.09, -83.53, 10], // Findlay/Tiffin, OH
  "437": [40.06, -82.41, 10], // Zanesville, OH
  "438": [40.06, -82.41, 10], // Zanesville, OH area
  "439": [40.80, -81.38, 10], // Steubenville, OH area
  "440": [41.50, -81.69, 11], // Cleveland, OH
  "441": [41.50, -81.69, 11], // Cleveland, OH
  "442": [41.08, -81.52, 11], // Akron, OH
  "443": [41.08, -81.52, 11], // Akron, OH
  "444": [41.10, -80.65, 11], // Youngstown, OH
  "445": [41.10, -80.65, 10], // Youngstown, OH area
  "446": [40.80, -81.38, 10], // Canton, OH
  "447": [40.80, -81.38, 10], // Canton, OH area
  "448": [40.80, -81.38, 10], // Massillon, OH area
  "449": [40.80, -81.38, 10], // Mansfield, OH area
  "450": [39.10, -84.51, 11], // Cincinnati, OH
  "451": [39.10, -84.51, 11], // Cincinnati, OH
  "452": [39.10, -84.51, 11], // Cincinnati, OH
  "453": [39.76, -84.19, 11], // Dayton, OH
  "454": [39.76, -84.19, 11], // Dayton, OH
  "455": [39.93, -83.81, 10], // Springfield, OH
  "456": [39.33, -82.98, 10], // Chillicothe, OH
  "457": [39.33, -82.10, 10], // Athens/Marietta, OH
  "458": [40.75, -84.11, 10], // Lima, OH
  // 460-479: Indiana
  "460": [39.77, -86.16, 11], // Indianapolis, IN
  "461": [39.77, -86.16, 11], // Indianapolis, IN
  "462": [39.77, -86.16, 11], // Indianapolis, IN
  "463": [39.77, -86.16, 10], // Indianapolis, IN area
  "464": [41.08, -85.14, 10], // Anderson/Muncie, IN area
  "465": [40.19, -85.39, 10], // Muncie/Anderson, IN
  "466": [40.46, -86.13, 10], // Kokomo/Muncie, IN
  "467": [41.08, -85.14, 11], // Fort Wayne, IN
  "468": [41.08, -85.14, 11], // Fort Wayne, IN
  "469": [41.68, -86.25, 11], // South Bend, IN
  "470": [39.10, -86.53, 10], // Bloomington/Bedford, IN
  "471": [38.31, -85.77, 10], // New Albany, IN area
  "472": [38.31, -85.77, 10], // Columbus, IN area
  "473": [40.42, -86.87, 10], // Lafayette, IN area
  "474": [39.47, -87.41, 10], // Terre Haute, IN
  "475": [38.97, -87.41, 10], // Washington, IN area
  "476": [37.97, -87.57, 10], // Evansville, IN
  "477": [37.97, -87.57, 10], // Evansville, IN area
  "478": [39.47, -87.41, 10], // Terre Haute, IN area
  "479": [40.42, -86.87, 10], // Lafayette, IN
  // 480-499: Michigan
  "480": [42.43, -83.48, 11], // Royal Oak/Troy, MI
  "481": [42.33, -83.05, 11], // Detroit, MI
  "482": [42.33, -83.05, 11], // Detroit, MI
  "483": [42.43, -83.48, 11], // Royal Oak, MI area
  "484": [43.01, -83.69, 11], // Flint, MI
  "485": [43.01, -83.69, 10], // Flint, MI area
  "486": [43.42, -83.95, 10], // Saginaw, MI
  "487": [43.42, -83.95, 10], // Saginaw, MI area
  "488": [42.73, -84.56, 11], // Lansing, MI
  "489": [42.73, -84.56, 10], // Lansing, MI area
  "490": [42.29, -85.59, 11], // Kalamazoo, MI
  "491": [42.29, -85.59, 10], // Kalamazoo, MI area
  "492": [42.96, -85.66, 10], // Jackson, MI area
  "493": [42.96, -85.66, 11], // Grand Rapids, MI
  "494": [43.23, -86.25, 10], // Muskegon, MI
  "495": [42.96, -85.66, 11], // Grand Rapids, MI
  "496": [44.25, -85.40, 9], // Traverse City, MI
  "497": [44.76, -84.73, 9], // Gaylord, MI
  "498": [46.49, -84.35, 9], // Iron Mountain/Sault Ste Marie, MI
  "499": [46.55, -87.40, 9], // Iron Mountain, MI
  // 500-528: Iowa
  "500": [41.59, -93.62, 11], // Des Moines, IA
  "501": [41.59, -93.62, 11], // Des Moines, IA
  "502": [41.59, -93.62, 10], // Des Moines, IA area
  "503": [41.59, -93.62, 10], // Des Moines, IA area
  "504": [42.49, -92.34, 10], // Waterloo, IA
  "505": [42.03, -93.47, 10], // Fort Dodge, IA
  "506": [42.49, -92.34, 10], // Waterloo, IA area
  "507": [42.49, -92.34, 10], // Waterloo, IA area
  "508": [41.26, -95.86, 10], // Creston, IA
  "509": [41.26, -95.86, 10], // Des Moines, IA area
  "510": [42.50, -96.40, 10], // Sioux City, IA
  "511": [42.50, -96.40, 10], // Sioux City, IA area
  "512": [41.02, -92.41, 10], // Sheldon, IA area
  "513": [41.02, -92.41, 10], // Spencer, IA area
  "514": [41.02, -91.67, 10], // Carroll, IA
  "515": [41.40, -91.06, 10], // Ottumwa, IA
  "516": [40.81, -91.12, 10], // Shenandoah, IA
  "520": [41.66, -91.53, 10], // Dubuque, IA area
  "521": [42.50, -90.66, 10], // Decorah, IA
  "522": [41.98, -91.66, 10], // Cedar Rapids, IA
  "523": [41.98, -91.66, 10], // Cedar Rapids, IA area
  "524": [41.98, -91.66, 10], // Cedar Rapids area, IA
  "525": [41.02, -91.97, 10], // Ottumwa, IA area
  "526": [40.81, -91.12, 10], // Burlington, IA
  "527": [41.66, -91.53, 10], // Iowa City area, IA
  "528": [41.52, -90.58, 11], // Davenport, IA
  // 530-549: Wisconsin
  "530": [43.07, -89.40, 11], // Madison, WI
  "531": [42.73, -87.78, 10], // Beloit/Kenosha, WI
  "532": [43.04, -87.91, 11], // Milwaukee, WI
  "534": [42.73, -87.78, 11], // Racine, WI
  "535": [43.07, -89.40, 10], // Madison, WI area
  "537": [43.07, -89.40, 10], // Madison, WI area
  "538": [43.80, -88.44, 10], // Fond du Lac, WI
  "539": [43.38, -89.82, 10], // Portage, WI area
  "540": [44.52, -88.02, 10], // St. Paul, WI area
  "541": [44.52, -88.02, 10], // Green Bay, WI
  "542": [44.52, -88.02, 10], // Green Bay, WI area
  "543": [44.52, -88.02, 10], // Green Bay, WI area
  "544": [44.96, -89.63, 9], // Wausau, WI
  "545": [45.63, -89.41, 9], // Rhinelander, WI
  "546": [44.81, -91.50, 10], // La Crosse, WI area
  "547": [44.81, -91.50, 10], // Eau Claire, WI
  "548": [44.81, -91.50, 10], // Spooner, WI area
  "549": [44.02, -88.55, 10], // Oshkosh, WI area
  // 550-567: Minnesota
  "550": [44.98, -93.27, 11], // Minneapolis/St. Paul, MN
  "551": [44.95, -93.09, 11], // St. Paul, MN
  "553": [44.98, -93.27, 11], // Minneapolis, MN
  "554": [44.98, -93.27, 11], // Minneapolis, MN
  "555": [44.98, -93.27, 11], // Minneapolis, MN (IRS)
  "556": [46.78, -92.11, 10], // Duluth, MN
  "557": [46.78, -92.11, 9], // Duluth, MN area
  "558": [46.78, -92.11, 9], // Duluth, MN area
  "559": [44.05, -92.46, 10], // Rochester, MN
  "560": [45.56, -94.16, 10], // Mankato, MN area
  "561": [45.56, -94.16, 10], // Mankato, MN
  "562": [44.16, -93.99, 10], // Willmar, MN area
  "563": [45.56, -94.16, 10], // St. Cloud, MN
  "564": [46.35, -94.20, 9], // Brainerd, MN
  "565": [47.47, -94.88, 9], // Detroit Lakes, MN
  "566": [47.47, -94.88, 9], // Bemidji, MN
  "567": [48.11, -96.18, 9], // Thief River Falls, MN
  // 570-577: South Dakota
  "570": [43.55, -96.73, 10], // Sioux Falls, SD
  "571": [43.55, -96.73, 10], // Sioux Falls, SD area
  "572": [44.37, -98.21, 9], // Watertown, SD area
  "573": [43.72, -98.85, 9], // Mitchell, SD
  "574": [44.37, -100.35, 9], // Aberdeen, SD
  "575": [44.08, -103.23, 9], // Pierre, SD
  "576": [45.46, -98.49, 9], // Mobridge, SD
  "577": [44.08, -103.23, 9], // Rapid City, SD
  // 580-588: North Dakota
  "580": [46.88, -96.79, 10], // Fargo, ND
  "581": [46.88, -96.79, 10], // Fargo, ND area
  "582": [47.92, -97.03, 9], // Grand Forks, ND
  "583": [48.23, -101.30, 9], // Devils Lake, ND
  "584": [46.81, -100.78, 9], // Jamestown, ND area
  "585": [46.81, -100.78, 9], // Bismarck, ND
  "586": [48.23, -101.30, 9], // Dickinson, ND area
  "587": [48.23, -103.62, 9], // Williston, ND area
  "588": [47.92, -97.03, 9], // Williston, ND
  // 590-599: Montana
  "590": [45.78, -108.50, 9], // Billings, MT
  "591": [45.78, -108.50, 9], // Billings, MT area
  "592": [47.51, -111.29, 9], // Wolf Point, MT area
  "593": [48.21, -106.63, 9], // Miles City, MT area
  "594": [47.51, -111.29, 9], // Great Falls, MT
  "595": [47.51, -111.29, 9], // Havre, MT area
  "596": [46.87, -114.00, 9], // Helena, MT area
  "597": [45.68, -111.04, 9], // Butte, MT
  "598": [46.87, -114.00, 9], // Missoula, MT
  "599": [48.20, -114.31, 9], // Kalispell, MT
  // 600-629: Illinois
  "600": [41.88, -87.63, 11], // Chicago, IL (north)
  "601": [41.88, -87.63, 11], // Chicago, IL area
  "602": [41.85, -87.65, 11], // Evanston/North Shore, IL
  "603": [41.83, -87.68, 11], // Oak Park/Western suburbs, IL
  "604": [41.75, -87.75, 11], // S Chicago suburbs, IL
  "605": [41.75, -88.15, 11], // SW Chicago suburbs, IL
  "606": [41.88, -87.63, 11], // Chicago, IL
  "607": [41.88, -87.63, 11], // Chicago, IL area
  "608": [42.27, -89.09, 10], // Kankakee, IL area
  "609": [42.27, -89.09, 10], // Kankakee, IL
  "610": [41.51, -90.58, 10], // Rock Island/Rockford, IL
  "611": [42.27, -89.09, 10], // Rockford, IL
  "612": [42.27, -89.09, 10], // Rockford, IL area
  "613": [40.69, -89.59, 10], // La Salle/Peru, IL
  "614": [40.69, -89.59, 10], // Galesburg, IL
  "615": [40.69, -89.59, 10], // Peoria, IL area
  "616": [40.69, -89.59, 11], // Peoria, IL
  "617": [40.47, -88.95, 10], // Bloomington, IL
  "618": [40.12, -88.24, 10], // Champaign, IL
  "619": [40.12, -88.24, 10], // Champaign, IL area
  "620": [39.80, -89.64, 11], // Springfield, IL
  "621": [38.52, -89.98, 10], // Quincy, IL area
  "622": [38.63, -90.19, 11], // E. St. Louis, IL
  "623": [38.52, -89.98, 10], // Quincy, IL
  "624": [38.52, -89.14, 10], // Effingham, IL
  "625": [39.80, -89.64, 10], // Springfield, IL area
  "626": [39.80, -89.64, 10], // Springfield, IL area
  "627": [39.80, -89.64, 10], // Springfield, IL area
  "628": [37.73, -89.22, 10], // Centralia, IL area
  "629": [37.73, -89.22, 10], // Carbondale, IL
  // 630-658: Missouri
  "630": [38.63, -90.20, 11], // St. Louis, MO
  "631": [38.63, -90.20, 11], // St. Louis, MO
  "633": [38.63, -90.20, 10], // St. Louis, MO area
  "634": [38.52, -90.60, 10], // Quincy, MO area
  "635": [38.52, -90.60, 10], // Hannibal/Quincy area, MO
  "636": [36.65, -93.24, 10], // Flat River area, MO
  "637": [36.65, -93.24, 10], // Cape Girardeau, MO area
  "638": [36.65, -93.24, 10], // Sikeston, MO area
  "639": [36.20, -91.83, 10], // Poplar Bluff, MO
  "640": [39.10, -94.58, 11], // Kansas City, MO
  "641": [39.10, -94.58, 11], // Kansas City, MO
  "644": [38.58, -92.17, 10], // St. Joseph, MO area
  "645": [39.77, -94.85, 10], // St. Joseph, MO
  "646": [38.95, -92.33, 10], // Chillicothe, MO
  "647": [38.58, -92.17, 10], // Harrisonville, MO area
  "648": [38.58, -92.17, 10], // Jefferson City, MO
  "649": [39.10, -94.58, 10], // Kansas City, MO area
  "650": [38.58, -92.17, 10], // Jefferson City, MO area
  "651": [38.58, -92.17, 10], // Jefferson City, MO
  "652": [38.75, -92.17, 10], // Columbia, MO
  "653": [38.23, -91.80, 10], // Sedalia, MO area
  "654": [37.84, -90.50, 10], // Rolla, MO
  "655": [37.21, -93.29, 11], // Springfield, MO
  "656": [37.21, -93.29, 10], // Springfield, MO area
  "657": [37.21, -93.29, 10], // Springfield, MO area
  "658": [36.37, -94.20, 10], // Joplin, MO area
  // 660-679: Kansas
  "660": [39.10, -94.63, 11], // Kansas City, KS
  "661": [39.10, -94.63, 10], // Kansas City, KS area
  "662": [39.10, -94.63, 10], // Shawnee Mission, KS
  "664": [38.97, -95.24, 10], // Topeka, KS
  "665": [38.97, -95.24, 10], // Topeka, KS area
  "666": [38.97, -95.24, 10], // Topeka, KS
  "667": [38.37, -95.24, 10], // Fort Scott, KS
  "668": [38.97, -95.24, 10], // Topeka, KS area
  "669": [38.81, -97.61, 9], // Salina, KS
  "670": [37.69, -97.34, 11], // Wichita, KS
  "671": [37.69, -97.34, 10], // Wichita, KS area
  "672": [37.69, -97.34, 10], // Wichita, KS area
  "673": [37.75, -100.02, 9], // Independence, KS area
  "674": [38.81, -97.61, 9], // Salina, KS area
  "675": [37.75, -99.32, 9], // Hutchinson, KS
  "676": [38.88, -99.33, 9], // Hays, KS
  "677": [37.87, -97.34, 9], // Colby, KS area
  "678": [37.75, -100.02, 9], // Dodge City, KS
  "679": [37.04, -100.92, 9], // Liberal, KS
  // 680-693: Nebraska
  "680": [41.26, -95.94, 11], // Omaha, NE
  "681": [41.26, -95.94, 11], // Omaha, NE
  "683": [40.82, -96.70, 11], // Lincoln, NE
  "684": [40.82, -96.70, 10], // Lincoln, NE area
  "685": [40.82, -96.70, 10], // Lincoln, NE area
  "686": [42.03, -97.42, 9], // Norfolk, NE area
  "687": [42.03, -97.42, 9], // Norfolk, NE
  "688": [40.87, -98.34, 9], // Grand Island, NE
  "689": [40.87, -98.34, 9], // Hastings, NE area
  "690": [40.92, -100.77, 9], // McCook, NE area
  "691": [41.13, -100.77, 9], // North Platte, NE
  "692": [41.87, -103.66, 9], // Valentine, NE area
  "693": [41.87, -103.66, 9], // Alliance, NE area
  // 700-714: Louisiana
  "700": [29.95, -90.07, 11], // New Orleans, LA
  "701": [29.95, -90.07, 11], // New Orleans, LA
  "703": [29.95, -90.07, 10], // Thibodaux, LA area
  "704": [30.05, -90.50, 10], // Hammond, LA area
  "705": [30.22, -92.02, 10], // Lafayette, LA
  "706": [30.22, -92.02, 10], // Lake Charles, LA area
  "707": [30.23, -93.22, 10], // Lake Charles, LA
  "708": [30.22, -92.02, 10], // Lafayette, LA area
  "710": [32.51, -93.75, 11], // Shreveport, LA
  "711": [32.51, -93.75, 10], // Shreveport, LA area
  "712": [32.51, -92.12, 10], // Monroe, LA
  "713": [31.31, -92.45, 10], // Alexandria, LA
  "714": [31.31, -92.45, 10], // Alexandria, LA area
  // 716-729: Arkansas
  "716": [33.44, -93.98, 10], // Pine Bluff, AR area
  "717": [35.22, -91.73, 10], // Camden, AR area
  "718": [33.44, -93.98, 10], // Texarkana, AR area
  "719": [34.50, -93.05, 10], // Hot Springs, AR
  "720": [34.75, -92.29, 11], // Little Rock, AR
  "721": [34.75, -92.29, 10], // Little Rock, AR area
  "722": [34.75, -92.29, 10], // Little Rock, AR
  "723": [35.22, -91.73, 10], // W Memphis, AR area
  "724": [35.22, -91.73, 10], // Jonesboro, AR area
  "725": [35.83, -90.71, 10], // Batesville, AR
  "726": [36.07, -94.17, 10], // Harrison, AR area
  "727": [36.37, -94.20, 10], // Fayetteville, AR
  "728": [35.39, -94.40, 10], // Russellville, AR area
  "729": [35.39, -94.40, 10], // Fort Smith, AR
  // 730-749: Oklahoma
  "730": [35.47, -97.52, 11], // Oklahoma City, OK
  "731": [35.47, -97.52, 11], // Oklahoma City, OK
  "734": [34.62, -98.43, 10], // Ardmore, OK area
  "735": [34.62, -98.43, 10], // Lawton, OK
  "736": [36.15, -95.99, 10], // Clinton, OK area
  "737": [35.47, -97.52, 10], // Enid, OK area
  "738": [36.40, -97.88, 10], // Woodward, OK area
  "739": [36.73, -95.98, 10], // Liberal, OK area
  "740": [36.15, -95.99, 11], // Tulsa, OK
  "741": [36.15, -95.99, 11], // Tulsa, OK
  "743": [35.47, -95.38, 10], // Tulsa, OK area
  "744": [35.47, -95.38, 10], // Muskogee, OK
  "745": [34.93, -95.77, 10], // McAlester, OK
  "746": [36.41, -94.70, 10], // Ponca City, OK
  "747": [34.19, -97.14, 10], // Durant, OK
  "748": [35.47, -96.93, 10], // Shawnee, OK
  "749": [36.41, -94.70, 10], // Poteau, OK
  // 750-799: Texas
  "750": [32.78, -96.80, 11], // Dallas, TX (north)
  "751": [32.78, -96.80, 11], // Dallas, TX
  "752": [32.78, -96.80, 11], // Dallas, TX area
  "753": [32.78, -96.80, 10], // Dallas, TX area
  "754": [32.45, -99.73, 9], // Greenville, TX area
  "755": [32.35, -95.30, 10], // Texarkana, TX area
  "756": [32.35, -95.30, 10], // Longview, TX
  "757": [30.63, -96.33, 10], // Tyler, TX area
  "758": [31.55, -97.14, 10], // Palestine, TX area
  "759": [31.75, -95.63, 10], // Lufkin, TX
  "760": [32.75, -97.33, 11], // Fort Worth, TX
  "761": [32.75, -97.33, 11], // Fort Worth, TX area
  "762": [32.75, -97.33, 10], // Fort Worth, TX area
  "763": [33.21, -97.13, 10], // Wichita Falls, TX area
  "764": [33.91, -98.49, 10], // Wichita/Ft Worth area, TX
  "765": [31.55, -97.14, 10], // Waco, TX
  "766": [31.55, -97.14, 10], // Waco, TX area
  "767": [31.55, -97.14, 10], // Waco, TX area
  "768": [32.45, -100.45, 9], // Abilene, TX area
  "769": [31.10, -97.73, 10], // San Angelo/Midland, TX area
  "770": [29.76, -95.37, 11], // Houston, TX
  "771": [29.76, -95.37, 11], // Houston, TX
  "772": [29.76, -95.37, 11], // Houston, TX area
  "773": [29.76, -95.37, 10], // Houston, TX (north)
  "774": [29.76, -95.37, 10], // Houston, TX (south)
  "775": [30.07, -94.13, 10], // Beaumont/Galveston, TX area
  "776": [30.08, -93.74, 10], // Beaumont, TX
  "777": [30.08, -93.74, 10], // Beaumont, TX area
  "778": [30.63, -96.33, 10], // Bryan/College Station, TX
  "779": [30.63, -96.33, 10], // Victoria, TX area
  "780": [29.42, -98.49, 11], // San Antonio, TX
  "781": [29.42, -98.49, 11], // San Antonio, TX
  "782": [29.42, -98.49, 10], // San Antonio, TX area
  "783": [27.80, -97.40, 10], // Corpus Christi, TX
  "784": [27.80, -97.40, 10], // Corpus Christi, TX area
  "785": [26.20, -98.23, 10], // McAllen, TX
  "786": [30.27, -97.74, 11], // Austin, TX
  "787": [30.27, -97.74, 11], // Austin, TX
  "788": [29.88, -97.94, 10], // San Marcos/New Braunfels, TX
  "789": [30.27, -97.74, 10], // Austin, TX area
  "790": [33.58, -101.85, 10], // Amarillo, TX area
  "791": [33.58, -101.85, 10], // Amarillo, TX
  "792": [35.22, -101.83, 10], // Childress/Amarillo, TX area
  "793": [33.58, -101.85, 10], // Lubbock, TX
  "794": [33.58, -101.85, 10], // Lubbock, TX area
  "795": [33.58, -101.85, 10], // Lubbock, TX area
  "796": [32.45, -100.45, 9], // Abilene, TX
  "797": [31.99, -102.10, 9], // Midland/Odessa, TX
  "798": [31.76, -106.44, 11], // El Paso, TX
  "799": [31.76, -106.44, 11], // El Paso, TX area
  // 800-816: Colorado
  "800": [39.74, -104.99, 11], // Denver, CO
  "801": [39.74, -104.99, 11], // Denver, CO
  "802": [39.74, -104.99, 11], // Denver, CO area
  "803": [39.74, -105.08, 11], // Boulder, CO area
  "804": [39.74, -105.08, 10], // Denver, CO area
  "805": [39.74, -105.08, 10], // Longmont/Boulder, CO
  "806": [39.74, -104.99, 10], // Denver, CO area
  "807": [39.57, -104.66, 10], // Denver, CO SE area
  "808": [38.83, -104.82, 11], // Colorado Springs, CO
  "809": [38.83, -104.82, 10], // Colorado Springs, CO area
  "810": [38.83, -104.82, 10], // Colorado Springs, CO area
  "811": [37.88, -104.80, 10], // Pueblo/Alamosa, CO area
  "812": [38.25, -104.61, 10], // Pueblo, CO area
  "813": [37.27, -107.88, 9], // Durango, CO
  "814": [39.06, -108.55, 9], // Grand Junction, CO
  "815": [39.06, -108.55, 9], // Grand Junction, CO area
  "816": [40.49, -106.83, 9], // Glenwood Springs, CO area
  // 820-831: Wyoming
  "820": [41.14, -104.82, 10], // Cheyenne, WY
  "821": [41.14, -104.82, 9], // Yellowstone, WY area
  "822": [42.87, -106.33, 9], // Wheatland, WY
  "823": [42.73, -105.38, 9], // Rawlins, WY
  "824": [42.87, -106.33, 9], // Worland, WY area
  "825": [41.31, -105.59, 9], // Riverton, WY area
  "826": [42.87, -106.33, 9], // Casper, WY
  "827": [44.28, -105.50, 9], // Gillette/Sheridan, WY
  "828": [44.28, -105.50, 9], // Sheridan, WY area
  "829": [41.59, -109.22, 9], // Rock Springs, WY
  "830": [41.59, -109.22, 9], // Rock Springs, WY area
  "831": [41.59, -109.22, 9], // Rock Springs, WY area
  // 832-838: Idaho
  "832": [43.62, -116.21, 11], // Pocatello, ID area
  "833": [42.86, -112.45, 10], // Twin Falls, ID
  "834": [43.62, -116.21, 10], // Pocatello, ID
  "835": [46.73, -117.00, 10], // Lewiston, ID
  "836": [43.62, -116.21, 11], // Boise, ID
  "837": [43.62, -116.21, 10], // Boise, ID area
  "838": [47.68, -116.78, 10], // Spokane area/CDA, ID
  // 840-847: Utah
  "840": [40.76, -111.89, 11], // Salt Lake City, UT
  "841": [40.76, -111.89, 11], // Salt Lake City, UT
  "842": [41.22, -111.97, 10], // Ogden, UT area
  "843": [41.22, -111.97, 10], // Ogden/Logan, UT
  "844": [41.22, -111.97, 10], // Ogden, UT
  "845": [40.23, -111.66, 10], // Provo, UT
  "846": [40.23, -111.66, 10], // Provo, UT area
  "847": [39.32, -111.09, 9], // Price/Moab, UT area
  // 850-865: Arizona
  "850": [33.45, -112.07, 11], // Phoenix, AZ
  "851": [33.45, -112.07, 11], // Phoenix, AZ area
  "852": [33.45, -112.07, 11], // Phoenix, AZ (Mesa/Tempe)
  "853": [33.45, -112.07, 11], // Phoenix, AZ (Glendale)
  "855": [33.45, -112.07, 10], // Globe, AZ area
  "856": [32.22, -110.93, 11], // Tucson, AZ
  "857": [32.22, -110.93, 10], // Tucson, AZ area
  "859": [35.20, -111.65, 9], // Show Low, AZ area
  "860": [34.54, -112.47, 10], // Prescott, AZ
  "863": [35.20, -111.65, 10], // Flagstaff/Prescott, AZ
  "864": [35.20, -113.99, 9], // Kingman, AZ
  "865": [33.31, -111.84, 10], // Mesa/Globe, AZ area
  // 870-884: New Mexico
  "870": [35.08, -106.65, 11], // Albuquerque, NM
  "871": [35.08, -106.65, 11], // Albuquerque, NM
  "872": [35.08, -106.65, 10], // Albuquerque, NM area
  "873": [34.52, -105.57, 9], // Gallup, NM area
  "874": [36.72, -108.22, 9], // Farmington, NM
  "875": [35.08, -106.65, 10], // Santa Fe/Albuquerque, NM
  "877": [34.41, -103.20, 9], // Las Vegas, NM area
  "878": [34.08, -106.90, 9], // Socorro, NM area
  "879": [34.41, -103.20, 9], // Truth or Consequences, NM
  "880": [32.32, -106.76, 10], // Las Cruces, NM
  "881": [32.32, -106.76, 10], // Las Cruces/Clovis, NM area
  "882": [33.39, -104.52, 9], // Roswell, NM
  "883": [33.39, -104.52, 9], // Alamogordo/Carlsbad, NM
  "884": [34.41, -103.20, 9], // Tucumcari, NM
  // 889-898: Nevada
  "889": [36.17, -115.14, 11], // Las Vegas, NV
  "890": [36.17, -115.14, 11], // Las Vegas, NV
  "891": [36.17, -115.14, 10], // Las Vegas, NV area
  "893": [40.24, -117.60, 9], // Ely, NV area
  "894": [39.53, -119.81, 10], // Reno, NV
  "895": [39.53, -119.81, 10], // Reno, NV area
  "897": [38.80, -116.42, 9], // Carson City, NV area
  "898": [40.84, -115.76, 9], // Elko, NV
  // 900-966: California
  "900": [34.05, -118.24, 11], // Los Angeles, CA
  "901": [34.05, -118.24, 11], // Los Angeles, CA
  "902": [33.83, -118.18, 11], // Inglewood, CA area
  "903": [33.83, -118.18, 11], // Inglewood, CA area
  "904": [34.01, -118.49, 11], // Santa Monica, CA area
  "905": [33.77, -118.19, 11], // Torrance, CA area
  "906": [34.10, -118.34, 11], // Whittier, CA area
  "907": [34.10, -118.34, 11], // Burbank/Glendale, CA area
  "908": [34.10, -118.34, 11], // Long Beach, CA area
  "910": [34.19, -118.53, 11], // Pasadena, CA area
  "911": [34.15, -118.14, 11], // Pasadena, CA
  "912": [34.15, -118.14, 11], // Glendale, CA
  "913": [34.28, -118.44, 11], // Van Nuys, CA area
  "914": [34.28, -118.44, 11], // Sherman Oaks, CA area
  "915": [34.42, -118.54, 10], // Lancaster, CA area
  "916": [34.42, -118.54, 10], // North LA County, CA
  "917": [34.17, -118.38, 11], // Alhambra area, CA
  "918": [34.17, -118.38, 11], // Alhambra/Azusa, CA area
  "919": [33.98, -117.37, 11], // San Diego, CA area
  "920": [32.72, -117.16, 11], // San Diego, CA
  "921": [32.72, -117.16, 11], // San Diego, CA
  "922": [33.13, -117.16, 10], // Inland area, CA
  "923": [33.75, -117.87, 11], // San Bernardino, CA area
  "924": [34.11, -117.29, 10], // San Bernardino, CA
  "925": [33.95, -117.40, 11], // Riverside, CA
  "926": [33.64, -117.92, 11], // Santa Ana, CA
  "927": [33.64, -117.92, 11], // Santa Ana, CA area
  "928": [33.95, -117.40, 10], // Anaheim, CA area
  "930": [34.95, -120.43, 10], // Oxnard/Ventura, CA
  "931": [34.28, -119.29, 10], // Santa Barbara, CA
  "932": [35.37, -119.02, 10], // Bakersfield, CA
  "933": [35.37, -119.02, 10], // Bakersfield, CA area
  "934": [34.95, -120.43, 10], // Santa Maria, CA area
  "935": [35.28, -120.66, 10], // San Luis Obispo, CA
  "936": [36.75, -119.77, 10], // Fresno, CA
  "937": [36.75, -119.77, 10], // Fresno, CA area
  "938": [36.75, -119.77, 10], // Fresno, CA area
  "939": [36.97, -121.97, 10], // Salinas, CA
  "940": [37.77, -122.42, 11], // San Francisco, CA
  "941": [37.77, -122.42, 11], // San Francisco, CA
  "942": [37.60, -122.39, 11], // Sacramento, CA (PO Box)
  "943": [37.55, -122.27, 11], // Palo Alto, CA area
  "944": [37.55, -122.27, 11], // San Mateo, CA
  "945": [37.80, -122.27, 11], // Oakland, CA
  "946": [37.80, -122.27, 11], // Oakland, CA
  "947": [37.87, -122.27, 11], // Berkeley, CA
  "948": [37.97, -122.53, 10], // Richmond, CA area
  "949": [38.01, -122.25, 10], // San Rafael, CA area
  "950": [37.34, -121.89, 11], // San Jose, CA
  "951": [37.34, -121.89, 11], // San Jose, CA
  "952": [37.50, -122.20, 11], // Stockton area, CA
  "953": [37.97, -121.29, 10], // Stockton, CA
  "954": [38.00, -122.03, 10], // North Bay, CA area
  "955": [40.58, -122.39, 9], // Eureka, CA
  "956": [38.58, -121.49, 11], // Sacramento, CA
  "957": [38.58, -121.49, 11], // Sacramento, CA
  "958": [38.58, -121.49, 10], // Sacramento, CA area
  "959": [38.90, -121.09, 10], // Marysville, CA area
  "960": [39.53, -121.55, 10], // Redding, CA area
  "961": [39.15, -121.75, 10], // Reno, CA border area
  "962": [35.00, 136.00, 9], // APO AP (Pacific)
  "963": [21.31, -157.86, 10], // Honolulu, HI
  "964": [20.88, -156.47, 10], // Maui/Kauai, HI
  "965": [21.31, -157.86, 10], // Honolulu, HI area
  "966": [19.72, -155.08, 9], // Big Island, HI
  "967": [21.31, -157.86, 10], // Honolulu, HI
  "968": [21.31, -157.86, 10], // Honolulu, HI area
  // 970-994: Oregon, Washington, Alaska
  "970": [45.52, -122.68, 11], // Portland, OR
  "971": [45.52, -122.68, 11], // Portland, OR
  "972": [45.52, -122.68, 11], // Portland, OR area
  "973": [44.94, -123.03, 10], // Salem, OR
  "974": [44.05, -123.09, 10], // Eugene, OR
  "975": [42.33, -122.87, 10], // Medford, OR
  "976": [44.06, -121.31, 10], // Klamath Falls, OR area
  "977": [44.06, -121.31, 10], // Bend, OR
  "978": [45.63, -121.17, 10], // Pendleton, OR
  "979": [43.22, -123.34, 10], // Roseburg/Coos Bay, OR
  "980": [47.61, -122.33, 11], // Seattle, WA
  "981": [47.61, -122.33, 11], // Seattle, WA
  "982": [47.24, -122.44, 11], // Tacoma, WA area
  "983": [47.24, -122.44, 11], // Tacoma, WA
  "984": [47.24, -122.44, 10], // Tacoma, WA area
  "985": [47.04, -122.90, 10], // Olympia, WA
  "986": [46.73, -117.00, 10], // Portland, WA area
  "988": [47.66, -117.43, 10], // Spokane, WA
  "989": [47.66, -117.43, 10], // Spokane, WA area
  "990": [47.66, -117.43, 11], // Spokane, WA
  "991": [47.66, -117.43, 10], // Spokane, WA area
  "992": [46.60, -120.51, 10], // Yakima, WA
  "993": [46.21, -119.17, 10], // Pasco/Kennewick, WA
  "994": [48.75, -122.47, 10], // Bellingham/Whatcom, WA
  // 995-999: Alaska, APO
  "995": [61.22, -149.90, 9], // Anchorage, AK
  "996": [61.22, -149.90, 9], // Anchorage, AK area
  "997": [64.84, -147.72, 9], // Fairbanks, AK
  "998": [58.30, -134.42, 9], // Juneau, AK
  "999": [55.34, -131.64, 9]  // Ketchikan, AK
};
