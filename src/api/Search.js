const baseURL = "https://api.weatherapi.com/v1/current.json?";
const key = "576b496d5efe421c98f102216240706";
export const getCityWeather = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&key=${key}`)
    return await response.json();
}