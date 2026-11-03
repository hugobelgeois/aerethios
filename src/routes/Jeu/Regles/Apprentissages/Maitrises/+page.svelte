<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "dbloquer",
          "text": "Débloquer",
          "level": 2
      },
      {
          "id": "matrise-darmes",
          "text": "Maîtrise d'armes",
          "level": 3
      },
      {
          "id": "magie",
          "text": "Magie",
          "level": 3
      },
      {
          "id": "amliorer",
          "text": "Améliorer",
          "level": 2
      },
      {
          "id": "matrise-darme-et-de-magie",
          "text": "Maîtrise d’Arme et de Magie",
          "level": 3
      },
      {
          "id": "magie",
          "text": "Magie",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Maîtrises"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Maîtrises"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render dbloquer()}
		{@render amliorer()}
  </div>
</article>

<LinkPreview />

{#snippet dbloquer()}
	<section>
		<h2 id="dbloquer">{@html "Débloquer"}</h2>

	{@render matriseDarmes()}
	{@render magie()}
	</section>
{/snippet}

{#snippet matriseDarmes()}
	<section>
		<h3 id="matrise-darmes">{@html "Maîtrise d'armes"}</h3>
	{@html "<p>Il n'y a rien de particulier à faire pour passer sa maîtrise d'armes de 0 à 1.</p>"}

	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">{@html "Magie"}</h3>
	{@html "<p>Pour passer une magie de 0 à 1, le joueur doit prendre 15 jours de leçons à 2po par leçon.</p>\n<p>Lorsqu’un joueur termine ses leçons, il lance 1d20 :</p>\n<ul><li>En cas de <strong>réussite critique</strong>, il peut choisir de débloquer le <strong>Feu</strong> (s’il ne l’a pas déjà).</li></ul>\n<ul><li>Sinon, il sélectionne librement <strong>une autre magie non encore maîtrisée</strong> parmi celles disponibles.</li></ul>\n<blockquote><strong>Note :</strong> Le <strong>Feu</strong> est considéré comme une magie fondamentale mais instable, réservée à ceux capables de dépasser leurs limites naturelles.</blockquote>"}

	</section>
{/snippet}

{#snippet amliorer()}
	<section>
		<h2 id="amliorer">{@html "Améliorer"}</h2>
	{@html "<p>L’amélioration de ses <strong>maîtrises d’armes</strong> et de sa <strong>magie</strong> demande rigueur et encadrement.</p>\n<p>Ainsi, il doit :</p>\n<ul><li>prendre une journée complète de leçon au lieu de 8h,</li></ul>\n<ul><li>jeter des dés liés à la maîtrise en question :</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Avec Tuteur</th><th>Sans Tuteur</th><th>Résultat</th></tr></thead><tbody><tr><td>1 réussite critique</td><td>1 réussite critique</td><td>2 réussites consécutives</td></tr><tr><td>3 réussites consécutives</td><td>5 réussites consécutives</td><td>+2 points</td></tr><tr><td>3 réussites non consécutives</td><td>5 réussites non consécutives</td><td>+1 point</td></tr><tr><td>-</td><td>3 échecs consécutifs</td><td>réinitialise le compteur de réussites</td></tr><tr><td>niveau actuel +1 PO/ leçon</td><td>gratuit</td><td>-</td></tr></tbody></table></div>"}
	{@render matriseDarmeEtDeMagie()}
	{@render magie_2()}
	</section>
{/snippet}

{#snippet matriseDarmeEtDeMagie()}
	<section>
		<h3 id="matrise-darme-et-de-magie">{@html "Maîtrise d’Arme et de Magie"}</h3>
	{@html "<blockquote>Jet : <strong>1d10</strong><br><em>Le résultat doit être strictement supérieur à sa maîtrise actuelle</em></blockquote>"}

	</section>
{/snippet}

{#snippet magie_2()}
	<section>
		<h3 id="magie">{@html "Magie"}</h3>
	{@html "<blockquote>Jet : <strong>1d20 + Attribut (Intelligence/ Sagesse) + Maîtrise Magique</strong><br><em>Le résultat doit être strictement supérieur aux valeurs du tableau ci-dessous.</em></blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Niveau actuel</th><th>Magies (sauf Feu)</th><th>Magie de Feu</th></tr></thead><tbody><tr><td>1 - 3</td><td>10</td><td>14</td></tr><tr><td>4 - 6</td><td>12</td><td>16</td></tr><tr><td>7 - 9</td><td>14</td><td>18</td></tr><tr><td>10 - 11</td><td>16</td><td>20</td></tr><tr><td>12 - 13</td><td>18</td><td>22</td></tr><tr><td>14 - 15</td><td>20</td><td>24</td></tr><tr><td>16 - 17</td><td>22</td><td>26</td></tr><tr><td>18</td><td>24</td><td>28</td></tr><tr><td>19</td><td>25</td><td>30</td></tr></tbody></table></div>\n<blockquote><strong>Exemple</strong> : pour améliorer une magie d'air de niveau 3, le jet doit être supérieur à 10 et le joueur doit payer 3po par jet.</blockquote>"}

	</section>
{/snippet}
