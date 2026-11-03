<script lang="ts">
  import { applyBase } from "$lib/basePath";
</script>

<svelte:head>
  <title>{"Huiles"}</title>
  <meta name="description" content={"Huiles Fait par un Potionniste pour déterminer les dégâts (DMG arrondi vers le bas). Ajoute temporairement l'effet d'1 huile à l'arme (dure 1 combat et n'est pas cumulable). Les huiles ne…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Huiles"} />
  <meta property="og:description" content={"Huiles Fait par un Potionniste pour déterminer les dégâts (DMG arrondi vers le bas). Ajoute temporairement l'effet d'1 huile à l'arme (dure 1 combat et n'est pas cumulable). Les huiles ne…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Huiles"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<h3 data-heading=\"Huiles\" dir=\"auto\" id=\"huiles\">Huiles</h3>\n<blockquote dir=\"auto\">\n<p>Fait par un <a data-tooltip-position=\"top\" aria-label=\"Alchimie - New &gt; Huiles\" href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New#huiles\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" data-wiki-fragment=\"Huiles\">Potionniste</a> pour déterminer les dégâts (DMG arrondi vers le bas).</p>\n</blockquote>\n<p dir=\"auto\">Ajoute temporairement l'effet d'1 huile à l'arme (dure 1 combat et n'est pas cumulable).</p>\n<p dir=\"auto\">Les huiles ne s'appliquent que sur les armes Tranchantes, Perforantes et à Corde.</p>")}
  </div>
</article>
