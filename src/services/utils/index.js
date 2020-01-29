class Utils {
  static sort(data, by, type = 'asc') {
    return data.sort((a, b) => {
      if (type === 'asc') {
        return a[by] - b[by];
      } else {
        return b[by] - a[by];
      }
    })
  }

  static sample(data, n = 5) {
    return data.map(x => ({x, r: Math.random()})).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, n);
  }
}

export default Utils