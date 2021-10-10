function showSalary(users, age) {
  const UsersUnderAge = [];
  for (const user of users) {
    if (user.age <= age) {
      UsersUnderAge.push(user.name , user.balance + "\n")
    }
  }
  return UsersUnderAge
}