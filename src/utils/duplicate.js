export default (arr) => arr.reduce(function (res, current) {
  return res.concat([current, { ...current, slug: `${current.slug}-copy` }])
}, [])
