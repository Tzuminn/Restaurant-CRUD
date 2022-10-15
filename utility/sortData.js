function sortData(sort) {
  switch (sort) {
    case '0':
      return { _id: 'desc' }
    case '1':
      return { name: 'asc' }
    case '2':
      return { name: 'desc' }
    case '3':
      return { category: 'asc' }
    case '4':
      return { location: 'asc' }
  }
}

module.exports = sortData