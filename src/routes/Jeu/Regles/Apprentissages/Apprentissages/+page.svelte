<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "comptences",
          "text": "Compétences",
          "level": 2
      },
      {
          "id": "rgles-gnrales",
          "text": "Règles générales",
          "level": 3
      },
      {
          "id": "apprentissages-catgorises",
          "text": "Apprentissages catégorisées",
          "level": 3
      },
      {
          "id": "alchimie",
          "text": "Alchimie",
          "level": 4
      },
      {
          "id": "artisanat",
          "text": "Artisanat",
          "level": 4
      },
      {
          "id": "apprentissages-libres",
          "text": "Apprentissages libres",
          "level": 3
      },
      {
          "id": "apprendre",
          "text": "Apprendre",
          "level": 2
      },
      {
          "id": "difficult-dapprentissage",
          "text": "Difficulté d’apprentissage",
          "level": 3
      },
      {
          "id": "gain-dexprience",
          "text": "Gain d’expérience",
          "level": 3
      },
      {
          "id": "tutorer",
          "text": "Tutorer",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Apprentissages"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Apprentissages"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render comptences()}
		{@render apprendre()}
		{@render tutorer()}
  </div>
</article>

<LinkPreview />

{#snippet comptences()}
	<section>
		<h2 id="comptences">{@html "Compétences"}</h2>
	{@html "<p>Apprendre un apprentissage demande <strong>temps</strong>, <strong>argent</strong> et <strong>pratique</strong>.<br>\nChaque apprentissage appartient à une <strong>catégorie principale</strong>, sauf les apprentissages <strong>libres</strong>, qui peuvent être appris à tout moment.</p>"}
	{@render rglesGnrales()}
	{@render apprentissagesCatgorises()}
	{@render apprentissagesLibres()}
	</section>
{/snippet}

{#snippet rglesGnrales()}
	<section>
		<h3 id="rgles-gnrales">{@html "Règles générales"}</h3>
	{@html "<ul><li>Un joueur peut <strong>s’investir dans une nouvelle catégorie</strong> seulement <strong>tous les 5 niveaux de personnage</strong>.</li></ul>\n<ul><li>À chaque nouvelle catégorie apprise, il choisit <strong>une spécialisation</strong> qui gagne <strong>plus d’expérience</strong>.</li></ul>\n<ul><li>Les autres apprentissages de la catégorie progressent au rythme normal.</li></ul>\n<ul><li>Le coût en <strong>pièces d’or (po)</strong> correspond au <strong>prix d’une leçon</strong>.</li></ul>\n<ul><li>Un niveau est gagné lorsqu’un joueur cumule l’<strong>expérience requise</strong>.</li></ul>"}

	</section>
{/snippet}

{#snippet apprentissagesCatgorises()}
	<section>
		<h3 id="apprentissages-catgorises">{@html "Apprentissages catégorisées"}</h3>

	{@render alchimie()}
	{@render artisanat()}
	</section>
{/snippet}

{#snippet alchimie()}
	<section>
		<h4 id="alchimie">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" data-wiki-fragment=\"\">Alchimie</a>")}</h4>
	{@html applyBase("<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Coût (po / leçon)</th><th>XP / niveau</th><th>Niveau max</th><th>Description</th></tr></thead><tbody><tr><td><strong><a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Cuisinier\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Cuisinier\" data-wiki-fragment=\"\">Cuisinier</a></strong></td><td>1 × niveau</td><td>10</td><td>-</td><td>Préparation de repas conférant des bonus temporaires</td></tr><tr><td><strong><a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Potionniste\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Potionniste\" data-wiki-fragment=\"\">Potionniste</a></strong></td><td>2 × niveau</td><td>20</td><td>-</td><td>Création de potions, huiles et remèdes</td></tr><tr><td><strong><a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Invocateur\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Invocateur\" data-wiki-fragment=\"\">Invocateur</a></strong></td><td>3 × niveau</td><td>30</td><td>-</td><td>Animation ou transmutation d’entités à partir d’ingrédients magiques</td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet artisanat()}
	<section>
		<h4 id="artisanat">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" data-wiki-fragment=\"\">Artisanat</a>")}</h4>
	{@html applyBase("<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Coût (po / leçon)</th><th>XP / niveau</th><th>Niveau max</th><th>Description</th></tr></thead><tbody><tr><td><strong><span class=\"wiki-unresolved\">Artificier</span></strong></td><td>2 × niveau</td><td>25</td><td>-</td><td>Conception d’objets explosifs ou mécano-magiques</td></tr><tr><td><strong><span class=\"wiki-unresolved\">Bijoutier</span></strong></td><td>1 × niveau</td><td>30</td><td>-</td><td>Fabrication de bijoux ou catalyseurs de magie</td></tr><tr><td><strong><a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#kothula-wip\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Kothula%20(WIP)%5C\">Enchanteur (peau - Kothula)</a></strong></td><td>4 × niveau</td><td>30</td><td>-</td><td>Gravure de tatouages runiques sur la peau</td></tr><tr><td><strong><a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#nirina\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Nirina%5C\">Enchanteur (métal – Nirina)</a></strong></td><td>3 × niveau</td><td>30</td><td>-</td><td>Gravure de runes sur les armes et armures</td></tr><tr><td><strong><a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#ovliin\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Ovliin%5C\">Enchanteur (os – Ovliin)</a></strong></td><td>2 × niveau</td><td>30</td><td>-</td><td>Gravure de runes sur les os</td></tr><tr><td><strong><a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#suraja\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Suraja%5C\">Enchanteur (tissu – Suraja)</a></strong></td><td>2 × niveau</td><td>30</td><td>-</td><td>Enchantement de vêtements, capes et reliques</td></tr><tr><td><strong><a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Forgeron\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Forgeron\" data-wiki-fragment=\"\">Forgeron</a></strong></td><td>1 × niveau</td><td>20</td><td>-</td><td>Fabrication d’armes, outils et armures</td></tr><tr><td><strong><span class=\"wiki-unresolved\">Tanneur</span></strong></td><td>1 × niveau</td><td>10</td><td>-</td><td>Travail du cuir, des peaux et des tissus</td></tr></tbody></table></div>\n<blockquote>Tous les types d’Enchanteurs partagent la même <strong>spécialisation Enchantement</strong>.</blockquote>")}

	</section>
{/snippet}

{#snippet apprentissagesLibres()}
	<section>
		<h3 id="apprentissages-libres">{@html "Apprentissages libres"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Coût (po / leçon)</th><th>XP / niveau</th><th>Niveau max</th><th>Description</th></tr></thead><tbody><tr><td><strong>Larcin</strong></td><td>3</td><td>10</td><td>4</td><td>Vol, crochetage et discrétion</td></tr><tr><td><strong>Lire / Écrire</strong></td><td>1</td><td>50</td><td>1</td><td>Alphabétisation et lecture de langues communes</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet apprendre()}
	<section>
		<h2 id="apprendre">{@html "Apprendre"}</h2>
	{@html "<p>Le joueur ne peut prendre que <strong>3 leçons par jour</strong> (8h/ leçon).</p>\n<p>Pour chaque nuit que le joueur passe à étudier plutôt que dormir, il perd 10 HP.</p>\n<p>Pendant ses leçons, <strong>il ne peut effectuer aucune autre activité</strong> (pas de déplacement, d’enquête, de fabrication, ..).</p>"}
	{@render difficultDapprentissage()}
	{@render gainDexprience()}
	</section>
{/snippet}

{#snippet difficultDapprentissage()}
	<section>
		<h3 id="difficult-dapprentissage">{@html "Difficulté d’apprentissage"}</h3>
	{@html "<blockquote>Jet : <strong>1d20 + Mental + Concentration</strong><br><em>Le résultat doit être strictement supérieur aux valeurs du tableau ci-dessous.</em></blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Niveau</th><th>Avec tuteur</th><th>Sans tuteur</th></tr></thead><tbody><tr><td>1</td><td>12</td><td>-</td></tr><tr><td>2</td><td>16</td><td>20</td></tr><tr><td>3</td><td>20</td><td>24</td></tr><tr><td>4</td><td>24</td><td>28</td></tr><tr><td>5</td><td>28</td><td>32</td></tr><tr><td>6</td><td>32</td><td>-</td></tr></tbody></table></div>\n<blockquote><strong>Exemple</strong> : Quelqu'un qui veut passer du niveau 0 à 1 avec un tuteur doit faire plus que 12.</blockquote>"}

	</section>
{/snippet}

{#snippet gainDexprience()}
	<section>
		<h3 id="gain-dexprience">{@html "Gain d’expérience"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Jet</th><th>Avec tuteur</th><th>Sans tuteur</th></tr></thead><tbody><tr><td>Réussite</td><td>+1 exp</td><td>+1 exp</td></tr><tr><td>Réussie critique</td><td>+2 exp</td><td>-</td></tr><tr><td>Echec critique</td><td>-</td><td>-1 exp</td></tr></tbody></table></div>\n<ul><li><strong>Étude d'une spécialisation</strong> : +1 exp</li></ul>\n<blockquote><strong>L'apprentissage sans tuteur nécessite des prérequis</strong> afin de gagner de l'expérience.<br><strong>Exemple</strong> :<br>\t- un cuisinier doit consommer de vrais ingrédients de cuisine,<br>\t- un alchimiste de niveau 4 doit au moins faire des potions rares pour pouvoir gagner de l'expérience.</blockquote>"}

	</section>
{/snippet}

{#snippet tutorer()}
	<section>
		<h2 id="tutorer">{@html "Tutorer"}</h2>
	{@html "<p>Lorsqu’un joueur atteint le <strong>niveau maximum/4</strong> dans une compétence, il peut <strong>enseigner</strong> cette discipline à d’autres joueurs ou à des PNJ, afin de <strong>partager son savoir</strong> ou <strong>gagner de l’argent</strong>.</p>\n<ul><li>Le tuteur ne peut rien faire d’autre pendant les leçons (max 2 leçons/ jour).</li></ul>\n<ul><li>Pour chaque leçon, il ne peut avoir que 1d4 élèves (4 valant 0 élève) de niveau 1d4 (4 valant 0).</li></ul>\n<ul><li>Il doit réussir un <strong>1d20 + Mental + Concentration</strong> par leçon pour transmettre efficacement ses connaissances.</li></ul>\n<ul><li>Une réussite critique permet d’enseigner <strong>deux fois plus vite</strong> (double les points gagnés par l'élève).</li></ul>\n<ul><li>Un échec critique fait <strong>échouer la leçon</strong> (aucun point gagné).</li></ul>"}

	</section>
{/snippet}
