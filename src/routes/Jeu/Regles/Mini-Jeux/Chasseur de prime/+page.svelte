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
          "id": "phase-de-recherche",
          "text": "Phase de Recherche",
          "level": 2
      },
      {
          "id": "ennuis-et-bagarres",
          "text": "Ennuis et Bagarres",
          "level": 2
      },
      {
          "id": "rcompenses",
          "text": "Récompenses",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Chasseur de prime"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Chasseur de prime"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render fonctionnement()}
		{@render phaseDeRecherche()}
		{@render ennuisEtBagarres()}
		{@render rcompenses()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<blockquote>Ce <span class=\"wiki-unresolved\">Mini-Jeux</span> permet aux joueurs de battre des cibles afin que le peuple soit libérer de leur joug ainsi que de se faire de l'argent.</blockquote>"}
{/snippet}

{#snippet fonctionnement()}
	<section>
		<h2 id="fonctionnement">{@html "Fonctionnement"}</h2>
	{@html "<p>À son arrivée en ville, le joueur reçoit une lettre anonyme (ou via un contact local) désignant une ou plusieurs cibles à neutraliser.</p>\n<p>Le joueur enquêtera de nuit pour découvrir la routine de sa cible afin de saisir le moment parfait pour frapper.</p>\n<hr>"}

	</section>
{/snippet}

{#snippet phaseDeRecherche()}
	<section>
		<h2 id="phase-de-recherche">{@html "Phase de Recherche"}</h2>
	{@html "<p>Pendant la nuit, le joueur faire jusqu'à <strong>4 recherches</strong>, chacune durant 2h.</p>\n<p>Pour chaque recherche, il jette <strong>1d6 pour gagner des Points de Recherche</strong> (PR).</p>\n<div class=\"table-scroll\"><table><thead><tr><th>1d6</th><th>Explications</th></tr></thead><tbody><tr><td>1</td><td>+1 PR</td></tr><tr><td>2</td><td>+2 PR</td></tr><tr><td>3</td><td>+3 PR</td></tr><tr><td>4</td><td>+4 PR</td></tr><tr><td>5</td><td>+5 PR</td></tr><tr><td>6</td><td>Le joueur se fait repérer (cf. Ennuis et Bagarres)</td></tr></tbody></table></div>\n<p>Le gain de PR peut varier en fonction de l'environnement où se déroule la recherche.</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Facteur</th><th>Effet sur les PR</th></tr></thead><tbody><tr><td>Bonne météo</td><td>+1</td></tr><tr><td>Mauvais temps</td><td>-1</td></tr><tr><td>Ville connue / quartier familier</td><td>+1</td></tr><tr><td>Ville étrangère / surveillance accrue</td><td>-1</td></tr><tr><td>Aide d’un contact ou informateur</td><td>+2</td></tr><tr><td>Blessure mineure</td><td>-2</td></tr></tbody></table></div>\n<blockquote>Le gain de PR ne peut pas être négatif.</blockquote>\n<p>Une fois que les PR ont atteint le Seuil de Recherche (SR) de la cible, <strong>la confrontation finale</strong> pourra être enclenchée <strong>à partir de la nuit suivante</strong>.</p>\n<p>Le SR est déterminé par cette formule :</p>\n<blockquote>SR = Niveau de la cible * 5</blockquote>\n<p>Le niveau maximum de la cible dépend de <strong>la réputation du joueur</strong>.</p>\n<p>La réputation monte lorsque la récompense inclut un bonus.</p>\n<blockquote>SR max = Réputation</blockquote>\n<hr>"}

	</section>
{/snippet}

{#snippet ennuisEtBagarres()}
	<section>
		<h2 id="ennuis-et-bagarres">{@html "Ennuis et Bagarres"}</h2>
	{@html "<p>Lorsqu’un 6 est obtenu pendant une phase de recherche, le joueur lance <strong>1d10 pour connaitre son adversaire</strong>.</p>\n<p>Le niveau de son adversaire est déterminé par cette formule :</p>\n<blockquote>Niveau de l'adversaire = Niveau de la cible - 3 - 1d10<br><br><em>(le résultat ne peut pas être inférieur à 1)</em></blockquote>\n<p>Les conflits se règlent avec <strong>le système de bagarre</strong> et non avec le système d'armes et de magie.</p>\n<p>Ce n'est pas le cas pour la cible si elle est aventurière ou Ange.</p>\n<hr>"}

	</section>
{/snippet}

{#snippet rcompenses()}
	<section>
		<h2 id="rcompenses">{@html "Récompenses"}</h2>
	{@html "<p>Une fois la confrontation terminée, le joueur gagne ou perd des pièces en fonction du niveau de l'adversaire ainsi que de son statut.</p>\n<p>S'il s'agit de la cible et qu'elle fait partie du peuple, la perte de pièce est doublée.</p>\n<p>S'il ne s'agit pas de la cible mais d'un simple adversaire, il lance également 1d4 pour gagner des PR.</p>\n<p>Ce tableau montre la valeur maximum qui peut être donnée en récompense.</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Niveau</th><th>Peuple</th><th>Aventurier</th><th>Ange</th></tr></thead><tbody><tr><td>1</td><td>5 pc</td><td>15 pc</td><td>-</td></tr><tr><td>2</td><td>15 pc</td><td>40 pc</td><td>-</td></tr><tr><td>3</td><td>30 pc</td><td>70 pc</td><td>-</td></tr><tr><td>4</td><td>50 pc</td><td>1 pa</td><td>-</td></tr><tr><td>5</td><td>75 pc</td><td>5 pa</td><td>-</td></tr><tr><td>6</td><td>1 pa</td><td>10 pa</td><td>-</td></tr><tr><td>7</td><td>3 pa</td><td>30 pa</td><td>-</td></tr><tr><td>8</td><td>6 pa</td><td>50 pa</td><td>15 po</td></tr><tr><td>9</td><td>10 pa</td><td>75 pa</td><td>30 po</td></tr><tr><td>10</td><td>-</td><td>1 po</td><td>50 po</td></tr><tr><td>11</td><td>-</td><td>2 po</td><td>70 po</td></tr><tr><td>12</td><td>-</td><td>4 po</td><td>100 po</td></tr><tr><td>13</td><td>-</td><td>7 po</td><td>140 po</td></tr><tr><td>14</td><td>-</td><td>10 po</td><td>190 po</td></tr><tr><td>15</td><td>-</td><td>15 po</td><td>250 po</td></tr><tr><td>16</td><td>-</td><td>20 po</td><td>320 po</td></tr><tr><td>17</td><td>-</td><td>30 po</td><td>400 po</td></tr><tr><td>18</td><td>-</td><td>40 po</td><td>500 po</td></tr><tr><td>19</td><td>-</td><td>60 po</td><td>650 po</td></tr><tr><td>20</td><td>-</td><td>80 po</td><td>800 po</td></tr></tbody></table></div>\n<p>Il est possible que cette valeur soit diminuée de moitié et qu'un bonus soit offert à la place.</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Bonus</th></tr></thead><tbody><tr><td>Réduction chez un type de marchand dans la ville</td></tr><tr><td>Pièce d'équipement</td></tr><tr><td>+1 Réputation pour obtenir de meilleurs contrats</td></tr><tr><td>Information utile pour des plots du jdr</td></tr></tbody></table></div>"}

	</section>
{/snippet}
