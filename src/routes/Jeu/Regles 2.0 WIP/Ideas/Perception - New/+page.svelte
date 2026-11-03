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
  <title>{"Perception - New"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Perception - New"}</h1>
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
	{@html "<blockquote>Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).<br>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Situation</th></tr></thead><tbody><tr><td>Chasseur</td><td>Détection proche</td></tr><tr><td>Spiritisme</td><td>Perception des phénomènes planaires</td></tr><tr><td>Observateur</td><td>Exploiter les faiblesses</td></tr><tr><td>Voyageur</td><td>Exploiter le terrain</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html "Secondaires"}</h2>
	{@html "<blockquote>Le joueur en choisi 1 tous les 3 points d'attribut (3, 6, 9, 12, 15, 18).<br>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th><strong>Principale</strong></th><th>Secondaire</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>Chasseur</strong></td><td>Menace</td><td>Passif</td><td>Pas besoin de jet pour savoir qu'un danger immédiat vous menace.</td></tr><tr><td></td><td>Pièges</td><td>Passif</td><td>Impossible de tomber dans un piège physique.</td></tr><tr><td></td><td>Vigilance</td><td>Réaction</td><td>Lorsqu'une créature entre dans votre champ de vision, vous agissez avant le premier tour et avez l'effet de surprise.</td></tr><tr><td><strong>Spiritisme</strong></td><td>Exorciste</td><td>Action</td><td>Renvoie une entité planaire dans l'ombre pendant 1 tour, où elle ne pourra plus vous faire de mal.<br>Si <code>1d20 + Perception(Spiritisme) >= Puissance de l'entité [5-30]</code>.</td></tr><tr><td></td><td>Pactisant</td><td>Action</td><td>Vous pouvez invoquer une entité planaire avec laquelle vous avez conclu un pacte.<br>Elle peut refuser si elle est plus puissante que vous.</td></tr><tr><td></td><td>Pièges Magiques</td><td>Passif</td><td>Impossible de tomber dans un piège magique.</td></tr><tr><td><strong>Observateur</strong></td><td>Anticipation</td><td>Réaction</td><td>Une créature a un désavantage contre vous pour ce tour si vous venez de l'analyser.</td></tr><tr><td></td><td>Chemin parfait</td><td>Action Bonus</td><td>Après avoir analyser une créature, celle-ci ne peut plus vous faire d'attaques surprise, dans le dos ou d'opportunité pour le reste du combat.</td></tr><tr><td></td><td>Faiblesse</td><td>Passif</td><td>Augmente les dégâts sur une créature analysée de <code>Perception(Observateur)</code></td></tr><tr><td><strong>Voyageur</strong></td><td>Ami de la nature</td><td>Action Bonus</td><td>Utiliser un élément de décor exploitable pendant une attaque pour augmenter vos dégâts de <code>Perception(Voyageur)</code>.</td></tr><tr><td></td><td>Grand pas</td><td>Passif</td><td>Après avoir passé un tour sur un terrain, vous ignorez ensuite tous ses malus.</td></tr><tr><td></td><td>High Ground</td><td>Passif</td><td>Etre plus haut qu'une créature augmente vos dégâts de <code>Perception(Voyageur)</code> contre cette créature.</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html "Finales"}</h2>
	{@html "<blockquote>Au niveau 10, s'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.<br>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Description</th></tr></thead><tbody><tr><td><strong>Oeil absolu</strong></td><td>+ Une fois par tour, après avoir analysé une cible, vous pouvez ignorer entièrement sa DR ou une de ses résistances.<br>- Vous ne pouvez attaquer que des cibles analysées.</td></tr><tr><td><strong>Prémonition</strong></td><td>+ Une fois par repos, vous pouvez demander au MJ un événement important qui s'est ou va se dérouler dans le monde. <br>- Si vous agissez contre cette information, vous subissez un malus.</td></tr><tr><td><strong>Troisième œil</strong></td><td>+ Analyse toutes les créatures en début de combat.<br>- En début de combat, le joueur annonce les HP qu'il lui restera à la fin.<br>S'il se trompe (avec une marge de 5), il perd les HP qu'il vient de perdre pendant ce combat.</td></tr></tbody></table></div>"}

	</section>
{/snippet}
