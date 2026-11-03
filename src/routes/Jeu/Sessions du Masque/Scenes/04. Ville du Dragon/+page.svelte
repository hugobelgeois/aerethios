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
  <title>{"04. Ville du Dragon"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"04. Ville du Dragon"}</h1>
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
	{@html applyBase("<blockquote>Description à lire aux joueurs en entrant dans cette scène.</blockquote>\n<p>\tVous arrivez en fin de journée.<br>\n\tUne brise fraiche et légèrement humide vient vous caresser le visage.<br>\n\tVous sentez le sel se solidifier sur votre peau et s'effriter contre vos vêtements.<br>\n\tLes lumières s'allument doucement, comme pour préparer votre arrivée.<br>\n\tVous regardez les derniers rayons du soleil dorer les murs blans avant d'entrer dans la ville de Fruss.</p>\n<img src=\"%%BASE%%/4-Ville-du-Dragon.jpg\" alt=\"4-Ville-du-Dragon.jpg\" width=\"1200\" class=\"wiki-image\" />")}

	</section>
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html "Détails"}</h2>

	{@render musiques()}
	{@render rencontres()}
	</section>
{/snippet}

{#snippet musiques()}
	<section>
		<h3 id="musiques">{@html "Musiques"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Lieu</th><th>Musique</th></tr></thead><tbody><tr><td>Fruss</td><td><a href=\"https://www.youtube.com/watch?v=5i_enopHsqg\">Majula OST</a></td></tr><tr><td>Hallucination masque</td><td><a href=\"https://www.youtube.com/watch?v=wQcp375CzZU\">Deep in the Mechanicum</a></td></tr><tr><td>Fortissax</td><td></td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet rencontres()}
	<section>
		<h3 id="rencontres">{@html "Rencontres"}</h3>
	{@html applyBase("<div class=\"table-scroll\"><table><thead><tr><th>Nom</th><th>Rôle</th><th>Race</th><th>Sexe</th><th>Age</th><th>Personnalité</th><th>Accent</th><th>Equipement</th></tr></thead><tbody><tr><td>-</td><td>Boss</td><td>Illusion</td><td></td><td></td><td></td><td></td><td><img src=\"%%BASE%%/4-Boss-des-Illusions.png\" alt=\"4-Boss-des-Illusions.png\" class=\"wiki-image\" /></td></tr><tr><td>Fortissax</td><td>Gérant de la ville<br>Attaquant potentiel contre le Masque<br>Sa souveraineté</td><td>Dragon</td><td>-</td><td>-</td><td>Calme, Réfléchi, appelle les gens par leur race</td><td>Voix grave</td><td><span class=\"wiki-unresolved\">4-Fortissax.jpg\\</span></td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet intrigues()}
	<section>
		<h2 id="intrigues">{@html "Intrigues"}</h2>
	{@html "<blockquote>Evénements et leur conclusion sans l'intervention des joueurs</blockquote>\n<ul><li>Il faut une permission pour pouvoir s'entretenir avec Sa Souveraineté</li><li>Trouver qui peut la fournir</li></ul>\n<p>\tS'il ne la trouve pas assez vite, le masque leur lance une hallucination dans la ville</p>\n<ul><li>Une créature dangereuse du masque se trouve dans la ville, ils doivent lui échapper</li><li>Des ennemis sont sur leur chemin, des encapuchonnés sans visage (<code>Mental(Volonté)</code> pour esquiver les attaques)</li></ul>\n<p>\tS'ils ne fuient pas assez vite, la créature les rattrape, et ils doivent survivre 5 tours avant que Fortissax n'arrive<br>\n\tSinon Fortissax arrive \"Vous perturbez mon peuple\"<br>\n\t<code>Les joueurs doivent chacun décrire la créature</code></p>\n<ul><li>Le dragon a pris le contrôle de la ville, mais c'est un bon gérant</li><li>Tel un roi, il taxe le peuple en échange de sa protection, mais il ne réclame pas les récoltes, juste une taxe sur les revenus</li><li>Le peuple vit mieux depuis et est plus motivé à travailler</li></ul>\n<p>\tSi les joueurs ne font rien, le peuple continue d'être heureux<br>\n\tSinon, il part combattre le masque et la ville tombe doucement dans le chaos</p>\n<ul><li>Havel avait promis de tuer Bayle, l'ennemi de Fortissax, qui l'avait gravement blessé et détruit sa fortune</li><li>Il est sûrement mort contre lui en essayant de faire sa part du marché</li><li>Havel a bien été tué, mais par Zaledra, et il l'a relevé, mais sa volonté et son pacte sont plus forts et il attend devant l'antre de Bayle pour l'abattre</li></ul>\n<p>\tSi les joueurs ne font rien, Fortissax ne viendra pas aider</p>"}

	</section>
{/snippet}

{#snippet actionsDesJoueurs()}
	<section>
		<h2 id="actions-des-joueurs">{@html "Actions des joueurs"}</h2>
	{@html "<p><strong>02-10-2026</strong></p>\n<ul><li>Ils arrivent dans la ville et se renseignent pour savoir où trouver Fortissax</li><li>Ils doivent se rendre à la préfecture pour obtenir les droits de lui parler, ce qui peut prendre du temps</li><li>Ils s'y rendent de nuit et font des faux pour pouvoir passer</li></ul>\n<p>\tIl y a une odeur de lessive, ce qui dégoûte Dara qui n'aime pas se laver</p>\n<ul><li>En sortant du bâtiment, ils ressentent une étrange sensation et se font attaquer par des ennemis capuchonnés, dont le visage n'est que ténèbres, qui réduisent leurs attributs</li><li>Ils fuient pour rejoindre le port et s'éloigner de l'énorme entité planaire qui s'approche d'eux</li><li>Dara invoque son Gammoth afin de fuir plus vite, mais la créature dotées de nombreuses mains et couvertes d'un drap cachant le corps les rattrape</li><li>Pendant la course poursuite, ils arrivent à faire 713 dégâts, qui sont répartis sur les capuchonnés, ce qui tue les 61 petites créatures, ne laissant que 103 dégâts atteindre les mains</li><li>Ils arrivent ensuite à faire 372 dégâts avant que la créature ne les balaie</li><li>60 dégâts pour Léoric, 51 pour Dara et 36 pour Haelrak</li><li>Arek lance une potion de soin sur Léoric et une d'explosion sur les mains, infligeant 150 dégâts supplémentaires</li><li>Alors que la créature commence à muter, le dragon Fortissax arrive pour l'achever</li><li>Il prend les aventuriers pour les emmener dans ses quartiers afin de les confronter à ce qu'ils ont fait</li><li>En survolant la ville, le voile se dissipe sous le rire du masque, et le groupe se rend compte qu'ils hallucinaient et ont ravagé la ville et ses habitants en combattant les créatures</li></ul>\n<p><strong>01-11-2026</strong><br>\n-</p>"}

	</section>
{/snippet}
