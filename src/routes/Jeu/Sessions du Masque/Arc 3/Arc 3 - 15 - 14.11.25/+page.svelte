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
          "id": "rappel-chlorys-leur-donne-des-infos-sur-shara-ishvalda",
          "text": "Rappel) Chlorys leur donne des infos sur Shara Ishvalda",
          "level": 4
      },
      {
          "id": "1-dara-apprend-quon-a-vol-son-stock",
          "text": "1) Dara apprend qu'on a volé son stock",
          "level": 4
      },
      {
          "id": "2-recherche-des-voleurs",
          "text": "2) Recherche des voleurs",
          "level": 4
      },
      {
          "id": "3-confrontation-groupe-platine",
          "text": "3) Confrontation groupe platine",
          "level": 4
      },
      {
          "id": "4-les-gardes-les-arrtent-pour-comportement-dangereux",
          "text": "4) Les gardes les arrêtent pour comportement dangereux",
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
  <title>{"Arc 3 - 15 - 14.11.25"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 3 - 15 - 14.11.25"}</h1>
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
	{@html "<p>Lieu actuel : Suraja, Irkma</p>\n<p>Objectif : Récupérer le stock de Dara et combattre les platines</p>\n<p>Pnjs notables : Chlorys</p>"}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html "Scénario"}</h2>
	{@html "<p>Ils font un emprunt à la banque de 250po au nom de Zvein</p>"}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html "Notes"}</h2>

	{@render rappelChlorysLeurDonneDesInfosSurSharaIshvalda()}
	{@render _DaraApprendQuonAVolSonStock()}
	{@render _RechercheDesVoleurs()}
	{@render _ConfrontationGroupePlatine()}
	{@render _LesGardesLesArrtentPourComportementDangereux()}
	</section>
{/snippet}

{#snippet rappelChlorysLeurDonneDesInfosSurSharaIshvalda()}
	<section>
		<h4 id="rappel-chlorys-leur-donne-des-infos-sur-shara-ishvalda">{@html "Rappel) Chlorys leur donne des infos sur Shara Ishvalda"}</h4>
	{@html "<blockquote><strong>NPC interaction</strong>, - > faiblesses Shara Ishvalda</blockquote>\n<blockquote>Armure/ Phase 1</blockquote>\n<ul><li>Magie explosive/ solide</li><li>Baliste/ Coups contondants</li><li>Mono-tâche/ Focus singulier</li><li>Non détectable par magie quand il dort</li></ul>\n<ul><li>Un groupe platine le traquait depuis plusieurs semaines pour en savoir plus et préparait l'équipement pour l'abattre</li></ul>"}

	</section>
{/snippet}

{#snippet _DaraApprendQuonAVolSonStock()}
	<section>
		<h4 id="1-dara-apprend-quon-a-vol-son-stock">{@html "1) Dara apprend qu'on a volé son stock"}</h4>
	{@html "<blockquote><strong>Enigme</strong>, Dara > retrouver son stock/ les voleurs</blockquote>\n<ul><li>Il se rend compte qu'il s'est volé lui-même ?</li><li>Il engage un pisteur pour trouver la cargaison/ les voleurs</li></ul>"}

	</section>
{/snippet}

{#snippet _RechercheDesVoleurs()}
	<section>
		<h4 id="2-recherche-des-voleurs">{@html "2) Recherche des voleurs"}</h4>
	{@html "<blockquote><strong>Exploration</strong>, Hazdaim > utiliser les orphelins/ ses petits oiseaux pour pister</blockquote>\n<ul><li>Ils sont au 2eme étage d'Irkma</li><li>Ils doivent trouver un moyen de monter</li></ul>"}

	</section>
{/snippet}

{#snippet _ConfrontationGroupePlatine()}
	<section>
		<h4 id="3-confrontation-groupe-platine">{@html "3) Confrontation groupe platine"}</h4>
	{@html "<blockquote><strong>Combat / Npc Interaction</strong>, Léoric > négociation religieuse?</blockquote>\n<blockquote>C'est l'aventurier que Dara a volé avec sa magie de ténèbres</blockquote>\n<p>Ils sont tous Templis car leur chapelets sont visibles<br>\nCe sont également des vrais platines (lvl 16-18, équipements rares)</p>\n<ul><li>Guerrier armure lourde Solide +</li><li>Fighter armure moyenne Lumière + Foudre</li><li>Mage armure légère Feu + Air + Ténèbres</li></ul>\n<ul><li>Le dernier survivant se rend et explique ce qu'ils ont appris sur Shara Ishvalda afin qu'on lui laisse la vie sauve</li></ul>\n<blockquote>Corps/ Phase 2</blockquote>\n<ul><li>Coups tranchants & perforants</li><li>Magie liquide/ lumière</li><li>Le tank ne doit plus être la cible principale, il faut que ce soit des agiles</li><li>Attention à sa magie de l'air condensé > Canon haute pression</li></ul>\n<ul><li>S'ils perdent le combat, ils se font dépouiller de leur argent</li></ul>"}

	</section>
{/snippet}

{#snippet _LesGardesLesArrtentPourComportementDangereux()}
	<section>
		<h4 id="4-les-gardes-les-arrtent-pour-comportement-dangereux">{@html "4) Les gardes les arrêtent pour comportement dangereux"}</h4>
	{@html "<blockquote><strong>Exploration</strong>, - > se rappeler du chemin qui a été expliqué oralement, ou errer</blockquote>\n<ul><li>Ils sont emmenés dans les sous-sols de la ville, dans une cellule mais ne ferment pas la porte à clef</li><li>Ils doivent sortir en prenant le bon chemin</li></ul>\n<ul><li>S'ils prennent trop de temps ou se perdent, Chlorys les trouve</li></ul>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego 16</li><li><input type=\"checkbox\" disabled checked> Loïc 13</li><li><input type=\"checkbox\" disabled checked> Lucas 6</li><li><input type=\"checkbox\" disabled checked> Michel 18</li><li><input type=\"checkbox\" disabled checked> Nolan 4</li><li><input type=\"checkbox\" disabled checked> Thomas 17</li><li><input type=\"checkbox\" disabled> William 7</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 14 - 11.10.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 14 - 11.10.25\" data-wiki-fragment=\"\">Arc 3 - 14 - 11.10.25</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 16 - 28.11.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 16 - 28.11.25\" data-wiki-fragment=\"\">Arc 3 - 16 - 28.11.25</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
