<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "ds-despoir-de-peur-et-tokens",
          "text": "Dés d'Espoir, de Peur et Tokens",
          "level": 2
      },
      {
          "id": "obtention",
          "text": "Obtention",
          "level": 3
      },
      {
          "id": "utilisation",
          "text": "Utilisation",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Tokens</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Tokens</h1>
  </header>
  <div class="markdown-rendered">
		{@render dsDespoirDePeurEtTokens()}
  </div>
</article>

<LinkPreview />

{#snippet dsDespoirDePeurEtTokens()}
	<section>
		<h2 id="ds-despoir-de-peur-et-tokens">{@html applyBase("Dés d'Espoir, de Peur et Tokens")}</h2>
	{@html renderMarkdown("\nLes dés de combats sont toujours doubles (contrairement au dé d'Attributs -qui ne ciblent personne- et utilise 1 dé).\nParmi ces 2 dés, le joueur choisit un dé d'Espoir et un dé de Peur.\n\nLes Tokens des joueurs sont conservés entre les sessions.\n\tCe n'est pas le cas pour les Tokens du Maître du Jeu qui recommence chaque session avec autant de Tokens qu'il y a de joueurs.\n")}
	{@render obtention()}
	{@render utilisation()}
	</section>
{/snippet}

{#snippet obtention()}
	<section>
		<h3 id="obtention">{@html applyBase("Obtention")}</h3>
	{@html renderMarkdown("> Toujours un gain de +1 token.\n> Seules les actions du joueur fournissent des tokens.\n\n| Pour les joueurs                                                                                         |                       Pour le MJ |\n| -------------------------------------------------------------------------------------------------------- | -------------------------------: |\n| Dé d'Espoir > Dé de Peur                                                                                 |         Dé de Peur > Dé d'Espoir |\n| Le même chiffre sur 2 dés                                                                                | Le joueur fait un échec critique |\n| Action collaborative avec un autre joueur                                                                |                                  |\n| Tous les joueurs interviennent dans une discussion<br>*(Intervention utile qui fait avancer les choses)* |                                  |\n\nLorsqu'il y a plusieurs intervenants dans l'obtention d'un token, les joueurs ne reçoivent que 1 token et décident à qui il revient.\n")}

	</section>
{/snippet}

{#snippet utilisation()}
	<section>
		<h3 id="utilisation">{@html applyBase("Utilisation")}</h3>
	{@html renderMarkdown("\n| Pour les joueurs                                                                                                          | Coût         |     | Coût |                           Pour le MJ |\n| ------------------------------------------------------------------------------------------------------------------------- | ------------ | :-: | ---: | -----------------------------------: |\n| Aider un allié (lui donne +1d6 à son prochain jet)                                                                        | 1            |     |    1 | Activer des dangers environnementaux |\n| Compétences spéciales                                                                                                     | ?            |     |    ? |    Compétences spéciales des ennemis |\n| Interrompre le MJ                                                                                                         | 1 par joueur |     |    2 |                Interrompre un joueur |\n| Evite le comas et remonte à 5 HP                                                                                          | 3            |     |    1 |                  Ajouter des ennemis |\n| Expliquer et mimer en détail une action<br>*(plutôt que de lancer les dés,<br>seulement contre les ennemis plus faibles)* | 1            |     |      |                                      |")}

	</section>
{/snippet}
