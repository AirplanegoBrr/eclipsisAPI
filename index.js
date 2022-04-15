const fetch = require('node-fetch');
const baseURL = "https://api.xethlyx.com/"

async function getMatch(matchID){
    let match = await fetch(`${baseURL}eclipsis/match/${matchID}`)
    match = await match.json()
    return match
}

async function getUserOverview(userID){
    let user = await fetch(`${baseURL}eclipsis/user/overview/${userID}`)
    user = await user.json()
    return user
}

async function getRatingDelta(userID){
    let delta = await fetch(`${baseURL}eclipsis/user/delta/${userId}`)
    delta = await delta.json()
    return delta
}

async function getUserMatches(userID){
    let matches = await fetch(`${baseURL}eclipsis/user/matches/${userID}`)
    matches = await matches.json()
    return matches
}

async function getUserPlaytime(userID){
    let playtime = await fetch(`${baseURL}eclipsis/user/playtime/${userID}`)
    playtime = await playtime.json()
    return playtime
}

async function getUserTeamates(userID){
    let teammates = await fetch(`${baseURL}eclipsis/user/teammates/${userID}`)
    teammates = await teammates.json()
    return teammates
}

async function getRobloxID(username){
    let robloxID = await fetch(`${baseURL}roblox/user_id/${username}`)
    robloxID = await robloxID.json()
    return robloxID
}

module.exports = {
    getMatch,
    getUserOverview,
    getRatingDelta,
    getUserMatches,
    getUserPlaytime,
    getUserTeamates,
    getRobloxID
}