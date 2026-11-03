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
          "id": "joueurs",
          "text": "Joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Arc 2 - 07 - 21.05.25"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 2 - 07 - 21.05.25"}</h1>
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
	{@html "<p>Lieu actuel : Ovliin, Ruvik</p>\n<p>Objectif : Récupérer le colis envoyé par Lysara qui leur était destiné</p>\n<p>Pnjs notables : -</p>"}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html "Scénario"}</h2>
	{@html "<p>J-50<br>Rencontre des Arvens, on leur demande s'ils ont récupéré leur colis<br>Ils vont chercher leur colis<br>Ils se font attaquer par des soldats de Suraja qui avaient pris leur identité<br>Le colis est une poupée qui prend l'apparence de Zveindel<br>C'est un colis de Lysara afin de pouvoir traquer le masque  </p>\n<p>Rencontre des Scientes<br>Orvain va se faire exécuter<br>Ils arrivent trop tard, Einar a exécuté Orvain<br>Einar les emmène voir sa fille, Bryumnes, qui est chef de guerre<br>Les autres continents savent qu'ils sont liés à un masque surpuissant, ils sont donc considérés comme des menaces  </p>\n<p>Bryumnes va prendre 3 jours pour se renseigner sur le masque et sur Tarquin<br>Avant ça elle veut les tester -> Combat contre Bryumnes</p>"}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html "Notes"}</h2>
	{@html "<p>Capitale</p>\n<ul><li>Shopping</li><li>Chez les Arvens, on leur demande s'ils ont bien récupéré leur colis</li><li>Un autre groupe s'est fait passé pour eux avec une magie assez puissante et a volé le colis</li><li>Le colis s'est fait téléporté hors de la ville</li></ul>\n<ul><li>Ils y trouvent une poupée</li><li>L'autre groupe les attaque pour voler leurs informations</li><li>Gammoth arrive car il a repéré la magie de Dara</li></ul>\n<ul><li>Quand l'autre groupe est mort, ils retrouvent leur apparence de Surajien</li></ul>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego 9</li><li><input type=\"checkbox\" disabled checked> Loïc 6</li><li><input type=\"checkbox\" disabled checked> Lucas 1</li><li><input type=\"checkbox\" disabled checked> Michel 9</li><li><input type=\"checkbox\" disabled> Thomas 8</li><li><input type=\"checkbox\" disabled checked> William 4</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 06 - 18.05.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 06 - 18.05.25\" data-wiki-fragment=\"\">Arc 2 - 06 - 18.05.25</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 08 - 30.05.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 08 - 30.05.25\" data-wiki-fragment=\"\">Arc 2 - 08 - 30.05.25</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
