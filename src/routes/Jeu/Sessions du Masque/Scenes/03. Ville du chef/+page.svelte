<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
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
  <title>03. Ville du chef</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>03. Ville du chef</h1>
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
		<h2 id="description">{@html applyBase("Description")}</h2>
	{@html renderMarkdown("> Description à lire aux joueurs en entrant dans cette scène.\n\n\tL'air est humide et froid. Vous progressez de nuit entre les montagnes lorsqu'un courant d'air vous apporte une forte odeur de brûlé. En suivant cette odeur, le passage s'ouvre sur une immense cité construite autour d'un gouffre où se déversent plusieurs cascades.\n\n\tEloigné de la ville, un gigantesque brasier éclaire les rues. Une foule de prêtres l'entoure, alimentant les flammes tout en récitant des prières.\n\tEn ville, malgré une architecture riche, des décorations soignées et des rues qui devraient être animées, celle-ci semble étrangement vide. Seuls quelques habitants traversent les rues en silence.\n\n<img src=\"%%BASE%%/3-Ville-du-chef.jpg\" alt=\"3-Ville-du-chef.jpg\" class=\"wiki-image\" />\n")}

	</section>
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html applyBase("Détails")}</h2>
	{@html renderMarkdown("\n| Lieu           | Météo  | Heure | Musique |\n| -------------- | ------ | ----- | ------- |\n| Nirina, Elfais | Humide | Nuit  |         |")}
	{@render maps()}
	{@render rencontres()}
	</section>
{/snippet}

{#snippet maps()}
	<section>
		<h3 id="maps">{@html applyBase("Maps")}</h3>
	{@html renderMarkdown("\n```map\n3. Laboratoire du chef 1.map\n```\n\n```map\n3. Laboratoire du chef 2.map\n```\n")}

	</section>
{/snippet}

{#snippet rencontres()}
	<section>
		<h3 id="rencontres">{@html applyBase("Rencontres")}</h3>
	{@html renderMarkdown("\n|        Nom        | Rôle | Race | Sexe  | Age |            Personnalité            | Accent | Equipement |\n| :---------------: | ---- | :--: | :---: | :-: | :--------------------------------: | :----: | :--------: |\n| Ephisto<br>\"Elès\" | Chef | Elfe | Homme |     | Scientifique<br>Pressé<br>Attristé |   -    |            |\n")}

	</section>
{/snippet}

{#snippet intrigues()}
	<section>
		<h2 id="intrigues">{@html applyBase("Intrigues")}</h2>
	{@html renderMarkdown("> Evénements et leur conclusion sans l'intervention des joueurs\n\n- Personne ne sait qui est le chef\n\t- Est-ce les prêtres ? Les généraux ?\n\n- Ephisto est désespéré de trouver une solution pour contenir le masque\n  - Fabriquer des mechas pour l'écraser par la puissance\n  - Faire prier les enfants tous les dieux pour espérer que leur prière atteignent la divinité du masque OU attirent d'autres dieux pour leur venir en aide\n\t  - Le masque génère son propre coeur, les joueurs pourraient devoir enquêter pour savoir de quel dieu il s'agit afin de pouvoir le prier et donc le maintenir\n\t Si les joueurs ne le convainquent pas assez, ils essaient des les capturer pour analyser leur résistance au masque\n\n- Des enfants meurent de fatigues et de malnutrition à cause de leur surnombre. Ils sont entassés plus loin et brûlés chaque soir pour éviter les maladies\n  - Ephisto est trop loin dans ses buildings que pour être au courant de cela\n\tSi les joueurs ne font rien, des enfants encore vivants mais trop faibles que pour prier se font brûler vifs\n\n- Pour sauver les enfants présents et améliorer leur condition de vie, ils doivent reprendre le contrôle de la place en abattant le sergent et le grand prêtre, et les remplacer\n\t- Ils doivent choisir qui abattre en premier, ce qui mettra l'autre au courant et changera les préparations\n- Un dieu viendra leur parler individuellement pendant ce temps pour leur proposer un marché\n\t- Leur donner des pouvoirs en échange d'un accès à leur corps. L'offre n'est valable que s'ils n'en parlent pas aux autres\n- Lister les solutions possibles pour que les joueurs fassent un choix\n\t- ~~Mechas~~\n\t- Dragon -> Négociation + Trouver des richesses\n\t- Atilal -> Préparation + Trouver quelqu'un pour attirer le masque\n\t- Enfant de prières -> Pactiser avec le masque dans son domaine + Sacrifier les enfants pour affaiblir le masque d'un coup\n\t- Etudier les joueurs -> Sacrifice ? + Développement d'une armée résistante au masque pour le contrer\n\n| Entités     | AC  | DR  | HP  | Poids |\n| ----------- | :-: | :-: | :-: | ----- |\n| Petit Hippo |  6  | 10  | 100 | 1500  |\n| Moyen Hippo |  4  | 15  | 200 | 3000  |\n\n| Hippo        | Dégâts                             | Effet                                      |\n| ------------ | ---------------------------------- | ------------------------------------------ |\n| Coup de tête | (2d8)<br>40-50                     | -                                          |\n| Charge       | (3d8)<br>60-70                     | -                                          |\n| Morsure      | (2d4)<br>80-90<br>x2 si immobilisé | Immobilise                                 |\n| Pet          | 2d12                               | Donne désavantage<br>Perte de 5HP par tour |\n")}

	</section>
{/snippet}

{#snippet actionsDesJoueurs()}
	<section>
		<h2 id="actions-des-joueurs">{@html applyBase("Actions des joueurs")}</h2>
	{@html renderMarkdown("\n**08-08-2026**\n- Il pousse Zveindel dans l'eau en bas de la cascade\n\t- Il fait un plat et ne sait pas nager, mais arrive à atteindre le bord en marchant au fond\n- Une fois tous en bas, un hippopotame les charge et broie Zveindel entre lui et Arek\n- Le combat continue et l'hippo s'enfuit en leur chiant dessus\n\t- Arek aura subi 160 dégâts (-120 grâce à sa DR)\n- Ils arrivent à la ville des lions d'argent ou des cairns d'enfants et d'adultes sont mis en feu\n- Ils sont escortés dans un bâtiment de la ville avant d'être fait prisonniers\n\t- Arek enfonce la porte de leur cellule et celle des cellules voisines\n\t- Dans une des cellule, un prisonnier abuse d'une prisonnière\n\t\t- Arek le tue et le démembre pour utiliser ses os comme des armes\n- Le bâtiment contient des gardes mais aussi des prêtres\n\t- Dara et Léoric trouve un prêtre isolé et l'interroge violemment pour savoir où aller\n\t- Ils font une distraction pour pouvoir tuer 2 gardes\n\t- Arek rentre dans une salle et annihile 3 prêtres\n- Ils descendent d'un étage et trouve un réacteur alimenté par un crystal, qui génère de l'énergie pour la ville\n\t- Ils interrogent violemment le garde des commandes pour éteindre le réacteur afin de passer sans se faire juter\n\t- Ils éteignent le réacteur et se dirigent vers le fou, où pourrait se trouver leur équipement\n- En arrivant dans les quartier du fou, ils trouvent des notes sur ses recherches et ses plans\n- Ils rencontrent le fou, Ephisto, et discutent avec lui de tout ce qu'il se passe\n\n| <img src=\"%%BASE%%/3-Box.png\" alt=\"3-Box.png\" class=\"wiki-image\" />    | <img src=\"%%BASE%%/3-Mask.png\" alt=\"3-Mask.png\" class=\"wiki-image\" />   | <img src=\"%%BASE%%/3-Mecha.png\" alt=\"3-Mecha.png\" class=\"wiki-image\" />                                                                                                                                                                    |\n| ----------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| <img src=\"%%BASE%%/3-Dragon.png\" alt=\"3-Dragon.png\" class=\"wiki-image\" /> | <img src=\"%%BASE%%/3-Atilal.png\" alt=\"3-Atilal.png\" class=\"wiki-image\" /> | Faire prier les enfants afin de créer un lien avec le masque, puis sacrifier les enfants pour créer une rupture temporaire dans le pouvoir du masque, créant une faille exploitable |\n|                   |                   |                                                                                                                                                                                     |\n**04-09-2026**\n- Exploration du bâtiment pour abattre le Capitaine (chef de l'armée) et le Grand Prêtre afin de rétablir l'ordre pour Ephisto\n\t- Ils vont remplacer les chefs par des connaissances à eux\n- Ils voient des chien dans des cages\n\t- Dara met un os d'Owlbear dans la gueule du chihuahua avant d'invoquer l'Owlbear, ce qui lui arrache la mâchoire\n- Ils interrompent la messe du Grand Prêtre\n- Ils tuent 2 gardes et un prêtre car ils pensent avoir vu une bourse au fond de la salle\n- Arek tombe sur la jambe du capitaine, ce qui la lui arrache\n\t- Dara et Hazdaim assassine les 2 gardes qui arrivaient en renfort\n- Ils tombent sur une grosse araignée qu'ils brûlent avant que Dara récupère une de ses pattes\n\t- Il s'en sert pour invoquer l'araignée contre les prêtres qui paniquent\n- Ephisto a fait des tests sur la poupée d'Halfdan qu'ils lui ont donné\n\t- Il l'a tué par accident\n- Ils décident de :\n\t- Contacter Billy pour qu'il leur indique quelqu'un de fort pour que le masque en prenne possession et qu'on puisse l'abattre pendant qu'il essaie de le contrôler\n\t- Contacter Syrithia pour que l'Eglise leur fournisse des prisonniers qui seront sacrifiés pendant qu'ils prieront le masque\n\t- Se renseigner sur la personne qui a pactisé avec le dragon pour le retrouver et gagner la fidélité du dragon")}

	</section>
{/snippet}
