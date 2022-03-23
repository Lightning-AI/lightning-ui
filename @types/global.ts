declare global {
    namespace Cypress {
      interface Chainable<Subject = any> {
        snapshot(): Chainable<Subject>;
      }
    }
  }
  export const about = "global type declaration";