<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "taille",
          "text": "Taille",
          "level": 2
      },
      {
          "id": "contenant",
          "text": "Contenant",
          "level": 2
      },
      {
          "id": "objets",
          "text": "Objets",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Inventaire"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Inventaire"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render taille()}
		{@render contenant()}
		{@render objets()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<blockquote>Un joueur possède 20 Points d'Inventaires (PI) de base.</blockquote>"}
{/snippet}

{#snippet taille()}
	<section>
		<h2 id="taille">{@html "Taille"}</h2>
	{@html "<blockquote>Selon la taille d'un objet, il prendra plus de place.<br>S'il s'agit d'un contenant, il en offrira également plus.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Taille</th><th>PI utilisé</th><th>PI disponible</th></tr></thead><tbody><tr><td>Minuscule</td><td>x 0.5</td><td>-</td></tr><tr><td>Petit/ Léger</td><td>x 1</td><td>x 0.5</td></tr><tr><td>Normal</td><td>x2</td><td>x 1</td></tr><tr><td>Grand/ Lourd</td><td>x4</td><td>x 2</td></tr><tr><td>Enorme</td><td>x8</td><td>x 4</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet contenant()}
	<section>
		<h2 id="contenant">{@html "Contenant"}</h2>
	{@html "<blockquote>Augmente les Points d'Inventaire (PI) disponibles.<br>Un contenant ne peut pas contenir d'autre contenant (sauf précision).</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Contenant (normal)</th><th>PI utilisé</th><th>PI disponible</th></tr></thead><tbody><tr><td>Animal/ Créature</td><td>10</td><td>10</td></tr><tr><td>Sac</td><td>2</td><td>6</td></tr><tr><td>Coffre</td><td>4<br><em>x4 si mis dans une charrette</em></td><td>15</td></tr><tr><td>Sac de monture</td><td>3</td><td>15</td></tr><tr><td>Charrette</td><td>2<br><em>La taille de la charrette ne peut pas dépasser celle de la monture</em></td><td>40</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet objets()}
	<section>
		<h2 id="objets">{@html "Objets"}</h2>
	{@html "<blockquote>Les objets peuvent être stockés dans un contenant tant que sa limite n'est pas dépassée.<br>L'équipement porté (1 armure et 1-2 armes) ne prend pas de PI.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Objet (petit/ léger)</th><th>PI utilisé</th><th>Quantité par unité</th></tr></thead><tbody><tr><td>Pièces<br><em>cuivre, argent, or, platine</em></td><td>1</td><td>500</td></tr><tr><td>Ingrédient/ Matériaux</td><td>1</td><td>20</td></tr><tr><td>Consommable<br><em>nourriture, potion, crystal, ..</em></td><td>1</td><td>5</td></tr><tr><td>Kit de voyage</td><td>4</td><td>1</td></tr><tr><td>Ustensiles de métier</td><td>3</td><td>1</td></tr><tr><td>Arme</td><td>1</td><td>1</td></tr><tr><td>Armure</td><td>2</td><td>1</td></tr></tbody></table></div>\n<p>En voyage, les pièces gagnées ne sont pas automatiquement converties.</p>\n<pre><code class=\"language-Exemple\">Je voyage et j'ai 1000pc et 500pa, je garde ces pièces et je consomme 3PI.\nUne fois arrivé en ville, ces pièces deviennent 10pa et 5po, et cela consomme 1PI.</code></pre>"}

	</section>
{/snippet}
