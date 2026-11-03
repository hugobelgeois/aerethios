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
  <title>{"Force"}</title>
  <meta name="description" content={"Principales Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20). Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif). Compétence Situation…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Force"} />
  <meta property="og:description" content={"Principales Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20). Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif). Compétence Situation…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Force"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h2 data-heading=\"Principales\" dir=\"auto\" id=\"principales\">Principales</h2>\n<blockquote dir=\"auto\">\n<p>Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).<br>\nDouble le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Compétence</th>\n<th>Situation</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Athlétisme</td>\n<td>Effort physique prolongé (escalade, nage, lutte, …)</td>\n</tr>\n<tr>\n<td>Barbare</td>\n<td>Puissance (soulever, pousser, porter, bloquer, …)</td>\n</tr>\n<tr>\n<td>Monk</td>\n<td>Combat</td>\n</tr>\n<tr>\n<td>Paladin</td>\n<td>Résistance et contrôle de zone</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Secondaires\" dir=\"auto\" id=\"secondaires\">Secondaires</h2>\n<blockquote dir=\"auto\">\n<p>Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).<br>\nIl est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th><strong>Principale</strong></th>\n<th>Secondaire</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Athlétisme</strong></td>\n<td>Mule</td>\n<td>Ajoute 10 * Force(Athlétisme) à la charge maximale</td>\n</tr>\n<tr>\n<td></td>\n<td>Momentum</td>\n<td>Charger un ennemi lui inflige (5% * Force(Athlétisme)) de votre poids total<br>Lancer 1d20 par cible qui se trouve sur le chemin pour savoir si elle se fait toucher<br>Les dégâts de la charge peuvent être atténués si le joueur se prend des dégâts</td>\n</tr>\n<tr>\n<td><strong>Barbare</strong></td>\n<td>Destructeur</td>\n<td>Permet de casser ce qui ne devrait pas l'être (avec confirmation du MJ)</td>\n</tr>\n<tr>\n<td></td>\n<td>Bagarre</td>\n<td>Pour chaque point de Force, augmente le dé de dégâts à mains nues<br>Ajoute le matériau de l'armure aux dégâts finaux<br><em>1d4 -&gt; 1d6 -&gt; 1d8 -&gt; 1d10 -&gt; 1d12 (double les dés si Force(Barbare) = [6-10]</em></td>\n</tr>\n<tr>\n<td><strong>Monk</strong></td>\n<td>Martial</td>\n<td>Permet d'utiliser la maîtrise à 1 main avec les armes à 2 mains, et inversément</td>\n</tr>\n<tr>\n<td></td>\n<td>Bourrin</td>\n<td>Même si la DR n'est pas atteinte, la cible perd des HP valant (dés + Force(Monk))</td>\n</tr>\n<tr>\n<td><strong>Paladin</strong></td>\n<td>Impénétrable</td>\n<td>DR + (2 * Force(Paladin))</td>\n</tr>\n<tr>\n<td></td>\n<td>Muraille</td>\n<td>Les ennemis s'attaquent au joueur<br>Pour chaque attaque reçue, augmente les dégâts finaux de sa prochaine attaque par sa Force(Paladin)</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Finales\" dir=\"auto\" id=\"finales\">Finales</h2>\n<blockquote dir=\"auto\">\n<p>S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.<br>\nAu niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Compétence</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Cafard</strong></td>\n<td>+ 1x par repos sécurisé, si sa vie tombe entre -50 et 0 HP, lui permet de récupérer (1d4 * 10) HP<br>Le joueur peut choisir quand il récupère ses HP et perdre l'attention de l'ennemi<br>- Désavantage à tous ses jets jusqu'au prochain repos sécurisé</td>\n</tr>\n<tr>\n<td><strong>Matérialiste</strong></td>\n<td>+ Les dégâts font descendre la DR avant les HP<br>- Impossible d'achever une entité</td>\n</tr>\n</tbody>\n</table></div>"}
  </div>
</article>

<LinkPreview />
