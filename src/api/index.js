import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';

export const getPlacesData = async (sw) => {
    try {
        const {data: {data}} = await axios.get(URL,  {
    params: {
        // bl_latitude: sw.lat,
        // tr_latitude: ne.lng,
        // bl_longitude: sw.lat,
        // tr_longitude: ne.lng,

        latitude: sw.lat,
        longitude: sw.lng,
    },
    headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '932f002912msh084b1e5430196efp1cea36jsn8717fff73e5a'
    }
});
        return data;
    } catch (error) {
        console.log(error);
    }
}
