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
  <title>Arc 2 - 07 - 21.05.25</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 2 - 07 - 21.05.25</h1>
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
	{@html renderMarkdown("\nLieu actuel : Ovliin, Ruvik\n\nObjectif : Récupérer le colis envoyé par Lysara qui leur était destiné\n\nPnjs notables : -\n")}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">Scénario</h2>
	{@html renderMarkdown("\nJ-50  \nRencontre des Arvens, on leur demande s'ils ont récupéré leur colis  \nIls vont chercher leur colis  \nIls se font attaquer par des soldats de Suraja qui avaient pris leur identité  \nLe colis est une poupée qui prend l'apparence de Zveindel  \nC'est un colis de Lysara afin de pouvoir traquer le masque  \n  \nRencontre des Scientes  \nOrvain va se faire exécuter  \nIls arrivent trop tard, Einar a exécuté Orvain  \nEinar les emmène voir sa fille, Bryumnes, qui est chef de guerre  \nLes autres continents savent qu'ils sont liés à un masque surpuissant, ils sont donc considérés comme des menaces  \n  \nBryumnes va prendre 3 jours pour se renseigner sur le masque et sur Tarquin  \nAvant ça elle veut les tester -> Combat contre Bryumnes\n")}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">Notes</h2>
	{@html renderMarkdown("\nCapitale\n- Shopping\n- Chez les Arvens, on leur demande s'ils ont bien récupéré leur colis\n- Un autre groupe s'est fait passé pour eux avec une magie assez puissante et a volé le colis\n- Le colis s'est fait téléporté hors de la ville\n\n- Ils y trouvent une poupée\n- L'autre groupe les attaque pour voler leurs informations\n- Gammoth arrive car il a repéré la magie de Dara\n\n- Quand l'autre groupe est mort, ils retrouvent leur apparence de Surajien\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">Joueurs</h2>
	{@html renderMarkdown("\n- [x] Diego 9\n- [x] Loïc 6\n- [x] Lucas 1\n- [x] Michel 9\n- [ ] Thomas 8\n- [x] William 4\n\n|     Précédent     |      Suivant      |\n| :---------------: | :---------------: |\n| <a href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 06 - 18.05.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 06 - 18.05.25\" data-wiki-fragment=\"\">Arc 2 - 06 - 18.05.25</a> | <a href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 08 - 30.05.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 08 - 30.05.25\" data-wiki-fragment=\"\">Arc 2 - 08 - 30.05.25</a> |")}

	</section>
{/snippet}
