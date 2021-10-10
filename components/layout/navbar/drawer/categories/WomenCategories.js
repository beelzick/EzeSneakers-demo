import CategoryPanel from '../CategoryPanel'
import { useSelector } from 'react-redux'
import { selectWomenCategoryClass, setWomenCategoryClass } from '../../../../../redux/slices/drawerCategoryClassSlice'
import { setWomenClass } from '../../../../../redux/slices/drawerClassSlice'

export default function WomenCategories() {
    const womenCategoryClass = useSelector(selectWomenCategoryClass)

    const brandFilters = ['adidas', 'nike', 'reebok']
    const collectionFilters = ['featured', 'new', 'most-rated', 'women-love']
    const seasonFilters = ['spring', 'summer', 'autumn', 'winter']
    const forFilters = ['training', 'outdoor', 'street']
    
    return <>
        <CategoryPanel
            categoryClass={womenCategoryClass}
            backTo='Women'
            setCategoryClass={setWomenCategoryClass}
            categoryName='brand'
            setPanelClass={setWomenClass}
            linkFilters={brandFilters}
            linkGroup='women'
        />
        <CategoryPanel
            categoryClass={womenCategoryClass}
            backTo='Women'
            setCategoryClass={setWomenCategoryClass}
            categoryName='collection'
            setPanelClass={setWomenClass}
            linkFilters={collectionFilters}
            linkGroup='women'
        />
        <CategoryPanel
            categoryClass={womenCategoryClass}
            backTo='Season'
            setCategoryClass={setWomenCategoryClass}
            categoryName='season'
            setPanelClass={setWomenClass}
            linkFilters={seasonFilters}
            linkGroup='women'
        />
        <CategoryPanel
            categoryClass={womenCategoryClass}
            backTo='Women'
            setCategoryClass={setWomenCategoryClass}
            categoryName='for'
            setPanelClass={setWomenClass}
            linkFilters={forFilters}
            linkGroup='women'
        />
    </>
}