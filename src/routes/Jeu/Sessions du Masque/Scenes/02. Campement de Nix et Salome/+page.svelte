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
          "id": "lpreuve-des-enfants",
          "text": "L'épreuve des Enfants",
          "level": 3
      },
      {
          "id": "la-gemme-maudite",
          "text": "La Gemme Maudite",
          "level": 3
      },
      {
          "id": "les-murmures-sous-les-racines",
          "text": "Les Murmures Sous les Racines",
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
  <title>02. Campement de Nix et Salomé</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>02. Campement de Nix et Salomé</h1>
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
	{@html renderMarkdown("> Description à lire aux joueurs en entrant dans cette scène.\r\n\r\n\t... Après plusieurs minutes à suivre les traces laissées dans la boue, les arbres changent peu à peu. Leurs troncs deviennent démesurés. Tordus comme des membres vivants. Des lianes noires pendent depuis les hauteurs invisibles, oscillant lentement malgré l’absence totale de vent.\r\n\r\n\tPuis vous les entendez. Des voix. Faibles. Lointaines.\r\n\r\n\tEn avançant, le marais disparaît sous un sol couvert de racines épaisses, formant presque des marches naturelles. Une brume pâle rampe entre les troncs tandis qu’une lumière bleuâtre filtre depuis le centre de la forêt.\r\n\r\n\tAu milieu des arbres gigantesques se trouve une structure faite de racines vivantes et de pierre ancienne. Des escaliers mangés par la mousse descendent vers une large cavité circulaire où l’eau noire est parfaitement immobile, comme du verre.\r\n\r\n\tSuspendues tout autour, des dizaines de lanternes artisanales diffusent une lumière froide.\r\n\r\n\tLes enfants sont là. Surveillés par la servante et le cuisinier. Les deux paladins sont assis dans l'ombre, elles vous ont vu.\r\n\r\n<img src=\"%%BASE%%/Campement-de-Nix-et-Salom%C3%A9.jpg\" alt=\"Campement-de-Nix-et-Salomé.jpg\" class=\"wiki-image\" />\r\n\r")}

	</section>
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html applyBase("Détails")}</h2>
	{@html renderMarkdown("\r\n| Lieu                               | Météo | Heure  | Musique |\r\n| ---------------------------------- | ----- | ------ | ------- |\r\n| Nirina, Mangroves phosphorescentes | Calme | Soirée |         |\r")}
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
	{@html renderMarkdown("\r\n|  Nom   | Rôle                  |  Race  | Sexe  | Age |     Personnalité     |   Accent    |   Equipement    |\r\n| :----: | --------------------- | :----: | :---: | :-: | :------------------: | :---------: | :-------------: |\r\n|        | Cuisinier             | Humain | Homme | 40  |                      | Marseillais |                 |\r\n|        | Servante              | Humain | Femme | 25  |                      |      -      |                 |\r\n|  Nix   | Mercenaire<br>Paladin | Humain | Femme | 30  | Joviale<br>Camioneur |      -      |  <img src=\"%%BASE%%/Nix.jpg\" alt=\"Nix.jpg\" class=\"wiki-image\" />   |\r\n| Salomé | Prêtresse<br>Paladin  | Humain | Femme | 30  | Directe<br>Factuelle |      -      | <img src=\"%%BASE%%/Salom%C3%A9.jpg\" alt=\"Salomé.jpg\" class=\"wiki-image\" /> |\r\n\r")}

	</section>
{/snippet}

{#snippet intrigues()}
	<section>
		<h2 id="intrigues">{@html applyBase("Intrigues")}</h2>
	{@html renderMarkdown("> Evénements et leur conclusion sans l'intervention des joueurs\r\n\r")}
	{@render lpreuveDesEnfants()}
	{@render laGemmeMaudite()}
	{@render lesMurmuresSousLesRacines()}
	</section>
{/snippet}

{#snippet lpreuveDesEnfants()}
	<section>
		<h3 id="lpreuve-des-enfants">{@html applyBase("L'épreuve des Enfants")}</h3>
	{@html renderMarkdown("- 1d6 enfants décident de rester avec Nix et Salomé\r\n  - Les autres peuvent se joindre à Hazdaim et retourner à l'orphelinat\r\n\r")}

	</section>
{/snippet}

{#snippet laGemmeMaudite()}
	<section>
		<h3 id="la-gemme-maudite">{@html applyBase("La Gemme Maudite")}</h3>
	{@html renderMarkdown("- Nix fouille dans le sac d'Arek pour voir s'il a toujours le sceau de leur ancien groupe\r\n  - Elle trouve la gemme venant du golem dans le domaine du Masque\r\n\t Si on ne fait rien, elle fera une crise et risquera de se faire controller par le Masque\r\n\r")}

	</section>
{/snippet}

{#snippet lesMurmuresSousLesRacines()}
	<section>
		<h3 id="les-murmures-sous-les-racines">{@html applyBase("Les Murmures Sous les Racines")}</h3>
	{@html renderMarkdown("- Nix entend des murmures dans la forêt, mais Salomé dit qu'il s'agit simplement d'esprits égarés\r\n  - Les enfants ne veulent plus manger de peur d'être trop appétissants\r\n\t Si on ne fait rien, quiconque s'éloigne du groupe en petit nombre se fait attaquer par le monstre\r\n\r\n<img src=\"%%BASE%%/Campement-de-Nix-et-Salom%C3%A9-Monstre.jpg\" alt=\"Campement-de-Nix-et-Salomé-Monstre.jpg\" width=\"750\" class=\"wiki-image\" />\r\n\r\n| Entités | AC  | DR  | HP  | Résistances                                 |  Léger  |   Lourde    |\r\n| ------- | :-: | :-: | :-: | ------------------------------------------- | :-----: | :---------: |\r\n| Arbre   |  8  | 16  | 400 | Magie (sauf Feu)<br>Contondant et Perforant |         |             |\r\n| Shroom  | 12  |  0  | 20  | -                                           | (2d6+6) | (2d6+2) +15 |\r\n| Enfant  | 10  |  0  | 30  | -                                           |    -    |      -      |\r\n\r\n| Attaque | Dégâts                                                                   | Effet                                             | Coût |\r\n| ------- | ------------------------------------------------------------------------ | ------------------------------------------------- | ---: |\r\n| Frappe  | (2d6+8) +10<br>+ 4/8/12 (si smash -> armure du grab légère/inter/lourde) | -                                                 |    - |\r\n| Grab    | (2d6+4)<br>2d4/6/8 / tour aux HP<br>(armure légère/inter/lourde)         | Incapacité<br>DC 20 (STR, DEX)<br>HP 40           |    - |\r\n| Smash   | 2d12<br>+ 4/8/12 HP (armure)                                             | Nécessite Grab                                    |    - |\r\n| Lianes  | (3d4+8)<br>1d4/6/8 HP / tour (armure)                                    | Immobilisation<br>DC 15 (STR, DEX)<br>HP 15 (Feu) |    1 |\r\n| Racines | (2d6+4)<br>2d4/6/8 HP / tour (armure)                                    | Immobilisation<br>DC 20 (STR, DEX)<br>HP 40 (Feu) |    2 |\r\n| Appel   | -                                                                        | Invoque 2+1d4 Shroom                              |    2 |\r\n\r")}

	</section>
{/snippet}

{#snippet actionsDesJoueurs()}
	<section>
		<h2 id="actions-des-joueurs">{@html applyBase("Actions des joueurs")}</h2>
	{@html renderMarkdown("\r\n**23/05/26**\r\n- Le groupe discute avec Nix et Salomé et conviennent de mettre les enfants à l'épreuve le lendemain pour savoir avec qui ils veulent aller\r\n- Hazdaim prie un dieu pour que les enfants fassent le bon choix4\r\n\r\n**20/06/26**\r\n- Nix touche la gemme (qui provient du coeur du golem dans le domaine du masque) et convulse en se soulevant comme un pantin\r\n\t- Magie de lumière et poing dans sa gueule pour la faire revenir à elle\r\n- Les enfants se réveillent et sont livrés à eux-mêmes dans la forêt pour errer jusqu'au bon groupe\r\n\t- Ronronov = Loïc\r\n\t- Strauss = Thomas\r\n\t- Urzok = Michel\r\n\t- Aldrich = Diego\r\n- Ils trouvent des couteaux rouillés, et Ronronov trouve une dague de glace\r\n- Ronronov attaque un enfant champignon, et Strauss vient le retirer trop tard et ils se font asperger de spores\r\n- Aldrich lance de la merde magique sur Ronronov qui baillait\r\n- Ils trouvent une épée sans garde ni pommeau\r\n\t- Ils veulent la mouiller pour glacer l'eau et fendre la roche autour de la lame\r\n\t\t- Ca électrocute Aldrich lorsqu'il jette l'eau dessus\r\n- Ronronov rentre dans un cercle de champignons et fait apparaitre une grosse fée\r\n\t- Urzok rentre dans le cercle, ce qui fait exploser la fée\r\n- Ils rencontrent un gros champignon qui s'en prend à Strauss, et qui se fait découper par l'épée électrique de Aldrich\r\n- Uzrok trouve un casque magique qui permet de respirer sous l'eau\r\n- Ils rencontrent des arbres cogneurs avec de belles formes humanoïdes qui se mettent à les pourchasser\r\n- Ils passent la nuit dans une vieille grange et se font attaquer par l'arbre de la forêt\r\n\r\n**03/07/26**\r\n- Combat contre l'Arbre de la forêt\r\n- Arek jette les enfants loin de l'Arbre\r\n- Hazdaim fait la toupie sur l'Arbre\r\n- Les joueurs suspectent Salomé d'avoir invoqué l'Arbre\r\n\t- Dara utilise sa lame de Sombronce pour l'immobiliser\r\n\t\t- Elle libère une onde de choc de foudre (10d10) qu'il évite\r\n- Tout le monde se fait entraver par des lianes\r\n\t- La majorité se libère sauf les enfants\r\n- Les enfants se font attaquer par des Champignons\r\n- Arek se fait attraper par l'Arbre, et il s'en sert pour swinger Hazdaim au loin\r\n\t- Zveindel lance une boule de feu sur l'Arbre et touche Arek, ce qui le libère\r\n- L'Arbre s'enracine pour réapparaitre près de Dara et Salomé\r\n\t- Il prend Salomé et s'en sert pour la fracasser contre Dara 4 fois d'affilée (=8 tokens) (4x 37 dmg)\r\n\t\t- Dara utilise 6 tokens pour rester en vie, et le groupe utilise chacun 1 token pour passer le tour de l'Arbre\r\n- L'Arbre au bord de la mort utilise tout ce qu'il lui reste (16 tokens) pour créer une explosion énorme\r\n\t- Les joueurs utilisent leur token pour passer son tour et évite 158 dmg\r\n\r\n**17/07/2026**\r\n- Arrivée dans la ville de Pulmius -> Courses\r\n- Le groupe suit le chemin pour arriver dans une carrière\r\n- Un morceau de la paroi émet de la magie, ainsi que quelque chose au fond de l'eau\r\n- Arek fracasse ~~la porte~~ la paroi de son poing et de sa charge\r\n- Il tombe sur un couloir qui aurait été utilisé il y a moins d'un an\r\n- Il le suive et se font emporter pas de l'eau avant d'atteindre la sortie\r\n- Ils voient des lumières au loin et s'en rapproche")}

	</section>
{/snippet}
