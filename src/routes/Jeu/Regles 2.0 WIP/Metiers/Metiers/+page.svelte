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
          "id": "alchimie",
          "text": "Alchimie",
          "level": 3
      },
      {
          "id": "artisanat",
          "text": "Artisanat",
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
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("---\r\ntags:\r\n  - Règles\r\n  - Personnage\r\n---\r")}
{/snippet}

{#snippet mtiers()}
	<section>
		<h2 id="mtiers">{@html applyBase("Métiers")}</h2>
	{@html renderMarkdown("\r\nLe joueur peut choisir 1 catégorie de métier avec laquelle il est à l'aise lors de la création de son personnage.\r\nDans cette catégorie, il peut choisir 1 métier qu'il a déjà pratiqué et avec lequel il a des affinités.\r\nIl pourra pratiquer les autres métiers de sa catégorie, mais il aura plus de difficultés à faire ce qu'il souhaite.\r\n\r\nCertains métiers font partie de 2 catégories et nécessitent alors 2 personnage pour pouvoir travailler dessus (pas forcément en même temps).\r\n\r")}
	{@render alchimie()}
	{@render artisanat()}
	{@render rudition()}
	</section>
{/snippet}

{#snippet alchimie()}
	<section>
		<h3 id="alchimie">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" data-wiki-fragment=\"\">Alchimie</a>")}</h3>
	{@html renderMarkdown("\r\n| Compétence          | Description                                                          |\r\n| ------------------- | -------------------------------------------------------------------- |\r\n| **<span class=\"wiki-unresolved\">Bijoutier</span>**   | Fabrication de bijoux ou catalyseurs de magie                        |\r\n| **<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Cuisinier\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Cuisinier\" data-wiki-fragment=\"\">Cuisinier</a>**   | Préparation de repas conférant des bonus temporaires                 |\r\n| **<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Potionniste\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Potionniste\" data-wiki-fragment=\"\">Potionniste</a>** | Création de potions, huiles et remèdes                               |\r\n| **<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Invocateur\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Invocateur\" data-wiki-fragment=\"\">Invocateur</a>**  | Animation ou transmutation d’entités à partir d’ingrédients magiques |\r\n\r")}

	</section>
{/snippet}

{#snippet artisanat()}
	<section>
		<h3 id="artisanat">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" data-wiki-fragment=\"\">Artisanat</a>")}</h3>
	{@html renderMarkdown("\r\n| Compétence                 | Description                                   |\r\n| -------------------------- | --------------------------------------------- |\r\n| **<span class=\"wiki-unresolved\">Armurier</span>** | Fabrication d’armures                         |\r\n| **<span class=\"wiki-unresolved\">Artificier</span>**         | Fabrication des armes à feu                   |\r\n| **<span class=\"wiki-unresolved\">Bijoutier</span>**          | Fabrication de bijoux ou catalyseurs de magie |\r\n| **<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"\">Enchanteur</a>**         | Création et application de capacités uniques  |\r\n| **<span class=\"wiki-unresolved\">Taillandier</span>**        | Fabrication d'armes                           |\r\n\r")}

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
	{@html renderMarkdown("\r\n| Compétence        | XP / niveau | Description                                         |\r\n| ----------------- | ----------- | --------------------------------------------------- |\r\n| **Équitation**    | 15          | Maîtrise et combat monté                            |\r\n| **Lire / Écrire** | 50          | Alphabétisation et lecture de langues communes      |\r\n| **Natation**      | 10          | Déplacement et survie aquatique                     |\r\n| **Navigation**    | 20          | Connaissance des vents, étoiles et routes maritimes |")}

	</section>
{/snippet}
