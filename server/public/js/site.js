function loadPosts(){
    fetch('/api/post')
    .then(async (response) => {
        const res = await response.json();
        console.log(res.length);
        for(let i=0;i<res.length;i++){
            const name = document.createTextNode(res[i].name)
            const content = document.createTextNode(res[i].content)
            const div = document.createElement('div')
            const hr = document.createElement('hr')
            const nameP = document.createElement('p')
            const contentP = document.createElement('p')
            document.getElementById('posts').appendChild(div)
            div.appendChild(nameP)
            div.appendChild(contentP)
            div.appendChild(hr)
            nameP.appendChild(name)
            contentP.appendChild(content)
        }
    })
}