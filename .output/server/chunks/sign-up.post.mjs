import { a as defineEventHandler, r as readBody } from './nitro/node-server.mjs';
import { p as prisma } from './client.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'socket.io';
import 'url';
import 'node:perf_hooks';
import 'untyped';
import 'consola/core';
import 'semver/functions/satisfies.js';
import 'knitwork';
import 'mlly';
import 'jiti';
import 'hash-sum';
import 'fast-glob';
import '@prisma/client';

const signUp_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const response = { status: 500 };
  console.log(body);
  console.log("body");
  const createUser = await prisma.user.create({
    data: {
      ...body
    }
  });
  if (createUser) {
    response.status = 200;
    response.data = createUser;
  }
  return {
    ...response
  };
});

export { signUp_post as default };
//# sourceMappingURL=sign-up.post.mjs.map
