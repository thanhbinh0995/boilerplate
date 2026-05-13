import type { ServerResponse } from 'http';
import type { Connect } from 'vite';

const MOCK_EMAIL = 'demo@example.com';
const MOCK_PASSWORD = 'password';
const MOCK_USER_ID = 'mock-user-1';

function createMockUser(email: string) {
  const now = new Date().toISOString();

  return {
    id: MOCK_USER_ID,
    email,
    phone_number: '',
    phone_code: '+1',
    username: 'demo',
    full_name: 'Demo User',
    gender: 1,
    avatar_id: '',
    avatar: { url: '' },
    country_code: 'US',
    is_completed: true,
    bio: 'Boilerplate demo account',
    born_at: '1990-01-01T00:00:00.000Z',
    updated_at: now,
    latest_login_at: now,
    setting: {
      id: 'mock-setting-1',
      user_id: MOCK_USER_ID,
      hotspot_visibility: true,
    },
  };
}

function createMockTokens() {
  const expireAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
  const refreshExpireAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

  return {
    access_token: `mock-access-token-${Date.now()}`,
    refresh_token: `mock-refresh-token-${Date.now()}`,
    expire_at: expireAt,
    refresh_expire_at: refreshExpireAt,
  };
}

function readJsonBody(req: Connect.IncomingMessage): Promise<Record<string, string>> {
  return new Promise((resolve, reject) => {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error('Invalid JSON body'));
      }
    });

    req.on('error', reject);
  });
}

function sendJson(
  res: ServerResponse,
  statusCode: number,
  payload: unknown,
): void {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
}

export function setupMockApi(middlewares: Connect.Server): void {
  middlewares.use(async (req, res, next) => {
    const pathname = req.url?.split('?')[0];

    try {
      if (pathname === '/authentications/login' && req.method === 'POST') {
        const body = await readJsonBody(req);
        const email = body.email ?? '';
        const password = body.password ?? '';

        if (email !== MOCK_EMAIL || password !== MOCK_PASSWORD) {
          sendJson(res, 422, {
            message: 'Invalid credentials',
            errors: [
              {
                msg: 'Email or password is incorrect',
                type: 'validation',
              },
            ],
          });
          return;
        }

        sendJson(res, 200, {
          token: createMockTokens(),
          user: createMockUser(email),
        });
        return;
      }

      if (pathname === '/authentications/logout' && req.method === 'POST') {
        res.statusCode = 204;
        res.end();
        return;
      }
    } catch {
      sendJson(res, 400, {
        message: 'Bad request',
      });
      return;
    }

    next();
  });
}
