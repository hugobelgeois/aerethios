<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

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
  <title>{"Force - New"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Force - New"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render principales()}
		{@render secondaires()}
		{@render finales()}
  </div>
</article>

<LinkPreview />

{#snippet principales()}
	<section>
		<h2 id="principales">{@html "Principales"}</h2>
	{@html "<blockquote>Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).<br>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Situation</th></tr></thead><tbody><tr><td>Athlétisme</td><td>Déplacement de soi-même</td></tr><tr><td>Barbare</td><td>Puissance des coups portés</td></tr><tr><td>Brutalité</td><td>Capacité de destruction</td></tr><tr><td>Endurance</td><td>Résistance aux dégâts et contraintes physiques</td></tr><tr><td>Lutteur</td><td>Contrôle de créatures</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html "Secondaires"}</h2>
	{@html "<blockquote>Le joueur en choisi 1 tous les 3 points d'attribut (3, 6, 9, 12, 15, 18).<br>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th><strong>Principale</strong></th><th>Secondaire</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>Athlétisme</strong></td><td>Momentum</td><td>Action</td><td>Charger une créature lui inflige <code>0.1poids + PI actuel + Force(Athlétisme)</code> en dégâts et peut renverser les créatures sur la trajectoire.<br>S'arrêter sans prendre de dégâts est une Action Bonus.<br>Sinon subit 50% des dégâts qu'il inflige.</td></tr><tr><td></td><td>Mule</td><td>Passif</td><td>Ajoute <code>Force(Athlétisme)</code> aux PI maximum.</td></tr><tr><td></td><td>Rattrapage</td><td>Réaction</td><td>Lorsque vous tombez ou êtes poussé, vous pouvez tenter de vous rattraper avant la chute.</td></tr><tr><td><strong>Barbare</strong></td><td>Bagarre</td><td>Passif</td><td>Pour les coups de poings, l'armure est considérée comme une arme et les dégâts de son matériau sont ajoutés aux dégâts de l'arme.<br>Ajoute également <code>Force(Barbare)</code> aux dégâts.</td></tr><tr><td></td><td>Bourrin</td><td>Passif</td><td>Même si la DR absorbe l'attaque, la cible perd des HP égaux à <code>Force(Barbare)</code>.</td></tr><tr><td></td><td>Riposte</td><td>Réaction</td><td>Lorsqu'une attaque ennemie vous touche au corps-à-corps, vous pouvez immédiatement porter une attaque à mains nues.</td></tr><tr><td><strong>Brutalité</strong></td><td>Anti-Blindage</td><td>Action</td><td>Ouvre la garde du bouclier si le matériau de l'arme lui est supérieur.<br>La DR du bouclier n'est plus prise en compte jusqu'au prochain tour.</td></tr><tr><td></td><td>Destructeur</td><td>Passif</td><td>Permet de casser ce qui ne devrait pas l'être (avec confirmation du MJ).</td></tr><tr><td></td><td>Fracasseur</td><td>Passif</td><td>Double les dégâts contre les objets et structures.</td></tr><tr><td><strong>Endurance</strong></td><td>Encaisser</td><td>Réaction</td><td>Une fois par combat, les dégâts subis sont pris en compte à la fin du tour suivant.</td></tr><tr><td></td><td>Impénétrable</td><td>Action Bonus</td><td>Augmente la DR de <code>2 × Force(Endurance)</code> jusqu'au prochain tour.</td></tr><tr><td></td><td>Inébranlable</td><td>Passif</td><td>Les déplacements forcés et renversements sont ignorés si <code>Force(Endurance)</code> est supérieure à celle de l'adversaire.</td></tr><tr><td><strong>Lutteur</strong></td><td>Contre-Lutte</td><td>Réaction</td><td>Lorsqu'une créature tente de vous agripper, vous pouvez directement utiliser Projection pour l'éloigner sans que cela lui fasse des dégâts.</td></tr><tr><td></td><td>Étreinte</td><td>Action Bonus</td><td>Maintient une créature et lui inflige <code>Force(Lutteur)</code> dégâts au début de chacun de ses tours.<br>Ne peut plus rien faire à part se déplacer une fois une créature maintenue.<br>Sortir de l'étreinte nécessite <code>1d20 + Force(Athlétisme) >= 2 × Force(Lutteur) de celui qui nous tient</code></td></tr><tr><td></td><td>Projection</td><td>Action</td><td>Lancer une créature immobilisée pour <code>1d20 + Force(Lutteur)</code> de dégâts.<br>S'il touche une autre créature, celle-ci subit 50% des dégâts.</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html "Finales"}</h2>
	{@html "<blockquote>Au niveau 10, s'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.<br>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Description</th></tr></thead><tbody><tr><td><strong>Cafard</strong></td><td>+ Tant que vous êtes conscient, vous pouvez rester debout jusqu'à -50 HP.<br>- Désavantage à tous ses jets jusqu'au prochain repos sécurisé.</td></tr><tr><td><strong>Matérialiste</strong></td><td>+ Les dégâts font descendre la DR avant les HP (et sont réduits de 50% ?).<br>- Si votre armure perd de sa DR, vous perdez la moitié en HP.</td></tr><tr><td><strong>Titan</strong></td><td>+ Le modificateur <code>2 × Force</code> s'ajoute aux dégâts des armes.<br>- S'il attaque avec une arme, le joueur ne peut rien faire d'autre pendant son tour (Déplacement, Action Bonus, ..)</td></tr></tbody></table></div>"}

	</section>
{/snippet}
