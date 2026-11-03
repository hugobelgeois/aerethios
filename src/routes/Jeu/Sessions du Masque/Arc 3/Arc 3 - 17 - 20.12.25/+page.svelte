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
  <title>{"Arc 3 - 17 - 20.12.25"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 3 - 17 - 20.12.25"}</h1>
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
	{@html "<p>Lieu actuel : Suraja, Entre Irkma et Rhadiz</p>\n<p>Objectif : Tuer le Shara Ishvalda</p>\n<p>Pnjs notables : Chlorys, Zaledra</p>"}

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

	{@render _RechercheSharaIshvalda()}
	{@render _ConfrontationSharaIshvalda()}
	{@render _RencontreDesEspers()}
	{@render _0LeCauchemar()}
	</section>
{/snippet}

{#snippet _RechercheSharaIshvalda()}
	<section>
		<h3 id="7-recherche-shara-ishvalda">{@html "7) Recherche <span class=\"wiki-unresolved\">Shara Ishvalda</span>"}</h3>
	{@html "<blockquote><strong>Énigme</strong>, Arek > détecter le bon caillou</blockquote>\n<p>Le boss dort sous le sable, mais n'émet aucune magie<br>\nIl y a d'autres cailloux autour, donc ils doivent trouver le bon sur lequel faire une attaque surprise<br>\nS'ils en attaquent un mais que c'est pas le bon, ça réveille le boss</p>"}

	</section>
{/snippet}

{#snippet _ConfrontationSharaIshvalda()}
	<section>
		<h3 id="8-confrontation-shara-ishvalda">{@html "8) Confrontation Shara Ishvalda"}</h3>
	{@html "<blockquote><strong>Combat</strong>,</blockquote>\n<p><strong>Rappel des stats :</strong></p>"}
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
		<h5 id="ancien-systme">{@html "Ancien système"}</h5>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Dégâts càc Max</th><th>Défense Max</th><th>Esquive Max</th></tr></thead><tbody><tr><td><strong>Arek</strong></td><td>20 + 10</td><td>34 (51/79)</td><td>20</td></tr><tr><td><strong>Dara</strong></td><td>21 + 12</td><td>8</td><td>31</td></tr><tr><td><strong>Hazdaim</strong></td><td>21 + 11 & 21 + 10</td><td>6</td><td>30</td></tr><tr><td><strong>Léoric</strong></td><td>21 + 6</td><td>7</td><td>21</td></tr><tr><td><strong>Haelrak</strong></td><td>15 + 3</td><td>6</td><td>26</td></tr><tr><td><strong>Zvein</strong></td><td>12 + 3</td><td>0</td><td>20</td></tr><tr><td><strong>Halfdan</strong></td><td>17 + 5</td><td>6</td><td>28</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet nouveauSystme()}
	<section>
		<h5 id="nouveau-systme">{@html "Nouveau système"}</h5>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Dégâts càc Max</th><th>Défense Max<br>Imp + Déf</th><th>Esquive Max</th><th>Dégâts magiques Max</th></tr></thead><tbody><tr><td><strong>Arek</strong><br>Lvl 5.5</td><td><em>2x (11 + 1d6)</em><br>12 + 3T + 10 Glace = <strong>37-42</strong></td><td>(10 + 6) + 17 Lou<br>+ 2 Feu<br>+ 2 Foudre<br>(3 + 4 Bouclier<br>+ 5 Glace)</td><td>20 (+0)<br>Impossible</td><td>15 - 95</td></tr><tr><td><strong>Dara</strong><br>Lvl 5</td><td><em>2x (11 + 1d8)</em><br>12 + 3T + 4 Glace = <strong>31-38</strong><br> 5 + 4T + 14 Glace = <strong>35-42</strong></td><td>1 + 6 Lég<br>+ 2 Feu<br>+ 2 Foudre</td><td>23 (+6)</td><td>10 - 120</td></tr><tr><td><strong>Hazdaim</strong><br>Lvl 5</td><td><em>2x (10 + 1d6)</em><br>11 + 3T + 4 Glace = <strong>29-34</strong><br>5 + 4T + 14 Glace = <strong>34-39</strong></td><td>1 + 6 Lég<br>+ 2 Air<br>+ 1 Roche<br>+1 Feu</td><td>22 (+5)</td><td>10 - 60</td></tr><tr><td><strong>Léoric</strong><br>Lvl 4</td><td><em>2x (7 + 1d4)</em><br>6 + 4C + 16 Glace = <strong>34-37</strong></td><td>4 + 7 Lég</td><td>21 (+0)</td><td>10 - 80</td></tr><tr><td><strong>Haelrak</strong><br>Lvl 4</td><td><em>(5 + 2d8)</em><br>3 + 3P = <strong>13-19</strong><br></td><td>1 + 6 Lég<br>+ 4 Air</td><td>22 (+4)</td><td>15 - 120</td></tr><tr><td><strong>Zvein</strong><br>Lvl 4</td><td><em>(2 + 1d4) + 0</em></td><td>0</td><td>20 (+0)</td><td>15 - 120</td></tr><tr><td><strong>Halfdan</strong><br>Lvl 4</td><td><em>(5 + 1d6)</em><br>5 + 3T + 4 Glace = <strong>18-23</strong></td><td>1 + 6 Lég<br>(3 + 2 Bouclier)</td><td>23 (+4)</td><td>0</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet testNouveauSystme()}
	<section>
		<h5 id="test-nouveau-systme">{@html "Test nouveau système"}</h5>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Dégâts càc Max</th><th>Défense Max<br>Imp + Déf</th><th>Esquive Max</th><th>Dégâts magiques Max</th></tr></thead><tbody><tr><td><strong>Guerrier</strong><br>Lvl 18</td><td><em>(14 + 1d8)</em><br>(8+8) + 4C + 10 Foudre = <strong>45-52</strong></td><td>20 + 35 Lou<br>+ 5 Foudre<br>+ 4 Feu<br>+ 4 Ténèbre<br>+ 1 Lumière</td><td>22 (+0)<br>Impossible</td><td>10 - 100</td></tr><tr><td><strong>Fighter</strong><br>Lvl 16</td><td><em>2x (15 + 2d8)</em><br>(12+10) + 5P + 10 Feu = <strong>53-59</strong></td><td>7 + 25 Int<br>+ 3 Feu<br>+ 3 Foudre</td><td>24 (+5)</td><td>10 - 150</td></tr><tr><td><strong>Mage</strong><br>Lvl 15</td><td><em>(5 + 1d6)</em><br>(8+6) + 3T + 6 Lumière = <strong>29-34</strong></td><td>2 + 12 Lég<br>+ 5 Lumière<br>+ 3 Ténèbre<br>+ 3 Roche<br>(3 + 4 Bouclier<br>+ 5 Feu)</td><td>22 (+4)</td><td>20 - 240</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet systmeDeFocus()}
	<section>
		<h4 id="systme-de-focus">{@html "Système de focus"}</h4>
	{@html "<p>A chaque tour de joueur, le joueur qui attire l'attention gagne un point de focus.<br>\nUne réussite critique donne 2 points de focus.<br>\nUne fois qu'un joueur a 5 points, le monstre se concentre entièrement sur lui.</p>"}

	</section>
{/snippet}

{#snippet phase_1()}
	<section>
		<h4 id="phase-1">{@html "Phase 1"}</h4>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>HP</th><th>AC</th></tr></thead><tbody><tr><td>300</td><td>500</td></tr></tbody></table></div>\n<p>Prend des dégâts uniquement par :</p>\n<ul><li>Attaques contondantes</li><li>Léoric : 2 * (15 + 1d12) = 32-54 (x2-3 avec style)</li><li>Magie <del>explosive</del>/ Terre :</li><li>1d20 > 8 pour toucher</li><li>X crystaux * dés de dégâts (90 + 40 + 80) = 210</li><li>Baliste :</li><li>1d20 > (5-15 dépend de la distance) pour toucher</li><li>1d6 * 20 dégâts</li></ul>\n<p>Attaques :</p>\n<ul><li>Focus 1 : (4+D4) * 2</li><li>Focus 2 : (6+D6) * 2</li><li>Focus 3 : (8+D8) * 2</li><li>Focus 4 : (10+D10) * 2</li><li>Focus 5 : (12+D12) * 2</li></ul>"}

	</section>
{/snippet}

{#snippet phase_2()}
	<section>
		<h4 id="phase-2">{@html "Phase 2"}</h4>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>HP</th><th>AC</th></tr></thead><tbody><tr><td>300</td><td>500</td></tr></tbody></table></div>\n<p>Dara, Hazdaim > dégâts càc<br>\nHaelrak, Zvein > dégâts distance</p>\n<p>Attaques :</p>\n<ul><li>Focus 1 : 6d4</li><li>Focus 2 : 6d6</li><li>Focus 3 : 6d8</li><li>Focus 4 : 8d10</li><li>Focus 5 : 10d12</li></ul>\n<p>Attaque finale AOE boule : (10) * 3D4</p>"}

	</section>
{/snippet}

{#snippet _RencontreDesEspers()}
	<section>
		<h3 id="9-rencontre-des-espers">{@html "9) Rencontre des Espers"}</h3>
	{@html "<p><strong>Chlorys</strong> Compagnon d'armes d'enfance d'Arek, spécialisée voleuse/ assassin</p>\n<p><strong>Raja</strong> Associée commercial de Dara</p>\n<p><strong>Nimaya</strong> Ancienne esclave devenue logistique du réseau</p>\n<p><strong>Tazim</strong> Prêtre du \"Prendre\"</p>\n<p>On remercie le groupe d'avoir tué le Shara Ishvalda et on leur dit que Chlorys leur a dit qu'ils cherchaient des infos</p>\n<p>On les amène au boss où ils pourront avoir des infos, mais Chlorys s'y trouve attachée et battue</p>\n<p>Le commerçant de nécromancie (<strong>Zaledra</strong>) est là, c'est le chef de l'organisation Espers</p>\n<p>Ils ont fourni l'argent à Nirina parce qu'ils ont un intérêt financier à ce que le masque tue en masse</p>\n<p>Les gens qu'il transforme en poupée tombe dans une zone floue de la juridiction, ce qui lui permettrait de les récupérer comme esclaves sans avoir besoin qu'ils signent un contrat</p>\n<p>Les gouvernements de Suraja lui fourniraient ensuite énormément d'argent pour utiliser ses armées</p>\n<p>C'est lui qui a envoyé le nécromancien raser le village de Dara pour récupérer plus de toiles, et il l'a compris quand Dara s'est présenté dans son bureau</p>\n<p><strong>Si les joueurs se rebellent</strong> :</p>\n<ul><li>ils se font piquer dans la nuque par du plomb, les rendant immobiles</li><li>Il force Dara à choisir qui il tue entre les 2 personnages les plus problématiques du jdr, sinon c'est entre Chlorys et Bigard</li></ul>\n<p>Le groupe de Nirina aurait dû l'arrêter depuis quelques temps maintenant, et ça l'intrigue</p>\n<p>Il leur propose de les envoyer à Nirina pour leur dire d'arrêter, car il a déjà absorbé suffisamment de gens pour son plan</p>\n<p>Pour les forcer à obéir, il coupe l'annulaire du mariage à tout le monde, ça lui permettrait de les tuer à distance à tout moment grâce à la nécromancie en les invoquant à partir du doigt</p>\n<p>Il les envoie ensuite à Nirina</p>"}

	</section>
{/snippet}

{#snippet _0LeCauchemar()}
	<section>
		<h3 id="10-le-cauchemar">{@html "10) Le cauchemar"}</h3>
	{@html "<p>Avant même d'arriver à Nirina, ils se retrouvent dans la dimension du masque</p>\n<p>Sauf que cette fois ils sont suspendus par des fils et se font attaquer par toutes les poupées autour d'eux</p>\n<p>Je jette 10+1d20 et ils doivent faire plus avec 1d20Mental+Résistance sinon ils prennent mon jet comme dégât</p>\n<p>Masque : \"Vous êtes proches, et vous êtes faibles.\"</p>\n<p>Ils se font sortir de ce cauchemar par l'Oracle Syrithia (amie de Léoric) et sont en très mauvais état</p>\n<p>Syrithia : \"Regardez-vous... Et ce n'est que le début..\"</p>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego 18</li><li><input type=\"checkbox\" disabled checked> Loïc 15</li><li><input type=\"checkbox\" disabled checked> Lucas 8</li><li><input type=\"checkbox\" disabled checked> Michel 20</li><li><input type=\"checkbox\" disabled checked> Nolan 6</li><li><input type=\"checkbox\" disabled checked> Thomas 18</li><li><input type=\"checkbox\" disabled> William 7</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 16 - 28.11.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 16 - 28.11.25\" data-wiki-fragment=\"\">Arc 3 - 16 - 28.11.25</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4\" data-wiki-fragment=\"\">Arc 4</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
