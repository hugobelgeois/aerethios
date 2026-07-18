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
  <title>Arc 4 - 21 - 20.02.26</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 4 - 21 - 20.02.26</h1>
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
	{@html renderMarkdown("\nLieu actuel : Nirina, Vers Pulmius\n\nObjectif :\n\nPnjs notables : Kigan Krust\n")}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">Notes</h2>
	{@html renderMarkdown("\n|           |       Arek       |       Dara        |           Haelrak           |      Hazdaim       |      Léoric      |  Zveindel   |\n| --------- | :--------------: | :---------------: | :-------------------------: | :----------------: | :--------------: | :---------: |\n| **AC**    |      8 (-3)      |        15         |             14              |         14         |        9         |     10      |\n| **DR**    |     25 (+40)     |        14         |             12              |         12         |        23        |     20      |\n| **DMG**   | 5 + 33<br>6 + 40 | 9 + 27<br>14 + 10 | 12 + 4<br>16 + 5<br>12 + 15 | 10 + 10<br>12 + 10 | 14 + 6<br>7 + 20 |      -      |\n| **Magie** |    9 (1d8 +5)    |     9 (1d12)      |          14 (1d8)           |      9 (1d6)       |     9 (1d8)      | 14 (1d8 +2) |\n\n| Ennemi     | AC  | DR  | HP  |          Léger          | Lourde | Magie |\n| ---------- | :-: | :-: | :-: | :---------------------: | :----: | :---: |\n| Aventurier | 18  | 12  | 50  | 3d8 +8<br>VS Humanoides |   -    |   -   |\n")}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">Scénario</h2>
	{@html renderMarkdown("\nDire aux joueurs qu'ils vont devoir faire preuve d'initiative.\n\n**Dara** -> Ombre Zaledra -> Il intercepte ses missives de commerce -> Plus de mini-jeu de commerce\n")}
	{@render _LeDuoDePaladinsEstPlatineOuHiromage()}
	{@render _VoyageJusquLaDouane()}
	{@render _AventurierSolitaireEnQuteDeDfi()}
	{@render _Bloqu_LaDouaneParOrdreDesLionsDargent()}
	{@render _ALaRechercheDeNyxEtSalom()}
	</section>
{/snippet}

{#snippet _LeDuoDePaladinsEstPlatineOuHiromage()}
	<section>
		<h3 id="1-le-duo-de-paladins-est-platine-ou-hiromage">1) Le duo de Paladins est Platine ou Hiéromage</h3>
	{@html renderMarkdown("> **Interaction**, Qui > Quoi\n\nKigan a été se renseigner auprès des Arvens pour avoir une estimation du rang du duo de paladins.\n\nIls ont beaucoup de magie et appréhendent les combats intelligemment, donc sûrement Platine ou Hiéromage.\n\nIls attaquent rarement leur cible de front.\n\nIls ont enfumé la ville sous le volcan et abattu les nains qui sortaient des trous.\n\nIl s'est aussi renseigné et sait où sont Nyx et Salomé (Pulmius)\n")}

	</section>
{/snippet}

{#snippet _VoyageJusquLaDouane()}
	<section>
		<h3 id="2-voyage-jusqu-la-douane">2) Voyage jusqu'à la douane</h3>
	{@html renderMarkdown("> **Exploration**, Qui > Quoi\n\nInstaurer un stress et de la parano.\n\nDes jets de perception fréquent.\n\n\"Tu t'es déjà senti observé? Non? Hm.\"\n\nS'ils ne me coupent pas pour faire des tours de garde la nuit -> Ils dorment tous.\n")}

	</section>
{/snippet}

{#snippet _AventurierSolitaireEnQuteDeDfi()}
	<section>
		<h3 id="3-aventurier-solitaire-en-qute-de-dfi">3) Aventurier solitaire en quête de défi</h3>
	{@html renderMarkdown(">**Combat**, Qui > Quoi\n\nIl challenge un des joueurs à un combat amical contre de l'argent.\n")}

	</section>
{/snippet}

{#snippet _Bloqu_LaDouaneParOrdreDesLionsDargent()}
	<section>
		<h3 id="4-bloqu--la-douane-par-ordre-des-lions-dargent">4) Bloqué à la douane ~~par ordre des Lions d'Argent~~</h3>
	{@html renderMarkdown("> **Puzzle**, Qui > Quoi\n\n\"N'essayez pas de prendre un bateau, on contrôle tous les ports\"\n\n/!\\ Comportements suspects des joueurs\n- Soudoyer les gardes\n- Trop argumenter, trop de questions\n\nIls ont quartier libre pour imaginer comment passer la douane.\n")}

	</section>
{/snippet}

{#snippet _ALaRechercheDeNyxEtSalom()}
	<section>
		<h3 id="5-a-la-recherche-de-nyx-et-salom">5) A la recherche de Nyx et Salomé</h3>
	{@html renderMarkdown("> **Exploration**, Qui > Quoi\n\nDirection Pulmius, et escale à l'orphelinat.\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">Joueurs</h2>
	{@html renderMarkdown("\n- [x] Diego 22\n- [x] Loïc 17\n- [ ] Lucas 9\n- [x] Michel 24\n- [ ] Nolan 8\n- [x] Thomas 21\n- [ ] William 7\n\n|         Précédent         |          Suivant          |\n| :-----------------------: | :-----------------------: |\n| <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 20 - 13.02.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 20 - 13.02.26\" data-wiki-fragment=\"\">Arc 4 - 20 - 13.02.26</a> | <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22 - 03.04.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22 - 03.04.26\" data-wiki-fragment=\"\">Arc 4 - 22 - 03.04.26</a> |\n")}

	</section>
{/snippet}
