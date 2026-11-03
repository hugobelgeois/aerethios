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
  <title>{"Mental"}</title>
  <meta name="description" content={"Principales Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20). Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif). Compétence Situation…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Mental"} />
  <meta property="og:description" content={"Principales Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20). Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif). Compétence Situation…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Mental"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h2 data-heading=\"Principales\" dir=\"auto\" id=\"principales\">Principales</h2>\n<blockquote dir=\"auto\">\n<p>Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).<br>\nDouble le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Compétence</th>\n<th>Situation</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Arcaniste</td>\n<td>Magies de Fusion</td>\n</tr>\n<tr>\n<td>Intelligence</td>\n<td>Magies Elétistes</td>\n</tr>\n<tr>\n<td>Sagesse</td>\n<td>Magies Croitistes</td>\n</tr>\n<tr>\n<td>Volonté</td>\n<td>Résistance mentale</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Secondaires\" dir=\"auto\" id=\"secondaires\">Secondaires</h2>\n<blockquote dir=\"auto\">\n<p>Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).<br>\nIl est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th><strong>Principale</strong></th>\n<th>Secondaire</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Arcaniste</strong></td>\n<td>Amplification</td>\n<td>Permet de cumuler ses crystaux avec un autre entité pour augmenter le résultat<br>On utilise les dés de celui qui lance le sort</td>\n</tr>\n<tr>\n<td></td>\n<td>Résonance</td>\n<td>Permet de fusionner les magies avec autre chose que du feu</td>\n</tr>\n<tr>\n<td><strong>Intelligence</strong></td>\n<td>Redirection</td>\n<td>Concentre sa magie pour pouvoir rediriger un sort sur une autre entité proche<br><em>1d20 + Mental(Intelligence) &gt; Crystaux + Maîtrise</em></td>\n</tr>\n<tr>\n<td></td>\n<td>Efficacité</td>\n<td>Les dés de magie qui sont à 20% du maximum ne consomment pas de crystaux</td>\n</tr>\n<tr>\n<td><strong>Sagesse</strong></td>\n<td>Assidu</td>\n<td>Permet l'apprentissage sans tuteur</td>\n</tr>\n<tr>\n<td></td>\n<td>Insensible</td>\n<td>Ignore la douleur et les malus qui vont avec</td>\n</tr>\n<tr>\n<td><strong>Volonté</strong></td>\n<td>Résistance</td>\n<td>Résister à des situations affectant l'esprit</td>\n</tr>\n<tr>\n<td></td>\n<td>Imperturbable</td>\n<td>Permet de se déplacer et d'esquiver sans perdre sa concentration</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Finales\" dir=\"auto\" id=\"finales\">Finales</h2>\n<blockquote dir=\"auto\">\n<p>S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.<br>\nAu niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Compétence</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Potter</strong></td>\n<td>+ Les dés de magie qui tombent sous la moitié sont remplacés par la moitié (arrondie vers le haut)<br>- Si la cible a une résistance à la magie utilisée, tous les dégâts sont annulés</td>\n</tr>\n<tr>\n<td><strong>Plus ultra</strong></td>\n<td>+ Vos dés font toujours les dégâts maximums<br>- Vous lancez 1d6+1 pour savoir combien de crystaux vous consommez<br>Si vous dépassez votre réserve, vous perdez 10HP par crystal supplémentaire</td>\n</tr>\n</tbody>\n</table></div>"}
  </div>
</article>

<LinkPreview />
