export type TStringArray = Array<string>
export type TNumberArray = Array<number>
export type TObjectEntries = [string, TStringArray][]
export type TFilterObject = {
  label: string
  list: Array<string>
}
export type TFilterDataArray = Array<TFilterObject>
