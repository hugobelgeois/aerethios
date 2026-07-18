<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Propriétés</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Propriétés</h1>
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
		<h2 id="dlicat">Délicat</h2>
	{@html renderMarkdown("L'objet se casse s'il se fait toucher par une réussite critique.\n")}

	</section>
{/snippet}

{#snippet parade()}
	<section>
		<h2 id="parade">Parade</h2>
	{@html renderMarkdown("Si un ennemi frappe cet équipement mais n'atteint pas l'AC total, il ouvre sa garde et permet à sa cible de réagir.\n")}

	</section>
{/snippet}

{#snippet finesse()}
	<section>
		<h2 id="finesse">Finesse</h2>
	{@html renderMarkdown("Permet d'utiliser la Dextérité plutôt que la Force comme modificateur de jet d'attaque.\n")}

	</section>
{/snippet}

{#snippet versatile()}
	<section>
		<h2 id="versatile">Versatile</h2>
	{@html renderMarkdown("L'arme peut être utilisée avec 1 ou 2 mains, ce qui change son dé de dégâts.\n")}

	</section>
{/snippet}

{#snippet lger()}
	<section>
		<h2 id="lger">Léger</h2>
	{@html renderMarkdown("Permet d'utiliser une arme supplémentaire de catégorie Courte lors de son tour.\n\nCette arme ne peut pas elle-même utiliser sa propriété Léger.\n")}

	</section>
{/snippet}

{#snippet jetable()}
	<section>
		<h2 id="jetable">Jetable</h2>
	{@html renderMarkdown("L'arme peut être jetée en utilisant ses jets de dégâts et ses modificateurs comme une attaque normale.\n")}

	</section>
{/snippet}

{#snippet prparation()}
	<section>
		<h2 id="prparation">Préparation</h2>
	{@html renderMarkdown("L'arme nécessite de passer son tour à la préparer avant de pouvoir s'en servir.\n")}

	</section>
{/snippet}

{#snippet lent()}
	<section>
		<h2 id="lent">Lent</h2>
	{@html renderMarkdown("L'arme empêche de faire d'autres actions pendant le tour si on s'en sert pour attaquer.\n")}

	</section>
{/snippet}

{#snippet lacration()}
	<section>
		<h2 id="lacration">Lacération</h2>
	{@html renderMarkdown("\nUne fois par tour, augmente l'affliction <a href=\"%%BASE%%/Jeu/Regles/Statuts/Afflictions#saignement\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Afflictions\" data-wiki-fragment=\"Saignement\">Saignement</a> de 1 sur la cible touchée si les dégâts passent outre le DR.\n")}

	</section>
{/snippet}

{#snippet critique()}
	<section>
		<h2 id="critique">Critique</h2>
	{@html renderMarkdown("Double les dégâts des :\n- attaques dans le dos,\n- attaques surprises,\n- réussites critiques.\n")}

	</section>
{/snippet}

{#snippet double()}
	<section>
		<h2 id="double">Double</h2>
	{@html renderMarkdown("Permet d'attaquer une deuxième fois avec la même arme.\n")}

	</section>
{/snippet}

{#snippet charge()}
	<section>
		<h2 id="charge">Charge</h2>
	{@html renderMarkdown("Permet de déplacer un ennemi de (Force x 5ft (1 case)) en ligne droite avec soi tout en lui faisant des dégâts (1d4C + Force).\n")}

	</section>
{/snippet}

{#snippet porte()}
	<section>
		<h2 id="porte">Portée</h2>
	{@html renderMarkdown("Ajoute 5ft (1 case) de portée à l'arme.\n\nLes dégâts dans un rayon de 5ft (1 case) sont réduits de moitié.\n\nLa zone d'attaque d'opportunité du joueur n'est plus un rayon de 5ft, mais un rayon entre 5ft et 10ft (1 case de distance).\n")}

	</section>
{/snippet}

{#snippet instable()}
	<section>
		<h2 id="instable">Instable</h2>
	{@html renderMarkdown("A chaque utilisation, le joueur lance 1d20.\n\nS'il fait un échec critique, l'objet n'est plus utilisable jusqu'à être réparé.\n\nS'il s'agit d'une arme, l'attaque touche, mais elle fait également (1d4 * 10)% des dégâts au joueur avant de \"casser\".")}

	</section>
{/snippet}
