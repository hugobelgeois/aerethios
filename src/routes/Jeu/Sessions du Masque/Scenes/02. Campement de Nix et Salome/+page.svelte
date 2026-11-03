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
  <title>{"02. Campement de Nix et Salomé"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"02. Campement de Nix et Salomé"}</h1>
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
	{@html applyBase("<blockquote>Description à lire aux joueurs en entrant dans cette scène.</blockquote>\n<p>\t... Après plusieurs minutes à suivre les traces laissées dans la boue, les arbres changent peu à peu. Leurs troncs deviennent démesurés. Tordus comme des membres vivants. Des lianes noires pendent depuis les hauteurs invisibles, oscillant lentement malgré l’absence totale de vent.</p>\n<p>\tPuis vous les entendez. Des voix. Faibles. Lointaines.</p>\n<p>\tEn avançant, le marais disparaît sous un sol couvert de racines épaisses, formant presque des marches naturelles. Une brume pâle rampe entre les troncs tandis qu’une lumière bleuâtre filtre depuis le centre de la forêt.</p>\n<p>\tAu milieu des arbres gigantesques se trouve une structure faite de racines vivantes et de pierre ancienne. Des escaliers mangés par la mousse descendent vers une large cavité circulaire où l’eau noire est parfaitement immobile, comme du verre.</p>\n<p>\tSuspendues tout autour, des dizaines de lanternes artisanales diffusent une lumière froide.</p>\n<p>\tLes enfants sont là. Surveillés par la servante et le cuisinier. Les deux paladins sont assis dans l'ombre, elles vous ont vu.</p>\n<img src=\"%%BASE%%/2-Campement-de-Nix-et-Salome.jpg\" alt=\"2-Campement-de-Nix-et-Salome.jpg\" class=\"wiki-image\" />")}

	</section>
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html "Détails"}</h2>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Lieu</th><th>Météo</th><th>Heure</th><th>Musique</th></tr></thead><tbody><tr><td>Nirina, Mangroves phosphorescentes</td><td>Calme</td><td>Soirée</td><td></td></tr></tbody></table></div>"}
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
	{@html applyBase("<div class=\"table-scroll\"><table><thead><tr><th>Nom</th><th>Rôle</th><th>Race</th><th>Sexe</th><th>Age</th><th>Personnalité</th><th>Accent</th><th>Equipement</th></tr></thead><tbody><tr><td></td><td>Cuisinier</td><td>Humain</td><td>Homme</td><td>40</td><td></td><td>Marseillais</td><td></td></tr><tr><td></td><td>Servante</td><td>Humain</td><td>Femme</td><td>25</td><td></td><td>-</td><td></td></tr><tr><td>Nix</td><td>Mercenaire<br>Paladin</td><td>Humain</td><td>Femme</td><td>30</td><td>Joviale<br>Camioneur</td><td>-</td><td><img src=\"%%BASE%%/2-Nix.jpg\" alt=\"2-Nix.jpg\" class=\"wiki-image\" /></td></tr><tr><td>Salomé</td><td>Prêtresse<br>Paladin</td><td>Humain</td><td>Femme</td><td>30</td><td>Directe<br>Factuelle</td><td>-</td><td><img src=\"%%BASE%%/2-Salome.jpg\" alt=\"2-Salome.jpg\" class=\"wiki-image\" /></td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet intrigues()}
	<section>
		<h2 id="intrigues">{@html "Intrigues"}</h2>
	{@html "<blockquote>Evénements et leur conclusion sans l'intervention des joueurs</blockquote>"}
	{@render lpreuveDesEnfants()}
	{@render laGemmeMaudite()}
	{@render lesMurmuresSousLesRacines()}
	</section>
{/snippet}

{#snippet lpreuveDesEnfants()}
	<section>
		<h3 id="lpreuve-des-enfants">{@html "L'épreuve des Enfants"}</h3>
	{@html "<ul><li>1d6 enfants décident de rester avec Nix et Salomé</li><li>Les autres peuvent se joindre à Hazdaim et retourner à l'orphelinat</li></ul>"}

	</section>
{/snippet}

{#snippet laGemmeMaudite()}
	<section>
		<h3 id="la-gemme-maudite">{@html "La Gemme Maudite"}</h3>
	{@html "<ul><li>Nix fouille dans le sac d'Arek pour voir s'il a toujours le sceau de leur ancien groupe</li><li>Elle trouve la gemme venant du golem dans le domaine du Masque</li></ul>\n<p>\t Si on ne fait rien, elle fera une crise et risquera de se faire controller par le Masque</p>"}

	</section>
{/snippet}

{#snippet lesMurmuresSousLesRacines()}
	<section>
		<h3 id="les-murmures-sous-les-racines">{@html "Les Murmures Sous les Racines"}</h3>
	{@html applyBase("<ul><li>Nix entend des murmures dans la forêt, mais Salomé dit qu'il s'agit simplement d'esprits égarés</li><li>Les enfants ne veulent plus manger de peur d'être trop appétissants</li></ul>\n<p>\t Si on ne fait rien, quiconque s'éloigne du groupe en petit nombre se fait attaquer par le monstre</p>\n<img src=\"%%BASE%%/2-Campement-de-Nix-et-Salome-Monstre.jpg\" alt=\"2-Campement-de-Nix-et-Salome-Monstre.jpg\" width=\"750\" class=\"wiki-image\" />\n<div class=\"table-scroll\"><table><thead><tr><th>Entités</th><th>AC</th><th>DR</th><th>HP</th><th>Résistances</th><th>Léger</th><th>Lourde</th></tr></thead><tbody><tr><td>Arbre</td><td>8</td><td>16</td><td>400</td><td>Magie (sauf Feu)<br>Contondant et Perforant</td><td></td><td></td></tr><tr><td>Shroom</td><td>12</td><td>0</td><td>20</td><td>-</td><td>(2d6+6)</td><td>(2d6+2) +15</td></tr><tr><td>Enfant</td><td>10</td><td>0</td><td>30</td><td>-</td><td>-</td><td>-</td></tr></tbody></table></div>\n<div class=\"table-scroll\"><table><thead><tr><th>Attaque</th><th>Dégâts</th><th>Effet</th><th>Coût</th></tr></thead><tbody><tr><td>Frappe</td><td>(2d6+8) +10<br>+ 4/8/12 (si smash -> armure du grab légère/inter/lourde)</td><td>-</td><td>-</td></tr><tr><td>Grab</td><td>(2d6+4)<br>2d4/6/8 / tour aux HP<br>(armure légère/inter/lourde)</td><td>Incapacité<br>DC 20 (STR, DEX)<br>HP 40</td><td>-</td></tr><tr><td>Smash</td><td>2d12<br>+ 4/8/12 HP (armure)</td><td>Nécessite Grab</td><td>-</td></tr><tr><td>Lianes</td><td>(3d4+8)<br>1d4/6/8 HP / tour (armure)</td><td>Immobilisation<br>DC 15 (STR, DEX)<br>HP 15 (Feu)</td><td>1</td></tr><tr><td>Racines</td><td>(2d6+4)<br>2d4/6/8 HP / tour (armure)</td><td>Immobilisation<br>DC 20 (STR, DEX)<br>HP 40 (Feu)</td><td>2</td></tr><tr><td>Appel</td><td>-</td><td>Invoque 2+1d4 Shroom</td><td>2</td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet actionsDesJoueurs()}
	<section>
		<h2 id="actions-des-joueurs">{@html "Actions des joueurs"}</h2>
	{@html "<p><strong>23/05/26</strong></p>\n<ul><li>Le groupe discute avec Nix et Salomé et conviennent de mettre les enfants à l'épreuve le lendemain pour savoir avec qui ils veulent aller</li><li>Hazdaim prie un dieu pour que les enfants fassent le bon choix4</li></ul>\n<p><strong>20/06/26</strong></p>\n<ul><li>Nix touche la gemme (qui provient du coeur du golem dans le domaine du masque) et convulse en se soulevant comme un pantin</li><li>Magie de lumière et poing dans sa gueule pour la faire revenir à elle</li><li>Les enfants se réveillent et sont livrés à eux-mêmes dans la forêt pour errer jusqu'au bon groupe</li><li>Ronronov = Loïc</li><li>Strauss = Thomas</li><li>Urzok = Michel</li><li>Aldrich = Diego</li><li>Ils trouvent des couteaux rouillés, et Ronronov trouve une dague de glace</li><li>Ronronov attaque un enfant champignon, et Strauss vient le retirer trop tard et ils se font asperger de spores</li><li>Aldrich lance de la merde magique sur Ronronov qui baillait</li><li>Ils trouvent une épée sans garde ni pommeau</li><li>Ils veulent la mouiller pour glacer l'eau et fendre la roche autour de la lame</li><li>Ca électrocute Aldrich lorsqu'il jette l'eau dessus</li><li>Ronronov rentre dans un cercle de champignons et fait apparaitre une grosse fée</li><li>Urzok rentre dans le cercle, ce qui fait exploser la fée</li><li>Ils rencontrent un gros champignon qui s'en prend à Strauss, et qui se fait découper par l'épée électrique de Aldrich</li><li>Uzrok trouve un casque magique qui permet de respirer sous l'eau</li><li>Ils rencontrent des arbres cogneurs avec de belles formes humanoïdes qui se mettent à les pourchasser</li><li>Ils passent la nuit dans une vieille grange et se font attaquer par l'arbre de la forêt</li></ul>\n<p><strong>03/07/26</strong></p>\n<ul><li>Combat contre l'Arbre de la forêt</li><li>Arek jette les enfants loin de l'Arbre</li><li>Hazdaim fait la toupie sur l'Arbre</li><li>Les joueurs suspectent Salomé d'avoir invoqué l'Arbre</li><li>Dara utilise sa lame de Sombronce pour l'immobiliser</li><li>Elle libère une onde de choc de foudre (10d10) qu'il évite</li><li>Tout le monde se fait entraver par des lianes</li><li>La majorité se libère sauf les enfants</li><li>Les enfants se font attaquer par des Champignons</li><li>Arek se fait attraper par l'Arbre, et il s'en sert pour swinger Hazdaim au loin</li><li>Zveindel lance une boule de feu sur l'Arbre et touche Arek, ce qui le libère</li><li>L'Arbre s'enracine pour réapparaitre près de Dara et Salomé</li><li>Il prend Salomé et s'en sert pour la fracasser contre Dara 4 fois d'affilée (=8 tokens) (4x 37 dmg)</li><li>Dara utilise 6 tokens pour rester en vie, et le groupe utilise chacun 1 token pour passer le tour de l'Arbre</li><li>L'Arbre au bord de la mort utilise tout ce qu'il lui reste (16 tokens) pour créer une explosion énorme</li><li>Les joueurs utilisent leur token pour passer son tour et évite 158 dmg</li></ul>\n<p><strong>17/07/2026</strong></p>\n<ul><li>Arrivée dans la ville de Pulmius -> Courses</li><li>Le groupe suit le chemin pour arriver dans une carrière</li><li>Un morceau de la paroi émet de la magie, ainsi que quelque chose au fond de l'eau</li><li>Arek fracasse <del>la porte</del> la paroi de son poing et de sa charge</li><li>Il tombe sur un couloir qui aurait été utilisé il y a moins d'un an</li><li>Il le suive et se font emporter pas de l'eau avant d'atteindre la sortie</li><li>Ils voient des lumières au loin et s'en rapproche</li></ul>"}

	</section>
{/snippet}
