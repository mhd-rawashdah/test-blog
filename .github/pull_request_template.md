# Feature/Fix
<Add a concise description of feature/fix/chore here>

# Design
<Add a link to design board (figma) fragment where relevent>

# Sanity Checklist

- [ ] Branch naming complies with `feat/<short-descrption>` or `fix/<short-descrption` or `chore/<short-descrption>`

- [ ] [Conventional Commits Standard](https://www.conventionalcommits.org/en/v1.0.0/) was followed. Tip: Install [commitzen](https://github.com/commitizen/cz-cli) to assit if neeed

- [ ] Testing sanity
   - UI component test: Functional aspects like click interaction on UI components
   - UI component test: Not to add several text assertions on default render instead relies on the jest snapshot
   - UI component test: Alternate states on interaction are covered where relevant

- [ ] E2E testing is covered for relevant interactions like for example where navigation or API calls are involved.

- [ ] Storybook file is available for every re-usable component

- [ ] My change set does not have un-related feature/fixes

- [ ] My change set does not havd un-related white space changes that makes the review harder


# Screenshot Feature/fix
<Attach a screenshot of feature/fix here. Must be from your local development build>

