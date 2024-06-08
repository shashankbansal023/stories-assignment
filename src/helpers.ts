async function fetchStories(){
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?limit=10');
    const res = await response.json();
    return res;
}

export default fetchStories;