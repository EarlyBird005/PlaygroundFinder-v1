import "dotenv/config";
import { app } from "./app.js";
import { connectDB } from "./database/db.js";

const port = process.env.PORT || 4001;

connectDB();
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
}); 

/*
[
    {
        "name": "Dimond Villa",
        "description": "A popular playground in Chandkheda.",
        "address": "Nigam Nagar, Chandkheda, Ahmedabad, Gujarat 382424",
        "zipcode": 382424,
        "city": "Ahmedabad",
        "timing": "6 AM - 10 PM"
    },
    {
        "name": "Railway Colony Ground",
        "description": "A local playground likely used by residents of the Railway Colony.",
        "address": "Railway Colony, Sabarmati, Ahmedabad, Gujarat 380019",
        "zipcode": 380019,
        "city": "Ahmedabad",
        "timing": "Please check with local residents or authorities for timings."
    },
    {
        "name": "H.L. Ground",
        "description": "A popular cricket ground known for its well-maintained pitch. Often used for cricket matches and coaching sessions. Associated with H.L. Commerce College.",
        "address": "Vasant Vihar, Navrangpura, Ahmedabad, Gujarat 380009",
        "zipcode": 380009,
        "city": "Ahmedabad",
        "timing": "Please check with the ground authorities for timings."
    },
    {
        "name": "AMC Garden",
        "description": "A public garden maintained by the Ahmedabad Municipal Corporation.",
        "address": "Nigam Nagar, Chandkheda, Ahmedabad, Gujarat 382424",
        "zipcode": 382424,
        "city": "Ahmedabad",
        "timing": "Usually open from morning to evening. Please check local timings."
    },
    {
        "name": "Devi Public Park",
        "description": "A local community park likely featuring green spaces, play equipment, and possibly a walking track. Situated in a residential area, it's a common spot for neighborhood gatherings and recreational activities.",
        "address": "Opposite Parsh Nagar, Parshwanath Nagar, BLH Janta Nagar, Chandkheda, Ahmedabad, Gujarat 382424",
        "zipcode": 382424,
        "city": "Ahmedabad",
        "timing": "Usually open from dawn to dusk. Check local notices for any specific timings."
    },
    {
        "name": "Tragad Cricket Ground",
        "description": "A cricket ground likely used for local matches and practice sessions.",
        "address": "Tragad, Gujarat 382470",
        "zipcode": 382470,
        "city": "Tragad",
        "timing": "Please check with local sources or inquire at the ground for timings."
    },
    {
        "name": "Children Park",
        "description": "A local park designed for children, likely featuring play equipment such as swings, slides, and see-saws.",
        "address": "11, Nigam Nagar, Chandkheda, Ahmedabad, Gujarat 382424",
        "zipcode": 382424,
        "city": "Ahmedabad",
        "timing": "Typically open from morning to evening. Please check for specific timings."
    },
    {
        "name": "Nirma Vidyavihar",
        "description": "Campus of Nirma University, likely featuring sports grounds and recreational areas for students.",
        "address": "505 Nebula Dr, Blue City",
        "zipcode": "N/A",
        "city": "Blue City",
        "timing": "Access may be restricted. Check university regulations for visiting hours."
    },
    {
        "name": "SGVP Cricket Ground",
        "description": "Cricket ground likely associated with the Shri Govind Guru Vishwavidyalaya (SGVP) campus.",
        "address": "SGVP Cricket Ground, SGVP Campus,, Nr. SGVP circle, Chharodi, Ahmedabad, Gujarat 382481",
        "zipcode": 382481,
        "city": "Ahmedabad",
        "timing": "Access may be restricted. Check with the university or ground authorities for timings and usage rules."
    },
    {
        "name": "Law Garden",
        "description": "A popular public garden known for its lush greenery, jogging tracks, and evening food stalls.",
        "address": "Near Ellisbridge, Ahmedabad",
        "zipcode": 380006,
        "city": "Ahmedabad",
        "timing": "Generally open from early morning to late evening."
    },
    {
        "name": "Kankaria Lake",
        "description": "A large lake with a surrounding park offering boating, a zoo, a toy train, and various recreational activities.",
        "address": "Kankaria, Ahmedabad",
        "zipcode": 380022,
        "city": "Ahmedabad",
        "timing": "Generally open from morning to evening."
    },
    {
        "name": "Sabarmati Riverfront",
        "description": "A beautifully developed waterfront with gardens, walkways, food stalls, and event spaces along the Sabarmati River.",
        "address": "Along the Sabarmati River, Ahmedabad",
        "zipcode": "Varies depending on the specific location",
        "city": "Ahmedabad",
        "timing": "Generally open 24/7."
    },
    {
        "name": "Parimal Garden",
        "description": "A serene garden with a lake, known for its peaceful ambiance and evening walks.",
        "address": "Parimal Garden, Ahmedabad",
        "zipcode": 380006,
        "city": "Ahmedabad",
        "timing": "Generally open from early morning to late evening."
    },
    {
        "name": "Shaheed Major Rushikesh Ramani Garden",
        "description": "A well-maintained garden with a children's play area, jogging track, and a serene environment.",
        "address": "Near Law Garden, Ahmedabad",
        "zipcode": 380006,
        "city": "Ahmedabad",
        "timing": "Generally open from early morning to late evening."
    }
]
*/

/* PG DETAILS
{
    "Dimond Villa": {
        "name": "Dimond Villa",
        "description": "A popular playground in Chandkheda.",
        "address": "Nigam Nagar, Chandkheda, Ahmedabad, Gujarat 382424",
        "zipcode": 382424,
        "city": "Ahmedabad",
        "timing": "6 AM - 10 PM"
    },
    "Railway Colony Ground": {
        "name": "Railway Colony Ground",
        "description": "A local playground likely used by residents of the Railway Colony.",
        "address": "Railway Colony, Sabarmati, Ahmedabad, Gujarat 380019",
        "zipcode": 380019,
        "city": "Ahmedabad",
        "timing": "Please check with local residents or authorities for timings."
    },
    "H.L. Ground": {
        "name": "H.L. Ground",
        "description": "A popular cricket ground known for its well-maintained pitch. Often used for cricket matches and coaching sessions. Associated with H.L. Commerce College.",
        "address": "Vasant Vihar, Navrangpura, Ahmedabad, Gujarat 380009",
        "zipcode": 380009,
        "city": "Ahmedabad",
        "timing": "Please check with the ground authorities for timings."
    },
    "AMC Garden": {
        "name": "AMC Garden",
        "description": "A public garden maintained by the Ahmedabad Municipal Corporation.",
        "address": "Nigam Nagar, Chandkheda, Ahmedabad, Gujarat 382424",
        "zipcode": 382424,
        "city": "Ahmedabad",
        "timing": "Usually open from morning to evening. Please check local timings."
    },
    "Devi Public Park": {
        "name": "Devi Public Park",
        "description": "A local community park likely featuring green spaces, play equipment, and possibly a walking track. Situated in a residential area, it's a common spot for neighborhood gatherings and recreational activities.",
        "address": "Opposite Parsh Nagar, Parshwanath Nagar, BLH Janta Nagar, Chandkheda, Ahmedabad, Gujarat 382424",
        "zipcode": 382424,
        "city": "Ahmedabad",
        "timing": "Usually open from dawn to dusk. Check local notices for any specific timings."
    },
    "Tragad Cricket Ground": {
        "name": "Tragad Cricket Ground",
        "description": "A cricket ground likely used for local matches and practice sessions.",
        "address": "Tragad, Gujarat 382470",
        "zipcode": 382470,
        "city": "Tragad",
        "timing": "Please check with local sources or inquire at the ground for timings."
    },
    "Children Park": {
        "name": "Children Park",
        "description": "A local park designed for children, likely featuring play equipment such as swings, slides, and see-saws.",
        "address": "11, Nigam Nagar, Chandkheda, Ahmedabad, Gujarat 382424",
        "zipcode": 382424,
        "city": "Ahmedabad",
        "timing": "Typically open from morning to evening. Please check for specific timings."
    },
    "Nirma Vidyavihar": {
        "name": "Nirma Vidyavihar",
        "description": "Campus of Nirma University, likely featuring sports grounds and recreational areas for students.",
        "address": "505 Nebula Dr, Blue City",
        "zipcode": "N/A",
        "city": "Blue City",
        "timing": "Access may be restricted. Check university regulations for visiting hours."
    },
    "SGVP Cricket Ground": {
        "name": "SGVP Cricket Ground",
        "description": "Cricket ground likely associated with the Shri Govind Guru Vishwavidyalaya (SGVP) campus.",
        "address": "SGVP Cricket Ground, SGVP Campus,, Nr. SGVP circle, Chharodi, Ahmedabad, Gujarat 382481",
        "zipcode": 382481,
        "city": "Ahmedabad",
        "timing": "Access may be restricted. Check with the university or ground authorities for timings and usage rules."
    },
    "Law Garden": {
        "name": "Law Garden",
        "description": "A popular public garden known for its lush greenery, jogging tracks, and evening food stalls.",
        "address": "Near Ellisbridge, Ahmedabad",
        "zipcode": 380006,
        "city": "Ahmedabad",
        "timing": "Generally open from early morning to late evening."
    },
    "Kankaria Lake": {
        "name": "Kankaria Lake",
        "description": "A large lake with a surrounding park offering boating, a zoo, a toy train, and various recreational activities.",
        "address": "Kankaria, Ahmedabad",
        "zipcode": 380022,
        "city": "Ahmedabad",
        "timing": "Generally open from morning to evening."
    },
    "Sabarmati Riverfront": {
        "name": "Sabarmati Riverfront",
        "description": "A beautifully developed waterfront with gardens, walkways, food stalls, and event spaces along the Sabarmati River.",
        "address": "Along the Sabarmati River, Ahmedabad",
        "zipcode": "Varies depending on the specific location",
        "city": "Ahmedabad",
        "timing": "Generally open 24/7."
    },
    "Parimal Garden": {
        "name": "Parimal Garden",
        "description": "A serene garden with a lake, known for its peaceful ambiance and evening walks.",
        "address": "Parimal Garden, Ahmedabad",
        "zipcode": 380006,
        "city": "Ahmedabad",
        "timing": "Generally open from early morning to late evening."
    },
    "Shaheed Major Rushikesh Ramani Garden": {
        "name": "Shaheed Major Rushikesh Ramani Garden",
        "description": "A well-maintained garden with a children's play area, jogging track, and a serene environment.",
        "address": "Near Law Garden, Ahmedabad",
        "zipcode": 380006,
        "city": "Ahmedabad",
        "timing": "Generally open from early morning to late evening."
    }
}
*/