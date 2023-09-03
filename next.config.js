/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/photos/*/**',
            }, {
                protocol: 'https',
                hostname: 'satljhmpvolluoiwdpij.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/*/**',
            }]
    }
}

module.exports = nextConfig
