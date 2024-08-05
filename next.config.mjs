const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' apis.google.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' www.hotay.dev;
  media-src 'none';
  connect-src *;
  font-src 'self' data: use.typekit.net;
  frame-src avalia-hotay.firebaseapp.com;
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: "Referrer-Policy",
    value: "no-referrer",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload"
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: "Permissions-Policy",
    value: "camera=(self), microphone=(), geolocation=()",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
  {
    key: "Cache-Control",
    value: "public, max-age=31536000, immutable"
  },
]


/** @type {import("next").NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/index.html",
        permanent: true,
      },
      {
        source: "/docs/",
        destination: "/docs/index.html",
        permanent: true,
      },
    ]
  },
  headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  }
};

export default nextConfig;
