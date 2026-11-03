<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "bndictions-complexes",
          "text": "Bénédictions Complexes",
          "level": 2
      },
      {
          "id": "bndictions-simples",
          "text": "Bénédictions Simples",
          "level": 2
      },
      {
          "id": "bndiction-conservatrice",
          "text": "Bénédiction Conservatrice",
          "level": 3
      },
      {
          "id": "bndiction-opportune",
          "text": "Bénédiction Opportune",
          "level": 3
      },
      {
          "id": "bndiction-explosive",
          "text": "Bénédiction Explosive",
          "level": 3
      },
      {
          "id": "bndiction-hasardeuse",
          "text": "Bénédiction Hasardeuse",
          "level": 3
      },
      {
          "id": "bndiction-double",
          "text": "Bénédiction Double",
          "level": 3
      },
      {
          "id": "bndiction-fratricide",
          "text": "Bénédiction Fratricide",
          "level": 3
      },
      {
          "id": "bndiction-de-moyenne",
          "text": "Bénédiction de Moyenne",
          "level": 3
      },
      {
          "id": "bndiction-de-la-pice",
          "text": "Bénédiction de la pièce",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Bénédictions"}</title>
  <meta name="description" content={"Lorsqu'une divinité le souhaite, elle peut accorder une bénédiction à une entité, lui offrant un incroyable pouvoir, ainsi qu'une lourde responsabilité. Cette entité ne peut avoir qu'une bénédiction…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Bénédictions"} />
  <meta property="og:description" content={"Lorsqu'une divinité le souhaite, elle peut accorder une bénédiction à une entité, lui offrant un incroyable pouvoir, ainsi qu'une lourde responsabilité. Cette entité ne peut avoir qu'une bénédiction…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Bénédictions"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<blockquote dir=\"auto\">\n<p>Lorsqu'une divinité le souhaite, elle peut accorder une bénédiction à une entité, lui offrant un incroyable pouvoir, ainsi qu'une lourde responsabilité.<br>\nCette entité ne peut avoir qu'une bénédiction et se doit d'accomplir le souhait du dieu s'il ne veut en subir les représailles.<br>\nLe type de souhait ne dépend pas du type de bénédiction reçu.</p>\n</blockquote>\n<h2 data-heading=\"Bénédictions Complexes\" dir=\"auto\" id=\"bndictions-complexes\">Bénédictions Complexes</h2>\n<p dir=\"auto\">Les bénédictions complexes sont très rares et ne possède aucune règle particulière, empêchant leur recensement correct.</p>\n<h2 data-heading=\"Bénédictions Simples\" dir=\"auto\" id=\"bndictions-simples\">Bénédictions Simples</h2>\n<p dir=\"auto\">Les bénédictions simples offrent un pouvoir précis, régis par des lois, permettant leur recensement.</p>\n<h3 data-heading=\"Bénédiction Conservatrice\" dir=\"auto\" id=\"bndiction-conservatrice\">Bénédiction Conservatrice</h3>\n<p dir=\"auto\">Le joueur lance 1d20 et conserve le résultat.</p>\n<p dir=\"auto\">A chaque fois qu'il lance 1d20, il peut échanger son résultat avec celui qui est conservé.</p>\n<h3 data-heading=\"Bénédiction Opportune\" dir=\"auto\" id=\"bndiction-opportune\">Bénédiction Opportune</h3>\n<p dir=\"auto\">A chaque réussite critique sur 1d20, le joueur peut conserver pour l'échanger avec un futur jet.</p>\n<p dir=\"auto\">Il peut stocker autant de D20 d'opportunités qu'il veut, mais ne peut en utiliser que 1 par repos dans une lieu sécurisé.</p>\n<p dir=\"auto\">Il peut ensuite utiliser ces D20 d'opportunité pour échanger des jets de dés de son choix.<br>\nQue ce soit entre ennemis, entre alliés, ou entre les deux.</p>\n<h3 data-heading=\"Bénédiction Explosive\" dir=\"auto\" id=\"bndiction-explosive\">Bénédiction Explosive</h3>\n<p dir=\"auto\">A chaque fois que tous les dés du joueur roulent leur valeur maximale, le joueur peut relancer ses dés et accumuler les résultats.</p>\n<p dir=\"auto\">Cela ne marche que pour les jets d'attaque et si on jette au moins 2 dés.</p>\n<h3 data-heading=\"Bénédiction Hasardeuse\" dir=\"auto\" id=\"bndiction-hasardeuse\">Bénédiction Hasardeuse</h3>\n<p dir=\"auto\">Le joueur peut lancer 1d10 pour modifier ses dégâts :</p>\n<ul>\n<li dir=\"auto\">1 = Diviser par 2</li>\n<li dir=\"auto\">2-5 = Soustraire par 1d4 x 10%</li>\n<li dir=\"auto\">5-9 = Additionner par 1d4 x 10%</li>\n<li dir=\"auto\">10 = Multiplier par 2</li>\n</ul>\n<h3 data-heading=\"Bénédiction Double\" dir=\"auto\" id=\"bndiction-double\">Bénédiction Double</h3>\n<p dir=\"auto\">Le joueur peut doubler 1 dé par jet et accumuler les résultats.</p>\n<p dir=\"auto\">Lorsqu'il fait cela, les modificateurs du jet sont réduits de la valeur sélectionnée.</p>\n<blockquote dir=\"auto\">\n<p>Ex : 4d6 + (12) = 1,2,3,5 (on double le 5) -&gt; 1,2,3,5,<strong>5</strong> + (12 <strong>- 5</strong>) = 16 + 7</p>\n</blockquote>\n<h3 data-heading=\"Bénédiction Fratricide\" dir=\"auto\" id=\"bndiction-fratricide\">Bénédiction Fratricide</h3>\n<p dir=\"auto\">Lorsque le joueur fait un échec critique, il peut le transformer en réussite critique, mais transforme les jets de ses alliés en échec pour ce tour.</p>\n<h3 data-heading=\"Bénédiction de Moyenne\" dir=\"auto\" id=\"bndiction-de-moyenne\">Bénédiction de Moyenne</h3>\n<p dir=\"auto\">Le joueur lance 2D10 au lieu de 1D20.</p>\n<p dir=\"auto\">L'échec critique devient 2 au lieu de 1 sur le résultat total.</p>\n<h3 data-heading=\"Bénédiction de la pièce\" dir=\"auto\" id=\"bndiction-de-la-pice\">Bénédiction de la pièce</h3>\n<p dir=\"auto\">Le joueur peut remplacer n'importe quel d20 en pile ou face critique.</p>\n<p dir=\"auto\">Cette compétence se recharge lors d'un repos dans un lieu sécurisée.</p>"}
  </div>
</article>

<LinkPreview />
