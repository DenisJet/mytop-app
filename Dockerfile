FROM node:18-alpine
WORKDIR /mytop
ADD package.json package.json
RUN npm install --legacy-peer-deps
ADD . .
ENV NODE_ENV production
RUN npm run build
RUN npm prune --production
CMD ["npm", "start"]
EXPOSE 3000