/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                pathname: '/**',
            }
        ],
        basePath: '/cv',
    },
};

module.exports = nextConfig;
export default nextConfig;
