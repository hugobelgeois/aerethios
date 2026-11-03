<script lang="ts">
  import { applyBase } from "$lib/basePath";
</script>

<svelte:head>
  <title>{"Perception"}</title>
  <meta name="description" content={"Principales Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20). Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif). Compétence Situation…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Perception"} />
  <meta property="og:description" content={"Principales Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20). Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif). Compétence Situation…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Perception"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h2 data-heading=\"Principales\" dir=\"auto\" id=\"principales\">Principales</h2>\n<blockquote dir=\"auto\">\n<p>Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).<br>\nDouble le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Compétence</th>\n<th>Situation</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Chasseur</td>\n<td>Détection dans la dimension terrestre</td>\n</tr>\n<tr>\n<td>Spiritisme</td>\n<td>Détection dans la dimension planaire</td>\n</tr>\n<tr>\n<td>Survivant</td>\n<td>Comprendre l'environnement</td>\n</tr>\n<tr>\n<td>Voyeur</td>\n<td>Recherche</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Secondaires\" dir=\"auto\" id=\"secondaires\">Secondaires</h2>\n<blockquote dir=\"auto\">\n<p>Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).<br>\nIl est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th><strong>Principale</strong></th>\n<th>Secondaire</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Chasseur</strong></td>\n<td>Pièges</td>\n<td>Impossible de tomber dans un piège physique</td>\n</tr>\n<tr>\n<td></td>\n<td>Menace</td>\n<td>Pas besoin de faire de jet pour savoir qu'on est en danger</td>\n</tr>\n<tr>\n<td><strong>Spiritisme</strong></td>\n<td>Exorciste</td>\n<td>Pas besoin de magie de lumière pour voir les entités planaires</td>\n</tr>\n<tr>\n<td></td>\n<td>Pactisant</td>\n<td>Vous pouvez conjurer des entités planaires avec lesquelles vous avez passé un pacte<br>Elles peuvent refuser de venir si elles sont plus fortes que vous</td>\n</tr>\n<tr>\n<td><strong>Survivant</strong></td>\n<td>Créatures</td>\n<td>Connaître le point faible des créatures et le comportement à avoir avec elles</td>\n</tr>\n<tr>\n<td></td>\n<td>Plantes</td>\n<td>Pouvoir trouver les plantes recherchées et détecter les poisons</td>\n</tr>\n<tr>\n<td><strong>Voyeur</strong></td>\n<td>Mentaliste</td>\n<td>Comprendre les intentions des entités</td>\n</tr>\n<tr>\n<td></td>\n<td>Magie</td>\n<td>Permet de détecter les résidus magiques</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Finales\" dir=\"auto\" id=\"finales\">Finales</h2>\n<blockquote dir=\"auto\">\n<p>S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.<br>\nAu niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Compétence</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Troisième œil</strong></td>\n<td>+ Ne peut pas subir de réussite critique contre soi-même<br>- Ses réussites critiques doivent être annoncées à l'avance sinon elles ne sont pas critiques<br>Si elle est annoncée mais qu'elle ne tombe pas, le résultat/ 2 (arrondi vers le bas) est déduit des HP</td>\n</tr>\n<tr>\n<td><strong>Parano</strong></td>\n<td>+ 1d20 +Perception(Voyeur) &gt;= 20 -&gt; Savoir ce qu'il va se passer le jour même pour une personne spécifique<br>- En cas d'échec, une entité suit le joueur pour la journée</td>\n</tr>\n</tbody>\n</table></div>"}
  </div>
</article>
