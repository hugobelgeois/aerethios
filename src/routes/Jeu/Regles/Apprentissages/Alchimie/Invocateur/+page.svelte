<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "matriel",
          "text": "Matériel",
          "level": 2
      },
      {
          "id": "rsultat-de-fabrication",
          "text": "Résultat de Fabrication",
          "level": 2
      },
      {
          "id": "statistiques-de-linvocation",
          "text": "Statistiques de l'invocation",
          "level": 3
      },
      {
          "id": "types-dinvocations",
          "text": "Types d'invocations",
          "level": 2
      },
      {
          "id": "force",
          "text": "Force",
          "level": 3
      },
      {
          "id": "agilit",
          "text": "Agilité",
          "level": 3
      },
      {
          "id": "magicien",
          "text": "Magicien",
          "level": 3
      },
      {
          "id": "types-dingrdients-et-effets",
          "text": "Types d’ingrédients et effets",
          "level": 2
      },
      {
          "id": "dure-et-stabilit",
          "text": "Durée et stabilité",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Invocateur"}</title>
  <meta name="description" content={"Invocateur est une spécialité de l'Alchimie qui insuffle la magie vitale dans les composants pour leur donner forme et volonté. Matériel Pour faire des invocations, il faut disposer : du matériel de…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Invocateur"} />
  <meta property="og:description" content={"Invocateur est une spécialité de l'Alchimie qui insuffle la magie vitale dans les composants pour leur donner forme et volonté. Matériel Pour faire des invocations, il faut disposer : du matériel de…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Invocateur"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p><strong>Invocateur</strong> est une spécialité de l'<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" data-wiki-fragment=\"\">Alchimie</a> qui insuffle la <strong>magie vitale</strong> dans les composants pour leur donner <strong>forme et volonté</strong>.</p>\n</blockquote>\n<h2 data-heading=\"Matériel\" dir=\"auto\" id=\"matriel\">Matériel</h2>\n<p dir=\"auto\">Pour faire des invocations, il faut disposer :</p>\n<ul>\n<li dir=\"auto\">\n<p>du <strong>matériel de base</strong>,</p>\n<ul>\n<li dir=\"auto\"><em>(poids total ≈ 5 kg, coût : 2 PO)</em></li>\n</ul>\n</li>\n<li dir=\"auto\">\n<p>et des <strong>ingrédients nécessaires</strong> à la préparation.</p>\n</li>\n</ul>\n<h2 data-heading=\"Résultat de Fabrication\" dir=\"auto\" id=\"rsultat-de-fabrication\">Résultat de Fabrication</h2>\n<ul>\n<li dir=\"auto\">\n<p><strong>Réussite critique</strong> : l'invocation est <strong>parfaite</strong> et possède <strong>les statistiques maximales</strong>.</p>\n</li>\n<li dir=\"auto\">\n<p><strong>Réussite</strong> : l'invocation est <strong>créée normalement</strong> et ses statistiques sont tirées aux dés.</p>\n</li>\n<li dir=\"auto\">\n<p><strong>Échec</strong> : l'invocation <strong>échoue</strong> et les ingrédients sont <strong>perdus</strong>.</p>\n</li>\n<li dir=\"auto\">\n<p><strong>Échec critique</strong> : l'invocation est <strong>instable</strong>, elle possède <strong>les statistiques minimales</strong> et <strong>agresse son créateur</strong>.</p>\n</li>\n</ul>\n<h3 data-heading=\"Statistiques de l'invocation\" dir=\"auto\" id=\"statistiques-de-linvocation\">Statistiques de l'invocation</h3>\n<p dir=\"auto\">Le joueur jette <strong>1D20 + Magie + Maîtrise magique</strong> pour <strong>chaque ingrédient</strong> utilisé afin de déterminer la <strong>stat associée</strong> à cet ingrédient.<br>\nLa <strong>valeur maximale</strong> d’une statistique ne peut <strong>pas dépasser la somme des trois ingrédients les plus rares</strong>.</p>\n<p dir=\"auto\">La création reste active <strong>1 jour</strong>, sauf mention contraire.</p>\n<h2 data-heading=\"Types d'invocations\" dir=\"auto\" id=\"types-dinvocations\">Types d'invocations</h2>\n<p dir=\"auto\">Elles ont une fonction de base d'auto destruction</p>\n<h3 data-heading=\"Force\" dir=\"auto\" id=\"force\">Force</h3>\n<p dir=\"auto\"><strong>Statistique Min | Max</strong><br>\nForce 3 | 6<br>\nDextérité 1 | 2<br>\nMental Celui de maître<br>\nPerception 0 (+3 pour détecter son élément)</p>\n<p dir=\"auto\">Vie 50 | 100<br>\nArmure 20 | 25</p>\n<p dir=\"auto\">Attaque D6 + Force <em> 4 | D8 + Force </em> 4<br>\nMagie D10 | D12</p>\n<h3 data-heading=\"Agilité\" dir=\"auto\" id=\"agilit\">Agilité</h3>\n<p dir=\"auto\">Force 1 | 2<br>\nDextérité 3 | 6<br>\nMental Celui de maître<br>\nPerception 0 (+3 pour détecter son élément)</p>\n<p dir=\"auto\">Vie 30 | 60<br>\nArmure 10 | 15</p>\n<p dir=\"auto\">Attaque D12 + Force | D20 + Force<br>\nMagie D10 | D12</p>\n<h3 data-heading=\"Magicien\" dir=\"auto\" id=\"magicien\">Magicien</h3>\n<p dir=\"auto\">Force 1 | 2<br>\nDextérité 1 | 2<br>\nMental Celui de maître<br>\nPerception 0 (+7 pour détecter son élément)</p>\n<p dir=\"auto\">Vie 30 | 50<br>\nArmure 10 | 15</p>\n<p dir=\"auto\">Attaque D8 + Force | D10 + Force<br>\nMagie D10 + 10 | D10 + 20</p>\n<h2 data-heading=\"Types d’ingrédients et effets\" dir=\"auto\" id=\"types-dingrdients-et-effets\">Types d’ingrédients et effets</h2>\n<p dir=\"auto\">La création tire ses propriétés des ingrédients utilisés.<br>\nPour chaque type d'ingrédient, la statistique maximale ne peut pas être plus grande que la somme des 3 ingrédients les plus rares.</p>\n<ul>\n<li dir=\"auto\">\n<p>Les <strong>minerais</strong> lui donnent de l'<strong>Armure</strong></p>\n</li>\n<li dir=\"auto\">\n<p>Les <strong>plantes</strong> améliorent sa <strong>Dextérité</strong></p>\n</li>\n<li dir=\"auto\">\n<p>Les <strong>champignons</strong> augmentent sa <strong>Vie</strong></p>\n</li>\n<li dir=\"auto\">\n<p>Les <strong>cristaux</strong> lui donne accès à la <strong>Magie</strong> employée par le joueur pour le fabriquer</p>\n</li>\n<li dir=\"auto\">\n<p>Les <strong>morceaux de créatures</strong> augmentent son <strong>Attaque</strong></p>\n</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Type d’effet</th>\n<th>Déchet</th>\n<th>Commun</th>\n<th>Peu Commun</th>\n<th>Rare</th>\n<th>Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Minerai</strong></td>\n<td>+0</td>\n<td>+5</td>\n<td>+10</td>\n<td>+15</td>\n<td>+20</td>\n</tr>\n<tr>\n<td><strong>Plante</strong></td>\n<td>+0</td>\n<td>+2</td>\n<td>+4</td>\n<td>+6</td>\n<td>+8</td>\n</tr>\n<tr>\n<td><strong>Champignon</strong></td>\n<td>+0</td>\n<td>+1</td>\n<td>+2</td>\n<td>+30</td>\n<td>+50</td>\n</tr>\n<tr>\n<td><strong>Crystal</strong></td>\n<td>+0</td>\n<td>+1</td>\n<td>+2</td>\n<td>+3</td>\n<td>+4</td>\n</tr>\n<tr>\n<td><strong>Créature</strong></td>\n<td>+0</td>\n<td>+2</td>\n<td>+4</td>\n<td>+6</td>\n<td>+8</td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"Durée et stabilité\" dir=\"auto\" id=\"dure-et-stabilit\">Durée et stabilité</h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Rareté dominante</th>\n<th>Durée moyenne</th>\n<th>Stabilité</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Déchet</td>\n<td>1 jour</td>\n<td>Très faible</td>\n</tr>\n<tr>\n<td>Commun</td>\n<td>3 jours</td>\n<td>Faible</td>\n</tr>\n<tr>\n<td>Peu Commun</td>\n<td>15 jours</td>\n<td>Moyenne</td>\n</tr>\n<tr>\n<td>Rare</td>\n<td>70 jours</td>\n<td>Élevée</td>\n</tr>\n<tr>\n<td>Légendaire</td>\n<td>Permanente (ou liée à l’invocateur)</td>\n<td>Parfaite</td>\n</tr>\n</tbody>\n</table></div>")}
  </div>
</article>

<LinkPreview />
