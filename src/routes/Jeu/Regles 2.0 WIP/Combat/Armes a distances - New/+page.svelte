<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Armes à distances - New"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Armes à distances - New"}</h1>
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
		<h2 id="base">{@html "Base"}</h2>
	{@html "<blockquote>Dé + Modificateur >= DC → Dégâts aux HP<br>DC = AC + Couvert.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Arme à Corde</th><th>Arme à Feu</th></tr></thead><tbody><tr><td><strong>Dégats</strong></td><td>x 1</td><td>x 1.5</td></tr><tr><td><strong>Silencieux</strong></td><td>Oui</td><td>Non</td></tr></tbody></table></div>\n<p>Une arme silencieuse ne déclenche pas le combat si la cible est tuée en 1 coup et si personne ne la voit mourir.</p>\n<blockquote>Les armes à distances sont perforantes.</blockquote>"}
	{@render taille()}
	</section>
{/snippet}

{#snippet taille()}
	<section>
		<h3 id="taille">{@html "Taille"}</h3>
	{@html "<blockquote>Modifie la façon d'utiliser l'arme.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Petit/ Léger</th><th>Normal</th><th>Grand/ Lourd</th></tr></thead><tbody><tr><td><strong>Dés</strong></td><td>2d10</td><td>2d8</td><td>2d6</td></tr><tr><td><strong>Dégâts</strong></td><td>4</td><td>8</td><td>12</td></tr><tr><td><strong>Modificateur</strong></td><td>Perception(Cowboy)</td><td>Perception(Chasseur)</td><td>Perception(Canonier)</td></tr><tr><td><strong>Rechargement</strong></td><td>-</td><td>1 Action Bonus</td><td>1 Action</td></tr><tr><td><strong>Distance Maximale</strong></td><td>10m</td><td>20m</td><td>40m</td></tr><tr><td><strong>Maniabilité</strong></td><td>2 Mains (Corde)<br>1 Main (Feu)</td><td>2 Mains</td><td>2 Mains</td></tr><tr><td><strong>Matériaux</strong></td><td>1</td><td>2</td><td>4</td></tr><tr><td>Arme à Corde (exemples)</td><td>Arc</td><td>Arbalète</td><td>Baliste</td></tr><tr><td>Arme à Feu (exemples)</td><td>Pistolet</td><td>Fusil</td><td>Canon</td></tr></tbody></table></div>\n<p>Si le joueur tire au delà de la distance maximale, la DC augmente de 8.</p>"}

	</section>
{/snippet}

{#snippet communs()}
	<section>
		<h2 id="communs">{@html "Communs"}</h2>

	{@render couvert()}
	{@render munitions()}
	</section>
{/snippet}

{#snippet couvert()}
	<section>
		<h3 id="couvert">{@html "Couvert"}</h3>
	{@html "<blockquote>Les obstacles entre la cible et le tireur altèrent la DC.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>0%</th><th>50%</th><th>100%</th></tr></thead><tbody><tr><td><strong>DC</strong></td><td>-</td><td>+5</td><td>Impossible</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet munitions()}
	<section>
		<h3 id="munitions">{@html "Munitions"}</h3>
	{@html "<blockquote>Le nombre de munition est considéré comme suffisant pour 1 expédition.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Petit/ Léger</th><th>Normal</th><th>Grand/ Lourd</th></tr></thead><tbody><tr><td><strong>Prix/ Expédition</strong></td><td>20pc</td><td>40pc</td><td>80pc</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet armes_Corde()}
	<section>
		<h2 id="armes--corde">{@html "Armes à Corde"}</h2>
	{@html "<blockquote>Permet d'accrocher une fiole ou un crystal au bout de l'Arme à Corde afin d'imbiber chaque munition tirée.</blockquote>"}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles"} fragment={""} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Magies"} fragment={""} />

	</section>
{/snippet}

{#snippet armes_Feu()}
	<section>
		<h2 id="armes--feu">{@html "Armes à Feu"}</h2>

	{@render magasine()}
	{@render propulsion()}
	</section>
{/snippet}

{#snippet magasine()}
	<section>
		<h3 id="magasine">{@html "Magasine"}</h3>
	{@html "<blockquote>Change le nombre de munitions qui peuvent être utilisées avant de devoir recharger.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Type</th><th>Dégâts</th><th>Prix</th><th>Propriétés</th></tr></thead><tbody><tr><td>Aucun</td><td>-</td><td>-</td><td>-</td></tr><tr><td>Double coup</td><td>-2</td><td>2 po</td><td>Permet de tirer 2 munitions avant de recharger</td></tr><tr><td>Petit magasine</td><td>-4</td><td>4 po</td><td>Réduit le rechargement de 1<br><em>Action -> Action Bonus -> Rien</em></td></tr><tr><td>Grand magasine</td><td>-8</td><td>8 po</td><td>Supprime le rechargement</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet propulsion()}
	<section>
		<h3 id="propulsion">{@html "Propulsion"}</h3>
	{@html "<blockquote>Altère la technologie qui propulse les munitions, ce qui influe ses dégâts et ses propriétés.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Type</th><th>Dégâts</th><th>Prix</th><th>Propriétés</th></tr></thead><tbody><tr><td>Poudre noire</td><td>x 1</td><td>-</td><td>-</td></tr><tr><td>Air comprimé</td><td>x 0.5</td><td>2 po</td><td>Transperce les cibles en ligne droite<br>Silencieux</td></tr><tr><td>Magique</td><td>x 1</td><td>8 po</td><td>??</td></tr><tr><td>Magnétique</td><td>x 2</td><td>20 po</td><td>Perds (100/distance max)% de dégâts par mètre de distance</td></tr></tbody></table></div>"}

	</section>
{/snippet}
