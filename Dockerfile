FROM node:lts AS base

RUN mkdir -m 775 -p /app && \
    chown node:node /app

USER node
ENV NODE_ENV=production    

WORKDIR /app
COPY --chown=node:node . .
# This will do the trick, use the corresponding env file for each environment.
#COPY .env.development.sample .env.production
RUN npm install && \
    npx next build

EXPOSE 3000
ENV PORT 3000

CMD ["npx", "next", "start"]
# CMD ["bash"]
