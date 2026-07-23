<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "mtiers",
          "text": "Métiers",
          "level": 2
      },
      {
          "id": "artisanat",
          "text": "Artisanat",
          "level": 3
      },
      {
          "id": "alchimie",
          "text": "Alchimie",
          "level": 3
      },
      {
          "id": "rudition",
          "text": "Érudition",
          "level": 3
      },
      {
          "id": "autres",
          "text": "Autres",
          "level": 2
      },
      {
          "id": "fabrication",
          "text": "Fabrication",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Métiers</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Métiers</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render mtiers()}
		{@render autres()}
		{@render fabrication()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("---\r\ntags:\r\n  - Règles\r\n  - Personnage\r\n---\r")}
{/snippet}

{#snippet mtiers()}
	<section>
		<h2 id="mtiers">{@html applyBase("Métiers")}</h2>
	{@html renderMarkdown("\r\nLe joueur peut choisir 1 catégorie de métier avec laquelle il est à l'aise lors de la création de son personnage.\r\nDans cette catégorie, il peut choisir 1 métier qu'il a déjà pratiqué et avec lequel il a des affinités.\r\nIl pourra pratiquer les autres métiers de sa catégorie, mais il aura plus de difficultés à faire ce qu'il souhaite.\r\n\tLes ressources d'un métier sont les mêmes pour les autres métiers de la même catégorie.\r\n\r\nCertains métiers font partie de 2 catégories et nécessitent alors 2 personnage pour pouvoir travailler dessus (pas forcément en même temps).\r\n\r")}
	{@render artisanat()}
	{@render alchimie()}
	{@render rudition()}
	</section>
{/snippet}

{#snippet artisanat()}
	<section>
		<h3 id="artisanat">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" data-wiki-fragment=\"\">Artisanat</a>")}</h3>
	{@html renderMarkdown("\r\n| Compétence                 | Description                                   |\r\n| -------------------------- | --------------------------------------------- |\r\n| **<span class=\"wiki-unresolved\">Armurier</span>** | Fabrication d’armures                         |\r\n| **<span class=\"wiki-unresolved\">Artificier</span>**         | Fabrication des armes à feu                   |\r\n| **<span class=\"wiki-unresolved\">Bijoutier</span>**          | Fabrication de bijoux ou catalyseurs de magie |\r\n| **<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"\">Enchanteur</a>**         | Création et application de capacités uniques  |\r\n| **<span class=\"wiki-unresolved\">Taillandier</span>**        | Fabrication d'armes                           |\r\n\r")}

	</section>
{/snippet}

{#snippet alchimie()}
	<section>
		<h3 id="alchimie">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" data-wiki-fragment=\"\">Alchimie</a>")}</h3>
	{@html renderMarkdown("\r\n| Compétence          | Description                                                          |\r\n| ------------------- | -------------------------------------------------------------------- |\r\n| **<span class=\"wiki-unresolved\">Bijoutier</span>**   | Fabrication de bijoux ou catalyseurs de magie                        |\r\n| **<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Cuisinier\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Cuisinier\" data-wiki-fragment=\"\">Cuisinier</a>**   | Préparation de repas conférant des bonus temporaires                 |\r\n| **<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Potionniste\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Potionniste\" data-wiki-fragment=\"\">Potionniste</a>** | Création de potions, huiles et remèdes                               |\r\n| **<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Invocateur\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Invocateur\" data-wiki-fragment=\"\">Invocateur</a>**  | Animation ou transmutation d’entités à partir d’ingrédients magiques |\r\n\r")}

	</section>
{/snippet}

{#snippet rudition()}
	<section>
		<h3 id="rudition">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Erudition/Erudition\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Erudition/Erudition\" data-wiki-fragment=\"\">Érudition</a>")}</h3>
	{@html renderMarkdown("\r\n| Compétence         | Description                                                                               |\r\n| ------------------ | ----------------------------------------------------------------------------------------- |\r\n| **<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"\">Enchanteur</a>** | Création et application de capacités uniques                                              |\r\n| **<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Invocateur\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Invocateur\" data-wiki-fragment=\"\">Invocateur</a>** | Animation ou transmutation d’entités à partir d’ingrédients magiques                      |\r\n| Médecine           |                                                                                           |\r\n| <span class=\"wiki-unresolved\">Runniste</span>       | Création de runes et de glyphes applicable sur des objets et entités pour les magicaliser |\r")}

	</section>
{/snippet}

{#snippet autres()}
	<section>
		<h2 id="autres">{@html applyBase("Autres")}</h2>
	{@html renderMarkdown("\r\n| Compétence        | XP / niveau | Description                                         |\r\n| ----------------- | ----------- | --------------------------------------------------- |\r\n| **Équitation**    | 15          | Maîtrise et combat monté                            |\r\n| **Lire / Écrire** | 50          | Alphabétisation et lecture de langues communes      |\r\n| **Natation**      | 10          | Déplacement et survie aquatique                     |\r\n| **Navigation**    | 20          | Connaissance des vents, étoiles et routes maritimes |\r\n\r")}

	</section>
{/snippet}

{#snippet fabrication()}
	<section>
		<h2 id="fabrication">{@html applyBase("Fabrication")}</h2>
	{@html renderMarkdown("> 1d20 + Niveau du Métier + Aide(Niveau de métier du joueur qui aide / 2) arrondi vers la bas\r\n\r\nLorsqu'un joueur consacre une période de travail à la fabrication, s'il possède des ustensiles, il peut prendre du temps pour fabriquer des choses :\r\n**1d20 + Niveau du Métier**\r\n\r\nChaque fois qu'un joueur travail, il lance les dés et augmente sa progression (Crafting Progress = CP).\r\n\tLe joueur peut également prendre son temps et faire **5 + Niveau du Métier** pour chaque heure qui passe.\r\n\tLe joueur peut se faire aider par quelqu'un avec le même métier afin de gagner **(Niveau de métier du joueur qui aide / 2) arrondi vers la bas** à son jet.\r\nLorsqu'il commence à travailler, les ressources sont consommées.\r\nUne fois que la CP a atteint la Difficulté de Fabrication, l'objet est créé.\r\n\r\nSi le jet de dé est inférieur au Taux d'Echec de l'ingrédient le plus rare, cela compte comme un échec.\r\nAprès 3 échec, la fabrication est ratée (sauf pour l'Artisanat).\r\n\r\nLes ressources s'achètent ou se récoltent dans la nature.\r\n\tChaque jour de voyage, les joueurs peuvent récolter des matériaux pour leur catégorie de métier.\r\n\r\nPour savoir la Difficulté de Fabrication d'un objet, il faut additionner la difficulté de chaque ingrédient utilisé.\r\n\r\n|                               |  Rien  | Déchet  | Commun  | Peu Commun |  Rare   | Légendaire |\r\n| ----------------------------- | :----: | :-----: | :-----: | :--------: | :-----: | :--------: |\r\n| **Chance Récolte**            | 1 - 10 | 11 - 30 | 31 - 60 |  61 - 85   | 86 - 96 |  97 - 100  |\r\n| **Quantité de Récolte**       |   -    |  1d10   |   1d8   |    1d6     |   1d4   |    1d2     |\r\n| **Difficulté de Fabrication** |   -    |   10    |   20    |     40     |   80    |    150     |\r\n| **Expérience de Fabrication** |   -    |    -    |    1    |     2      |    4    |     8      |\r\n| **Taux d'Echec**              |   -    |    1    |    3    |     6      |   10    |     15     |\r\n\r\nSelon le lieu où la fabrication se fait, le résultat est modifié :\r\n\r\n| Zone sauvage | Campement | Lieu sécurisé | Lieu conçu pour      |\r\n| ------------ | --------- | ------------- | -------------------- |\r\n| Désavantage  | Résultat  | Avantage      | 3d10 au lieu de 1d20 |\r\n\r\nL'expérience requise pour monter le niveau d'un Métier équivaut à son niveau \\* 10.\r\n\tExemple : Forgeron niv3 nécessite 30xp.\r\n\r\nSelon la catégorie de métier, quelques règles changent :\r\n\r\n|                                | Artisanat                                        | Alchimie                                            | Erudition                                           |\r\n| ------------------------------ | ------------------------------------------------ | --------------------------------------------------- | --------------------------------------------------- |\r\n| **Durée d'1 lancé de dé**      | 8h                                               | 2h                                                  | 1h                                                  |\r\n| **Peut être interrompu**       | Oui                                              | Non                                                 | Non                                                 |\r\n| **Temps illimité**             | Oui                                              | Oui                                                 | Non                                                 |\r\n| **Amélioration post création** | Oui                                              | Non                                                 | Non                                                 |\r\n| **Déconstruction possible**    | Oui<br>**(6+1d2) \\* 10%** de matériaux récupérés | Non                                                 | Non                                                 |\r\n| **Consomme des Crystaux**      | Non                                              | Non                                                 | Oui<br>1 par heure de travail                       |\r\n| **Echec possible**             | Non                                              | Oui<br>Possibilité d'effet négatif ajouté à l'objet | Oui<br>Possibilité d'effet négatif ajouté au joueur |")}

	</section>
{/snippet}
