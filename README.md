
# Matoa UI

Koinworks Internal Design System


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Lifecycle
1. make sure your commit message following [Conventional Commits Specification](https://conventionalcommits.org/) guidance [determine the version bump](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-recommended-bump) and [generate CHANGELOG.md files](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)
2. merge feature to `staging` branch
3. before make PR to master, make sure to test it
4. after new feature successfully merged to `master` release a new fersion of the packages by `yarn release`
5. `yarn publish` to publish it to NPM
6. `yarn storybook:build` to build the storybook page
7. `yarn storybook:deploy` to deplot it into github page