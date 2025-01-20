function loadComponent(id, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${filePath}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(error));
}
// Load components dynamically
// Load components dynamically
const components = {
    nav: "components/nav.html",
    hero: "components/hero.html",
    about: "components/about.html",
    projects: "components/projects.html",
    education: "components/education.html",
    contact: "components/contact.html",
    blog: "components/blog.html",
    footer: "components/footer.html",
};

Object.entries(components).forEach(([id, filePath]) => {
    loadComponent(id, filePath);
});
