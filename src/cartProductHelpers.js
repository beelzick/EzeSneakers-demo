export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 200,
            width: 80,
        },
    },
};

export const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export class UpdateData {
    constructor(productId, sizesArray, sizeId) {
        this.sizesArray = sizesArray
        this.productId = productId
        this.sizeId = sizeId
        this.matchSize = size => size.id === this.sizeId
    }

    sizeChange(handledSize) {
        const sizeIndex = this.sizesArray.findIndex(this.matchSize)
        const modifiedArray = [...this.sizesArray]
        modifiedArray[sizeIndex] = { ...modifiedArray[sizeIndex], size: handledSize }

        const returnedData = {
            id: this.productId,
            changes: {
                selectedSizes: [
                    ...modifiedArray
                ]
            }
        }
        return returnedData
    }

    qtyChange(handledQty) {
        const sizeIndex = this.sizesArray.findIndex(this.matchSize)
        const modifiedArray = [...this.sizesArray]
        modifiedArray[sizeIndex] = { ...modifiedArray[sizeIndex], qty: handledQty }

        const returnedData = {
            id: this.productId,
            changes: {
                selectedSizes: [
                    ...modifiedArray
                ]
            }

        }

        return returnedData
    }

    itemRemove() {
        const modifiedArray = [...this.sizesArray]
        const newArray = modifiedArray.filter(item => item.id !== this.sizeId)

        const returnedData = {
            id: this.productId,
            changes: {
                selectedSizes: [
                    ...newArray
                ]
            }
        }

        return returnedData
    }
}