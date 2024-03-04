import express from 'express';
import { getPayloadClient } from './get-paylod';
import dotenv from 'dotenv';
import { nextApp, nextHandler } from './next-utils';

dotenv.config();
const app = express();

const PORT = Number(process.env.NEXT_PUBLIC_PORT) || 3000;

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL()}`);
      },
    },
  });
  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    app.listen(PORT, async () => {
      payload.logger.info(`Nextjs url: ${process.env.NEXT_PUBLIC_SERVER_URL}`);
    });
  });
};

start();
