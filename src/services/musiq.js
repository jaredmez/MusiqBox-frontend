
const BASEURL = 'http://ws.audioscrobbler.com/2.0'
const API_KEY = '90f1c61ab8699a721ba6ea9e390c5361'
// const url = `${BASEURL}/?method=artist.gettoptracks&artist=${artist}&api_key=${API_KEY}&format=json`

export function getTopTracks(artistName) {
    const artist = artistName;
    return fetch(`${BASEURL}/?method=artist.gettoptracks&artist=${artist}&api_key=${API_KEY}&format=json`)
        // .then(res => res.json())
        // .then(res => console.log(res))  
}

export function getTopAlbums(artistName) {
    const artist = artistName
    return fetch(`${BASEURL}/?method=artist.gettopalbums&artist=${artist}&api_key=${API_KEY}&format=json`)
}


//-------youtube howto implement embed videos and call api https://www.youtube.com/watch?v=EAyo3_zJj5c ------------->
export function getTrackInfo(artist, song) {
    const tubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCoWE-Uib-Ol5mrQmhcuB0Fiv4dKWjiNFI&type=video&maxResults=1&q=${artist}%20${song}`
    return fetch(tubeUrl)
            .then(res => res.json())
            .then(res => res.items[0].id.videoId)
            .catch(err => console.log(err))
}

export default { 
    getTopTracks,
    getTopAlbums,
    getTrackInfo
}