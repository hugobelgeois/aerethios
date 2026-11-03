<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

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
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Conditions"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render aveugle()}
		{@render charm()}
		{@render assourdi()}
		{@render puisement()}
		{@render effray()}
		{@render attrap()}
		{@render incapacit()}
		{@render invisible()}
		{@render paralys()}
		{@render ptrifi()}
		{@render couch()}
		{@render retenu()}
		{@render abasourdi()}
		{@render inconscient()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<blockquote>Basé sur les règles de <a href=\"[https://www.dndbeyond.com/sources/dnd/basic-rules-2014/combat](https://www.dndbeyond.com/sources/dnd/basic-rules-2014/appendix-a-conditions\">DnD 5e - Appendix A</a><br>Personnalisé pour nos jdr.</blockquote>"}
{/snippet}

{#snippet aveugle()}
	<section>
		<h2 id="aveugle">{@html "Aveugle"}</h2>
	{@html "<ul><li>Une créature aveuglée ne peut pas voir et échoue automatiquement à toute vérification de capacité nécessitant la vue.</li><li>Les jets d'attaque contre la créature ont un avantage, et les jets d'attaque de la créature ont un inconvénient.</li></ul>"}

	</section>
{/snippet}

{#snippet charm()}
	<section>
		<h2 id="charm">{@html "Charmé"}</h2>
	{@html "<ul><li>Une créature charmée ne peut pas attaquer le charmeur ni cibler le charmeur avec des capacités nuisibles ou des effets magiques.</li><li>Le charmeur a l'avantage, à chaque test de capacité, d'interagir socialement avec la créature.</li></ul>"}

	</section>
{/snippet}

{#snippet assourdi()}
	<section>
		<h2 id="assourdi">{@html "Assourdi"}</h2>
	{@html "<ul><li>Une créature assourdie ne peut pas entendre et échoue automatiquement à tout contrôle de capacité nécessitant une audition.</li></ul>"}

	</section>
{/snippet}

{#snippet puisement()}
	<section>
		<h2 id="puisement">{@html "Épuisement"}</h2>
	{@html "<p>Certaines capacités particulières et certains risques environnementaux, tels que la famine et les effets à long terme des températures glaciales ou torrides, peuvent conduire à une condition particulière appelée épuisement. L’épuisement est mesuré en six niveaux. Un effet peut donner à une créature un ou plusieurs niveaux d’épuisement, comme spécifié dans la description de l’effet.</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Niveau</th><th>Effet</th></tr></thead><tbody><tr><td>1</td><td>Inconvénient des contrôles de capacité</td></tr><tr><td>2</td><td>Vitesse réduite de moitié</td></tr><tr><td>3</td><td>Inconvénient sur les lancers d'attaque et les lancers de sauvegarde</td></tr><tr><td>4</td><td>Point de vie maximum divisé par deux</td></tr><tr><td>5</td><td>Vitesse réduite à 0</td></tr><tr><td>6</td><td>Mort</td></tr></tbody></table></div>\n<p>Si une créature déjà épuisée subit un autre effet qui provoque l’épuisement, son niveau actuel d’épuisement augmente de la quantité spécifiée dans la description de l’effet.</p>\n<p>Une créature subit l’effet de son niveau d’épuisement actuel ainsi que de tous les niveaux inférieurs. Par exemple, une créature souffrant d’épuisement de niveau 2 voit sa vitesse réduite de moitié et est désavantagée lors des tests de capacité.</p>\n<p>Un effet qui supprime l'épuisement réduit son niveau comme spécifié dans la description de l'effet, tous les effets d'épuisement se terminant si le niveau d'épuisement d'une créature est réduit en dessous de 1.<br>\nTerminer un long repos réduit le niveau d’épuisement d’une créature de 1, à condition que la créature ait également ingéré de la nourriture et des boissons. De plus, être ressuscité d’entre les morts réduit le niveau d’épuisement d’une créature de 1.</p>"}

	</section>
{/snippet}

{#snippet effray()}
	<section>
		<h2 id="effray">{@html "Effrayé"}</h2>
	{@html "<ul><li>Une créature effrayée est désavantagée lors des tests de capacité et des lancers d'attaque alors que la source de sa peur est à portée de vue.</li><li>La créature ne peut pas volontairement se rapprocher de la source de sa peur.</li></ul>"}

	</section>
{/snippet}

{#snippet attrap()}
	<section>
		<h2 id="attrap">{@html "Attrapé"}</h2>
	{@html applyBase("<ul><li>La vitesse d'une créature attrapée devient 0 et elle ne peut bénéficier d'aucun bonus à sa vitesse.</li><li>La condition prend fin si l'attrapeur est <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#incapable\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Incapable\">incapacité</a>.</li><li>La condition prend également fin si un effet retire la créature aux prises de la portée de l'attrapeur.</li></ul>")}

	</section>
{/snippet}

{#snippet incapacit()}
	<section>
		<h2 id="incapacit">{@html "Incapacité"}</h2>
	{@html "<ul><li>Une créature incapacité ne peut pas agir ou réagir.</li></ul>"}

	</section>
{/snippet}

{#snippet invisible()}
	<section>
		<h2 id="invisible">{@html "Invisible"}</h2>
	{@html "<ul><li>Une créature invisible est impossible à voir sans l’aide de la magie ou d’un sens particulier. Dans le but de se cacher, la créature est fortement obscurcie. L'emplacement de la créature peut être détecté par tout bruit qu'elle émet ou par toute trace qu'elle laisse.</li><li>Les jets d'attaque contre la créature présentent un inconvénient, et les jets d'attaque de la créature présentent un avantage.</li></ul>"}

	</section>
{/snippet}

{#snippet paralys()}
	<section>
		<h2 id="paralys">{@html "Paralysé"}</h2>
	{@html applyBase("<ul><li>Une créature paralysée est <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#incapable\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Incapable\">incapacité</a> et ne peut ni bouger ni parler.</li><li>La créature échoue automatiquement aux jets de sauvegarde de Force et de Dextérité. Les jets d'attaque contre la créature ont un avantage.</li><li>Toute attaque qui frappe la créature est un coup critique si l'attaquant se trouve à moins de 5 pieds de la créature.</li></ul>")}

	</section>
{/snippet}

{#snippet ptrifi()}
	<section>
		<h2 id="ptrifi">{@html "Pétrifié"}</h2>
	{@html applyBase("<ul><li>Une créature pétrifiée est transformée, avec tout objet non magique qu'elle porte ou transporte, en une substance solide inanimée (généralement de la pierre). Son poids est multiplié par dix et il cesse de vieillir.</li><li>La créature est <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#incapable\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Incapable\">incapacité</a>, ne peut ni bouger ni parler et n'est pas conscient de son environnement.</li><li>Les jets d'attaque contre la créature ont un avantage.</li><li>La créature échoue automatiquement aux jets de sauvegarde de Force et de Dextérité.</li><li>La créature a une résistance à tous les dégâts.</li><li>La créature est immunisée contre le poison et les maladies, bien qu'un poison ou une maladie déjà présent dans son organisme soit suspendu et non neutralisé.</li></ul>")}

	</section>
{/snippet}

{#snippet couch()}
	<section>
		<h2 id="couch">{@html "Couché"}</h2>
	{@html "<ul><li>La seule option de mouvement d'une créature couchée est de ramper, à moins qu'elle ne se lève et ne mette ainsi fin à la condition.</li><li>La créature est désavantagée sur les jets d'attaque.</li><li>Un jet d'attaque contre la créature présente un avantage si l'attaquant se trouve à moins de 5 pieds de la créature. Sinon, le jet d’attaque présente un inconvénient.</li></ul>"}

	</section>
{/snippet}

{#snippet retenu()}
	<section>
		<h2 id="retenu">{@html "Retenu"}</h2>
	{@html "<ul><li>La vitesse d'une créature retenue devient 0 et elle ne peut bénéficier d'aucun bonus à sa vitesse.</li><li>Les jets d'attaque contre la créature ont un avantage, et les jets d'attaque de la créature ont un inconvénient.</li><li>La créature est désavantagée sur les lancers de sauvegarde de Dextérité.</li></ul>"}

	</section>
{/snippet}

{#snippet abasourdi()}
	<section>
		<h2 id="abasourdi">{@html "Abasourdi"}</h2>
	{@html applyBase("<ul><li>Une créature étourdie est <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#incapable\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Incapable\">incapacité</a>, ne peut pas bouger et ne peut parler que de manière hésitante.</li><li>La créature échoue automatiquement aux jets de sauvegarde de Force et de Dextérité.</li><li>Les jets d'attaque contre la créature ont un avantage.</li></ul>")}

	</section>
{/snippet}

{#snippet inconscient()}
	<section>
		<h2 id="inconscient">{@html "Inconscient"}</h2>
	{@html applyBase("<ul><li>Une créature inconsciente est <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#incapable\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Incapable\">incapacité</a>, ne peut ni bouger ni parler et n'est pas conscient de son environnement.</li><li>La créature laisse tomber tout ce qu'elle tient et tombe <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#couch\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Couch%C3%A9\">couché</a>.</li><li>La créature échoue automatiquement aux jets de sauvegarde de Force et de Dextérité.</li><li>Les jets d'attaque contre la créature ont un avantage.</li><li>Toute attaque qui frappe la créature est un coup critique si l'attaquant se trouve à moins de 5 pieds de la créature.</li></ul>")}

	</section>
{/snippet}
