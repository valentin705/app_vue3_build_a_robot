// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore } from 'vuex';

// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import robotsModule from './modules/robots';
import usersModule from './modules/users';

export default createStore({
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
});
