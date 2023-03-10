const findUniqueItem = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) == index);
};

const groupByRole = (arrayobj) => {
  const groupByRoles = {};
  arrayobj.forEach((item) => {
    !groupByRoles[item.roles]
      ? (groupByRoles[item.roles] = [item])
      : groupByRoles[item.roles].push(item);
  });
  return groupByRoles;
};

export { findUniqueItem, groupByRole };
