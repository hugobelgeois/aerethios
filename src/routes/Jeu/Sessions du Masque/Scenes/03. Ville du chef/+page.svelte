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
          "id": "notes",
          "text": "Notes",
          "level": 3
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
	{@html renderMarkdown("> Description à lire aux joueurs en entrant dans cette scène.\n\n\tL'air est humide et froid. Vous progressez de nuit entre les montagnes lorsqu'un courant d'air vous apporte une forte odeur de brûlé. En suivant cette odeur, le passage s'ouvre sur une immense cité construite autour d'un gouffre où se déversent plusieurs cascades.\n\n\tEloigné de la ville, un gigantesque brasier éclaire les rues. Une foule de prêtres l'entoure, alimentant les flammes tout en récitant des prières.\n\tEn ville, malgré une architecture riche, des décorations soignées et des rues qui devraient être animées, celle-ci semble étrangement vide. Seuls quelques habitants traversent les rues en silence.\n\n**Si un joueur réussit un jet de Perception :**\n\n\tDerrière certaines portes et fenêtres closes, vous distinguez de faibles voix. Des habitants prient à l'intérieur de leurs maisons, comme si toute la ville participait au même rituel.\n\n<img src=\"%%BASE%%/Ville-du-chef.jpg\" alt=\"Ville-du-chef.jpg\" class=\"wiki-image\" />\n")}

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
	{@html renderMarkdown("> Evénements et leur conclusion sans l'intervention des joueurs\n\n- Personne ne sait qui est le chef\n\t- Est-ce les prêtres ? Les généraux ?\n\n- Ephisto est désespéré de trouver une solution pour contenir le masque\n  - Fabriquer des mechas pour l'écraser par la puissance\n  - Faire prier les enfants tous les dieux pour espérer que leur prière atteignent la divinité du masque OU attirent d'autres dieux pour leur venir en aide\n\t  - Le masque génère son propre coeur, les joueurs pourraient devoir enquêter pour savoir de quel dieu il s'agit afin de pouvoir le prier et donc le maintenir\n\t Si les joueurs ne le convainquent pas assez, ils essaient des les capturer pour analyser leur résistance au masque\n\n- Des enfants meurent de fatigues et de malnutrition à cause de leur surnombre. Ils sont entassés plus loin et brûlés chaque soir pour éviter les maladies\n  - Ephisto est trop loin dans ses buildings que pour être au courant de cela\n\tSi les joueurs ne font rien, des enfants encore vivants mais trop faibles que pour prier se font brûler vifs\n")}
	{@render notes()}
	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h3 id="notes">{@html applyBase("Notes")}</h3>
	{@html renderMarkdown("- des dizaines de cartes de Nirina couvertes d'annotations ;\n- des prototypes inachevés ;\n- des schémas de méchas barrés de \"ÉCHEC\" ;\n- des listes de prières testées ;\n- des calculs sur la croissance du masque ;\n- des rapports à peine ouverts, avec seulement les premières lignes lues.\n\nPlans supplémentaires :\n- Fabriquer un second masque\n- Tenir le temps que l'île (Atilal) arrive (5mois, 17jours) pour mettre le masque dessus afin d'avoir le temps de se préparer à son retour. Billy pourrait l'attirer dessus\n")}

	</section>
{/snippet}

{#snippet actionsDesJoueurs()}
	<section>
		<h2 id="actions-des-joueurs">{@html applyBase("Actions des joueurs")}</h2>


	</section>
{/snippet}
