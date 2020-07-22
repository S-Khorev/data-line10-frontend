export default {
  projections: {
    user_groupE: {
      user_id: {
        __caption__: 'User_id',
        login: {
          __caption__: 'Login'
        }
      },
      group_id: {
        __caption__: 'Group_id',
        name: {
          __caption__: 'Name'
        }
      }
    },
    user_groupL: {
      user_id: {
        __caption__: 'Login',
        login: {
          __caption__: 'Login'
        }
      },
      group_id: {
        __caption__: 'Name',
        name: {
          __caption__: 'Name'
        }
      }
    }
  },
  validations: {
    user_id: {
      __caption__: 'User_id'
    },
    group_id: {
      __caption__: 'Group_id'
    }
  }
};
