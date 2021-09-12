

export const sizeExists = (size, sizesArray) => {
    return sizesArray.some((el) => {
        return el.size === size
    })
}

export class UpdateData {
    constructor(id, sizesArray, selectedSize) {
        this.id = id
        this.array = sizesArray
        this.selectedSize = selectedSize
    }

    sizeExists() {
        const matchSize = element => element.size === this.selectedSize
        const sizeIndex = this.array.findIndex(matchSize)
        const id = this.id
        let modifiedArray = [...this.array]
        modifiedArray[sizeIndex] = { ...modifiedArray[sizeIndex], qty: modifiedArray[sizeIndex].qty + 1 }

        const returnedUpdateData = {
            id,
            changes: {
                selectedSizes: [
                    ...modifiedArray
                ]
            }
        }
        return returnedUpdateData
    }
    
    sizeNotExists() {
        const id = this.id
        return {
            id,
            changes: {
                selectedSizes: [
                    ...this.array,
                    {
                        size: this.selectedSize,
                        qty: 1
                    }
                ]
            }
        }
    }

}