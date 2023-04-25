import { split, filter } from 'lodash'

const getTags = (tags: string) => {
  const tagsArr = filter(split(tags, ' '), (val) => val.startsWith('#'))
  return tagsArr
}

export default getTags
