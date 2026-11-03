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
          "id": "1-le-duo-de-paladins-est-platine-ou-hiromage",
          "text": "1) Le duo de Paladins est Platine ou Hiéromage",
          "level": 3
      },
      {
          "id": "2-voyage-jusqu-la-douane",
          "text": "2) Voyage jusqu'à la douane",
          "level": 3
      },
      {
          "id": "3-aventurier-solitaire-en-qute-de-dfi",
          "text": "3) Aventurier solitaire en quête de défi",
          "level": 3
      },
      {
          "id": "4-bloqu--la-douane-par-ordre-des-lions-dargent",
          "text": "4) Bloqué à la douane ~~par ordre des Lions d'Argent~~",
          "level": 3
      },
      {
          "id": "5-a-la-recherche-de-nyx-et-salom",
          "text": "5) A la recherche de Nyx et Salomé",
          "level": 3
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
  <title>{"Arc 4 - 21 - 20.02.26"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 4 - 21 - 20.02.26"}</h1>
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
	{@html "<blockquote>Résumé</blockquote>"}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html "Détails"}</h2>
	{@html "<p>Lieu actuel : Nirina, Vers Pulmius</p>\n<p>Objectif :</p>\n<p>Pnjs notables : Kigan Krust</p>"}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html "Notes"}</h2>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Arek</th><th>Dara</th><th>Haelrak</th><th>Hazdaim</th><th>Léoric</th><th>Zveindel</th></tr></thead><tbody><tr><td><strong>AC</strong></td><td>8 (-3)</td><td>15</td><td>14</td><td>14</td><td>9</td><td>10</td></tr><tr><td><strong>DR</strong></td><td>25 (+40)</td><td>14</td><td>12</td><td>12</td><td>23</td><td>20</td></tr><tr><td><strong>DMG</strong></td><td>5 + 33<br>6 + 40</td><td>9 + 27<br>14 + 10</td><td>12 + 4<br>16 + 5<br>12 + 15</td><td>10 + 10<br>12 + 10</td><td>14 + 6<br>7 + 20</td><td>-</td></tr><tr><td><strong>Magie</strong></td><td>9 (1d8 +5)</td><td>9 (1d12)</td><td>14 (1d8)</td><td>9 (1d6)</td><td>9 (1d8)</td><td>14 (1d8 +2)</td></tr></tbody></table></div>\n<div class=\"table-scroll\"><table><thead><tr><th>Ennemi</th><th>AC</th><th>DR</th><th>HP</th><th>Léger</th><th>Lourde</th><th>Magie</th></tr></thead><tbody><tr><td>Aventurier</td><td>18</td><td>12</td><td>50</td><td>3d8 +8<br>VS Humanoides</td><td>-</td><td>-</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html "Scénario"}</h2>
	{@html "<p>Dire aux joueurs qu'ils vont devoir faire preuve d'initiative.</p>\n<p><strong>Dara</strong> -> Ombre Zaledra -> Il intercepte ses missives de commerce -> Plus de mini-jeu de commerce</p>"}
	{@render _LeDuoDePaladinsEstPlatineOuHiromage()}
	{@render _VoyageJusquLaDouane()}
	{@render _AventurierSolitaireEnQuteDeDfi()}
	{@render _Bloqu_LaDouaneParOrdreDesLionsDargent()}
	{@render _ALaRechercheDeNyxEtSalom()}
	</section>
{/snippet}

{#snippet _LeDuoDePaladinsEstPlatineOuHiromage()}
	<section>
		<h3 id="1-le-duo-de-paladins-est-platine-ou-hiromage">{@html "1) Le duo de Paladins est Platine ou Hiéromage"}</h3>
	{@html "<blockquote><strong>Interaction</strong>, Qui > Quoi</blockquote>\n<p>Kigan a été se renseigner auprès des Arvens pour avoir une estimation du rang du duo de paladins.</p>\n<p>Ils ont beaucoup de magie et appréhendent les combats intelligemment, donc sûrement Platine ou Hiéromage.</p>\n<p>Ils attaquent rarement leur cible de front.</p>\n<p>Ils ont enfumé la ville sous le volcan et abattu les nains qui sortaient des trous.</p>\n<p>Il s'est aussi renseigné et sait où sont Nyx et Salomé (Pulmius)</p>"}

	</section>
{/snippet}

{#snippet _VoyageJusquLaDouane()}
	<section>
		<h3 id="2-voyage-jusqu-la-douane">{@html "2) Voyage jusqu'à la douane"}</h3>
	{@html "<blockquote><strong>Exploration</strong>, Qui > Quoi</blockquote>\n<p>Instaurer un stress et de la parano.</p>\n<p>Des jets de perception fréquent.</p>\n<p>\"Tu t'es déjà senti observé? Non? Hm.\"</p>\n<p>S'ils ne me coupent pas pour faire des tours de garde la nuit -> Ils dorment tous.</p>"}

	</section>
{/snippet}

{#snippet _AventurierSolitaireEnQuteDeDfi()}
	<section>
		<h3 id="3-aventurier-solitaire-en-qute-de-dfi">{@html "3) Aventurier solitaire en quête de défi"}</h3>
	{@html "<blockquote><strong>Combat</strong>, Qui > Quoi</blockquote>\n<p>Il challenge un des joueurs à un combat amical contre de l'argent.</p>"}

	</section>
{/snippet}

{#snippet _Bloqu_LaDouaneParOrdreDesLionsDargent()}
	<section>
		<h3 id="4-bloqu--la-douane-par-ordre-des-lions-dargent">{@html "4) Bloqué à la douane ~~par ordre des Lions d'Argent~~"}</h3>
	{@html "<blockquote><strong>Puzzle</strong>, Qui > Quoi</blockquote>\n<p>\"N'essayez pas de prendre un bateau, on contrôle tous les ports\"</p>\n<p>/!\\ Comportements suspects des joueurs</p>\n<ul><li>Soudoyer les gardes</li><li>Trop argumenter, trop de questions</li></ul>\n<p>Ils ont quartier libre pour imaginer comment passer la douane.</p>"}

	</section>
{/snippet}

{#snippet _ALaRechercheDeNyxEtSalom()}
	<section>
		<h3 id="5-a-la-recherche-de-nyx-et-salom">{@html "5) A la recherche de Nyx et Salomé"}</h3>
	{@html "<blockquote><strong>Exploration</strong>, Qui > Quoi</blockquote>\n<p>Direction Pulmius, et escale à l'orphelinat.</p>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego 22</li><li><input type=\"checkbox\" disabled checked> Loïc 17</li><li><input type=\"checkbox\" disabled> Lucas 9</li><li><input type=\"checkbox\" disabled checked> Michel 24</li><li><input type=\"checkbox\" disabled> Nolan 8</li><li><input type=\"checkbox\" disabled checked> Thomas 21</li><li><input type=\"checkbox\" disabled> William 7</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 20 - 13.02.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 20 - 13.02.26\" data-wiki-fragment=\"\">Arc 4 - 20 - 13.02.26</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22 - 03.04.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22 - 03.04.26\" data-wiki-fragment=\"\">Arc 4 - 22 - 03.04.26</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
