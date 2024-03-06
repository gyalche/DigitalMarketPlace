import { buildConfig } from 'payload/config';

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  collections: [],
  routes: {
    admin: '/sell',
  },
  admin: {},
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.NEXT_PUBLIC_MONGO_URL!,
  }),
});
