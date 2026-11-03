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
  <title>{"Mental"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Mental"}</h1>
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
	{@html "<blockquote>Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).<br>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Situation</th></tr></thead><tbody><tr><td>Arcaniste</td><td>Magies de Fusion</td></tr><tr><td>Intelligence</td><td>Magies Elétistes</td></tr><tr><td>Sagesse</td><td>Magies Croitistes</td></tr><tr><td>Volonté</td><td>Résistance mentale</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html "Secondaires"}</h2>
	{@html "<blockquote>Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).<br>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th><strong>Principale</strong></th><th>Secondaire</th><th>Description</th></tr></thead><tbody><tr><td><strong>Arcaniste</strong></td><td>Amplification</td><td>Permet de cumuler ses crystaux avec un autre entité pour augmenter le résultat<br>On utilise les dés de celui qui lance le sort</td></tr><tr><td></td><td>Résonance</td><td>Permet de fusionner les magies avec autre chose que du feu</td></tr><tr><td><strong>Intelligence</strong></td><td>Redirection</td><td>Concentre sa magie pour pouvoir rediriger un sort sur une autre entité proche<br><em>1d20 + Mental(Intelligence) > Crystaux + Maîtrise</em></td></tr><tr><td></td><td>Efficacité</td><td>Les dés de magie qui sont à 20% du maximum ne consomment pas de crystaux</td></tr><tr><td><strong>Sagesse</strong></td><td>Assidu</td><td>Permet l'apprentissage sans tuteur</td></tr><tr><td></td><td>Insensible</td><td>Ignore la douleur et les malus qui vont avec</td></tr><tr><td><strong>Volonté</strong></td><td>Résistance</td><td>Résister à des situations affectant l'esprit</td></tr><tr><td></td><td>Imperturbable</td><td>Permet de se déplacer et d'esquiver sans perdre sa concentration</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html "Finales"}</h2>
	{@html "<blockquote>S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.<br>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Description</th></tr></thead><tbody><tr><td><strong>Potter</strong></td><td>+ Les dés de magie qui tombent sous la moitié sont remplacés par la moitié (arrondie vers le haut)<br>- Si la cible a une résistance à la magie utilisée, tous les dégâts sont annulés</td></tr><tr><td><strong>Plus ultra</strong></td><td>+ Vos dés font toujours les dégâts maximums<br>- Vous lancez 1d6+1 pour savoir combien de crystaux vous consommez<br>Si vous dépassez votre réserve, vous perdez 10HP par crystal supplémentaire</td></tr></tbody></table></div>"}

	</section>
{/snippet}
