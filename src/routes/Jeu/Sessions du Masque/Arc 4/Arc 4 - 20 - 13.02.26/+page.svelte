<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "dtails",
          "text": "Détails",
          "level": 2
      },
      {
          "id": "notes",
          "text": "Notes",
          "level": 2
      },
      {
          "id": "scnario",
          "text": "Scénario",
          "level": 2
      },
      {
          "id": "1-accroche",
          "text": "1) Accroche",
          "level": 4
      },
      {
          "id": "2-les-mechas-deviennent-instables",
          "text": "2) Les mechas deviennent instables",
          "level": 4
      },
      {
          "id": "3-combat-troll",
          "text": "3) Combat Troll",
          "level": 4
      },
      {
          "id": "4-exploitation-des-nains",
          "text": "4) Exploitation des nains",
          "level": 4
      },
      {
          "id": "5-pistage-de-la-crature",
          "text": "5) Pistage de la créature",
          "level": 4
      },
      {
          "id": "6-combat-wyrm-",
          "text": "6) Combat Wyrm ?",
          "level": 4
      },
      {
          "id": "7-les-joueurs-sont-recherchs",
          "text": "7) Les joueurs sont recherchés",
          "level": 4
      },
      {
          "id": "8-le-masque-",
          "text": "8) Le masque ?",
          "level": 4
      },
      {
          "id": "joueurs",
          "text": "Joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Arc 4 - 20 - 13.02.26</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 4 - 20 - 13.02.26</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render dtails()}
		{@render notes()}
		{@render scnario()}
		{@render joueurs()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("> Résumé\n")}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html applyBase("Détails")}</h2>
	{@html renderMarkdown("\nLieu actuel : Nirina, Sulimund\n\nObjectif :\n\nPnjs notables : Ilmar Hakka, Kigan Krust, Duo de paladins\n")}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html applyBase("Notes")}</h2>
	{@html renderMarkdown("\n|           |       Arek       |       Dara        |           Haelrak           |      Hazdaim       |      Léoric      |  Zveindel   |\n| --------- | :--------------: | :---------------: | :-------------------------: | :----------------: | :--------------: | :---------: |\n| **AC**    |      8 (-3)      |        15         |             14              |         14         |        9         |     10      |\n| **DR**    |     25 (+40)     |        14         |             12              |         12         |        23        |     20      |\n| **DMG**   | 5 + 33<br>6 + 40 | 9 + 27<br>14 + 10 | 12 + 4<br>16 + 5<br>12 + 15 | 10 + 10<br>12 + 10 | 14 + 6<br>7 + 20 |      -      |\n| **Magie** |    9 (1d8 +5)    |     9 (1d12)      |          14 (1d8)           |      9 (1d6)       |     9 (1d8)      | 14 (1d8 +2) |\n\n| Ennemi         | AC  | DR  | HP  |   Légère    |   Lourde    |\n| -------------- | :-: | :-: | :-: | :---------: | :---------: |\n| Troll          |  5  | 20  | 80  | (2d6+6) +5  | (1d4+5) +25 |\n| Gobelin        | 15  |  8  | 30  |   (3d6+6)   | (1d6+2) +15 |\n| Wyrm           |  3  | 35  | 200 | (2d6+8) +10 | (2d6+4) +40 |\n| Elémentaire v3 |  5  | 25  | 120 |             |             |\n")}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html applyBase("Scénario")}</h2>

	{@render _Accroche()}
	{@render _LesMechasDeviennentInstables()}
	{@render _CombatTroll()}
	{@render _ExploitationDesNains()}
	{@render _PistageDeLaCrature()}
	{@render _CombatWyrm_()}
	{@render _LesJoueursSontRecherchs()}
	{@render _LeMasque_()}
	</section>
{/snippet}

{#snippet _Accroche()}
	<section>
		<h4 id="1-accroche">{@html applyBase("1) Accroche")}</h4>
	{@html renderMarkdown("> **Interaction**, Qui > Quoi\n\nAprès leur période de fête, Ilmar et Kigan désaoulent et deviennent de vrais ingénieurs et sont en train de tester un cockpit.\n\nIls acceptent les joueurs car ils ont bu ensemble et qu'ils sont sympas, mais leurs disent de faire attention car on sait qu'ils sont là maintenant.\n\nDescription de Kigan dans le cockpit en train de le démarrer (il faut être prudent avec tant que tout n'est pas terminé, ça peut créer des courts-circuits qui peuvent tout faire sauter).\n")}

	</section>
{/snippet}

{#snippet _LesMechasDeviennentInstables()}
	<section>
		<h4 id="2-les-mechas-deviennent-instables">{@html applyBase("2) Les mechas deviennent instables")}</h4>
	{@html renderMarkdown(">**Exploration**, qui > quoi\n\nLes mechas dans le volcan deviennent instables, tout le monde doit se mobiliser pour les stabiliser.\n\nLes joueurs doivent reproduire ce qu'ils ont vu dans le cockpit pour dégager tous les trolls et gobelins qui sont sur le méchas.\nS'ils ne sont pas assez précis, le méchas explose mais tue quand même les ennemis sauf 1.\n")}

	</section>
{/snippet}

{#snippet _CombatTroll()}
	<section>
		<h4 id="3-combat-troll">{@html applyBase("3) Combat Troll")}</h4>
	{@html renderMarkdown(">**Combat**, Arek, Dara > Attaque lourde\n\n1 troll reste pour s'en prendre aux joueurs.\n")}

	</section>
{/snippet}

{#snippet _ExploitationDesNains()}
	<section>
		<h4 id="4-exploitation-des-nains">{@html applyBase("4) Exploitation des nains")}</h4>
	{@html renderMarkdown(">**Interaction**, qui > quoi\n\nIls sont tenus par les couilles, car ils savent que s'ils sortent les mecha du volcans, Sulimund sera rasé.\nMais s'ils ne le font pas, les nains se feront chasser dans Nirina comme impies.\n\nC'est pour ça qu'ils boivent beaucoup, pour fêter ce qu'ils peuvent avant de tous y passer.\n\nC'est encore plus stressant en sachant qu'un clan de gobelin et de trolls rôde plus profondément dans le volcan.\nIls ne peuvent pas s'en occuper car ils doivent gérer les mechas.\n")}

	</section>
{/snippet}

{#snippet _PistageDeLaCrature()}
	<section>
		<h4 id="5-pistage-de-la-crature">{@html applyBase("5) Pistage de la créature")}</h4>
	{@html renderMarkdown(">**Exploration**, Haelrak, Hazdaim, Léoric > Attaque légère\n\nEn descendant dans les galeries, ils combattent 4 gobelins et jusqu'à arriver à un wyrm de magma en train de sucer la lave du volcan.\n\nLes gobelins l'idolâtrent car il pond des trolls assez régulièrement.\n\nS'ils tuent le wyrm, les gobelins mourront, mais la lave ne sera plus canalisée et le volcan risque de se réveiller.\n")}

	</section>
{/snippet}

{#snippet _CombatWyrm_()}
	<section>
		<h4 id="6-combat-wyrm-">{@html applyBase("6) Combat Wyrm ?")}</h4>
	{@html renderMarkdown(">**Combat**, Zveindel > Magie\n\n1 Wyrm (sauf s'ils ne veulent pas l'attaquer)\n\nLes ennemis reviennent en boucle tant qu'ils n'ont pas tué le wyrm/ fui les profondeurs :\n2 Trolls contre Dara et Arek\n4 gobelins contre Haelrak et Hazdaim\n")}

	</section>
{/snippet}

{#snippet _LesJoueursSontRecherchs()}
	<section>
		<h4 id="7-les-joueurs-sont-recherchs">{@html applyBase("7) Les joueurs sont recherchés")}</h4>
	{@html renderMarkdown(">**Interaction**, qui > quoi\n\nSi le wyrm a été combattu :\n\tla ville des nains a été saccagée, il y a des corps partout, et la lave monte.\n\tEn sortant du volcan, ils croisent quelques survivants en train de fuir et Kigan blessé, qui leur dit que le réveil du volcan a détruit les mechas et qu'un duo de paladins est venu tuer ce qu'il pouvait et prendre des enfants de prière.\n\n~~Sinon :\nEn retournant auprès des nains, ils croisent un duo de paladins.~~\n\n- ~~Si le mecha a été détruit, les paladins prennent les familles d'Ilmar et de Kigan pour devenir enfants de prière, et pour que ça leur serve de leçon d'abîmer les propriétés du maître.\nQuand les joueurs les retrouvent, ils leur disent de partir, avant qu'ils ne décident d'appeler le duo pour les échanger contre leur famille.~~\n\n- ~~Si le mecha n'a pas été détruit, ils demandent qu'on leur amène les nouveaux enfants de prière, à qui il manque les yeux et dont l'extrémité des doigts est ouverte.~~\n")}

	</section>
{/snippet}

{#snippet _LeMasque_()}
	<section>
		<h4 id="8-le-masque-">{@html applyBase("8) Le masque ?")}</h4>
	{@html renderMarkdown("\nIls font un rêve où ils sont dans la dimension du masque, mais plus personne n'est pendu au plafond, tout est noir, silencieux.\n\nS'ils réussissent perception, ils perçoivent une silhouette humaine avec des cornes.\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html applyBase("Joueurs")}</h2>
	{@html renderMarkdown("\n- [x] Diego 21\n- [x] Loïc 16\n- [x] Lucas 9\n- [x] Michel 23\n- [ ] Nolan 8\n- [ ] Thomas 20\n- [ ] William 7\n\n|         Précédent         |          Suivant          |\n| :-----------------------: | :-----------------------: |\n| <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 19 - 23.01.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 19 - 23.01.26\" data-wiki-fragment=\"\">Arc 4 - 19 - 23.01.26</a> | <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 21 - 20.02.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 21 - 20.02.26\" data-wiki-fragment=\"\">Arc 4 - 21 - 20.02.26</a> |")}

	</section>
{/snippet}
