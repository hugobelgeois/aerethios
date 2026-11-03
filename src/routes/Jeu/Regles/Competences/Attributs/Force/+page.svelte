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
  <title>{"Force"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Force"}</h1>
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
	{@html "<blockquote>Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).<br>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Situation</th></tr></thead><tbody><tr><td>Athlétisme</td><td>Effort physique prolongé (escalade, nage, lutte, …)</td></tr><tr><td>Barbare</td><td>Puissance (soulever, pousser, porter, bloquer, …)</td></tr><tr><td>Monk</td><td>Combat</td></tr><tr><td>Paladin</td><td>Résistance et contrôle de zone</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html "Secondaires"}</h2>
	{@html "<blockquote>Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).<br>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th><strong>Principale</strong></th><th>Secondaire</th><th>Description</th></tr></thead><tbody><tr><td><strong>Athlétisme</strong></td><td>Mule</td><td>Ajoute 10 * Force(Athlétisme) à la charge maximale</td></tr><tr><td></td><td>Momentum</td><td>Charger un ennemi lui inflige (5% * Force(Athlétisme)) de votre poids total<br>Lancer 1d20 par cible qui se trouve sur le chemin pour savoir si elle se fait toucher<br>Les dégâts de la charge peuvent être atténués si le joueur se prend des dégâts</td></tr><tr><td><strong>Barbare</strong></td><td>Destructeur</td><td>Permet de casser ce qui ne devrait pas l'être (avec confirmation du MJ)</td></tr><tr><td></td><td>Bagarre</td><td>Pour chaque point de Force, augmente le dé de dégâts à mains nues<br>Ajoute le matériau de l'armure aux dégâts finaux<br><em>1d4 -> 1d6 -> 1d8 -> 1d10 -> 1d12 (double les dés si Force(Barbare) = [6-10]</em></td></tr><tr><td><strong>Monk</strong></td><td>Martial</td><td>Permet d'utiliser la maîtrise à 1 main avec les armes à 2 mains, et inversément</td></tr><tr><td></td><td>Bourrin</td><td>Même si la DR n'est pas atteinte, la cible perd des HP valant (dés + Force(Monk))</td></tr><tr><td><strong>Paladin</strong></td><td>Impénétrable</td><td>DR + (2 * Force(Paladin))</td></tr><tr><td></td><td>Muraille</td><td>Les ennemis s'attaquent au joueur<br>Pour chaque attaque reçue, augmente les dégâts finaux de sa prochaine attaque par sa Force(Paladin)</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html "Finales"}</h2>
	{@html "<blockquote>S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.<br>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Description</th></tr></thead><tbody><tr><td><strong>Cafard</strong></td><td>+ 1x par repos sécurisé, si sa vie tombe entre -50 et 0 HP, lui permet de récupérer (1d4 * 10) HP<br>Le joueur peut choisir quand il récupère ses HP et perdre l'attention de l'ennemi<br>- Désavantage à tous ses jets jusqu'au prochain repos sécurisé</td></tr><tr><td><strong>Matérialiste</strong></td><td>+ Les dégâts font descendre la DR avant les HP<br>- Impossible d'achever une entité</td></tr></tbody></table></div>"}

	</section>
{/snippet}
