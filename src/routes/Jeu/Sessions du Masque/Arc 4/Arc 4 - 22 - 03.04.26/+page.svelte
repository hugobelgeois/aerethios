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
  <title>{"Arc 4 - 22 - 03.04.26"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 4 - 22 - 03.04.26"}</h1>
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
	{@html "<p>Lieu actuel : Nirina, Orphelinat</p>\n<p>Objectif :</p>\n<p>Pnjs notables : Théon, Enfants, Ygor, Maîtresse de maison</p>"}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html "Notes"}</h2>
	{@html applyBase("<p>TODO</p>\n<ul><li><input type=\"checkbox\" disabled checked> Compétences</li><li><input type=\"checkbox\" disabled> Equilibrer la magie</li><li><input type=\"checkbox\" disabled> Choisir l'effet des <a href=\"%%BASE%%/Jeu/Regles/Combat/Armes#matriaux\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Combat/Armes\" data-wiki-fragment=\"Mat%C3%A9riaux\">VS</a></li><li><input type=\"checkbox\" disabled checked> Remettre la maîtrise</li><li><input type=\"checkbox\" disabled> Fiche perso Cindy</li><li><input type=\"checkbox\" disabled checked> Réussite critique pour les dés d'armes</li><li><input type=\"checkbox\" disabled checked> Yeux</li><li><input type=\"checkbox\" disabled checked> Dents</li><li><input type=\"checkbox\" disabled> Lettres</li><li><input type=\"checkbox\" disabled checked> Imprimer carte</li><li><input type=\"checkbox\" disabled checked> Lumière effet flamme FLAMORA</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Arek</th><th>Dara</th><th>Haelrak</th><th>Hazdaim</th><th>Léoric</th><th>Zveindel</th></tr></thead><tbody><tr><td><strong>AC</strong></td><td>8 (-3)</td><td>15</td><td>14</td><td>14</td><td>9</td><td>10</td></tr><tr><td><strong>DR</strong></td><td>25 (+40)</td><td>14</td><td>12</td><td>12</td><td>23</td><td>20</td></tr><tr><td><strong>DMG</strong></td><td>5 +36|30<br>6 +55</td><td>9 +36|30|18<br>14 +10</td><td>12 +15|4<br>16 +2 +5</td><td>10 +14|6<br>15 +2 +10</td><td>14 +7|6<br>7 +20</td><td>-</td></tr><tr><td><strong>Magie</strong></td><td>9 (1d8 +5)</td><td>9 (1d12)</td><td>14 (1d8)</td><td>9 (1d6)</td><td>9 (1d8)</td><td>14 (1d8 +2)</td></tr></tbody></table></div>\n<div class=\"table-scroll\"><table><thead><tr><th>Ennemi</th><th>AC</th><th>DR</th><th>HP</th><th>Léger</th><th>Lourde</th><th>Magie</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html "Scénario"}</h2>
	{@html "<p>Théon fuit beaucoup le regard d'Hazdaim<br>\nIl est devenu sourd pour entendre les conseils des dieux</p>"}
	{@render _Arrive()}
	{@render _PremireNuit()}
	{@render _DeuximeNuit()}
	{@render _TroisimeNuit()}
	</section>
{/snippet}

{#snippet _Arrive()}
	<section>
		<h3 id="1-arrive">{@html "1) Arrivée"}</h3>
	{@html "<p>Faire le résumé du jdr précédent pour remettre l'ambiance</p>\n<p>Suite à la marche de presque 40h pour fuir le pendu, ils ont perdu 20-30 HP de fatigue (et parce qu'ils n'ont pas enlevé leur armure)</p>\n<p>Lorsqu'ils arrivent dans l'orphelinat, ils trouvent les enfants en train de prier dans le salon (ils sont X -> Nombre de joueurs autour de la table)</p>\n<p>Le reste des enfants ainsi que 2 des superviseurs ont été emmené par Nix et Salomé</p>\n<p>Ceux qui restent n'ont pas été pris car ils étaient encore trop malades et fragiles que pour voyager<br>\n(En vrai, Salomé trouvait que leur âme était impure car mélangée à celle d'Hugo)</p>\n<p>(Il manque 1 enfant, il s'agit d'Hugo. Si Hazdaim demande où il est, Théon bégaie, a des larmes dans les yeux et dit qu'il a disparu dans la forêt)</p>\n<p>Repos à l'orphelinat et discussions</p>\n<p>Théon fait prier les enfants avant de manger (Grande Mère), et demande aux joueurs quel dieu ils prient</p>\n<p>Théon fais prier les enfants avant d'aller dormir (Dieu Dormant), et demande aux joueurs quel dieu ils prient</p>\n<p>Si quelqu'un prie le dieu de la mort, il est surpris et le reprend \"On ne prie pas ce dieu ici. On a mis des sceaux, il ne viendra pas !\"</p>"}

	</section>
{/snippet}

{#snippet _PremireNuit()}
	<section>
		<h3 id="2-premire-nuit">{@html "2) Première nuit"}</h3>
	{@html "<p>Jet de mental pour voir qui se réveille<br>\nCeux qui se réveillent peuvent mettre à jour leurs points d'attributs manquant<br>\n\"Ca vous sera utile pour la suite\"</p>\n<p>Sensation de froid désagréable</p>\n<p>Perception -> \"Rends-les moi !\" qui vient d'ailleurs dans l'orphelinat</p>\n<p>S'ils y vont, ils tombent sur Loïc debout devant un mur</p>\n<p>Lorsqu'il le retourne, ses yeux sont tombés et il saigne, mais il ne dit rien, comme une coquille vide</p>\n<p>Mettre 2 petits sacs gorgés de sang devant le joueur IRL</p>\n<p>Demander au joueur de ranger ses y.. sacs dans le frigo</p>\n<p>Lorsqu'il arrive au frigo, lui demander de ne pas se retourner et de ne pas bouger<br>\nPuis de doucement se retourner par la gauche avant de revenir se rasseoir</p>\n<p>\"Tu n'as rien vu dans l'obscurité? C'est que tu as raté ton jet de perception\"</p>\n<p>Lumière -> On voit un spectre s'enfuir dans la maison, mais ils n'arrivent pas à le rattraper<br>\nSens manquant pour voir les esprits -> Il manque un morceau à l'âme de Loïc, elle se trouve dans le yeux (réussites critiques perception -> Ce n'est pas son âme à lui qui est dans les yeux)</p>"}

	</section>
{/snippet}

{#snippet _DeuximeNuit()}
	<section>
		<h3 id="3-deuxime-nuit">{@html "3) Deuxième nuit"}</h3>
	{@html "<p>Ils passent la nuit et ne régénèrent pas leur HP</p>\n<p>Mais le jour n'est toujours pas levé, et un épais brouillard (magique) englobe la maison<br>\nMais ce n'est pas une magie qu'ils reconnaissent</p>\n<p>S'ils essaient de partir, ils retombent sur l'orphelinat</p>\n<p>Théon va fouiller sa bibliothèque pour savoir ce qu'il en est</p>\n<p>Pendant ce temps, les enfants demandent à jouer à cache-cache avec les joueurs</p>"}

	</section>
{/snippet}

{#snippet _TroisimeNuit()}
	<section>
		<h3 id="4-troisime-nuit">{@html "4) Troisième nuit"}</h3>
	{@html "<p>Un cri au milieu de la nuit</p>\n<p>Jet de mental pour voir qui se réveille</p>\n<p>Des dents de lait sont sur le sol dans du sang, la fenêtre est brisée et montre des traces de fuite</p>\n<p>Les joueurs suivent les traces et se séparent</p>\n<p>Arek, Haelrak, Léoric et Dara se séparent des autres et font leur OAV</p>\n<p>Les autres retrouvent Diego en boule dans la forêt<br>\n\"Je voulais le retrouver, mais il n'a jamais été ici\" Il répète ça en boucle</p>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego 23</li><li><input type=\"checkbox\" disabled checked> Loïc 18</li><li><input type=\"checkbox\" disabled> Lucas 9</li><li><input type=\"checkbox\" disabled checked> Michel 25</li><li><input type=\"checkbox\" disabled checked> Nolan 9</li><li><input type=\"checkbox\" disabled checked> Thomas 22</li><li><input type=\"checkbox\" disabled> William 7</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 21 - 20.02.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 21 - 20.02.26\" data-wiki-fragment=\"\">Arc 4 - 21 - 20.02.26</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22b - 06.03.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22b - 06.03.26\" data-wiki-fragment=\"\">Arc 4 - 22b - 06.03.26</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
