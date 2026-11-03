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
  <title>{"Dextérité - New"}</title>
  <meta name="description" content={"Principales Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20). Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif). Compétence Situation…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Dextérité - New"} />
  <meta property="og:description" content={"Principales Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20). Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif). Compétence Situation…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Dextérité - New"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h2 data-heading=\"Principales\" dir=\"auto\" id=\"principales\">Principales</h2>\n<blockquote dir=\"auto\">\n<p>Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).<br>\nDouble le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Compétence</th>\n<th>Situation</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Acrobatie</td>\n<td>Mobilité et esquive</td>\n</tr>\n<tr>\n<td>Assassin</td>\n<td>Attaque surprise</td>\n</tr>\n<tr>\n<td>Bretteur</td>\n<td>Combat précis et technique</td>\n</tr>\n<tr>\n<td>Éclaireur</td>\n<td>Déplacement discret</td>\n</tr>\n<tr>\n<td>Voleur</td>\n<td>Larcin et manipulation</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Secondaires\" dir=\"auto\" id=\"secondaires\">Secondaires</h2>\n<blockquote dir=\"auto\">\n<p>Le joueur en choisi 1 tous les 3 points d'attribut (3, 6, 9, 12, 15, 18).<br>\nIl est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th><strong>Principale</strong></th>\n<th>Secondaire</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Acrobatie</strong></td>\n<td>Esquive</td>\n<td>Action Bonus</td>\n<td>Jusqu'au début de votre prochain tour, les attaques d'opportunité contre vous échouent.</td>\n</tr>\n<tr>\n<td></td>\n<td>Réception</td>\n<td>Réaction</td>\n<td>Après avoir été projeté ou être tombé, vous retombez sur vos pieds et ignorez les effets de renversement.</td>\n</tr>\n<tr>\n<td></td>\n<td>Voltige</td>\n<td>Passif</td>\n<td>Se relever, grimper ou franchir un obstacle ne coûte pas de déplacement supplémentaire.<br>Les dégâts de chute sont réduits de <code>10 × Dextérité(Acrobatie)</code> HP.</td>\n</tr>\n<tr>\n<td><strong>Assassin</strong></td>\n<td>Coup précis</td>\n<td>Passif</td>\n<td>Une attaque surprise ignore la DR.</td>\n</tr>\n<tr>\n<td></td>\n<td>Exécution</td>\n<td>Action Bonus</td>\n<td>Contre une cible surprise, effectuez immédiatement une seconde attaque si la première touche.<br>Cette seconde attaque ne bénificie plus de l'effet de surprise.</td>\n</tr>\n<tr>\n<td></td>\n<td>Rapide</td>\n<td>Passif</td>\n<td>Ajoute <code>Dextérité(Assassin)</code> aux dés de dégâts des armes courtes ou légères.</td>\n</tr>\n<tr>\n<td><strong>Bretteur</strong></td>\n<td>Ambidextre</td>\n<td>Passif</td>\n<td>Retire le désavantage sur la deuxième arme.</td>\n</tr>\n<tr>\n<td></td>\n<td>Point faible</td>\n<td>Action Bonus</td>\n<td>Crée une blessure exploitée par la prochaine attaque d'arme à corde ou d'arme courte qui ignore la DR.</td>\n</tr>\n<tr>\n<td></td>\n<td>Riposte</td>\n<td>Réaction</td>\n<td>Lorsqu'un adversaire vous manque au corps à corps, effectuez immédiatement une attaque.</td>\n</tr>\n<tr>\n<td><strong>Éclaireur</strong></td>\n<td>Embuscade</td>\n<td>Réaction</td>\n<td>Si un ennemi s'approche de vous, vous pouvez lui faire une attaque d'opportunité.</td>\n</tr>\n<tr>\n<td></td>\n<td>Repli</td>\n<td>Action Bonus</td>\n<td>Après une attaque, vous pouvez immédiatement vous déplacer de quelques mètres sans déclencher d'attaque d'opportunité.</td>\n</tr>\n<tr>\n<td></td>\n<td>Silencieux</td>\n<td>Passif</td>\n<td>Vos déplacements ne produisent aucun bruit perceptible tant que vous ne courez pas ou n'attaquez pas.</td>\n</tr>\n<tr>\n<td><strong>Voleur</strong></td>\n<td>Dissimulation</td>\n<td>Passif</td>\n<td>Les petits objets cachés sur vous ne peuvent pas être découverts.</td>\n</tr>\n<tr>\n<td></td>\n<td>Main légère</td>\n<td>Passif</td>\n<td>Un échec de larcin ne révèle pas automatiquement votre présence.</td>\n</tr>\n<tr>\n<td></td>\n<td>Opportuniste</td>\n<td>Réaction</td>\n<td>Echange l'arme d'une créature proche qui a raté son jet avec une arme de même type.<br>Si <code>1d20 + Dextérité(Voleur) &gt;= AC + dé ennemi</code> et si l'arme n'est pas à 2 mains, ou à distance (lourd).</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Finales\" dir=\"auto\" id=\"finales\">Finales</h2>\n<blockquote dir=\"auto\">\n<p>Au niveau 10, s'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.<br>\nAu niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Compétence</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Fantôme</strong></td>\n<td>+ Les attaques surprises et d'opportunité contre vous échouent automatiquement. <br>+ Vous pouvez traverser les espaces occupés par des ennemis. <br>- Vous ne pouvez pas bénéficier d'une armure lourde et la DR des armures intermédiaires est divisée par 2.</td>\n</tr>\n<tr>\n<td><strong>Fatality</strong></td>\n<td>+ Après avoir porter le coup de grâce à un ennemi, la prochaine attaque dans ce combat devient critique.<br>Si elle ne touche pas, le critique est perdu.<br>- Tant que vous n'avez pas porté le coup de grâce à une créature durant ce combat, vous ne pouvez plus bénéficier des bonus d'attaque surprise, d'opportunité ou dans le dos après avoir été repéré.</td>\n</tr>\n<tr>\n<td><strong>Lame parfaite</strong></td>\n<td>+ Vos attaques critiques arrivent sur un résultat inférieur de 2 au seuil normal.<br><code>1d20 &gt;= 19</code><br> <code>2dx -&gt; 1 seul des dés fait x au lieu des 2</code><br>- Vos dégâts bruts diminuent de 25%.</td>\n</tr>\n</tbody>\n</table></div>"}
  </div>
</article>

<LinkPreview />
