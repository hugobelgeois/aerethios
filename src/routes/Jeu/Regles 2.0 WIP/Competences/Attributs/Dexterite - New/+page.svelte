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
  <title>{"Dextérité - New"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Dextérité - New"}</h1>
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
	{@html "<blockquote>Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).<br>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Situation</th></tr></thead><tbody><tr><td>Acrobatie</td><td>Mobilité et esquive</td></tr><tr><td>Assassin</td><td>Attaque surprise</td></tr><tr><td>Bretteur</td><td>Combat précis et technique</td></tr><tr><td>Éclaireur</td><td>Déplacement discret</td></tr><tr><td>Voleur</td><td>Larcin et manipulation</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html "Secondaires"}</h2>
	{@html "<blockquote>Le joueur en choisi 1 tous les 3 points d'attribut (3, 6, 9, 12, 15, 18).<br>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th><strong>Principale</strong></th><th>Secondaire</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>Acrobatie</strong></td><td>Esquive</td><td>Action Bonus</td><td>Jusqu'au début de votre prochain tour, les attaques d'opportunité contre vous échouent.</td></tr><tr><td></td><td>Réception</td><td>Réaction</td><td>Après avoir été projeté ou être tombé, vous retombez sur vos pieds et ignorez les effets de renversement.</td></tr><tr><td></td><td>Voltige</td><td>Passif</td><td>Se relever, grimper ou franchir un obstacle ne coûte pas de déplacement supplémentaire.<br>Les dégâts de chute sont réduits de <code>10 × Dextérité(Acrobatie)</code> HP.</td></tr><tr><td><strong>Assassin</strong></td><td>Coup précis</td><td>Passif</td><td>Une attaque surprise ignore la DR.</td></tr><tr><td></td><td>Exécution</td><td>Action Bonus</td><td>Contre une cible surprise, effectuez immédiatement une seconde attaque si la première touche.<br>Cette seconde attaque ne bénificie plus de l'effet de surprise.</td></tr><tr><td></td><td>Rapide</td><td>Passif</td><td>Ajoute <code>Dextérité(Assassin)</code> aux dés de dégâts des armes courtes ou légères.</td></tr><tr><td><strong>Bretteur</strong></td><td>Ambidextre</td><td>Passif</td><td>Retire le désavantage sur la deuxième arme.</td></tr><tr><td></td><td>Point faible</td><td>Action Bonus</td><td>Crée une blessure exploitée par la prochaine attaque d'arme à corde ou d'arme courte qui ignore la DR.</td></tr><tr><td></td><td>Riposte</td><td>Réaction</td><td>Lorsqu'un adversaire vous manque au corps à corps, effectuez immédiatement une attaque.</td></tr><tr><td><strong>Éclaireur</strong></td><td>Embuscade</td><td>Réaction</td><td>Si un ennemi s'approche de vous, vous pouvez lui faire une attaque d'opportunité.</td></tr><tr><td></td><td>Repli</td><td>Action Bonus</td><td>Après une attaque, vous pouvez immédiatement vous déplacer de quelques mètres sans déclencher d'attaque d'opportunité.</td></tr><tr><td></td><td>Silencieux</td><td>Passif</td><td>Vos déplacements ne produisent aucun bruit perceptible tant que vous ne courez pas ou n'attaquez pas.</td></tr><tr><td><strong>Voleur</strong></td><td>Dissimulation</td><td>Passif</td><td>Les petits objets cachés sur vous ne peuvent pas être découverts.</td></tr><tr><td></td><td>Main légère</td><td>Passif</td><td>Un échec de larcin ne révèle pas automatiquement votre présence.</td></tr><tr><td></td><td>Opportuniste</td><td>Réaction</td><td>Echange l'arme d'une créature proche qui a raté son jet avec une arme de même type.<br>Si <code>1d20 + Dextérité(Voleur) >= AC + dé ennemi</code> et si l'arme n'est pas à 2 mains, ou à distance (lourd).</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html "Finales"}</h2>
	{@html "<blockquote>Au niveau 10, s'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.<br>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Description</th></tr></thead><tbody><tr><td><strong>Fantôme</strong></td><td>+ Les attaques surprises et d'opportunité contre vous échouent automatiquement. <br>+ Vous pouvez traverser les espaces occupés par des ennemis. <br>- Vous ne pouvez pas bénéficier d'une armure lourde et la DR des armures intermédiaires est divisée par 2.</td></tr><tr><td><strong>Fatality</strong></td><td>+ Après avoir porter le coup de grâce à un ennemi, la prochaine attaque dans ce combat devient critique.<br>Si elle ne touche pas, le critique est perdu.<br>- Tant que vous n'avez pas porté le coup de grâce à une créature durant ce combat, vous ne pouvez plus bénéficier des bonus d'attaque surprise, d'opportunité ou dans le dos après avoir été repéré.</td></tr><tr><td><strong>Lame parfaite</strong></td><td>+ Vos attaques critiques arrivent sur un résultat inférieur de 2 au seuil normal.<br><code>1d20 >= 19</code><br> <code>2dx -> 1 seul des dés fait x au lieu des 2</code><br>- Vos dégâts bruts diminuent de 25%.</td></tr></tbody></table></div>"}

	</section>
{/snippet}
