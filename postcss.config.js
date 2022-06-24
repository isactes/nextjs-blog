module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
};

module.exports = {
    plugins:
    process.env.NODE_ENV === 'production'
    ?[
        'postcss-flexbugs-fixes',
        [
            'prostcss-preset-env',
            {
                autoprefixer: {
                    flexbox: 'no-2009',
                },
                stage: 3,
                features: {
                    'custom-properties': false,
                },
            },
        ],
    ]
 : [
    //no transformation in dev
 ],  
}

///postcss.config.js necesita admitir otras herramientas que no sean Next.js en el mismo proyecto, debe usar el formato interoperable basado en objetos en su lugar:
module.exports = {
    plugins: {
      'postcss-flexbugs-fixes': {},
      'postcss-preset-env': {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    },
  }