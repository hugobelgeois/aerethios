<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Tokens"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Tokens"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render dsDespoirDePeurEtTokens()}
  </div>
</article>

<LinkPreview />

{#snippet dsDespoirDePeurEtTokens()}
	<section>
		<h2 id="ds-despoir-de-peur-et-tokens">{@html "Dés d'Espoir, de Peur et Tokens"}</h2>
	{@html "<p>Les dés de combats sont toujours doubles (contrairement au dé d'Attributs -qui ne ciblent personne- et utilise 1 dé).<br>\nParmi ces 2 dés, le joueur choisit un dé d'Espoir et un dé de Peur.</p>\n<p>Les Tokens des joueurs sont conservés entre les sessions.<br>\n\tCe n'est pas le cas pour les Tokens du Maître du Jeu qui recommence chaque session avec autant de Tokens qu'il y a de joueurs.</p>"}
	{@render obtention()}
	{@render utilisation()}
	</section>
{/snippet}

{#snippet obtention()}
	<section>
		<h3 id="obtention">{@html "Obtention"}</h3>
	{@html "<blockquote>Toujours un gain de +1 token.<br>Seules les actions du joueur fournissent des tokens.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Pour les joueurs</th><th>Pour le MJ</th></tr></thead><tbody><tr><td>Dé d'Espoir > Dé de Peur</td><td>Dé de Peur > Dé d'Espoir</td></tr><tr><td>Le même chiffre sur 2 dés</td><td>Le joueur fait un échec critique</td></tr><tr><td>Action collaborative avec un autre joueur</td><td></td></tr><tr><td>Tous les joueurs interviennent dans une discussion<br><em>(Intervention utile qui fait avancer les choses)</em></td><td></td></tr></tbody></table></div>\n<p>Lorsqu'il y a plusieurs intervenants dans l'obtention d'un token, les joueurs ne reçoivent que 1 token et décident à qui il revient.</p>"}

	</section>
{/snippet}

{#snippet utilisation()}
	<section>
		<h3 id="utilisation">{@html "Utilisation"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Pour les joueurs</th><th>Coût</th><th></th><th>Coût</th><th>Pour le MJ</th></tr></thead><tbody><tr><td>Aider un allié (lui donne +1d6 à son prochain jet)</td><td>1</td><td></td><td>1</td><td>Activer des dangers environnementaux</td></tr><tr><td>Compétences spéciales</td><td>?</td><td></td><td>?</td><td>Compétences spéciales des ennemis</td></tr><tr><td>Interrompre le MJ</td><td>1 par joueur</td><td></td><td>2</td><td>Interrompre un joueur</td></tr><tr><td>Evite le comas et remonte à 5 HP</td><td>3</td><td></td><td>1</td><td>Ajouter des ennemis</td></tr><tr><td>Expliquer et mimer en détail une action<br><em>(plutôt que de lancer les dés,<br>seulement contre les ennemis plus faibles)</em></td><td>1</td><td></td><td></td><td></td></tr></tbody></table></div>"}

	</section>
{/snippet}
