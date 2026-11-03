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
          "id": "intrigues",
          "text": "Intrigues",
          "level": 2
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
  <title>{"06. Antre de Bayle"}</title>
  <meta name="description" content={"Description Description à lire aux joueurs en entrant dans cette scène. ... Détails Lieu Météo Heure Musique Maps Rencontres Nom Rôle Race Sexe Age Personnalité Accent Equipement Bayle Ennemi de…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"06. Antre de Bayle"} />
  <meta property="og:description" content={"Description Description à lire aux joueurs en entrant dans cette scène. ... Détails Lieu Météo Heure Musique Maps Rencontres Nom Rôle Race Sexe Age Personnalité Accent Equipement Bayle Ennemi de…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"06. Antre de Bayle"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h2 data-heading=\"Description\" dir=\"auto\" id=\"description\">Description</h2>\n<blockquote dir=\"auto\">\n<p>Description à lire aux joueurs en entrant dans cette scène.</p>\n</blockquote>\n<pre><code>...\n</code></pre>\n<h2 data-heading=\"Détails\" dir=\"auto\" id=\"dtails\">Détails</h2>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Lieu</th>\n<th>Météo</th>\n<th>Heure</th>\n<th>Musique</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"Maps\" dir=\"auto\" id=\"maps\">Maps</h3>\n<h3 data-heading=\"Rencontres\" dir=\"auto\" id=\"rencontres\">Rencontres</h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Nom</th>\n<th>Rôle</th>\n<th align=\"center\">Race</th>\n<th align=\"center\">Sexe</th>\n<th align=\"center\">Age</th>\n<th align=\"center\">Personnalité</th>\n<th align=\"center\">Accent</th>\n<th align=\"center\">Equipement</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\">Bayle</td>\n<td>Ennemi de Placidusax et Fortissax</td>\n<td align=\"center\">Dragon</td>\n<td align=\"center\"></td>\n<td align=\"center\">-</td>\n<td align=\"center\">Agressif, ne parle pas</td>\n<td align=\"center\">-</td>\n<td align=\"center\">6-Bayle.jpg</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Intrigues\" dir=\"auto\" id=\"intrigues\">Intrigues</h2>\n<blockquote dir=\"auto\">\n<p>Evénements et leur conclusion sans l'intervention des joueurs</p>\n</blockquote>\n<ul>\n<li dir=\"auto\"></li>\n</ul>\n<h2 data-heading=\"Actions des joueurs\" dir=\"auto\" id=\"actions-des-joueurs\">Actions des joueurs</h2>\n<ul>\n<li dir=\"auto\"></li>\n</ul>"}
  </div>
</article>

<LinkPreview />
