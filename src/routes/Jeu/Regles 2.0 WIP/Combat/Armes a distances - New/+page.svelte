<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "catgories",
          "text": "Catégories",
          "level": 2
      },
      {
          "id": "type",
          "text": "Type",
          "level": 3
      },
      {
          "id": "taille",
          "text": "Taille",
          "level": 3
      },
      {
          "id": "prcision",
          "text": "Précision",
          "level": 2
      },
      {
          "id": "effets-communs",
          "text": "Effets Communs",
          "level": 2
      },
      {
          "id": "munitions",
          "text": "Munitions",
          "level": 3
      },
      {
          "id": "effets-des-armes--corde",
          "text": "Effets des Armes à Corde",
          "level": 2
      },
      {
          "id": "effets-des-armes--feu",
          "text": "Effets des Armes à Feu",
          "level": 2
      },
      {
          "id": "incidents",
          "text": "Incidents",
          "level": 3
      },
      {
          "id": "propulsion",
          "text": "Propulsion",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Armes à distances - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Armes à distances - New</h1>
  </header>
  <div class="markdown-rendered">
		{@render catgories()}
		{@render prcision()}
		{@render effetsCommuns()}
		{@render effetsDesArmes_Corde()}
		{@render effetsDesArmes_Feu()}
  </div>
</article>

<LinkPreview />

{#snippet catgories()}
	<section>
		<h2 id="catgories">{@html applyBase("Catégories")}</h2>
	{@html renderMarkdown("> Dé + Modificateur >= DC --> Dégâts aux HP en déduisant la DR.\n> DC = AC + Modificateurs externes.\n")}
	{@render type()}
	{@render taille()}
	</section>
{/snippet}

{#snippet type()}
	<section>
		<h3 id="type">{@html applyBase("Type")}</h3>
	{@html renderMarkdown("> Les armes à distances sont perforantes.\n\n|                  |   Arme Courte    | Arme à Corde | Arme à Feu | Autre |\n| ---------------- | :--------------: | :----------: | :--------: | :---: |\n| **Dé de Tir**    |       2d4        |     2d8      |    2d12    |  1d6  |\n| **Dégats**       | Arme de mêlée /2 |      8       |     12     |   4   |\n| **Ignore la DR** |        -         |     20%      |     0%     |  0%   |\n| **Matériaux**    |        -         |      2       |     4      |   -   |\n\nLes Armes à Corde sont silencieuses par défaut, contrairement aux Armes à Feu qui déclenchent le combat une fois utilisées.\n")}

	</section>
{/snippet}

{#snippet taille()}
	<section>
		<h3 id="taille">{@html applyBase("Taille")}</h3>
	{@html renderMarkdown("> Modifie la façon d'utiliser l'arme.\n\n|                                                               |   Petit/ Léger    |      Normal      | Grand/ Lourd |\n| ------------------------------------------------------------- | :---------------: | :--------------: | :----------: |\n| **Multiplicateur de Propriétés**<br>(Dégâts, Ignorance de DR) |       x 0.5       |       x 1        |     x 2      |\n| **Modificateur**                                              | Dextérité(Ranger) | Dextérité\\|Force | Force(Monk)  |\n| **Rechargement**                                              |         -         |  1 Action Bonus  |   1 Action   |\n| **Distance Maximale**                                         |        10m        |       20m        |     40m      |\n| **Maniabilité**                                               | 1 Main (sauf Arc) |     2 Mains      |   2 Mains    |\n| **Matériaux**                                                 |        / 2        |        -         |     x 2      |\n| Arme à Corde                                                  |        Arc        |     Arbalète     |   Baliste    |\n| Arme à Feu                                                    |     Pistolet      |      Fusil       |    Canon     |\n\nSi le joueur tire au delà de la distance maximale, la DC augmente de 8.\n")}

	</section>
{/snippet}

{#snippet prcision()}
	<section>
		<h2 id="prcision">{@html applyBase("Précision")}</h2>
	{@html renderMarkdown("> La taille de la cible et les obstacles entre elle et le tireur altèrent la DC pour toucher.\n\n| Taille | Minuscule | Petit | Normal | Grand | Géant | Gargantuesque |\n| ------ | --------- | ----- | ------ | ----- | ----- | ------------- |\n| **DC** | +4        | +2    | 0      | -2    | -4    | -8            |\n\n| Couvert | Léger | Moyen | Total      |\n| ------- | ----- | ----- | ---------- |\n| **DC**  | +2    | +4    | Impossible |\n")}

	</section>
{/snippet}

{#snippet effetsCommuns()}
	<section>
		<h2 id="effets-communs">{@html applyBase("Effets Communs")}</h2>

	{@render munitions()}
	</section>
{/snippet}

{#snippet munitions()}
	<section>
		<h3 id="munitions">{@html applyBase("Munitions")}</h3>
	{@html renderMarkdown("> Le nombre de munition est considéré comme suffisant pour 1 expédition, sauf pour :\n> - les boulets qui sont achetés à l'unité,\n> - les flèches/carreaux qui se récupèrent après le combat.\n\n| Type              |       Prix/ unité |                                                  Propriétés                                                  |\n| ----------------- | ----------------: | :----------------------------------------------------------------------------------------------------------: |\n| Flèches\\|Carreaux | 1 lingot de métal |                           VS (selon les matériaux de la pointe)<br>*Armes à Corde*                           |\n| Plomb             |             40 pc |                                                  Antimagie                                                   |\n| Crystal           |              1 po |                           <a href=\"%%BASE%%/Jeu/Regles/Statuts/Afflictions#surcharge\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Afflictions\" data-wiki-fragment=\"Surcharge%5C\">Surcharge</a><br>1 fois par cible                           |\n| Shrapnel          |             20 pa | Divise les dégâts par cibles touchées<br>(arrondi vers le bas)<br>Distance max : 10m<br>Angle d'action : 90° |\n| Boulet            |             50 pa |                 La cible touchée est <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#couch\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Couch%C3%A9%5C\">Couchée</a><br>*Arme à feu(Lourde)*                  |\n\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Enchantements a Distance"} fragment={""} />

	</section>
{/snippet}

{#snippet effetsDesArmes_Corde()}
	<section>
		<h2 id="effets-des-armes--corde">{@html applyBase("Effets des Armes à Corde")}</h2>
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles"} fragment={""} />

	</section>
{/snippet}

{#snippet effetsDesArmes_Feu()}
	<section>
		<h2 id="effets-des-armes--feu">{@html applyBase("Effets des Armes à Feu")}</h2>

	{@render incidents()}
	{@render propulsion()}
	</section>
{/snippet}

{#snippet incidents()}
	<section>
		<h3 id="incidents">{@html applyBase("Incidents")}</h3>
	{@html renderMarkdown("> Les armes à feu peuvent se détériorer à chaque tir si elles font un double 1.\n\nLe joueur doit lancer 1d10 pour savoir quel incident se produit sur son arme.\n\n| Dé   | Résultat  | Conséquence                              | Résolution                |\n| ---- | --------- | ---------------------------------------- | ------------------------- |\n| 7-10 | Enraillée | Impossible de tirer                      | 1 Action Bonus            |\n| 4-6  | Déréglée  | DC +4                                    | 1 Action                  |\n| 2-3  | Tordue    | DC +8                                    | 1 Action + 1 Action Bonus |\n| 1    | Implosion | Le tireur subit 50% des dégâts de l'arme | ---                       |\n")}

	</section>
{/snippet}

{#snippet propulsion()}
	<section>
		<h3 id="propulsion">{@html applyBase("Propulsion")}</h3>
	{@html renderMarkdown("> Altère la technologie qui propulse les munitions, ce qui influe ses dégâts et ses propriétés.\n\n| Type         | Dégâts<br>(Multiplicateur) |  Prix | Propriétés                                                                                          |\n| ------------ | :------------------------: | ----: | --------------------------------------------------------------------------------------------------- |\n| Poudre noire |             1              | 50 pa | Bruyant et lumineux. Attire les ennemis proches (1km)                                               |\n| Air comprimé |             .5             |  2 po | Silencieux. Traverse plusieurs cibles en ligne droite.<br>Aucun incident possible.                  |\n| Magnétique   |           1.5-2            |  5 po | Bruyant. Double la portée maximale.<br>2DMG dans la portée de base<br>1.5DMG dans la portée doublée |\n| Magique      |            .75             |  8 po | Consomme de la magie plutôt que des munitions                                                       |")}

	</section>
{/snippet}
