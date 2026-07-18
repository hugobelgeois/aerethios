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
  <title>Arc 3 - 15 - 14.11.25</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 3 - 15 - 14.11.25</h1>
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
	{@html renderMarkdown("> Résumé\n")}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html applyBase("Détails")}</h2>
	{@html renderMarkdown("\nLieu actuel : Suraja, Irkma\n\nObjectif : Récupérer le stock de Dara et combattre les platines\n\nPnjs notables : Chlorys\n")}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html applyBase("Scénario")}</h2>
	{@html renderMarkdown("\nIls font un emprunt à la banque de 250po au nom de Zvein\n")}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html applyBase("Notes")}</h2>

	{@render rappelChlorysLeurDonneDesInfosSurSharaIshvalda()}
	{@render _DaraApprendQuonAVolSonStock()}
	{@render _RechercheDesVoleurs()}
	{@render _ConfrontationGroupePlatine()}
	{@render _LesGardesLesArrtentPourComportementDangereux()}
	</section>
{/snippet}

{#snippet rappelChlorysLeurDonneDesInfosSurSharaIshvalda()}
	<section>
		<h4 id="rappel-chlorys-leur-donne-des-infos-sur-shara-ishvalda">{@html applyBase("Rappel) Chlorys leur donne des infos sur Shara Ishvalda")}</h4>
	{@html renderMarkdown("> **NPC interaction**, - > faiblesses Shara Ishvalda\n\n> Armure/ Phase 1\n- Magie explosive/ solide\n- Baliste/ Coups contondants\n- Mono-tâche/ Focus singulier\n- Non détectable par magie quand il dort\n\n- Un groupe platine le traquait depuis plusieurs semaines pour en savoir plus et préparait l'équipement pour l'abattre\n")}

	</section>
{/snippet}

{#snippet _DaraApprendQuonAVolSonStock()}
	<section>
		<h4 id="1-dara-apprend-quon-a-vol-son-stock">{@html applyBase("1) Dara apprend qu'on a volé son stock")}</h4>
	{@html renderMarkdown("> **Enigme**, Dara > retrouver son stock/ les voleurs\n\n- Il se rend compte qu'il s'est volé lui-même ?\n- Il engage un pisteur pour trouver la cargaison/ les voleurs\n")}

	</section>
{/snippet}

{#snippet _RechercheDesVoleurs()}
	<section>
		<h4 id="2-recherche-des-voleurs">{@html applyBase("2) Recherche des voleurs")}</h4>
	{@html renderMarkdown("> **Exploration**, Hazdaim > utiliser les orphelins/ ses petits oiseaux pour pister\n\n- Ils sont au 2eme étage d'Irkma\n- Ils doivent trouver un moyen de monter\n")}

	</section>
{/snippet}

{#snippet _ConfrontationGroupePlatine()}
	<section>
		<h4 id="3-confrontation-groupe-platine">{@html applyBase("3) Confrontation groupe platine")}</h4>
	{@html renderMarkdown("> **Combat / Npc Interaction**, Léoric > négociation religieuse?\n\n> C'est l'aventurier que Dara a volé avec sa magie de ténèbres\n\nIls sont tous Templis car leur chapelets sont visibles\nCe sont également des vrais platines (lvl 16-18, équipements rares)\n- Guerrier armure lourde Solide +\n- Fighter armure moyenne Lumière + Foudre\n- Mage armure légère Feu + Air + Ténèbres\n\n- Le dernier survivant se rend et explique ce qu'ils ont appris sur Shara Ishvalda afin qu'on lui laisse la vie sauve\n> Corps/ Phase 2\n- Coups tranchants & perforants\n- Magie liquide/ lumière\n- Le tank ne doit plus être la cible principale, il faut que ce soit des agiles\n- Attention à sa magie de l'air condensé > Canon haute pression\n\n- S'ils perdent le combat, ils se font dépouiller de leur argent\n")}

	</section>
{/snippet}

{#snippet _LesGardesLesArrtentPourComportementDangereux()}
	<section>
		<h4 id="4-les-gardes-les-arrtent-pour-comportement-dangereux">{@html applyBase("4) Les gardes les arrêtent pour comportement dangereux")}</h4>
	{@html renderMarkdown("> **Exploration**, - > se rappeler du chemin qui a été expliqué oralement, ou errer\n\n- Ils sont emmenés dans les sous-sols de la ville, dans une cellule mais ne ferment pas la porte à clef\n- Ils doivent sortir en prenant le bon chemin\n\n- S'ils prennent trop de temps ou se perdent, Chlorys les trouve\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html applyBase("Joueurs")}</h2>
	{@html renderMarkdown("\n- [x] Diego 16\n- [x] Loïc 13\n- [x] Lucas 6\n- [x] Michel 18\n- [x] Nolan 4\n- [x] Thomas 17\n- [ ] William 7\n\n|     Précédent     |      Suivant      |\n| :---------------: | :---------------: |\n| <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 14 - 11.10.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 14 - 11.10.25\" data-wiki-fragment=\"\">Arc 3 - 14 - 11.10.25</a> | <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 16 - 28.11.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 16 - 28.11.25\" data-wiki-fragment=\"\">Arc 3 - 16 - 28.11.25</a> |")}

	</section>
{/snippet}
