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
  <title>Perception - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Perception - New</h1>
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
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).\n>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).\n\n| Compétence             | Situation                                 |\n| ---------------------- | ----------------------------------------- |\n| Chasseur               | Détection des dangers et traces physiques |\n| Spiritisme             | Perception des phénomènes planaires       |\n| Naturaliste            | Comprendre faune, flore et environnement  |\n| ~~Voyeur~~ Observateur | Lire les détails et comportements         |\n| Traqueur               | Suivre une cible                          |\n")}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html applyBase("Secondaires")}</h2>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 3 points d'attribut (3, 6, 9, 12, 15, 18).\n>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.\n\n| **Principale**  | Secondaire  | Type | Description                                                                                                                              |\n| --------------- | ----------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------- |\n| **Chasseur**    | Menace      |      | Pas besoin de jet pour savoir qu'un danger immédiat vous menace.                                                                         |\n|                 | Pièges      |      | Impossible de tomber dans un piège physique.                                                                                             |\n| **Spiritisme**  | Exorciste   |      | Les entités planaires sont visibles sans magie de lumière.                                                                               |\n|                 | Pactisant   |      | Vous pouvez invoquer une entité planaire avec laquelle vous avez conclu un pacte. Elle peut refuser si elle est plus puissante que vous. |\n| **Naturaliste** | Botaniste   |      | Vous trouvez facilement les plantes recherchées et identifiez les poisons naturels.                                                      |\n|                 | Créatures   |      | Vous connaissez les points faibles, habitudes et comportements des créatures naturelles.                                                 |\n| **Observateur** | Arcanoscope |      | Détecter les résidus, perturbations ou traces de magie.                                                                                  |\n|                 | Mentaliste  |      | Comprendre les intentions, émotions ou mensonges d'une entité.                                                                           |\n| **Traqueur**    | Orientation |      | Impossible de se perdre dans une zone déjà explorée. Vous retrouvez toujours votre chemin.                                               |\n|                 | Pistage     |      | Suivre automatiquement une piste récente si les conditions le permettent, sinon bénéficier d'un bonus égal à `Perception(Traqueur)`.     |\n")}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html applyBase("Finales")}</h2>
	{@html renderMarkdown(">S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.\n>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).\n\n| Compétence        | Description                                                                                                                                                                                                                                                         |\n| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| **Troisième œil** | + Ne peut pas subir de réussite critique contre soi-même<br>- Ses réussites critiques doivent être annoncées à l'avance sinon elles ne sont pas critiques<br>Si elle est annoncée mais qu'elle ne tombe pas, le résultat/ 2 (arrondi vers le bas) est déduit des HP |\n| **Prémonition**   | + Une fois par repos, vous pouvez demander une information future au MJ concernant une action précise. <br>- Si vous agissez contre cette information, vous subissez un malus.                                                                                      |\n| **Oeil absolu**   |                                                                                                                                                                                                                                                                     |")}

	</section>
{/snippet}
