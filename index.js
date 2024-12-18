const venom = require("venom-bot");

const usersState = {}; // Gerencia o estado de cada usuário

venom
  .create({
    session: "au-au-pet", // Nome da sessão
    multidevice: true, // Suporte a multi-dispositivos
  })
  .then((client) => start(client))
  .catch((err) => console.error(err));

function start(client) {
  client.onMessage((message) => {
    const user = message.from;

    // Inicializa o estado do usuário, se não existir
    if (!usersState[user]) {
      usersState[user] = { step: 0 };
    }

    // Controle do fluxo
    switch (usersState[user].step) {
      case 0: // Etapa inicial
        // Envia a logo antes da mensagem de boas-vindas
        client.sendImage(
          user,
          "images/pet.png", // Substitua pelo caminho real da logo
          "logo.jpg",
          "🐾 *Bem-vindo à Au Au Pets!* 🐾\n\nComo podemos ajudar você hoje? Escolha uma das opções abaixo:\n" +
            `1️⃣ Serviços oferecidos\n2️⃣ Localização da loja\n3️⃣ Agendamento`
        );
        usersState[user].step = 1; // Avança para a próxima etapa
        break;

      case 1: // Menu principal
        if (message.body === "1") {
          client.sendText(
            user,
            `✨ *Nossos Serviços* ✨\n` +
              `- Banho e Tosa\n- Vacinação\n- Consultas Veterinárias\n- Venda de produtos pet\n\n` +
              `Digite 0️⃣ para voltar ao menu principal.`
          );
          usersState[user].step = 0; // Reinicia para o menu principal
        } else if (message.body === "2") {
          client.sendText(
            user,
            `📍 *Nossa localização*:\n` +
              `Rua dos Pets, 123 - Bairro Feliz\nCidade: Petlândia\n\n` +
              `Horário de funcionamento:\nSegunda a sábado, das 8h às 18h.\n\n` +
              `Digite 0️⃣ para voltar ao menu principal.`
          );
          usersState[user].step = 0; // Reinicia para o menu principal
        } else if (message.body === "3") {
          client.sendText(
            user,
            `🗓️ *Agendamento de Serviços*\n\n` +
              `Por favor, envie o nome do seu pet e o serviço desejado para darmos continuidade ao agendamento!`
          );
          usersState[user].step = 2; // Avança para o agendamento
        } else {
          client.sendText(user, "⚠️ Opção inválida. Digite 1, 2 ou 3.");
        }
        break;

      case 2: // Coletar informações para agendamento
        client.sendText(
          user,
          `🐶 Obrigado! Recebemos as informações sobre o seu pet.\nNossa equipe entrará em contato para confirmar o horário.\n\n` +
            `Digite 0️⃣ para voltar ao menu principal.`
        );
        usersState[user].step = 0; // Reinicia para o menu principal
        break;

      default:
        client.sendText(user, "Algo deu errado. Vamos começar novamente! 🐾");
        usersState[user].step = 0; // Reinicia para o menu principal
    }
  });
}
