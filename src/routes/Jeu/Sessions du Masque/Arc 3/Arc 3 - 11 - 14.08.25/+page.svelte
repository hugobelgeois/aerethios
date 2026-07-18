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
          "id": "joueurs",
          "text": "Joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Arc 3 - 11 - 14.08.25</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 3 - 11 - 14.08.25</h1>
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
		<h2 id="dtails">Détails</h2>
	{@html renderMarkdown("\nLieu actuel : Dimension de Billy\n\nObjectif : Se renseigner sur Tarquin Alsyon et choisir où aller\n\nPnjs notables : Billy, Dieu Dormant\n")}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">Scénario</h2>


	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">Notes</h2>
	{@html renderMarkdown("\n**Réunion avec Billy**\n- Il ne peut pas combattre le masque, ça va à l'encontre des serments et pactes qu'il a fait\n  - Actuellement le Pacte de Certitude\n  - Il se doute de ce qu'est le matériau brûlant et mou mais ne veut pas le dire avant d'être sûr\n    - Réussite critique de mental permet de le deviner, mais le joueur ne pourra rien dire\n\n- Billy doit se concerter avec les dieux et préparer le terrain pour le combat contre le masque\n  - Il leur donne les infos qu'il a récupérées sur Tarquin Alsyon, et leur donne une quête Platine en même temps\n  - Il leur conseille également d'aller voir l'Oracle Syrithia pour avoir des infos des dieux\n- Il leur demande où ils veulent se faire téléporter avant de se dire au revoir (Nirina ou Suraja)\n\n__Quête Platine__\n- Nirina\n  - Gore Magala en train d'essayer d'évoluer (on peut empêcher qu'il devienne Shagaru et qu'il soit chaotic à la place)\n> Ils vivent normalement, mais de rares cas développent un virus qui leur permet d'évoluer et les rend très agressifs\n- Suraja\n  - Shara Ishvalda\n> Créature qui a trop été en résonnance avec un crystal, ce qui lui a permis de contrôler la roche\n> Avec cette armure, il attaque les commerçants sur les routes parce qu'il aime ce qui brille\n\n**Tarquin Alsyon**\n- 2 groupes/guildes possibles\n  - Nirina, Templier militaire puissant\n    - Le Magala attaque leurs troupes et les empêche d'avancer efficacement\n    - Nix,\n    - Theon,\n\n- Liberté d'actions envers eux (Tuer, kidnapper, torturer, emprisonner, discuter, alliance)\n- Billy conseille de se renseigner plus sur eux pour connaître leur rôle et leurs relations avant d'agir trop vite ?\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">Joueurs</h2>
	{@html renderMarkdown("\n- [x] Diego 12\n- [x] Loïc 9\n- [ ] Lucas 2\n- [x] Michel 13\n- [x] Nolan 1\n- [x] Thomas 12\n- [ ] William 5\n\n|         Précédent         |          Suivant          |\n| :-----------------------: | :-----------------------: |\n| <a href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" data-wiki-fragment=\"\">Arc 2 - 09b - 27.06.25</a> | <a href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13 - 29.08.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13 - 29.08.25\" data-wiki-fragment=\"\">Arc 3 - 13 - 29.08.25</a> |")}

	</section>
{/snippet}
