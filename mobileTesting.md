# Testando para dispositivos móveis

## Setup

Para implementar e executar os testes em dispositivos móveis, será necessário:
- [Appium](http://appium.io/docs/en/latest/#) para desenvolver o teste
- [Android Studio](https://developer.android.com/studio/run/emulator) para emular o dispositivo Android
  - ver dicas de setup em
  [applitools](https://applitools.com/blog/how-to-write-android-test-appium/),
  [medium](https://medium.com/@sujathamudadla1213/connecting-appium-to-android-devices-and-emulators-bridging-the-testing-gap-4b773378744f)
- [xcode](https://developer.apple.com/xcode/)
([documentação](https://developer.apple.com/documentation/xcode/running-your-app-in-simulator-or-on-a-device))
para desenvolver e testar aplicativos para iOS

## Fluxo de teste
1. Ao abrir o aplicativo, fazer login
2. Para os campos "Saindo de" e "Indo para:"
   1. Digitar a cidade e estado desejada, e selecionar na lista o item contendo esta cidade e estado
   2. Ao selecionar a cidade e estado na lista, a lista não deve mais estar visível na tela e o respectivo campo deve mostrar a cidade e estado selecionado
3. Para os campos "Ida" e "Volta":
   1. Clicar no campo deve mostrar um modal apresentando um calendário
   2. Utilizar o calendário no modal para selecionar uma data (ano, mês e dia)
   3. Selecionar uma data no calendário deve preencher o respectivo campo com esta data e deve esconder o calendário
4.  Clicar em "Buscar" e esperar as opções de rota aparecerem na tela
5.  Dentro do container apresentando a rota a selecionar, clicar em "Reservar poltrona"
6.  Ao ser redirecionado para a tela de seleção de poltronas, selecionar qualquer poltrona livre e clicar em "Continuar"
7.  Na tela de informações sobre o passageiro, preencher os dados para "nome completo" e "documento"

## Casos de teste
1. Verificar que o login é confirmado quando é feito com credenciais válidas
2. Verificar que o login não é confirmado quando é feito com credenciais não válidas
3. Verificar que ao ter preenchido os campos "Saindo de:" e "Indo para:" e clicar em "Buscar" redireciona para a tela de seleção de rotas
4. Verificar que não preencher "Saindo de:" e/ou "Indo para:" mantém o botão "Buscar" não reagir a cliques (sem redirecionar para outras páginas ou atualizar a tela)
5. Verificar que a página de seleção de rotas apresenta corretamente a cidade de saída, a cidade de destino e a data de partida selecionada
6. Verificar que o botão "avançar" na tela de seleção de poltronas só responde ao clique após selecionar poltrona
