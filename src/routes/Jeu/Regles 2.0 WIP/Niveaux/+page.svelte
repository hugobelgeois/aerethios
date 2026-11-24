<script lang="ts">
  import { applyBase } from "$lib/basePath";
</script>

<svelte:head>
  <title>{"Niveaux"}</title>
  <meta name="description" content={"Niveau 1 Au niveau 1, le joueur peut répartir ces points pour créer son personnage : Attributs : 55 points dans les 5 attributs (avec un minimum de 8 et un maximum de 14 par attribut) Magie : 1d4…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Niveaux"} />
  <meta property="og:description" content={"Niveau 1 Au niveau 1, le joueur peut répartir ces points pour créer son personnage : Attributs : 55 points dans les 5 attributs (avec un minimum de 8 et un maximum de 14 par attribut) Magie : 1d4…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Niveaux"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h2 data-heading=\"Niveau 1\" dir=\"auto\" id=\"niveau-1\">Niveau 1</h2>\n<p dir=\"auto\">Au niveau 1, le joueur peut répartir ces points pour créer son personnage :</p>\n<ul>\n<li dir=\"auto\">Attributs : 55 points dans les 5 attributs (avec un minimum de 8 et un maximum de 14 par attribut)</li>\n<li dir=\"auto\">Magie : <span class=\"atlas-dice-link\" data-formula=\"1d4\" role=\"button\" aria-label=\"Roll 1d4\">1d4</span> dans 1 magie (<span class=\"atlas-dice-link\" data-formula=\"+1d4\" role=\"button\" aria-label=\"Roll +1d4\">+1d4</span> dans une autre magie s'il fait partie des Scienctes)</li>\n<li dir=\"auto\">Compétences : Dépend de la valeur des attributs</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Attributs</th>\n<th>Magie</th>\n<th>Compétences</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>55</td>\n<td><span class=\"atlas-dice-link\" data-formula=\"1d4\" role=\"button\" aria-label=\"Roll 1d4\">1d4</span> (<span class=\"atlas-dice-link\" data-formula=\"+1d4\" role=\"button\" aria-label=\"Roll +1d4\">+1d4</span>?)</td>\n<td>Variable</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Niveau supérieur\" dir=\"auto\" id=\"niveau-superieur\">Niveau supérieur</h2>\n<p dir=\"auto\">Lorsqu'un joueur gagne un niveau, il débloque généralement de nouveaux points à dépenser :</p>\n<ul>\n<li dir=\"auto\">Attributs : <span class=\"atlas-dice-link\" data-formula=\"+1\" role=\"button\" aria-label=\"Roll +1\">+1</span> point par niveau</li>\n<li dir=\"auto\">Magie : +0.5 point par magie débloquée (le 0.5 ne se conserve pas d'un niveau à l'autre) dans les magies les plus faibles</li>\n<li dir=\"auto\">Compétences : Dépend de la valeur des attributs</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Attributs</th>\n<th>Magie</th>\n<th>Compétences</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><span class=\"atlas-dice-link\" data-formula=\"+1\" role=\"button\" aria-label=\"Roll +1\">+1</span></td>\n<td>+0.5/ magie</td>\n<td>Variable</td>\n</tr>\n</tbody>\n</table></div>"}
  </div>
</article>
