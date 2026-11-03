<script lang="ts">
  import { applyBase } from "$lib/basePath";
</script>

<svelte:head>
  <title>{"Tokens"}</title>
  <meta name="description" content={"Dés d'Espoir, de Peur et Tokens Les dés de combats sont toujours doubles (contrairement au dé d'Attributs -qui ne ciblent personne- et utilise 1 dé). Parmi ces 2 dés, le joueur choisit un dé d'Espoir…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Tokens"} />
  <meta property="og:description" content={"Dés d'Espoir, de Peur et Tokens Les dés de combats sont toujours doubles (contrairement au dé d'Attributs -qui ne ciblent personne- et utilise 1 dé). Parmi ces 2 dés, le joueur choisit un dé d'Espoir…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Tokens"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h2 data-heading=\"Dés d'Espoir, de Peur et Tokens\" dir=\"auto\" id=\"des-despoir-de-peur-et-tokens\">Dés d'Espoir, de Peur et Tokens</h2>\n<p dir=\"auto\">Les dés de combats sont toujours doubles (contrairement au dé d'Attributs -qui ne ciblent personne- et utilise 1 dé).<br>\nParmi ces 2 dés, le joueur choisit un dé d'Espoir et un dé de Peur.</p>\n<p dir=\"auto\">Les Tokens des joueurs sont conservés entre les sessions.<br>\nCe n'est pas le cas pour les Tokens du Maître du Jeu qui recommence chaque session avec autant de Tokens qu'il y a de joueurs.</p>\n<h3 data-heading=\"Obtention\" dir=\"auto\" id=\"obtention\">Obtention</h3>\n<blockquote dir=\"auto\">\n<p>Toujours un gain de +1 token.<br>\nSeules les actions du joueur fournissent des tokens.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Pour les joueurs</th>\n<th align=\"right\">Pour le MJ</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Dé d'Espoir &gt; Dé de Peur</td>\n<td align=\"right\">Dé de Peur &gt; Dé d'Espoir</td>\n</tr>\n<tr>\n<td>Le même chiffre sur 2 dés</td>\n<td align=\"right\">Le joueur fait un échec critique</td>\n</tr>\n<tr>\n<td>Action collaborative avec un autre joueur</td>\n<td align=\"right\"></td>\n</tr>\n<tr>\n<td>Tous les joueurs interviennent dans une discussion<br><em>(Intervention utile qui fait avancer les choses)</em></td>\n<td align=\"right\"></td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\">Lorsqu'il y a plusieurs intervenants dans l'obtention d'un token, les joueurs ne reçoivent que 1 token et décident à qui il revient.</p>\n<h3 data-heading=\"Utilisation\" dir=\"auto\" id=\"utilisation\">Utilisation</h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Pour les joueurs</th>\n<th>Coût</th>\n<th align=\"center\"></th>\n<th align=\"right\">Coût</th>\n<th align=\"right\">Pour le MJ</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Aider un allié (lui donne +1d6 à son prochain jet)</td>\n<td>1</td>\n<td align=\"center\"></td>\n<td align=\"right\">1</td>\n<td align=\"right\">Activer des dangers environnementaux</td>\n</tr>\n<tr>\n<td>Compétences spéciales</td>\n<td>?</td>\n<td align=\"center\"></td>\n<td align=\"right\">?</td>\n<td align=\"right\">Compétences spéciales des ennemis</td>\n</tr>\n<tr>\n<td>Interrompre le MJ</td>\n<td>1 par joueur</td>\n<td align=\"center\"></td>\n<td align=\"right\">2</td>\n<td align=\"right\">Interrompre un joueur</td>\n</tr>\n<tr>\n<td>Evite le comas et remonte à 5 HP</td>\n<td>3</td>\n<td align=\"center\"></td>\n<td align=\"right\">1</td>\n<td align=\"right\">Ajouter des ennemis</td>\n</tr>\n<tr>\n<td>Expliquer et mimer en détail une action<br><em>(plutôt que de lancer les dés,<br>seulement contre les ennemis plus faibles)</em></td>\n<td>1</td>\n<td align=\"center\"></td>\n<td align=\"right\"></td>\n<td align=\"right\"></td>\n</tr>\n</tbody>\n</table></div>"}
  </div>
</article>
