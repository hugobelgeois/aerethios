<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "oracle",
          "text": "Oracle",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Templis"}</title>
  <meta name="description" content={"Oracle Sacrifier un sens permet de le remplacer par une \"amélioration\" qui fonctionne de la même manière mais uniquement pour le plan spirituel. - S'enlever la vue permet de voir la monde sous forme…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Templis"} />
  <meta property="og:description" content={"Oracle Sacrifier un sens permet de le remplacer par une \"amélioration\" qui fonctionne de la même manière mais uniquement pour le plan spirituel. - S'enlever la vue permet de voir la monde sous forme…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Templis"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h2 data-heading=\"Oracle\" dir=\"auto\" id=\"oracle\">Oracle</h2>\n<p dir=\"auto\">Sacrifier un sens permet de le remplacer par une \"amélioration\" qui fonctionne de la même manière mais uniquement pour le plan spirituel.<br>\n- S'enlever la vue permet de voir la monde sous forme d'aura et de voir l'aura des esprits<br>\n- L'odorat permet de les sentir, mais c'est moins précis<br>\n- ...</p>\n<p dir=\"auto\">Se sacrifier le sens du goût : Il reste des papilles gustatives sur les couilles, dans l'anus, l'estomac et le pancréas<br>\n- Le goût se développe dans ces endroits là</p>\n<p dir=\"auto\">Se sacrifier le sens du toucher consiste à soit se brûler la peau (très grand risque de décès à cause de la douleur), soit faire une opération chirurgicale pour détruire la partie de son cerveau qui gère la douleur (très grand risque de décès à cause de la précision).<br>\n- Si on brûle sa peau, le corps peut interagir avec le plan spirituel mais pas trop<br>\n- Exemple, si un esprit est dans le plan spirituel et moi dans le plan physique, je peux mettre mon bars à travers son corps sans rencontrer de résistance.<br>\nMais dans le plan spirituel, mon bras existe et traverse l'esprit, créant un trou qui lui fait des dégâts.</p>\n<p dir=\"auto\">Se sacrifier l'ouïe pour entendre les esprits<br>\n- Lorsqu'on vit, nos pensées sont réservées à nous-même car notre enveloppe physique les contient<br>\n- Une fois mort, toutes nos pensées sont communiquées à tout ce qui peut nous entendre, et un être intelligent ne peut jamais s'arrêter de penser</p>"}
  </div>
</article>

<LinkPreview />
