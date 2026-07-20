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
	{@html renderMarkdown("> Dé + Modificateur >= DR --> Dégâts aux HP en déduisant la DR.\r\n> Une réussite critique (tous les dés au max) ignore la DR.\r\n\r")}
	{@render type()}
	{@render maniabilit()}
	{@render dgts()}
	</section>
{/snippet}

{#snippet type()}
	<section>
		<h3 id="type">{@html applyBase("Type")}</h3>
	{@html renderMarkdown("> Le prix de la main d'œuvre (en plus des matériaux) est généralement de 5pa/jour.\r\n> Les armes à distances sont perforantes.\r\n\r\n| Catégorie  | Ignore la DR | Précision |   Recharge   | Durée de fabrication |\r\n| ---------- | :----------: | :-------: | :----------: | -------------------: |\r\n| Arc        |     25%      |     0     |      -       |                  2 j |\r\n| Arbalète   |     50%      |   -4 DC   | Action Bonus |                  4 j |\r\n| Arme à feu |     75%      |   +4 DC   | Action Bonus |                  8 j |\r\n\r")}

	</section>
{/snippet}

{#snippet maniabilit()}
	<section>
		<h3 id="maniabilit">{@html applyBase("Maniabilité")}</h3>
	{@html renderMarkdown("> Influe la taille et les dégâts.\r\n\r\n|                  |   Petit/ Léger    |      Normal      | Grand/ Lourd |\r\n| ---------------- | :---------------: | :--------------: | :----------: |\r\n| **Dés**          |       2d10        |       2d8        |     2d6      |\r\n| **Fabrication**  |         -         |      x1.5 j      |     x2 j     |\r\n| **Modificateur** | Dextérité(Ranger) | Dextérité\\|Force | Force(Monk)  |\r\n| **Posture**      | 1 Main (sauf Arc) |     2 Mains      |   2 Mains    |\r\n\r")}

	</section>
{/snippet}

{#snippet dgts()}
	<section>
		<h3 id="dgts">{@html applyBase("Dégâts")}</h3>
	{@html renderMarkdown("\r\n| Dégâts | Arc | Arbalète | Arme à feu |\r\n| ------ | :-: | :------: | :--------: |\r\n| Petit  |  6  |    10    |     18     |\r\n| Normal |  8  |    14    |     26     |\r\n| Grand  | 10  |    18    |     34     |\r\n\r")}

	</section>
{/snippet}

{#snippet prcision()}
	<section>
		<h2 id="prcision">{@html applyBase("Précision")}</h2>
	{@html renderMarkdown("> Les armes à distance ignorent l'AC de la cible, car les tirs sont trop rapides que pour esquiver.\r\n\r")}
	{@render distanceTailleEtCouvert()}
	</section>
{/snippet}

{#snippet distanceTailleEtCouvert()}
	<section>
		<h3 id="distance-taille-et-couvert">{@html applyBase("Distance, Taille et Couvert")}</h3>
	{@html renderMarkdown("> La taille et la distance de la cible, ainsi que les obstacles entre elle et le tireur, changent la difficulté du jet pour toucher.\r\n\r\n| Distance | 2m  | 5m  | 10m | 15m | 20m | 25m |\r\n| -------- | --- | --- | --- | --- | --- | --- |\r\n| **DC**   | +2  | +4  | +8  | +12 | +16 | +20 |\r\n\r\n| Taille | Minuscule | Petit | Normal | Grand | Géant | Gargantuesque |\r\n| ------ | --------- | ----- | ------ | ----- | ----- | ------------- |\r\n| **DC** | +8        | +4    | 0      | -4    | -8    | -12           |\r\n\r\n| Couvert | Léger | Moyen | Total      |\r\n| ------- | ----- | ----- | ---------- |\r\n| **DC**  | +2    | +4    | Impossible |\r\n\r")}

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
	{@html renderMarkdown("> Les armes à feu peuvent se détériorer à chaque tir si elles font un double 1.\r\n\r\nLe joueur doit lancer 1d10 pour savoir quel incident se produit sur son arme.\r\n\r\n| Dé   | Résultat  | Conséquence                            | Résolution                |\r\n| ---- | --------- | -------------------------------------- | ------------------------- |\r\n| 7-10 | Enraillée | Impossible de tirer                    | 1 Action Bonus            |\r\n| 4-6  | Déréglée  | DC +4                                  | 1 Action                  |\r\n| 2-3  | Tordue    | DC +8                                  | 1 Action + 1 Action Bonus |\r\n| 1    | Implosion | Le tireur prend 10+2d8 dégâts à ses HP | ---                       |\r\n\r")}

	</section>
{/snippet}

{#snippet munitions()}
	<section>
		<h3 id="munitions">{@html applyBase("Munitions")}</h3>
	{@html renderMarkdown("> Les munitions ne s'appliquent qu'aux Armes à feu.\r\n> Le nombre de munition est considéré comme suffisant pour 1 expédition, sauf pour les potions et les boulets qui sont achetés à l'unité.\r\n\r\n| Type              | Prix/ unité |                                Propriétés                                 |\r\n| ----------------- | ----------: | :-----------------------------------------------------------------------: |\r\n| Flèches\\|Carreaux |       50 pc |                                    ---                                    |\r\n| Plomb             |       40 pc |                                 Antimagie                                 |\r\n| Crystal           |        1 po |         <a href=\"%%BASE%%/Jeu/Regles/Statuts/Afflictions#surcharge\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Afflictions\" data-wiki-fragment=\"Surcharge%5C\">Surcharge</a><br>1 fois par cible          |\r\n| Shrapnel          |       20 pa |         <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lacration\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Lac%C3%A9ration%5C\">Lacération</a><br>Portée Max = 10m         |\r\n| Potion            |          -- |                        Zone d'effet de 5m de rayon                        |\r\n| Boulet            |       50 pa | La cible touchée est <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#couch\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Couch%C3%A9%5C\">Couchée</a><br>Arme à feu(Lourde) |\r\n\r")}

	</section>
{/snippet}

{#snippet propulsion()}
	<section>
		<h3 id="propulsion">{@html applyBase("Propulsion")}</h3>
	{@html renderMarkdown("> Altère la technologie qui propulse les munitions, ce qui influe ses dégâts et ses propriétés.\r\n\r\n| Type         | Dégâts<br>(Multiplicateur) |  Prix | Propriétés                                             |\r\n| ------------ | :------------------------: | ----: | ------------------------------------------------------ |\r\n| Poudre noire |            1.25            | 50 pa | Bruyant et lumineux. Attire les ennemis proches (1km)  |\r\n| Air comprimé |            .75             |  2 po | Silencieux                                             |\r\n| Magnétique   |             2              |  5 po | Bruyant. Faire 1 sur un des dés déclenches un incident |\r\n| Magique      |             1              |  8 po | Consomme de la magie plutôt que des munitions          |\r\n\r")}

	</section>
{/snippet}

{#snippet effetsDesArcsEtArbaltes()}
	<section>
		<h2 id="effets-des-arcs-et-arbaltes">{@html applyBase("Effets des Arcs et Arbalètes")}</h2>
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles"} fragment={"Huiles"} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles"} fragment={"Enchantements d'Arme à distance"} />

	</section>
{/snippet}
