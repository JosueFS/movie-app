import apollo, { onLogin, onLogout } from '@/plugins/apollo';

import SignupMutation from './../graphql/Signup.gql';
import UserQuery from './../graphql/User.gql';

const signup = async (email) => {
  const response = await apollo.mutate({
    mutation: SignupMutation,
    variables: {
      name: email,
    },
  });

  const { CreateUser } = response.data;

  await onLogin(apollo, CreateUser);

  return CreateUser;
};

const login = async (email) => {
  const response = await apollo.query({
    query: UserQuery,
    variables: {
      name: email,
    },
  });

  const [login] = response.data.User;

  await onLogin(apollo, login);

  return login;
};

const logout = async () => {
  await onLogout(apollo, {});
};

const getUser = async (email, options = {}) => {
  const response = await apollo.query({
    query: UserQuery,
    variables: {
      name: email,
    },
    ...options,
  });

  return response.data.User[0];
};

export default {
  login,
  logout,
  signup,
  getUser,
};
