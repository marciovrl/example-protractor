# example-protractor
Example of using the protractor for automated e2e testing.

# Pré-condições:
- Node instalado;
- NPM instalado;
- Chromedriver instalado.

# Começar projeto do zero:
- Primeiro iniciar um projeto node:
```
npm init
```

- Buscar as dependencias necessarias ao seu projeto em https://www.npmjs.com/ e adiciona-los no arquivo `package.json`.

- Instalar dependencias que foram adicionadas no projeto:
```
npm install
```

- Configurar arquivo de execução do Protractor. Exemplo `protractor.conf.js`.

- Executar testes `protractor protractor.conf.js`.

# Usar esse projeto como modelo:
- Clonar o projeto:
```
git clone https://github.com/marciovrl/example-protractor.git
```

- 
```
npm install
```

-
```
npm run test
```

# Estrutura do projeto
```
|
| - features
    | - pages
    | - specifications
    | - step_definitions
    | - support
| - .gitignore
| - protractor.conf.js
| - package.json
| - README.md 
```




