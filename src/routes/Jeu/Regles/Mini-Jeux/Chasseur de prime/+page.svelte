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
  <title>Chasseur de prime</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Chasseur de prime</h1>
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
	{@html renderMarkdown("> Ce <span class=\"wiki-unresolved\">Mini-Jeux</span> permet aux joueurs de battre des cibles afin que le peuple soit libérer de leur joug ainsi que de se faire de l'argent.\n")}
{/snippet}

{#snippet fonctionnement()}
	<section>
		<h2 id="fonctionnement">{@html applyBase("Fonctionnement")}</h2>
	{@html renderMarkdown("\nÀ son arrivée en ville, le joueur reçoit une lettre anonyme (ou via un contact local) désignant une ou plusieurs cibles à neutraliser.\n\nLe joueur enquêtera de nuit pour découvrir la routine de sa cible afin de saisir le moment parfait pour frapper.\n\n---\n")}

	</section>
{/snippet}

{#snippet phaseDeRecherche()}
	<section>
		<h2 id="phase-de-recherche">{@html applyBase("Phase de Recherche")}</h2>
	{@html renderMarkdown("\nPendant la nuit, le joueur faire jusqu'à **4 recherches**, chacune durant 2h.\n\nPour chaque recherche, il jette **1d6 pour gagner des Points de Recherche** (PR).\n\n| 1d6 | Explications                                       |\n| --- | -------------------------------------------------- |\n| 1   | +1 PR                                              |\n| 2   | +2 PR                                              |\n| 3   | +3 PR                                              |\n| 4   | +4 PR                                              |\n| 5   | +5 PR                                              |\n| 6   | Le joueur se fait repérer (cf. Ennuis et Bagarres) |\n\nLe gain de PR peut varier en fonction de l'environnement où se déroule la recherche.\n\n| Facteur                                                  | Effet sur les PR     |\n| -------------------------------------------------------- | -------------------- |\n| Bonne météo                                              | +1                   |\n| Mauvais temps                                            | -1                   |\n| Ville connue / quartier familier                         | +1                   |\n| Ville étrangère / surveillance accrue                    | -1                   |\n| Aide d’un contact ou informateur                         | +2                   |\n| Blessure mineure                                         | -2                   |\n\n>Le gain de PR ne peut pas être négatif.\n\nUne fois que les PR ont atteint le Seuil de Recherche (SR) de la cible, **la confrontation finale** pourra être enclenchée **à partir de la nuit suivante**.\n\nLe SR est déterminé par cette formule :\n>SR = Niveau de la cible * 5\n\nLe niveau maximum de la cible dépend de **la réputation du joueur**.\n\nLa réputation monte lorsque la récompense inclut un bonus.\n>SR max = Réputation\n\n---\n")}

	</section>
{/snippet}

{#snippet ennuisEtBagarres()}
	<section>
		<h2 id="ennuis-et-bagarres">{@html applyBase("Ennuis et Bagarres")}</h2>
	{@html renderMarkdown("\nLorsqu’un 6 est obtenu pendant une phase de recherche, le joueur lance **1d10 pour connaitre son adversaire**.\n\nLe niveau de son adversaire est déterminé par cette formule :\n>Niveau de l'adversaire = Niveau de la cible - 3 - 1d10\n>\n>*(le résultat ne peut pas être inférieur à 1)*\n\nLes conflits se règlent avec **le système de bagarre** et non avec le système d'armes et de magie.\n\nCe n'est pas le cas pour la cible si elle est aventurière ou Ange.\n\n---\n")}

	</section>
{/snippet}

{#snippet rcompenses()}
	<section>
		<h2 id="rcompenses">{@html applyBase("Récompenses")}</h2>
	{@html renderMarkdown("\nUne fois la confrontation terminée, le joueur gagne ou perd des pièces en fonction du niveau de l'adversaire ainsi que de son statut.\n\nS'il s'agit de la cible et qu'elle fait partie du peuple, la perte de pièce est doublée.\n\nS'il ne s'agit pas de la cible mais d'un simple adversaire, il lance également 1d4 pour gagner des PR.\n\nCe tableau montre la valeur maximum qui peut être donnée en récompense.\n\n| Niveau | Peuple | Aventurier |   Ange |\n| ------ | -----: | ---------: | -----: |\n| 1      |   5 pc |      15 pc |      - |\n| 2      |  15 pc |      40 pc |      - |\n| 3      |  30 pc |      70 pc |      - |\n| 4      |  50 pc |       1 pa |      - |\n| 5      |  75 pc |       5 pa |      - |\n| 6      |   1 pa |      10 pa |      - |\n| 7      |   3 pa |      30 pa |      - |\n| 8      |   6 pa |      50 pa |  15 po |\n| 9      |  10 pa |      75 pa |  30 po |\n| 10     |      - |       1 po |  50 po |\n| 11     |      - |       2 po |  70 po |\n| 12     |      - |       4 po | 100 po |\n| 13     |      - |       7 po | 140 po |\n| 14     |      - |      10 po | 190 po |\n| 15     |      - |      15 po | 250 po |\n| 16     |      - |      20 po | 320 po |\n| 17     |      - |      30 po | 400 po |\n| 18     |      - |      40 po | 500 po |\n| 19     |      - |      60 po | 650 po |\n| 20     |      - |      80 po | 800 po |\n\nIl est possible que cette valeur soit diminuée de moitié et qu'un bonus soit offert à la place.\n\n| Bonus                                            |\n| ------------------------------------------------ |\n| Réduction chez un type de marchand dans la ville |\n| Pièce d'équipement                               |\n| +1 Réputation pour obtenir de meilleurs contrats |\n| Information utile pour des plots du jdr          |")}

	</section>
{/snippet}
