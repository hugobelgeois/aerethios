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
          "id": "musiques",
          "text": "Musiques",
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
  <title>04. Ville du Dragon</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>04. Ville du Dragon</h1>
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
	{@html renderMarkdown("> Description à lire aux joueurs en entrant dans cette scène.\n\n\tVous arrivez en fin de journée.\n\tUne brise fraiche et légèrement humide vient vous caresser le visage.\n\tVous sentez le sel se solidifier sur votre peau et s'effriter contre vos vêtements.\n\tLes lumières s'allument doucement, comme pour préparer votre arrivée.\n\tVous regardez les derniers rayons du soleil dorer les murs blans avant d'entrer dans la ville de Fruss.\n\n<img src=\"%%BASE%%/4-Ville-du-Dragon.jpg\" alt=\"4-Ville-du-Dragon.jpg\" width=\"1200\" class=\"wiki-image\" />\n")}

	</section>
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html applyBase("Détails")}</h2>

	{@render musiques()}
	{@render rencontres()}
	</section>
{/snippet}

{#snippet musiques()}
	<section>
		<h3 id="musiques">{@html applyBase("Musiques")}</h3>
	{@html renderMarkdown("\n| Lieu                 | Musique                                                               |\n| -------------------- | --------------------------------------------------------------------- |\n| Fruss                | [Majula OST](https://www.youtube.com/watch?v=5i_enopHsqg)             |\n| Hallucination masque | [Deep in the Mechanicum](https://www.youtube.com/watch?v=wQcp375CzZU) |\n")}

	</section>
{/snippet}

{#snippet rencontres()}
	<section>
		<h3 id="rencontres">{@html applyBase("Rencontres")}</h3>
	{@html renderMarkdown("\n|    Nom    | Rôle                                                                          |  Race  | Sexe | Age |                  Personnalité                   |   Accent   |        Equipement         |\n| :-------: | ----------------------------------------------------------------------------- | :----: | :--: | :-: | :---------------------------------------------: | :--------: | :-----------------------: |\n| Fortissax | Gérant de la ville<br>Attaquant potentiel contre le Masque<br>Sa souveraineté | Dragon |  -   |  -  | Calme, Réfléchi, appelle les gens par leur race | Voix grave | <span class=\"wiki-unresolved\">4-Fortissax.jpg\\</span> |\n")}

	</section>
{/snippet}

{#snippet intrigues()}
	<section>
		<h2 id="intrigues">{@html applyBase("Intrigues")}</h2>
	{@html renderMarkdown("> Evénements et leur conclusion sans l'intervention des joueurs\n\n- Il faut une permission pour pouvoir s'entretenir avec Sa Souveraineté\n - Trouver qui peut la fournir\n\tS'il ne la trouve pas assez vite, le masque leur lance une hallucination dans la ville\n\n- Une créature dangereuse du masque se trouve dans la ville, ils doivent lui échapper\n - Des ennemis sont sur leur chemin, des encapuchonnés sans visage (`Mental(Volonté)` pour esquiver les attaques)\n\tS'ils ne fuient pas assez vite, la créature les rattrape, et ils doivent survivre 5 tours avant que Fortissax n'arrive\n\tSinon Fortissax arrive \"Vous perturbez mon peuple\"\n\t`Les joueurs doivent chacun décrire la créature`\n\n- Le dragon a pris le contrôle de la ville, mais c'est un bon gérant\n  - Tel un roi, il taxe le peuple en échange de sa protection, mais il ne réclame pas les récoltes, juste une taxe sur les revenus\n  - Le peuple vit mieux depuis et est plus motivé à travailler\n\tSi les joueurs ne font rien, le peuple continue d'être heureux\n\tSinon, il part combattre le masque et la ville tombe doucement dans le chaos\n\n- Havel avait promis de tuer Bayle, l'ennemi de Fortissax, qui l'avait gravement blessé et détruit sa fortune\n - Il est sûrement mort contre lui en essayant de faire sa part du marché\n - Havel a bien été tué, mais par Zaledra, et il l'a relevé, mais sa volonté et son pacte sont plus forts et il attend devant l'antre de Bayle pour l'abattre\n\tSi les joueurs ne font rien, Fortissax ne viendra pas aider\n")}

	</section>
{/snippet}

{#snippet actionsDesJoueurs()}
	<section>
		<h2 id="actions-des-joueurs">{@html applyBase("Actions des joueurs")}</h2>
	{@html renderMarkdown("\n**02-10-2026**\n- Ils arrivent dans la ville et se renseignent pour savoir où trouver Fortissax\n- Ils doivent se rendre à la préfecture pour obtenir les droits de lui parler, ce qui peut prendre du temps\n- Ils s'y rendent de nuit et font des faux pour pouvoir passer\n\tIl y a une odeur de lessive, ce qui dégoûte Dara qui n'aime pas se laver\n- En sortant du bâtiment, ils ressentent une étrange sensation et se font attaquer par des ennemis capuchonnés, dont le visage n'est que ténèbres, qui réduisent leurs attributs\n- Ils fuient pour rejoindre le port et s'éloigner de l'énorme entité planaire qui s'approche d'eux\n- Dara invoque son Gammoth afin de fuir plus vite, mais la créature dotées de nombreuses mains et couvertes d'un drap cachant le corps les rattrape\n\t- Pendant la course poursuite, ils arrivent à faire 713 dégâts, qui sont répartis sur les capuchonnés, ce qui tue les 61 petites créatures, ne laissant que 103 dégâts atteindre les mains\n- Ils arrivent ensuite à faire 372 dégâts avant que la créature ne les balaie\n\t- 60 dégâts pour Léoric, 51 pour Dara et 36 pour Haelrak\n- Arek lance une potion de soin sur Léoric et une d'explosion sur les mains, infligeant 150 dégâts supplémentaires\n- Alors que la créature commence à muter, le dragon Fortissax arrive pour l'achever\n- Il prend les aventuriers pour les emmener dans ses quartiers afin de les confronter à ce qu'ils ont fait\n\t- En survolant la ville, le voile se dissipe sous le rire du masque, et le groupe se rend compte qu'ils hallucinaient et ont ravagé la ville et ses habitants en combattant les créatures\n\n**01-11-2026**\n- ")}

	</section>
{/snippet}
