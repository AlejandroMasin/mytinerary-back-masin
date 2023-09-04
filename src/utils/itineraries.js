const itineraries = [
    {
        "nombre": "Museums and Art in the City of Light",
        "descripcion": "A three-day itinerary in Paris focused on visiting renowned museums such as the Louvre, the Musee d'Orsay, and the Pompidou Center to appreciate the diversity of French art.",
        "precio": 2,
        "duracion": "4 hours",
        "likes": ["JohnDoe1234", "JaneDoe5678", "Pepito1234"],
        "hashtags": ["#Travel", "#Adventure", "#Photography"],
        "_ciudad": "64f22b93710c1c3b2e8a27e0"
    },
    {
        "nombre": "Culinary Delights in the City",
        "descripcion": "A gastronomic journey in the heart of the city, exploring the finest restaurants and savoring exquisite dishes from different cuisines.",
        "precio": 4,
        "duracion": "3 hours",
        "likes": ["Foodie123", "Gourmet456", "TastyEater789"],
        "hashtags": ["#Foodie", "#Cuisine", "#FineDining"],
        "_ciudad": "64f22b93710c1c3b2e8a27e0"
    },
    {
        "nombre": "Scenic Strolls in Nature",
        "descripcion": "A tranquil escape into nature with picturesque hikes, visits to botanical gardens, and serene walks along the riverbanks.",
        "precio": 3,
        "duracion": "5 hours",
        "likes": ["NatureLover123", "Hiker456", "OutdoorExplorer789"],
        "hashtags": ["#Nature", "#Hiking", "#Relaxation"],
        "_ciudad": "64f22b93710c1c3b2e8a27e0"
    },
    {
        "nombre": "Exploring Sydney's Art Scene",
        "descripcion": "A two-day itinerary in Sydney focused on experiencing the vibrant art scene, including visits to art galleries, street art tours, and interactive art installations.",
        "precio": 3,
        "duracion": "2 hours",
        "likes": ["ArtLover123", "GalleryGoer456", "CreativeTraveler789"],
        "hashtags": ["#Art", "#Culture", "#Sydney"],
        "_ciudad": "64f22b93710c1c3b2e8a27de"
    },
    {
        "nombre": "Sydney's Culinary Delights",
        "descripcion": "A food lover's dream itinerary in Sydney, exploring its diverse culinary scene, from trendy cafes and seafood markets to fine dining restaurants.",
        "precio": 4,
        "duracion": "3 hours",
        "likes": ["FoodieSydney", "GourmetExplorer", "TastyEaterAus"],
        "hashtags": ["#Foodie", "#Cuisine", "#SydneyEats"],
        "_ciudad": "64f22b93710c1c3b2e8a27de"
    },
    {
        "nombre": "Nature Escapes in Sydney",
        "descripcion": "A nature lover's paradise in Sydney with hikes through national parks, beach walks, and visits to wildlife sanctuaries to experience the beauty of Australia's natural landscapes.",
        "precio": 2,
        "duracion": "4 hours",
        "likes": ["NatureSeeker", "OutdoorEnthusiast", "WildlifeLover"],
        "hashtags": ["#Nature", "#Hiking", "#SydneyOutdoors"],
        "_ciudad": "64f22b93710c1c3b2e8a27de"
    },
    {
        "nombre": "Historical Wonders of Cairo",
        "descripcion": "A four-day itinerary in Cairo that takes you on a journey through the city's rich history, including visits to the Pyramids of Giza, the Egyptian Museum, and historic mosques.",
        "precio": 3,
        "duracion": "4 hours",
        "likes": ["HistoryBuff", "CultureExplorer", "AncientEgyptEnthusiast"],
        "hashtags": ["#History", "#Culture", "#Cairo"],
        "_ciudad": "64f22b93710c1c3b2e8a27d6"
    },
    {
        "nombre": "Culinary Delights in Cairo",
        "descripcion": "A food lover's paradise in Cairo, exploring the local street food, traditional Egyptian dishes, and bustling markets to savor the flavors of Egypt.",
        "precio": 3,
        "duracion": "3 hours",
        "likes": ["FoodieCairo", "LocalCuisineExplorer", "TastyEgyptianEats"],
        "hashtags": ["#Foodie", "#Cuisine", "#CairoEats"],
        "_ciudad": "64f22b93710c1c3b2e8a27d6"
    },
    {
        "nombre": "Nile River Adventures",
        "descripcion": "A relaxing cruise along the Nile River, exploring ancient temples, picturesque villages, and enjoying the serene beauty of the Nile Valley over a week-long journey.",
        "precio": 4,
        "duracion": "5 hours",
        "likes": ["RiverCruiseEnthusiast", "NileExplorer", "CulturalCruiser"],
        "hashtags": ["#RiverCruise", "#Exploration", "#NileAdventures"],
        "_ciudad": "64f22b93710c1c3b2e8a27d6"
    },
    {
        "nombre": "New York City Landmarks",
        "descripcion": "A comprehensive itinerary covering the iconic landmarks of New York City, including visits to the Statue of Liberty, Central Park, Times Square, and the Empire State Building.",
        "precio": 4,
        "duracion": "3 days",
        "likes": ["BigAppleExplorer", "LandmarkLover", "NYCEnthusiast"],
        "hashtags": ["#NYC", "#Landmarks", "#Sightseeing"],
        "_ciudad": "64f22b93710c1c3b2e8a27e0"
    },
    {
        "nombre": "Foodie Adventure in NYC",
        "descripcion": "A culinary journey through New York City's diverse food scene, exploring food trucks, ethnic neighborhoods, and renowned restaurants to satisfy your taste buds.",
        "precio": 3,
        "duracion": "4 hours",
        "likes": ["FoodieNYC", "GourmetExplorer", "TastyEater"],
        "hashtags": ["#Foodie", "#Cuisine", "#NYCEats"],
        "_ciudad": "64f22b93710c1c3b2e8a27e0"
    },
    {
        "nombre": "Art and Culture in The Big Apple",
        "descripcion": "An exploration of New York City's vibrant art and cultural scene, including visits to the MET Museum, Broadway shows, and contemporary art galleries.",
        "precio": 5,
        "duracion": "5 hours",
        "likes": ["ArtLover", "CultureExplorer", "NYCArtEnthusiast"],
        "hashtags": ["#Art", "#Culture", "#NYCArts"],
        "_ciudad": "64f22b93710c1c3b2e8a27e0"
    },
    {
        "nombre": "Historical London Exploration",
        "descripcion": "A five-day itinerary in London that immerses you in the city's rich history, featuring visits to the Tower of London, Buckingham Palace, Westminster Abbey, and the British Museum.",
        "precio": 4,
        "duracion": "5 hours",
        "likes": ["HistoryBuff", "CultureExplorer", "LondonEnthusiast"],
        "hashtags": ["#History", "#Culture", "#London"],
        "_ciudad": "64f22b93710c1c3b2e8a27e0"
    },
    {
        "nombre": "London's Culinary Delights",
        "descripcion": "A food lover's dream itinerary in London, exploring the city's diverse food markets, traditional English pubs, and fine dining restaurants to savor the flavors of the UK.",
        "precio": 3,
        "duracion": "4 hours",
        "likes": ["FoodieLondon", "GourmetExplorer", "TastyEaterUK"],
        "hashtags": ["#Foodie", "#Cuisine", "#LondonEats"],
        "_ciudad": "64f22b93710c1c3b2e8a27e0"
    },
    {
        "nombre": "Art and Culture in London",
        "descripcion": "An exploration of London's vibrant art and cultural scene, including visits to the Tate Modern, West End theaters, and walking tours of street art in Shoreditch.",
        "precio": 5,
        "duracion": "3 hours",
        "likes": ["ArtLover", "CultureExplorer", "LondonArtEnthusiast"],
        "hashtags": ["#Art", "#Culture", "#LondonArts"],
        "_ciudad": "64f22b93710c1c3b2e8a27e0"
    },
    {
        "nombre": "Playas y Relajación en Río",
        "descripcion": "Un itinerario de cuatro días en Río de Janeiro que te llevará a las famosas playas de Copacabana e Ipanema, así como a experiencias de relajación en spas y bares de playa.",
        "precio": 3,
        "duracion": "4 hours",
        "likes": ["PlayaFan", "RelaxEnthusiast", "RioLover"],
        "hashtags": ["#Playa", "#Relajación", "#Río"],
        "_ciudad": "64f22b93710c1c3b2e8a27e0"
    },
    {
        "nombre": "Aventuras en la Selva de Tijuca",
        "descripcion": "Un emocionante itinerario de tres días que te llevará a explorar la selva de Tijuca, hacer senderismo en cascadas, y disfrutar de actividades al aire libre en el corazón de Río de Janeiro.",
        "precio": 4,
        "duracion": "3 hours",
        "likes": ["AventureroRío", "NaturalezaExplorador", "SenderistaBrasil"],
        "hashtags": ["#Aventura", "#Naturaleza", "#RíoDeJaneiro"],
        "_ciudad": "64f22b93710c1c3b2e8a27e0"
    },
    {
        "nombre": "Cultura y Samba en Río",
        "descripcion": "Un itinerario de cinco días que te sumergirá en la rica cultura de Río de Janeiro, incluyendo visitas a museos, espectáculos de samba, y recorridos por barrios históricos.",
        "precio": 5,
        "duracion": "5 hours",
        "likes": ["CulturaRío", "AmanteDelSamba", "HistoriaBrasil"],
        "hashtags": ["#Cultura", "#Samba", "#RíoCultural"],
        "_ciudad": "64f22b93710c1c3b2e8a27e0"
    }

];

module.exports = itineraries;