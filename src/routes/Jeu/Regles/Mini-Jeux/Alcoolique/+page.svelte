<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Alcoolique</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Alcoolique</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render fonctionnement()}
		{@render boissons()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("> Ce <span class=\"wiki-unresolved\">Mini-Jeux</span> permet aux joueurs de se bourrer la gueule pour essayer d'obtenir des informations sans violence.\n")}
{/snippet}

{#snippet fonctionnement()}
	<section>
		<h2 id="fonctionnement">{@html applyBase("Fonctionnement")}</h2>
	{@html renderMarkdown("\nA chaque fois qu'une personne boit une boisson alcoolisée, elle jette un dé pour connaître son taux d'alcoolémie.\n\nCe taux va de 0 à 100.\n\n- Entre 0 et 50 :\n\n\t- Rien de particulier ne se passe.\n\n- Entre 51 et 80 :\n\n\t- On ne peut plus refuser quand on reçoit à boire,\n\n\t- désavantages sur tous les jets.\n\n- Entre 81 et 100 :\n\n\t- On divulgue une information \"intéressant\" sur soit après chaque verre.\n\t  *S'il s'agit d'un joueur, le MJ décide si l'information est suffisamment intéressante.*\n\n- Après 100 :\n\n\t- On ne peut plus rien tirer de la personne,\n\n\t- le joueur doit lancer 1d6 pour savoir combien de pièces d'argent il a dépensé avant d'arrêter de boire.\n\nLe taux redescend à 0 après 8h de repos.\n")}

	</section>
{/snippet}

{#snippet boissons()}
	<section>
		<h2 id="boissons">{@html applyBase("Boissons")}</h2>
	{@html renderMarkdown("\nEn fonction de la boisson consommée, le dé d'alcoolémie varie :\n\n- **bière** = 1d6,\n\n- **vin** = 5 + 1d8,\n\n- **spiritueux** = 10 + 1d10.")}

	</section>
{/snippet}
