<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "dtails",
          "text": "Détails",
          "level": 2
      },
      {
          "id": "notes",
          "text": "Notes",
          "level": 2
      },
      {
          "id": "scnario",
          "text": "Scénario",
          "level": 2
      },
      {
          "id": "1-orphelinat-dhazdaim",
          "text": "1. Orphelinat d'Hazdaim",
          "level": 3
      },
      {
          "id": "2-campement-de-nix-et-salom",
          "text": "2. Campement de Nix et Salomé",
          "level": 3
      },
      {
          "id": "3-ville-du-chef",
          "text": "3. Ville du chef",
          "level": 3
      },
      {
          "id": "joueurs",
          "text": "Joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Arc 4 - 23 - 23.05.26</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 4 - 23 - 23.05.26</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render dtails()}
		{@render notes()}
		{@render scnario()}
		{@render joueurs()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("> Résumé\n")}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html applyBase("Détails")}</h2>
	{@html renderMarkdown("\nLieu actuel : Nirina, Orphelinat\n\nObjectif :\n\nPnjs notables : Théon, Ygor (palefrenier), Maîtresse de maison\n")}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html applyBase("Notes")}</h2>
	{@html renderMarkdown("\n|           |    Arek    |   Dara   | Haelrak  | Hazdaim | Léoric  |\n| --------- | :--------: | :------: | :------: | :-----: | :-----: |\n| **AC**    |   8 (-3)   |    15    |    14    |   14    |    9    |\n| **DR**    |  36 (+30)  |    14    |    12    |   12    |   23    |\n| **DMG**   |   35-69    |  16-49   |   7-33   |  8-36   |  8-32   |\n| **Magie** | 9 (1d8 +5) | 9 (1d12) | 14 (1d8) | 9 (1d6) | 9 (1d8) |\n\n| Ennemi | AC  | DR  | HP  | Léger | Lourde | Magie |\n| ------ | :-: | :-: | :-: | :---: | :----: | :---: |\n|        |     |     |     |       |        |       |\n")}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html applyBase("Scénario")}</h2>

	{@render _OrphelinatDhazdaim()}
	{@render _CampementDeNixEtSalom()}
	{@render _VilleDuChef()}
	</section>
{/snippet}

{#snippet _OrphelinatDhazdaim()}
	<section>
		<h3 id="1-orphelinat-dhazdaim">{@html applyBase("1. Orphelinat d'Hazdaim")}</h3>
	<EmbedBlock route={"/Jeu/Sessions du Masque/Scenes/01. Orphelinat dHazdaim"} fragment={"Description"} />
	<EmbedBlock route={"/Jeu/Sessions du Masque/Scenes/01. Orphelinat dHazdaim"} fragment={"Actions des joueurs"} />

	</section>
{/snippet}

{#snippet _CampementDeNixEtSalom()}
	<section>
		<h3 id="2-campement-de-nix-et-salom">{@html applyBase("2. Campement de Nix et Salomé")}</h3>
	<EmbedBlock route={"/Jeu/Sessions du Masque/Scenes/02. Campement de Nix et Salome"} fragment={"Description"} />
	<EmbedBlock route={"/Jeu/Sessions du Masque/Scenes/02. Campement de Nix et Salome"} fragment={"Actions des joueurs"} />

	</section>
{/snippet}

{#snippet _VilleDuChef()}
	<section>
		<h3 id="3-ville-du-chef">{@html applyBase("3. Ville du chef")}</h3>
	<EmbedBlock route={"/Jeu/Sessions du Masque/Scenes/03. Ville du chef"} fragment={"Description"} />
	<EmbedBlock route={"/Jeu/Sessions du Masque/Scenes/03. Ville du chef"} fragment={"Actions des joueurs"} />

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html applyBase("Joueurs")}</h2>
	{@html renderMarkdown("\n- [x] Diego\n- [ ] Loïc\n- [x] Michel\n- [ ] Nolan\n- [x] Thomas\n\n|         Précédent          |          Suivant          |\n| :------------------------: | :-----------------------: |\n| <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22b - 06.03.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22b - 06.03.26\" data-wiki-fragment=\"\">Arc 4 - 22b - 06.03.26</a> | <a href=\"%%BASE%%/0_Private/Arc 4 - 24 - 05.06.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/0_Private/Arc 4 - 24 - 05.06.26\" data-wiki-fragment=\"\">Arc 4 - 24 - 05.06.26</a> |")}

	</section>
{/snippet}
