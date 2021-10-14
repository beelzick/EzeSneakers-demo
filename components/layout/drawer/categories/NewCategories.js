import CategoryPanel from './CategoryPanel'
import { selectNewCategoryClass, setNewCategoryClass } from '../../../../redux/slices/drawerCategoryClassSlice'
import { setNewClass } from '../../../../redux/slices/drawerClassSlice'
import GenderNewCategoryPanel from './GenderNewCategoryPanel'

export default function NewCategories() {
    const brandFilters = ['adidas', 'nike', 'puma']
    const seasonFilters = ['autumn', 'winter']

    return <>
        <CategoryPanel
            selectCategoryClass={selectNewCategoryClass}
            backTo='New'
            setCategoryClass={setNewCategoryClass}
            categoryName='brand'
            setPanelClass={setNewClass}
            linkFilters={brandFilters}
            linkGroup='new'
        />
        <CategoryPanel
            selectCategoryClass={selectNewCategoryClass}
            backTo='New'
            setCategoryClass={setNewCategoryClass}
            categoryName='season'
            setPanelClass={setNewClass}
            linkFilters={seasonFilters}
            linkGroup='new'
        />
        <GenderNewCategoryPanel />
    </>
}