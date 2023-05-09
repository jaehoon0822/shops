import { ChangeEvent, useState, useMemo, useRef } from 'react'
import { debounce } from 'lodash'
import UseFetchUseditems from '../query/UseFetchUseditems'

const UseBrandMainBody = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const [search, setSearch] = useState<string>('')
  const [perPage, setPerPage] = useState(1)
  const { data: useditemsData, fetchMore } = UseFetchUseditems(1, search)
  const debounceChange = useMemo(
    () =>
      debounce((value: string) => {
        setSearch(value)
        setPerPage(1)
      }, 500),
    [],
  )
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    debounceChange(e.target.value)
  }
  const onLoadMore = () => {
    if (!useditemsData) return
    void fetchMore({
      variables: {
        page: perPage + 1,
        search,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult || fetchMoreResult.fetchUseditems.length === 0)
          return prev
        const newQuestions = fetchMoreResult.fetchUseditems.filter(
          (useditem) =>
            !prev.fetchUseditems.some((q) => q._id === useditem._id),
        )
        setPerPage((prevPage) => prevPage + 1)
        return {
          fetchUseditems: [...prev.fetchUseditems, ...newQuestions],
        }
      },
    })
  }
  return {
    refContainer,
    useditemsData: useditemsData?.fetchUseditems,
    onChangeSearch,
    onLoadMore,
    search,
  }
}

export default UseBrandMainBody
