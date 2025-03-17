# AQUANET

## Visão Geral

O **AQUA Project** é um sistema abrangente de monitoramento e gerenciamento de aquários, composto por dois componentes principais:

1. **ESP32-AquaNet**: Uma solução de hardware baseada em microcontroladores ESP32 que coleta dados em tempo real dos sensores do aquário.
2. **Aplicativo Web AQUA**: Uma plataforma web baseada em Django que recebe, processa e exibe os dados dos sensores, permitindo que os usuários monitorem e gerenciem seus aquários remotamente.

Este projeto foi desenvolvido como um **TCC** (Trabalho de Conclusão de Curso) com o objetivo de criar uma solução integrada para entusiastas e profissionais de aquários, permitindo o monitoramento e manutenção das condições ideais da água.

## Arquitetura do Sistema

### ESP32-AquaNet (Componente de Hardware)

O componente ESP32-AquaNet ([Repositório GitHub](https://github.com/gabethealigator/esp32-aquanet)) é responsável por:

- Coletar dados em tempo real de diversos sensores:
  - Nível de pH
  - Temperatura da água
  - Turbidez da água
  - Nível da água
- Transmitir os dados coletados para o aplicativo web via Wi-Fi
- Operar de forma autônoma com baixo consumo de energia

### Aplicativo Web AQUA (Componente de Software)

O aplicativo web (este repositório) oferece:

- Sistema de autenticação e registro de usuários
- Painel para monitoramento em tempo real dos parâmetros do aquário
- Visualização detalhada do módulo de cada aquário conectado
- Representações visuais das métricas de qualidade da água
- Sistema de detecção de problemas e notificações
- Gerenciamento de conta de usuário
- Relatórios de dados históricos

## Tecnologias Utilizadas

### Hardware
- Microcontrolador ESP32
- Diversos sensores de aquário (pH, temperatura, turbidez, nível)
- Conectividade Wi-Fi

### Software
- Framework web Django
- Firebase para banco de dados em tempo real
- WebSockets para atualizações de dados ao vivo
- Bootstrap para interface de usuário responsiva
- Chart.js para visualização de dados

## Funcionalidades

- **Monitoramento em Tempo Real**: Visualize as condições atuais do aquário de qualquer lugar
- **Suporte a Múltiplos Módulos**: Conecte e monitore múltiplos aquários simultaneamente
- **Análise da Qualidade da Água**: Percentual geral de qualidade da água baseado em múltiplos parâmetros
- **Detecção de Problemas**: Identificação automática de possíveis problemas na água
- **Interface Amigável**: Dashboard intuitivo e visualizações detalhadas dos parâmetros
- **Autenticação Segura**: Sistema de login seguro e verificação de e-mail
- **Design Responsivo**: Acesse de qualquer dispositivo com navegador web

## Instalação e Configuração

### Pré-requisitos
- Python 3.8+
- Gerenciador de pacotes pip
- Conta no Firebase
- Configuração do hardware ESP32 (veja o [repositório ESP32-AquaNet](https://github.com/gabethealigator/esp32-aquanet))

### Configuração do Aplicativo Web
1. Clone este repositório:
   ```
   git clone https://github.com/yourusername/aqua-project.git
   cd aqua-project
   ```

2. Instale as dependências:
   ```
   pip install -r requirements.txt
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```
   FIREBASE_API_KEY=sua_api_key
   FIREBASE_AUTH_DOMAIN=seu_auth_domain
   FIREBASE_DATABASE_URL=seu_database_url
   FIREBASE_PROJECT_ID=seu_project_id
   FIREBASE_STORAGE_BUCKET=seu_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id
   FIREBASE_APP_ID=seu_app_id
   ```

4. Execute as migrações:
   ```
   python manage.py migrate
   ```

5. Inicie o servidor de desenvolvimento:
   ```
   python manage.py runserver
   ```

6. Acesse o aplicativo em `http://localhost:8000`

## Como Usar

1. Registre uma nova conta ou faça login com as credenciais existentes
2. Adicione um novo módulo de aquário conectando seu dispositivo ESP32-AquaNet
3. Visualize os dados em tempo real no painel
4. Clique em um módulo específico para ver os parâmetros detalhados
5. Configure alertas e notificações baseados em limites de parâmetros
6. Visualize dados históricos na seção de relatórios

## Estrutura do Projeto

- `aquaproject/`: Configurações do projeto Django
- `aquasite/`: Aplicativo principal
  - `templates/`: Templates HTML
  - `static/`: CSS, JavaScript e imagens
  - `views.py`: Controladores de visualização
  - `consumers.py`: WebSockets
  - `routing.py`: Roteamento WebSocket

## Melhorias Futuras

- Integração com aplicativo móvel
- Análises avançadas e previsão de tendências
- Lembretes automáticos para troca de água
- Integração com sistemas de automação residencial
- Suporte para tipos adicionais de sensores
- Limites de alerta personalizáveis

## Contribuindo

Contribuições são bem-vindas! Fique à vontade para enviar um Pull Request.

## Agradecimentos

- Agradecimentos especiais a todos os colaboradores e orientadores que ajudaram no desenvolvimento deste projeto de TCC
- Às comunidades ESP32 e Django, pelas excelentes documentações e suporte
