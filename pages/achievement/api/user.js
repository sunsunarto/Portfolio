import { defineConfig } from '@prisma/config';

export default defineConfig({
  datasources: {
    db: {
      adapter: 'postgresql',
      url: process.env.DATABASE_URL,
    },
  },
});
