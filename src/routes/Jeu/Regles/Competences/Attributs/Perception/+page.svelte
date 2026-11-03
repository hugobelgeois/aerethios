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
  <title>{"Perception"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Perception"}</h1>
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
	{@html "<blockquote>Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).<br>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Situation</th></tr></thead><tbody><tr><td>Chasseur</td><td>Détection dans la dimension terrestre</td></tr><tr><td>Spiritisme</td><td>Détection dans la dimension planaire</td></tr><tr><td>Survivant</td><td>Comprendre l'environnement</td></tr><tr><td>Voyeur</td><td>Recherche</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html "Secondaires"}</h2>
	{@html "<blockquote>Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).<br>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th><strong>Principale</strong></th><th>Secondaire</th><th>Description</th></tr></thead><tbody><tr><td><strong>Chasseur</strong></td><td>Pièges</td><td>Impossible de tomber dans un piège physique</td></tr><tr><td></td><td>Menace</td><td>Pas besoin de faire de jet pour savoir qu'on est en danger</td></tr><tr><td><strong>Spiritisme</strong></td><td>Exorciste</td><td>Pas besoin de magie de lumière pour voir les entités planaires</td></tr><tr><td></td><td>Pactisant</td><td>Vous pouvez conjurer des entités planaires avec lesquelles vous avez passé un pacte<br>Elles peuvent refuser de venir si elles sont plus fortes que vous</td></tr><tr><td><strong>Survivant</strong></td><td>Créatures</td><td>Connaître le point faible des créatures et le comportement à avoir avec elles</td></tr><tr><td></td><td>Plantes</td><td>Pouvoir trouver les plantes recherchées et détecter les poisons</td></tr><tr><td><strong>Voyeur</strong></td><td>Mentaliste</td><td>Comprendre les intentions des entités</td></tr><tr><td></td><td>Magie</td><td>Permet de détecter les résidus magiques</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html "Finales"}</h2>
	{@html "<blockquote>S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.<br>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Description</th></tr></thead><tbody><tr><td><strong>Troisième œil</strong></td><td>+ Ne peut pas subir de réussite critique contre soi-même<br>- Ses réussites critiques doivent être annoncées à l'avance sinon elles ne sont pas critiques<br>Si elle est annoncée mais qu'elle ne tombe pas, le résultat/ 2 (arrondi vers le bas) est déduit des HP</td></tr><tr><td><strong>Parano</strong></td><td>+ 1d20 +Perception(Voyeur) >= 20 -> Savoir ce qu'il va se passer le jour même pour une personne spécifique<br>- En cas d'échec, une entité suit le joueur pour la journée</td></tr></tbody></table></div>"}

	</section>
{/snippet}
