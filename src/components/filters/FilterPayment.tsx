import React, { FC } from "react"
import FilterChoose from "../FilterChoose"
import { useStore } from "../../store/StoreProvider"
import { payment } from "../../data/payment"

interface Props {
  showFilter(arg: string): void
}

const FilterPayment: FC<Props> = ({ showFilter }) => {
  const { filterShowPayment } = useStore()
  return (
    <FilterChoose
      showFilter={showFilter}
      show={filterShowPayment}
      list={payment}
      label={"Payment"}
    />
  )
}

export default FilterPayment
