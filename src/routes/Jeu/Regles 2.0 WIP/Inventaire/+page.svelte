<script lang="ts">
  import { applyBase } from "$lib/basePath";
</script>

<svelte:head>
  <title>{"Inventaire"}</title>
  <meta name="description" content={"Un joueur possède 20 Points d'Inventaires (PI) de base. Taille Selon la taille d'un objet, il prendra plus de place. S'il s'agit d'un contenant, il en offrira également plus. Taille PI utilisé PI…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Inventaire"} />
  <meta property="og:description" content={"Un joueur possède 20 Points d'Inventaires (PI) de base. Taille Selon la taille d'un objet, il prendra plus de place. S'il s'agit d'un contenant, il en offrira également plus. Taille PI utilisé PI…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Inventaire"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<blockquote dir=\"auto\">\n<p>Un joueur possède 20 Points d'Inventaires (PI) de base.</p>\n</blockquote>\n<h2 data-heading=\"Taille\" dir=\"auto\" id=\"taille\">Taille</h2>\n<blockquote dir=\"auto\">\n<p>Selon la taille d'un objet, il prendra plus de place.<br>\nS'il s'agit d'un contenant, il en offrira également plus.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Taille</th>\n<th>PI utilisé</th>\n<th>PI disponible</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Minuscule</td>\n<td>x 0.5</td>\n<td>-</td>\n</tr>\n<tr>\n<td>Petit/ Léger</td>\n<td>x 1</td>\n<td>x 0.5</td>\n</tr>\n<tr>\n<td>Normal</td>\n<td>x2</td>\n<td>x 1</td>\n</tr>\n<tr>\n<td>Grand/ Lourd</td>\n<td>x4</td>\n<td>x 2</td>\n</tr>\n<tr>\n<td>Enorme</td>\n<td>x8</td>\n<td>x 4</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Contenant\" dir=\"auto\" id=\"contenant\">Contenant</h2>\n<blockquote dir=\"auto\">\n<p>Augmente les Points d'Inventaire (PI) disponibles.<br>\nUn contenant ne peut pas contenir d'autre contenant (sauf précision).</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Contenant (normal)</th>\n<th>PI utilisé</th>\n<th>PI disponible</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Animal/ Créature</td>\n<td>10</td>\n<td>10</td>\n</tr>\n<tr>\n<td>Sac</td>\n<td>2</td>\n<td>6</td>\n</tr>\n<tr>\n<td>Coffre</td>\n<td>4<br><em>x4 si mis dans une charrette</em></td>\n<td>15</td>\n</tr>\n<tr>\n<td>Sac de monture</td>\n<td>3</td>\n<td>15</td>\n</tr>\n<tr>\n<td>Charrette</td>\n<td>2<br><em>La taille de la charrette ne peut pas dépasser celle de la monture</em></td>\n<td>40</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Objets\" dir=\"auto\" id=\"objets\">Objets</h2>\n<blockquote dir=\"auto\">\n<p>Les objets peuvent être stockés dans un contenant tant que sa limite n'est pas dépassée.<br>\nL'équipement porté (1 armure et 1-2 armes) ne prend pas de PI.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Objet (petit/ léger)</th>\n<th>PI utilisé</th>\n<th>Quantité par unité</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Pièces<br><em>cuivre, argent, or, platine</em></td>\n<td>1</td>\n<td>500</td>\n</tr>\n<tr>\n<td>Ingrédient/ Matériaux</td>\n<td>1</td>\n<td>20</td>\n</tr>\n<tr>\n<td>Consommable<br><em>nourriture, potion, crystal, ..</em></td>\n<td>1</td>\n<td>5</td>\n</tr>\n<tr>\n<td>Kit de voyage</td>\n<td>4</td>\n<td>1</td>\n</tr>\n<tr>\n<td>Ustensiles de métier</td>\n<td>3</td>\n<td>1</td>\n</tr>\n<tr>\n<td>Arme</td>\n<td>1</td>\n<td>1</td>\n</tr>\n<tr>\n<td>Armure</td>\n<td>2</td>\n<td>1</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\">En voyage, les pièces gagnées ne sont pas automatiquement converties.</p>\n<pre class=\"language-exemple\"><code class=\"language-exemple is-loaded\">Je voyage et j'ai 1000pc et 500pa, je garde ces pièces et je consomme 3PI.\nUne fois arrivé en ville, ces pièces deviennent 10pa et 5po, et cela consomme 1PI.\n</code></pre>"}
  </div>
</article>
