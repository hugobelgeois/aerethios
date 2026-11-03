<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "rappel",
          "text": "Rappel",
          "level": 3
      },
      {
          "id": "spcialisations",
          "text": "Spécialisations",
          "level": 2
      },
      {
          "id": "bijoutier",
          "text": "Bijoutier",
          "level": 3
      },
      {
          "id": "cuisinier",
          "text": "Cuisinier",
          "level": 3
      },
      {
          "id": "invocateur",
          "text": "Invocateur",
          "level": 3
      },
      {
          "id": "potionniste",
          "text": "Potionniste",
          "level": 3
      },
      {
          "id": "potions",
          "text": "Potions",
          "level": 4
      },
      {
          "id": "huiles",
          "text": "Huiles",
          "level": 4
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Alchimie - New"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Alchimie - New"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render rappel()}
		{@render spcialisations()}
  </div>
</article>

<LinkPreview />

{#snippet rappel()}
	<section>
		<h3 id="rappel">{@html "Rappel"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Durée</th><th>Interruption</th><th>Amélioration</th><th>Déconstruction</th><th>Consommation</th><th>Echec</th></tr></thead><tbody><tr><td>2h</td><td>Oui</td><td>Non</td><td>Non</td><td>-</td><td>- +1 ingrédient inférieur<br>- Possibilité d'effet négatif ajouté à l'objet (<code>1d20 < 5</code>)</td></tr></tbody></table></div>"}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Rappel"} fragment={""} />

	</section>
{/snippet}

{#snippet spcialisations()}
	<section>
		<h2 id="spcialisations">{@html "Spécialisations"}</h2>

	{@render bijoutier()}
	{@render cuisinier()}
	{@render invocateur()}
	{@render potionniste()}
	</section>
{/snippet}

{#snippet bijoutier()}
	<section>
		<h3 id="bijoutier">{@html "Bijoutier"}</h3>
	{@html applyBase("<blockquote>Améliore les bijoux d'un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" data-wiki-fragment=\"\">Artisan</a> pour qu'ils émettent des magies que l'on ne maîtrise pas.<br>~20pa/h</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td>1d4</td><td>1d6</td><td>2d4</td><td>2d6</td></tr></tbody></table></div>\n<p>Ajoute une/des maîtrise.s magique.s selon le type d'ingrédient (à décider avec le Maître du Jeu).<br>\nLa puissance de chaque magie dépend de la rareté de l'ingrédient qui lui est lié.</p>\n<pre><code class=\"language-Exemple\">J'ai un coeur de magma légendaire et une algue commune, ma bague fait 2d6 de Feu et 1d4 d'Eau.</code></pre>")}

	</section>
{/snippet}

{#snippet cuisinier()}
	<section>
		<h3 id="cuisinier">{@html "Cuisinier"}</h3>
	{@html "<blockquote>Augmente les attributs pour 1 jour selon l'ingrédient le plus rare de la recette.<br>Le bonus s'applique à un attribut pour chaque ingrédient de rareté différente.<br>~20pc/h</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td>1</td><td>2</td><td>3</td><td>4</td></tr></tbody></table></div>\n<pre><code class=\"language-Exemple\">J'ai 2 ingrédients (1 commun, 1 rare), j'ai 3 points bonus à répartir dans 2 attributs.</code></pre>"}

	</section>
{/snippet}

{#snippet invocateur()}
	<section>
		<h3 id="invocateur">{@html "Invocateur"}</h3>
	{@html applyBase("<blockquote>Créé un élémentaire inerte qui prendra vie et puissance grâce à un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"\">Érudit</a>.<br>~50pa/h</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td>+12h</td><td>+1j</td><td>+3j</td><td>+7j</td></tr></tbody></table></div>\n<p>La durée de vie de l'invocation dépend de la somme de la durée des ingrédients.</p>")}

	</section>
{/snippet}

{#snippet potionniste()}
	<section>
		<h3 id="potionniste">{@html "Potionniste"}</h3>
	{@html "<blockquote>Fabrique des liquides consommables (potions) ou applicables (huiles) pour altérer le monde.<br>~10pa/h</blockquote>"}
	{@render potions()}
	{@render huiles()}
	</section>
{/snippet}

{#snippet potions()}
	<section>
		<h4 id="potions">{@html "Potions"}</h4>
	{@html "<blockquote>Débloque une affinité ou une compétence.<br>Durée : 1 jour</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td>Débloque</td><td>Affinité</td><td>Compétence Secondaire</td><td>Compétence Principale</td><td>Compétence Finale</td></tr><tr><td>Intoxication</td><td>+1</td><td>+2</td><td>+4</td><td>+6</td></tr></tbody></table></div>\n<p>Le seuil maximal tolérable pour un humain est 5.<br>\n\tAu delà, le joueur perd chaque jour <strong>2d6HP</strong> par point d'intoxication supplémentaire.<br>\nDormir réduit l’intoxication de 3.</p>\n<p>Les potions peuvent également avoir d'autres effets plus précis, tels que rendre des HP par exemple.<br>\n\tDécrivez vos intentions dans votre recette et discutez-en avec votre MJ.</p>"}

	</section>
{/snippet}

{#snippet huiles()}
	<section>
		<h4 id="huiles">{@html "Huiles"}</h4>
	{@html applyBase("<blockquote>Applique des <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles\" data-wiki-fragment=\"\">Effets</a> sur une arme dont la fréquence de déclenchement varient selon la rareté de l'ingrédient le plus rare.<br>La puissance est équivalente au nombre d'ingrédient de rareté différente.<br>Durée : 1 combat</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td>par tour</td><td>par action</td><td>par tour<br>+ Cumulable à chaque coup</td><td>par action<br>+ Cumulable à chaque coup</td></tr></tbody></table></div>\n<pre><code class=\"language-Exemple\">J'ai 2 ingrédients (1 peu commun, 1 rare), à chaque fois que je touche l'ennemi (cumulable), les dégâts qu'il prend à chaque tour sont augmentés de 2.</code></pre>\n<p>En plus des ingrédients et du résultat, le joueur doit indiquer le remède sur sa recette, qui s'utilise comme une Action Bonus.</p>\n<p>Les huiles ne font pas uniquement des dégâts, elles peuvent donner des malus différents (à valider auprès du Maître du Jeu).<br>\nExemple :</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Afflictions</th><th>Effet</th><th>Remède</th></tr></thead><tbody><tr><td>Nausée</td><td>-2 à son dé d'attaque</td><td>Vomir</td></tr><tr><td>Discombobulate</td><td>Dé d'attaque / 2</td><td>Repos Court</td></tr></tbody></table></div>")}

	</section>
{/snippet}
