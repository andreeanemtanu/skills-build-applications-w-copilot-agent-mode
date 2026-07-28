const codespaceName = process.env.CODESPACE_NAME;

export function getApiBaseUrl() {
  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev`;
  }

  return 'http://localhost:8000';
}
