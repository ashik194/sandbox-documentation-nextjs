export default async function getData(){
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");

    return result.json();
}