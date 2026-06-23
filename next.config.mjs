/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: ['mongoose'],
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
            },
            {
                protocol: 'http',
                hostname: '*',
            }
        ]
    },
    webpack: (config, { isServer }) => {
        config.resolve.extensionAlias = {
            '.js': ['.ts', '.tsx', '.js', '.jsx'],
        };
        // Ignore README.md and .d.cts files from UploadThing
        config.module.rules.push({
            test: /node_modules\/@uploadthing.*\.md$/,
            use: 'ignore-loader',
        });
        return config;
    },
    turbopack: {
        resolveAlias: {
            '@': './src',
        },
    },
};

export default nextConfig;
