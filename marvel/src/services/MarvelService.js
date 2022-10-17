

class MarvelService {
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource('https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=038fdc3742da38347760b130b6dfd14f');
    }

    getCharacter = (id) => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=038fdc3742da38347760b130b6dfd14f`);
    }
}

export default MarvelService;