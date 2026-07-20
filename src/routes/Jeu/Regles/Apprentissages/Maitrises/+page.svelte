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
	{@html renderMarkdown("\r\nIl n'y a rien de particulier à faire pour passer sa maîtrise d'armes de 0 à 1.\r\n\r")}

	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">{@html applyBase("Magie")}</h3>
	{@html renderMarkdown("\r\nPour passer une magie de 0 à 1, le joueur doit prendre 15 jours de leçons à 2po par leçon.\r\n\r\nLorsqu’un joueur termine ses leçons, il lance 1d20 :\r\n\r\n- En cas de **réussite critique**, il peut choisir de débloquer le **Feu** (s’il ne l’a pas déjà).\r\n\r\n- Sinon, il sélectionne librement **une autre magie non encore maîtrisée** parmi celles disponibles.\r\n\r\n> **Note :** Le **Feu** est considéré comme une magie fondamentale mais instable, réservée à ceux capables de dépasser leurs limites naturelles.\r\n\r")}

	</section>
{/snippet}

{#snippet amliorer()}
	<section>
		<h2 id="amliorer">{@html applyBase("Améliorer")}</h2>
	{@html renderMarkdown("\r\nL’amélioration de ses **maîtrises d’armes** et de sa **magie** demande rigueur et encadrement.\r\n\r\nAinsi, il doit :\r\n\r\n- prendre une journée complète de leçon au lieu de 8h,\r\n\r\n- jeter des dés liés à la maîtrise en question :\r\n\r\n|         Avec Tuteur          |         Sans Tuteur          |                              Résultat |\r\n| :--------------------------: | :--------------------------: | ------------------------------------: |\r\n|     1 réussite critique      |     1 réussite critique      |              2 réussites consécutives |\r\n|   3 réussites consécutives   |   5 réussites consécutives   |                             +2 points |\r\n| 3 réussites non consécutives | 5 réussites non consécutives |                              +1 point |\r\n|              -               |     3 échecs consécutifs     | réinitialise le compteur de réussites |\r\n|  niveau actuel +1 PO/ leçon  |           gratuit            |                                     - |\r\n\r")}
	{@render matriseDarmeEtDeMagie()}
	{@render magie_2()}
	</section>
{/snippet}

{#snippet matriseDarmeEtDeMagie()}
	<section>
		<h3 id="matrise-darme-et-de-magie">{@html applyBase("Maîtrise d’Arme et de Magie")}</h3>
	{@html renderMarkdown("\r\n>Jet : **1d10**\r\n>*Le résultat doit être strictement supérieur à sa maîtrise actuelle*\r\n\r")}

	</section>
{/snippet}

{#snippet magie_2()}
	<section>
		<h3 id="magie">{@html applyBase("Magie")}</h3>
	{@html renderMarkdown("\r\n>Jet : **1d20 + Attribut (Intelligence/ Sagesse) + Maîtrise Magique**\r\n>*Le résultat doit être strictement supérieur aux valeurs du tableau ci-dessous.*\r\n\r\n| Niveau actuel | Magies (sauf Feu) | Magie de Feu |\r\n| ------------- | ----------------- | ------------ |\r\n| 1 - 3         | 10                | 14           |\r\n| 4 - 6         | 12                | 16           |\r\n| 7 - 9         | 14                | 18           |\r\n| 10 - 11       | 16                | 20           |\r\n| 12 - 13       | 18                | 22           |\r\n| 14 - 15       | 20                | 24           |\r\n| 16 - 17       | 22                | 26           |\r\n| 18            | 24                | 28           |\r\n| 19            | 25                | 30           |\r\n\r\n>**Exemple** : pour améliorer une magie d'air de niveau 3, le jet doit être supérieur à 10 et le joueur doit payer 3po par jet.")}

	</section>
{/snippet}
