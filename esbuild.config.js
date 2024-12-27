require('esbuild').build({
    entryPoints: ['application.js'],
    bundle: true,
    outfile: 'app/assets/builds/application.js',
    watch: process.argv.includes('--watch'),
    plugins: [
        require('@vitejs/plugin-reacts')(),
    ],
}).catch(() => process.exit(1));
