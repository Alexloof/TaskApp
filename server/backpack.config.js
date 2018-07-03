module.exports = {
  webpack: (config, options, webpack) => {
    // Perform customizations to config
    // Important: return the modified config

    config.entry.main = ['./index.js']

    return config
  }
}
