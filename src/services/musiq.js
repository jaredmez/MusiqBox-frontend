
const BASEURL = 'http://ws.audioscrobbler.com/2.0'
const API_KEY = '90f1c61ab8699a721ba6ea9e390c5361'
// const url = `${BASEURL}/?method=artist.gettoptracks&artist=${artist}&api_key=${API_KEY}&format=json`

function getTopTracks(artistName) {
    const artist = artistName;
    return fetch(`${BASEURL}/?method=artist.gettoptracks&artist=${artist}&api_key=${API_KEY}&format=json`)
        // .then(res => res.json())
        // .then(res => console.log(res))  
}

export default getTopTracks