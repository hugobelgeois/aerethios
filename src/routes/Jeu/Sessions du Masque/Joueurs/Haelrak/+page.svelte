<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";
  import "$lib/pluginCss/obsidian-5e-statblocks.css";

  tocHeadings.set([
      {
          "id": "attributs",
          "text": "Attributs",
          "level": 2
      },
      {
          "id": "combat",
          "text": "Combat",
          "level": 3
      },
      {
          "id": "magie",
          "text": "Magie",
          "level": 3
      },
      {
          "id": "comptences",
          "text": "Compétences",
          "level": 2
      },
      {
          "id": "equipement",
          "text": "Equipement",
          "level": 2
      },
      {
          "id": "armes",
          "text": "Armes",
          "level": 3
      },
      {
          "id": "armures",
          "text": "Armures",
          "level": 3
      },
      {
          "id": "apprentissages",
          "text": "Apprentissages",
          "level": 2
      },
      {
          "id": "inventaire",
          "text": "Inventaire",
          "level": 2
      },
      {
          "id": "connaissances",
          "text": "Connaissances",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Haelrak"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Haelrak"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render attributs()}
		{@render comptences()}
		{@render equipement()}
		{@render apprentissages()}
		{@render inventaire()}
		{@render connaissances()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	<div class="plugin-block">{@html "<div class=\"block-language-statblock statblock-plugin-container\"><div class=\"container svelte-1unaafm\"><div class=\"haelrak basic-5e-layout svelte-1unaafm obsidian-statblock-plugin statblock\"><div class=\"bar svelte-zyyfbl\"></div> <div class=\"statblock-content-container\" style=\"--statblock-column-width: 400px;\"><div class=\"statblock-content svelte-420xq\"><div class=\"column\"><div class=\"statblock-item-container inline-container statblock-item-inline\"><div class=\"statblock-inline-item group-container\"><div class=\"statblock-item-container group-container \"><div class=\"statblock-item-container inline-container \"><div class=\"statblock-item-container inline-container statblock-item-inline\"><div class=\"statblock-inline-item heading-container\"><div class=\"statblock-item-container heading-container \"><div class=\"flex-container svelte-14k5qsm\"><h1 class=\"heading statblock-heading name svelte-14k5qsm\"><div class=\"statblock-rendered-text-content inline svelte-1lnliuc\">Haelrak</div> </h1></div></div></div><div class=\"statblock-inline-item inline-container\"><div class=\"statblock-item-container inline-container \"><div class=\"statblock-item-container inline-container statblock-item-inline\"><div class=\"statblock-inline-item action-container\"><div class=\"statblock-item-container action-container \"><div class=\"action\"></div></div></div><div class=\"statblock-inline-item action-container\"><div class=\"statblock-item-container action-container \"><div class=\"action\"></div></div></div></div></div></div></div></div><div class=\"statblock-item-container subheading-container \"><div class=\"subheading svelte-1fyuyh\"><div class=\"statblock-rendered-text-content inline svelte-1lnliuc\">Medium, humanoid, any race, any alignment</div></div></div></div></div><div class=\"statblock-inline-item image-container\"></div></div><div class=\"statblock-item-container rule-container\"><div class=\"tapered-rule svelte-k72li0\"></div></div><div class=\"statblock-item-container property-container \"><div class=\"line ac svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Armor Class</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">10</p></div></div></div><div class=\"statblock-item-container property-container \"><div class=\"line hp svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Hit Points</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">50 (2d8)</p></div></div></div><div class=\"statblock-item-container property-container \"><div class=\"line speed svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Speed</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">30 ft.</p></div></div></div><div class=\"statblock-item-container rule-container\"><div class=\"tapered-rule svelte-k72li0\"></div></div><div class=\"statblock-item-container table-container \"><div class=\"statblock-table stats svelte-1jjvt5k\"><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Str</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">1</p></div> <span class=\"calculated-modifier svelte-1jjvt5k\">-5</span></span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Dex</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">2</p></div> <span class=\"calculated-modifier svelte-1jjvt5k\">-4</span></span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Con</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">3</p></div> <span class=\"calculated-modifier svelte-1jjvt5k\">-4</span></span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Int</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">4</p></div> <span class=\"calculated-modifier svelte-1jjvt5k\">-3</span></span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Wis</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">5</p></div> <span class=\"calculated-modifier svelte-1jjvt5k\">-3</span></span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Cha</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">6</p></div> <span class=\"calculated-modifier svelte-1jjvt5k\">-2</span></span> </div></div></div><div class=\"statblock-item-container rule-container\"><div class=\"tapered-rule svelte-k72li0\"></div></div><div class=\"statblock-item-container saves-container \"><div class=\"info\"><div class=\"line skills skillsaves svelte-1vwmbsx\"><span class=\"property-name svelte-1vwmbsx\">Skills</span> <div class=\"property-text svelte-1vwmbsx\"></div></div></div></div><div class=\"statblock-item-container property-container \"><div class=\"line senses svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Senses</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">passive Perception 12</p></div></div></div><div class=\"statblock-item-container property-container \"><div class=\"line languages svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Languages</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">any one language (usually Common)</p></div></div></div><div class=\"statblock-item-container inline-container statblock-item-inline\"><div class=\"statblock-inline-item property-container\"><div class=\"statblock-item-container property-container \"><div class=\"line cr svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Challenge</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">1/4 (50 XP)</p></div></div></div></div><div class=\"statblock-inline-item property-container\"><div class=\"statblock-item-container property-container \"><div class=\"line cr svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Proficiency Bonus</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">+2</p></div></div></div></div></div><div class=\"statblock-item-container rule-container\"><div class=\"tapered-rule svelte-k72li0\"></div></div><div class=\"property spellcasting spells trait svelte-1d2gp4n\"><div class=\"property-name trait-name svelte-1d2gp4n\"><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">Spellcasting</p></div></div> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared:</p></div> </div><ul class=\"spell-item svelte-1suaf4g first\"><li class=\"spell-line\"><span class=\"spell-level\"><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">Cantrips (at will):</p></div></span> <span class=\"spells svelte-1suaf4g\"><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">light, sacred flame, thaumaturgy</p></div></span></li></ul><ul class=\"spell-item svelte-1suaf4g last\"><li class=\"spell-line\"><span class=\"spell-level\"><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">1st level (3 slots):</p></div></span> <span class=\"spells svelte-1suaf4g\"><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">bless, cure wounds, sanctuary</p></div></span></li></ul><div class=\"statblock-item-container traits-container \"><div class=\"statblock-section-heading\"><h3 class=\"section-header actions svelte-1ascaxr\"><div class=\"statblock-rendered-text-content inline svelte-1lnliuc\">Actions</div></h3></div><div class=\"statblock-item-container statblock-trait-prop\"><div class=\"property club actions trait svelte-1d2gp4n\"><div class=\"property-name trait-name svelte-1d2gp4n\"><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">Club</p></div></div> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.</p></div> </div></div></div></div></div></div> <div class=\"bar svelte-zyyfbl\"></div></div> </div></div>"}</div>
	{@html applyBase("<img src=\"%%BASE%%/Haelrak.png\" alt=\"Haelrak.png\" width=\"300\" class=\"wiki-image\" />\n<p><strong>Niveau</strong> : 11</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Arvens</th><th>Runild</th><th>Scienctes</th><th>Templis</th></tr></thead><tbody><tr><td><span class=\"wiki-unresolved\">Argent</span> 3</td><td>-</td><td><a href=\"%%BASE%%/Notes/Scienctes#mage\" class=\"wiki-link internal-link\" data-wiki-href=\"/Notes/Scienctes\" data-wiki-fragment=\"Mage%5C\">Mage</a></td><td>-</td></tr></tbody></table></div>")}
{/snippet}

{#snippet attributs()}
	<section>
		<h2 id="attributs">{@html "Attributs"}</h2>

	{@render combat()}
	{@render magie()}
	</section>
{/snippet}

{#snippet combat()}
	<section>
		<h3 id="combat">{@html "Combat"}</h3>
	{@html "<blockquote>55 points à mettre au niveau 1 (min 7, max 14)<br>+1 points par niveau sauf les niveaux 1, 5, 10, 15 et 20</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Force</th><th>Dextérité</th><th>Mental</th><th>Perception</th><th>Charisme</th></tr></thead><tbody><tr><td>7 (8)</td><td>16 (17)</td><td>19 (20)</td><td>11 (12)</td><td>5 (6)</td></tr><tr><td>-2 (-1)</td><td>+3</td><td>+4 (+5)</td><td>0 (+1)</td><td>-3 (-2)</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">{@html "Magie"}</h3>
	{@html "<blockquote><strong>Maîtrise</strong> : 2<br><strong>Crystaux</strong> : 14</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Air</th><th>Eau</th><th>Roche</th><th>Feu</th><th>Foudre</th><th>Lumière</th><th>Ténèbres</th></tr></thead><tbody><tr><td>7 (8)</td><td>10 (11)</td><td>-</td><td><del>(4)</del></td><td>10 (11)</td><td>-</td><td>-</td></tr><tr><td>1d6</td><td>1d8</td><td>-</td><td>-</td><td>1d8</td><td>-</td><td>-</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet comptences()}
	<section>
		<h2 id="comptences">{@html "Compétences"}</h2>
	{@html applyBase("<div class=\"table-scroll\"><table><thead><tr><th><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Force\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Force\" data-wiki-fragment=\"\">Force</a></strong></th><th><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Dexterite\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Dexterite\" data-wiki-fragment=\"\">Dextérité</a></strong></th><th><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Mental\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Mental\" data-wiki-fragment=\"\">Mental</a></strong></th><th><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Perception\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Perception\" data-wiki-fragment=\"\">Perception</a></strong></th><th><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Charisme\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Charisme\" data-wiki-fragment=\"\">Charisme</a></strong></th></tr></thead><tbody><tr><td>Athlétisme</td><td>Acrobatie<br><em>- Matrix</em></td><td>Arcaniste<br><em>- Amplification</em><br><em>- Résonance</em></td><td>Survivant</td><td>Diplomate</td></tr><tr><td></td><td>Assassin<br><em>- Coup précis</em></td><td>Intelligence<br><em>- Redirection</em></td><td>Voyeur<br><em>- Magie</em></td><td></td></tr><tr><td></td><td>Ranger<br><em>- Point Faible</em></td><td>Volonté<br><em>- Imperturbable</em><br><em>- Résistance</em></td><td></td><td></td></tr><tr><td></td><td></td><td><strong>Potter</strong><br>+</td><td></td><td></td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet equipement()}
	<section>
		<h2 id="equipement">{@html "Equipement"}</h2>

	{@render armes()}
	{@render armures()}
	</section>
{/snippet}

{#snippet armes()}
	<section>
		<h3 id="armes">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Combat/Armes\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Combat/Armes\" data-wiki-fragment=\"\">Armes</a>")}</h3>
	{@html applyBase("<div class=\"table-scroll\"><table><thead><tr><th>Court</th><th>1 Main</th><th>2 Mains</th><th>Haste</th><th>Distance</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td><td>6</td><td>2</td></tr><tr><td>0</td><td>0</td><td>0</td><td>+3</td><td>+1</td></tr></tbody></table></div>\n<div class=\"table-scroll\"><table><thead><tr><th>Arme</th><th>Dégâts</th><th>Poids (kg)</th><th>Propriétés</th></tr></thead><tbody><tr><td>Trident<br>Fer (Electrum)<br>Haste</td><td>3d6<br>+4<br>VS Magiques<br>= 7-22</td><td>4</td><td><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#porte\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Port%C3%A9e%5C\">Portée</a><br><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#jetable\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Jetable%5C\">Jetable</a></td></tr><tr><td>Fauchard Sharah<br>Adamantite (Or)<br>Haste<br>(léger)<br>(lier au pistolet)</td><td>(4d6+4Dex(Ranger))<br>+5<br>VS Mythiques<br>Air<br>= 11-31</td><td>8</td><td><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#porte\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Port%C3%A9e%5C\">Portée</a><br></td></tr><tr><td>Fusil Sharah<br>Adamantite<br>Distance<br>(léger)<br>(lier au fauchard)</td><td>(4d4+4Dex(Ranger))<br>+15<br>= 21-33</td><td>2</td><td></td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet armures()}
	<section>
		<h3 id="armures">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Combat/Armures\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Combat/Armures\" data-wiki-fragment=\"\">Armures</a>")}</h3>
	{@html applyBase("<div class=\"table-scroll\"><table><thead><tr><th>Armure</th><th>AC</th><th>DR</th><th>Enchantement</th><th>Poids (kg)</th><th>Dégâts</th><th>Propriétés</th></tr></thead><tbody><tr><td>Armure<br>Cuir</td><td>12<br>+2(Dex) <br>= 14</td><td>9(peu commun) <br>+3(Impé)<br>= 12</td><td>-</td><td>12</td><td>-</td><td>Résiste à <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#poison\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Poison%5C\">Poison</a></td></tr><tr><td>Veste longue Coton</td><td>-</td><td>-</td><td>Air 1<br>Feu 1</td><td>1</td><td>-</td><td>Air = 2 crystaux bonus par attaque</td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet apprentissages()}
	<section>
		<h2 id="apprentissages">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Apprentissages\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Apprentissages\" data-wiki-fragment=\"\">Apprentissages</a>")}</h2>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Apprentissage</th><th>Niveau</th><th>Expérience</th></tr></thead><tbody><tr><td>Cuisinier</td><td>1</td><td></td></tr><tr><td>Invocateur</td><td>1</td><td></td></tr><tr><td>Natation</td><td>1</td><td>1</td></tr><tr><td>Potionniste</td><td>2</td><td>3</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet inventaire()}
	<section>
		<h2 id="inventaire">{@html "Inventaire"}</h2>
	{@html "<p><strong>Poids maximum</strong> : 38kg</p>\n<ul><li><em>Force > 10 : 40 + (Force Modificateur x 10)</em></li><li><em>Force < 10 : 40 + (Force Modificateur x 2)</em></li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Qty</th><th>Nom</th><th>Poids (kg)</th></tr></thead><tbody><tr><td>3</td><td>Armes</td><td>14</td></tr><tr><td>2</td><td>Armures</td><td>13</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet connaissances()}
	<section>
		<h2 id="connaissances">{@html "Connaissances"}</h2>
	{@html applyBase("<ul><li><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Arek\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Arek\" data-wiki-fragment=\"\">Arek</a></li><li><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Dara\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Dara\" data-wiki-fragment=\"\">Dara</a></li><li><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Old/Halfdan\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Old/Halfdan\" data-wiki-fragment=\"\">Halfdan</a></li><li><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Hazdaim\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Hazdaim\" data-wiki-fragment=\"\">Hazdaim</a></li><li><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Leoric\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Leoric\" data-wiki-fragment=\"\">Léoric</a></li><li><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Old/Zveindel\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Old/Zveindel\" data-wiki-fragment=\"\">Zveindel</a></li></ul>\n<ul><li><span class=\"wiki-unresolved\">Dieu Dormant</span></li><li><a href=\"%%BASE%%/0_Private/Billy\" class=\"wiki-link internal-link\" data-wiki-href=\"/0_Private/Billy\" data-wiki-fragment=\"\">Billy</a></li><li><span class=\"wiki-unresolved\">Perseus</span></li><li><span class=\"wiki-unresolved\">Bryumnes</span></li><li><span class=\"wiki-unresolved\">Einar</span></li><li><span class=\"wiki-unresolved\">Chlorys</span></li><li><span class=\"wiki-unresolved\">Zaledra</span></li></ul>")}

	</section>
{/snippet}
