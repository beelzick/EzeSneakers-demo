import {
    setWomenCategoryClass,
    setMenCategoryClass,
    setSeasonCategoryClass,
    setNewCategoryClass
} from '../../../redux/slices/drawerCategoryClassSlice'
import {
    selectWomenClass,
    setWomenClass,
    selectMenClass,
    setMenClass,
    setNewClass,
    selectNewClass,
    setSeasonClass,
    selectSeasonClass
} from '../../../redux/slices/drawerClassSlice'
import Panel from './Panel'
import PanelMain from './PanelMain'

export default function AllPanels() {
    const categories = ['brand', 'collection', 'season', 'for']
    const newCategories = ['brand', 'season', 'gender']
    const seasonCategories = ['women', 'men']

    return <>
        <PanelMain />
        <Panel
            setPanelClass={setWomenClass}
            selectPanelClass={selectWomenClass}
            setPanelCategoryClass={setWomenCategoryClass}
            categories={categories}
            title='Women'
        />
        <Panel
            setPanelClass={setMenClass}
            selectPanelClass={selectMenClass}
            setPanelCategoryClass={setMenCategoryClass}
            categories={categories}
            title='Men'
        />
        <Panel
            setPanelClass={setNewClass}
            selectPanelClass={selectNewClass}
            setPanelCategoryClass={setNewCategoryClass}
            categories={newCategories}
            title='New'
        />
        <Panel
            setPanelClass={setSeasonClass}
            selectPanelClass={selectSeasonClass}
            setPanelCategoryClass={setSeasonCategoryClass}
            categories={seasonCategories}
            title='Season'
        />
    </>
}