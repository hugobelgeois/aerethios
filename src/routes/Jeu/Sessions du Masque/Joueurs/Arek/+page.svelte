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
  <title>{"Arek"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arek"}</h1>
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
	<div class="plugin-block">{@html applyBase("<div class=\"block-language-statblock statblock-plugin-container\"><div class=\"container svelte-1unaafm\"><div class=\"arek aerethios---player svelte-1unaafm obsidian-statblock-plugin statblock\"><div class=\"bar svelte-zyyfbl\"></div> <div class=\"statblock-content-container\" style=\"--statblock-column-width: 400px;\"><div class=\"statblock-content svelte-420xq\"><div class=\"column\"><div class=\"statblock-item-container inline-container statblock-item-inline\"><div class=\"statblock-inline-item group-container\"><div class=\"statblock-item-container group-container \"><div class=\"statblock-item-container inline-container \"><div class=\"statblock-item-container inline-container statblock-item-inline\"><div class=\"statblock-inline-item heading-container\"><div class=\"statblock-item-container heading-container \"><div class=\"flex-container svelte-14k5qsm\"><h1 class=\"heading statblock-heading name svelte-14k5qsm\"><div class=\"statblock-rendered-text-content inline svelte-1lnliuc\">Arek</div> </h1></div></div></div></div></div></div></div><div class=\"statblock-inline-item image-container\"><div class=\"statblock-item-container image-container \"><div class=\"image svelte-q1pj66 pointer\"><img src=\"%%BASE%%/Arek_1793397272678_hh42cw.webp\" alt=\"Arek\" class=\"svelte-q1pj66\"></div></div></div></div><div class=\"statblock-item-container rule-container\"><div class=\"tapered-rule svelte-k72li0\"></div></div><div class=\"statblock-item-container inline-container statblock-item-inline\"><div class=\"statblock-inline-item property-container\"><div class=\"statblock-item-container property-container \"><div class=\"line hp svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Vie</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">50</p></div></div></div></div><div class=\"statblock-inline-item property-container\"><div class=\"statblock-item-container property-container \"><div class=\"line ac svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Armure</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">10</p></div></div></div></div><div class=\"statblock-inline-item property-container\"><div class=\"statblock-item-container property-container \"><div class=\"line mp svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Crystal</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">9</p></div></div></div></div></div><div class=\"statblock-item-container rule-container\"><div class=\"tapered-rule svelte-k72li0\"></div></div><div class=\"statblock-item-container table-container \"><div class=\"statblock-table stats svelte-1jjvt5k\"><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Force</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">20</p></div> <span class=\"calculated-modifier svelte-1jjvt5k\">+5</span></span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Dextérité</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">10-2</p></div> <span class=\"calculated-modifier svelte-1jjvt5k\"></span></span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Mental</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">18</p></div> <span class=\"calculated-modifier svelte-1jjvt5k\">+4</span></span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Perception</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">10</p></div> <span class=\"calculated-modifier svelte-1jjvt5k\">+0</span></span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Charisme</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">8</p></div> <span class=\"calculated-modifier svelte-1jjvt5k\">-1</span></span> </div></div></div><div class=\"statblock-item-container rule-container\"><div class=\"tapered-rule svelte-k72li0\"></div></div><div class=\"statblock-item-container table-container \"><div class=\"statblock-table magic svelte-1jjvt5k\"><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Air</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">0</p></div> </span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Eau</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">0</p></div> </span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Roche</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">1d6</p></div> </span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Feu</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">1d4</p></div> </span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Foudre</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">0</p></div> </span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Lumière</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">1d8+5</p></div> </span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Ténèbres</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">0</p></div> </span> </div></div></div><div class=\"statblock-item-container rule-container\"><div class=\"tapered-rule svelte-k72li0\"></div></div><div class=\"statblock-item-container inline-container statblock-item-inline\"><div class=\"statblock-inline-item property-container\"><div class=\"statblock-item-container property-container \"><div class=\"line cr svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Challenge</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">-</p></div></div></div></div><div class=\"statblock-inline-item property-container\"><div class=\"statblock-item-container property-container \"><div class=\"line cr svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Proficiency Bonus</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">-</p></div></div></div></div></div><div class=\"statblock-item-container rule-container\"><div class=\"tapered-rule svelte-k72li0\"></div></div><div class=\"statblock-item-container collapse-container \"><details class=\"svelte-1674zvq\" open=\"\"><summary class=\"svelte-1674zvq\"> <div class=\"collapser svelte-1674zvq\"><div class=\"handle svelte-1674zvq\"></div></div></summary><div class=\"statblock-item-container traits-container \"><div class=\"statblock-section-heading\"><h3 class=\"section-header test svelte-1ascaxr\"><div class=\"statblock-rendered-text-content inline svelte-1lnliuc\">test</div></h3></div><div class=\"statblock-item-container statblock-trait-prop\"><div class=\"property oui trait trait svelte-1d2gp4n\"><div class=\"property-name trait-name svelte-1d2gp4n\"><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">oui</p></div></div> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">non</p></div> </div></div></div><div class=\"statblock-item-container statblock-trait-prop\"><div class=\"property qesgr trait trait svelte-1d2gp4n\"><div class=\"property-name trait-name svelte-1d2gp4n\"><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">qesgr</p></div></div> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">mmmmm</p></div> </div></div></details></div></div></div></div> <div class=\"bar svelte-zyyfbl\"></div></div> </div></div>")}</div>
	{@html applyBase("<img src=\"%%BASE%%/arek.png\" alt=\"arek.png\" width=\"300\" class=\"wiki-image\" />\n<p><strong>Niveau</strong> : 13</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Arvens</th><th>Runild</th><th>Scienctes</th><th>Templis</th></tr></thead><tbody><tr><td><span class=\"wiki-unresolved\">Or</span> 3</td><td>-</td><td>-</td><td>2</td></tr></tbody></table></div>")}
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
	{@html "<blockquote>55 points à mettre au niveau 1 (min 7, max 14)<br>+1 points par niveau sauf les niveaux 1, 5, 10, 15 et 20</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Force</th><th>Dextérité</th><th>Mental</th><th>Perception</th><th>Charisme</th></tr></thead><tbody><tr><td>20</td><td>8 (10)</td><td>18</td><td>10</td><td>8</td></tr><tr><td>+5</td><td>-1 (0)</td><td>+4</td><td>0</td><td>-1</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">{@html "Magie"}</h3>
	{@html "<blockquote><strong>Maîtrise</strong> : 1<br><strong>Crystaux</strong> : 9</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Air</th><th>Eau</th><th>Roche</th><th>Feu</th><th>Foudre</th><th>Lumière</th><th>Ténèbres</th></tr></thead><tbody><tr><td>-</td><td>-</td><td>7</td><td>4</td><td>-</td><td>9</td><td>-</td></tr><tr><td>-</td><td>-</td><td>1d6</td><td>1d4</td><td>-</td><td>1d8 +5</td><td>-</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet comptences()}
	<section>
		<h2 id="comptences">{@html "Compétences"}</h2>
	{@html applyBase("<div class=\"table-scroll\"><table><thead><tr><th><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Force\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Force\" data-wiki-fragment=\"\">Force</a></strong></th><th><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Dexterite\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Dexterite\" data-wiki-fragment=\"\">Dextérité</a></strong></th><th><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Mental\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Mental\" data-wiki-fragment=\"\">Mental</a></strong></th><th><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Perception\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Perception\" data-wiki-fragment=\"\">Perception</a></strong></th><th><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Charisme\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Charisme\" data-wiki-fragment=\"\">Charisme</a></strong></th></tr></thead><tbody><tr><td>Athlétisme<br><em>- Mule</em><br><em>- Momentum</em></td><td></td><td>Intelligence</td><td></td><td>Meneur</td></tr><tr><td>Barbare<br><em>- Bagarre</em></td><td></td><td>Sagesse<br>- <del>Assidue</del><br><em>- Insensible</em></td><td></td><td></td></tr><tr><td>Paladin<br><em>- Impénétrable</em></td><td></td><td>Volonté<br><em>- Résistance</em><br><em>- Imperturbable</em></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td><strong>Cafard</strong><br>+ -</td><td></td><td></td><td></td><td></td></tr></tbody></table></div>")}

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
	{@html applyBase("<div class=\"table-scroll\"><table><thead><tr><th>Court</th><th>1 Main</th><th>2 Mains</th><th>Haste</th><th>Distance</th></tr></thead><tbody><tr><td>7</td><td>8</td><td>0</td><td>0</td><td>0</td></tr><tr><td>+3</td><td>+4</td><td>0</td><td>0</td><td>0</td></tr></tbody></table></div>\n<div class=\"table-scroll\"><table><thead><tr><th>Arme</th><th>Dégâts</th><th>Poids (kg)</th><th>Propriétés</th></tr></thead><tbody><tr><td>Hache<br>Orichalque<br>1 Main<br>(lourd)<br></td><td>(1d8+8Force(Monk))<br>+36 +10Nirina<br>VS Démons<br>Ténèbres 4<br>= 41-48</td><td>7.5</td><td>Force > 15</td></tr><tr><td>Hache <br>Orichalque<br>1 Main<br>(lourd)</td><td>(1d8+8Force(Monk))<br>+36 +2Nirina<br>VS Démons<br>Ténèbres 4<br>= 41-48</td><td>7.5</td><td>Force > 15</td></tr><tr><td>Epée<br>Palladium<br>1 Main<br>(lourd)</td><td>(1d8+8Force(Monk))<br>+30 +3Nirina<br>VS Anges<br>Ténèbres 4<br>= 35-42</td><td>6</td><td>Force > 15<br>Sang de dieu : <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lacration\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Lac%C3%A9ration%5C\">Lacération</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet armures()}
	<section>
		<h3 id="armures">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Combat/Armures\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Combat/Armures\" data-wiki-fragment=\"\">Armures</a>")}</h3>
	{@html applyBase("<div class=\"table-scroll\"><table><thead><tr><th>Armure</th><th>AC</th><th>DR</th><th>Enchantement</th><th>Poids (kg)</th><th>Dégâts</th><th>Propriétés</th></tr></thead><tbody><tr><td>Armure<br>Paladium<br>Enchant Nirina 6 + 3</td><td>5</td><td>35<br>+16(Impénétrable)<br>+ 6+3 Nirina<br>= 60</td><td></td><td>36</td><td>-</td><td>Dextérité(Discrétion) impossible<br><br>Magies impossibles en combat</td></tr><tr><td>Cape Fourrure</td><td>-</td><td>-</td><td>Feu 5<br>Foudre 1</td><td>2</td><td>-</td><td>Fusion = 1 crystal gratuit par action</td></tr><tr><td>Bouclier d'Estoc</td><td>-3</td><td>30 (Orichalque 75%)<br>+4Nirina<br>= 34</td><td>Foudre 5</td><td>12</td><td>1d4 +4</td><td><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#charge\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Charge%5C\">Charge</a></td></tr><tr><td>Armure<br>Os Gammoth</td><td>8</td><td>20(Os rare)<br>+16(Impénétrable)<br>= 36</td><td>Glace 4</td><td>18</td><td>-</td><td>Désavantage en Dextérité (Discrétion)<br><br> Désavantage en Magies en combat<br> <br> 1 invulnérabilité magique</td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet apprentissages()}
	<section>
		<h2 id="apprentissages">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Apprentissages\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Apprentissages\" data-wiki-fragment=\"\">Apprentissages</a>")}</h2>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Apprentissage</th><th>Niveau</th><th>Expérience</th></tr></thead><tbody><tr><td>Enchanteur (os – Ovliin)</td><td>1</td><td></td></tr><tr><td>Lire / Écrire</td><td>1</td><td></td></tr><tr><td>Potionniste</td><td>4</td><td></td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet inventaire()}
	<section>
		<h2 id="inventaire">{@html "Inventaire"}</h2>
	{@html "<p><strong>Poids maximum</strong> : 70+80 = 150kg</p>\n<ul><li><em>Force > 10 : 40 + (Force Modificateur x 10)</em></li><li><em>Force < 10 : 40 + (Force Modificateur x 2)</em></li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Qty</th><th>Nom</th><th>Poids (kg)</th></tr></thead><tbody><tr><td>3</td><td>Armes</td><td>21</td></tr><tr><td>4</td><td>Armures</td><td>68</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet connaissances()}
	<section>
		<h2 id="connaissances">{@html "Connaissances"}</h2>
	{@html applyBase("<ul><li><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Dara\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Dara\" data-wiki-fragment=\"\">Dara</a></li><li><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Haelrak\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Haelrak\" data-wiki-fragment=\"\">Haelrak</a></li><li><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Old/Halfdan\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Old/Halfdan\" data-wiki-fragment=\"\">Halfdan</a></li><li><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Hazdaim\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Hazdaim\" data-wiki-fragment=\"\">Hazdaim</a></li><li><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Leoric\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Leoric\" data-wiki-fragment=\"\">Léoric</a></li><li><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Old/Zveindel\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Old/Zveindel\" data-wiki-fragment=\"\">Zveindel</a></li></ul>\n<ul><li><span class=\"wiki-unresolved\">Dieu Dormant</span></li><li><a href=\"%%BASE%%/0_Private/Billy\" class=\"wiki-link internal-link\" data-wiki-href=\"/0_Private/Billy\" data-wiki-fragment=\"\">Billy</a></li><li><span class=\"wiki-unresolved\">Perseus</span></li><li><span class=\"wiki-unresolved\">Bryumnes</span></li><li><span class=\"wiki-unresolved\">Einar</span></li><li><span class=\"wiki-unresolved\">Chlorys</span></li><li><span class=\"wiki-unresolved\">Zaledra</span></li></ul>")}

	</section>
{/snippet}
