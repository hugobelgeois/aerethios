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
  <title>{"Charisme - New"}</title>
  <meta name="description" content={"Principales Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20). Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif). Compétence Situation…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Charisme - New"} />
  <meta property="og:description" content={"Principales Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20). Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif). Compétence Situation…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Charisme - New"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h2 data-heading=\"Principales\" dir=\"auto\" id=\"principales\">Principales</h2>\n<blockquote dir=\"auto\">\n<p>Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).<br>\nDouble le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Compétence</th>\n<th>Situation</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Diplomate</td>\n<td>Persuasion et négociation</td>\n</tr>\n<tr>\n<td>Intimidant</td>\n<td>Intimidation et domination</td>\n</tr>\n<tr>\n<td>Meneur</td>\n<td>Commandement et inspiration</td>\n</tr>\n<tr>\n<td>Trompeur</td>\n<td>Mensonge et tromperie</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Secondaires\" dir=\"auto\" id=\"secondaires\">Secondaires</h2>\n<blockquote dir=\"auto\">\n<p>Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).<br>\nIl est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th><strong>Principale</strong></th>\n<th>Secondaire</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Diplomate</strong></td>\n<td>Apaisement</td>\n<td>Action Bonus</td>\n<td>Une entité perd son état agressif jusqu'à son prochain tour ou subit un désavantage sur sa prochaine action offensive (non cumulable avec Encouragement).</td>\n</tr>\n<tr>\n<td></td>\n<td>Encouragement</td>\n<td>Action Bonus</td>\n<td>Donner un avantage à 1 entité (non cumulable avec Apaisement)</td>\n</tr>\n<tr>\n<td></td>\n<td>Médiation</td>\n<td>Réaction</td>\n<td>Lorsqu'une créature attaque, s'il y a une autre créature proche, vous pouvez détourner son attaque vers celle-ci.<br>Si <code>1d10 + Charisme(Diplomate) &gt;= Mental(Résistance) de la cible</code></td>\n</tr>\n<tr>\n<td></td>\n<td>Trêve</td>\n<td>Action</td>\n<td>Deux créatures ne peuvent pas s'attaquer jusqu'au début de votre prochain tour.<br>Si <code>1d10 + Charisme(Diplomate) &gt;= Mental(Résistance) de la cible</code>.</td>\n</tr>\n<tr>\n<td><strong>Intimidant</strong></td>\n<td>Défi</td>\n<td>Action Bonus</td>\n<td>Si la créature désignée attaque une autre cible que vous, elle subit un désavantage sur son attaque.</td>\n</tr>\n<tr>\n<td></td>\n<td>Terreur</td>\n<td>Passif</td>\n<td>Les créatures dont <code>Mental(Résistance)</code> est inférieur à votre <code>Charisme(Intimidant)</code> ne vous choisissent pas comme première cible tant qu'une autre menace existe.</td>\n</tr>\n<tr>\n<td></td>\n<td>Soumission</td>\n<td>Passif</td>\n<td>Lorsqu'un ennemi meurt ou abandonne, les créatures proches de niveau inférieur fuient ou se rendent.<br>Si <code>leur Mental(Résistance) &lt; votre Charisme(Intimidant)</code>.</td>\n</tr>\n<tr>\n<td></td>\n<td>Regard noir</td>\n<td>Action Bonus</td>\n<td>Une créature proche perd son Action Bonus.<br>Si <code>1d10 + Charisme(Intimidant) &gt;= Mental(Résistance) de la cible</code>.</td>\n</tr>\n<tr>\n<td><strong>Meneur</strong></td>\n<td>Coordination</td>\n<td>Réaction</td>\n<td>Lorsqu'un allié proche rate une action, vous pouvez ajouter votre <code>Charisme(Meneur)</code> à son jet pour tenter de le faire réussir.</td>\n</tr>\n<tr>\n<td></td>\n<td>Formation</td>\n<td>Passif</td>\n<td>Pour chaque allié adjacent à vous (&lt; 2m), vous et ces alliés gagnez <code>+2 AC</code>.</td>\n</tr>\n<tr>\n<td></td>\n<td>Inspiration</td>\n<td>Action</td>\n<td>Une condition négative que vous subissez peut être convertie en un bonus équivalent jusqu'à la fin de votre prochain tour.</td>\n</tr>\n<tr>\n<td></td>\n<td>Ralliement</td>\n<td>Action Bonus</td>\n<td>Vous pouvez transférer une condition négative d'un allié vers vous.</td>\n</tr>\n<tr>\n<td><strong>Trompeur</strong></td>\n<td>Diversion</td>\n<td>Action Bonus</td>\n<td>Une créature détourne son attention de vous vers un allié de votre choix jusqu'au prochain tour.</td>\n</tr>\n<tr>\n<td></td>\n<td>Faux espoir</td>\n<td>Action Bonus</td>\n<td>Une cible croit momentanément qu'une action ou un événement lui est favorable, réduisant l'efficacité de sa prochaine action offensive.</td>\n</tr>\n<tr>\n<td></td>\n<td>Manipulation</td>\n<td>Action</td>\n<td>Une fois par tour, vous pouvez transférer une condition entre deux entités consentantes ou non, si la situation le permet.</td>\n</tr>\n<tr>\n<td></td>\n<td>Mortel</td>\n<td>Réaction</td>\n<td>Une fois par combat, le joueur peut simuler son comas/ sa mort pour perdre l'attention des ennemis.<br>Il se relève lorsqu'il le souhaite.</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Finales\" dir=\"auto\" id=\"finales\">Finales</h2>\n<blockquote dir=\"auto\">\n<p>Au niveau 10, s'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.<br>\nAu niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Compétence</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Veinard</strong></td>\n<td>+ Peut utiliser <strong>1 token</strong> pour le transformer en réussite.<br>- Impossible d'utilises ses tokens pour éviter le comas.</td>\n</tr>\n<tr>\n<td><strong>Epicentre</strong></td>\n<td>+ Les alliés proches bénéficient de vos réussites critiques.<br>- Les effets négatifs que vous subissez sont doublés.</td>\n</tr>\n<tr>\n<td><strong>Tyran</strong></td>\n<td>Par défaut, les créatures faibles évitent de vous attaquer, et les créatures puissantes vous prennent pour cible.<br>Utiliser <strong>1 token</strong> pour inverser cet effet pour le combat en cours.</td>\n</tr>\n<tr>\n<td><strong>Symbole</strong></td>\n<td>Votre parole peut créer un engagement magique/social (serment, promesse, pacte).<br>Celui qui demande le pacte subit une pénalité s'il le rompt de par ses actions volontaires.<br><em>(s'il est attaché contre son gré et ne peut pas tenir sa parole, il n'est pas pénalisé)</em><br>Utiliser <strong>4 tokens</strong> pour créer cet engagement.</td>\n</tr>\n</tbody>\n</table></div>"}
  </div>
</article>

<LinkPreview />
