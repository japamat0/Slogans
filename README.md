# Slogans

### Built using [React-Boilerplate](https://github.com/react-boilerplate/react-boilerplate)

A simple React app that allows users to browse through slogans, favorite the ones they like, and add their own custom slogans.

You can get started by forking the repo and running `npm install`.

#### Things I built I'd like to note:
- Paginator component:
  - Renders conditionally if device is mobile or desktop.
  - Handles bounds (disable `next` and `previous`)
  - Active page shown, page numbers adjust as one flips through slogan.

- Asynchronous indicators:
  - I used the `<LoadingIndicator/>` component as a fallback for a number of containers and components.
  - When adding a slogan to the backend, message appears while sending (use network throttling to see).
  - Success message on add slogan success.
  - error messages for slogan list and add slogan on failure.

- Favorite Icon renders conditionally whether slogan is favorited or not.
- Validation happens on the backend using [jsonschema](https://www.npmjs.com/package/jsonschema) to validate adding via form or API

<hr>

### TODO:
#### Things I'd like to add:
- Search functionality.
- Give users the ability to email their favorite slogans to themselves or a friend.
- "Favorite added" and "Favorite Removed" messages.
- Refactor backend call and store to store more slogans on client and send less requests to the backend.
- Mock api call for better test coverage in SlogansPage saga test