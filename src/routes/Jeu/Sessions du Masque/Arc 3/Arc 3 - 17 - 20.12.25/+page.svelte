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
          "id": "7-recherche-shara-ishvalda",
          "text": "7) Recherche Shara Ishvalda",
          "level": 3
      },
      {
          "id": "8-confrontation-shara-ishvalda",
          "text": "8) Confrontation Shara Ishvalda",
          "level": 3
      },
      {
          "id": "ancien-systme",
          "text": "Ancien système",
          "level": 5
      },
      {
          "id": "nouveau-systme",
          "text": "Nouveau système",
          "level": 5
      },
      {
          "id": "test-nouveau-systme",
          "text": "Test nouveau système",
          "level": 5
      },
      {
          "id": "systme-de-focus",
          "text": "Système de focus",
          "level": 4
      },
      {
          "id": "phase-1",
          "text": "Phase 1",
          "level": 4
      },
      {
          "id": "phase-2",
          "text": "Phase 2",
          "level": 4
      },
      {
          "id": "9-rencontre-des-espers",
          "text": "9) Rencontre des Espers",
          "level": 3
      },
      {
          "id": "10-le-cauchemar",
          "text": "10) Le cauchemar",
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
  <title>Arc 3 - 17 - 20.12.25</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 3 - 17 - 20.12.25</h1>
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
	{@html renderMarkdown("\nLieu actuel : Suraja, Entre Irkma et Rhadiz\n\nObjectif : Tuer le Shara Ishvalda\n\nPnjs notables : Chlorys, Zaledra\n")}

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

	{@render _RechercheSharaIshvalda()}
	{@render _ConfrontationSharaIshvalda()}
	{@render _RencontreDesEspers()}
	{@render _0LeCauchemar()}
	</section>
{/snippet}

{#snippet _RechercheSharaIshvalda()}
	<section>
		<h3 id="7-recherche-shara-ishvalda">{@html applyBase("7) Recherche <span class=\"wiki-unresolved\">Shara Ishvalda</span>")}</h3>
	{@html renderMarkdown("> **Énigme**, Arek > détecter le bon caillou\n\nLe boss dort sous le sable, mais n'émet aucune magie\nIl y a d'autres cailloux autour, donc ils doivent trouver le bon sur lequel faire une attaque surprise\nS'ils en attaquent un mais que c'est pas le bon, ça réveille le boss\n")}

	</section>
{/snippet}

{#snippet _ConfrontationSharaIshvalda()}
	<section>
		<h3 id="8-confrontation-shara-ishvalda">{@html applyBase("8) Confrontation Shara Ishvalda")}</h3>
	{@html renderMarkdown("> **Combat**,\n\n**Rappel des stats :**\n")}
	{@render ancienSystme()}
	{@render nouveauSystme()}
	{@render testNouveauSystme()}
	{@render systmeDeFocus()}
	{@render phase_1()}
	{@render phase_2()}
	</section>
{/snippet}

{#snippet ancienSystme()}
	<section>
		<h5 id="ancien-systme">{@html applyBase("Ancien système")}</h5>
	{@html renderMarkdown("\n|             |  Dégâts càc Max   | Défense Max | Esquive Max |\n| ----------- | :---------------: | :---------: | :---------: |\n| **Arek**    |      20 + 10      | 34 (51/79)  |     20      |\n| **Dara**    |      21 + 12      |      8      |     31      |\n| **Hazdaim** | 21 + 11 & 21 + 10 |      6      |     30      |\n| **Léoric**  |      21 + 6       |      7      |     21      |\n| **Haelrak** |      15 + 3       |      6      |     26      |\n| **Zvein**   |      12 + 3       |      0      |     20      |\n| **Halfdan** |      17 + 5       |      6      |     28      |\n")}

	</section>
{/snippet}

{#snippet nouveauSystme()}
	<section>
		<h5 id="nouveau-systme">{@html applyBase("Nouveau système")}</h5>
	{@html renderMarkdown("\n|                      |                                   Dégâts càc Max                                   |                          Défense Max<br>Imp + Déf                           |      Esquive Max      | Dégâts magiques Max |\n| -------------------- | :--------------------------------------------------------------------------------: | :-------------------------------------------------------------------------: | :-------------------: | :-----------------: |\n| **Arek**<br>Lvl 5.5  |                 *2x (11 + 1d6)*<br>12 + 3T + 10 Glace = **37-42**                  | (10 + 6) + 17 Lou<br>+ 2 Feu<br>+ 2 Foudre<br>(3 + 4 Bouclier<br>+ 5 Glace) | 20 (+0)<br>Impossible |       15 - 95       |\n| **Dara**<br>Lvl 5    | *2x (11 + 1d8)*<br>12 + 3T + 4 Glace = **31-38**<br> 5 + 4T + 14 Glace = **35-42** |                     1 + 6 Lég<br>+ 2 Feu<br>+ 2 Foudre                      |        23 (+6)        |      10 - 120       |\n| **Hazdaim**<br>Lvl 5 | *2x (10 + 1d6)*<br>11 + 3T + 4 Glace = **29-34**<br>5 + 4T + 14 Glace = **34-39**  |                 1 + 6 Lég<br>+ 2 Air<br>+ 1 Roche<br>+1 Feu                 |        22 (+5)        |       10 - 60       |\n| **Léoric**<br>Lvl 4  |                  *2x (7 + 1d4)*<br>6 + 4C + 16 Glace = **34-37**                   |                                  4 + 7 Lég                                  |        21 (+0)        |       10 - 80       |\n| **Haelrak**<br>Lvl 4 |                       *(5 + 2d8)*<br>3 + 3P = **13-19**<br>                        |                            1 + 6 Lég<br>+ 4 Air                             |        22 (+4)        |      15 - 120       |\n| **Zvein**<br>Lvl 4   |                                  *(2 + 1d4) + 0*                                   |                                      0                                      |        20 (+0)        |      15 - 120       |\n| **Halfdan**<br>Lvl 4 |                    *(5 + 1d6)*<br>5 + 3T + 4 Glace = **18-23**                     |                        1 + 6 Lég<br>(3 + 2 Bouclier)                        |        23 (+4)        |          0          |\n")}

	</section>
{/snippet}

{#snippet testNouveauSystme()}
	<section>
		<h5 id="test-nouveau-systme">{@html applyBase("Test nouveau système")}</h5>
	{@html renderMarkdown("\n|                        |                    Dégâts càc Max                    |                               Défense Max<br>Imp + Déf                               |      Esquive Max      | Dégâts magiques Max |\n| ---------------------- | :--------------------------------------------------: | :----------------------------------------------------------------------------------: | :-------------------: | :-----------------: |\n| **Guerrier**<br>Lvl 18 |  *(14 + 1d8)*<br>(8+8) + 4C + 10 Foudre = **45-52**  |          20 + 35 Lou<br>+ 5 Foudre<br>+ 4 Feu<br>+ 4 Ténèbre<br>+ 1 Lumière          | 22 (+0)<br>Impossible |      10 - 100       |\n| **Fighter**<br>Lvl 16  | *2x (15 + 2d8)*<br>(12+10) + 5P + 10 Feu = **53-59** |                         7 + 25 Int<br>+ 3 Feu<br>+ 3 Foudre                          |        24 (+5)        |      10 - 150       |\n| **Mage**<br>Lvl 15     |  *(5 + 1d6)*<br>(8+6) + 3T + 6 Lumière = **29-34**   | 2 + 12 Lég<br>+ 5 Lumière<br>+ 3 Ténèbre<br>+ 3 Roche<br>(3 + 4 Bouclier<br>+ 5 Feu) |        22 (+4)        |      20 - 240       |\n")}

	</section>
{/snippet}

{#snippet systmeDeFocus()}
	<section>
		<h4 id="systme-de-focus">{@html applyBase("Système de focus")}</h4>
	{@html renderMarkdown("\nA chaque tour de joueur, le joueur qui attire l'attention gagne un point de focus.\nUne réussite critique donne 2 points de focus.\nUne fois qu'un joueur a 5 points, le monstre se concentre entièrement sur lui.\n")}

	</section>
{/snippet}

{#snippet phase_1()}
	<section>
		<h4 id="phase-1">{@html applyBase("Phase 1")}</h4>
	{@html renderMarkdown("\n| HP  | AC  |\n| --- | --- |\n| 300 | 500 |\n\nPrend des dégâts uniquement par :\n- Attaques contondantes\n\t- Léoric : 2 * (15 + 1d12) = 32-54 (x2-3 avec style)\n- Magie ~~explosive~~/ Terre :\n\t- 1d20 > 8 pour toucher\n\t- X crystaux * dés de dégâts (90 + 40 + 80) = 210\n- Baliste :\n\t- 1d20 > (5-15 dépend de la distance) pour toucher\n\t- 1d6 * 20 dégâts\n\nAttaques :\n- Focus 1 : (4+D4) * 2\n- Focus 2 : (6+D6) * 2\n- Focus 3 : (8+D8) * 2\n- Focus 4 : (10+D10) * 2\n- Focus 5 : (12+D12) * 2\n")}

	</section>
{/snippet}

{#snippet phase_2()}
	<section>
		<h4 id="phase-2">{@html applyBase("Phase 2")}</h4>
	{@html renderMarkdown("\n| HP  | AC  |\n| --- | --- |\n| 300 | 500 |\n\nDara, Hazdaim > dégâts càc\nHaelrak, Zvein > dégâts distance\n\nAttaques :\n- Focus 1 : 6d4\n- Focus 2 : 6d6\n- Focus 3 : 6d8\n- Focus 4 : 8d10\n- Focus 5 : 10d12\n\nAttaque finale AOE boule : (10) * 3D4\n")}

	</section>
{/snippet}

{#snippet _RencontreDesEspers()}
	<section>
		<h3 id="9-rencontre-des-espers">{@html applyBase("9) Rencontre des Espers")}</h3>
	{@html renderMarkdown("\n**Chlorys** Compagnon d'armes d'enfance d'Arek, spécialisée voleuse/ assassin\n\n**Raja** Associée commercial de Dara\n\n**Nimaya** Ancienne esclave devenue logistique du réseau\n\n**Tazim** Prêtre du \"Prendre\"\n\nOn remercie le groupe d'avoir tué le Shara Ishvalda et on leur dit que Chlorys leur a dit qu'ils cherchaient des infos\n\nOn les amène au boss où ils pourront avoir des infos, mais Chlorys s'y trouve attachée et battue\n\nLe commerçant de nécromancie (**Zaledra**) est là, c'est le chef de l'organisation Espers\n\nIls ont fourni l'argent à Nirina parce qu'ils ont un intérêt financier à ce que le masque tue en masse\n\nLes gens qu'il transforme en poupée tombe dans une zone floue de la juridiction, ce qui lui permettrait de les récupérer comme esclaves sans avoir besoin qu'ils signent un contrat\n\nLes gouvernements de Suraja lui fourniraient ensuite énormément d'argent pour utiliser ses armées\n\nC'est lui qui a envoyé le nécromancien raser le village de Dara pour récupérer plus de toiles, et il l'a compris quand Dara s'est présenté dans son bureau\n\n**Si les joueurs se rebellent** :\n- ils se font piquer dans la nuque par du plomb, les rendant immobiles\n- Il force Dara à choisir qui il tue entre les 2 personnages les plus problématiques du jdr, sinon c'est entre Chlorys et Bigard\n\nLe groupe de Nirina aurait dû l'arrêter depuis quelques temps maintenant, et ça l'intrigue\n\nIl leur propose de les envoyer à Nirina pour leur dire d'arrêter, car il a déjà absorbé suffisamment de gens pour son plan\n\nPour les forcer à obéir, il coupe l'annulaire du mariage à tout le monde, ça lui permettrait de les tuer à distance à tout moment grâce à la nécromancie en les invoquant à partir du doigt\n\nIl les envoie ensuite à Nirina\n")}

	</section>
{/snippet}

{#snippet _0LeCauchemar()}
	<section>
		<h3 id="10-le-cauchemar">{@html applyBase("10) Le cauchemar")}</h3>
	{@html renderMarkdown("\nAvant même d'arriver à Nirina, ils se retrouvent dans la dimension du masque\n\nSauf que cette fois ils sont suspendus par des fils et se font attaquer par toutes les poupées autour d'eux\n\nJe jette 10+1d20 et ils doivent faire plus avec 1d20Mental+Résistance sinon ils prennent mon jet comme dégât\n\nMasque : \"Vous êtes proches, et vous êtes faibles.\"\n\nIls se font sortir de ce cauchemar par l'Oracle Syrithia (amie de Léoric) et sont en très mauvais état\n\nSyrithia : \"Regardez-vous... Et ce n'est que le début..\"\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html applyBase("Joueurs")}</h2>
	{@html renderMarkdown("\n- [x] Diego 18\n- [x] Loïc 15\n- [x] Lucas 8\n- [x] Michel 20\n- [x] Nolan 6\n- [x] Thomas 18\n- [ ] William 7\n\n|         Précédent         |  Suivant  |\n| :-----------------------: | :-------: |\n| <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 16 - 28.11.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 16 - 28.11.25\" data-wiki-fragment=\"\">Arc 3 - 16 - 28.11.25</a> | <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4\" data-wiki-fragment=\"\">Arc 4</a> |")}

	</section>
{/snippet}
