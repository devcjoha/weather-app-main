import axios from "axios";

export default async function getDataCity(lat, lon) {
  const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=es`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    return {
      city: data.city || null,
      locality: data.locality || null,
      subdivision: data.principalSubdivision || null,
      country: data.countryName || null,
      continent: data.continent || null,
      latitude: data.latitude,
      longitude: data.longitude,
    };
  } catch (err) {
    console.error("Error al obtener datos de ciudad:", err.message);
    return null;
  }
};