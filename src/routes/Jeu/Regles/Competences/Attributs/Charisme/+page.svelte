<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "principales",
          "text": "Principales",
          "level": 2
      },
      {
          "id": "secondaires",
          "text": "Secondaires",
          "level": 2
      },
      {
          "id": "finales",
          "text": "Finales",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Charisme</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Charisme</h1>
  </header>
  <div class="markdown-rendered">
		{@render principales()}
		{@render secondaires()}
		{@render finales()}
  </div>
</article>

<LinkPreview />

{#snippet principales()}
	<section>
		<h2 id="principales">{@html applyBase("Principales")}</h2>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).\r\n>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).\r\n\r\n| Compétence   | Situation                   |\r\n| ------------ | --------------------------- |\r\n| Diplomate    | Persuasion et négociation   |\r\n| Intimidateur | Intimidation et domination  |\r\n| Meneur       | Commandement et inspiration |\r\n| Trompeur     | Mensonge et tromperie       |\r\n\r")}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html applyBase("Secondaires")}</h2>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).\r\n>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.\r\n\r\n| **Principale** | Secondaire    | Description                                                                                                                                                                          |\r\n| -------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |\r\n| **Diplomate**  | Encouragement | Comme action bonus, peut donner un avantage à 1 entité (non cumulable avec Apaisement)                                                                                               |\r\n|                | Apaisement    | Comme action bonus, peut donner un désavantage à 1 entité (non cumulable avec Encouragement)                                                                                         |\r\n| **Intimidant** | Terreur       | Les ennemis n'attaquent pas le joueur en premier si leur Mental est inférieur à son Charisme<br>*joueur Charisme(Intimidant) >= ennemi Mental(Résistance mentale)*                   |\r\n|                | Soumission    | Lorsqu'un ennemi est tué, les autres abandonnent si un jet de Mental est inférieur au Charisme du joueur<br>*ennemi 1d20 +Mental(Résistance mentale) >= joueur Charisme(Intimidant)* |\r\n| **Meneur**     | Ralliement    | Toutes les conditions des alliés sont transférées au joueur                                                                                                                          |\r\n|                | Inspiration   | Transforme toutes les conditions négatives qu'il possède en bonus                                                                                                                    |\r\n| **Trompeur**   | Faux espoir   | Réduit l’efficacité offensive d’un ennemi pendant une durée courte                                                                                                                   |\r\n|                | Manipulation  | 1x par tour, peut transférer une condition d'une entité à une autre                                                                                                                  |\r\n\r")}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html applyBase("Finales")}</h2>
	{@html renderMarkdown(">S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.\r\n>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).\r\n\r\n| Compétence    | Description                                                                                                          |\r\n| ------------- | -------------------------------------------------------------------------------------------------------------------- |\r\n| **Veinard**   | + Peut relancer ses échecs critiques<br>- Le tour suivant, les ennemis font tous au moins une réussite normale ?     |\r\n| **Epicentre** | + Ses réussites critiques sont partagées avec ses alliés<br>- Il perd 1d10 HP lorsqu'un allié fait un échec critique |")}

	</section>
{/snippet}
