export const environment = {
  production: false,
  /**
   * Direct backend URL. This avoids 404 errors when the Angular proxy is not active.
   * Spring Boot must be running on http://localhost:8085.
   */
  apiBaseUrl: 'http://localhost:8085/api'
};
