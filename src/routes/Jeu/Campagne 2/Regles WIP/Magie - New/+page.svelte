<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "crystaux",
          "text": "Crystaux",
          "level": 2
      },
      {
          "id": "utilisation",
          "text": "Utilisation",
          "level": 2
      },
      {
          "id": "dangers",
          "text": "Dangers",
          "level": 3
      },
      {
          "id": "reliques",
          "text": "Reliques",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Magie - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Magie - New</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render crystaux()}
		{@render utilisation()}
		{@render reliques()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("> La magie étant vaste, il est conseillé d'en discuter avec le MJ avant la session afin d'établir les sorts que vous utiliserez, leur dégâts et leur coût, afin de ne pas le faire en combat et ralentir ceux-ci.\n\nLes points de magie représentent la tolérance à cette magie. Cela permet de faire des sorts plus puissants sans risquer de se blesser.\nLa magie est plus mortelle que les armes de mêlée et à distances. Mais elle est plus dure et dangereuse à manipuler.\n\nIl existe 7 magies\nChaque magie a un score qui va de 0 à 20 selon l'affinité du personnage.\nLe score magique est également associé à un dé, qui évolue par tranche de 4 points (paliers 1-5).\n\t(1:4 = d4, 5:8 = d6, 9:12 = d8, 13:16 = d10, 17:20 = d12) qui représente la facilité à toucher.\n\tLe joueur peut choisir de lancer un dé plus petit que celui qu'il a pour augmenter ses dégâts.\nUne entité peut insuffler autant de crystaux dans un sort qu'elle a de point de magie, sans risque de se blesser.\nElle peut dépasser ce seuil (pas plus que le double ?), et chaque point au dessus de son score lui infligera 1 dé de dégâts selon le dé associé.\n\tEx: Magie de feu = 12, je lance un sort à 14 crystaux avec mes dés 8, je prends 14-12 = 2d8 de dégâts à mes HP\nPour toucher : Dé de palier + Modificateur >= AC\nLes dégâts sont fixes : (Palier max + (Palier max - Palier du dé)) \\* Nombre de crystaux\n\tFeu 12 (Palier 3) (d8) -> Je lance 1d4 -> Dmg = 3 + (3-1) \\* Nombre de crystaux\nLa maîtrise magique (0-10) est la capacité à ne pas consommer de crystaux pour lancer un sort (1 Maîtrise = 1 crystal \"gratuit\")\nLe nombre de crystaux max est généralement 0-10 pour lvl1-14, 0-20 pour lvl15-20\n")}
{/snippet}

{#snippet crystaux()}
	<section>
		<h2 id="crystaux">Crystaux</h2>
	{@html renderMarkdown("> Les crystaux ne sont pas exploitables tels quels, il faut d'abord les traiter.\n\n| Utilisation | Durée    | Effets                                                                               | Effets secondaires                                                                                                                                                                            | Prix/ unité |\n| ----------- | -------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------: |\n| Implanter   | -        | - Utilisation normale<br>- Régénération de magie                                     | - Impossible d'utiliser plus que 5 crystaux par sort                                                                                                                                          |        5 po |\n| Manger      | 1 jour   | - Réserve de 5 \"crystaux\"<br>- Cumulable                                             | - Nausée si plusieurs doses consommées par jour                                                                                                                                               |       50 pa |\n| Respirer    | 1 combat | - Réserve de 10 \"crystaux\"<br>- Régénération de 2 \"crystaux\" par tour<br>- Cumulable | - Addiction = 1d20+ Mental(Volonté) < Nombre de respiration \\* 8                                                                                                                              |       25 pa |\n| Injecter    | 2 tours  | - Chaque sort utilise +10 \"crystaux\"<br>- Réserve infinie                            | - Pour chaque palier de 10 dégâts effectué, le joueur perd 1d10HP<br>- Statuts \"Discombobulate\" une fois l'effet terminé<br>- Addiction = 1d20+ Mental(Volonté) < Nombre de respiration \\* 12 |       20 pa |\n\tExemple Injecter : J'ai 16 en Foudre, chaque sort utiliser (2d6+16) \"crystaux\".\n")}

	</section>
{/snippet}

{#snippet utilisation()}
	<section>
		<h2 id="utilisation">Utilisation</h2>

	{@render dangers()}
	</section>
{/snippet}

{#snippet dangers()}
	<section>
		<h3 id="dangers">Dangers</h3>
	{@html renderMarkdown("> La magie est mauvaise pour un corps non entraîné. Dépasser ses limites peut être dangereux.\n")}

	</section>
{/snippet}

{#snippet reliques()}
	<section>
		<h2 id="reliques">Reliques</h2>
	{@html renderMarkdown("> Les reliques permettent de mieux concentrer sa magie pour mieux viser.\n> Baguettes, Sceptres, Sceaux, Grimoires, ...\n\n| Relique | Modificateur                             |\n| ------- | ---------------------------------------- |\n| 1 Main  | Mental                                   |\n| 2 Mains | Mental(Arcaniste\\|Intelligence\\|Sagesse) |")}

	</section>
{/snippet}
