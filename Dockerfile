FROM node:22-alpine

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar os arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos para o diretório de trabalho
COPY . .

# Compilar o projeto
RUN npm run build

# Expor a porta que a aplicação usará
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]