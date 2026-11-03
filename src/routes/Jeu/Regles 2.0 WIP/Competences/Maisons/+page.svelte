<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "arvens",
          "text": "Arvens",
          "level": 2
      },
      {
          "id": "runild---wip",
          "text": "Runild - WIP",
          "level": 2
      },
      {
          "id": "scienctes---wip",
          "text": "Scienctes - WIP",
          "level": 2
      },
      {
          "id": "templis---wip",
          "text": "Templis - WIP",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Maisons"}</title>
  <meta name="description" content={"Chaque nouveau rang garde les avantages des rangs précédents. Arvens Ces rangs se gagnent en aidant le peuple de diverses manières. Si un Arvens rate trop souvent ses missions ou n'est plus actif,…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Maisons"} />
  <meta property="og:description" content={"Chaque nouveau rang garde les avantages des rangs précédents. Arvens Ces rangs se gagnent en aidant le peuple de diverses manières. Si un Arvens rate trop souvent ses missions ou n'est plus actif,…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Maisons"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<blockquote dir=\"auto\">\n<p>Chaque nouveau rang garde les avantages des rangs précédents.</p>\n</blockquote>\n<h2 data-heading=\"Arvens\" dir=\"auto\" id=\"arvens\">Arvens</h2>\n<blockquote dir=\"auto\">\n<p>Ces rangs se gagnent en aidant le peuple de diverses manières.<br>\nSi un Arvens rate trop souvent ses missions ou n'est plus actif, ses rangs vont diminuer petit à petit (sauf une fois qu'il devient une légende).</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th><strong>Rang</strong></th>\n<th>Prérequis</th>\n<th>Avantages</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Bronze</strong></td>\n<td>Niveau 1 à 3 = Poids morts</td>\n<td>Tavernes Arvens gratuites (ingrédients Déchets)</td>\n</tr>\n<tr>\n<td><strong>Argent</strong></td>\n<td>Niveau 4 à 7 = Débutants</td>\n<td>Tavernes (ingrédients Communs)<br>Implant de 5 crystaux offerts<br>Auberges Arvens gratuites</td>\n</tr>\n<tr>\n<td><strong>Or</strong></td>\n<td>Niveau 8 à 12 = Aventuriers</td>\n<td>Tavernes (ingrédients Peu Communs)<br>Implant de 5 crystaux offerts<br>Salles de métiers Arvens gratuites<br>Transports fournis (terrestre)</td>\n</tr>\n<tr>\n<td><strong>Platine</strong></td>\n<td>Niveau 13 à 18 = Héros</td>\n<td>Tavernes (ingrédients Rares)<br>Implant de 5 crystaux offerts<br>Rations de voyage fournies<br>Transports (maritime)</td>\n</tr>\n<tr>\n<td><strong>Légendes</strong></td>\n<td>Niveau 19 à 20 = Légendes<br>Se débloque selon le continent :<br>- <strong>Diamant</strong> (Ovliin),<br>- <strong>Emeraude</strong> (Nirina),<br>- <strong>Rubis</strong> (Kothula),<br>- <strong>Topaze</strong> (Suraja).</td>\n<td>Tavernes (ingrédients Légendaires)<br>Implant de 5 crystaux offerts<br>Réparation de l'équipement gratuit<br>Transports (téléportation)</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Runild - WIP\" dir=\"auto\" id=\"runild---wip\">Runild - WIP</h2>\n<blockquote dir=\"auto\">\n<p>Rejoindre les Runild rend visible au public la fortune et les biens du joueurs.<br>\nCela peut attirer l'intérêt de multiples personnes.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th><strong>Rang</strong></th>\n<th>Prérequis</th>\n<th>Avantages</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Travailleur</strong></td>\n<td>1 po</td>\n<td>Accès à l'hôtel des ventes</td>\n</tr>\n<tr>\n<td><strong>Nouveau Riche</strong></td>\n<td>50 po</td>\n<td>La banque ne taxe pas les retraits</td>\n</tr>\n<tr>\n<td><strong>Propriétaire</strong></td>\n<td>100 po</td>\n<td>Octroie 10% de réduction cher les marchands Runild</td>\n</tr>\n<tr>\n<td><strong>Gérant</strong></td>\n<td>500 po</td>\n<td>Le compte bancaire peut être bloqué tous les mois pour que la somme actuellement présente engrange 1% de bénéfices</td>\n</tr>\n<tr>\n<td><strong>Capitaliste</strong></td>\n<td>2000 po</td>\n<td>Le compte bancaire peut être bloqué tous les mois pour que la somme actuellement présente engrange <strong>2%</strong> de bénéfices</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Scienctes - WIP\" dir=\"auto\" id=\"scienctes---wip\">Scienctes - WIP</h2>\n<blockquote dir=\"auto\">\n<p>Se concentrer permet soit de régénérer des crystaux, soit de prendre 10/20 au prochain jet.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th><strong>Rang</strong></th>\n<th>Prérequis</th>\n<th>Régénération passive</th>\n<th>Se concentrer</th>\n<th>Dégâts magiques</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Initié</strong></td>\n<td></td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td><strong>Mage</strong></td>\n<td></td>\n<td>+1</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td><strong>Archimage</strong></td>\n<td></td>\n<td>+2</td>\n<td>+1 Crystal</td>\n<td>-</td>\n</tr>\n<tr>\n<td><strong>Hiéromage</strong></td>\n<td></td>\n<td>+3</td>\n<td>+2 Crystaux</td>\n<td>+2</td>\n</tr>\n<tr>\n<td><strong>Magister</strong></td>\n<td></td>\n<td>+4</td>\n<td>+3 Crystaux</td>\n<td>+4</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Templis - WIP\" dir=\"auto\" id=\"templis---wip\">Templis - WIP</h2>\n<blockquote dir=\"auto\">\n<p>Les rangs des Templis n'ont pas d'hiérarchie et peuvent être obtenus à tout moment.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th><strong>Rang</strong></th>\n<th>Prérequis</th>\n<th>Avantages</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Pèlerin</strong></td>\n<td>Pèleriner les 77 Temples pieds nus</td>\n<td></td>\n</tr>\n<tr>\n<td><strong>Passeur</strong></td>\n<td>Purger un village de la souffrance</td>\n<td></td>\n</tr>\n<tr>\n<td><strong>Oracle</strong></td>\n<td>Offrir un sens aux Dieux soi-même (généralement la vue)</td>\n<td>Possibilité de détecter les entités planaires et d'être moins affecté par leur présence</td>\n</tr>\n<tr>\n<td><strong>Forgeron</strong></td>\n<td>Supporter une présence divine ?</td>\n<td>Possibilité d'emprunter 1 objet béni aux Templis<br>\tIl peut être échangé et conservé aussi longtemps qu'on le souhaite, mais on ne peut en avoir qu'un</td>\n</tr>\n<tr>\n<td><strong>Juge</strong></td>\n<td>Purifier un démon</td>\n<td></td>\n</tr>\n</tbody>\n</table></div>"}
  </div>
</article>

<LinkPreview />
