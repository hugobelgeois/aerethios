<script lang="ts">
  import { applyBase } from "$lib/basePath";
</script>

<svelte:head>
  <title>{"Propriétés"}</title>
  <meta name="description" content={"Délicat L'objet se casse s'il se fait toucher par une réussite critique. Parade Si un ennemi frappe cet équipement mais n'atteint pas l'AC total, il ouvre sa garde et permet à sa cible de réagir.…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Propriétés"} />
  <meta property="og:description" content={"Délicat L'objet se casse s'il se fait toucher par une réussite critique. Parade Si un ennemi frappe cet équipement mais n'atteint pas l'AC total, il ouvre sa garde et permet à sa cible de réagir.…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Propriétés"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<h2 data-heading=\"Délicat\" dir=\"auto\" id=\"delicat\">Délicat</h2>\n<p dir=\"auto\">L'objet se casse s'il se fait toucher par une réussite critique.</p>\n<h2 data-heading=\"Parade\" dir=\"auto\" id=\"parade\">Parade</h2>\n<p dir=\"auto\">Si un ennemi frappe cet équipement mais n'atteint pas l'AC total, il ouvre sa garde et permet à sa cible de réagir.</p>\n<h2 data-heading=\"Finesse\" dir=\"auto\" id=\"finesse\">Finesse</h2>\n<p dir=\"auto\">Permet d'utiliser la Dextérité plutôt que la Force comme modificateur de jet d'attaque.</p>\n<h2 data-heading=\"Versatile\" dir=\"auto\" id=\"versatile\">Versatile</h2>\n<p dir=\"auto\">L'arme peut être utilisée avec 1 ou 2 mains, ce qui change son dé de dégâts.</p>\n<h2 data-heading=\"Léger\" dir=\"auto\" id=\"leger\">Léger</h2>\n<p dir=\"auto\">Permet d'utiliser une arme supplémentaire de catégorie Courte lors de son tour.</p>\n<p dir=\"auto\">Cette arme ne peut pas elle-même utiliser sa propriété Léger.</p>\n<h2 data-heading=\"Jetable\" dir=\"auto\" id=\"jetable\">Jetable</h2>\n<p dir=\"auto\">L'arme peut être jetée en utilisant ses jets de dégâts et ses modificateurs comme une attaque normale.</p>\n<h2 data-heading=\"Préparation\" dir=\"auto\" id=\"preparation\">Préparation</h2>\n<p dir=\"auto\">L'arme nécessite de passer son tour à la préparer avant de pouvoir s'en servir.</p>\n<h2 data-heading=\"Lent\" dir=\"auto\" id=\"lent\">Lent</h2>\n<p dir=\"auto\">L'arme empêche de faire d'autres actions pendant le tour si on s'en sert pour attaquer.</p>\n<h2 data-heading=\"Lacération\" dir=\"auto\" id=\"laceration\">Lacération</h2>\n<p dir=\"auto\">Une fois par tour, augmente l'affliction <a data-tooltip-position=\"top\" aria-label=\"Afflictions &gt; Saignement\" href=\"%%BASE%%/Jeu/Regles/Statuts/Afflictions#saignement\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Afflictions\" data-wiki-fragment=\"Saignement\">Saignement</a> de 1 sur la cible touchée si les dégâts passent outre le DR.</p>\n<h2 data-heading=\"Critique\" dir=\"auto\" id=\"critique\">Critique</h2>\n<p dir=\"auto\">Double les dégâts des :</p>\n<ul>\n<li dir=\"auto\">attaques dans le dos,</li>\n<li dir=\"auto\">attaques surprises.</li>\n</ul>\n<h2 data-heading=\"Double\" dir=\"auto\" id=\"double\">Double</h2>\n<p dir=\"auto\">Permet d'attaquer une deuxième fois avec la même arme.</p>\n<h2 data-heading=\"Charge\" dir=\"auto\" id=\"charge\">Charge</h2>\n<p dir=\"auto\">Permet de déplacer un ennemi de (Force x 1 case) en ligne droite avec soi tout en lui faisant des dégâts (1d4C + Force).</p>\n<h2 data-heading=\"Portée\" dir=\"auto\" id=\"portee\">Portée</h2>\n<p dir=\"auto\">Ajoute 5ft (1 case) de portée à l'arme.</p>\n<p dir=\"auto\">Les dégâts dans un rayon de 5ft (1 case) sont réduits de moitié.</p>\n<p dir=\"auto\">La zone d'attaque d'opportunité du joueur n'est plus un rayon de 5ft, mais un rayon entre 5ft et 10ft (1 case de distance).</p>\n<h2 data-heading=\"Instable\" dir=\"auto\" id=\"instable\">Instable</h2>\n<p dir=\"auto\">A chaque utilisation, le joueur lance 1d20.</p>\n<p dir=\"auto\">S'il fait un échec critique, l'objet n'est plus utilisable jusqu'à être réparé.</p>\n<p dir=\"auto\">S'il s'agit d'une arme, l'attaque touche, mais elle fait également (1d4 * 10)% des dégâts au joueur avant de \"casser\".</p>")}
  </div>
</article>
