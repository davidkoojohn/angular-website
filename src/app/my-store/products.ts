export interface IProduct {
  name: string
  description?: string
  price?: number
}

export const Products: IProduct[] = [
  {name: "篮球", description: "勒布朗的篮球", price: 340},
  {name: "乒乓", price: 9.99},
  {name: "内裤", description: "新垣结衣的内裤", price: 999},
  {name: "大象", price: 3999.99},
]


