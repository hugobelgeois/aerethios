<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "fonctionnement",
          "text": "Fonctionnement",
          "level": 2
      },
      {
          "id": "boissons",
          "text": "Boissons",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Alcoolique"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Alcoolique"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render fonctionnement()}
		{@render boissons()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<blockquote>Ce <span class=\"wiki-unresolved\">Mini-Jeux</span> permet aux joueurs de se bourrer la gueule pour essayer d'obtenir des informations sans violence.</blockquote>"}
{/snippet}

{#snippet fonctionnement()}
	<section>
		<h2 id="fonctionnement">{@html "Fonctionnement"}</h2>
	{@html "<p>A chaque fois qu'une personne boit une boisson alcoolisée, elle jette un dé pour connaître son taux d'alcoolémie.</p>\n<p>Ce taux va de 0 à 100.</p>\n<ul><li>Entre 0 et 50 :</li></ul>\n<ul><li>Rien de particulier ne se passe.</li></ul>\n<ul><li>Entre 51 et 80 :</li></ul>\n<ul><li>On ne peut plus refuser quand on reçoit à boire,</li></ul>\n<ul><li>désavantages sur tous les jets.</li></ul>\n<ul><li>Entre 81 et 100 :</li></ul>\n<ul><li>On divulgue une information \"intéressant\" sur soit après chaque verre.</li></ul>\n<p>\t  <em>S'il s'agit d'un joueur, le MJ décide si l'information est suffisamment intéressante.</em></p>\n<ul><li>Après 100 :</li></ul>\n<ul><li>On ne peut plus rien tirer de la personne,</li></ul>\n<ul><li>le joueur doit lancer 1d6 pour savoir combien de pièces d'argent il a dépensé avant d'arrêter de boire.</li></ul>\n<p>Le taux redescend à 0 après 8h de repos.</p>"}

	</section>
{/snippet}

{#snippet boissons()}
	<section>
		<h2 id="boissons">{@html "Boissons"}</h2>
	{@html "<p>En fonction de la boisson consommée, le dé d'alcoolémie varie :</p>\n<ul><li><strong>bière</strong> = 1d6,</li></ul>\n<ul><li><strong>vin</strong> = 5 + 1d8,</li></ul>\n<ul><li><strong>spiritueux</strong> = 10 + 1d10.</li></ul>"}

	</section>
{/snippet}
