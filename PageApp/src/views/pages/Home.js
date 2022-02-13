let getPostsList = async () => {

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch("./package.json", options)
        return await response.json()
    } catch (err) {
        console.log('Error getting documents', err)
    }
}

let Home = {
    render : async () => {
        let posts = await getPostsList()
        return `
            <section class="section">
                <h1> Home </h1>
                <ul>
                    ${posts.map(post =>
            /*html*/`<li><a href="#/p/${post.id}">${post.title}</a></li>`
        ).join('\n ')
        }
                </ul>
            </section>
        `
    }
    , after_render: async () => {
    }

}

export default Home;