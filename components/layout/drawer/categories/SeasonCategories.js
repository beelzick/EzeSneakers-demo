import CategoryPanel from './CategoryPanel'
import { selectSeasonCategoryClass, setSeasonCategoryClass } from '../../../../redux/slices/drawerCategoryClassSlice'
import { setSeasonClass } from '../../../../redux/slices/drawerClassSlice'

export default function SeasonCategories() {
    const filters = ['spring', 'summer', 'autumn', 'winter']

    return <>
        <CategoryPanel
            selectCategoryClass={selectSeasonCategoryClass}
            backTo='Season'
            setCategoryClass={setSeasonCategoryClass}
            categoryName='women'
            setPanelClass={setSeasonClass}
            linkFilters={filters}
            linkGroup='women'
        />
        <CategoryPanel
            selectCategoryClass={selectSeasonCategoryClass}
            backTo='Season'
            setCategoryClass={setSeasonCategoryClass}
            categoryName='men'
            setPanelClass={setSeasonClass}
            linkFilters={filters}
            linkGroup='men'
        />
    </>
}