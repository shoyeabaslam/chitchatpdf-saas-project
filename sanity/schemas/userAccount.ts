const userAccount = {
  name: "usersAccount",
  title: "Users Account",
  type: "document",
  fields: [
    {
      name: "userName",
      type: "string",
      title: "User Name",
    },
    {
      name: "userEmail",
      type: "string",
      title: "Email",
      validation: (Rule: { unique: () => String; }) =>
      Rule.unique(),
    },
  ]
}

export default userAccount;