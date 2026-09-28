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
          "id": "effets-communs",
          "text": "Effets Communs",
          "level": 2
      },
      {
          "id": "couvert",
          "text": "Couvert",
          "level": 3
      },
      {
          "id": "raret",
          "text": "Rareté",
          "level": 3
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
		{@render effetsCommuns()}
		{@render effetsDesArmes_Corde()}
		{@render effetsDesArmes_Feu()}
  </div>
</article>

<LinkPreview />

{#snippet catgories()}
	<section>
		<h2 id="catgories">{@html applyBase("Catégories")}</h2>
	{@html renderMarkdown("> Dé + Modificateur >= DC → Dégâts aux HP\n> DC = AC + Couvert.\n")}
	{@render type()}
	{@render taille()}
	</section>
{/snippet}

{#snippet type()}
	<section>
		<h3 id="type">{@html applyBase("Type")}</h3>
	{@html renderMarkdown("> Les armes à distances sont perforantes.\n\n|                | Autre | Arme à Corde | Arme à Feu |\n| -------------- | :---: | :----------: | :--------: |\n| **Dégats**     | x 0.5 |      -       |    x 2     |\n| **Silencieux** |  Oui  |     Oui      |    Non     |\n\nUne arme silencieuse ne déclenche pas le combat si la cible est tuée sur le champ et si personne ne la voit mourir.\n")}

	</section>
{/snippet}

{#snippet taille()}
	<section>
		<h3 id="taille">{@html applyBase("Taille")}</h3>
	{@html renderMarkdown("> Modifie la façon d'utiliser l'arme.\n\n|                         |            Petit/ Léger            |           Normal           |      Grand/ Lourd      |\n| ----------------------- | :--------------------------------: | :------------------------: | :--------------------: |\n| **Dé**                  |    2d6 (+ Dextérité(Bretteur))     | 2d8 (+ Dextérité \\| Force) | 2d6 (+ Force(Barbare)) |\n| **Dégâts**              |                 4                  |             8              |           12           |\n| **Rechargement**        |                 -                  |       1 Action Bonus       |        1 Action        |\n| **Distance Maximale**   |                10m                 |            20m             |          40m           |\n| **Maniabilité**         | 2 Mains (Arc)<br>1 Main (Pistolet) |          2 Mains           |        2 Mains         |\n| **Matériaux**           |                 1                  |             2              |           4            |\n| Arme à Corde (exemples) |                Arc                 |          Arbalète          |        Baliste         |\n| Arme à Feu (exemples)   |              Pistolet              |           Fusil            |         Canon          |\n\nSi le joueur tire au delà de la distance maximale, la DC augmente de 8.\n")}

	</section>
{/snippet}

{#snippet effetsCommuns()}
	<section>
		<h2 id="effets-communs">{@html applyBase("Effets Communs")}</h2>

	{@render couvert()}
	{@render raret()}
	{@render munitions()}
	</section>
{/snippet}

{#snippet couvert()}
	<section>
		<h3 id="couvert">{@html applyBase("Couvert")}</h3>
	{@html renderMarkdown("> Les obstacles entre la cible et le tireur altèrent la DC.\n\n|        | 0%  | 50% | 100%       |\n| ------ | --- | --- | ---------- |\n| **DC** | -   | +5  | Impossible |\n")}

	</section>
{/snippet}

{#snippet raret()}
	<section>
		<h3 id="raret">{@html applyBase("Rareté")}</h3>
	{@html renderMarkdown("> Augmente la valeur maximale utilisable des modificateurs.\n\n|                 | Déchet | Commun | Peu Commun | Rare | Légendaire |\n| --------------- | ------ | ------ | ---------- | ---- | ---------- |\n| **Normal**      | 1      | 2      | 3          | 4    | 5          |\n| **Petit/Grand** | 2      | 4      | 6          | 8    | 10         |\n")}

	</section>
{/snippet}

{#snippet munitions()}
	<section>
		<h3 id="munitions">{@html applyBase("Munitions")}</h3>
	{@html renderMarkdown("> Le nombre de munition est considéré comme suffisant pour 1 expédition.\n\n|                      | Petit/ Léger | Normal | Grand/ Lourd |\n| -------------------- | :----------: | :----: | :----------: |\n| **Prix/ Expédition** |     20pc     |  40pc  |     80pc     |\n")}

	</section>
{/snippet}

{#snippet effetsDesArmes_Corde()}
	<section>
		<h2 id="effets-des-armes--corde">{@html applyBase("Effets des Armes à Corde")}</h2>
	{@html renderMarkdown("> Permet d'accrocher une fiole ou un crystal au bout de l'Arme à Corde afin d'imbiber chaque munition tirée.\n\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles"} fragment={""} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Magies"} fragment={""} />

	</section>
{/snippet}

{#snippet effetsDesArmes_Feu()}
	<section>
		<h2 id="effets-des-armes--feu">{@html applyBase("Effets des Armes à Feu")}</h2>

	{@render propulsion()}
	</section>
{/snippet}

{#snippet propulsion()}
	<section>
		<h3 id="propulsion">{@html applyBase("Propulsion")}</h3>
	{@html renderMarkdown("> Altère la technologie qui propulse les munitions, ce qui influe ses dégâts et ses propriétés.\n\n| Type         | Dégâts |  Prix | Propriétés                                                                                            |\n| ------------ | :----: | ----: | ----------------------------------------------------------------------------------------------------- |\n| Poudre noire |  x 1   |     - | -                                                                                                     |\n| Air comprimé | x 0.5  |  2 po | Silencieux                                                                                            |\n| Dispersive   | x 0.5  |  4 po | Touche les cibles dans un cône de 60 degrés<br>Divise par 2 la portée maximale                        |\n| Magique      |  x 1   |  8 po | Consomme de la magie plutôt que des munitions                                                         |\n| Magnétique   |  x 2   | 20 po | Perds (100/distance max)% de dégâts par mètre de distance<br>Impossible sur les armes lourdes/grandes |")}

	</section>
{/snippet}
