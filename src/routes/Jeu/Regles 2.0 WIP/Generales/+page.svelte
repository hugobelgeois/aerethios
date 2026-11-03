<script lang="ts">
  import { applyBase } from "$lib/basePath";
</script>

<svelte:head>
  <title>{"Générales"}</title>
  <meta name="description" content={"Les règles spécifiques prennent le dessus sur les règles générales Un jet de dé doit toujours être supérieur ou égal à la valeur attendue pour réussir Les valeurs sont toujours arrondies vers le bas…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Générales"} />
  <meta property="og:description" content={"Les règles spécifiques prennent le dessus sur les règles générales Un jet de dé doit toujours être supérieur ou égal à la valeur attendue pour réussir Les valeurs sont toujours arrondies vers le bas…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Générales"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<ul>\n<li dir=\"auto\">Les règles spécifiques prennent le dessus sur les règles générales</li>\n<li dir=\"auto\">Un jet de dé doit toujours être supérieur ou égal à la valeur attendue pour réussir</li>\n<li dir=\"auto\">Les valeurs sont toujours arrondies vers le bas</li>\n<li dir=\"auto\">Ordre des opérateurs : <code>Addition → Soustraction → Multiplication → Division</code></li>\n<li dir=\"auto\">Ordre des dés : <code>d4 → d6 → d8 → d10 → d12</code></li>\n<li dir=\"auto\">Ordre des résistances : <code>Faiblesse → Rien → Résistance → Immunité → Absorption</code></li>\n</ul>"}
  </div>
</article>
