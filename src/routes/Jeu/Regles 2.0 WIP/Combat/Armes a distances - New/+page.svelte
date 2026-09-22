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
          "id": "couvert",
          "text": "Couvert",
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
          "id": "propulsion",
          "text": "Propulsion",
          "level": 3
      },
      {
          "id": "incidents",
          "text": "Incidents",
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
		{@render couvert()}
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
	{@html renderMarkdown("> Modifie la façon d'utiliser l'arme.\n\n|                         |            Petit/ Léger            |           Normal           |     Grand/ Lourd     |\n| ----------------------- | :--------------------------------: | :------------------------: | :------------------: |\n| **Dé**                  |     2d6 + Dextérité(Bretteur)      | 2d8 + (Dextérité \\| Force) | 2d6 + Force(Barbare) |\n| **Dégâts**              |                 4                  |             8              |          12          |\n| **Rechargement**        |                 -                  |       1 Action Bonus       |       1 Action       |\n| **Distance Maximale**   |                10m                 |            20m             |         40m          |\n| **Maniabilité**         | 2 Mains (Arc)<br>1 Main (Pistolet) |          2 Mains           |       2 Mains        |\n| **Matériaux**           |                 1                  |             2              |          4           |\n| Arme à Corde (exemples) |                Arc                 |          Arbalète          |       Baliste        |\n| Arme à Feu (exemples)   |              Pistolet              |           Fusil            |        Canon         |\n\nSi le joueur tire au delà de la distance maximale, la DC augmente de 8.\n")}

	</section>
{/snippet}

{#snippet couvert()}
	<section>
		<h2 id="couvert">{@html applyBase("Couvert")}</h2>
	{@html renderMarkdown("> Les obstacles entre la cible et le tireur altèrent la DC.\n\n|        | 0%  | 50% | 100%       |\n| ------ | --- | --- | ---------- |\n| **DC** | -   | +4  | Impossible |\n")}

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
	{@html renderMarkdown("> Le nombre de munition est considéré comme suffisant pour 1 expédition.\n\n|                      | Petit/ Léger | Normal | Grand/ Lourd |\n| -------------------- | :----------: | :----: | :----------: |\n| **Prix/ Expédition** |     20pc     |  50pc  |     80pc     |\n\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Enchantements a Distance"} fragment={""} />

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
	{@html renderMarkdown("> Permet de modifier le système de propulsion de l'Arme à Feu pour modifier les effets de chaque tir.\n")}
	{@render propulsion()}
	{@render incidents()}
	</section>
{/snippet}

{#snippet propulsion()}
	<section>
		<h3 id="propulsion">{@html applyBase("Propulsion")}</h3>
	{@html renderMarkdown("> Altère la technologie qui propulse les munitions, ce qui influe ses dégâts et ses propriétés.\n\n| Type         | Dégâts | Prix | Propriétés                                                                                 |\n| ------------ | :----: | ---: | ------------------------------------------------------------------------------------------ |\n| Poudre noire |  x 1   |    - | -                                                                                          |\n| Air comprimé | x 0.5  | 2 po | Silencieux<br>Aucun incident possible                                                      |\n| Dispersive   | x 0.5  | 2 po | Touche les cibles dans un cône de 90 degrés<br>Divise par 2 la portée maximale             |\n| Magique      | x 0.75 | 8 po | Consomme de la magie plutôt que des munitions                                              |\n| Magnétique   | x 1.5  | 5 po | Double la portée maximale.<br>2DMG dans la portée de base<br>1.5DMG dans la portée doublée |\n")}

	</section>
{/snippet}

{#snippet incidents()}
	<section>
		<h3 id="incidents">{@html applyBase("Incidents")}</h3>
	{@html renderMarkdown("> Les armes à feu peuvent se détériorer à chaque tir si elles font un double 1.\n\nLe joueur doit lancer 1d10 pour savoir quel incident se produit sur son arme.\n\n| Dé   | Résultat  | Conséquence                              | Résolution                |\n| ---- | --------- | ---------------------------------------- | ------------------------- |\n| 7-10 | Enraillée | Impossible de tirer                      | 1 Action Bonus            |\n| 4-6  | Déréglée  | DC +4                                    | 1 Action                  |\n| 2-3  | Tordue    | DC +8                                    | 1 Action + 1 Action Bonus |\n| 1    | Implosion | Le tireur subit 50% des dégâts de l'arme | ---                       |")}

	</section>
{/snippet}
