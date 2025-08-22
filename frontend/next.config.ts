/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

module.exports = import("next-pwa").then((nextPWA) => {
    const withPWA = nextPWA.default({
        dest: "public",
        disable: process.env.NODE_ENV === "development",
    });

    return withPWA(nextConfig);
});
