import UseFetchUseditemsOfTheBest from '../query/UseFetchUseditemsOfTheBest'

const UseBrandMainBest = () => {
  const { data: useditemsOfTheBestData } = UseFetchUseditemsOfTheBest()
  return {
    useditemsOfTheBestData: useditemsOfTheBestData?.fetchUseditemsOfTheBest,
  }
}

export default UseBrandMainBest
