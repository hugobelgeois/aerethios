<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "description",
          "text": "Description",
          "level": 2
      },
      {
          "id": "dtails",
          "text": "Détails",
          "level": 2
      },
      {
          "id": "maps",
          "text": "Maps",
          "level": 3
      },
      {
          "id": "rencontres",
          "text": "Rencontres",
          "level": 3
      },
      {
          "id": "intrigues",
          "text": "Intrigues",
          "level": 2
      },
      {
          "id": "actions-des-joueurs",
          "text": "Actions des joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"03. Village du chef"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"03. Village du chef"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render description()}
		{@render dtails()}
		{@render intrigues()}
		{@render actionsDesJoueurs()}
  </div>
</article>

<LinkPreview />

{#snippet description()}
	<section>
		<h2 id="description">{@html "Description"}</h2>
	{@html applyBase("<blockquote>Description à lire aux joueurs en entrant dans cette scène.</blockquote>\n<p>\tL'air est humide et froid. Vous progressez de nuit entre les montagnes lorsqu'un courant d'air vous apporte une forte odeur de brûlé. En suivant cette odeur, le passage s'ouvre sur une immense cité construite autour d'un gouffre où se déversent plusieurs cascades.</p>\n<p>\tEloigné de la ville, un gigantesque brasier éclaire les rues. Une foule de prêtres l'entoure, alimentant les flammes tout en récitant des prières.<br>\n\tEn ville, malgré une architecture riche, des décorations soignées et des rues qui devraient être animées, celle-ci semble étrangement vide. Seuls quelques habitants traversent les rues en silence.</p>\n<img src=\"%%BASE%%/3-Village-du-chef.jpg\" alt=\"3-Village-du-chef.jpg\" class=\"wiki-image\" />")}

	</section>
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html "Détails"}</h2>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Lieu</th><th>Météo</th><th>Heure</th><th>Musique</th></tr></thead><tbody><tr><td>Nirina, Elfais</td><td>Humide</td><td>Nuit</td><td></td></tr></tbody></table></div>"}
	{@render maps()}
	{@render rencontres()}
	</section>
{/snippet}

{#snippet maps()}
	<section>
		<h3 id="maps">{@html "Maps"}</h3>


	</section>
{/snippet}

{#snippet rencontres()}
	<section>
		<h3 id="rencontres">{@html "Rencontres"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Nom</th><th>Rôle</th><th>Race</th><th>Sexe</th><th>Age</th><th>Personnalité</th><th>Accent</th><th>Equipement</th></tr></thead><tbody><tr><td>Ephisto<br>\"Elès\"</td><td>Chef</td><td>Elfe</td><td>Homme</td><td></td><td>Scientifique<br>Pressé<br>Attristé</td><td>-</td><td></td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet intrigues()}
	<section>
		<h2 id="intrigues">{@html "Intrigues"}</h2>
	{@html applyBase("<blockquote>Evénements et leur conclusion sans l'intervention des joueurs</blockquote>\n<ul><li>Personne ne sait qui est le chef</li><li>Est-ce les prêtres ? Les généraux ?</li></ul>\n<ul><li>Ephisto est désespéré de trouver une solution pour contenir le masque</li><li>Fabriquer des mechas pour l'écraser par la puissance</li><li>Faire prier les enfants tous les dieux pour espérer que leur prière atteignent la divinité du masque OU attirent d'autres dieux pour leur venir en aide</li><li>Le masque génère son propre coeur, les joueurs pourraient devoir enquêter pour savoir de quel dieu il s'agit afin de pouvoir le prier et donc le maintenir</li></ul>\n<p>\t Si les joueurs ne le convainquent pas assez, ils essaient des les capturer pour analyser leur résistance au masque</p>\n<ul><li>Des enfants meurent de fatigues et de malnutrition à cause de leur surnombre. Ils sont entassés plus loin et brûlés chaque soir pour éviter les maladies</li><li>Ephisto est trop loin dans ses buildings que pour être au courant de cela</li></ul>\n<p>\tSi les joueurs ne font rien, des enfants encore vivants mais trop faibles que pour prier se font brûler vifs</p>\n<ul><li>Pour sauver les enfants présents et améliorer leur condition de vie, ils doivent reprendre le contrôle de la place en abattant le sergent et le grand prêtre, et les remplacer</li><li>Ils doivent choisir qui abattre en premier, ce qui mettra l'autre au courant et changera les préparations</li><li>Un dieu viendra leur parler individuellement pendant ce temps pour leur proposer un marché</li><li>Leur donner des pouvoirs en échange d'un accès à leur corps. L'offre n'est valable que s'ils n'en parlent pas aux autres</li><li>Lister les solutions possibles pour que les joueurs fassent un choix</li><li><del>Mechas</del></li><li>Dragon -> Négociation + Trouver des richesses</li><li>Atilal -> Préparation + Trouver quelqu'un pour attirer le masque</li><li>Enfant de prières -> Pactiser avec le masque dans son domaine + Sacrifier les enfants pour affaiblir le masque d'un coup</li><li>Etudier les joueurs -> Sacrifice ? + Développement d'une armée résistante au masque pour le contrer</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Entités</th><th>AC</th><th>DR</th><th>HP</th><th>Poids</th></tr></thead><tbody><tr><td>Petit Hippo</td><td>6</td><td>10</td><td>100</td><td>1500</td></tr><tr><td>Moyen Hippo</td><td>4</td><td>15</td><td>200</td><td>3000</td></tr></tbody></table></div>\n<div class=\"table-scroll\"><table><thead><tr><th>Hippo</th><th>Dégâts</th><th>Effet</th></tr></thead><tbody><tr><td>Coup de tête</td><td>(2d8)<br>40-50</td><td>-</td></tr><tr><td>Charge</td><td>(3d8)<br>60-70</td><td>-</td></tr><tr><td>Morsure</td><td>(2d4)<br>80-90<br>x2 si immobilisé</td><td>Immobilise</td></tr><tr><td>Pet</td><td>2d12</td><td>Donne désavantage<br>Perte de 5HP par tour</td></tr></tbody></table></div>\n<img src=\"%%BASE%%/3-Hippo.png\" alt=\"3-Hippo.png\" class=\"wiki-image\" />")}

	</section>
{/snippet}

{#snippet actionsDesJoueurs()}
	<section>
		<h2 id="actions-des-joueurs">{@html "Actions des joueurs"}</h2>
	{@html applyBase("<p><strong>08-08-2026</strong></p>\n<ul><li>Il pousse Zveindel dans l'eau en bas de la cascade</li><li>Il fait un plat et ne sait pas nager, mais arrive à atteindre le bord en marchant au fond</li><li>Une fois tous en bas, un hippopotame les charge et broie Zveindel entre lui et Arek</li><li>Le combat continue et l'hippo s'enfuit en leur chiant dessus</li><li>Arek aura subi 160 dégâts (-120 grâce à sa DR)</li><li>Ils arrivent à la ville des lions d'argent ou des cairns d'enfants et d'adultes sont mis en feu</li><li>Ils sont escortés dans un bâtiment de la ville avant d'être fait prisonniers</li><li>Arek enfonce la porte de leur cellule et celle des cellules voisines</li><li>Dans une des cellule, un prisonnier abuse d'une prisonnière</li><li>Arek le tue et le démembre pour utiliser ses os comme des armes</li><li>Le bâtiment contient des gardes mais aussi des prêtres</li><li>Dara et Léoric trouve un prêtre isolé et l'interroge violemment pour savoir où aller</li><li>Ils font une distraction pour pouvoir tuer 2 gardes</li><li>Arek rentre dans une salle et annihile 3 prêtres</li><li>Ils descendent d'un étage et trouve un réacteur alimenté par un crystal, qui génère de l'énergie pour la ville</li><li>Ils interrogent violemment le garde des commandes pour éteindre le réacteur afin de passer sans se faire juter</li><li>Ils éteignent le réacteur et se dirigent vers le fou, où pourrait se trouver leur équipement</li><li>En arrivant dans les quartier du fou, ils trouvent des notes sur ses recherches et ses plans</li><li>Ils rencontrent le fou, Ephisto, et discutent avec lui de tout ce qu'il se passe</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th><img src=\"%%BASE%%/3-Box.png\" alt=\"3-Box.png\" class=\"wiki-image\" /></th><th><img src=\"%%BASE%%/3-Mask.png\" alt=\"3-Mask.png\" class=\"wiki-image\" /></th><th><img src=\"%%BASE%%/3-Mecha.png\" alt=\"3-Mecha.png\" class=\"wiki-image\" /></th></tr></thead><tbody><tr><td><img src=\"%%BASE%%/3-Dragon.png\" alt=\"3-Dragon.png\" class=\"wiki-image\" /></td><td><img src=\"%%BASE%%/3-Atilal.png\" alt=\"3-Atilal.png\" class=\"wiki-image\" /></td><td>Faire prier les enfants afin de créer un lien avec le masque, puis sacrifier les enfants pour créer une rupture temporaire dans le pouvoir du masque, créant une faille exploitable</td></tr></tbody></table></div>\n<p><strong>04-09-2026</strong></p>\n<ul><li>Exploration du bâtiment pour abattre le Capitaine (chef de l'armée) et le Grand Prêtre afin de rétablir l'ordre pour Ephisto</li><li>Ils vont remplacer les chefs par des connaissances à eux</li><li>Ils voient des chien dans des cages</li><li>Dara met un os d'Owlbear dans la gueule du chihuahua avant d'invoquer l'Owlbear, ce qui lui arrache la mâchoire</li><li>Ils interrompent la messe du Grand Prêtre</li><li>Ils tuent 2 gardes et un prêtre car ils pensent avoir vu une bourse au fond de la salle</li><li>Arek tombe sur la jambe du capitaine, ce qui la lui arrache</li><li>Dara et Hazdaim assassine les 2 gardes qui arrivaient en renfort</li><li>Ils tombent sur une grosse araignée qu'ils brûlent avant que Dara récupère une de ses pattes</li><li>Il s'en sert pour invoquer l'araignée contre les prêtres qui paniquent</li><li>Ephisto a fait des tests sur la poupée d'Halfdan qu'ils lui ont donné</li><li>Il l'a tué par accident</li><li>Ils décident de :</li><li>Contacter Billy pour qu'il leur indique quelqu'un de fort pour que le masque en prenne possession et qu'on puisse l'abattre pendant qu'il essaie de le contrôler</li><li>Contacter Syrithia pour que l'Eglise leur fournisse des prisonniers qui seront sacrifiés pendant qu'ils prieront le masque</li><li>Se renseigner sur la personne qui a pactisé avec le dragon pour le retrouver et gagner la fidélité du dragon</li></ul>\n<p><strong>02-10-2026</strong></p>\n<ul><li>Marvik arrive, envoyé par Syrithia</li></ul>\n<p>\tUne purge se déroule à Pulmius où les survivants sont fait prisonniers<br>\n\tIls vient pour fournir un contact direct entre le chef des opérations et Darekhal qui s'assurera du bon déroulement des prières à Pulmius<br>\n\tSyrithia de son côté récupère les miracles et pactise avec les esprits pour contrer les poupées du masque</p>\n<ul><li>Ils proposent d'appeler des Dieux pour qu'ils viennent aider lorsque le masque sera en train de prendre le contrôle de quelqu'un</li><li>Billy ne répond pas</li><li>La personne qui a pactisé avec le dragon est Havel</li></ul>\n<p>\tLe dragon, Fortissax, la respectait car elle était très forte<br>\n\tIl voudra peut-être bien rediscuter de la situation si on retrouve son corps<br>\n\tIl faut aller le voir pour en savoir plus</p>")}

	</section>
{/snippet}
