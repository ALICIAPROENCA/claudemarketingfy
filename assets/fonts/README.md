# Fontes

O site usa **Clash Display** (títulos) e **Inter** (interface e corpo), servidas do próprio
servidor — nunca de um CDN. Isso mantém a promessa de zero pedidos a terceiros e evita
o consentimento de cookies.

**Neste momento estes ficheiros ainda não estão aqui.** O site funciona na mesma: cai para
a fonte do sistema sem quebrar o layout. Mas só fica com a identidade certa depois de os
adicionar.

## Ficheiros necessários

Coloque nesta pasta, com estes nomes exatos:

```
ClashDisplay-Semibold.woff2
ClashDisplay-Medium.woff2
Inter-Regular.woff2
Inter-SemiBold.woff2
```

## Onde obter

**Clash Display** — https://www.fontshare.com/fonts/clash-display
Descarregue a família, e dentro do ZIP procure a pasta `webfonts` com os `.woff2`.
Precisa apenas dos pesos 500 (Medium) e 600 (Semibold).

**Inter** — https://github.com/rsms/inter/releases
Descarregue a última versão e use os `.woff2` dos pesos Regular (400) e SemiBold (600).

Ambas são gratuitas e podem ser usadas comercialmente.

## Nota sobre o peso dos ficheiros

O orçamento de performance da spec é apertado. Se os `.woff2` completos ficarem grandes,
vale a pena reduzi-los ao alfabeto latino com uma ferramenta de *subsetting*
(por exemplo `glyphhanger` ou `fonttools`). Um subset latino costuma ficar em 15–25 KB
por peso, contra 100 KB ou mais do ficheiro completo.
