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
		{@render preamble()}
		{@render rappel()}
		{@render spcialisations()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("---\r\ntags:\r\n  - Règles\r\n---\r")}
{/snippet}

{#snippet rappel()}
	<section>
		<h3 id="rappel">{@html applyBase("Rappel")}</h3>
	{@html renderMarkdown("\r\n| Durée | Interruption | Amélioration | Déconstruction | Consommation | Echec                                                                                    |\r\n| :---: | :----------: | :----------: | :------------: | :----------: | :--------------------------------------------------------------------------------------- |\r\n|  2h   |     Oui      |     Non      |      Non       |      -       | - +1 ingrédient inférieur<br>- Possibilité d'effet négatif ajouté à l'objet (`1d20 < 5`) |\r\n\r\n")}
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
	{@html renderMarkdown("> Améliore les bijoux d'un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" data-wiki-fragment=\"\">Artisan</a> pour qu'ils émettent des magies que l'on ne maîtrise pas.\r\n> ~20pa/h\r\n\r\n| Commun | Peu Commun | Rare | Légendaire |\r\n| :----: | :--------: | :--: | :--------: |\r\n|  1d4   |    1d6     | 2d4  |    2d6     |\r\n\r\nAjoute une/des maîtrise.s magique.s selon le type d'ingrédient (à décider avec le Maître du Jeu).\r\nLa puissance de chaque magie dépend de la rareté de l'ingrédient qui lui est lié.\r\n\r\n```Exemple\r\nJ'ai un coeur de magma légendaire et une algue commune, ma bague fait 2d6 de Feu et 1d4 d'Eau.\r\n```\r\n\r")}

	</section>
{/snippet}

{#snippet cuisinier()}
	<section>
		<h3 id="cuisinier">{@html applyBase("Cuisinier")}</h3>
	{@html renderMarkdown("> Augmente les attributs pour 1 jour selon l'ingrédient le plus rare de la recette.\r\n> Le bonus s'applique à un attribut pour chaque ingrédient de rareté différente.\r\n> ~20pc/h\r\n\r\n| Commun | Peu Commun | Rare | Légendaire |\r\n| :----: | :--------: | :--: | :--------: |\r\n|   1    |     2      |  3   |     4      |\r\n\r\n```Exemple\r\nJ'ai 2 ingrédients (1 commun, 1 rare), j'ai 3 points bonus à répartir dans 2 attributs.\r\n```\r\n\r")}

	</section>
{/snippet}

{#snippet invocateur()}
	<section>
		<h3 id="invocateur">{@html applyBase("Invocateur")}</h3>
	{@html renderMarkdown("> Créé un élémentaire inerte qui prendra vie et puissance grâce à un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"\">Érudit</a>.\r\n> ~50pa/h\r\n\r\n| Commun | Peu Commun | Rare | Légendaire |\r\n| :----: | :--------: | :--: | :--------: |\r\n|  +12h  |    +1j     | +3j  |    +7j     |\r\n\r\nLa durée de vie de l'invocation dépend de la somme de la durée des ingrédients.\r\n\r")}

	</section>
{/snippet}

{#snippet potionniste()}
	<section>
		<h3 id="potionniste">{@html applyBase("Potionniste")}</h3>
	{@html renderMarkdown("> Fabrique des liquides consommables (potions) ou applicables (huiles) pour altérer le monde.\r\n> ~10pa/h\r\n\r")}
	{@render potions()}
	{@render huiles()}
	</section>
{/snippet}

{#snippet potions()}
	<section>
		<h4 id="potions">{@html applyBase("Potions")}</h4>
	{@html renderMarkdown("> Débloque une affinité ou une compétence.\r\n> Durée : 1 jour\r\n\r\n|              |  Commun  |      Peu Commun       |         Rare          |    Légendaire     |\r\n| ------------ | :------: | :-------------------: | :-------------------: | :---------------: |\r\n| Débloque     | Affinité | Compétence Secondaire | Compétence Principale | Compétence Finale |\r\n| Intoxication |    +1    |          +2           |          +4           |        +6         |\r\nLe seuil maximal tolérable pour un humain est 5.\r\n\tAu delà, le joueur perd chaque jour **2d6HP** par point d'intoxication supplémentaire.\r\nDormir réduit l’intoxication de 3.\r\n\r\nLes potions peuvent également avoir d'autres effets plus précis, tels que rendre des HP par exemple.\r\n\tDécrivez vos intentions dans votre recette et discutez-en avec votre MJ.\r\n\r")}

	</section>
{/snippet}

{#snippet huiles()}
	<section>
		<h4 id="huiles">{@html applyBase("Huiles")}</h4>
	{@html renderMarkdown("> Applique des <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles\" data-wiki-fragment=\"\">Effets</a> sur une arme dont la fréquence de déclenchement varient selon la rareté de l'ingrédient le plus rare.\r\n> La puissance est équivalente au nombre d'ingrédient de rareté différente.\r\n> Durée : 1 combat\r\n\r\n|  Commun  | Peu Commun |                 Rare                  |               Légendaire                |\r\n| :------: | :--------: | :-----------------------------------: | :-------------------------------------: |\r\n| par tour | par action | par tour<br>+ Cumulable à chaque coup | par action<br>+ Cumulable à chaque coup |\r\n\r\n```Exemple\r\nJ'ai 2 ingrédients (1 peu commun, 1 rare), à chaque fois que je touche l'ennemi (cumulable), les dégâts qu'il prend à chaque tour sont augmentés de 2.\r\n```\r\n\r\nEn plus des ingrédients et du résultat, le joueur doit indiquer le remède sur sa recette, qui s'utilise comme une Action Bonus.\r\n\r\nLes huiles ne font pas uniquement des dégâts, elles peuvent donner des malus différents (à valider auprès du Maître du Jeu).\r\nExemple :\r\n\r\n| Afflictions    | Effet                 | Remède      |\r\n| -------------- | --------------------- | ----------- |\r\n| Nausée         | -2 à son dé d'attaque | Vomir       |\r\n| Discombobulate | Dé d'attaque / 2      | Repos Court |")}

	</section>
{/snippet}
