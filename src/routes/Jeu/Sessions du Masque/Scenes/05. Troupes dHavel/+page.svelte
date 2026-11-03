<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "description",
          "text": "Description",
          "level": 2
      },
      {
          "id": "dtails",
          "text": "Détails",
          "level": 2
      },
      {
          "id": "maps",
          "text": "Maps",
          "level": 3
      },
      {
          "id": "rencontres",
          "text": "Rencontres",
          "level": 3
      },
      {
          "id": "havel",
          "text": "Havel",
          "level": 4
      },
      {
          "id": "soldat",
          "text": "Soldat",
          "level": 4
      },
      {
          "id": "intrigues",
          "text": "Intrigues",
          "level": 2
      },
      {
          "id": "arbre",
          "text": "Arbre",
          "level": 3
      },
      {
          "id": "campement",
          "text": "Campement",
          "level": 3
      },
      {
          "id": "spectre",
          "text": "Spectre",
          "level": 3
      },
      {
          "id": "nid",
          "text": "Nid",
          "level": 4
      },
      {
          "id": "next",
          "text": "Next",
          "level": 3
      },
      {
          "id": "actions-des-joueurs",
          "text": "Actions des joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"05. Troupes d'Havel"}</title>
  <meta name="description" content={"Description Description à lire aux joueurs en entrant dans cette scène. ... Détails Lieu Météo Heure Musique Maps Rencontres Havel Pactisant avec Fortissax Mort mais en debout grâce à la nécromancie,…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"05. Troupes d'Havel"} />
  <meta property="og:description" content={"Description Description à lire aux joueurs en entrant dans cette scène. ... Détails Lieu Météo Heure Musique Maps Rencontres Havel Pactisant avec Fortissax Mort mais en debout grâce à la nécromancie,…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"05. Troupes d'Havel"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<h2 data-heading=\"Description\" dir=\"auto\" id=\"description\">Description</h2>\n<blockquote dir=\"auto\">\n<p>Description à lire aux joueurs en entrant dans cette scène.</p>\n</blockquote>\n<pre><code>...\n</code></pre>\n<h2 data-heading=\"Détails\" dir=\"auto\" id=\"dtails\">Détails</h2>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Lieu</th>\n<th>Météo</th>\n<th>Heure</th>\n<th>Musique</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"Maps\" dir=\"auto\" id=\"maps\">Maps</h3>\n<h3 data-heading=\"Rencontres\" dir=\"auto\" id=\"rencontres\">Rencontres</h3>\n<h4 data-heading=\"Havel\" dir=\"auto\" id=\"havel\">Havel</h4>\n<ul>\n<li dir=\"auto\">Pactisant avec Fortissax</li>\n<li dir=\"auto\">Mort mais en debout grâce à la nécromancie, mais libre de ses actions grâce aux champignons</li>\n<li dir=\"auto\">Quelques soldats sont avec\n<ul>\n<li dir=\"auto\">Refuse d'avancer si les joueurs ne ramènent pas plus de soldats. \"Pas.. Assez...\"<br>\n<span alt=\"5-Havel.jpg\" src=\"5-Havel.jpg\" class=\"internal-embed media-embed image-embed is-loaded\"><img alt=\"5-Havel.jpg\" src=\"%%BASE%%/Jeu/Sessions%20du%20Masque/Scenes/Images/5-Havel.jpg\"></span></li>\n</ul>\n</li>\n</ul>\n<h4 data-heading=\"Soldat\" dir=\"auto\" id=\"soldat\">Soldat</h4>\n<p dir=\"auto\"><span width=\"400\" alt=\"5-ShroomD.jpg\" src=\"5-ShroomD.jpg\" class=\"internal-embed media-embed image-embed is-loaded\"><img alt=\"5-ShroomD.jpg\" width=\"400\" src=\"%%BASE%%/Jeu/Sessions%20du%20Masque/Scenes/Images/5-ShroomD.jpg\"></span></p>\n<h2 data-heading=\"Intrigues\" dir=\"auto\" id=\"intrigues\">Intrigues</h2>\n<blockquote dir=\"auto\">\n<p>Evénements et leur conclusion sans l'intervention des joueurs</p>\n</blockquote>\n<ul>\n<li dir=\"auto\">Ils doivent trouver l'entrée de la montagne pour atteindre Bayle\n<ul>\n<li dir=\"auto\">1 tour : Le spectre se déplace</li>\n<li dir=\"auto\">6 tours : Les soldats se relèvent</li>\n<li dir=\"auto\">1 tour : Les joueurs se déplacent ou détectent les présences champignons</li>\n</ul>\n</li>\n</ul>\n<h3 data-heading=\"Arbre\" dir=\"auto\" id=\"arbre\">Arbre</h3>\n<ul>\n<li dir=\"auto\">Boire l'eau permet de se connecter au réseau de champignons et détecter les masses<br>\n<span width=\"400\" alt=\"5-Tree.jpg\" src=\"5-Tree.jpg\" class=\"internal-embed media-embed image-embed is-loaded\"><img alt=\"5-Tree.jpg\" width=\"400\" src=\"%%BASE%%/Jeu/Sessions%20du%20Masque/Scenes/Images/5-Tree.jpg\"></span></li>\n</ul>\n<h3 data-heading=\"Campement\" dir=\"auto\" id=\"campement\">Campement</h3>\n<ul>\n<li dir=\"auto\">Camp de cadavres où les soldats ont été réanimés par les champignons\n<ul>\n<li dir=\"auto\">Il n'y en a pas beaucoup, et ils ne sont pas agressifs</li>\n</ul>\n</li>\n<li dir=\"auto\">Il y a une lettre qui explique que les éclaireurs ont trouvé l'entré, mais qu'une créature rôde et qu'ils doivent minimiser les pertes pour réussir la mission</li>\n</ul>\n<h3 data-heading=\"Spectre\" dir=\"auto\" id=\"spectre\">Spectre</h3>\n<ul>\n<li dir=\"auto\">A tué la majorité des soldats, qui se relèvent constamment grâce aux champignons\n<ul>\n<li dir=\"auto\">Attirée par le mouvement</li>\n<li dir=\"auto\">Eteint les torches proches</li>\n<li dir=\"auto\">Repoussé par la lumière magique<br>\n<span width=\"400\" alt=\"5-Spectre.jpg\" src=\"5-Spectre.jpg\" class=\"internal-embed media-embed image-embed is-loaded\"><img alt=\"5-Spectre.jpg\" width=\"400\" src=\"%%BASE%%/Jeu/Sessions%20du%20Masque/Scenes/Images/5-Spectre.jpg\"></span></li>\n</ul>\n</li>\n</ul>\n<h4 data-heading=\"Nid\" dir=\"auto\" id=\"nid\">Nid</h4>\n<h3 data-heading=\"Next\" dir=\"auto\" id=\"next\">Next</h3>\n<ul>\n<li dir=\"auto\">Léoric : Bigard lui propose de se faire exploser magiquement sur le masque pour l'affaiblir, mais Léoric perdra sa magie</li>\n<li dir=\"auto\">Hazdaim : Radeon lui propose son pouvoir contre le masque en échange du contrôle sur son corps pour une action</li>\n<li dir=\"auto\">Arek : Le masque propose la liberté de son emprise en échange de tuer son hôte</li>\n<li dir=\"auto\">Dara : Zaledra propose de rendre les doigts si Dara lui donne sa toile, et il en fera son associé principal</li>\n</ul>\n<h2 data-heading=\"Actions des joueurs\" dir=\"auto\" id=\"actions-des-joueurs\">Actions des joueurs</h2>\n<ul>\n<li dir=\"auto\"></li>\n</ul>")}
  </div>
</article>

<LinkPreview />
