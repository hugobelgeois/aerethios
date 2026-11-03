<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "hit-points-hp",
          "text": "Hit Points (HP)",
          "level": 2
      },
      {
          "id": "actions",
          "text": "Actions",
          "level": 2
      },
      {
          "id": "motiver",
          "text": "Motiver",
          "level": 3
      },
      {
          "id": "attaquer",
          "text": "Attaquer",
          "level": 3
      },
      {
          "id": "se-concentrer",
          "text": "Se concentrer",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Combat"}</title>
  <meta name="description" content={"Idées basées sur Daggerheart : Spotlight : Si le MJ déclenche le combat normalement, il joue celui qui attaque, puis passe son tour aux joueurs. Si c'est une attaque surprise, il fait jouer tous les…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Combat"} />
  <meta property="og:description" content={"Idées basées sur Daggerheart : Spotlight : Si le MJ déclenche le combat normalement, il joue celui qui attaque, puis passe son tour aux joueurs. Si c'est une attaque surprise, il fait jouer tous les…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Combat"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<p dir=\"auto\">Idées basées sur Daggerheart :<br>\nSpotlight :<br>\nSi le MJ déclenche le combat normalement, il joue celui qui attaque, puis passe son tour aux joueurs.<br>\nSi c'est une attaque surprise, il fait jouer tous les ennemis avant de passer aux joueurs.<br>\nTant que les joueurs réussissent leurs jets, ils gardent leur tour (sauf s'ils créent une ouverture et que le MJ veut en profiter, ou que le MJ dépense 1 Fear pour prendre son tour)</p>\n<p dir=\"auto\">Hope/Fear :<br>\nGagner des Tokens :</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>MJ</th>\n<th>PC</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Malus pour les PC</td>\n<td>Long repos</td>\n</tr>\n<tr>\n<td>PC rate un jet</td>\n<td>Réussite critique</td>\n</tr>\n<tr>\n<td></td>\n<td>Nombres identiques sur multiples dés</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\">Utiliser des Tokens :</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>MJ</th>\n<th>PC</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Prendre son tour</td>\n<td>aider un allié (+1d6)</td>\n</tr>\n<tr>\n<td>Action de boss</td>\n<td>Action de personnage</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Hit Points (HP)\" dir=\"auto\" id=\"hit-points-hp\">Hit Points (HP)</h2>\n<p dir=\"auto\">Les humanoïdes possèdent tous un <strong>maximum de 50 HP</strong> qui se régénèrent avec du repos (pour peu que la personne ait mangé récemment) ou de la magie.</p>\n<p dir=\"auto\">Ils peuvent monter jusqu'à 100 HP pour une durée d'un jour si un plat avec des bons effets a été consommé.</p>\n<h2 data-heading=\"Actions\" dir=\"auto\" id=\"actions\">Actions</h2>\n<h3 data-heading=\"Motiver\" dir=\"auto\" id=\"motiver\">Motiver</h3>\n<blockquote dir=\"auto\">\n<p>Seulement au premier tour, seulement fait par un joueur.<br>\nSelon l'appréciation du MJ.</p>\n</blockquote>\n<p dir=\"auto\">Motiver son équipe pour lui donner un avantage/ Faire peur aux adversaires pour leur donner un désavantage (effet et durée selon le MJ)</p>\n<h3 data-heading=\"Attaquer\" dir=\"auto\" id=\"attaquer\">Attaquer</h3>\n<blockquote dir=\"auto\">\n<p>Résultat - Défense (DR) = Dégâts au HP.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Mêlée</th>\n<th>Distance</th>\n<th>Magie</th>\n<th>Requis</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Dés d'arme<br>+Maîtrise</td>\n<td>Dés d'arme<br>+Maîtrise</td>\n<td>Dés de magie</td>\n<td>&gt;= AC</td>\n</tr>\n<tr>\n<td>+ Matériaux</td>\n<td>+ Matériaux</td>\n<td>+ Toiles Célestes</td>\n<td>&gt; DR</td>\n</tr>\n<tr>\n<td>Style<br><em>(multiplicateur final)</em></td>\n<td>Précision<br><em>(multiplicateur final)</em></td>\n<td>Crystaux<br><em>(multiplicateur final)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"Se concentrer\" dir=\"auto\" id=\"se-concentrer\">Se concentrer</h3>\n<blockquote dir=\"auto\">\n<p>Prendre 10/20</p>\n</blockquote>\n<p dir=\"auto\">Prendre son temps (sans se faire perturber) pour réussir les DC de 10 (1 tour) / 20 (2 tours).</p>\n<p dir=\"auto\">Permet également de régénérer sa magie.</p>"}
  </div>
</article>

<LinkPreview />
