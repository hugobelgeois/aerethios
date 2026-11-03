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
          "id": "joueurs",
          "text": "Joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Arc 4 - 22b - 06.03.26"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 4 - 22b - 06.03.26"}</h1>
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
	{@html "<p>Lieu actuel : Nirina, Forêt</p>\n<p>Objectif :</p>\n<p>Pnjs notables :</p>"}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html "Notes"}</h2>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Arek</th><th>Dara</th><th>Haelrak</th><th>Hazdaim</th><th>Léoric</th><th>Zveindel</th></tr></thead><tbody><tr><td><strong>AC</strong></td><td>8 (-3)</td><td>15</td><td>14</td><td>14</td><td>9</td><td>10</td></tr><tr><td><strong>DR</strong></td><td>25 (+40)</td><td>14</td><td>12</td><td>12</td><td>23</td><td>20</td></tr><tr><td><strong>DMG</strong></td><td>5 +36|30<br>6 +55</td><td>9 +36|30|18<br>14 +10</td><td>12 +15|4<br>16 +2 +5</td><td>10 +14|6<br>15 +2 +10</td><td>14 +7|6<br>7 +20</td><td>-</td></tr><tr><td><strong>Magie</strong></td><td>9 (1d8 +5)</td><td>9 (1d12)</td><td>14 (1d8)</td><td>9 (1d6)</td><td>9 (1d8)</td><td>14 (1d8 +2)</td></tr></tbody></table></div>\n<div class=\"table-scroll\"><table><thead><tr><th>Ennemi</th><th>AC</th><th>DR</th><th>HP</th><th>Léger</th><th>Lourde</th><th>Magie</th></tr></thead><tbody><tr><td>Soul Catcher</td><td>8</td><td>12</td><td>100</td><td></td><td></td><td>-</td></tr><tr><td>Magala</td><td>3d6</td><td>20</td><td>300</td><td></td><td></td><td>-</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html "Scénario"}</h2>
	{@html "<p>En chassant un enfant, ils se perdent dans la brume et se font traquer par un Soul Catcher (voir sur discord)</p>\n<p>Mais en fait ce n'est pas eux qui se faisaient traquer, c'était le Soul Catcher qui se faisait traquer par le Magala</p>\n<p>Le magala les attaque et ils doivent choisir qui réagira à son attaque (ils ne peuvent pas tous agir)</p>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego 24</li><li><input type=\"checkbox\" disabled checked> Loïc 19</li><li><input type=\"checkbox\" disabled> Lucas 9</li><li><input type=\"checkbox\" disabled checked> Michel 26</li><li><input type=\"checkbox\" disabled checked> Nolan 10</li><li><input type=\"checkbox\" disabled> Thomas 22</li><li><input type=\"checkbox\" disabled> William 7</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22 - 03.04.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22 - 03.04.26\" data-wiki-fragment=\"\">Arc 4 - 22 - 03.04.26</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 23 - 23.05.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 23 - 23.05.26\" data-wiki-fragment=\"\">Arc 4 - 23 - 23.05.26</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
