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
          "id": "joueurs",
          "text": "Joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Arc 2 - 09b - 27.06.25</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 2 - 09b - 27.06.25</h1>
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
	{@html renderMarkdown("\nLieu actuel : Ovliin, voyage au sud de Ruvik\n\nObjectif : Battre le Gammoth\n\nPnjs notables : Bryumnes, Einar\n")}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html applyBase("Scénario")}</h2>


	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html applyBase("Notes")}</h2>
	{@html renderMarkdown("\n- Sur le chemin, la poupée se transforme et leur dit où se trouve le masque\n- Discussion sur comment ils comptent s'y prendre\n- Ils croisent le Gammoth qui en a après Dara\n\n**Gammoth**\n> **Armure :**\n> Nombre de coups pour casser : 3 > 6 > 9\n>\n> **Trompe**\n> DEF 18 (Glace 22) - T > P > C\n> ATK 3+D6 (Glace 3+D10)\n> ATK Boule de neige D10\n>\n> **Défenses**\n> DEF 24 - C > T > P\n> ATK 8+D6\n> ATK Boule de neige D10\n>\n> **Pattes**\n> DEF 20 (Glace 24) - T > C > P\n> ATK Stomp 10+D4 (Glace 10+D8)\n> ATK Charge +5\n>\n> **Crâne**\n> DEF 26 - C > P > T\n> ATK Charge +5\n>\n> **Ventre**\n> DEF 18 - P > T > C\n> ATK -\n>\n> **Dos**\n> DEF 20 - P > C > T\n> ATK Roulade 14\n>\n> Glace : >16\n>\n> Force : 10+D20\n\n**Bryumnes**\n> Armure : 16\n> Arme : 10+D10\n> Esquiver : 6\n> Feu : 8\n> Air : 4\n> Foudre : 4\n\n**Einar**\n> Armure : 10\n> Arme : 12+D6\n> Esquiver : 3\n> Bloquer : 6\n> Feu : 7\n> Roche : 3\n\n- Fin du combat, ils arrivent chez la connaissance et décident où se tp\n  - Billy (Suraja])\n  - Le masque (Kothula)\n  - Lysara Vein (Nirina)\n- Ils se font séparer au moment de se faire tp (aventure solo en tête à tête)\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html applyBase("Joueurs")}</h2>
	{@html renderMarkdown("\n- [x] Diego 11\n- [ ] Loïc 8\n- [x] Michel 12\n- [x] Thomas 11\n- [x] William 5\n\n|     Précédent     |        Suivant         |\n| :---------------: | :--------------------: |\n| <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09 - 13.06.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09 - 13.06.25\" data-wiki-fragment=\"\">Arc 2 - 09 - 13.06.25</a> | <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Oav/Arc 2.5 - 10 - 05.08.25 Loic\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Oav/Arc 2.5 - 10 - 05.08.25 Loic\" data-wiki-fragment=\"\">Arc 2.5 - 10 - 05.08.25 Loic</a> |")}

	</section>
{/snippet}
