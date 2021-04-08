const LOCAL = 'http://localhost:8080';
const TEST_DOMAIN = 'https://d164tcwcvb5pog.cloudfront.net';

let environments = [
    // TEST
    {
      name: 'debug',
      domain: 'http://localhost:3000/#/',
      clientId: 'spaDebug',
      environmentId: 1,
      endpoints: {
        mailbox: `${LOCAL}`,
      },
    },
  // TEST
  {
    name: 'test',
    domain: 'https://talentrytest.tesselar.mx/#/',
    clientId: 'spaTest',
    environmentId: 1,
    config: {
      mode: 'test',
      analyticsTrackId: 'UA-81127481-1'
    },
    endpoints: {
      mailbox: `${TEST_DOMAIN}`,
    },
  },
  // ONSTAGE
  {
    name: 'onstage',
    domain: 'https://onstage.talentry.io/#/',
    clientId: 'spaOnstage',
    environmentId: 2,
    config: {
      mode: 'onstage',
      analyticsTrackId: 'UA-81127481-2'
    },
    endpoints: {
      mailbox: `${TEST_DOMAIN}`,
    },
  },
  // BETA
  {
    name: 'beta',
    domain: 'https://tesselar.talentry.io/#/',
    clientId: 'spaBeta',
    environmentId: 0,
    config: {
      mode: 'beta',
      analyticsTrackId: 'UA-81127481-3'
    },
    endpoints: {
      mailbox: `${TEST_DOMAIN}`,
    },
  },
  // PRODUCTION
  {
    name: 'production',
    domain: 'https://app.talentry.io/#/',
    clientId: 'spaProduction',
    environmentId: 3,
    config: {
      mode: 'production',
      analyticsTrackId: 'UA-81127481-4'
    },
    endpoints: {
      mailbox: `${TEST_DOMAIN}`,
    },
  }
];

let current = null;

/**
 * Configura el entorno actual
 */
const environmentConfig = () => {
  const URL = window.location.href;
  const subDomain = URL.split('//')[1];

  let environmentName = subDomain.indexOf('localhost') === 0 ? 'debug' : subDomain.split('.')[0];

  switch (environmentName) {
    case 'talentrytest':
      environmentName = 'test';
      break;
    case 'tesselar':
      environmentName = 'beta';
      break;
    case 'app':
      environmentName = 'production';
      break;
    default:
      break;
  }
  setCurrent(environmentName);
};

/**
 * Consulta el entorno actual
 * @return {any}
 */
const getCurrent = () => {
  return current;
};

/**
 * Actualiza el entorno actual según se pase el argumento si es correcto
 * @param {string} environmentName 'test', 'onstage', 'beta', 'production'
 */
const setCurrent = (environmentName) => {
  current = environments.filter((environment) => environment.name === environmentName)[0] || environments.filter((environment) => environment.name === 'debug')[0];
};

environmentConfig();

export const Environment = {
  environmentConfig,
  getCurrent,
  setCurrent
};