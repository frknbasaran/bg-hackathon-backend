import Database from './utils/connection';
import UserSchema from './models/user';
import PackSchema from './models/pack';
import DealSchema from './models/deal';
import TravelSchema from './models/travel';
import RequestSchema from './models/request';

import moment from 'moment';
import md5 from "md5";

const User = Database.model('User', UserSchema);
const Deal= Database.model('Deal', DealSchema);
const Travel = Database.model('Travel', TravelSchema);
const Pack = Database.model('Pack', PackSchema);
const Request = Database.model('Request', RequestSchema);


let adjectives = ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful", "bellicose", "bilious", "boorish", "calamitous", "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent", "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious", "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome", "garrulous", "guileless", "gustatory", "heuristic", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome", "jejune", "jocular", "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious", "minatory", "mordant", "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous", "pernicious", "pervasive", "petulant", "platitudinous", "precipitate", "propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible", "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic", "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent", "turgid", "ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"];
let nouns = ["ninja", "chair", "pancake", "statue", "unicorn", "rainbows", "laser", "senor", "bunny", "captain", "nibblets", "cupcake", "carrot", "gnomes", "glitter", "potato", "salad", "toejam", "curtains", "beets", "toilet", "exorcism", "stick figures", "mermaid eggs", "sea barnacles", "dragons", "jellybeans", "snakes", "dolls", "bushes", "cookies", "apples", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot air balloon", "praying mantis", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer", "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin boy", "clerk of the chapel", "filling station attendant", "foreman", "maintenance engineering", "mechanic", "miller", "moldmaker", "panel beater", "patternmaker", "plant operator", "plumber", "sawfiler", "shop foreman", "soaper", "stationary engineer", "wheelwright", "woodworkers"];
let cityNames = ["Sakarya", "Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];

const randomEl = list => list[Math.floor(Math.random() * list.length)];
const randomWeight = max => Math.floor((Math.random() * max) + 1);

function capitalize(str) {
    var lower = str.toLowerCase();
    return lower.replace(/(^| )(\w)/g, function (x) {
        return x.toUpperCase();
    });
}

async function generateUser(count) {
    console.log("User generating progress on the way...");
    for (let i = 0; i < count; i++) {
        let user = new User();

        user["name"] = capitalize(randomEl(adjectives)) + " " + capitalize(randomEl(nouns));
        user["username"] = user.name.split(" ").join("_").toLowerCase();
        user["email"] = (i % 2 == 0) ? user.username + "@getir.com" : user.username + "@bitaksi.com";
        user["photo"] = "https://gravatar.com/avatar/" + md5(user.email.trim().toLowerCase()) + "?s=200&d=retro";

        let newRecord = await user.save({});
        console.log("user:" + newRecord._id + " created.");
        if ((count - 1) == i) console.log(count + " record generated successfully");
    }
}

async function generateTravel(count) {
    console.log("Travel generating progress on the way...");
    for (let i = 0; i < count; i++) {
        let travel = new Travel();
        let randomUserFromPool = await User.aggregate({$sample: {size: 1}});
        // generate random cities
        travel["date"] = moment().add(i, 'd');
        travel["from"] = randomEl(cityNames);
        travel["to"] = randomEl(cityNames);
        while (travel["from"] == travel["to"]) travel["to"] = randomEl(cityNames);
        travel["weight"] = randomWeight(50);
        travel["user"] = randomUserFromPool[0]._id;
        let newRecord = await travel.save({});
        console.log("travel:" + newRecord._id + " created.");
        if ((count - 1) == i) console.log(count + " record generated successfully");
    }
}

async function generatePack(count) {
    console.log("Pack generating progress on the way...");
    for (let i = 0; i < count; i++) {
        let pack = new Pack();
        let randomUserFromPool = await User.aggregate({$sample: {size: 1}});
        // generate random cities
        pack["from"] = randomEl(cityNames);
        pack["to"] = randomEl(cityNames);
        while (pack["from"] == pack["to"]) pack["to"] = randomEl(cityNames);
        pack["weight"] = randomWeight(50);
        pack["user"] = randomUserFromPool[0]._id;
        let newRecord = await pack.save({});
        console.log("pack:" + newRecord._id + " created.");
        if ((count - 1) == i) console.log(count + " record generated successfully");
    }
}

async function generateRequest(count) {
    console.log("Request generating progress on the way...");
    let counter = 0;
    for (let i = 0; i < count; i++) {
        let request = new Request();
        let randomTravelFromPool = await Travel.aggregate({$sample: {size: 1}});
        let pack4travel = await Pack.find({weight: {$gte: randomTravelFromPool[0].weight}}).limit(1);
        if (pack4travel.length > 0) {
            counter++;
            request["travel"] = randomTravelFromPool[0]._id;
            request["pack"] = pack4travel[0]._id;
            let newRecord = await request.save({});
            console.log("request:" + newRecord._id + " created.");
        }
        if ((count - 1) == i) console.log(counter + " record generated successfully");
    }
}

async function generateDeals(count) {
    console.log("Deal generating progress on the way...");
    let counter = 0;
    for (let i = 0; i < count; i++) {
        let deal = new Deal();
        let randomTravelFromPool = await Travel.aggregate({$sample: {size: 1}});
        let pack4travel = await Pack.find({weight: {$gte: randomTravelFromPool[0].weight}}).limit(1);
        if (pack4travel.length > 0) {
            counter++;
            deal["travel"] = randomTravelFromPool[0]._id;
            deal["pack"] = pack4travel[0]._id;
            let newRecord = await deal.save({});
            console.log("deal:" + newRecord._id + " created.");
        }
        if ((count - 1) == i) console.log(counter + " record generated successfully");
    }
}

async function main() {
    await generateUser(100);
    await generateTravel(100);
    await generatePack(100);
    await generateRequest(100);
    await generateDeals(100);
    console.log("All data types populated successfully");
}

main();
