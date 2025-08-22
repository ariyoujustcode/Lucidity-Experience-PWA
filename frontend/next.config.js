const nextConfig = {
    reactStrictMode: true,
};

module.exports = async () => {
    const withPWA = (await import("next-pwa")).default({
        dest: "public",
        disable: process.env.NODE_ENV === "development",
        register: true,
        scope: "/",
    });

    return withPWA(nextConfig);
};
