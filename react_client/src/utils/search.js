export const isSearchKeyMatched = (app, searchKey) => {
  const upperSearchKey = searchKey.toUpperCase()
  if (app.name.toUpperCase().indexOf() > -1 ||
    app.category.toUpperCase().indexOf(upperSearchKey) > -1 ||
    app.summary.toUpperCase().indexOf(upperSearchKey) > -1 ||
    app.author.toUpperCase().indexOf(upperSearchKey) > -1
  ) {
    return true
  }
}
