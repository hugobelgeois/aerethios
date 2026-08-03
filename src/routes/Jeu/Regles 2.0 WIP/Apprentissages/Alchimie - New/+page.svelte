<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Alchimie - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Alchimie - New</h1>
  </header>
  <div class="markdown-rendered">
		{@render rappel()}
		{@render spcialisations()}
  </div>
</article>

<LinkPreview />

{#snippet rappel()}
	<section>
		<h3 id="rappel">{@html applyBase("Rappel")}</h3>
	{@html renderMarkdown("\n| Durée | Interruption | Amélioration | Déconstruction | Consommation | Echec                                                                                    |\n| :---: | :----------: | :----------: | :------------: | :----------: | :--------------------------------------------------------------------------------------- |\n|  2h   |      V       |      X       |       X        |      -       | - +1 ingrédient inférieur<br>- Possibilité d'effet négatif ajouté à l'objet (`1d20 < 5`) |\n\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Rappel"} fragment={""} />

	</section>
{/snippet}

{#snippet spcialisations()}
	<section>
		<h2 id="spcialisations">{@html applyBase("Spécialisations")}</h2>

	{@render bijoutier()}
	{@render cuisinier()}
	{@render invocateur()}
	{@render potionniste()}
	</section>
{/snippet}

{#snippet bijoutier()}
	<section>
		<h3 id="bijoutier">{@html applyBase("Bijoutier")}</h3>
	{@html renderMarkdown("> Améliore les bijoux d'un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" data-wiki-fragment=\"\">Artisan</a> pour qu'ils émettent des magies que l'on ne maîtrise pas.\n> ~20pa/h\n\n| Commun | Peu Commun | Rare | Légendaire |\n| :----: | :--------: | :--: | :--------: |\n|  1d4   |    1d6     | 2d4  |    2d6     |\n\nAjoute une/des maîtrise.s magique.s selon le type d'ingrédient (à décider avec le Maître du Jeu).\nLa puissance de chaque magie dépend de la rareté de l'ingrédient qui lui est lié.\n\n\tExemple : J'ai un coeur de magma légendaire et une algue commune, ma bague fait 2d8 de Feu et 1d6 d'Eau.\n")}

	</section>
{/snippet}

{#snippet cuisinier()}
	<section>
		<h3 id="cuisinier">{@html applyBase("Cuisinier")}</h3>
	{@html renderMarkdown("> Augmente les attributs pour 1 jour selon l'ingrédient le plus rare de la recette.\n> Le bonus s'applique à un attribut pour chaque ingrédient de rareté différente.\n> ~20pc/h\n\n| Commun | Peu Commun | Rare | Légendaire |\n| :----: | :--------: | :--: | :--------: |\n|   1    |     2      |  3   |     4      |\n\n\tExemple : J'ai 2 ingrédients (1 commun, 1 rare), j'ai 3 points bonus dans 2 attributs.\n")}

	</section>
{/snippet}

{#snippet invocateur()}
	<section>
		<h3 id="invocateur">{@html applyBase("Invocateur")}</h3>
	{@html renderMarkdown("> Créé un élémentaire inerte qui prendra vie et puissance grâce à un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"\">Érudit</a>.\n> ~50pa/h\n\n| Commun | Peu Commun | Rare | Légendaire |\n| :----: | :--------: | :--: | :--------: |\n|  +12h  |    +1j     | +3j  |    +7j     |\n\nLa durée de vie de l'invocation dépend de la somme de la durée des ingrédients.\n")}

	</section>
{/snippet}

{#snippet potionniste()}
	<section>
		<h3 id="potionniste">{@html applyBase("Potionniste")}</h3>
	{@html renderMarkdown("> Fabrique des liquides consommables (potions) ou applicables (huiles) pour altérer le monde.\n> ~10pa/h\n")}
	{@render potions()}
	{@render huiles()}
	</section>
{/snippet}

{#snippet potions()}
	<section>
		<h4 id="potions">{@html applyBase("Potions")}</h4>
	{@html renderMarkdown("> Débloque une affinité ou une compétence.\n> Durée : 1 jour\n\n|              |  Commun  |      Peu Commun       |         Rare          |    Légendaire     |\n| ------------ | :------: | :-------------------: | :-------------------: | :---------------: |\n| Débloque     | Affinité | Compétence Secondaire | Compétence Principale | Compétence Finale |\n| Intoxication |    +1    |          +2           |          +4           |        +6         |\nLe seuil maximal tolérable pour un humain est 5.\n\tAu delà, le joueur perd chaque jour **2d6HP** par point d'intoxication supplémentaire.\nDormir réduit l’intoxication de 3.\n\nLes potions peuvent également avoir d'autres effets plus précis, tels que rendre des HP par exemple.\n\tDécrivez vos intentions dans votre recette et discutez-en avec votre MJ.\n")}

	</section>
{/snippet}

{#snippet huiles()}
	<section>
		<h4 id="huiles">{@html applyBase("Huiles")}</h4>
	{@html renderMarkdown("> Applique des <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles\" data-wiki-fragment=\"\">Effets</a> sur une arme dont la fréquence de déclenchement varient selon la rareté de l'ingrédient le plus rare.\n> La puissance est équivalente au nombre d'ingrédient de rareté différente.\n> Durée : 1 combat\n\n|  Commun  | Peu Commun |                 Rare                  |               Légendaire                |\n| :------: | :--------: | :-----------------------------------: | :-------------------------------------: |\n| par tour | par action | par tour<br>+ Cumulable à chaque coup | par action<br>+ Cumulable à chaque coup |\n\n\tExemple : J'ai 2 ingrédients (1 peu commun, 1 rare), à chaque fois que je touche l'ennemi (cumulable), les dégâts qu'il prend à chaque tour sont augmentés de 2.\n\nEn plus des ingrédients et du résultat, le joueur doit indiquer le remède sur sa recette, qui s'utilise comme une Action.\n\nLes huiles ne font pas uniquement des dégâts, elles peuvent donner des malus différents (à valider auprès du Maître du Jeu).\nExemple :\n\n| Afflictions    | Effet                 | Remède      |\n| -------------- | --------------------- | ----------- |\n| Nausée         | -2 à son dé d'attaque | Vomir       |\n| Discombobulate | Dé d'attaque / 2      | Repos Court |")}

	</section>
{/snippet}
