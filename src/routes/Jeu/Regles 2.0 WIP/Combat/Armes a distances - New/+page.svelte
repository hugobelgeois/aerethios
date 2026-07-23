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
          "id": "maniabilit",
          "text": "Maniabilité",
          "level": 3
      },
      {
          "id": "dgts",
          "text": "Dégâts",
          "level": 3
      },
      {
          "id": "prcision",
          "text": "Précision",
          "level": 2
      },
      {
          "id": "distance-taille-et-couvert",
          "text": "Distance, Taille et Couvert",
          "level": 3
      },
      {
          "id": "effets-des-armes--feu",
          "text": "Effets des Armes à feu",
          "level": 2
      },
      {
          "id": "incidents",
          "text": "Incidents",
          "level": 3
      },
      {
          "id": "munitions",
          "text": "Munitions",
          "level": 3
      },
      {
          "id": "propulsion",
          "text": "Propulsion",
          "level": 3
      },
      {
          "id": "effets-des-arcs-et-arbaltes",
          "text": "Effets des Arcs et Arbalètes",
          "level": 2
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
		{@render effetsDesArmes_Feu()}
		{@render effetsDesArcsEtArbaltes()}
  </div>
</article>

<LinkPreview />

{#snippet catgories()}
	<section>
		<h2 id="catgories">{@html applyBase("Catégories")}</h2>
	{@html renderMarkdown("> Dé + Modificateur >= DR --> Dégâts aux HP en déduisant la DR.\n> Une réussite critique (tous les dés au max) ignore la DR.\n")}
	{@render type()}
	{@render maniabilit()}
	{@render dgts()}
	</section>
{/snippet}

{#snippet type()}
	<section>
		<h3 id="type">{@html applyBase("Type")}</h3>
	{@html renderMarkdown("> Le prix de la main d'œuvre (en plus des matériaux) est généralement de 5pa/jour.\n> Les armes à distances sont perforantes.\n\n| Catégorie  | Ignore la DR | Précision |   Recharge   | Durée de fabrication |\n| ---------- | :----------: | :-------: | :----------: | -------------------: |\n| Arc        |     25%      |     0     |      -       |                  2 j |\n| Arbalète   |     50%      |   -4 DC   | Action Bonus |                  4 j |\n| Arme à feu |     75%      |   +4 DC   | Action Bonus |                  8 j |\n")}

	</section>
{/snippet}

{#snippet maniabilit()}
	<section>
		<h3 id="maniabilit">{@html applyBase("Maniabilité")}</h3>
	{@html renderMarkdown("> Influe la taille et les dégâts.\n\n|                  |   Petit/ Léger    |      Normal      | Grand/ Lourd |\n| ---------------- | :---------------: | :--------------: | :----------: |\n| **Dés**          |       2d10        |       2d8        |     2d6      |\n| **Fabrication**  |         -         |      x1.5 j      |     x2 j     |\n| **Modificateur** | Dextérité(Ranger) | Dextérité\\|Force | Force(Monk)  |\n| **Posture**      | 1 Main (sauf Arc) |     2 Mains      |   2 Mains    |\n")}

	</section>
{/snippet}

{#snippet dgts()}
	<section>
		<h3 id="dgts">{@html applyBase("Dégâts")}</h3>
	{@html renderMarkdown("\n| Dégâts | Arc | Arbalète | Arme à feu |\n| ------ | :-: | :------: | :--------: |\n| Petit  |  6  |    10    |     18     |\n| Normal |  8  |    14    |     26     |\n| Grand  | 10  |    18    |     34     |\n")}

	</section>
{/snippet}

{#snippet prcision()}
	<section>
		<h2 id="prcision">{@html applyBase("Précision")}</h2>
	{@html renderMarkdown("> Les armes à distance ignorent l'AC de la cible, car les tirs sont trop rapides que pour esquiver.\n")}
	{@render distanceTailleEtCouvert()}
	</section>
{/snippet}

{#snippet distanceTailleEtCouvert()}
	<section>
		<h3 id="distance-taille-et-couvert">{@html applyBase("Distance, Taille et Couvert")}</h3>
	{@html renderMarkdown("> La taille et la distance de la cible, ainsi que les obstacles entre elle et le tireur, changent la difficulté du jet pour toucher.\n\n| Distance | 2m  | 5m  | 10m | 15m | 20m | 25m |\n| -------- | --- | --- | --- | --- | --- | --- |\n| **DC**   | +2  | +4  | +8  | +12 | +16 | +20 |\n\n| Taille | Minuscule | Petit | Normal | Grand | Géant | Gargantuesque |\n| ------ | --------- | ----- | ------ | ----- | ----- | ------------- |\n| **DC** | +8        | +4    | 0      | -4    | -8    | -12           |\n\n| Couvert | Léger | Moyen | Total      |\n| ------- | ----- | ----- | ---------- |\n| **DC**  | +2    | +4    | Impossible |\n")}

	</section>
{/snippet}

{#snippet effetsDesArmes_Feu()}
	<section>
		<h2 id="effets-des-armes--feu">{@html applyBase("Effets des Armes à feu")}</h2>

	{@render incidents()}
	{@render munitions()}
	{@render propulsion()}
	</section>
{/snippet}

{#snippet incidents()}
	<section>
		<h3 id="incidents">{@html applyBase("Incidents")}</h3>
	{@html renderMarkdown("> Les armes à feu peuvent se détériorer à chaque tir si elles font un double 1.\n\nLe joueur doit lancer 1d10 pour savoir quel incident se produit sur son arme.\n\n| Dé   | Résultat  | Conséquence                            | Résolution                |\n| ---- | --------- | -------------------------------------- | ------------------------- |\n| 7-10 | Enraillée | Impossible de tirer                    | 1 Action Bonus            |\n| 4-6  | Déréglée  | DC +4                                  | 1 Action                  |\n| 2-3  | Tordue    | DC +8                                  | 1 Action + 1 Action Bonus |\n| 1    | Implosion | Le tireur prend 10+2d8 dégâts à ses HP | ---                       |\n")}

	</section>
{/snippet}

{#snippet munitions()}
	<section>
		<h3 id="munitions">{@html applyBase("Munitions")}</h3>
	{@html renderMarkdown("> Les munitions ne s'appliquent qu'aux Armes à feu.\n> Le nombre de munition est considéré comme suffisant pour 1 expédition, sauf pour les potions et les boulets qui sont achetés à l'unité.\n\n| Type              | Prix/ unité |                                Propriétés                                 |\n| ----------------- | ----------: | :-----------------------------------------------------------------------: |\n| Flèches\\|Carreaux |       50 pc |                                    ---                                    |\n| Plomb             |       40 pc |                                 Antimagie                                 |\n| Crystal           |        1 po |         <a href=\"%%BASE%%/Jeu/Regles/Statuts/Afflictions#surcharge\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Afflictions\" data-wiki-fragment=\"Surcharge%5C\">Surcharge</a><br>1 fois par cible          |\n| Shrapnel          |       20 pa |         <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lacration\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Lac%C3%A9ration%5C\">Lacération</a><br>Portée Max = 10m         |\n| Potion            |          -- |                        Zone d'effet de 5m de rayon                        |\n| Boulet            |       50 pa | La cible touchée est <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#couch\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Couch%C3%A9%5C\">Couchée</a><br>Arme à feu(Lourde) |\n")}

	</section>
{/snippet}

{#snippet propulsion()}
	<section>
		<h3 id="propulsion">{@html applyBase("Propulsion")}</h3>
	{@html renderMarkdown("> Altère la technologie qui propulse les munitions, ce qui influe ses dégâts et ses propriétés.\n\n| Type         | Dégâts<br>(Multiplicateur) |  Prix | Propriétés                                             |\n| ------------ | :------------------------: | ----: | ------------------------------------------------------ |\n| Poudre noire |            1.25            | 50 pa | Bruyant et lumineux. Attire les ennemis proches (1km)  |\n| Air comprimé |            .75             |  2 po | Silencieux                                             |\n| Magnétique   |             2              |  5 po | Bruyant. Faire 1 sur un des dés déclenches un incident |\n| Magique      |             1              |  8 po | Consomme de la magie plutôt que des munitions          |\n")}

	</section>
{/snippet}

{#snippet effetsDesArcsEtArbaltes()}
	<section>
		<h2 id="effets-des-arcs-et-arbaltes">{@html applyBase("Effets des Arcs et Arbalètes")}</h2>
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles"} fragment={""} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Enchantements a Distance"} fragment={""} />

	</section>
{/snippet}
