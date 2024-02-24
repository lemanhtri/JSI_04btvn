const root = document.querySelector("#root");
let html = "";
async function getAPI() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    for (let i = 0; i < data.length; i++) {
        let img = data[i].thumbnailUrl;
        html += `
        <h1>Title</h1>
        <p>body</p>
        <hr/>
`;
    };
    root.innerHTML = html;
};
getAPI()
