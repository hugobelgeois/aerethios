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
  <title>{"Arc 2 - 09b - 27.06.25"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 2 - 09b - 27.06.25"}</h1>
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
	{@html "<p>Lieu actuel : Ovliin, voyage au sud de Ruvik</p>\n<p>Objectif : Battre le Gammoth</p>\n<p>Pnjs notables : Bryumnes, Einar</p>"}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html "Scénario"}</h2>


	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html "Notes"}</h2>
	{@html "<ul><li>Sur le chemin, la poupée se transforme et leur dit où se trouve le masque</li><li>Discussion sur comment ils comptent s'y prendre</li><li>Ils croisent le Gammoth qui en a après Dara</li></ul>\n<p><strong>Gammoth</strong></p>\n<blockquote><strong>Armure :</strong><br>Nombre de coups pour casser : 3 > 6 > 9<br><br><strong>Trompe</strong><br>DEF 18 (Glace 22) - T > P > C<br>ATK 3+D6 (Glace 3+D10)<br>ATK Boule de neige D10<br><br><strong>Défenses</strong><br>DEF 24 - C > T > P<br>ATK 8+D6<br>ATK Boule de neige D10<br><br><strong>Pattes</strong><br>DEF 20 (Glace 24) - T > C > P<br>ATK Stomp 10+D4 (Glace 10+D8)<br>ATK Charge +5<br><br><strong>Crâne</strong><br>DEF 26 - C > P > T<br>ATK Charge +5<br><br><strong>Ventre</strong><br>DEF 18 - P > T > C<br>ATK -<br><br><strong>Dos</strong><br>DEF 20 - P > C > T<br>ATK Roulade 14<br><br>Glace : >16<br><br>Force : 10+D20</blockquote>\n<p><strong>Bryumnes</strong></p>\n<blockquote>Armure : 16<br>Arme : 10+D10<br>Esquiver : 6<br>Feu : 8<br>Air : 4<br>Foudre : 4</blockquote>\n<p><strong>Einar</strong></p>\n<blockquote>Armure : 10<br>Arme : 12+D6<br>Esquiver : 3<br>Bloquer : 6<br>Feu : 7<br>Roche : 3</blockquote>\n<ul><li>Fin du combat, ils arrivent chez la connaissance et décident où se tp</li><li>Billy (Suraja])</li><li>Le masque (Kothula)</li><li>Lysara Vein (Nirina)</li><li>Ils se font séparer au moment de se faire tp (aventure solo en tête à tête)</li></ul>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego 11</li><li><input type=\"checkbox\" disabled> Loïc 8</li><li><input type=\"checkbox\" disabled checked> Michel 12</li><li><input type=\"checkbox\" disabled checked> Thomas 11</li><li><input type=\"checkbox\" disabled checked> William 5</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09 - 13.06.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09 - 13.06.25\" data-wiki-fragment=\"\">Arc 2 - 09 - 13.06.25</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Oav/Arc 2.5 - 10 - 05.08.25 Loic\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Oav/Arc 2.5 - 10 - 05.08.25 Loic\" data-wiki-fragment=\"\">Arc 2.5 - 10 - 05.08.25 Loic</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
