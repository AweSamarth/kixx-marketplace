const nextConfig = {
    reactStrictMode: true,
    webpack: config => {
      config.resolve.fallback = { fs: false, net: false, tls: false };
      config.externals.push('pino-pretty', 'lokijs', 'encoding');
      return config;
    },
    images:{domains:["w0.peakpx.com","static.nike.com"]}
  };
  
  module.exports = nextConfig;