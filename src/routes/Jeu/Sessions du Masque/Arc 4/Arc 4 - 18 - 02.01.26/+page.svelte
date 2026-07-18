<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
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
          "id": "1-billy-et-les-dieux",
          "text": "1) Billy et les Dieux",
          "level": 4
      },
      {
          "id": "2-combat-contre-un-dieu",
          "text": "2) Combat contre un Dieu",
          "level": 4
      },
      {
          "id": "3-prsentation-des-templis",
          "text": "3) Présentation des Templis",
          "level": 4
      },
      {
          "id": "4-trouver-le-gobelin",
          "text": "4) Trouver le gobelin",
          "level": 4
      },
      {
          "id": "5-abattre-le-gobelin",
          "text": "5) Abattre le gobelin",
          "level": 4
      },
      {
          "id": "6-retrouver-syrithia",
          "text": "6) Retrouver Syrithia",
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
  <title>Arc 4 - 18 - 02.01.26</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 4 - 18 - 02.01.26</h1>
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
	{@html renderMarkdown("> Résumé\n")}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">Détails</h2>
	{@html renderMarkdown("\nLieu actuel : Nirina, Pranels\n\nObjectif :\n\nPnjs notables : Syrithia, Billy, Dieu Pourpre, Dieu Scintillant, Grande Mère\n")}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">Notes</h2>


	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">Scénario</h2>

	{@render _BillyEtLesDieux()}
	{@render _CombatContreUnDieu()}
	{@render _PrsentationDesTemplis()}
	{@render _TrouverLeGobelin()}
	{@render _AbattreLeGobelin()}
	{@render _RetrouverSyrithia()}
	</section>
{/snippet}

{#snippet _BillyEtLesDieux()}
	<section>
		<h4 id="1-billy-et-les-dieux">1) Billy et les Dieux</h4>
	{@html renderMarkdown("> **Interaction**, Qui > Quoi\n\nRésumé de la situation actuelle avec le masque et les dieux.\n\nDieux :\n- Dieu Pourpre\n- Dieu Scintillant\n- Grande Mère\n")}

	</section>
{/snippet}

{#snippet _CombatContreUnDieu()}
	<section>
		<h4 id="2-combat-contre-un-dieu">2) Combat contre un Dieu</h4>
	{@html renderMarkdown("> **Combat**,\n\nLe Dieu Pourpre veut tester le groupe.\n\nCelui qui arrive à lui faire mal aura une bénédiction (bénédiction de la pièce / fratricide).\n\nSi un joueur demande pour tester les dieux, le Dieu Pourpre le prends en 1v1.\nIl le laisse le taper le temps de charger son attaque.\n")}

	</section>
{/snippet}

{#snippet _PrsentationDesTemplis()}
	<section>
		<h4 id="3-prsentation-des-templis">3) Présentation des Templis</h4>
	{@html renderMarkdown("> **Interaction**, Qui > Quoi\n\nSyrithia leur demande de l'aider à réparer les dégâts causés par le masque\n\nPour se faire ils doivent s'occuper d'un gobelin qui s'occupait de garder une maison de noble\n\nLe gobelin est un esprit qui ne peut pas pleinement se faire taper, mais il est fort et des Arvens en armure ne seraient pas de trop\n\nPour l'abattre ils doivent utiliser un autre équipement fourni par Syrithia :\n- chaine en argent pour le capturer,\n- limaille de fer & sel pour l'affaiblir,\n- eau bénite pour le tuer,\n- bois d'olivier pour l'étourdir,\n- magies élétistes.\n\nLa magie des ténèbres attirent la créature, la lumière la révèle afin que l'équipement la touche, et la foudre lui fait mal.\n\nJets entièrement basés sur le mental et la perception\n\nSi possible ne pas le tuer et le capturer avec la chaine d'argent\n\nUne fois que ce sera fait, elle leur demande de la retrouver, elle aidera les gens blessés\n")}

	</section>
{/snippet}

{#snippet _TrouverLeGobelin()}
	<section>
		<h4 id="4-trouver-le-gobelin">4) Trouver le gobelin</h4>
	{@html renderMarkdown("> **Exploration**, Dara/ Hazdaim > Magie de Ténèbres\n\nLe bâtiment est rempli d'humidité, la brume empêche les torches de s'allumer correctement\n\nLes joueurs doivent se laisser plonger dans l'obscurité pour que la créature se manifeste\n")}

	</section>
{/snippet}

{#snippet _AbattreLeGobelin()}
	<section>
		<h4 id="5-abattre-le-gobelin">5) Abattre le gobelin</h4>
	{@html renderMarkdown("> **Combat**, Arek/ Hazdaim > Magie de Lumière\n")}

	</section>
{/snippet}

{#snippet _RetrouverSyrithia()}
	<section>
		<h4 id="6-retrouver-syrithia">6) Retrouver Syrithia</h4>
	{@html renderMarkdown("> **Exploration**, Qui > Quoi\n\nIls parcourent la ville et constatent les dégâts\n\nIls retrouvent Syrithia en train de soigner en masse avec la lumière\n\nElle leur propose de s'équiper avec les matériaux du Shara Ishvalda pour les remercier\n\nIls doivent faire attention au Magala.\nLe masque a empêché sa transformation finale, mais il en aurait pris le contrôle\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">Joueurs</h2>
	{@html renderMarkdown("\n- [x] Diego 19\n- [ ] Loïc 15\n- [ ] Lucas 8\n- [x] Michel 21\n- [x] Nolan 7\n- [x] Thomas 19\n- [ ] William 7\n\n|         Précédent         |         Suivant          |\n| :-----------------------: | :----------------------: |\n| <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 17 - 20.12.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 17 - 20.12.25\" data-wiki-fragment=\"\">Arc 3 - 17 - 20.12.25</a> | <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 19 - 23.01.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 19 - 23.01.26\" data-wiki-fragment=\"\">Arc 4 - 19 - 23.01.26</a> |")}

	</section>
{/snippet}
