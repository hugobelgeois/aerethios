<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "bronze",
          "text": "Bronze",
          "level": 2
      },
      {
          "id": "argent",
          "text": "Argent",
          "level": 2
      },
      {
          "id": "or",
          "text": "Or",
          "level": 2
      },
      {
          "id": "platine",
          "text": "Platine",
          "level": 2
      },
      {
          "id": "lgendes",
          "text": "Légendes",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Arvens</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arvens</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render bronze()}
		{@render argent()}
		{@render or()}
		{@render platine()}
		{@render lgendes()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(">Ces rangs se gagnent en aidant le peuple de diverses manières.\n>Si un Arvens rate trop souvent ses missions ou n'est plus actif, ses rangs vont diminuer petit à petit (sauf une fois qu'il devient une légende).\n")}
{/snippet}

{#snippet bronze()}
	<section>
		<h2 id="bronze">Bronze</h2>
	{@html renderMarkdown(">Niveau 1 à 3 = Poids morts\n\n- **la guilde fournit des rations pour la quête en cours,**\n- **la guilde offre l'accès à ses bâtiments :**\n\t- **la taverne.**\n")}

	</section>
{/snippet}

{#snippet argent()}
	<section>
		<h2 id="argent">Argent</h2>
	{@html renderMarkdown(">Niveau 4 à 7 = Débutants\n\n| Crystaux | Maîtrise Magique | Magie Débloquée | Points magiques |\n| :------: | :--------------: | :-------------: | :-------------: |\n|    5     |        0         |        1        |     5 [1-5]     |\n\n- la guilde fournit des rations pour la quête en cours,\n- **la guilde paie la réparation des équipements,**\n- la guilde offre l'accès à ses bâtiments :\n\t- la taverne,\n\t- **l'auberge.**\n- **la guilde paie les transports nécessaires à la quête en cours :**\n\t- **terrestre**.\n")}

	</section>
{/snippet}

{#snippet or()}
	<section>
		<h2 id="or">Or</h2>
	{@html renderMarkdown(">Niveau 8 à 12 = Aventuriers\n\n| Crystaux | Maîtrise Magique | Magies Débloquées | Points magiques |\n| :------: | :--------------: | :---------------: | :-------------: |\n|  **10**  |      **1**       |       **2**       |  **10 [1-7]**   |\n\n- **la guilde fournit les ingrédients pour faire des plats (sans touche du chef) pour la quête en cours,**\n- la guilde paie la réparation des équipements,\n- la guilde offre l'accès à ses bâtiments :\n\t- la taverne,\n\t- l'auberge,\n\t- **la salle d'artisanat**.\n- la guilde paie les transports nécessaires à la quête en cours :\n\t- terrestre,\n\t- **aquatique**.\n")}

	</section>
{/snippet}

{#snippet platine()}
	<section>
		<h2 id="platine">Platine</h2>
	{@html renderMarkdown(">Niveau 13 à 18 = Héros\n\n| Crystaux | Maîtrise Magique | Magies Débloquées | Points magiques |\n| :------: | :--------------: | :---------------: | :-------------: |\n|    10    |        1         |       **3**       |  **15 [1-9]**   |\n\n- la guilde fournit les ingrédients pour faire des plats (**avec touche du chef**) pour la quête en cours,\n- la guilde paie la réparation des équipements,\n- la guilde offre l'accès à ses bâtiments :\n\t- la taverne,\n\t- l'auberge,\n\t- la salle d'artisanat,\n\t- **la salle d'alchimie**.\n- la guilde paie les transports nécessaires à la quête en cours :\n\t- terrestre,\n\t- aquatique,\n\t- **aérien**.\n")}

	</section>
{/snippet}

{#snippet lgendes()}
	<section>
		<h2 id="lgendes">Légendes</h2>
	{@html renderMarkdown(">Niveau 19 à 20 = Légendes\n>Se débloque selon le continent :\n>- **Diamant** (Ovliin),\n>- **Emeraude** (Nirina),\n>- **Rubis** (Kothula),\n>- **Topaze** (Suraja).\n\n| Crystaux | Maîtrise Magique | Magies Débloquées | Points magiques |\n| :------: | :--------------: | :---------------: | :-------------: |\n|    10    |      **2**       |         3         |  **20 [2-11]**  |\n\n- la guilde fournit les ingrédients pour faire des plats (avec touche du chef) pour la quête en cours,\n- la guilde paie la réparation des équipements,\n- la guilde offre l'accès à ses bâtiments :\n\t- la taverne,\n\t- l'auberge,\n\t- la salle d'artisanat,\n\t- la salle d'alchimie.\n- la guilde paie les transports nécessaires à la quête en cours :\n\t- terrestre,\n\t- aquatique,\n\t- aérien,\n\t- **téléportation.**")}

	</section>
{/snippet}
