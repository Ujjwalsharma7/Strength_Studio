export const exerciseOptions = {
   
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3afacda79amsha114d1cc143dbf7p1dc97ejsn9be2c1f76339'  ,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
 export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3afacda79amsha114d1cc143dbf7p1dc97ejsn9be2c1f76339',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};





export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}