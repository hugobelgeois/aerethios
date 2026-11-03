<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "principales",
          "text": "Principales",
          "level": 2
      },
      {
          "id": "secondaires",
          "text": "Secondaires",
          "level": 2
      },
      {
          "id": "finales",
          "text": "Finales",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Perception - New"}</title>
  <meta name="description" content={"Principales Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20). Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif). Compétence Situation…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Perception - New"} />
  <meta property="og:description" content={"Principales Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20). Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif). Compétence Situation…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Perception - New"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h2 data-heading=\"Principales\" dir=\"auto\" id=\"principales\">Principales</h2>\n<blockquote dir=\"auto\">\n<p>Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).<br>\nDouble le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Compétence</th>\n<th>Situation</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Chasseur</td>\n<td>Détection proche</td>\n</tr>\n<tr>\n<td>Spiritisme</td>\n<td>Perception des phénomènes planaires</td>\n</tr>\n<tr>\n<td>Observateur</td>\n<td>Exploiter les faiblesses</td>\n</tr>\n<tr>\n<td>Voyageur</td>\n<td>Exploiter le terrain</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Secondaires\" dir=\"auto\" id=\"secondaires\">Secondaires</h2>\n<blockquote dir=\"auto\">\n<p>Le joueur en choisi 1 tous les 3 points d'attribut (3, 6, 9, 12, 15, 18).<br>\nIl est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th><strong>Principale</strong></th>\n<th>Secondaire</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Chasseur</strong></td>\n<td>Menace</td>\n<td>Passif</td>\n<td>Pas besoin de jet pour savoir qu'un danger immédiat vous menace.</td>\n</tr>\n<tr>\n<td></td>\n<td>Pièges</td>\n<td>Passif</td>\n<td>Impossible de tomber dans un piège physique.</td>\n</tr>\n<tr>\n<td></td>\n<td>Vigilance</td>\n<td>Réaction</td>\n<td>Lorsqu'une créature entre dans votre champ de vision, vous agissez avant le premier tour et avez l'effet de surprise.</td>\n</tr>\n<tr>\n<td><strong>Spiritisme</strong></td>\n<td>Exorciste</td>\n<td>Action</td>\n<td>Renvoie une entité planaire dans l'ombre pendant 1 tour, où elle ne pourra plus vous faire de mal.<br>Si <code>1d20 + Perception(Spiritisme) &gt;= Puissance de l'entité [5-30]</code>.</td>\n</tr>\n<tr>\n<td></td>\n<td>Pactisant</td>\n<td>Action</td>\n<td>Vous pouvez invoquer une entité planaire avec laquelle vous avez conclu un pacte.<br>Elle peut refuser si elle est plus puissante que vous.</td>\n</tr>\n<tr>\n<td></td>\n<td>Pièges Magiques</td>\n<td>Passif</td>\n<td>Impossible de tomber dans un piège magique.</td>\n</tr>\n<tr>\n<td><strong>Observateur</strong></td>\n<td>Anticipation</td>\n<td>Réaction</td>\n<td>Une créature a un désavantage contre vous pour ce tour si vous venez de l'analyser.</td>\n</tr>\n<tr>\n<td></td>\n<td>Chemin parfait</td>\n<td>Action Bonus</td>\n<td>Après avoir analyser une créature, celle-ci ne peut plus vous faire d'attaques surprise, dans le dos ou d'opportunité pour le reste du combat.</td>\n</tr>\n<tr>\n<td></td>\n<td>Faiblesse</td>\n<td>Passif</td>\n<td>Augmente les dégâts sur une créature analysée de <code>Perception(Observateur)</code></td>\n</tr>\n<tr>\n<td><strong>Voyageur</strong></td>\n<td>Ami de la nature</td>\n<td>Action Bonus</td>\n<td>Utiliser un élément de décor exploitable pendant une attaque pour augmenter vos dégâts de <code>Perception(Voyageur)</code>.</td>\n</tr>\n<tr>\n<td></td>\n<td>Grand pas</td>\n<td>Passif</td>\n<td>Après avoir passé un tour sur un terrain, vous ignorez ensuite tous ses malus.</td>\n</tr>\n<tr>\n<td></td>\n<td>High Ground</td>\n<td>Passif</td>\n<td>Etre plus haut qu'une créature augmente vos dégâts de <code>Perception(Voyageur)</code> contre cette créature.</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Finales\" dir=\"auto\" id=\"finales\">Finales</h2>\n<blockquote dir=\"auto\">\n<p>Au niveau 10, s'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.<br>\nAu niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Compétence</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Oeil absolu</strong></td>\n<td>+ Une fois par tour, après avoir analysé une cible, vous pouvez ignorer entièrement sa DR ou une de ses résistances.<br>- Vous ne pouvez attaquer que des cibles analysées.</td>\n</tr>\n<tr>\n<td><strong>Prémonition</strong></td>\n<td>+ Une fois par repos, vous pouvez demander au MJ un événement important qui s'est ou va se dérouler dans le monde. <br>- Si vous agissez contre cette information, vous subissez un malus.</td>\n</tr>\n<tr>\n<td><strong>Troisième œil</strong></td>\n<td>+ Analyse toutes les créatures en début de combat.<br>- En début de combat, le joueur annonce les HP qu'il lui restera à la fin.<br>S'il se trompe (avec une marge de 5), il perd les HP qu'il vient de perdre pendant ce combat.</td>\n</tr>\n</tbody>\n</table></div>"}
  </div>
</article>

<LinkPreview />
