# quanto-amor

# Quanto amor você tem para dar - Sistema Web Informativo de Coleta Seletiva

## Descrição do Projeto

O projeto **"Quanto amor você tem para dar"** é uma iniciativa de extensão socioambiental da UTFPR de Cornélio Procópio, que busca combinar sustentabilidade, inclusão social e ações comunitárias . Este sistema web tem como objetivo principal **facilitar o acesso a informações corretas sobre a coleta de lixo comum e seletiva** na cidade de Cornélio Procópio. O sistema fornecerá os dias de coleta com base no endereço do usuário, além de um mapa com pontos de coleta diversos.

O projeto está alinhado com os Objetivos de Desenvolvimento Sustentável (ODS) da ONU, em especial os objetivos relacionados à saúde e bem-estar, educação de qualidade, redução das desigualdades, consumo e produção responsáveis, ação contra a mudança global do clima, e parcerias e meios de implementação

## Funcionalidades
*   **Informações sobre coleta:** Fornece informações claras e acessíveis sobre a coleta de lixo sólido, seja ela comum ou seletiva, com base no endereço fornecido pelo usuário .
*   **Mapeamento de recursos:** Disponibiliza uma lista mostrando locais de descarte apropriados para diferentes tipos de resíduos, incluindo pontos de coleta seletiva e empresas que recebem materiais específicos .
*   **Blog:** Oferece artigos e postagens sobre temas ambientais, incentivando a educação e a conscientização sobre a importância da reciclagem e da gestão de resíduos.
*   **Área administrativa:** Permite que os gestores de conteúdo (membros do projeto) atualizem as informações do sistema, incluindo locais de descarte e informações sobre coleta.
*   **Autenticação:** O sistema utiliza o Firebase para autenticação de administradores .

## Requisitos do Sistema

### Requisitos Funcionais

*   RF01: O sistema deve permitir que o administrador faça login usando a autenticação do Firebase.
*   RF02: O sistema deve permitir que o administrador altere as informações da página principal.
*   RF03: O sistema deve permitir que o usuário insira o endereço para ver os dias de coleta comum e seletiva deste local.
*   RF04: O sistema deve manter um histórico das alterações realizadas pelos administradores.
*   RF05: O sistema deve exibir um mapa interativo para que o usuário possa consultar por meio deste os pontos de coleta seletiva da região de Cornélio Procópio.
*   RF06: O sistema deve conter uma seção com informações sobre coleta e reciclagem.
*   RF07: O sistema deve permitir que o usuário sugira atualizações de informações da página.

### Requisitos Não-Funcionais

*   RNF01: O sistema deve ser acessível por meio web em dispositivos móveis e desktops.
*   RNF02: A aplicação deve utilizar o banco de dados Firestore do Firebase para armazenar dados dos pontos de coleta e atividades.
*   RNF03: O sistema deve garantir que as operações de CRUD para os administradores sejam seguras e autenticadas.
*   RNF04: O sistema deve estar disponível em português e incluir texto alternativo nas imagens para acessibilidade.
*   RNF05: O sistema deve ser responsivo para dispositivos móveis e desktops.

## Configuração do Ambiente

Para configurar o ambiente de desenvolvimento, siga os passos abaixo:

1. **Clonar o Repositório:**

    ```bash
    git clone https://github.com/pedrohcmoda/quanto-amor-projeto.git
    cd quanto-amor-projeto
    ```

2. **Instalar as dependências:**

    ```bash
    yarn install
    ```

3. **Configurar o Firebase:**

    Crie um arquivo `.env` na raiz do projeto com base no arquivo `.env.example`:

    ```bash
    cp .env.example .env
    ```

    Abra o arquivo `.env` e substitua os valores de exemplo pelas suas credenciais do Firebase:

    ```env
    VUE_APP_FIREBASE_API_KEY=your_firebase_api_key
    VUE_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    VUE_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    VUE_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    VUE_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    VUE_APP_FIREBASE_APP_ID=your_firebase_app_id
    ```

4. **Executar o Projeto:**

    ```bash
    yarn dev
    ```

## Estrutura do Projeto

O projeto está organizado em várias pastas dentro do diretório `src` :

*   `assets`: Contém arquivos estáticos como imagens.
*   `components`: Contém componentes Vue reutilizáveis.
*   `db`: Contém a configuração do Firebase.
*   `plugins`: Contém plugins Vue como Vuetify e webfontloader.
*   `router`: Contém a configuração do Vue Router.
*   `views`: Contém as páginas principais da aplicação.

## Documentação Adicional

*   [Documentação do Vue](https://vuejs.org/)
*   [Documentação do Vuetify](https://vuetifyjs.com/)
*   [Documentação do Firebase](https://firebase.google.com/)

## Contribuição

Sinta-se à vontade para abrir issues e pull requests para contribuir com o projeto!

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.