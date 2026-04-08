// On attend que tout le contenu HTML (le DOM) soit chargé avant de lancer le script
document.addEventListener("DOMContentLoaded", () => {
    
    /* === 1. REMPLISSAGE DE LA SECTION PARCOURS === */

    // On cible le conteneur où s'affichera la liste du parcours
    const pList = document.getElementById('list-parcours');
    
    // On crée une copie du tableau parcours, on le trie par ID décroissant (du plus récent au plus ancien)
    [...myData.parcours].sort((a,b) => b.id - a.id).forEach(item => {
        // On ajoute le code HTML pour chaque ligne de formation dans le conteneur
        pList.innerHTML += `
            <div class="item-row">
                <span class="date">${item.date}</span> <div style="flex:1">
                    <div style="font-weight:700">${item.titre}</div> <div style="color:var(--text-light); font-size:0.9rem">${item.lieu}</div> </div>
            </div>`;
    });

    /* === 2. FONCTION POUR GÉNÉRER LES ACCORDÉONS === */

    // Cette fonction prend des données (tableau) et l'ID du conteneur cible pour créer des menus déroulants
    const renderAccordions = (data, containerId) => {
        // On récupère le conteneur dans le HTML
        const container = document.getElementById(containerId);
        
        // Pour chaque objet dans les données (compétence ou certification)
        data.forEach(item => {
            // On crée un élément div qui servira de carte
            const card = document.createElement('div');
            // On lui donne la classe CSS définie dans style.css
            card.className = 'acc-card';
            
            // On définit la structure interne de la carte (titre cliquable + panneau caché)
            card.innerHTML = `
                <div class="acc-trigger">${item.nom} <span>+</span></div>
                <div class="acc-panel">
                    <p style="font-size:0.9rem; color:var(--text-light)">${item.details}</p>
                    ${item.documents.map(d => `<a href="${d.url}" target="_blank" class="drive-link">${d.label}</a>`).join('')}
                </div>
            `;
            
            // On ajoute un écouteur d'événement sur le titre pour gérer le clic
            card.querySelector('.acc-trigger').addEventListener('click', () => {
                // On bascule la classe 'active' (si elle y est, on l'enlève, sinon on l'ajoute)
                card.classList.toggle('active');
                // On change le symbole visuel selon l'état d'ouverture (+ ou −)
                card.querySelector('span').textContent = card.classList.contains('active') ? '−' : '+';
            });
            
            // On injecte enfin la carte terminée dans le conteneur principal
            container.appendChild(card);
        });
    };

    /* === 3. APPEL DES FONCTIONS POUR REMPLIR LA PAGE === */

    // Génère la liste des compétences dans l'élément 'list-skills'
    renderAccordions(myData.competences, 'list-skills');
    
    // Génère la liste des certifications dans l'élément 'list-certs'
    renderAccordions(myData.certifications, 'list-certs');

}); // Fin de l'événement DOMContentLoaded