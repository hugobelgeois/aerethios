<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Inventaire</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Inventaire</h1>
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
	{@html renderMarkdown("> Un joueur possède 20 Points d'Inventaires (PI) de base.\n")}
{/snippet}

{#snippet taille()}
	<section>
		<h2 id="taille">{@html applyBase("Taille")}</h2>
	{@html renderMarkdown("> Selon la taille d'un objet, il prendra plus de place.\n> S'il s'agit d'un contenant, il en offrira également plus.\n\n| Taille       | PI utilisé | PI disponible |\n| ------------ | ---------- | ------------- |\n| Minuscule    | x 0.5      | -             |\n| Petit/ Léger | x 1        | x 0.5         |\n| Normal       | x2         | x 1           |\n| Grand/ Lourd | x4         | x 2           |\n| Enorme       | x8         | x 4           |\n")}

	</section>
{/snippet}

{#snippet contenant()}
	<section>
		<h2 id="contenant">{@html applyBase("Contenant")}</h2>
	{@html renderMarkdown("> Augmente les Points d'Inventaire (PI) disponibles.\n> Un contenant ne peut pas contenir d'autre contenant (sauf précision).\n\n| Contenant (normal) | PI utilisé                                                                | PI disponible |\n| ------------------ | ------------------------------------------------------------------------- | ------------- |\n| Animal/ Créature   | 10                                                                        | 10            |\n| Sac                | 2                                                                         | 6             |\n| Coffre             | 4<br>*x4 si mis dans une charrette*                                       | 15            |\n| Sac de monture     | 3                                                                         | 15            |\n| Charrette          | 2<br>*La taille de la charrette ne peut pas dépasser celle de la monture* | 40            |\n")}

	</section>
{/snippet}

{#snippet objets()}
	<section>
		<h2 id="objets">{@html applyBase("Objets")}</h2>
	{@html renderMarkdown("> Les objets peuvent être stockés dans un contenant tant que sa limite n'est pas dépassée.\n> L'équipement porté (1 armure et 1-2 armes) ne prend pas de PI.\n\n| Objet (petit/ léger)                             | PI utilisé | Quantité par unité |\n| ------------------------------------------------ | ---------- | ------------------ |\n| Pièces<br>*cuivre, argent, or, platine*          | 1          | 500                |\n| Ingrédient/ Matériaux                            | 1          | 20                 |\n| Consommable<br>*nourriture, potion, crystal, ..* | 1          | 5                  |\n| Kit de voyage                                    | 4          | 1                  |\n| Ustensiles de métier                             | 3          | 1                  |\n| Arme                                             | 1          | 1                  |\n| Armure                                           | 2          | 1                  |\n\nEn voyage, les pièces gagnées ne sont pas automatiquement converties.\n```Exemple\nJe voyage et j'ai 1000pc et 500pa, je garde ces pièces et je consomme 3PI.\nUne fois arrivé en ville, ces pièces deviennent 10pa et 5po, et cela consomme 1PI.\n```")}

	</section>
{/snippet}
