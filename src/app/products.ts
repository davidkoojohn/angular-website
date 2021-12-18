export interface IProduct {
  id: number
  name: string
  description?: string
  price?: number
}

export const Products: IProduct[] = [
  { id: 11, name: "篮球", description: "勒布朗的篮球", price: 340},
  { id: 12, name: "乒乓", description: "勒布朗的乒乓", price: 9.99},
  { id: 13, name: "内裤", description: "新垣结衣的内裤", price: 999},
  { id: 22, name: "大象", description: "勒布朗的大象", price: 3999.99},
]


