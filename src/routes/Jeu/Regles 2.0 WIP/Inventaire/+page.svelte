<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
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
		{@render contenant()}
		{@render objets()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("Un joueur possède par défaut 20 points d'Inventaire (PI).\nChaque objet porté par le joueur prend un certain nombre de PI.\nIl ne peut pas dépasser ce seuil car il n'a simplement pas la capacité de tenir tous ces objets.\n\nL'équipement porté (1 armure + 1-2 armes) ne prend pas de PI.\n")}
{/snippet}

{#snippet contenant()}
	<section>
		<h2 id="contenant">{@html applyBase("Contenant")}</h2>
	{@html renderMarkdown("> Augmente les PI disponibles.\n> Un contenant ne peut pas contenir d'autre contenant (sauf précision).\n\n| Contenant             | PI utilisé                                    | PI disponible |\n| --------------------- | --------------------------------------------- | ------------- |\n| Sac                   | 1 - 3                                         | 5 - 20        |\n| Sac de petite monture | -<br>*Une monture n'a aucun PI de base*       | 10 - 30       |\n| Sac de grande monture | -                                             | 20 - 50       |\n| Charette              | -<br>*Nécessite une monture de trait*         | 40 - 200      |\n| Coffre                | 3 - 10<br>*Multiplié par 4 dans une charette* | 10 - 50       |\n")}

	</section>
{/snippet}

{#snippet objets()}
	<section>
		<h2 id="objets">{@html applyBase("Objets")}</h2>
	{@html renderMarkdown("\n| Objet                                                   | Points d'Inventaire | Quantité par unité |\n| ------------------------------------------------------- | ------------------- | ------------------ |\n| Pièces<br>*cuivre, argent, or, platine*                 | 1                   | 500                |\n| Ingrédient                                              | 1                   | 20                 |\n| Potion                                                  | 1                   | 5                  |\n| Matériel de survie<br>*nourriture, torche, lit de camp* | 2                   | 10                 |\n| Matériel de médecin                                     | 2                   | 3                  |\n| Ustensile de métier                                     | 3                   | 1                  |\n| Arme (petite/légère)                                    | 1                   | 1                  |\n| Arme (normale)                                          | 2                   | 1                  |\n| Arme (grande/lourde)                                    | 4                   | 1                  |\n| Armure Légère                                           | 2                   | 1                  |\n| Armure Intermédiaire                                    | 3                   | 1                  |\n| Armure Lourde                                           | 5                   | 1                  |\n\nEn voyage, les pièces gagnées ne sont pas automatiquement converties.\n```Exemple\nJe voyage et j'ai 1000pc et 500pa, je garde ces pièces et je consomme 3PI.\nUne fois arrivé en ville, ces pièces deviennent 10pa et 5po, et cela consomme 1PI.\n```")}

	</section>
{/snippet}
