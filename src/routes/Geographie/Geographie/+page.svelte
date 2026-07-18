<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Géographie</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Géographie</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("```leaflet\nid: aerethios-map\nimage: <span class=\"wiki-unresolved\">Images/geography.jpg</span>\nlock: true\nrecenter: false\nnoScrollZoom: false\nheight: 79%\nwidth: 100%\nbounds: [[0,0], [4176,8192]]\nlat: 2088\nlong: 4096\nminZoom: -2\nmaxZoom: 1\ndefaultZoom: -2\nzoomDelta: 0.5\nunit: meters\nscale: 1\ndarkMode: false\nmarker: \n\t- [default,3271.281026815793,3140.362619436029,00 - 24.01.25,J-0\nRencontre dans une guilde Arvens\nQuête d'escorte d'une boîte pour passer Arvens Or\n\nJ-2\nAttaque d'ombres\nUn cheval est mort et Arek est blessé\nLéoric soigne le cheval mais pas Arek\n\nJ-4\nArek se fait posséder et brise la boîte\nUn masque avec 2 Toiles Célestes en sort et les fait tomber dans les pommes,-1,]\n\t- [default,3441.9781808621674,3134.389806576962,01 - 07.02.25,J-15\nRéveil dans une chambre de petite fille\nLes gardes arrivent et ils se font arrêter\nTribunal, ils apprennent qu'ils sont maudits par la Toile vaudoo du masque et peuvent se transformer en poupée à tout moment\nIls refont leur équipement et font des quêtes\nCombat contre des rats\nL'archimage leur vend de l'herbe pour se détendre\n\nIls cherchent :\nTarquin Alsyon -> Financier principal\nLysara Veyn -> Donneuse de Toile Vaudoo\nOrvain Thessarion -> Fusion des Toiles au masque,-1,]\n\t- [default,3692.290265304043,3058.0198023836647,02 - 21.02.25,J-22\nEscorte jusqu'à un village sous le joug d'un dictateur\nInfiltration dans son manoir pour lui casser la gueule\nIls font la marionnette avec sa tête dans la caserne des gardes\nGrosse célébration pour la liberté du village\nArek se fait voler son argent par Dara pour le rendre aux villageois\nIls ont récupéré une lettre \"Projet du Dieu Dormant\",-1,]\n\t- [default,3643.6602883708397,2731.6285248193894,05 - 11.04.35,J-40\nAppel des personnes importantes\nBilly qui supervise la réunion des pays ne peut rien faire tout de suite\n\nTarquin n'a pas de grimoir personnel\n\nLysara a été payée par Tarquin pour fournir une Toile Vaudoo\n\nOrvain n'est pas joignable, il aurait été assassiné il y a peu\n\n\nIskarion, le conseillé d'Eryndor, un Doigt de la Main, arrive pour leur dire qe la religion les aidera dans ce combat\n\nIls se téléportent chez Orvain pour enquêter\nSon domaine a été detruit,-1,]\n\t- [default,3884.7010619944976,2829.571085425518,05 - 11.04.35,J-27\nProjet Dieu Dormant,-1,]\n\t- [default,3868.4310313919964,2960.4163257885434,04 - 28.03.25,J-35\nIls sont vendus aux enchères\nArek 9 - 11cm\nDara 10 - 12cm\nHalfdan 13 - 18cm\nHazdaim 17 - 20cm\nLéoric 1 - 5cm\n\nPerseus arrive pour les sortir de là\nDiscussion avec lui, il dit qu'il sera là quand ils auront besoin d'aide\nIls parent pour la capitale\n\nJ-37\nAttaque par Bien Informé,-1,]\n\t- [default,3768.6886698723115,2983.049016013499,03 - 14.03.25,J-25\nAchats en ville\nDara essaie de vendre une pipe contre un enchantement\nOn les inscrit au tournoi\nRencontre de Perseus\nCombat amical contre Léoric\nSoirée alcoolisée\nCombat dans l'arène (clandestine)\n-8 Raptidons (5 enfants, 3 adultes)\n-5 Humains\n-Chevalier TESO (bien informé)\nIls gagnent, on leur tire dessus avec du plomb\nIls perdent connaissance,-1,]\n\t- [default,2483.2713919956877,5280.888604054999,06-27.04.25,J-41\nCombat contre Harag,-1,]\n\t- [default,2721.5721600862416,5303.781635982288,07 - 18.05.25,J-41\nVoyage vers Ruvik\n\nJ-43\nRencontre d'un Gammoth\nDara utilise les ténèbres pour qu'il attaque son troupeau\n\nJ-48\nRencontre de Einar qui les héberge, les nourri et les emmène à la capitale,-1,]\n\t- [default,2697.5624578897723,5494.826147751107,08 - 21.05.25,J-50\nRencontre des Arvens, on leur demande s'ils ont récupéré leur colis\nIls vont chercher leur colis\nIls se font attaquer par des soldats de Suraja qui avaient pris leur identité\nLe colis est une poupée qui prend l'apparence de Zveindel\nC'est un colis de Lysara afin de pouvoir traquer le masque\n\nRencontre des Scientes\nOrvain va se faire exécuter\nIls arrivent trop tard, Einar a exécuté Orvain\nEinar les emmène voir sa fille, Bryumnes, qui est chef de guerre\nLes autres continents savent qu'ils sont liés à un masque surpuissant, ils sont donc considérés comme des menaces\n\nBryumnes va prendre 3 jours pour se renseigner sur le masque et sur Tarquin\nAvant ça elle veut les tester -> Combat contre Bryumnes,-1,]\n ```")}
{/snippet}
