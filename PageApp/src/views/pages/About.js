let About = {
    render : async () => {
        return `
            <section class="section">
                <h1> About </h1>
            </section>
        `
    },
    after_render: async () => {
        document.getElementById("myBtn").addEventListener ("click",  () => {
            console.log('Yo')
            alert('Yo')
        })
    }

}

export default About;