# Setup git user
git config user.name "R Action"
git config user.email "r@email.com"

# Remove our former release branch
git branch -D lastest-release 2>/dev/null
git push origin --delete lastest-release 2>/dev/null

# Create a new branch to run the build under
git checkout -b lastest-release

# Ensure we have the latest version of things
rm -rf node_modules # package-lock.json <-- may want to remove this file too if it suits your project.

pnpm install
pnpm install --save-dev @semantic-release/changelog @semantic-release/git

# Build
pnpm build

# Collect the version number
releaseVersion=`node -e "let package = require('./package.json'); console.log(package.version)"`

# Allow the `build` folder to be in the release
newIgnore=`sed -e 's#source##g' .gitignore`
echo "$newIgnore" > .gitignore # the redirect here is put into a spereate step to avoid a locking issue with git
git add -A && git commit -m "[BUILD] $releaseVersion"

# Make a new tag off of the latest build
git checkout custom-addons
git tag "$releaseVersion" lastest-release
git push origin "$releaseVersion"
git push origin lastest-release

# Make the release
gh release create $releaseVersion
