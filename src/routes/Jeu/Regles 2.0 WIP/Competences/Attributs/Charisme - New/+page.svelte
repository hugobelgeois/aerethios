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
  <title>Charisme - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Charisme - New</h1>
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
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).\n>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).\n\n| Compétence   | Situation                   |\n| ------------ | --------------------------- |\n| Diplomate    | Persuasion et négociation   |\n| Intimidateur | Intimidation et domination  |\n| Meneur       | Commandement et inspiration |\n| Trompeur     | Mensonge et tromperie       |\n")}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html applyBase("Secondaires")}</h2>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).\n>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.\n\n| **Principale** | Secondaire    | Type         | Description                                                                                                                                                                   |\n| -------------- | ------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| **Diplomate**  | Encouragement |              | Comme action bonus, peut donner un avantage à 1 entité (non cumulable avec Apaisement)                                                                                        |\n|                | Apaisement    | Action Bonus | Comme action bonus, une entité perd son état agressif jusqu'à son prochain tour ou subit un désavantage sur sa prochaine action offensive (non cumulable avec Encouragement). |\n| **Intimidant** | Terreur       | Passif       | Les créatures dont `Mental(Résistance)` est inférieur à votre `Charisme(Intimidateur)` ne vous choisissent pas comme première cible tant qu'une autre menace existe.          |\n|                | Soumission    | Passif       | Lorsqu'un ennemi meurt ou abandonne, les créatures proches effectuent un jet de Mental. En cas d'échec, elles fuient ou se rendent selon la situation.                        |\n| **Meneur**     | Ralliement    | Action Bonus | Vous pouvez transférer une condition négative d'un allié vers vous.                                                                                                           |\n|                | Inspiration   | Action       | Une condition négative que vous subissez peut être convertie en un bonus équivalent jusqu'à la fin de votre prochain tour.                                                    |\n| **Trompeur**   | Faux espoir   | Action Bonus | Une cible croit momentanément qu'une action ou un événement lui est favorable, réduisant l'efficacité de sa prochaine action offensive.                                       |\n|                | Manipulation  | Action       | Une fois par tour, vous pouvez transférer une condition entre deux entités consentantes ou non, si la situation le permet.                                                    |\n")}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html applyBase("Finales")}</h2>
	{@html renderMarkdown(">S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.\n>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).\n\n| Compétence    | Description                                                                                                                             |\n| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |\n| **Veinard**   | + Peut utiliser 1 token pour relancer ses dés.<br>- Impossible d'utilises ses tokens pour éviter le comas.                              |\n| **Epicentre** | + Les alliés proches bénéficient de votre réussite critique.<br>- Vos échecs critiques affectent également votre réputation.            |\n| **Tyran**     | + Les ennemis faibles hésitent à vous attaquer ou fuient. <br>- Les créatures puissantes vous considèrent comme une menace prioritaire. |\n| **Symbole**   | + Votre parole peut créer un engagement magique/social (serment, promesse, pacte). <br>- Rompre cet engagement vous pénalise fortement. |")}

	</section>
{/snippet}
