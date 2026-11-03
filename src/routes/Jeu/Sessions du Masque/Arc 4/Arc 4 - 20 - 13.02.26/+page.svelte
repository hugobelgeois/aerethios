<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Arc 4 - 20 - 13.02.26"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 4 - 20 - 13.02.26"}</h1>
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
	{@html "<blockquote>Résumé</blockquote>"}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html "Détails"}</h2>
	{@html "<p>Lieu actuel : Nirina, Sulimund</p>\n<p>Objectif :</p>\n<p>Pnjs notables : Ilmar Hakka, Kigan Krust, Duo de paladins</p>"}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html "Notes"}</h2>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Arek</th><th>Dara</th><th>Haelrak</th><th>Hazdaim</th><th>Léoric</th><th>Zveindel</th></tr></thead><tbody><tr><td><strong>AC</strong></td><td>8 (-3)</td><td>15</td><td>14</td><td>14</td><td>9</td><td>10</td></tr><tr><td><strong>DR</strong></td><td>25 (+40)</td><td>14</td><td>12</td><td>12</td><td>23</td><td>20</td></tr><tr><td><strong>DMG</strong></td><td>5 + 33<br>6 + 40</td><td>9 + 27<br>14 + 10</td><td>12 + 4<br>16 + 5<br>12 + 15</td><td>10 + 10<br>12 + 10</td><td>14 + 6<br>7 + 20</td><td>-</td></tr><tr><td><strong>Magie</strong></td><td>9 (1d8 +5)</td><td>9 (1d12)</td><td>14 (1d8)</td><td>9 (1d6)</td><td>9 (1d8)</td><td>14 (1d8 +2)</td></tr></tbody></table></div>\n<div class=\"table-scroll\"><table><thead><tr><th>Ennemi</th><th>AC</th><th>DR</th><th>HP</th><th>Légère</th><th>Lourde</th></tr></thead><tbody><tr><td>Troll</td><td>5</td><td>20</td><td>80</td><td>(2d6+6) +5</td><td>(1d4+5) +25</td></tr><tr><td>Gobelin</td><td>15</td><td>8</td><td>30</td><td>(3d6+6)</td><td>(1d6+2) +15</td></tr><tr><td>Wyrm</td><td>3</td><td>35</td><td>200</td><td>(2d6+8) +10</td><td>(2d6+4) +40</td></tr><tr><td>Elémentaire v3</td><td>5</td><td>25</td><td>120</td><td></td><td></td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html "Scénario"}</h2>

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
		<h4 id="1-accroche">{@html "1) Accroche"}</h4>
	{@html "<blockquote><strong>Interaction</strong>, Qui > Quoi</blockquote>\n<p>Après leur période de fête, Ilmar et Kigan désaoulent et deviennent de vrais ingénieurs et sont en train de tester un cockpit.</p>\n<p>Ils acceptent les joueurs car ils ont bu ensemble et qu'ils sont sympas, mais leurs disent de faire attention car on sait qu'ils sont là maintenant.</p>\n<p>Description de Kigan dans le cockpit en train de le démarrer (il faut être prudent avec tant que tout n'est pas terminé, ça peut créer des courts-circuits qui peuvent tout faire sauter).</p>"}

	</section>
{/snippet}

{#snippet _LesMechasDeviennentInstables()}
	<section>
		<h4 id="2-les-mechas-deviennent-instables">{@html "2) Les mechas deviennent instables"}</h4>
	{@html "<blockquote><strong>Exploration</strong>, qui > quoi</blockquote>\n<p>Les mechas dans le volcan deviennent instables, tout le monde doit se mobiliser pour les stabiliser.</p>\n<p>Les joueurs doivent reproduire ce qu'ils ont vu dans le cockpit pour dégager tous les trolls et gobelins qui sont sur le méchas.<br>\nS'ils ne sont pas assez précis, le méchas explose mais tue quand même les ennemis sauf 1.</p>"}

	</section>
{/snippet}

{#snippet _CombatTroll()}
	<section>
		<h4 id="3-combat-troll">{@html "3) Combat Troll"}</h4>
	{@html "<blockquote><strong>Combat</strong>, Arek, Dara > Attaque lourde</blockquote>\n<p>1 troll reste pour s'en prendre aux joueurs.</p>"}

	</section>
{/snippet}

{#snippet _ExploitationDesNains()}
	<section>
		<h4 id="4-exploitation-des-nains">{@html "4) Exploitation des nains"}</h4>
	{@html "<blockquote><strong>Interaction</strong>, qui > quoi</blockquote>\n<p>Ils sont tenus par les couilles, car ils savent que s'ils sortent les mecha du volcans, Sulimund sera rasé.<br>\nMais s'ils ne le font pas, les nains se feront chasser dans Nirina comme impies.</p>\n<p>C'est pour ça qu'ils boivent beaucoup, pour fêter ce qu'ils peuvent avant de tous y passer.</p>\n<p>C'est encore plus stressant en sachant qu'un clan de gobelin et de trolls rôde plus profondément dans le volcan.<br>\nIls ne peuvent pas s'en occuper car ils doivent gérer les mechas.</p>"}

	</section>
{/snippet}

{#snippet _PistageDeLaCrature()}
	<section>
		<h4 id="5-pistage-de-la-crature">{@html "5) Pistage de la créature"}</h4>
	{@html "<blockquote><strong>Exploration</strong>, Haelrak, Hazdaim, Léoric > Attaque légère</blockquote>\n<p>En descendant dans les galeries, ils combattent 4 gobelins et jusqu'à arriver à un wyrm de magma en train de sucer la lave du volcan.</p>\n<p>Les gobelins l'idolâtrent car il pond des trolls assez régulièrement.</p>\n<p>S'ils tuent le wyrm, les gobelins mourront, mais la lave ne sera plus canalisée et le volcan risque de se réveiller.</p>"}

	</section>
{/snippet}

{#snippet _CombatWyrm_()}
	<section>
		<h4 id="6-combat-wyrm-">{@html "6) Combat Wyrm ?"}</h4>
	{@html "<blockquote><strong>Combat</strong>, Zveindel > Magie</blockquote>\n<p>1 Wyrm (sauf s'ils ne veulent pas l'attaquer)</p>\n<p>Les ennemis reviennent en boucle tant qu'ils n'ont pas tué le wyrm/ fui les profondeurs :<br>\n2 Trolls contre Dara et Arek<br>\n4 gobelins contre Haelrak et Hazdaim</p>"}

	</section>
{/snippet}

{#snippet _LesJoueursSontRecherchs()}
	<section>
		<h4 id="7-les-joueurs-sont-recherchs">{@html "7) Les joueurs sont recherchés"}</h4>
	{@html "<blockquote><strong>Interaction</strong>, qui > quoi</blockquote>\n<p>Si le wyrm a été combattu :<br>\n\tla ville des nains a été saccagée, il y a des corps partout, et la lave monte.<br>\n\tEn sortant du volcan, ils croisent quelques survivants en train de fuir et Kigan blessé, qui leur dit que le réveil du volcan a détruit les mechas et qu'un duo de paladins est venu tuer ce qu'il pouvait et prendre des enfants de prière.</p>\n<p><del>Sinon :<br>\nEn retournant auprès des nains, ils croisent un duo de paladins.</del></p>\n<ul><li>~~Si le mecha a été détruit, les paladins prennent les familles d'Ilmar et de Kigan pour devenir enfants de prière, et pour que ça leur serve de leçon d'abîmer les propriétés du maître.</li></ul>\n<p>Quand les joueurs les retrouvent, ils leur disent de partir, avant qu'ils ne décident d'appeler le duo pour les échanger contre leur famille.~~</p>\n<ul><li><del>Si le mecha n'a pas été détruit, ils demandent qu'on leur amène les nouveaux enfants de prière, à qui il manque les yeux et dont l'extrémité des doigts est ouverte.</del></li></ul>"}

	</section>
{/snippet}

{#snippet _LeMasque_()}
	<section>
		<h4 id="8-le-masque-">{@html "8) Le masque ?"}</h4>
	{@html "<p>Ils font un rêve où ils sont dans la dimension du masque, mais plus personne n'est pendu au plafond, tout est noir, silencieux.</p>\n<p>S'ils réussissent perception, ils perçoivent une silhouette humaine avec des cornes.</p>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego 21</li><li><input type=\"checkbox\" disabled checked> Loïc 16</li><li><input type=\"checkbox\" disabled checked> Lucas 9</li><li><input type=\"checkbox\" disabled checked> Michel 23</li><li><input type=\"checkbox\" disabled> Nolan 8</li><li><input type=\"checkbox\" disabled> Thomas 20</li><li><input type=\"checkbox\" disabled> William 7</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 19 - 23.01.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 19 - 23.01.26\" data-wiki-fragment=\"\">Arc 4 - 19 - 23.01.26</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 21 - 20.02.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 21 - 20.02.26\" data-wiki-fragment=\"\">Arc 4 - 21 - 20.02.26</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
