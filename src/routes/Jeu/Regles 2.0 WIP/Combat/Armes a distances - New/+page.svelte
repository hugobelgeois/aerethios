<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "base",
          "text": "Base",
          "level": 2
      },
      {
          "id": "taille",
          "text": "Taille",
          "level": 3
      },
      {
          "id": "communs",
          "text": "Communs",
          "level": 2
      },
      {
          "id": "couvert",
          "text": "Couvert",
          "level": 3
      },
      {
          "id": "munitions",
          "text": "Munitions",
          "level": 3
      },
      {
          "id": "armes--corde",
          "text": "Armes à Corde",
          "level": 2
      },
      {
          "id": "armes--feu",
          "text": "Armes à Feu",
          "level": 2
      },
      {
          "id": "magasine",
          "text": "Magasine",
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
		{@render base()}
		{@render communs()}
		{@render armes_Corde()}
		{@render armes_Feu()}
  </div>
</article>

<LinkPreview />

{#snippet base()}
	<section>
		<h2 id="base">{@html applyBase("Base")}</h2>
	{@html renderMarkdown("> Dé + Modificateur >= DC → Dégâts aux HP\n> DC = AC + Couvert.\n\n|                | Arme à Corde | Arme à Feu |\n| -------------- | :----------: | :--------: |\n| **Dégats**     |     x 1      |   x 1.5    |\n| **Silencieux** |     Oui      |    Non     |\n\nUne arme silencieuse ne déclenche pas le combat si la cible est tuée en 1 coup et si personne ne la voit mourir.\n> Les armes à distances sont perforantes.\n")}
	{@render taille()}
	</section>
{/snippet}

{#snippet taille()}
	<section>
		<h3 id="taille">{@html applyBase("Taille")}</h3>
	{@html renderMarkdown("> Modifie la façon d'utiliser l'arme.\n\n|                         |          Petit/ Léger           |        Normal        |     Grand/ Lourd     |\n| ----------------------- | :-----------------------------: | :------------------: | :------------------: |\n| **Dés**                 |              2d10               |         2d8          |         2d6          |\n| **Dégâts**              |                4                |          8           |          12          |\n| **Modificateur**        |       Perception(Cowboy)        | Perception(Chasseur) | Perception(Canonier) |\n| **Rechargement**        |                -                |    1 Action Bonus    |       1 Action       |\n| **Distance Maximale**   |               10m               |         20m          |         40m          |\n| **Maniabilité**         | 2 Mains (Corde)<br>1 Main (Feu) |       2 Mains        |       2 Mains        |\n| **Matériaux**           |                1                |          2           |          4           |\n| Arme à Corde (exemples) |               Arc               |       Arbalète       |       Baliste        |\n| Arme à Feu (exemples)   |            Pistolet             |        Fusil         |        Canon         |\n\nSi le joueur tire au delà de la distance maximale, la DC augmente de 8.\n")}

	</section>
{/snippet}

{#snippet communs()}
	<section>
		<h2 id="communs">{@html applyBase("Communs")}</h2>

	{@render couvert()}
	{@render munitions()}
	</section>
{/snippet}

{#snippet couvert()}
	<section>
		<h3 id="couvert">{@html applyBase("Couvert")}</h3>
	{@html renderMarkdown("> Les obstacles entre la cible et le tireur altèrent la DC.\n\n|        | 0%  | 50% | 100%       |\n| ------ | --- | --- | ---------- |\n| **DC** | -   | +5  | Impossible |\n")}

	</section>
{/snippet}

{#snippet munitions()}
	<section>
		<h3 id="munitions">{@html applyBase("Munitions")}</h3>
	{@html renderMarkdown("> Le nombre de munition est considéré comme suffisant pour 1 expédition.\n\n|                      | Petit/ Léger | Normal | Grand/ Lourd |\n| -------------------- | :----------: | :----: | :----------: |\n| **Prix/ Expédition** |     20pc     |  40pc  |     80pc     |\n")}

	</section>
{/snippet}

{#snippet armes_Corde()}
	<section>
		<h2 id="armes--corde">{@html applyBase("Armes à Corde")}</h2>
	{@html renderMarkdown("> Permet d'accrocher une fiole ou un crystal au bout de l'Arme à Corde afin d'imbiber chaque munition tirée.\n\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles"} fragment={""} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Magies"} fragment={""} />

	</section>
{/snippet}

{#snippet armes_Feu()}
	<section>
		<h2 id="armes--feu">{@html applyBase("Armes à Feu")}</h2>

	{@render magasine()}
	{@render propulsion()}
	</section>
{/snippet}

{#snippet magasine()}
	<section>
		<h3 id="magasine">{@html applyBase("Magasine")}</h3>
	{@html renderMarkdown("> Change le nombre de munitions qui peuvent être utilisées avant de devoir recharger.\n\n| Type           | Dégâts | Prix | Propriétés                                                      |\n| -------------- | :----: | ---: | --------------------------------------------------------------- |\n| Aucun          |   -    |    - | -                                                               |\n| Double coup    |   -2   | 2 po | Permet de tirer 2 munitions avant de recharger                  |\n| Petit magasine |   -4   | 4 po | Réduit le rechargement de 1<br>*Action -> Action Bonus -> Rien* |\n| Grand magasine |   -8   | 8 po | Supprime le rechargement                                        |\n")}

	</section>
{/snippet}

{#snippet propulsion()}
	<section>
		<h3 id="propulsion">{@html applyBase("Propulsion")}</h3>
	{@html renderMarkdown("> Altère la technologie qui propulse les munitions, ce qui influe ses dégâts et ses propriétés.\n\n| Type         | Dégâts |  Prix | Propriétés                                                |\n| ------------ | :----: | ----: | --------------------------------------------------------- |\n| Poudre noire |  x 1   |     - | -                                                         |\n| Air comprimé | x 0.5  |  2 po | Transperce les cibles en ligne droite<br>Silencieux       |\n| Magique      |  x 1   |  8 po | ??                                                        |\n| Magnétique   |  x 2   | 20 po | Perds (100/distance max)% de dégâts par mètre de distance |")}

	</section>
{/snippet}
