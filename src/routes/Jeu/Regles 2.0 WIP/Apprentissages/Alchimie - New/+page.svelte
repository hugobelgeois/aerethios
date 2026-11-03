<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "rappel",
          "text": "Rappel",
          "level": 3
      },
      {
          "id": "spcialisations",
          "text": "Spécialisations",
          "level": 2
      },
      {
          "id": "bijoutier",
          "text": "Bijoutier",
          "level": 3
      },
      {
          "id": "cuisinier",
          "text": "Cuisinier",
          "level": 3
      },
      {
          "id": "invocateur",
          "text": "Invocateur",
          "level": 3
      },
      {
          "id": "potionniste",
          "text": "Potionniste",
          "level": 3
      },
      {
          "id": "potions",
          "text": "Potions",
          "level": 4
      },
      {
          "id": "huiles",
          "text": "Huiles",
          "level": 4
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Alchimie - New"}</title>
  <meta name="description" content={"Rappel Durée Interruption Amélioration Déconstruction Consommation Echec 2h Oui Non Non - - +1 ingrédient inférieur - Possibilité d'effet négatif ajouté à l'objet (1d20 < 5) Rappel Fabrication Déchet…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Alchimie - New"} />
  <meta property="og:description" content={"Rappel Durée Interruption Amélioration Déconstruction Consommation Echec 2h Oui Non Non - - +1 ingrédient inférieur - Possibilité d'effet négatif ajouté à l'objet (1d20 < 5) Rappel Fabrication Déchet…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Alchimie - New"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<h3 data-heading=\"Rappel\" dir=\"auto\" id=\"rappel\">Rappel</h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Durée</th>\n<th align=\"center\">Interruption</th>\n<th align=\"center\">Amélioration</th>\n<th align=\"center\">Déconstruction</th>\n<th align=\"center\">Consommation</th>\n<th align=\"left\">Echec</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\">2h</td>\n<td align=\"center\">Oui</td>\n<td align=\"center\">Non</td>\n<td align=\"center\">Non</td>\n<td align=\"center\">-</td>\n<td align=\"left\">- +1 ingrédient inférieur<br>- Possibilité d'effet négatif ajouté à l'objet (<code>1d20 &lt; 5</code>)</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\"><span alt=\"Rappel\" src=\"Rappel\" class=\"internal-embed markdown-embed inline-embed is-loaded\"><div class=\"embed-title markdown-embed-title\">Rappel</div><div class=\"markdown-embed-content\"><div class=\"markdown-preview-view markdown-rendered show-indentation-guide\"><h4 data-heading=\"Fabrication\" dir=\"auto\">Fabrication</h4>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Déchet</th>\n<th align=\"center\">Commun</th>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Difficulté de Fabrication</strong></td>\n<td align=\"center\">10</td>\n<td align=\"center\">20</td>\n<td align=\"center\">40</td>\n<td align=\"center\">80</td>\n<td align=\"center\">150</td>\n</tr>\n<tr>\n<td><strong>Expérience de Fabrication</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">1</td>\n<td align=\"center\">2</td>\n<td align=\"center\">4</td>\n<td align=\"center\">8</td>\n</tr>\n<tr>\n<td><strong>Taux d'Échec</strong></td>\n<td align=\"center\">1</td>\n<td align=\"center\">3</td>\n<td align=\"center\">6</td>\n<td align=\"center\">10</td>\n<td align=\"center\">15</td>\n</tr>\n</tbody>\n</table></div>\n<h4 data-heading=\"Récolte\" dir=\"auto\">Récolte</h4>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Rien</th>\n<th align=\"center\">Déchet</th>\n<th align=\"center\">Commun</th>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Chance Récolte</strong></td>\n<td align=\"center\">1 - 10</td>\n<td align=\"center\">11 - 30</td>\n<td align=\"center\">31 - 60</td>\n<td align=\"center\">61 - 85</td>\n<td align=\"center\">86 - 96</td>\n<td align=\"center\">97+</td>\n</tr>\n<tr>\n<td><strong>Quantité de Récolte</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">1d10</td>\n<td align=\"center\">1d8</td>\n<td align=\"center\">1d6</td>\n<td align=\"center\">1d4</td>\n<td align=\"center\">1d2</td>\n</tr>\n<tr>\n<td><strong>Prix Moyen</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">~10pc</td>\n<td align=\"center\">~1pa</td>\n<td align=\"center\">~10pa</td>\n<td align=\"center\">~1po</td>\n<td align=\"center\">~10po</td>\n</tr>\n</tbody>\n</table></div>\n<h4 data-heading=\"Lieu\" dir=\"auto\">Lieu</h4>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Zone sauvage</th>\n<th>Campement</th>\n<th>Lieu sécurisé</th>\n<th>Lieu conçu pour</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Désavantage</td>\n<td>Résultat</td>\n<td>Avantage</td>\n<td>Difficulté de Fabrication/2</td>\n</tr>\n<tr>\n<td>---</td>\n<td>---</td>\n<td>Rareté +1</td>\n<td>Rareté +2</td>\n</tr>\n</tbody>\n</table></div></div></div></span></p>\n<h2 data-heading=\"Spécialisations\" dir=\"auto\" id=\"spcialisations\">Spécialisations</h2>\n<h3 data-heading=\"Bijoutier\" dir=\"auto\" id=\"bijoutier\">Bijoutier</h3>\n<blockquote dir=\"auto\">\n<p>Améliore les bijoux d'un <a data-tooltip-position=\"top\" aria-label=\"Artisanat - New\" href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" data-wiki-fragment=\"\">Artisan</a> pour qu'ils émettent des magies que l'on ne maîtrise pas.<br>\n~20pa/h</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Commun</th>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\">1d4</td>\n<td align=\"center\">1d6</td>\n<td align=\"center\">2d4</td>\n<td align=\"center\">2d6</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\">Ajoute une/des maîtrise.s magique.s selon le type d'ingrédient (à décider avec le Maître du Jeu).<br>\nLa puissance de chaque magie dépend de la rareté de l'ingrédient qui lui est lié.</p>\n<pre class=\"language-exemple\"><code class=\"language-exemple is-loaded\">J'ai un coeur de magma légendaire et une algue commune, ma bague fait 2d6 de Feu et 1d4 d'Eau.\n</code></pre>\n<h3 data-heading=\"Cuisinier\" dir=\"auto\" id=\"cuisinier\">Cuisinier</h3>\n<blockquote dir=\"auto\">\n<p>Augmente les attributs pour 1 jour selon l'ingrédient le plus rare de la recette.<br>\nLe bonus s'applique à un attribut pour chaque ingrédient de rareté différente.<br>\n~20pc/h</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Commun</th>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\">1</td>\n<td align=\"center\">2</td>\n<td align=\"center\">3</td>\n<td align=\"center\">4</td>\n</tr>\n</tbody>\n</table></div>\n<pre class=\"language-exemple\"><code class=\"language-exemple is-loaded\">J'ai 2 ingrédients (1 commun, 1 rare), j'ai 3 points bonus à répartir dans 2 attributs.\n</code></pre>\n<h3 data-heading=\"Invocateur\" dir=\"auto\" id=\"invocateur\">Invocateur</h3>\n<blockquote dir=\"auto\">\n<p>Créé un élémentaire inerte qui prendra vie et puissance grâce à un <a data-tooltip-position=\"top\" aria-label=\"Érudition\" href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"\">Érudit</a>.<br>\n~50pa/h</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Commun</th>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\">+12h</td>\n<td align=\"center\">+1j</td>\n<td align=\"center\">+3j</td>\n<td align=\"center\">+7j</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\">La durée de vie de l'invocation dépend de la somme de la durée des ingrédients.</p>\n<h3 data-heading=\"Potionniste\" dir=\"auto\" id=\"potionniste\">Potionniste</h3>\n<blockquote dir=\"auto\">\n<p>Fabrique des liquides consommables (potions) ou applicables (huiles) pour altérer le monde.<br>\n~10pa/h</p>\n</blockquote>\n<h4 data-heading=\"Potions\" dir=\"auto\" id=\"potions\">Potions</h4>\n<blockquote dir=\"auto\">\n<p>Débloque une affinité ou une compétence.<br>\nDurée : 1 jour</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Commun</th>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Débloque</td>\n<td align=\"center\">Affinité</td>\n<td align=\"center\">Compétence Secondaire</td>\n<td align=\"center\">Compétence Principale</td>\n<td align=\"center\">Compétence Finale</td>\n</tr>\n<tr>\n<td>Intoxication</td>\n<td align=\"center\">+1</td>\n<td align=\"center\">+2</td>\n<td align=\"center\">+4</td>\n<td align=\"center\">+6</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\">Le seuil maximal tolérable pour un humain est 5.<br>\nAu delà, le joueur perd chaque jour <strong>2d6HP</strong> par point d'intoxication supplémentaire.<br>\nDormir réduit l’intoxication de 3.</p>\n<p dir=\"auto\">Les potions peuvent également avoir d'autres effets plus précis, tels que rendre des HP par exemple.<br>\nDécrivez vos intentions dans votre recette et discutez-en avec votre MJ.</p>\n<h4 data-heading=\"Huiles\" dir=\"auto\" id=\"huiles\">Huiles</h4>\n<blockquote dir=\"auto\">\n<p>Applique des <a data-tooltip-position=\"top\" aria-label=\"Huiles\" href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles\" data-wiki-fragment=\"\">Effets</a> sur une arme dont la fréquence de déclenchement varient selon la rareté de l'ingrédient le plus rare.<br>\nLa puissance est équivalente au nombre d'ingrédient de rareté différente.<br>\nDurée : 1 combat</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Commun</th>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\">par tour</td>\n<td align=\"center\">par action</td>\n<td align=\"center\">par tour<br>+ Cumulable à chaque coup</td>\n<td align=\"center\">par action<br>+ Cumulable à chaque coup</td>\n</tr>\n</tbody>\n</table></div>\n<pre class=\"language-exemple\"><code class=\"language-exemple is-loaded\">J'ai 2 ingrédients (1 peu commun, 1 rare), à chaque fois que je touche l'ennemi (cumulable), les dégâts qu'il prend à chaque tour sont augmentés de 2.\n</code></pre>\n<p dir=\"auto\">En plus des ingrédients et du résultat, le joueur doit indiquer le remède sur sa recette, qui s'utilise comme une Action Bonus.</p>\n<p dir=\"auto\">Les huiles ne font pas uniquement des dégâts, elles peuvent donner des malus différents (à valider auprès du Maître du Jeu).<br>\nExemple :</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Afflictions</th>\n<th>Effet</th>\n<th>Remède</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Nausée</td>\n<td>-2 à son dé d'attaque</td>\n<td>Vomir</td>\n</tr>\n<tr>\n<td>Discombobulate</td>\n<td>Dé d'attaque / 2</td>\n<td>Repos Court</td>\n</tr>\n</tbody>\n</table></div>")}
  </div>
</article>

<LinkPreview />
