<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "gnral",
          "text": "Général",
          "level": 2
      },
      {
          "id": "mtiers",
          "text": "Métiers",
          "level": 2
      },
      {
          "id": "artisanat---new",
          "text": "[[Artisanat - New]]",
          "level": 3
      },
      {
          "id": "alchimie---new",
          "text": "[[Alchimie - New]]",
          "level": 3
      },
      {
          "id": "rudition",
          "text": "[[Érudition]]",
          "level": 3
      },
      {
          "id": "fabrication",
          "text": "Fabrication",
          "level": 2
      },
      {
          "id": "recette",
          "text": "Recette",
          "level": 3
      },
      {
          "id": "mcanique",
          "text": "Mécanique",
          "level": 3
      },
      {
          "id": "ressources",
          "text": "Ressources",
          "level": 3
      },
      {
          "id": "ustensiles",
          "text": "Ustensiles",
          "level": 3
      },
      {
          "id": "lieux",
          "text": "Lieux",
          "level": 3
      },
      {
          "id": "rgles",
          "text": "Règles",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Apprentissages - New"}</title>
  <meta name="description" content={"Général Chaque leçon prend 1 jour, et chaque jour coûte 20pa. 1d20 par leçon pour apprendre : 1 = La leçon n'a servie à rien 20 = La leçon donne 2 points d'expérience Compétence Leçons Requises…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Apprentissages - New"} />
  <meta property="og:description" content={"Général Chaque leçon prend 1 jour, et chaque jour coûte 20pa. 1d20 par leçon pour apprendre : 1 = La leçon n'a servie à rien 20 = La leçon donne 2 points d'expérience Compétence Leçons Requises…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Apprentissages - New"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<h2 data-heading=\"Général\" dir=\"auto\" id=\"gnral\">Général</h2>\n<blockquote dir=\"auto\">\n<p>Chaque leçon prend 1 jour, et chaque jour coûte 20pa.</p>\n</blockquote>\n<p dir=\"auto\">1d20 par leçon pour apprendre :</p>\n<ul>\n<li dir=\"auto\">1 = La leçon n'a servie à rien</li>\n<li dir=\"auto\">20 = La leçon donne 2 points d'expérience</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Compétence</th>\n<th>Leçons Requises</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Équitation</strong></td>\n<td>30-60</td>\n</tr>\n<tr>\n<td><strong>Lire / Écrire</strong></td>\n<td>100-500</td>\n</tr>\n<tr>\n<td><strong>Natation</strong></td>\n<td>30-60</td>\n</tr>\n<tr>\n<td><strong>Navigation</strong></td>\n<td>50-250</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Métiers\" dir=\"auto\" id=\"mtiers\">Métiers</h2>\n<p dir=\"auto\">Le joueur peut choisir 1 catégorie de métier avec laquelle il est à l'aise lors de la création de son personnage.<br>\nDans cette catégorie, il peut choisir 1 métier qu'il a déjà pratiqué et avec lequel il a des affinités.<br>\nIl pourra pratiquer les autres métiers de sa catégorie, mais la difficulté augmentera de 50%.<br>\nLes ressources d'un métier sont les mêmes pour les autres métiers d'une même catégorie.</p>\n<p dir=\"auto\">Certains métiers font partie de 2 catégories et nécessitent alors 2 personnage pour pouvoir travailler dessus (pas forcément en même temps).</p>\n<h3 data-heading=\"[[Artisanat - New]]\" dir=\"auto\" id=\"artisanat---new\"><a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" data-wiki-fragment=\"\">Artisanat - New</a></h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Compétence</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Artificier</strong></td>\n<td>Fabrication d'armes à feu, d'automations, de mécanismes et d'explosifs</td>\n</tr>\n<tr>\n<td><strong>Bijoutier</strong></td>\n<td>Fabrication de bijoux ou catalyseurs de magie</td>\n</tr>\n<tr>\n<td><strong>Enchanteur</strong></td>\n<td>Création et application de capacités uniques</td>\n</tr>\n<tr>\n<td><strong>Forgeron</strong></td>\n<td>Fabrication d'armes (sauf armes à feu) et d’armures</td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"[[Alchimie - New]]\" dir=\"auto\" id=\"alchimie---new\"><a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" data-wiki-fragment=\"\">Alchimie - New</a></h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Compétence</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Bijoutier</strong></td>\n<td>Fabrication de bijoux ou catalyseurs de magie</td>\n</tr>\n<tr>\n<td><strong>Cuisinier</strong></td>\n<td>Préparation de repas conférant des bonus temporaires</td>\n</tr>\n<tr>\n<td><strong>Invocateur</strong></td>\n<td>Animation ou transmutation d’entités à partir d’ingrédients magiques</td>\n</tr>\n<tr>\n<td><strong>Potionniste</strong></td>\n<td>Création de potions, huiles et remèdes</td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"[[Érudition]]\" dir=\"auto\" id=\"rudition\"><a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"\">Érudition</a></h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Compétence</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Enchanteur</strong></td>\n<td>Création et application de capacités uniques</td>\n</tr>\n<tr>\n<td><strong>Invocateur</strong></td>\n<td>Animation ou transmutation d’entités à partir d’ingrédients magiques</td>\n</tr>\n<tr>\n<td><strong>Joaillier</strong></td>\n<td>Application de gemmes sur les armes</td>\n</tr>\n<tr>\n<td><strong>Runniste</strong></td>\n<td>Création de runes et de glyphes applicable sur des objets et entités pour les magicaliser</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Fabrication\" dir=\"auto\" id=\"fabrication\">Fabrication</h2>\n<blockquote dir=\"auto\">\n<p><code>1d20 + Niveau du Métier + Aide(Niveau de métier du personnage qui aide / 2)</code></p>\n</blockquote>\n<h3 data-heading=\"Recette\" dir=\"auto\" id=\"recette\">Recette</h3>\n<blockquote dir=\"auto\">\n<p>Les recettes permettent de ne pas jeter les dés.</p>\n</blockquote>\n<p dir=\"auto\">Avant de pouvoir fabriquer quelque chose, le joueur doit connaître sa recette.<br>\nIl peut soit acheter des recettes pour être certain du résultat, soit proposer une recette au Maître du Jeu, et celui-ci déterminera si elle fonctionnera ou donnera tout autre chose.</p>\n<p dir=\"auto\">Une recette contient :</p>\n<ul>\n<li dir=\"auto\">les ingrédients,</li>\n<li dir=\"auto\">le résultat espéré,</li>\n<li dir=\"auto\">les procédés utilisés pour la fabrication.</li>\n</ul>\n<p dir=\"auto\">Une fois la recette validée, le joueur lance les dés pour la fabriquer.<br>\nUne fois fabriquée, le joueur note sur sa recette toutes les ressources utilisées, et le temps total que cela lui a pris.</p>\n<p dir=\"auto\">S'il refabrique cet objet, il pourra alors soit :</p>\n<ul>\n<li dir=\"auto\">prendre le même nombre de ressources et de temps pour le créer sans lancer de dés,</li>\n<li dir=\"auto\">relancer les dés et espérer prendre moins de temps et/ou de ressources pour mettre à jour sa recette.</li>\n</ul>\n<h3 data-heading=\"Mécanique\" dir=\"auto\" id=\"mcanique\">Mécanique</h3>\n<blockquote dir=\"auto\">\n<p>Jeter les dés pour valider un recette, ou l'améliorer.</p>\n</blockquote>\n<p dir=\"auto\">Lorsqu'un joueur consacre une période de travail à la fabrication, s'il possède des ustensiles, il peut prendre du temps pour fabriquer des choses :<br>\n<code>1d20 + Niveau du Métier</code></p>\n<p dir=\"auto\">Chaque fois qu'un joueur travail, il lance les dés et augmente sa progression (Crafting Progress = CP).<br>\nLe joueur peut se faire aider par une personne (pas plus) avec le même métier afin de gagner <code>(Niveau de métier du joueur qui aide / 2)</code> à son jet.<br>\nLorsqu'il commence à travailler, les ressources sont consommées.<br>\nUne fois que la CP a atteint la Difficulté de Fabrication, l'objet est créé.</p>\n<p dir=\"auto\">Si le jet de dé est inférieur au Taux d'Echec de l'ingrédient le plus rare, cela compte comme un échec.<br>\nIl faut alors rajouter un ingrédient de 2 qualité inférieur à l'ingrédient le plus rare pour rattraper la recette et servir de catalyseur, ce qui augmente de nouveau la difficulté de fabrication.</p>\n<p dir=\"auto\">Pour savoir la Difficulté de Fabrication d'un objet, il faut additionner la difficulté de chaque ingrédient utilisé.</p>\n<p dir=\"auto\"><span alt=\"Rappel &gt; Fabrication\" src=\"Rappel#Fabrication\" class=\"internal-embed markdown-embed inline-embed is-loaded\"><div class=\"embed-title markdown-embed-title\"></div><div class=\"markdown-embed-content\"><div class=\"markdown-preview-view markdown-rendered show-indentation-guide\"><h4 data-heading=\"Fabrication\" dir=\"auto\">Fabrication</h4>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Déchet</th>\n<th align=\"center\">Commun</th>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Difficulté de Fabrication</strong></td>\n<td align=\"center\">10</td>\n<td align=\"center\">20</td>\n<td align=\"center\">40</td>\n<td align=\"center\">80</td>\n<td align=\"center\">150</td>\n</tr>\n<tr>\n<td><strong>Expérience de Fabrication</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">1</td>\n<td align=\"center\">2</td>\n<td align=\"center\">4</td>\n<td align=\"center\">8</td>\n</tr>\n<tr>\n<td><strong>Taux d'Échec</strong></td>\n<td align=\"center\">1</td>\n<td align=\"center\">3</td>\n<td align=\"center\">6</td>\n<td align=\"center\">10</td>\n<td align=\"center\">15</td>\n</tr>\n</tbody>\n</table></div></div></div></span></p>\n<p dir=\"auto\">L'expérience requise pour monter le niveau d'un Métier équivaut à son <strong>niveau+1 * 10</strong>.</p>\n<pre class=\"language-exemple\"><code class=\"language-exemple is-loaded\">Forgeron niveau 3 nécessite 30xp pour passer niveau 4.\n</code></pre>\n<h3 data-heading=\"Ressources\" dir=\"auto\" id=\"ressources\">Ressources</h3>\n<p dir=\"auto\">Les ressources s'achètent, se récoltent dans la nature ou se récupèrent sur des créatures.<br>\nOn considère qu'une unité représente un ensemble de ressources similaires.<br>\nExemple : Ressource de Troll (Peu Commun) -&gt; Cela peut être du sang, des yeux, salive, os, ... selon les besoins du joueur.</p>\n<p dir=\"auto\">Chaque jour de voyage, les joueurs peuvent récolter des matériaux pour leur catégorie de métier en lançant <code>1d100</code>.<br>\nIls doivent préciser le genre de ressources qu'ils veulent récupérer (légumes, fruits, racines, insectes, minerais, ...).</p>\n<p dir=\"auto\"><span alt=\"Rappel &gt; Récolte\" src=\"Rappel#Récolte\" class=\"internal-embed markdown-embed inline-embed is-loaded\"><div class=\"embed-title markdown-embed-title\"></div><div class=\"markdown-embed-content\"><div class=\"markdown-preview-view markdown-rendered show-indentation-guide\"><h4 data-heading=\"Récolte\" dir=\"auto\">Récolte</h4>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Rien</th>\n<th align=\"center\">Déchet</th>\n<th align=\"center\">Commun</th>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Chance Récolte</strong></td>\n<td align=\"center\">1 - 10</td>\n<td align=\"center\">11 - 30</td>\n<td align=\"center\">31 - 60</td>\n<td align=\"center\">61 - 85</td>\n<td align=\"center\">86 - 96</td>\n<td align=\"center\">97+</td>\n</tr>\n<tr>\n<td><strong>Quantité de Récolte</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">1d10</td>\n<td align=\"center\">1d8</td>\n<td align=\"center\">1d6</td>\n<td align=\"center\">1d4</td>\n<td align=\"center\">1d2</td>\n</tr>\n<tr>\n<td><strong>Prix Moyen</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">~10pc</td>\n<td align=\"center\">~1pa</td>\n<td align=\"center\">~10pa</td>\n<td align=\"center\">~1po</td>\n<td align=\"center\">~10po</td>\n</tr>\n</tbody>\n</table></div></div></div></span></p>\n<p dir=\"auto\">Pour ce qui est des créatures, elles possèdent chacune une liste qui représente les chances d'obtenir chaque rareté.</p>\n<h3 data-heading=\"Ustensiles\" dir=\"auto\" id=\"ustensiles\">Ustensiles</h3>\n<blockquote dir=\"auto\">\n<p>Selon la catégorie de métier, le poids et le prix des ustensiles varient.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th>Artisanat</th>\n<th>Alchimie</th>\n<th>Erudition</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Poids</strong></td>\n<td>10 kg<br>Lourd</td>\n<td>5 kg<br>Lourd</td>\n<td>1 kg<br>Léger</td>\n</tr>\n<tr>\n<td><strong>Prix</strong></td>\n<td>50 pa</td>\n<td>1 po</td>\n<td>5 po</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\">Le joueur peut faire construire un <strong>lieu conçu pour</strong> pour son métier en multipliant le prix des ustensiles par 100.</p>\n<h3 data-heading=\"Lieux\" dir=\"auto\" id=\"lieux\">Lieux</h3>\n<blockquote dir=\"auto\">\n<p>Selon le lieu où la fabrication se fait, le résultat est modifié, et la rareté maximale des ingrédients pouvant être utilisés change.<br>\nLa rareté maximale des ingrédients utilisables est Peu Commun (3) de base.</p>\n</blockquote>\n<p dir=\"auto\"><span alt=\"Rappel &gt; Lieu\" src=\"Rappel#Lieu\" class=\"internal-embed markdown-embed inline-embed is-loaded\"><div class=\"embed-title markdown-embed-title\"></div><div class=\"markdown-embed-content\"><div class=\"markdown-preview-view markdown-rendered show-indentation-guide\"><h4 data-heading=\"Lieu\" dir=\"auto\">Lieu</h4>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Zone sauvage</th>\n<th>Campement</th>\n<th>Lieu sécurisé</th>\n<th>Lieu conçu pour</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Désavantage</td>\n<td>Résultat</td>\n<td>Avantage</td>\n<td>Difficulté de Fabrication/2</td>\n</tr>\n<tr>\n<td>---</td>\n<td>---</td>\n<td>Rareté +1</td>\n<td>Rareté +2</td>\n</tr>\n</tbody>\n</table></div></div></div></span></p>\n<h3 data-heading=\"Règles\" dir=\"auto\" id=\"rgles\">Règles</h3>\n<blockquote dir=\"auto\">\n<p>Selon la catégorie de métier, les règles varient.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th>Artisanat</th>\n<th>Alchimie</th>\n<th>Erudition</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Durée d'1 lancé de dé</strong></td>\n<td>4h</td>\n<td>2h</td>\n<td>1h</td>\n</tr>\n<tr>\n<td><strong>Peut être interrompu</strong></td>\n<td>Oui</td>\n<td>Oui</td>\n<td>Non</td>\n</tr>\n<tr>\n<td><strong>Amélioration post création</strong></td>\n<td>Oui</td>\n<td>Non</td>\n<td>Non</td>\n</tr>\n<tr>\n<td><strong>Déconstruction possible</strong><br><em>50% du temps de construction</em></td>\n<td>50% de matériaux récupérés</td>\n<td>Non</td>\n<td>Non</td>\n</tr>\n<tr>\n<td><strong>Consomme des Crystaux</strong></td>\n<td>Non</td>\n<td>Non</td>\n<td>Oui<br>1 par heure de travail<br>Si plus de crystaux -&gt; Echec</td>\n</tr>\n<tr>\n<td><strong>Effet d'échec</strong></td>\n<td>+1 ingrédient inférieur</td>\n<td>+1 ingrédient inférieur<br>Possibilité d'effet négatif ajouté à l'objet (<code>1d20 &lt; 5</code>)</td>\n<td>Perte de l'objet de base<br>Possibilité d'effet négatif ajouté au joueur (<code>1d20 &lt; 5</code>)</td>\n</tr>\n</tbody>\n</table></div>")}
  </div>
</article>

<LinkPreview />
