import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const AUTH_CREDENTIALS = '@MovueApp:Apollo_Credentials';

const resetApolloClient = async (apollo) => {
  try {
    await apollo.resetStore();
  } catch (error) {
    console.log('%cError on cache reset', 'color: orange;', error.message);
  }
};

const onLogin = async (apollo, user) => {
  if (typeof window.localStorage !== undefined && user.userId) {
    window.localStorage.setItem(AUTH_CREDENTIALS, JSON.stringify(user));
  }

  await resetApolloClient(apollo);
};

const link = new HttpLink({
  uri: 'https://trilha-de-aprendizado-gvand.herokuapp.com/graphql',
});

const apollo = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV !== 'production',
});

export default apollo;

export { AUTH_CREDENTIALS, onLogin };
