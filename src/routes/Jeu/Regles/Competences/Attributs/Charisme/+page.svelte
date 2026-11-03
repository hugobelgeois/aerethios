<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Charisme"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Charisme"}</h1>
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
		<h2 id="principales">{@html "Principales"}</h2>
	{@html "<blockquote>Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).<br>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Situation</th></tr></thead><tbody><tr><td>Diplomate</td><td>Persuasion et négociation</td></tr><tr><td>Intimidateur</td><td>Intimidation et domination</td></tr><tr><td>Meneur</td><td>Commandement et inspiration</td></tr><tr><td>Trompeur</td><td>Mensonge et tromperie</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html "Secondaires"}</h2>
	{@html "<blockquote>Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).<br>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th><strong>Principale</strong></th><th>Secondaire</th><th>Description</th></tr></thead><tbody><tr><td><strong>Diplomate</strong></td><td>Encouragement</td><td>Comme action bonus, peut donner un avantage à 1 entité (non cumulable avec Apaisement)</td></tr><tr><td></td><td>Apaisement</td><td>Comme action bonus, peut donner un désavantage à 1 entité (non cumulable avec Encouragement)</td></tr><tr><td><strong>Intimidant</strong></td><td>Terreur</td><td>Les ennemis n'attaquent pas le joueur en premier si leur Mental est inférieur à son Charisme<br><em>joueur Charisme(Intimidant) >= ennemi Mental(Résistance mentale)</em></td></tr><tr><td></td><td>Soumission</td><td>Lorsqu'un ennemi est tué, les autres abandonnent si un jet de Mental est inférieur au Charisme du joueur<br><em>ennemi 1d20 +Mental(Résistance mentale) >= joueur Charisme(Intimidant)</em></td></tr><tr><td><strong>Meneur</strong></td><td>Ralliement</td><td>Toutes les conditions des alliés sont transférées au joueur</td></tr><tr><td></td><td>Inspiration</td><td>Transforme toutes les conditions négatives qu'il possède en bonus</td></tr><tr><td><strong>Trompeur</strong></td><td>Faux espoir</td><td>Réduit l’efficacité offensive d’un ennemi pendant une durée courte</td></tr><tr><td></td><td>Manipulation</td><td>1x par tour, peut transférer une condition d'une entité à une autre</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html "Finales"}</h2>
	{@html "<blockquote>S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.<br>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Description</th></tr></thead><tbody><tr><td><strong>Veinard</strong></td><td>+ Peut relancer ses échecs critiques<br>- Le tour suivant, les ennemis font tous au moins une réussite normale ?</td></tr><tr><td><strong>Epicentre</strong></td><td>+ Ses réussites critiques sont partagées avec ses alliés<br>- Il perd 1d10 HP lorsqu'un allié fait un échec critique</td></tr></tbody></table></div>"}

	</section>
{/snippet}
