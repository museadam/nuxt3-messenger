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

const loginPost = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email } = body;
  const response = { status: 500 };
  const getUser = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if (getUser) {
    response.status = 200;
    response.data = getUser;
  } else {
    response.status = 400;
    response.message = "Cant find user with this email: " + email;
  }
  return {
    ...response
  };
});

export { loginPost as default };
//# sourceMappingURL=login-post.mjs.map
