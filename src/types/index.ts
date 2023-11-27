export interface ITreeParent {
  id: number
  label: string
  checked: boolean
  children?: ITreeParent[]
}

export interface ITableHeaders {
  key: string
  text: string
}
