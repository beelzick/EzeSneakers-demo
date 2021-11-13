import ObjectID from 'bson-objectid'

export const sizeExists = (size, sizesArray) => {
    return sizesArray.some((el) => {
        return el.size === size
    })
}

export class UpdateData {
    constructor(id, sizesArray, selectedSize) {
        this.id = id
        this.sizesArray = sizesArray
        this.selectedSize = selectedSize
        this.returnedDataNewSize = {
            id,
            changes: {
                selectedSizes: [
                    ...this.sizesArray,
                    {
                        id: ObjectID().toHexString(),
                        size: this.selectedSize,
                        qty: 1
                    }
                ]
            }
        }
    }

    sizeExists() {
        const equalSizesArray = this.sizesArray.filter(size => size.size === this.selectedSize)
        for (let i = 0; i < equalSizesArray.length; i++) {
            if (i === (equalSizesArray.length - 1) && equalSizesArray[i].qty === 10) {

                return this.returnedDataNewSize

            } else {
                if (equalSizesArray[i].qty !== 10) {
                    const matchSize = element => element.id === equalSizesArray[i].id
                    const sizeIndex = this.sizesArray.findIndex(matchSize)
                    let modifiedArray = [...this.sizesArray]
                    modifiedArray[sizeIndex] = { ...modifiedArray[sizeIndex], qty: modifiedArray[sizeIndex].qty + 1 }


                    const returnedData = {
                        id: this.id,
                        changes: {
                            selectedSizes: [
                                ...modifiedArray
                            ]
                        }
                    }

                    return returnedData
                }
            }
        }
    }

    sizeNotExists() {
        return this.returnedDataNewSize
    }
}

