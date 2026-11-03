<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "aveugle",
          "text": "Aveugle",
          "level": 2
      },
      {
          "id": "charm",
          "text": "Charmé",
          "level": 2
      },
      {
          "id": "assourdi",
          "text": "Assourdi",
          "level": 2
      },
      {
          "id": "puisement",
          "text": "Épuisement",
          "level": 2
      },
      {
          "id": "effray",
          "text": "Effrayé",
          "level": 2
      },
      {
          "id": "attrap",
          "text": "Attrapé",
          "level": 2
      },
      {
          "id": "incapacit",
          "text": "Incapacité",
          "level": 2
      },
      {
          "id": "invisible",
          "text": "Invisible",
          "level": 2
      },
      {
          "id": "paralys",
          "text": "Paralysé",
          "level": 2
      },
      {
          "id": "ptrifi",
          "text": "Pétrifié",
          "level": 2
      },
      {
          "id": "couch",
          "text": "Couché",
          "level": 2
      },
      {
          "id": "retenu",
          "text": "Retenu",
          "level": 2
      },
      {
          "id": "abasourdi",
          "text": "Abasourdi",
          "level": 2
      },
      {
          "id": "inconscient",
          "text": "Inconscient",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Conditions"}</title>
  <meta name="description" content={"Basé sur les règles de [DnD 5e - Appendix A](https://www.dndbeyond.com/sources/dnd/basic-rules-2014/combat Personnalisé pour nos jdr. Aveugle Une créature aveuglée ne peut pas voir et échoue…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Conditions"} />
  <meta property="og:description" content={"Basé sur les règles de [DnD 5e - Appendix A](https://www.dndbeyond.com/sources/dnd/basic-rules-2014/combat Personnalisé pour nos jdr. Aveugle Une créature aveuglée ne peut pas voir et échoue…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Conditions"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>Basé sur les règles de [DnD 5e - Appendix A](<a data-tooltip-position=\"top\" aria-label=\"https://www.dndbeyond.com/sources/dnd/basic-rules-2014/appendix-a-conditions\" rel=\"noopener nofollow\" class=\"external-link\" href=\"https://www.dndbeyond.com/sources/dnd/basic-rules-2014/appendix-a-conditions\" target=\"_blank\">https://www.dndbeyond.com/sources/dnd/basic-rules-2014/combat</a><br>\nPersonnalisé pour nos jdr.</p>\n</blockquote>\n<h2 data-heading=\"Aveugle\" dir=\"auto\" id=\"aveugle\">Aveugle</h2>\n<ul>\n<li dir=\"auto\">Une créature aveuglée ne peut pas voir et échoue automatiquement à toute vérification de capacité nécessitant la vue.</li>\n<li dir=\"auto\">Les jets d'attaque contre la créature ont un avantage, et les jets d'attaque de la créature ont un inconvénient.</li>\n</ul>\n<h2 data-heading=\"Charmé\" dir=\"auto\" id=\"charm\">Charmé</h2>\n<ul>\n<li dir=\"auto\">Une créature charmée ne peut pas attaquer le charmeur ni cibler le charmeur avec des capacités nuisibles ou des effets magiques.</li>\n<li dir=\"auto\">Le charmeur a l'avantage, à chaque test de capacité, d'interagir socialement avec la créature.</li>\n</ul>\n<h2 data-heading=\"Assourdi\" dir=\"auto\" id=\"assourdi\">Assourdi</h2>\n<ul>\n<li dir=\"auto\">Une créature assourdie ne peut pas entendre et échoue automatiquement à tout contrôle de capacité nécessitant une audition.</li>\n</ul>\n<h2 data-heading=\"Épuisement\" dir=\"auto\" id=\"puisement\">Épuisement</h2>\n<p dir=\"auto\">Certaines capacités particulières et certains risques environnementaux, tels que la famine et les effets à long terme des températures glaciales ou torrides, peuvent conduire à une condition particulière appelée épuisement. L’épuisement est mesuré en six niveaux. Un effet peut donner à une créature un ou plusieurs niveaux d’épuisement, comme spécifié dans la description de l’effet.</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Niveau</th>\n<th>Effet</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Inconvénient des contrôles de capacité</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Vitesse réduite de moitié</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Inconvénient sur les lancers d'attaque et les lancers de sauvegarde</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Point de vie maximum divisé par deux</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Vitesse réduite à 0</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Mort</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\">Si une créature déjà épuisée subit un autre effet qui provoque l’épuisement, son niveau actuel d’épuisement augmente de la quantité spécifiée dans la description de l’effet.</p>\n<p dir=\"auto\">Une créature subit l’effet de son niveau d’épuisement actuel ainsi que de tous les niveaux inférieurs. Par exemple, une créature souffrant d’épuisement de niveau 2 voit sa vitesse réduite de moitié et est désavantagée lors des tests de capacité.</p>\n<p dir=\"auto\">Un effet qui supprime l'épuisement réduit son niveau comme spécifié dans la description de l'effet, tous les effets d'épuisement se terminant si le niveau d'épuisement d'une créature est réduit en dessous de 1.<br>\nTerminer un long repos réduit le niveau d’épuisement d’une créature de 1, à condition que la créature ait également ingéré de la nourriture et des boissons.&nbsp;De plus, être ressuscité d’entre les morts réduit le niveau d’épuisement d’une créature de 1.</p>\n<h2 data-heading=\"Effrayé\" dir=\"auto\" id=\"effray\">Effrayé</h2>\n<ul>\n<li dir=\"auto\">Une créature effrayée est désavantagée lors des tests de capacité et des lancers d'attaque alors que la source de sa peur est à portée de vue.</li>\n<li dir=\"auto\">La créature ne peut pas volontairement se rapprocher de la source de sa peur.</li>\n</ul>\n<h2 data-heading=\"Attrapé\" dir=\"auto\" id=\"attrap\">Attrapé</h2>\n<ul>\n<li dir=\"auto\">La vitesse d'une créature attrapée devient 0 et elle ne peut bénéficier d'aucun bonus à sa vitesse.</li>\n<li dir=\"auto\">La condition prend fin si l'attrapeur est&nbsp;<a data-tooltip-position=\"top\" aria-label=\"Conditions &gt; Incapable\" href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#incapable\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Incapable\">incapacité</a>.</li>\n<li dir=\"auto\">La condition prend également fin si un effet retire la créature aux prises de la portée de l'attrapeur.</li>\n</ul>\n<h2 data-heading=\"Incapacité\" dir=\"auto\" id=\"incapacit\">Incapacité</h2>\n<ul>\n<li dir=\"auto\">Une créature incapacité ne peut pas agir ou réagir.</li>\n</ul>\n<h2 data-heading=\"Invisible\" dir=\"auto\" id=\"invisible\">Invisible</h2>\n<ul>\n<li dir=\"auto\">Une créature invisible est impossible à voir sans l’aide de la magie ou d’un sens particulier. Dans le but de se cacher, la créature est fortement obscurcie. L'emplacement de la créature peut être détecté par tout bruit qu'elle émet ou par toute trace qu'elle laisse.</li>\n<li dir=\"auto\">Les jets d'attaque contre la créature présentent un inconvénient, et les jets d'attaque de la créature présentent un avantage.</li>\n</ul>\n<h2 data-heading=\"Paralysé\" dir=\"auto\" id=\"paralys\">Paralysé</h2>\n<ul>\n<li dir=\"auto\">Une créature paralysée est&nbsp;<a data-tooltip-position=\"top\" aria-label=\"Conditions &gt; Incapable\" href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#incapable\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Incapable\">incapacité</a> et ne peut ni bouger ni parler.</li>\n<li dir=\"auto\">La créature échoue automatiquement aux jets de sauvegarde de Force et de Dextérité. Les jets d'attaque contre la créature ont un avantage.</li>\n<li dir=\"auto\">Toute attaque qui frappe la créature est un coup critique si l'attaquant se trouve à moins de 5 pieds de la créature.</li>\n</ul>\n<h2 data-heading=\"Pétrifié\" dir=\"auto\" id=\"ptrifi\">Pétrifié</h2>\n<ul>\n<li dir=\"auto\">Une créature pétrifiée est transformée, avec tout objet non magique qu'elle porte ou transporte, en une substance solide inanimée (généralement de la pierre). Son poids est multiplié par dix et il cesse de vieillir.</li>\n<li dir=\"auto\">La créature est <a data-tooltip-position=\"top\" aria-label=\"Conditions &gt; Incapable\" href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#incapable\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Incapable\">incapacité</a>, ne peut ni bouger ni parler et n'est pas conscient de son environnement.</li>\n<li dir=\"auto\">Les jets d'attaque contre la créature ont un avantage.</li>\n<li dir=\"auto\">La créature échoue automatiquement aux jets de sauvegarde de Force et de Dextérité.</li>\n<li dir=\"auto\">La créature a une résistance à tous les dégâts.</li>\n<li dir=\"auto\">La créature est immunisée contre le poison et les maladies, bien qu'un poison ou une maladie déjà présent dans son organisme soit suspendu et non neutralisé.</li>\n</ul>\n<h2 data-heading=\"Couché\" dir=\"auto\" id=\"couch\">Couché</h2>\n<ul>\n<li dir=\"auto\">La seule option de mouvement d'une créature couchée est de ramper, à moins qu'elle ne se lève et ne mette ainsi fin à la condition.</li>\n<li dir=\"auto\">La créature est désavantagée sur les jets d'attaque.</li>\n<li dir=\"auto\">Un jet d'attaque contre la créature présente un avantage si l'attaquant se trouve à moins de 5 pieds de la créature. Sinon, le jet d’attaque présente un inconvénient.</li>\n</ul>\n<h2 data-heading=\"Retenu\" dir=\"auto\" id=\"retenu\">Retenu</h2>\n<ul>\n<li dir=\"auto\">La vitesse d'une créature retenue devient 0 et elle ne peut bénéficier d'aucun bonus à sa vitesse.</li>\n<li dir=\"auto\">Les jets d'attaque contre la créature ont un avantage, et les jets d'attaque de la créature ont un inconvénient.</li>\n<li dir=\"auto\">La créature est désavantagée sur les lancers de sauvegarde de Dextérité.</li>\n</ul>\n<h2 data-heading=\"Abasourdi\" dir=\"auto\" id=\"abasourdi\">Abasourdi</h2>\n<ul>\n<li dir=\"auto\">Une créature étourdie est&nbsp;<a data-tooltip-position=\"top\" aria-label=\"Conditions &gt; Incapable\" href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#incapable\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Incapable\">incapacité</a>, ne peut pas bouger et ne peut parler que de manière hésitante.</li>\n<li dir=\"auto\">La créature échoue automatiquement aux jets de sauvegarde de Force et de Dextérité.</li>\n<li dir=\"auto\">Les jets d'attaque contre la créature ont un avantage.</li>\n</ul>\n<h2 data-heading=\"Inconscient\" dir=\"auto\" id=\"inconscient\">Inconscient</h2>\n<ul>\n<li dir=\"auto\">Une créature inconsciente est <a data-tooltip-position=\"top\" aria-label=\"Conditions &gt; Incapable\" href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#incapable\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Incapable\">incapacité</a>, ne peut ni bouger ni parler et n'est pas conscient de son environnement.</li>\n<li dir=\"auto\">La créature laisse tomber tout ce qu'elle tient et tombe&nbsp;<a data-tooltip-position=\"top\" aria-label=\"Conditions &gt; Couché\" href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#couch\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Couch%C3%A9\">couché</a>.</li>\n<li dir=\"auto\">La créature échoue automatiquement aux jets de sauvegarde de Force et de Dextérité.</li>\n<li dir=\"auto\">Les jets d'attaque contre la créature ont un avantage.</li>\n<li dir=\"auto\">Toute attaque qui frappe la créature est un coup critique si l'attaquant se trouve à moins de 5 pieds de la créature.</li>\n</ul>")}
  </div>
</article>

<LinkPreview />
