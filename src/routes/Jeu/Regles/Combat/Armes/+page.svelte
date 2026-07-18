<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "dgts",
          "text": "Dégâts",
          "level": 2
      },
      {
          "id": "armes",
          "text": "Armes",
          "level": 3
      },
      {
          "id": "modifications",
          "text": "Modifications",
          "level": 3
      },
      {
          "id": "enchantements",
          "text": "Enchantements",
          "level": 3
      },
      {
          "id": "spcificits",
          "text": "Spécificités",
          "level": 3
      },
      {
          "id": "matriaux",
          "text": "Matériaux",
          "level": 2
      },
      {
          "id": "principaux",
          "text": "Principaux",
          "level": 3
      },
      {
          "id": "revtements",
          "text": "Revêtements",
          "level": 4
      },
      {
          "id": "munitions",
          "text": "Munitions",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Armes</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Armes</h1>
  </header>
  <div class="markdown-rendered">
		{@render dgts()}
		{@render matriaux()}
  </div>
</article>

<LinkPreview />

{#snippet dgts()}
	<section>
		<h2 id="dgts">{@html applyBase("Dégâts")}</h2>
	{@html renderMarkdown(">L'arme permet de se focaliser sur les dégâts rapides (vs AC) ou les dégâts lourds (vs DR).\n>Utiliser la faiblesse de l'ennemi ne prend en compte que 50% de sa DR.\n\nExemple avec X = 12 (Orichalque)\n\n| Modifications |            Courte            |           1 Main            |           2 Mains           |            Haste             |             Arcs             |          Arbalètes          |         Armes à feu         |\n| :------------ | :--------------------------: | :-------------------------: | :-------------------------: | :--------------------------: | :--------------------------: | :-------------------------: | :-------------------------: |\n| Léger/ Petit  |              -               | 3d8 +12<br>[15-36 -> 22-60] | 4d4 +18<br>[22-34 -> 25-50] |  4d6 +6<br>[10-30 -> 15-54]  |              -               | 3d8 +12<br>[15-36 -> 22-60] | 4d4 +18<br>[22-34 -> 25-50] |\n| Normal        | 2d12 +12<br>[14-36 -> 25-60] | 2d8 +24<br>[26-40 -> 33-56] | 3d4 +36<br>[39-48 -> 42-60] | 3d6 +12<br>[15-30 -> 20-48]  | 2d12 +12<br>[14-36 -> 25-60] | 2d8 +24<br>[26-40 -> 33-56] | 3d4 +36<br>[39-48 -> 42-60] |\n| Lourd/ Grand  | 1d12 +24<br>[25-36 -> 38-60] | 1d8 +36<br>[37-44 -> 45-52] | 2d4 +48<br>[50-56 -> 53-64] | 2d6 +24<br>[26-36 -> 31-48]  | 1d12 +24<br>[25-36 -> 38-60] | 1d8 +36<br>[37-44 -> 45-52] | 2d4 +48<br>[50-56 -> 53-64] |\n| Colossal      |              -               |              -              | 1d4 +72<br>[73-76 -> 77-80] | 1d6 + 48<br>[49-54 -> 55-60] |              -               |              -              | 1d4 +72<br>[73-76 -> 77-80] |\n\nCritiques -> Permet de relancer un dé qui a fait le maximum pour cumuler les points\nLe nombre de relance disponible de l'enchantement de Nirina\nLe maximum de relance est égal au nombre de dés disponibles (ex: 3d4 = 3dés de relance max)\n")}
	{@render armes()}
	{@render modifications()}
	{@render enchantements()}
	{@render spcificits()}
	</section>
{/snippet}

{#snippet armes()}
	<section>
		<h3 id="armes">{@html applyBase("Armes")}</h3>
	{@html renderMarkdown(">Mêlée: Dé >= AC -> DR - (dé +X) = Dégâts au HP\n>? Distance ? : 1d20 +Dex +Maîtrise >= AC -> DR - dégâts = Dégâts au HP\n>X = Matériau\n\nSi le dé de dégâts atteint l'AC de la cible, on déduit de DR la somme du dé et de X, et ce qui reste réduit les HP.\n\n| Catégorie   | Dégâts  | Prix main d'œuvre |                            Propriétés                            | Matériaux |\n| ----------- | ------- | ----------------: | :--------------------------------------------------------------: | --------: |\n| Courte      | 2d12 +X |              5 pa | <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lger\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"L%C3%A9ger%5C\">Léger</a><br><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#critique\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Critique%5C\">Critique</a> |         1 |\n| 1 Main      | 2d8 +2X |             10 pa |                   <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lger\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"L%C3%A9ger%5C\">Léger</a>                    |         2 |\n| 2 Mains     | 3d4 +3X |             20 pa |                               ---                                |         3 |\n| Haste       | 3d6 +X  |             40 pa |                  <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#porte\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Port%C3%A9e%5C\">Portée</a>                   |         5 |\n| Arcs        | 2d12 +X |  5 * Puissance pa |                               ---                                |         1 |\n| Arbalètes   | 2d8 +2X | 20 * Puissance pa |                    <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lent\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Lent%5C\">Lent</a>                     |         2 |\n| Armes à feu | 3d4 +3X |  1 * Puissance po |                <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#instable\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Instable%5C\">Instable</a>                 |         3 |\n")}

	</section>
{/snippet}

{#snippet modifications()}
	<section>
		<h3 id="modifications">{@html applyBase("Modifications")}</h3>
	{@html renderMarkdown("\n| Léger/ Petit                    | Normal | Lourd/ Grand                | Colossal                    |\n| :------------------------------ | :----: | :-------------------------- | :-------------------------- |\n| -1 Matériau                     |  ---   | +1 Matériaux                | +3 Matériaux                |\n| Dextérité > 14 pour s'en servir |  ---   | Force > 14 pour s'en servir | Force > 17 pour s'en servir |\n| +1 dé +Dextérité(Ranger), X/2   |  ---   | -1 dé, +X +Force(Monk)      | -2 dés, +3(X +Force(Monk))  |\n")}

	</section>
{/snippet}

{#snippet enchantements()}
	<section>
		<h3 id="enchantements">{@html applyBase("Enchantements")}</h3>
	{@html renderMarkdown("\nEnchanter une arme permet d'augmenter son dé de dégâts.\n\nSi une arme est en métal, seuls les <a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#nirina\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Nirina\">Enchantements de Nirina</a> sont efficaces. -> Permettent de faire des coups critiques\n\nSi une arme est en os, seul les <a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#ovliin\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Ovliin\">Enchantements d'Ovliin</a> sont efficaces (en plus de lui ajouter un effet magique).\n")}

	</section>
{/snippet}

{#snippet spcificits()}
	<section>
		<h3 id="spcificits">{@html applyBase("Spécificités")}</h3>
	{@html renderMarkdown("\n|                 |         Styles          |            Précision            |\n| --------------- | :---------------------: | :-----------------------------: |\n| **Type d'arme** |     Armes de mêlée      |        Armes à distance         |\n| **Condition**   |   Niveau de maîtrise    | Jet supérieur au double de l'AC |\n| **Résultat**    | Multiplicateur du style |        Double les dégâts        |\n")}

	</section>
{/snippet}

{#snippet matriaux()}
	<section>
		<h2 id="matriaux">{@html applyBase("Matériaux")}</h2>
	{@html renderMarkdown(">La propriété VS (il faudra choisir) :\n>- [ ] ajoute un dé de dégâts lorsque l'attaque touche le bon type de cible (ne s'applique pas sur les armes à distance),\n>- [ ] double les dégâts finaux,\n>- [ ] annule la DR,\n>- [ ] divise la DR par 2.\n")}
	{@render principaux()}
	{@render munitions()}
	</section>
{/snippet}

{#snippet principaux()}
	<section>
		<h3 id="principaux">{@html applyBase("Principaux")}</h3>
	{@html renderMarkdown("\n**Effets**\n    + Se répare dans une forge/ avec la magie de métal\n\n| Matériau   |   Prix/ unité |      Dégâts      |          Propriétés           | Poids/ unité |\n| ---------- | ------------: | :--------------: | :---------------------------: | -----------: |\n| Os         | 5 ^ rareté pa | rareté (1-5) + 2 | Enchantements élémentaires x2 |      0.75 kg |\n| Fonte      |          2 pa |        3         |        VS Nécrophages         |       1.5 kg |\n| Fer        |         10 pa |        4         |           VS Bêtes            |         1 kg |\n| Bronze     |         25 pa |        5         |        VS Insectoides         |       1.5 kg |\n| Acier      |         50 pa |        6         |          VS Mutants           |         1 kg |\n| Titane     |          1 po |        7         |        VS Invocations         |       1.5 kg |\n| Mythril    |          5 po |        8         |        VS Elementaires        |         1 kg |\n| Palladium  |          7 po |        10        |           VS Anges            |         2 kg |\n| Adamantite |          7 po |        10        |         VS Draconides         |         2 kg |\n| Orichalque |         10 po |        12        |           VS Démons           |       2.5 kg |\n")}
	{@render revtements()}
	</section>
{/snippet}

{#snippet revtements()}
	<section>
		<h4 id="revtements">{@html applyBase("Revêtements")}</h4>
	{@html renderMarkdown(">Le revêtement retire les propriétés du matériau principal et applique le sien à la place.\n\n| Matériau  | Prix/ unité |  Propriétés   | Poids/ unité |\n| --------- | ----------: | :-----------: | -----------: |\n| Cuivre    |       50 pc |  VS Plantes   |         2 kg |\n| Argent    |       50 pa |  VS Hybrides  |         2 kg |\n| Sombronce |        1 po |  VS Naturels  |         1 kg |\n| Electrum  |       10 po |  VS Magiques  |         2 kg |\n| Or        |       50 po | VS Mythiques  |         4 kg |\n| Platine   |      500 po | Vs Humanoides |         3 kg |\n")}

	</section>
{/snippet}

{#snippet munitions()}
	<section>
		<h3 id="munitions">{@html applyBase("Munitions")}</h3>
	{@html renderMarkdown("\nLes munitions utilisées avec une arme à distance possèdent leur propre propriété.\n\n| Type       | Prix/ unité | Arme                    |                         Propriétés                         | Nombre de munition/ matériau |\n| ---------- | ----------: | :---------------------- | :--------------------------------------------------------: | :--------------------------: |\n| Minerai    |          -- | Tout                    |                            ---                             |           2d4 +12            |\n| Plomb      |        5 pa | Tout                    |                         Antimagie                          |           2d6 + 8            |\n| Crystal    |        1 po | Tout                    |    <a href=\"%%BASE%%/Jeu/Regles/Statuts/Afflictions#surcharge\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Afflictions\" data-wiki-fragment=\"Surcharge%5C\">Surcharge</a><br>5 munitions     |           2d4 + 2            |\n| Potion     |          -- | Tout                    |                Zone d'effet de 5ft de rayon                |              1               |\n| Tissu      |       10 pa | Armes à corde           |                          Enflammé                          |           2d6 + 8            |\n| Obsidienne |             | Armes à corde           |           <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lacration\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Lac%C3%A9ration%5C\">Lacération</a>            |           2d6 + 8            |\n| Shrapnel   |       20 pa | Armes à feu             | <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lacration\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Lac%C3%A9ration%5C\">Lacération</a><br>Portée Max = 10ft |            2d4 +4            |\n| Boulet     |       50 pa | Armes à feu<br>(lourde) |    La cible touchée est <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#couch\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Couch%C3%A9%5C\">Couchée</a>     |              1               |")}

	</section>
{/snippet}
