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
          "id": "1-arrive",
          "text": "1) Arrivée",
          "level": 3
      },
      {
          "id": "2-premire-nuit",
          "text": "2) Première nuit",
          "level": 3
      },
      {
          "id": "3-deuxime-nuit",
          "text": "3) Deuxième nuit",
          "level": 3
      },
      {
          "id": "4-troisime-nuit",
          "text": "4) Troisième nuit",
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
  <title>Arc 4 - 22 - 03.04.26</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 4 - 22 - 03.04.26</h1>
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
	{@html renderMarkdown("\nLieu actuel : Nirina, Orphelinat\n\nObjectif :\n\nPnjs notables : Théon, Enfants, Ygor, Maîtresse de maison\n")}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">Notes</h2>
	{@html renderMarkdown("\nTODO\n- [x] Compétences\n- [ ] Equilibrer la magie\n- [ ] Choisir l'effet des <a href=\"/Jeu/Regles/Combat/Armes#matriaux\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Combat/Armes\" data-wiki-fragment=\"Mat%C3%A9riaux\">VS</a>\n- [x] Remettre la maîtrise\n- [ ] Fiche perso Cindy\n- [x] Réussite critique pour les dés d'armes\n- [x] Yeux\n- [x] Dents\n- [ ] Lettres\n- [x] Imprimer carte\n- [x] Lumière effet flamme FLAMORA\n\n|           |        Arek        |          Dara           |        Haelrak        |        Hazdaim         |      Léoric       |  Zveindel   |\n| --------- | :----------------: | :---------------------: | :-------------------: | :--------------------: | :---------------: | :---------: |\n| **AC**    |       8 (-3)       |           15            |          14           |           14           |         9         |     10      |\n| **DR**    |      25 (+40)      |           14            |          12           |           12           |        23         |     20      |\n| **DMG**   | 5 +36\\|30<br>6 +55 | 9 +36\\|30\\|18<br>14 +10 | 12 +15\\|4<br>16 +2 +5 | 10 +14\\|6<br>15 +2 +10 | 14 +7\\|6<br>7 +20 |      -      |\n| **Magie** |     9 (1d8 +5)     |        9 (1d12)         |       14 (1d8)        |        9 (1d6)         |      9 (1d8)      | 14 (1d8 +2) |\n\n| Ennemi | AC  | DR  | HP  | Léger | Lourde | Magie |\n| ------ | :-: | :-: | :-: | :---: | :----: | :---: |\n|        |     |     |     |       |        |       |\n")}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">Scénario</h2>
	{@html renderMarkdown("\nThéon fuit beaucoup le regard d'Hazdaim\nIl est devenu sourd pour entendre les conseils des dieux\n")}
	{@render _Arrive()}
	{@render _PremireNuit()}
	{@render _DeuximeNuit()}
	{@render _TroisimeNuit()}
	</section>
{/snippet}

{#snippet _Arrive()}
	<section>
		<h3 id="1-arrive">1) Arrivée</h3>
	{@html renderMarkdown("\nFaire le résumé du jdr précédent pour remettre l'ambiance\n\nSuite à la marche de presque 40h pour fuir le pendu, ils ont perdu 20-30 HP de fatigue (et parce qu'ils n'ont pas enlevé leur armure)\n\nLorsqu'ils arrivent dans l'orphelinat, ils trouvent les enfants en train de prier dans le salon (ils sont X -> Nombre de joueurs autour de la table)\n\nLe reste des enfants ainsi que 2 des superviseurs ont été emmené par Nix et Salomé\n\nCeux qui restent n'ont pas été pris car ils étaient encore trop malades et fragiles que pour voyager\n(En vrai, Salomé trouvait que leur âme était impure car mélangée à celle d'Hugo)\n\n(Il manque 1 enfant, il s'agit d'Hugo. Si Hazdaim demande où il est, Théon bégaie, a des larmes dans les yeux et dit qu'il a disparu dans la forêt)\n\nRepos à l'orphelinat et discussions\n\nThéon fait prier les enfants avant de manger (Grande Mère), et demande aux joueurs quel dieu ils prient\n\nThéon fais prier les enfants avant d'aller dormir (Dieu Dormant), et demande aux joueurs quel dieu ils prient\n\nSi quelqu'un prie le dieu de la mort, il est surpris et le reprend \"On ne prie pas ce dieu ici. On a mis des sceaux, il ne viendra pas !\"\n")}

	</section>
{/snippet}

{#snippet _PremireNuit()}
	<section>
		<h3 id="2-premire-nuit">2) Première nuit</h3>
	{@html renderMarkdown("\nJet de mental pour voir qui se réveille\nCeux qui se réveillent peuvent mettre à jour leurs points d'attributs manquant\n\"Ca vous sera utile pour la suite\"\n\nSensation de froid désagréable\n\nPerception -> \"Rends-les moi !\" qui vient d'ailleurs dans l'orphelinat\n\nS'ils y vont, ils tombent sur Loïc debout devant un mur\n\nLorsqu'il le retourne, ses yeux sont tombés et il saigne, mais il ne dit rien, comme une coquille vide\n\nMettre 2 petits sacs gorgés de sang devant le joueur IRL\n\nDemander au joueur de ranger ses y.. sacs dans le frigo\n\nLorsqu'il arrive au frigo, lui demander de ne pas se retourner et de ne pas bouger\nPuis de doucement se retourner par la gauche avant de revenir se rasseoir\n\n\"Tu n'as rien vu dans l'obscurité? C'est que tu as raté ton jet de perception\"\n\nLumière -> On voit un spectre s'enfuir dans la maison, mais ils n'arrivent pas à le rattraper\nSens manquant pour voir les esprits -> Il manque un morceau à l'âme de Loïc, elle se trouve dans le yeux (réussites critiques perception -> Ce n'est pas son âme à lui qui est dans les yeux)\n")}

	</section>
{/snippet}

{#snippet _DeuximeNuit()}
	<section>
		<h3 id="3-deuxime-nuit">3) Deuxième nuit</h3>
	{@html renderMarkdown("\nIls passent la nuit et ne régénèrent pas leur HP\n\nMais le jour n'est toujours pas levé, et un épais brouillard (magique) englobe la maison\nMais ce n'est pas une magie qu'ils reconnaissent\n\nS'ils essaient de partir, ils retombent sur l'orphelinat\n\nThéon va fouiller sa bibliothèque pour savoir ce qu'il en est\n\nPendant ce temps, les enfants demandent à jouer à cache-cache avec les joueurs\n")}

	</section>
{/snippet}

{#snippet _TroisimeNuit()}
	<section>
		<h3 id="4-troisime-nuit">4) Troisième nuit</h3>
	{@html renderMarkdown("\nUn cri au milieu de la nuit\n\nJet de mental pour voir qui se réveille\n\nDes dents de lait sont sur le sol dans du sang, la fenêtre est brisée et montre des traces de fuite\n\nLes joueurs suivent les traces et se séparent\n\nArek, Haelrak, Léoric et Dara se séparent des autres et font leur OAV\n\nLes autres retrouvent Diego en boule dans la forêt\n\"Je voulais le retrouver, mais il n'a jamais été ici\" Il répète ça en boucle\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">Joueurs</h2>
	{@html renderMarkdown("\n- [x] Diego 23\n- [x] Loïc 18\n- [ ] Lucas 9\n- [x] Michel 25\n- [x] Nolan 9\n- [x] Thomas 22\n- [ ] William 7\n\n|         Précédent         |           Suivant            |\n| :-----------------------: | :--------------------------: |\n| <a href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 21 - 20.02.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 21 - 20.02.26\" data-wiki-fragment=\"\">Arc 4 - 21 - 20.02.26</a> | <a href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22b - 06.03.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22b - 06.03.26\" data-wiki-fragment=\"\">Arc 4 - 22b - 06.03.26</a> |")}

	</section>
{/snippet}
