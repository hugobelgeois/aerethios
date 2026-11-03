<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

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
          "text": "Artisanat - New",
          "level": 3
      },
      {
          "id": "alchimie---new",
          "text": "Alchimie - New",
          "level": 3
      },
      {
          "id": "rudition",
          "text": "Érudition",
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
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Apprentissages - New"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render gnral()}
		{@render mtiers()}
		{@render fabrication()}
  </div>
</article>

<LinkPreview />

{#snippet gnral()}
	<section>
		<h2 id="gnral">{@html "Général"}</h2>
	{@html "<blockquote>Chaque leçon prend 1 jour, et chaque jour coûte 20pa.</blockquote>\n<p>1d20 par leçon pour apprendre :</p>\n<ul><li>1 = La leçon n'a servie à rien</li><li>20 = La leçon donne 2 points d'expérience</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Leçons Requises</th></tr></thead><tbody><tr><td><strong>Équitation</strong></td><td>30-60</td></tr><tr><td><strong>Lire / Écrire</strong></td><td>100-500</td></tr><tr><td><strong>Natation</strong></td><td>30-60</td></tr><tr><td><strong>Navigation</strong></td><td>50-250</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet mtiers()}
	<section>
		<h2 id="mtiers">{@html "Métiers"}</h2>
	{@html "<p>Le joueur peut choisir 1 catégorie de métier avec laquelle il est à l'aise lors de la création de son personnage.<br>\nDans cette catégorie, il peut choisir 1 métier qu'il a déjà pratiqué et avec lequel il a des affinités.<br>\nIl pourra pratiquer les autres métiers de sa catégorie, mais la difficulté augmentera de 50%.<br>\n\tLes ressources d'un métier sont les mêmes pour les autres métiers d'une même catégorie.</p>\n<p>Certains métiers font partie de 2 catégories et nécessitent alors 2 personnage pour pouvoir travailler dessus (pas forcément en même temps).</p>"}
	{@render artisanat__New()}
	{@render alchimie__New()}
	{@render rudition()}
	</section>
{/snippet}

{#snippet artisanat__New()}
	<section>
		<h3 id="artisanat---new">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" data-wiki-fragment=\"\">Artisanat - New</a>")}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Description</th></tr></thead><tbody><tr><td><strong>Artificier</strong></td><td>Fabrication d'armes à feu, d'automations, de mécanismes et d'explosifs</td></tr><tr><td><strong>Bijoutier</strong></td><td>Fabrication de bijoux ou catalyseurs de magie</td></tr><tr><td><strong>Enchanteur</strong></td><td>Création et application de capacités uniques</td></tr><tr><td><strong>Forgeron</strong></td><td>Fabrication d'armes (sauf armes à feu) et d’armures</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet alchimie__New()}
	<section>
		<h3 id="alchimie---new">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" data-wiki-fragment=\"\">Alchimie - New</a>")}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Description</th></tr></thead><tbody><tr><td><strong>Bijoutier</strong></td><td>Fabrication de bijoux ou catalyseurs de magie</td></tr><tr><td><strong>Cuisinier</strong></td><td>Préparation de repas conférant des bonus temporaires</td></tr><tr><td><strong>Invocateur</strong></td><td>Animation ou transmutation d’entités à partir d’ingrédients magiques</td></tr><tr><td><strong>Potionniste</strong></td><td>Création de potions, huiles et remèdes</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet rudition()}
	<section>
		<h3 id="rudition">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"\">Érudition</a>")}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Description</th></tr></thead><tbody><tr><td><strong>Enchanteur</strong></td><td>Création et application de capacités uniques</td></tr><tr><td><strong>Invocateur</strong></td><td>Animation ou transmutation d’entités à partir d’ingrédients magiques</td></tr><tr><td><strong>Joaillier</strong></td><td>Application de gemmes sur les armes</td></tr><tr><td><strong>Runniste</strong></td><td>Création de runes et de glyphes applicable sur des objets et entités pour les magicaliser</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet fabrication()}
	<section>
		<h2 id="fabrication">{@html "Fabrication"}</h2>
	{@html "<blockquote><code>1d20 + Niveau du Métier + Aide(Niveau de métier du personnage qui aide / 2)</code></blockquote>"}
	{@render recette()}
	{@render mcanique()}
	{@render ressources()}
	{@render ustensiles()}
	{@render lieux()}
	{@render rgles()}
	</section>
{/snippet}

{#snippet recette()}
	<section>
		<h3 id="recette">{@html "Recette"}</h3>
	{@html "<blockquote>Les recettes permettent de ne pas jeter les dés.</blockquote>\n<p>Avant de pouvoir fabriquer quelque chose, le joueur doit connaître sa recette.<br>\nIl peut soit acheter des recettes pour être certain du résultat, soit proposer une recette au Maître du Jeu, et celui-ci déterminera si elle fonctionnera ou donnera tout autre chose.</p>\n<p>Une recette contient :</p>\n<ul><li>les ingrédients,</li><li>le résultat espéré,</li><li>les procédés utilisés pour la fabrication.</li></ul>\n<p>Une fois la recette validée, le joueur lance les dés pour la fabriquer.<br>\nUne fois fabriquée, le joueur note sur sa recette toutes les ressources utilisées, et le temps total que cela lui a pris.</p>\n<p>S'il refabrique cet objet, il pourra alors soit :</p>\n<ul><li>prendre le même nombre de ressources et de temps pour le créer sans lancer de dés,</li><li>relancer les dés et espérer prendre moins de temps et/ou de ressources pour mettre à jour sa recette.</li></ul>"}

	</section>
{/snippet}

{#snippet mcanique()}
	<section>
		<h3 id="mcanique">{@html "Mécanique"}</h3>
	{@html "<blockquote>Jeter les dés pour valider un recette, ou l'améliorer.</blockquote>\n<p>Lorsqu'un joueur consacre une période de travail à la fabrication, s'il possède des ustensiles, il peut prendre du temps pour fabriquer des choses :<br>\n<code>1d20 + Niveau du Métier</code></p>\n<p>Chaque fois qu'un joueur travail, il lance les dés et augmente sa progression (Crafting Progress = CP).<br>\n\tLe joueur peut se faire aider par une personne (pas plus) avec le même métier afin de gagner <code>(Niveau de métier du joueur qui aide / 2)</code> à son jet.<br>\nLorsqu'il commence à travailler, les ressources sont consommées.<br>\nUne fois que la CP a atteint la Difficulté de Fabrication, l'objet est créé.</p>\n<p>Si le jet de dé est inférieur au Taux d'Echec de l'ingrédient le plus rare, cela compte comme un échec.<br>\nIl faut alors rajouter un ingrédient de 2 qualité inférieur à l'ingrédient le plus rare pour rattraper la recette et servir de catalyseur, ce qui augmente de nouveau la difficulté de fabrication.</p>\n<p>Pour savoir la Difficulté de Fabrication d'un objet, il faut additionner la difficulté de chaque ingrédient utilisé.</p>"}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Rappel"} fragment={"Fabrication"} />
	{@html "<p>L'expérience requise pour monter le niveau d'un Métier équivaut à son *<em>niveau+1 \\</em> 10**.</p>\n<pre><code class=\"language-Exemple\">Forgeron niveau 3 nécessite 30xp pour passer niveau 4.</code></pre>"}

	</section>
{/snippet}

{#snippet ressources()}
	<section>
		<h3 id="ressources">{@html "Ressources"}</h3>
	{@html "<p>Les ressources s'achètent, se récoltent dans la nature ou se récupèrent sur des créatures.<br>\nOn considère qu'une unité représente un ensemble de ressources similaires.<br>\n\tExemple : Ressource de Troll (Peu Commun) -> Cela peut être du sang, des yeux, salive, os, ... selon les besoins du joueur.</p>\n<p>Chaque jour de voyage, les joueurs peuvent récolter des matériaux pour leur catégorie de métier en lançant <code>1d100</code>.<br>\n\tIls doivent préciser le genre de ressources qu'ils veulent récupérer (légumes, fruits, racines, insectes, minerais, ...).</p>"}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Rappel"} fragment={"Récolte"} />
	{@html "<p>Pour ce qui est des créatures, elles possèdent chacune une liste qui représente les chances d'obtenir chaque rareté.</p>"}

	</section>
{/snippet}

{#snippet ustensiles()}
	<section>
		<h3 id="ustensiles">{@html "Ustensiles"}</h3>
	{@html "<blockquote>Selon la catégorie de métier, le poids et le prix des ustensiles varient.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Artisanat</th><th>Alchimie</th><th>Erudition</th></tr></thead><tbody><tr><td><strong>Poids</strong></td><td>10 kg<br>Lourd</td><td>5 kg<br>Lourd</td><td>1 kg<br>Léger</td></tr><tr><td><strong>Prix</strong></td><td>50 pa</td><td>1 po</td><td>5 po</td></tr></tbody></table></div>\n<p>Le joueur peut faire construire un <strong>lieu conçu pour</strong> pour son métier en multipliant le prix des ustensiles par 100.</p>"}

	</section>
{/snippet}

{#snippet lieux()}
	<section>
		<h3 id="lieux">{@html "Lieux"}</h3>
	{@html "<blockquote>Selon le lieu où la fabrication se fait, le résultat est modifié, et la rareté maximale des ingrédients pouvant être utilisés change.<br>La rareté maximale des ingrédients utilisables est Peu Commun (3) de base.</blockquote>"}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Rappel"} fragment={"Lieu"} />

	</section>
{/snippet}

{#snippet rgles()}
	<section>
		<h3 id="rgles">{@html "Règles"}</h3>
	{@html "<blockquote>Selon la catégorie de métier, les règles varient.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Artisanat</th><th>Alchimie</th><th>Erudition</th></tr></thead><tbody><tr><td><strong>Durée d'1 lancé de dé</strong></td><td>4h</td><td>2h</td><td>1h</td></tr><tr><td><strong>Peut être interrompu</strong></td><td>Oui</td><td>Oui</td><td>Non</td></tr><tr><td><strong>Amélioration post création</strong></td><td>Oui</td><td>Non</td><td>Non</td></tr><tr><td><strong>Déconstruction possible</strong><br><em>50% du temps de construction</em></td><td>50% de matériaux récupérés</td><td>Non</td><td>Non</td></tr><tr><td><strong>Consomme des Crystaux</strong></td><td>Non</td><td>Non</td><td>Oui<br>1 par heure de travail<br>Si plus de crystaux -> Echec</td></tr><tr><td><strong>Effet d'échec</strong></td><td>+1 ingrédient inférieur</td><td>+1 ingrédient inférieur<br>Possibilité d'effet négatif ajouté à l'objet (<code>1d20 < 5</code>)</td><td>Perte de l'objet de base<br>Possibilité d'effet négatif ajouté au joueur (<code>1d20 < 5</code>)</td></tr></tbody></table></div>"}

	</section>
{/snippet}
