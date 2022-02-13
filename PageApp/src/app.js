import Utils        from './services/Utils.js'
import About        from './views/pages/About.js'
import Bottombar    from './views/components/Bottombar.js'
import Navbar       from './views/components/Navbar.js'
import Error404     from "./views/pages/Error404.js";
import Home         from "./views/pages/Home.js";
import PostShow     from './views/pages/PostShow.js'
import Register     from './views/pages/Register.js'

const routes = {
    '/'         : Home,
    '/about'    : About,
    '/p/:id'    : PostShow,
    '/Register' : Register
}

const router = async () => {

    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    const footer = null || document.getElementById('footer_container');

    header.innerHTML = await Navbar.render();
    await Navbar.after_render();
    footer.inerHTML = await Bottombar.render();
    await Bottombar.after_render();

    let request = Utils.parseRequestURL();

    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');

    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();

}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);