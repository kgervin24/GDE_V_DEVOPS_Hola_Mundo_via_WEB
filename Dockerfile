# Node.js futtatokornyezet
FROM node:24-alpine

# Munkakonyvtar a konteneren belul
WORKDIR /app

# Projektfajlok masolasa
COPY package*.json ./

# Fuggosegek telepitese
RUN npm ci --omit=dev

# Alkalmazas forraskodjanak masolasa
COPY src/ ./src/

# HTTP port dokumentalasa
EXPOSE 8080

# Alkalmazas inditasa
CMD ["node", "src/app.js"]
