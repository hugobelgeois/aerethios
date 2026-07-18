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
  <title>Perception</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Perception</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render principales()}
		{@render secondaires()}
		{@render finales()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}

{/snippet}

{#snippet principales()}
	<section>
		<h2 id="principales">{@html applyBase("Principales")}</h2>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).\n>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).\n\n| Compétence | Situation                             |\n| ---------- | ------------------------------------- |\n| Chasseur   | Détection dans la dimension terrestre |\n| Spiritisme | Détection dans la dimension planaire  |\n| Survivant  | Comprendre l'environnement            |\n| Voyeur     | Recherche                             |\n")}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html applyBase("Secondaires")}</h2>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).\n>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.\n\n| **Principale** | Secondaire | Description                                                                                                                                              |\n| -------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| **Chasseur**   | Pièges     | Impossible de tomber dans un piège physique                                                                                                              |\n|                | Menace     | Pas besoin de faire de jet pour savoir qu'on est en danger                                                                                               |\n| **Spiritisme** | Exorciste  | Pas besoin de magie de lumière pour voir les entités planaires                                                                                           |\n|                | Pactisant  | Vous pouvez conjurer des entités planaires avec lesquelles vous avez passé un pacte<br>Elles peuvent refuser de venir si elles sont plus fortes que vous |\n| **Survivant**  | Créatures  | Connaître le point faible des créatures et le comportement à avoir avec elles                                                                            |\n|                | Plantes    | Pouvoir trouver les plantes recherchées et détecter les poisons                                                                                          |\n| **Voyeur**     | Mentaliste | Comprendre les intentions des entités                                                                                                                    |\n|                | Magie      | Permet de détecter les résidus magiques                                                                                                                  |\n")}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html applyBase("Finales")}</h2>
	{@html renderMarkdown(">S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.\n>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).\n\n| Compétence        | Description                                                                                                                                                                                                                                                         |\n| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| **Troisième œil** | + Ne peut pas subir de réussite critique contre soi-même<br>- Ses réussites critiques doivent être annoncées à l'avance sinon elles ne sont pas critiques<br>Si elle est annoncée mais qu'elle ne tombe pas, le résultat/ 2 (arrondi vers le bas) est déduit des HP |\n| **Parano**        | + 1d20 +Perception(Voyeur) >= 20 -> Savoir ce qu'il va se passer le jour même pour une personne spécifique<br>- En cas d'échec, une entité suit le joueur pour la journée                                                                                           |")}

	</section>
{/snippet}
