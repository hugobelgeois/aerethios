<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
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
          "id": "matrise-darme",
          "text": "Maîtrise d’Arme",
          "level": 3
      },
      {
          "id": "magie",
          "text": "Magie",
          "level": 3
      },
      {
          "id": "matrise-magique--crystaux",
          "text": "Maîtrise magique & Crystaux",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Maîtrises</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Maîtrises</h1>
  </header>
  <div class="markdown-rendered">
		{@render dbloquer()}
		{@render amliorer()}
  </div>
</article>

<LinkPreview />

{#snippet dbloquer()}
	<section>
		<h2 id="dbloquer">{@html applyBase("Débloquer")}</h2>

	{@render matriseDarmes()}
	{@render magie()}
	</section>
{/snippet}

{#snippet matriseDarmes()}
	<section>
		<h3 id="matrise-darmes">{@html applyBase("Maîtrise d'armes")}</h3>
	{@html renderMarkdown("\nIl n'y a rien de particulier à faire pour passer sa maîtrise d'armes de 0 à 1.\n")}

	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">{@html applyBase("Magie")}</h3>
	{@html renderMarkdown("\nPour passer une magie de 0 à 1, le joueur doit prendre 15 jours de leçons à 2po par leçon.\n\nLorsqu’un joueur termine ses leçons, il lance 1d20 :\n\n- En cas de **réussite critique**, il peut choisir de débloquer le **Feu** (s’il ne l’a pas déjà).\n\n- Sinon, il sélectionne librement **une autre magie non encore maîtrisée** parmi celles disponibles.\n\n> **Note :** Le **Feu** est considéré comme une magie fondamentale mais instable, réservée à ceux capables de dépasser leurs limites naturelles.\n")}

	</section>
{/snippet}

{#snippet amliorer()}
	<section>
		<h2 id="amliorer">{@html applyBase("Améliorer")}</h2>
	{@html renderMarkdown("\nL’amélioration de ses **maîtrises d’armes** et de sa **magie** demande rigueur et encadrement.\n\nAinsi, il doit :\n\n- prendre une journée complète de leçon au lieu de 8h,\n\n- jeter des dés liés à la maîtrise en question :\n\n|         Avec Tuteur          |         Sans Tuteur          |                              Résultat |\n| :--------------------------: | :--------------------------: | ------------------------------------: |\n|     1 réussite critique      |     1 réussite critique      |              2 réussites consécutives |\n|   3 réussites consécutives   |   5 réussites consécutives   |                             +2 points |\n| 3 réussites non consécutives | 5 réussites non consécutives |                              +1 point |\n|              -               |     3 échecs consécutifs     | réinitialise le compteur de réussites |\n|  niveau actuel +1 PO/ leçon  |           gratuit            |                                     - |\n")}
	{@render matriseDarme()}
	{@render magie_2()}
	{@render matriseMagique_Crystaux()}
	</section>
{/snippet}

{#snippet matriseDarme()}
	<section>
		<h3 id="matrise-darme">{@html applyBase("Maîtrise d’Arme")}</h3>
	{@html renderMarkdown("\n>Jet : **1d10**\n>*Le résultat doit être strictement supérieur à sa maîtrise actuelle*\n")}

	</section>
{/snippet}

{#snippet magie_2()}
	<section>
		<h3 id="magie">{@html applyBase("Magie")}</h3>
	{@html renderMarkdown("\n>Jet : **1d20 + Attribut (Intelligence/ Sagesse) + Maîtrise Magique**\n>*Le résultat doit être strictement supérieur aux valeurs du tableau ci-dessous.*\n\n| Niveau actuel | Magies (sauf Feu) | Magie de Feu |\n| ------------- | ----------------- | ------------ |\n| 1 - 3         | 10                | 14           |\n| 4 - 6         | 12                | 16           |\n| 7 - 9         | 14                | 18           |\n| 10 - 11       | 16                | 20           |\n| 12 - 13       | 18                | 22           |\n| 14 - 15       | 20                | 24           |\n| 16 - 17       | 22                | 26           |\n| 18            | 24                | 28           |\n| 19            | 25                | 30           |\n\n>**Exemple** : pour améliorer une magie d'air de niveau 3, le jet doit être supérieur à 10 et le joueur doit payer 3po par jet.\n")}

	</section>
{/snippet}

{#snippet matriseMagique_Crystaux()}
	<section>
		<h3 id="matrise-magique--crystaux">{@html applyBase("Maîtrise magique & Crystaux")}</h3>
	{@html renderMarkdown("\nPour augmenter son nombre de crystaux ou sa maîtrise magique, il faut généralement monter en rang chez les <span class=\"wiki-unresolved\">Arvens</span> ou les <a href=\"%%BASE%%/Jeu/Regles/Competences/Maisons/Scienctes\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Maisons/Scienctes\" data-wiki-fragment=\"\">Scienctes</a>.")}

	</section>
{/snippet}
