<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

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
          "text": "7) Recherche [[Shara Ishvalda]]",
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
  <meta name="description" content={"Résumé Détails Lieu actuel : Suraja, Entre Irkma et Rhadiz Objectif : Tuer le Shara Ishvalda Pnjs notables : Chlorys, Zaledra Scénario Notes 7) Recherche Shara Ishvalda Énigme, Arek > détecter le bon…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Arc 3 - 17 - 20.12.25"} />
  <meta property="og:description" content={"Résumé Détails Lieu actuel : Suraja, Entre Irkma et Rhadiz Objectif : Tuer le Shara Ishvalda Pnjs notables : Chlorys, Zaledra Scénario Notes 7) Recherche Shara Ishvalda Énigme, Arek > détecter le bon…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 3 - 17 - 20.12.25"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>Résumé</p>\n</blockquote>\n<h2 data-heading=\"Détails\" dir=\"auto\" id=\"dtails\">Détails</h2>\n<p dir=\"auto\">Lieu actuel : Suraja, Entre Irkma et Rhadiz</p>\n<p dir=\"auto\">Objectif : Tuer le Shara Ishvalda</p>\n<p dir=\"auto\">Pnjs notables : Chlorys, Zaledra</p>\n<h2 data-heading=\"Scénario\" dir=\"auto\" id=\"scnario\">Scénario</h2>\n<h2 data-heading=\"Notes\" dir=\"auto\" id=\"notes\">Notes</h2>\n<h3 data-heading=\"7) Recherche [[Shara Ishvalda]]\" dir=\"auto\" id=\"7-recherche-shara-ishvalda\">7) Recherche Shara Ishvalda</h3>\n<blockquote dir=\"auto\">\n<p><strong>Énigme</strong>, Arek &gt; détecter le bon caillou</p>\n</blockquote>\n<p dir=\"auto\">Le boss dort sous le sable, mais n'émet aucune magie<br>\nIl y a d'autres cailloux autour, donc ils doivent trouver le bon sur lequel faire une attaque surprise<br>\nS'ils en attaquent un mais que c'est pas le bon, ça réveille le boss</p>\n<h3 data-heading=\"8) Confrontation Shara Ishvalda\" dir=\"auto\" id=\"8-confrontation-shara-ishvalda\">8) Confrontation Shara Ishvalda</h3>\n<blockquote dir=\"auto\">\n<p><strong>Combat</strong>,</p>\n</blockquote>\n<p dir=\"auto\"><strong>Rappel des stats :</strong></p>\n<h5 data-heading=\"Ancien système\" dir=\"auto\" id=\"ancien-systme\">Ancien système</h5>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Dégâts càc Max</th>\n<th align=\"center\">Défense Max</th>\n<th align=\"center\">Esquive Max</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Arek</strong></td>\n<td align=\"center\">20 + 10</td>\n<td align=\"center\">34 (51/79)</td>\n<td align=\"center\">20</td>\n</tr>\n<tr>\n<td><strong>Dara</strong></td>\n<td align=\"center\">21 + 12</td>\n<td align=\"center\">8</td>\n<td align=\"center\">31</td>\n</tr>\n<tr>\n<td><strong>Hazdaim</strong></td>\n<td align=\"center\">21 + 11 &amp; 21 + 10</td>\n<td align=\"center\">6</td>\n<td align=\"center\">30</td>\n</tr>\n<tr>\n<td><strong>Léoric</strong></td>\n<td align=\"center\">21 + 6</td>\n<td align=\"center\">7</td>\n<td align=\"center\">21</td>\n</tr>\n<tr>\n<td><strong>Haelrak</strong></td>\n<td align=\"center\">15 + 3</td>\n<td align=\"center\">6</td>\n<td align=\"center\">26</td>\n</tr>\n<tr>\n<td><strong>Zvein</strong></td>\n<td align=\"center\">12 + 3</td>\n<td align=\"center\">0</td>\n<td align=\"center\">20</td>\n</tr>\n<tr>\n<td><strong>Halfdan</strong></td>\n<td align=\"center\">17 + 5</td>\n<td align=\"center\">6</td>\n<td align=\"center\">28</td>\n</tr>\n</tbody>\n</table></div>\n<h5 data-heading=\"Nouveau système\" dir=\"auto\" id=\"nouveau-systme\">Nouveau système</h5>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Dégâts càc Max</th>\n<th align=\"center\">Défense Max<br>Imp + Déf</th>\n<th align=\"center\">Esquive Max</th>\n<th align=\"center\">Dégâts magiques Max</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Arek</strong><br>Lvl 5.5</td>\n<td align=\"center\"><em>2x (11 + 1d6)</em><br>12 + 3T + 10 Glace = <strong>37-42</strong></td>\n<td align=\"center\">(10 + 6) + 17 Lou<br>+ 2 Feu<br>+ 2 Foudre<br>(3 + 4 Bouclier<br>+ 5 Glace)</td>\n<td align=\"center\">20 (+0)<br>Impossible</td>\n<td align=\"center\">15 - 95</td>\n</tr>\n<tr>\n<td><strong>Dara</strong><br>Lvl 5</td>\n<td align=\"center\"><em>2x (11 + 1d8)</em><br>12 + 3T + 4 Glace = <strong>31-38</strong><br> 5 + 4T + 14 Glace = <strong>35-42</strong></td>\n<td align=\"center\">1 + 6 Lég<br>+ 2 Feu<br>+ 2 Foudre</td>\n<td align=\"center\">23 (+6)</td>\n<td align=\"center\">10 - 120</td>\n</tr>\n<tr>\n<td><strong>Hazdaim</strong><br>Lvl 5</td>\n<td align=\"center\"><em>2x (10 + 1d6)</em><br>11 + 3T + 4 Glace = <strong>29-34</strong><br>5 + 4T + 14 Glace = <strong>34-39</strong></td>\n<td align=\"center\">1 + 6 Lég<br>+ 2 Air<br>+ 1 Roche<br>+1 Feu</td>\n<td align=\"center\">22 (+5)</td>\n<td align=\"center\">10 - 60</td>\n</tr>\n<tr>\n<td><strong>Léoric</strong><br>Lvl 4</td>\n<td align=\"center\"><em>2x (7 + 1d4)</em><br>6 + 4C + 16 Glace = <strong>34-37</strong></td>\n<td align=\"center\">4 + 7 Lég</td>\n<td align=\"center\">21 (+0)</td>\n<td align=\"center\">10 - 80</td>\n</tr>\n<tr>\n<td><strong>Haelrak</strong><br>Lvl 4</td>\n<td align=\"center\"><em>(5 + 2d8)</em><br>3 + 3P = <strong>13-19</strong><br></td>\n<td align=\"center\">1 + 6 Lég<br>+ 4 Air</td>\n<td align=\"center\">22 (+4)</td>\n<td align=\"center\">15 - 120</td>\n</tr>\n<tr>\n<td><strong>Zvein</strong><br>Lvl 4</td>\n<td align=\"center\"><em>(2 + 1d4) + 0</em></td>\n<td align=\"center\">0</td>\n<td align=\"center\">20 (+0)</td>\n<td align=\"center\">15 - 120</td>\n</tr>\n<tr>\n<td><strong>Halfdan</strong><br>Lvl 4</td>\n<td align=\"center\"><em>(5 + 1d6)</em><br>5 + 3T + 4 Glace = <strong>18-23</strong></td>\n<td align=\"center\">1 + 6 Lég<br>(3 + 2 Bouclier)</td>\n<td align=\"center\">23 (+4)</td>\n<td align=\"center\">0</td>\n</tr>\n</tbody>\n</table></div>\n<h5 data-heading=\"Test nouveau système\" dir=\"auto\" id=\"test-nouveau-systme\">Test nouveau système</h5>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Dégâts càc Max</th>\n<th align=\"center\">Défense Max<br>Imp + Déf</th>\n<th align=\"center\">Esquive Max</th>\n<th align=\"center\">Dégâts magiques Max</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Guerrier</strong><br>Lvl 18</td>\n<td align=\"center\"><em>(14 + 1d8)</em><br>(8+8) + 4C + 10 Foudre = <strong>45-52</strong></td>\n<td align=\"center\">20 + 35 Lou<br>+ 5 Foudre<br>+ 4 Feu<br>+ 4 Ténèbre<br>+ 1 Lumière</td>\n<td align=\"center\">22 (+0)<br>Impossible</td>\n<td align=\"center\">10 - 100</td>\n</tr>\n<tr>\n<td><strong>Fighter</strong><br>Lvl 16</td>\n<td align=\"center\"><em>2x (15 + 2d8)</em><br>(12+10) + 5P + 10 Feu = <strong>53-59</strong></td>\n<td align=\"center\">7 + 25 Int<br>+ 3 Feu<br>+ 3 Foudre</td>\n<td align=\"center\">24 (+5)</td>\n<td align=\"center\">10 - 150</td>\n</tr>\n<tr>\n<td><strong>Mage</strong><br>Lvl 15</td>\n<td align=\"center\"><em>(5 + 1d6)</em><br>(8+6) + 3T + 6 Lumière = <strong>29-34</strong></td>\n<td align=\"center\">2 + 12 Lég<br>+ 5 Lumière<br>+ 3 Ténèbre<br>+ 3 Roche<br>(3 + 4 Bouclier<br>+ 5 Feu)</td>\n<td align=\"center\">22 (+4)</td>\n<td align=\"center\">20 - 240</td>\n</tr>\n</tbody>\n</table></div>\n<h4 data-heading=\"Système de focus\" dir=\"auto\" id=\"systme-de-focus\">Système de focus</h4>\n<p dir=\"auto\">A chaque tour de joueur, le joueur qui attire l'attention gagne un point de focus.<br>\nUne réussite critique donne 2 points de focus.<br>\nUne fois qu'un joueur a 5 points, le monstre se concentre entièrement sur lui.</p>\n<h4 data-heading=\"Phase 1\" dir=\"auto\" id=\"phase-1\">Phase 1</h4>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>HP</th>\n<th>AC</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>300</td>\n<td>500</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\">Prend des dégâts uniquement par :</p>\n<ul>\n<li dir=\"auto\">Attaques contondantes\n<ul>\n<li dir=\"auto\">Léoric : 2 * (15 + 1d12) = 32-54 (x2-3 avec style)</li>\n</ul>\n</li>\n<li dir=\"auto\">Magie <del>explosive</del>/ Terre :\n<ul>\n<li dir=\"auto\">1d20 &gt; 8 pour toucher</li>\n<li dir=\"auto\">X crystaux * dés de dégâts (90 + 40 + 80) = 210</li>\n</ul>\n</li>\n<li dir=\"auto\">Baliste :\n<ul>\n<li dir=\"auto\">1d20 &gt; (5-15 dépend de la distance) pour toucher</li>\n<li dir=\"auto\">1d6 * 20 dégâts</li>\n</ul>\n</li>\n</ul>\n<p dir=\"auto\">Attaques :</p>\n<ul>\n<li dir=\"auto\">Focus 1 : (4+D4) * 2</li>\n<li dir=\"auto\">Focus 2 : (6+D6) * 2</li>\n<li dir=\"auto\">Focus 3 : (8+D8) * 2</li>\n<li dir=\"auto\">Focus 4 : (10+D10) * 2</li>\n<li dir=\"auto\">Focus 5 : (12+D12) * 2</li>\n</ul>\n<h4 data-heading=\"Phase 2\" dir=\"auto\" id=\"phase-2\">Phase 2</h4>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>HP</th>\n<th>AC</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>300</td>\n<td>500</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\">Dara, Hazdaim &gt; dégâts càc<br>\nHaelrak, Zvein &gt; dégâts distance</p>\n<p dir=\"auto\">Attaques :</p>\n<ul>\n<li dir=\"auto\">Focus 1 : 6d4</li>\n<li dir=\"auto\">Focus 2 : 6d6</li>\n<li dir=\"auto\">Focus 3 : 6d8</li>\n<li dir=\"auto\">Focus 4 : 8d10</li>\n<li dir=\"auto\">Focus 5 : 10d12</li>\n</ul>\n<p dir=\"auto\">Attaque finale AOE boule : (10) * 3D4</p>\n<h3 data-heading=\"9) Rencontre des Espers\" dir=\"auto\" id=\"9-rencontre-des-espers\">9) Rencontre des Espers</h3>\n<p dir=\"auto\"><strong>Chlorys</strong> Compagnon d'armes d'enfance d'Arek, spécialisée voleuse/ assassin</p>\n<p dir=\"auto\"><strong>Raja</strong> Associée commercial de Dara</p>\n<p dir=\"auto\"><strong>Nimaya</strong> Ancienne esclave devenue logistique du réseau</p>\n<p dir=\"auto\"><strong>Tazim</strong> Prêtre du \"Prendre\"</p>\n<p dir=\"auto\">On remercie le groupe d'avoir tué le Shara Ishvalda et on leur dit que Chlorys leur a dit qu'ils cherchaient des infos</p>\n<p dir=\"auto\">On les amène au boss où ils pourront avoir des infos, mais Chlorys s'y trouve attachée et battue</p>\n<p dir=\"auto\">Le commerçant de nécromancie (<strong>Zaledra</strong>) est là, c'est le chef de l'organisation Espers</p>\n<p dir=\"auto\">Ils ont fourni l'argent à Nirina parce qu'ils ont un intérêt financier à ce que le masque tue en masse</p>\n<p dir=\"auto\">Les gens qu'il transforme en poupée tombe dans une zone floue de la juridiction, ce qui lui permettrait de les récupérer comme esclaves sans avoir besoin qu'ils signent un contrat</p>\n<p dir=\"auto\">Les gouvernements de Suraja lui fourniraient ensuite énormément d'argent pour utiliser ses armées</p>\n<p dir=\"auto\">C'est lui qui a envoyé le nécromancien raser le village de Dara pour récupérer plus de toiles, et il l'a compris quand Dara s'est présenté dans son bureau</p>\n<p dir=\"auto\"><strong>Si les joueurs se rebellent</strong> :</p>\n<ul>\n<li dir=\"auto\">ils se font piquer dans la nuque par du plomb, les rendant immobiles</li>\n<li dir=\"auto\">Il force Dara à choisir qui il tue entre les 2 personnages les plus problématiques du jdr, sinon c'est entre Chlorys et Bigard</li>\n</ul>\n<p dir=\"auto\">Le groupe de Nirina aurait dû l'arrêter depuis quelques temps maintenant, et ça l'intrigue</p>\n<p dir=\"auto\">Il leur propose de les envoyer à Nirina pour leur dire d'arrêter, car il a déjà absorbé suffisamment de gens pour son plan</p>\n<p dir=\"auto\">Pour les forcer à obéir, il coupe l'annulaire du mariage à tout le monde, ça lui permettrait de les tuer à distance à tout moment grâce à la nécromancie en les invoquant à partir du doigt</p>\n<p dir=\"auto\">Il les envoie ensuite à Nirina</p>\n<h3 data-heading=\"10) Le cauchemar\" dir=\"auto\" id=\"10-le-cauchemar\">10) Le cauchemar</h3>\n<p dir=\"auto\">Avant même d'arriver à Nirina, ils se retrouvent dans la dimension du masque</p>\n<p dir=\"auto\">Sauf que cette fois ils sont suspendus par des fils et se font attaquer par toutes les poupées autour d'eux</p>\n<p dir=\"auto\">Je jette 10+1d20 et ils doivent faire plus avec 1d20Mental+Résistance sinon ils prennent mon jet comme dégât</p>\n<p dir=\"auto\">Masque : \"Vous êtes proches, et vous êtes faibles.\"</p>\n<p dir=\"auto\">Ils se font sortir de ce cauchemar par l'Oracle Syrithia (amie de Léoric) et sont en très mauvais état</p>\n<p dir=\"auto\">Syrithia : \"Regardez-vous... Et ce n'est que le début..\"</p>\n<h2 data-heading=\"Joueurs\" dir=\"auto\" id=\"joueurs\">Joueurs</h2>\n<ul class=\"contains-task-list\">\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Diego 18</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Loïc 15</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Lucas 8</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Michel 20</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Nolan 6</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Thomas 18</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">William 7</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Précédent</th>\n<th align=\"center\">Suivant</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 16 - 28.11.25\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 16 - 28.11.25\" data-wiki-fragment=\"\">Arc 3 - 16 - 28.11.25</a></td>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4\" data-wiki-fragment=\"\">Arc 4</a></td>\n</tr>\n</tbody>\n</table></div>")}
  </div>
</article>

<LinkPreview />
