module.exports = {
    apps: [
        {
            name: 'my-nuxtjs-app',
            exec_mode: 'cluster',
            // instances: 'max',
            instances: '4',
            cwd: '/my-project/',
            script: 'node_modules/next/dist/bin/next',
            args: "start",
            env: {
                NODE_ENV: "production",
                production: true }


        }
    ]
}