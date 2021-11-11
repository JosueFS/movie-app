import apollo, { onLogin } from '@/plugins/apollo';

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

  console.log(CreateUser);

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

  console.log(login);

  await onLogin(apollo, login);

  return login;
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
  signup,
  getUser,
};
