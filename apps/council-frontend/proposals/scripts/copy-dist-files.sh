# OG
# Copy the modules and types over to proposals/dist/
# cp compiled/src/index.js dist
# cp compiled/src/types.d.ts dist
# cp -R src/proposals/ dist


# Copy the modules and types over to proposals/dist/
cp proposals/compiled/proposals/src/index.js proposals/dist
cp proposals/compiled/proposals/src/types.d.ts proposals/dist
cp -R proposals/src/proposals/ proposals/dist

# Copy dist folder to React App's src/proposals/ProposalJson/ dir
cp -R proposals/dist/ src/proposals/ProposalJson
