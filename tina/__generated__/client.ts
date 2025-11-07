import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/home/user/portfolio-site/tina/__generated__/.cache/1762538688829', url: '/api/tina/gql', token: 'null', queries,  });
export default client;
  