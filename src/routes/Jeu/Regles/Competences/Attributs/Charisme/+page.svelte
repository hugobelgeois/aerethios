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
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).\r\n>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.\r\n\r\n| **Principale** | Secondaire    | Description                                                                                                                                                                   |\r\n| -------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\r\n| **Diplomate**  | Encouragement | Comme action bonus, peut donner un avantage à 1 entité (non cumulable avec Apaisement)                                                                                        |\r\n|                | Apaisement    | Comme action bonus, une entité perd son état agressif jusqu'à son prochain tour ou subit un désavantage sur sa prochaine action offensive (non cumulable avec Encouragement). |\r\n| **Intimidant** | Terreur       | Les créatures dont `Mental(Résistance)` est inférieur à votre `Charisme(Intimidateur)` ne vous choisissent pas comme première cible tant qu'une autre menace existe.          |\r\n|                | Soumission    | Lorsqu'un ennemi meurt ou abandonne, les créatures proches effectuent un jet de Mental. En cas d'échec, elles fuient ou se rendent selon la situation.                        |\r\n| **Meneur**     | Ralliement    | Vous pouvez transférer une condition négative d'un allié vers vous.                                                                                                           |\r\n|                | Inspiration   | Une condition négative que vous subissez peut être convertie en un bonus équivalent jusqu'à la fin de votre prochain tour.                                                    |\r\n| **Trompeur**   | Faux espoir   | Une cible croit momentanément qu'une action ou un événement lui est favorable, réduisant l'efficacité de sa prochaine action offensive.                                       |\r\n|                | Manipulation  | Une fois par tour, vous pouvez transférer une condition entre deux entités consentantes ou non, si la situation le permet.                                                    |\r\n\r")}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html applyBase("Finales")}</h2>
	{@html renderMarkdown(">S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.\r\n>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).\r\n\r\n| Compétence    | Description                                                                                                                             |\r\n| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |\r\n| **Veinard**   | + Peut utiliser 1 token pour relancer ses dés.<br>- Impossible d'utilises ses tokens pour éviter le comas.                              |\r\n| **Epicentre** | + Les alliés proches bénéficient de votre réussite critique.<br>- Vos échecs critiques affectent également votre réputation.            |\r\n| **Tyran**     | + Les ennemis faibles hésitent à vous attaquer ou fuient. <br>- Les créatures puissantes vous considèrent comme une menace prioritaire. |\r\n| **Symbole**   | + Votre parole peut créer un engagement magique/social (serment, promesse, pacte). <br>- Rompre cet engagement vous pénalise fortement. |")}

	</section>
{/snippet}
