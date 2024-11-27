#!/bin/bash

# Clean up
rm -rf build

# Optimize images
echo "Optimizing images..."
npx sharp-cli --input ./public/images --output ./public/images/optimized

# Run production build
echo "Building production bundle..."
GENERATE_SOURCEMAP=false npm run build

# Generate sitemap
echo "Generating sitemap..."
npm run generate-sitemap

# Compress files
echo "Compressing files..."
find build -type f -name "*.js" -exec gzip -9 {} \; -exec mv {}.gz {} \;
find build -type f -name "*.css" -exec gzip -9 {} \; -exec mv {}.gz {} \;
find build -type f -name "*.html" -exec gzip -9 {} \; -exec mv {}.gz {} \;

echo "Build complete!" 