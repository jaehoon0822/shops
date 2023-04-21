import { split, filter } from 'lodash'

const getTags = (tags: string) => {
  const tagsArr = filter(split(tags, ' #'), (val) => val !== ' ')
  return [tagsArr[0].slice(1), ...tagsArr.slice(1)]
}

export default getTags
