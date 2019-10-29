const MENTOR = "Mentor";
const MENTEE = "Mentee";

function getOrCreateProfile(data, id) {
    if (!data[id]) {
        data[id] = {
            "id": id,
            "attributes": {
                "name": id,
                "department": "",
                "skills": "",
                "aspirations": "",
                "looking_for": "Mentor",
                "willing_to": "None",
                "photo": "data:image/png;base64,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",
            },
            "Mentor": {
                "swipes": {},
                "matches": {}
            },
            "Mentee": {
                "swipes": {},
                "matches": {}
            },
        };
    }
    return data[id];
}

function updateProfileAttributes(data, id, attributes) {
    let profile = getOrCreateProfile(data, id);
    profile["attributes"] = attributes;
    return profile;
}

function getMatchOrNull(data, id) {
    const profile = getOrCreateProfile(data, id);
    const mentor_mentee = profile["attributes"]["looking_for"] === MENTOR ? MENTOR : MENTEE;
    const my_swipes = data[id][mentor_mentee]["swipes"];

    const candidates = [];
    for (let match_id in data) {
        let match = data[match_id];
        if ((match_id !== id) && 
            (!my_swipes.hasOwnProperty(match_id)) &&
            (match["attributes"]["willing_to"] === mentor_mentee)) {
                candidates.push(match);
            }
    }
    if (candidates.length === 0) {
        return { 
            match: null,
            confidence: 0,
        };
    }
    else {
        return {
            match: candidates[Math.floor(Math.random() * candidates.length)],
            confidence: Math.floor(Math.random() * 100),
        }
    }
}

function swipeLeft(data, id, mid) {
    let profile = getOrCreateProfile(data, id);
    const mentor_mentee = profile["attributes"]["looking_for"] === MENTOR ? MENTOR : MENTEE;
    profile[mentor_mentee]["swipes"][mid] = false;
    return getMatchOrNull(data, id);
}

function swipeRight(data, id, mid) {
    let profile = getOrCreateProfile(data, id);
    const mentor_mentee = profile["attributes"]["looking_for"] === MENTOR ? MENTOR : MENTEE;
    profile[mentor_mentee]["swipes"][mid] = true;
    let match = getOrCreateProfile(data, mid);
    match[mentor_mentee]["matches"][id] = true;
    return getMatchOrNull(data, id);
}

function getMatches(data, id) {
    let profile = getOrCreateProfile(data, id);
    const matches = {
        "Mentor": [],
        "Mentee": []
    }
    for (let mentor_id in profile[MENTOR]["matches"]) {
        let mentor = getOrCreateProfile(data, mentor_id);
        matches["Mentor"].push({
            "id": mentor_id,
            "relationship": MENTOR,
            "attributes": mentor["attributes"],
        })
    }
    for (let mentee_id in profile[MENTEE]["matches"]) {
        let mentee = getOrCreateProfile(data, mentee_id);
        matches["Mentor"].push({
            "id": mentee_id,
            "relationship": MENTEE,
            "attributes": mentee["attributes"],
        })
    }
    return matches;
}

function ignoreMatch(data, id, mentor_mentee, mid) {
    mentor_mentee = mentor_mentee === MENTOR ? MENTOR : MENTEE;
    let profile = getOrCreateProfile(data, id);
    delete profile[mentor_mentee]["matches"][mid];
    return getMatches(data, id);
}

function test_createMentee(data, id, photo) {
    let profile = getOrCreateProfile(data, id);
    let attributes = profile["attributes"]
    if (photo) { attributes["photo"] = photo; }
    attributes["looking_for"] = MENTOR;
    attributes["willing_to"] = MENTEE;
    updateProfileAttributes(data, id, attributes);
}

function test_createMentor(data, id, photo) {
    let profile = getOrCreateProfile(data, id);
    let attributes = profile["attributes"]
    if (photo) { attributes["photo"] = photo; }
    attributes["looking_for"] = MENTEE;
    attributes["willing_to"] = MENTOR;
    updateProfileAttributes(data, id, attributes);
}

function MintorAPI() {
    this.data = {}

    test_createMentee(this.data, "Jon Snow", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIWFRUWGB0WGBgYFRcXFxcaFxoXGBUYFxgYHyggGh0lGxcXITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFy0fHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLf/AABEIAREAuAMBIgACEQEDEQH/xAAb");

    test_createMentor(this.data, "Jaime Lannister");
    test_createMentor(this.data, "Cersei Lannister");
    test_createMentor(this.data, "Daenerys Targaryen");
    test_createMentor(this.data, "Jorah Mormont");
    test_createMentor(this.data, "Sansa Stark");
    test_createMentor(this.data, "Arya Stark");
    test_createMentor(this.data, "Theon Greyjoy");
    test_createMentor(this.data, "Bran Stark");
    test_createMentor(this.data, "The Hound");
    test_createMentor(this.data, "Tyrion Lannister");
    test_createMentor(this.data, "Littlefinger");
    test_createMentor(this.data, "Davos Seaworth");
    test_createMentor(this.data, "Melisandre");
    test_createMentor(this.data, "Bronn");
    test_createMentor(this.data, "Varys");
    test_createMentor(this.data, "Tormund Giantsbane");
    test_createMentor(this.data, "Brienne of Tarth");
    test_createMentor(this.data, "Gilly");
    test_createMentor(this.data, "Missandei");
    test_createMentor(this.data, "Grey Worm");
}

MintorAPI.prototype.getProfile = function(id) {
    return new Promise( (resolve, reject) => { resolve( getOrCreateProfile(this.data, id) ); });
}

MintorAPI.prototype.updateProfileAttributes = function(profile) {
    return new Promise( (resolve, reject) => { resolve( updateProfileAttributes(this.data, profile["id"], profile["attributes"]) ); });
}

MintorAPI.prototype.getMatchOrNull = function(profile) {
    return new Promise( (resolve, reject) => { resolve( getMatchOrNull(this.data, profile["id"]) ); });
}

MintorAPI.prototype.swipeLeft = function(profile, match) {
    return new Promise( (resolve, reject) => { resolve( swipeLeft(this.data, profile["id"], match["id"]) ); });
}

MintorAPI.prototype.swipeRight = function(profile, match) {
    return new Promise( (resolve, reject) => { resolve( swipeRight(this.data, profile["id"], match["id"]) ); });
}

MintorAPI.prototype.getMatches = function(profile) {
    return new Promise( (resolve, reject) => { resolve( getMatches(this.data, profile["id"]) ); });
}

MintorAPI.prototype.ignoreMatch = function(profile, match) {
    return new Promise( (resolve, reject) => { resolve( ignoreMatch(this.data, profile["id"], match["relationship"], match["id"]) ); });
}

module.exports = exports = MintorAPI;