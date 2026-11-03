<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "affinits",
          "text": "Affinités",
          "level": 3
      },
      {
          "id": "ancienne-version",
          "text": "Ancienne version",
          "level": 3
      },
      {
          "id": "catgories",
          "text": "Catégories",
          "level": 2
      },
      {
          "id": "culture",
          "text": "Culture",
          "level": 3
      },
      {
          "id": "exploration",
          "text": "Exploration",
          "level": 3
      },
      {
          "id": "production",
          "text": "Production",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Affinités"}</title>
  <meta name="description" content={"L'affinité permet de définir la spécialisation d'un personnage (comme une classe) qui varie selon la race. Ce sont des outils d’interprétation, pas des générateurs d’information. Affinités Le joueur…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Affinités"} />
  <meta property="og:description" content={"L'affinité permet de définir la spécialisation d'un personnage (comme une classe) qui varie selon la race. Ce sont des outils d’interprétation, pas des générateurs d’information. Affinités Le joueur…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Affinités"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<p dir=\"auto\">L'affinité permet de définir la spécialisation d'un personnage (comme une classe) qui varie selon la race.<br>\nCe sont des outils d’interprétation, pas des générateurs d’information.</p>\n<h3 data-heading=\"Affinités\" dir=\"auto\" id=\"affinits\">Affinités</h3>\n<p dir=\"auto\">Le joueur débloque par défaut les affinités de niveau 1 liées à sa race.</p>\n<p dir=\"auto\">Il choisit la catégorie dans laquelle il excelle; les affinités débloquées dedans seront d'office niveau 2.<br>\nIl peut ensuite répartir 5 points dans les affinités de son choix.</p>\n<p dir=\"auto\">Les affinités liées à sa race coûtent toutes 1 points, tandis que les autres ont le prix de leur niveau.</p>\n<pre class=\"language-exemple\"><code class=\"language-exemple is-loaded\">Une affinité de niveau 1 coûte 1 point, une affinité de niveau 3 coûte 3 points.\n</code></pre>\n<p dir=\"auto\">Le joueur pourra ensuite développer ses affinités de différentes manières :</p>\n<ul>\n<li dir=\"auto\">au cours de ses aventures de façon scénarisée,</li>\n<li dir=\"auto\">Tous les 5 niveaux (5, 10, 15, 20).</li>\n</ul>\n<p dir=\"auto\">En débloquer de nouvelles est compliqué et ne peut arriver qu'avec une bonne raison scénaristique et une longue période de temps.</p>\n<h3 data-heading=\"Ancienne version\" dir=\"auto\" id=\"ancienne-version\">Ancienne version</h3>\n<p dir=\"auto\">Au niveau 1, le joueur peut choisir une catégorie d'affinité dans laquelle il excelle (Culture, Exploration, Production) et possède 3 points qu'il peut dépenser dedans.<br>\nLes affinités liées à sa race coûtent 1 point, tandis que les autres coûtent 2 points (sauf l'elfe pour qui tout coûte 1 point).<br>\nLe joueur gagne 1 point tous les niveaux pairs.</p>\n<p dir=\"auto\">Au niveau 10 et 20, le joueur gagne 1 point supplémentaire, et il peut débloquer une catégorie si sa race lui permet.</p>\n<h2 data-heading=\"Catégories\" dir=\"auto\" id=\"catgories\">Catégories</h2>\n<h3 data-heading=\"Culture\" dir=\"auto\" id=\"culture\">Culture</h3>\n<blockquote dir=\"auto\">\n<p>Connaissance générale</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Niveau</th>\n<th>Humain</th>\n<th>Calico</th>\n<th>Orc</th>\n<th>Nain</th>\n<th>Elfe</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Connait les personnalités importantes</td>\n<td>Reconnait la magie possédée et maîtrisée par un être vivant</td>\n<td>Connait le folklore de son continent d'origine</td>\n<td>Reconnait les matériaux des créations (équipement, bâtiment, ..)</td>\n<td>Reconnaît les symboles spirituels et religieux</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Comprend le fonctionnement interne des villes</td>\n<td>Comprend l'effet des runes et des sceaux magiques</td>\n<td>Comprend l'origine probable des récits</td>\n<td>Comprend le fonctionnement des créations, leurs forces et faiblesses</td>\n<td>Comprend les entités spirituelles</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Sait à qui s'adresser pour obtenir une information, un service ou une autorisation</td>\n<td>Peut modifier ou désactiver un sceau ou une rune simple sans magie brute</td>\n<td>Peut exploiter une tradition ou une superstition pour influencer une communauté</td>\n<td>Peut démonter, réparer ou saboter une création de manière optimale</td>\n<td>Peut communiquer ou négocier avec une entité spirituelle non hostile</td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"Exploration\" dir=\"auto\" id=\"exploration\">Exploration</h3>\n<blockquote dir=\"auto\">\n<p>S'applique lors des déplacements sur une carte (carte du monde, carte de donjon, ..)</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Niveau</th>\n<th>Humain</th>\n<th>Calico</th>\n<th>Orc</th>\n<th>Nain</th>\n<th>Elfe</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>1</strong></td>\n<td>Détecte les lieux de survie (cachette, nourriture, défenses, ..)</td>\n<td>Détecte les sources de magie</td>\n<td>Détecte les créatures</td>\n<td>Détecte le chemin vers la sortie et la pièce la plus profonde</td>\n<td>Détecte les présences spirituelles</td>\n</tr>\n<tr>\n<td><strong>2</strong></td>\n<td>Comprend comment exploiter les ressources du lieu</td>\n<td>Comprend l'origine de la source de magie</td>\n<td>Comprend leur origine (nombre, taille, race, vitesse, ..)</td>\n<td>Comprend la structure complète du lieu</td>\n<td>Comprend leur nature et leurs émotions</td>\n</tr>\n<tr>\n<td><strong>3</strong></td>\n<td>Evite les ralentissements dûs au terrain</td>\n<td>Anticipe les effets ou comportements de la source</td>\n<td>Prédit les déplacements</td>\n<td>Détecte la pièces secrètes et raccourcis</td>\n<td>Anticipe leur comportement ou leurs intentions</td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"Production\" dir=\"auto\" id=\"production\">Production</h3>\n<blockquote dir=\"auto\">\n<p>S'applique lors de la fabrication d'objets</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Niveau</th>\n<th>Humain</th>\n<th>Calico</th>\n<th>Orc</th>\n<th>Nain</th>\n<th>Elfe</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>1</strong></td>\n<td>Les fabrications échouent après 5 échecs au lieu de 3</td>\n<td>Réduit de moitié les coûts magiques</td>\n<td>Sait où trouver les ressources souhaitées</td>\n<td>Le temps de fabrication est réduit de moitié</td>\n<td>La déconstruction rend plus de ressources :<br>- Artisanat : 100%<br>- Alchimie : 50%</td>\n</tr>\n<tr>\n<td><strong>2</strong></td>\n<td>Peut intervertir un ingrédient avec un autre sans changer le résultat souhaité</td>\n<td>Chaque réussite au dé compte comme 2 reussites</td>\n<td>Double les ressources trouvées</td>\n<td>Augmenter la qualité d'une fabrication ne prend pas plus de temps</td>\n<td>Peut améliorer une fabrication déjà existante</td>\n</tr>\n<tr>\n<td><strong>3</strong></td>\n<td>Peut appliquer une partie de son niveau dans un métier de même catégorie</td>\n<td>Ne subit pas les malus d'un artisanat magique raté</td>\n<td>Augmente la rareté des ressources trouvées (<code>+7 au jet de récolte</code>)</td>\n<td>Améliore automatiquement la qualité finale d'un niveau</td>\n<td>Réveille le potentiel caché d'un objet</td>\n</tr>\n</tbody>\n</table></div>"}
  </div>
</article>

<LinkPreview />
