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
          "id": "scnario",
          "text": "Scénario",
          "level": 2
      },
      {
          "id": "notes",
          "text": "Notes",
          "level": 2
      },
      {
          "id": "5-chlorys-vient-sexcuser",
          "text": "5) Chlorys vient s'excuser",
          "level": 4
      },
      {
          "id": "6-le-vol-de-raja",
          "text": "6) Le vol de Raja",
          "level": 4
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
  <title>{"Arc 3 - 16 - 28.11.25"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 3 - 16 - 28.11.25"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render dtails()}
		{@render scnario()}
		{@render notes()}
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
	{@html "<p>Lieu actuel : Suraja, Irkma</p>\n<p>Objectif :</p>\n<p>Pnjs notables : Chlorys</p>"}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html "Scénario"}</h2>


	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html "Notes"}</h2>

	{@render _ChlorysVientSexcuser()}
	{@render _LeVolDeRaja()}
	</section>
{/snippet}

{#snippet _ChlorysVientSexcuser()}
	<section>
		<h4 id="5-chlorys-vient-sexcuser">{@html "5) Chlorys vient s'excuser"}</h4>
	{@html "<blockquote><strong>NPC Interaction</strong>, Dara, Haelrak, Zvein ></blockquote>\n<p>Elle n'était pas au courant qu'ils volaient un compagnon à Arek, et veut se faire pardonner en ayant fait des recherches pour eux</p>\n<p>Le masque est lié à la religion, potentiellement pour servir d'arme contre les dieux.<br>\nLéoric et Hazdaim pour contacter le dieu dormant<br>\nArek pour les protéger<br>\nElle propose à Dara de voler Raja car c'est elle qui a commandité son vol<br>\nÉquipe de 3 pour la discrétion</p>"}

	</section>
{/snippet}

{#snippet _LeVolDeRaja()}
	<section>
		<h4 id="6-le-vol-de-raja">{@html "6) Le vol de Raja"}</h4>
	{@html "<blockquote><strong>Énigme</strong>, - > le coffre est sécurisé</blockquote>\n<p>Raja a utilisé la magie de Lumière et de Ténèbres pour sécuriser le coffre<br>\nS'ils ratent leur jet, il explose et leur met un malus</p>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego 17</li><li><input type=\"checkbox\" disabled checked> Loïc 14</li><li><input type=\"checkbox\" disabled checked> Lucas 7</li><li><input type=\"checkbox\" disabled checked> Michel 19</li><li><input type=\"checkbox\" disabled checked> Nolan 5</li><li><input type=\"checkbox\" disabled> Thomas 17</li><li><input type=\"checkbox\" disabled> William 7</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 15 - 14.11.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 15 - 14.11.25\" data-wiki-fragment=\"\">Arc 3 - 15 - 14.11.25</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 17 - 20.12.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 17 - 20.12.25\" data-wiki-fragment=\"\">Arc 3 - 17 - 20.12.25</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
