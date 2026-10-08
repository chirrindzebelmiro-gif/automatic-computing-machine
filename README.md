# Guia de Ouro da Condução — Moçambique

Página estática de vendas, independente do INATRO. Sem dependências, formulários, rastreio ou publicação automática.

## Pré-visualização

Na pasta do projecto: `python3 -m http.server 8080`. Abrir http://localhost:8080.

## Configuração central

Editar `config.js`:

- `vendasActivas: false`: estado inicial; todos os botões ficam sem destino de pagamento, incluindo a barra móvel. Alterar para `true` apenas depois da validação técnica do guia e confirmação das condições comerciais.
- `precoActual: 199.90`: preço do guia principal, em MT.
- `precoAnterior: 500` e `mostrarPrecoAnterior: false`: activar a exibição apenas após confirmar que foi um preço real anteriormente praticado.
- `dataFinalPromocao: ''`: sem prazo por defeito. Para uma promoção real, usar data ISO 8601 com fuso, por exemplo no formato `AAAA-MM-DDTHH:mm:ss+02:00`. Ao expirar, o encaminhamento fica bloqueado até actualizar a oferta; não se muda automaticamente o preço.
- `checkout`: https://checkout.escalepay.com/1064695.

Sem JavaScript ou sem configuração, os botões continuam desactivados.

## Pendências antes das vendas

Validar o conteúdo técnico e os recursos descritos: 12 capítulos, 60 perguntas originais explicadas, diagnóstico, 3 testes extraídos desse banco, fichas e plano de 14 dias. Confirmar preço, entrega e condições no checkout. O mockup é tipográfico; não contém imagens de páginas internas. Substituí-lo por capa real quando fornecida, se desejado.

Os complementos não integram o preço principal e não estão implementados: Sinais na Memória (24 cartões, preço sugerido 49 MT), Prioridades Sem Confusão (25 situações, preço sugerido 69 MT) e Treino Intensivo da Condução (100 perguntas adicionais, preço sugerido 149 MT). Implementar apenas com configurações e links reais nas etapas apropriadas.

Não foram adicionados depoimentos, garantias, métodos de pagamento, políticas ou alegações de aprovação. Links legais só devem ser acrescentados quando fornecidos.
