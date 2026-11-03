<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
          "id": "3-village-du-chef",
          "text": "3. Village du chef",
          "level": 3
      },
      {
          "id": "4-ville-du-dragon",
          "text": "4. Ville du Dragon",
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
  <title>{"Arc 4 - 23 - 23.05.26"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 4 - 23 - 23.05.26"}</h1>
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
	{@html "<blockquote>Résumé</blockquote>"}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html "Détails"}</h2>
	{@html "<p>Lieu actuel : Nirina, Orphelinat</p>\n<p>Objectif :</p>\n<p>Pnjs notables : Théon, Ygor (palefrenier), Maîtresse de maison</p>"}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html "Notes"}</h2>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Arek</th><th>Dara</th><th>Haelrak</th><th>Hazdaim</th><th>Léoric</th></tr></thead><tbody><tr><td><strong>AC</strong></td><td>8 (-3)</td><td>15</td><td>14</td><td>14</td><td>9</td></tr><tr><td><strong>DR</strong></td><td>36 (+30)</td><td>14</td><td>12</td><td>12</td><td>23</td></tr><tr><td><strong>DMG</strong></td><td>35-69</td><td>16-49</td><td>7-33</td><td>8-36</td><td>8-32</td></tr><tr><td><strong>Magie</strong></td><td>9 (1d8 +5)</td><td>9 (1d12)</td><td>14 (1d8)</td><td>9 (1d6)</td><td>9 (1d8)</td></tr></tbody></table></div>\n<div class=\"table-scroll\"><table><thead><tr><th>Ennemi</th><th>AC</th><th>DR</th><th>HP</th><th>Léger</th><th>Lourde</th><th>Magie</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html "Scénario"}</h2>

	{@render _OrphelinatDhazdaim()}
	{@render _CampementDeNixEtSalom()}
	{@render _VillageDuChef()}
	{@render _VilleDuDragon()}
	</section>
{/snippet}

{#snippet _OrphelinatDhazdaim()}
	<section>
		<h3 id="1-orphelinat-dhazdaim">{@html "1. Orphelinat d'Hazdaim"}</h3>
	<EmbedBlock route={"/Jeu/Sessions du Masque/Scenes/01. Orphelinat dHazdaim"} fragment={"Description"} />
	<EmbedBlock route={"/Jeu/Sessions du Masque/Scenes/01. Orphelinat dHazdaim"} fragment={"Actions des joueurs"} />

	</section>
{/snippet}

{#snippet _CampementDeNixEtSalom()}
	<section>
		<h3 id="2-campement-de-nix-et-salom">{@html "2. Campement de Nix et Salomé"}</h3>
	<EmbedBlock route={"/Jeu/Sessions du Masque/Scenes/02. Campement de Nix et Salome"} fragment={"Description"} />
	<EmbedBlock route={"/Jeu/Sessions du Masque/Scenes/02. Campement de Nix et Salome"} fragment={"Actions des joueurs"} />

	</section>
{/snippet}

{#snippet _VillageDuChef()}
	<section>
		<h3 id="3-village-du-chef">{@html "3. Village du chef"}</h3>
	<EmbedBlock route={"/Jeu/Sessions du Masque/Scenes/03. Village du chef"} fragment={"Description"} />
	<EmbedBlock route={"/Jeu/Sessions du Masque/Scenes/03. Village du chef"} fragment={"Actions des joueurs"} />

	</section>
{/snippet}

{#snippet _VilleDuDragon()}
	<section>
		<h3 id="4-ville-du-dragon">{@html "4. Ville du Dragon"}</h3>
	<EmbedBlock route={"/Jeu/Sessions du Masque/Scenes/04. Ville du Dragon"} fragment={"Description"} />
	<EmbedBlock route={"/Jeu/Sessions du Masque/Scenes/04. Ville du Dragon"} fragment={"Actions des joueurs"} />

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego</li><li><input type=\"checkbox\" disabled> Loïc</li><li><input type=\"checkbox\" disabled checked> Michel</li><li><input type=\"checkbox\" disabled> Nolan</li><li><input type=\"checkbox\" disabled checked> Thomas</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22b - 06.03.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22b - 06.03.26\" data-wiki-fragment=\"\">Arc 4 - 22b - 06.03.26</a></td><td><span class=\"wiki-unresolved\">Arc 4 - 24 - 05.06.26</span></td></tr></tbody></table></div>")}

	</section>
{/snippet}
