<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "dlicat",
          "text": "Délicat",
          "level": 2
      },
      {
          "id": "parade",
          "text": "Parade",
          "level": 2
      },
      {
          "id": "finesse",
          "text": "Finesse",
          "level": 2
      },
      {
          "id": "versatile",
          "text": "Versatile",
          "level": 2
      },
      {
          "id": "lger",
          "text": "Léger",
          "level": 2
      },
      {
          "id": "jetable",
          "text": "Jetable",
          "level": 2
      },
      {
          "id": "prparation",
          "text": "Préparation",
          "level": 2
      },
      {
          "id": "lent",
          "text": "Lent",
          "level": 2
      },
      {
          "id": "lacration",
          "text": "Lacération",
          "level": 2
      },
      {
          "id": "critique",
          "text": "Critique",
          "level": 2
      },
      {
          "id": "double",
          "text": "Double",
          "level": 2
      },
      {
          "id": "charge",
          "text": "Charge",
          "level": 2
      },
      {
          "id": "porte",
          "text": "Portée",
          "level": 2
      },
      {
          "id": "instable",
          "text": "Instable",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Propriétés"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Propriétés"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render dlicat()}
		{@render parade()}
		{@render finesse()}
		{@render versatile()}
		{@render lger()}
		{@render jetable()}
		{@render prparation()}
		{@render lent()}
		{@render lacration()}
		{@render critique()}
		{@render double()}
		{@render charge()}
		{@render porte()}
		{@render instable()}
  </div>
</article>

<LinkPreview />

{#snippet dlicat()}
	<section>
		<h2 id="dlicat">{@html "Délicat"}</h2>
	{@html "<p>L'objet se casse s'il se fait toucher par une réussite critique.</p>"}

	</section>
{/snippet}

{#snippet parade()}
	<section>
		<h2 id="parade">{@html "Parade"}</h2>
	{@html "<p>Si un ennemi frappe cet équipement mais n'atteint pas l'AC total, il ouvre sa garde et permet à sa cible de réagir.</p>"}

	</section>
{/snippet}

{#snippet finesse()}
	<section>
		<h2 id="finesse">{@html "Finesse"}</h2>
	{@html "<p>Permet d'utiliser la Dextérité plutôt que la Force comme modificateur de jet d'attaque.</p>"}

	</section>
{/snippet}

{#snippet versatile()}
	<section>
		<h2 id="versatile">{@html "Versatile"}</h2>
	{@html "<p>L'arme peut être utilisée avec 1 ou 2 mains, ce qui change son dé de dégâts.</p>"}

	</section>
{/snippet}

{#snippet lger()}
	<section>
		<h2 id="lger">{@html "Léger"}</h2>
	{@html "<p>Permet d'utiliser une arme supplémentaire de catégorie Courte lors de son tour.</p>\n<p>Cette arme ne peut pas elle-même utiliser sa propriété Léger.</p>"}

	</section>
{/snippet}

{#snippet jetable()}
	<section>
		<h2 id="jetable">{@html "Jetable"}</h2>
	{@html "<p>L'arme peut être jetée en utilisant ses jets de dégâts et ses modificateurs comme une attaque normale.</p>"}

	</section>
{/snippet}

{#snippet prparation()}
	<section>
		<h2 id="prparation">{@html "Préparation"}</h2>
	{@html "<p>L'arme nécessite de passer son tour à la préparer avant de pouvoir s'en servir.</p>"}

	</section>
{/snippet}

{#snippet lent()}
	<section>
		<h2 id="lent">{@html "Lent"}</h2>
	{@html "<p>L'arme empêche de faire d'autres actions pendant le tour si on s'en sert pour attaquer.</p>"}

	</section>
{/snippet}

{#snippet lacration()}
	<section>
		<h2 id="lacration">{@html "Lacération"}</h2>
	{@html applyBase("<p>Une fois par tour, augmente l'affliction <a href=\"%%BASE%%/Jeu/Regles/Statuts/Afflictions#saignement\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Afflictions\" data-wiki-fragment=\"Saignement\">Saignement</a> de 1 sur la cible touchée si les dégâts passent outre le DR.</p>")}

	</section>
{/snippet}

{#snippet critique()}
	<section>
		<h2 id="critique">{@html "Critique"}</h2>
	{@html "<p>Double les dégâts des :</p>\n<ul><li>attaques dans le dos,</li><li>attaques surprises,</li><li>réussites critiques.</li></ul>"}

	</section>
{/snippet}

{#snippet double()}
	<section>
		<h2 id="double">{@html "Double"}</h2>
	{@html "<p>Permet d'attaquer une deuxième fois avec la même arme.</p>"}

	</section>
{/snippet}

{#snippet charge()}
	<section>
		<h2 id="charge">{@html "Charge"}</h2>
	{@html "<p>Permet de déplacer un ennemi de (Force x 5ft (1 case)) en ligne droite avec soi tout en lui faisant des dégâts (1d4C + Force).</p>"}

	</section>
{/snippet}

{#snippet porte()}
	<section>
		<h2 id="porte">{@html "Portée"}</h2>
	{@html "<p>Ajoute 5ft (1 case) de portée à l'arme.</p>\n<p>Les dégâts dans un rayon de 5ft (1 case) sont réduits de moitié.</p>\n<p>La zone d'attaque d'opportunité du joueur n'est plus un rayon de 5ft, mais un rayon entre 5ft et 10ft (1 case de distance).</p>"}

	</section>
{/snippet}

{#snippet instable()}
	<section>
		<h2 id="instable">{@html "Instable"}</h2>
	{@html "<p>A chaque utilisation, le joueur lance 1d20.</p>\n<p>S'il fait un échec critique, l'objet n'est plus utilisable jusqu'à être réparé.</p>\n<p>S'il s'agit d'une arme, l'attaque touche, mais elle fait également (1d4 * 10)% des dégâts au joueur avant de \"casser\".</p>"}

	</section>
{/snippet}
