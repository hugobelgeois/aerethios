<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
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
          "id": "invocations",
          "text": "Invocations",
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
  <title>Dara</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Dara</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render attributs()}
		{@render comptences()}
		{@render equipement()}
		{@render apprentissages()}
		{@render inventaire()}
		{@render invocations()}
		{@render connaissances()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	<div class="plugin-block">{@html applyBase("<div class=\"block-language-statblock statblock-plugin-container\"><div class=\"container svelte-1unaafm\"><div class=\"dara basic-5e-layout svelte-1unaafm obsidian-statblock-plugin statblock\"><div class=\"bar svelte-zyyfbl\"></div> <div class=\"statblock-content-container\" style=\"--statblock-column-width: 400px;\"><div class=\"statblock-content svelte-420xq\"><div class=\"column\"><div class=\"statblock-item-container inline-container statblock-item-inline\"><div class=\"statblock-inline-item group-container\"><div class=\"statblock-item-container group-container \"><div class=\"statblock-item-container inline-container \"><div class=\"statblock-item-container inline-container statblock-item-inline\"><div class=\"statblock-inline-item heading-container\"><div class=\"statblock-item-container heading-container \"><div class=\"flex-container svelte-14k5qsm\"><h1 class=\"heading statblock-heading name svelte-14k5qsm\"><div class=\"statblock-rendered-text-content inline svelte-1lnliuc\">Dara</div> </h1></div></div></div><div class=\"statblock-inline-item inline-container\"><div class=\"statblock-item-container inline-container \"><div class=\"statblock-item-container inline-container statblock-item-inline\"><div class=\"statblock-inline-item action-container\"><div class=\"statblock-item-container action-container \"><div class=\"action\"></div></div></div><div class=\"statblock-inline-item action-container\"><div class=\"statblock-item-container action-container \"><div class=\"action\"></div></div></div></div></div></div></div></div><div class=\"statblock-item-container subheading-container \"><div class=\"subheading svelte-1fyuyh\"><div class=\"statblock-rendered-text-content inline svelte-1lnliuc\">Medium, humanoid, any race, any alignment</div></div></div></div></div><div class=\"statblock-inline-item image-container\"></div></div><div class=\"statblock-item-container rule-container\"><div class=\"tapered-rule svelte-k72li0\"></div></div><div class=\"statblock-item-container property-container \"><div class=\"line ac svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Armor Class</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">10</p></div></div></div><div class=\"statblock-item-container property-container \"><div class=\"line hp svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Hit Points</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">50 (2d8)</p></div></div></div><div class=\"statblock-item-container property-container \"><div class=\"line speed svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Speed</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">30 ft.</p></div></div></div><div class=\"statblock-item-container rule-container\"><div class=\"tapered-rule svelte-k72li0\"></div></div><div class=\"statblock-item-container table-container \"><div class=\"statblock-table stats svelte-1jjvt5k\"><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Str</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">1</p></div> <span class=\"calculated-modifier svelte-1jjvt5k\">-5</span></span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Dex</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">2</p></div> <span class=\"calculated-modifier svelte-1jjvt5k\">-4</span></span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Con</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">3</p></div> <span class=\"calculated-modifier svelte-1jjvt5k\">-4</span></span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Int</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">4</p></div> <span class=\"calculated-modifier svelte-1jjvt5k\">-3</span></span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Wis</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">5</p></div> <span class=\"calculated-modifier svelte-1jjvt5k\">-3</span></span> </div><div class=\"table-item svelte-1jjvt5k\"><span class=\"statblock-table-header svelte-1jjvt5k\">Cha</span> <span><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">6</p></div> <span class=\"calculated-modifier svelte-1jjvt5k\">-2</span></span> </div></div></div><div class=\"statblock-item-container rule-container\"><div class=\"tapered-rule svelte-k72li0\"></div></div><div class=\"statblock-item-container saves-container \"><div class=\"info\"><div class=\"line skills skillsaves svelte-1vwmbsx\"><span class=\"property-name svelte-1vwmbsx\">Skills</span> <div class=\"property-text svelte-1vwmbsx\"></div></div></div></div><div class=\"statblock-item-container property-container \"><div class=\"line senses svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Senses</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">passive Perception 12</p></div></div></div><div class=\"statblock-item-container property-container \"><div class=\"line languages svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Languages</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">any one language (usually Common)</p></div></div></div><div class=\"statblock-item-container inline-container statblock-item-inline\"><div class=\"statblock-inline-item property-container\"><div class=\"statblock-item-container property-container \"><div class=\"line cr svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Challenge</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">1/4 (50 XP)</p></div></div></div></div><div class=\"statblock-inline-item property-container\"><div class=\"statblock-item-container property-container \"><div class=\"line cr svelte-1rketb6\"><span class=\"property-name svelte-1rketb6\">Proficiency Bonus</span> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">+2</p></div></div></div></div></div><div class=\"statblock-item-container rule-container\"><div class=\"tapered-rule svelte-k72li0\"></div></div><div class=\"property spellcasting spells trait svelte-1d2gp4n\"><div class=\"property-name trait-name svelte-1d2gp4n\"><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">Spellcasting</p></div></div> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared:</p></div> </div><ul class=\"spell-item svelte-1suaf4g first\"><li class=\"spell-line\"><span class=\"spell-level\"><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">Cantrips (at will):</p></div></span> <span class=\"spells svelte-1suaf4g\"><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">light, sacred flame, thaumaturgy</p></div></span></li></ul><ul class=\"spell-item svelte-1suaf4g last\"><li class=\"spell-line\"><span class=\"spell-level\"><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">1st level (3 slots):</p></div></span> <span class=\"spells svelte-1suaf4g\"><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">bless, cure wounds, sanctuary</p></div></span></li></ul><div class=\"statblock-item-container traits-container \"><div class=\"statblock-section-heading\"><h3 class=\"section-header actions svelte-1ascaxr\"><div class=\"statblock-rendered-text-content inline svelte-1lnliuc\">Actions</div></h3></div><div class=\"statblock-item-container statblock-trait-prop\"><div class=\"property club actions trait svelte-1d2gp4n\"><div class=\"property-name trait-name svelte-1d2gp4n\"><div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">Club</p></div></div> <div class=\"statblock-markdown svelte-1c3hzq4\"><p dir=\"auto\">Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.</p></div> </div></div></div></div></div></div> <div class=\"bar svelte-zyyfbl\"></div></div> </div></div>")}</div>
	{@html renderMarkdown("\n\n\n<img src=\"%%BASE%%/dara.png\" alt=\"dara.png\" width=\"300\" class=\"wiki-image\" />\n\n**Niveau** : 11\n\n|                                      Arvens                                      |          Runild          | Scienctes | Templis |\n| :------------------------------------------------------------------------------: | :----------------------: | :-------: | :-----: |\n| <span class=\"wiki-unresolved\">Or</span> 2 | <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Competences/Maisons#100-po\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Competences/Maisons\" data-wiki-fragment=\"100%20po%5C\">Riche</a> |     -     |    -    |\n")}
{/snippet}

{#snippet attributs()}
	<section>
		<h2 id="attributs">{@html applyBase("Attributs")}</h2>

	{@render combat()}
	{@render magie()}
	</section>
{/snippet}

{#snippet combat()}
	<section>
		<h3 id="combat">{@html applyBase("Combat")}</h3>
	{@html renderMarkdown(">55 points à mettre au niveau 1 (min 7, max 14)\n>+1 points par niveau sauf les niveaux 1, 5, 10, 15 et 20\n\n| Force | Dextérité | Mental | Perception |   Charisme    |\n| :---: | :-------: | :----: | :--------: | :-----------: |\n|   6   |  16 (20)  |   14   |     16     | 7 (+1 wasabi) |\n|  -2   |  +3 (+5)  |   +2   |     +3     |      -1       |\n")}

	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">{@html applyBase("Magie")}</h3>
	{@html renderMarkdown("> **Maîtrise** : 1\n> **Crystaux** : 9\n\n| Air | Eau | Roche | Feu | Foudre | Lumière | Ténèbres |\n| :-: | :-: | :---: | :-: | :----: | :-----: | :------: |\n|  -  |  6  |   -   |  4  |   -    |    -    |    19    |\n|  -  | 1d6 |   -   | 1d4 |   -    |    -    |   1d12   |\n")}

	</section>
{/snippet}

{#snippet comptences()}
	<section>
		<h2 id="comptences">{@html applyBase("Compétences")}</h2>
	{@html renderMarkdown("\n| **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Force\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Force\" data-wiki-fragment=\"\">Force</a>** |             **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Dexterite\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Dexterite\" data-wiki-fragment=\"\">Dextérité</a>**             |         **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Mental\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Mental\" data-wiki-fragment=\"\">Mental</a>**         |              **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Perception\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Perception\" data-wiki-fragment=\"\">Perception</a>**              | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Charisme\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Charisme\" data-wiki-fragment=\"\">Charisme</a>** |\n| :-----------: | :---------------------------------------: | :----------------------------: | :------------------------------------------: | :--------------: |\n|  Athlétisme   |          Acrobatie<br>*- Matrix*          | Intelligence<br>*- Efficacité* |                   Chasseur                   |     Trompeur     |\n|               | Assassin<br>*- Coup précis*<br>*- Rapide* |   Volonté<br>*- Résistance*    | Spiritisme<br>*- Exorciste*<br>*- Pactisant* |                  |\n|               |        Bretteur<br>*- Ambidextre*         |                                |        Observateur<br>*- Mentaliste*         |                  |\n|               |         Voleur<br>*- Main légère*         |                                |                                              |                  |\n|               |           **Sixième sens**<br>+           |                                |                                              |                  |\n")}

	</section>
{/snippet}

{#snippet equipement()}
	<section>
		<h2 id="equipement">{@html applyBase("Equipement")}</h2>

	{@render armes()}
	{@render armures()}
	</section>
{/snippet}

{#snippet armes()}
	<section>
		<h3 id="armes">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Combat/Armes\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Combat/Armes\" data-wiki-fragment=\"\">Armes</a>")}</h3>
	{@html renderMarkdown("\n| Court | 1 Main | 2 Mains | Haste | Distance |\n| :---: | :----: | :-----: | :---: | :------: |\n|   2   |   2    |    8    |   0   |    0     |\n|  +1   |   +1   |   +4    |   0   |    0     |\n\n| Arme                                                | Dégâts                                                                               | Poids (kg) |                              Propriétés                              |\n| --------------------------------------------------- | ------------------------------------------------------------------------------------ | :--------: | :------------------------------------------------------------------: |\n| Lame double<br>Orichalque (Argent)<br>2 Mains       | 3d4<br>+36<br>Crit 2<br>VS Hybrides<br>= 39-48                                       |    7.5     |                   <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#double\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Double%5C\">Double</a> T                    |\n| Dague<br>Orichalque<br>Court                        | 2d12<br>+12 +9Nirina<br>VS Démons<br>= 23-45                                         |    2.5     | <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#jetable\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Jetable%5C\">Jetable</a><br><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#critique\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Critique%5C\">Critique</a> |\n| Épée droite<br>Adamantite (Sombronce)<br>2 Mains    | 3d4<br>+30<br>Crit 2<br>VS Naturels<br>= 33-42                                       |     6      |                                 ---                                  |\n| Dague Sharah<br>Adamantite (Or)<br>Court<br>(léger) | (3d12+10Dex(Assassin))<br>+10 +10Nirina<br>Crit 3<br>VS Mythiques <br>Air<br>= 33-66 |     4      | <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#jetable\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Jetable%5C\">Jetable</a><br><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#critique\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Critique%5C\">Critique</a> |\n")}

	</section>
{/snippet}

{#snippet armures()}
	<section>
		<h3 id="armures">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Combat/Armures\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Combat/Armures\" data-wiki-fragment=\"\">Armures</a>")}</h3>
	{@html renderMarkdown("\n| Armure                   |          AC           |                 DR                 |     Enchantement     | Poids (kg) | Dégâts |                     Propriétés                      |\n| ------------------------ | :-------------------: | :--------------------------------: | :------------------: | :--------: | :----: | :-------------------------------------------------: |\n| Armure<br>Cuir           | 12<br>+3(Dex)<br>= 15 | 9(peu commun) <br>+5(Impé)<br>= 14 |          -           |     12     |   -    |       Résiste à <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#poison\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Poison%5C\">Poison</a>       |\n| Cape en velour           |           -           |                 -                  |  Feu 2<br>Foudre 2   |     1      |   -    |  Les sorts solides à 1 crystal ne les consomme pas  |\n| Cape de fourrure         |           -           |                 -                  | Glace 3<br>Liquide 1 |     1      |   -    | Les sorts croitistes à 1 crystal ne le consomme pas |\n| Cape de fourrure (tigre) |           -           |                 -                  |                      |     1      |   -    | Les sorts croitistes à 1 crystal ne le consomme pas |\n")}

	</section>
{/snippet}

{#snippet apprentissages()}
	<section>
		<h2 id="apprentissages">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Apprentissages\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Apprentissages\" data-wiki-fragment=\"\">Apprentissages</a>")}</h2>
	{@html renderMarkdown("\n| Apprentissage               | Niveau | Expérience |\n| --------------------------- | :----: | :--------: |\n| Cuisinier                   |   2    |     0      |\n| Enchanteur (tissu – Suraja) |   1    |     6      |\n| Équitation                  |   1    |            |\n")}

	</section>
{/snippet}

{#snippet inventaire()}
	<section>
		<h2 id="inventaire">{@html applyBase("Inventaire")}</h2>
	{@html renderMarkdown("\n**Poids maximum** : 36+20 = 56kg\n- *Force > 10 : 40 + (Force Modificateur x 10)*\n- *Force < 10 : 40 + (Force Modificateur x 2)*\n\n| Qty | Nom     | Poids (kg) |\n| --- | ------- | ---------: |\n| 4   | Armes   |         20 |\n| 4   | Armures |         15 |\n")}

	</section>
{/snippet}

{#snippet invocations()}
	<section>
		<h2 id="invocations">{@html applyBase("Invocations")}</h2>
	{@html renderMarkdown("\n| Nom                 |  Coût  |   AC   |   DR   |   HP   |    Léger     |    Lourd     |         Magie         |\n| ------------------- | :----: | :----: | :----: | :----: | :----------: | :----------: | :-------------------: |\n| Chevalier informé   |   20   |   9    |   18   |   25   |      -       |   3d4 + 21   |                       |\n| Goss Harag          |   40   |   6    |   25   |   50   |   2d6 + 10   |   3d8 + 18   |       3d6 Glace       |\n| Owlbear             |   15   |   20   |   0    |   10   |   (3d6+12)   |      -       |           -           |\n| Gammoth             |   80   |   2    |   40   |  120   |   3d6 + 15   |  4d10 + 25   |   4d6 Glace (zone)    |\n| Shara Ishvalda      |  100   |   5    |   35   |  110   |   2d8 + 12   |   5d8 + 30   | 5d6 Roche<br>3d20 Air |\n| Gore Magala         |   70   |   12   |   20   |   75   |   3d8 + 14   |   4d8 + 20   |     4d6 Ténèbres      |\n| ~~Lagiacrus (MDR)~~ | ~~75~~ | ~~10~~ | ~~22~~ | ~~85~~ | ~~3d6 + 14~~ | ~~4d8 + 22~~ |    ~~4d6 Foudre~~     |\n| Os de capitaine     |        |        |        |        |              |              |                       |\n| Araignée            |   20   |   12   |   10   |   40   |              |              |                       |\n")}

	</section>
{/snippet}

{#snippet connaissances()}
	<section>
		<h2 id="connaissances">{@html applyBase("Connaissances")}</h2>
	{@html renderMarkdown("\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Arek\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Arek\" data-wiki-fragment=\"\">Arek</a>\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Haelrak\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Haelrak\" data-wiki-fragment=\"\">Haelrak</a>\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Old/Halfdan\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Old/Halfdan\" data-wiki-fragment=\"\">Halfdan</a>\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Hazdaim\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Hazdaim\" data-wiki-fragment=\"\">Hazdaim</a>\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Leoric\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Leoric\" data-wiki-fragment=\"\">Léoric</a>\n- <a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Old/Zveindel\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Old/Zveindel\" data-wiki-fragment=\"\">Zveindel</a>\n\n- <span class=\"wiki-unresolved\">Dieu Dormant</span>\n- <a href=\"%%BASE%%/0_Private/Billy\" class=\"wiki-link internal-link\" data-wiki-href=\"/0_Private/Billy\" data-wiki-fragment=\"\">Billy</a>\n- <span class=\"wiki-unresolved\">Perseus</span>\n- <span class=\"wiki-unresolved\">Bryumnes</span>\n- <span class=\"wiki-unresolved\">Einar</span>\n- <span class=\"wiki-unresolved\">Chlorys</span>\n- <span class=\"wiki-unresolved\">Zaledra</span>")}

	</section>
{/snippet}
