PRAGMA foreign_keys = ON;
CREATE TABLE users (
 id TEXT PRIMARY KEY,
 email TEXT NOT NULL UNIQUE COLLATE NOCASE,
 google_sub TEXT UNIQUE,
 is_admin INTEGER NOT NULL DEFAULT 0 CHECK(is_admin IN (0,1)),
 enabled INTEGER NOT NULL DEFAULT 1 CHECK(enabled IN (0,1)),
 invite_expires INTEGER NOT NULL
);
CREATE TABLE workspaces (id TEXT PRIMARY KEY, name TEXT NOT NULL);
CREATE TABLE memberships (
 workspace_id TEXT NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
 user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
 PRIMARY KEY(workspace_id,user_id)
);
CREATE TABLE sessions (
 token_hash TEXT PRIMARY KEY,
 user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
 expires INTEGER NOT NULL
);
CREATE INDEX sessions_expiry ON sessions(expires);
CREATE TABLE oauth_attempts (
 state_hash TEXT PRIMARY KEY, browser_hash TEXT NOT NULL,
 verifier TEXT NOT NULL, nonce TEXT NOT NULL,
 purpose TEXT NOT NULL CHECK(purpose IN ('login','analytics')),
 session_hash TEXT, workspace_id TEXT REFERENCES workspaces(id) ON DELETE CASCADE,
 expires INTEGER NOT NULL
);
CREATE INDEX oauth_expiry ON oauth_attempts(expires);
CREATE TABLE analytics_connections (
 workspace_id TEXT PRIMARY KEY REFERENCES workspaces(id) ON DELETE CASCADE,
 property_id TEXT,
 refresh_cipher TEXT NOT NULL,
 google_email TEXT NOT NULL,
 status TEXT NOT NULL DEFAULT 'connected' CHECK(status IN ('connected','reauthorize')),
 updated_at INTEGER NOT NULL
);
CREATE TABLE audit_events (
 id TEXT PRIMARY KEY, actor_id TEXT NOT NULL REFERENCES users(id),
 workspace_id TEXT REFERENCES workspaces(id) ON DELETE CASCADE,
 action TEXT NOT NULL, created_at INTEGER NOT NULL
);
CREATE TABLE rate_limits (bucket TEXT PRIMARY KEY, count INTEGER NOT NULL, expires INTEGER NOT NULL);
