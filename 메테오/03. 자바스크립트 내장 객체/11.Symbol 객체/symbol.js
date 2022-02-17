let person = {
  firstName: "Jeremy",
  lastName: "Go",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

for (const key in person) {
  console.log(key);
}
