import { FlatList , Text} from 'react-native';
import {CATEGORIES} from '../Data/DataInput'
import CategoryGrid from '../Components/CategoryGrid';

function AllCategory({navigation})
{
    function CategoryRenderItem(itemData)
    {
        function onCategoryHandler()
        {
            navigation.navigate('MealsList',{categoryId: itemData.item.id,})
        }
        return <CategoryGrid title={itemData.item.title} color={itemData.item.color} onPress={onCategoryHandler}/>
    }
    return (
        <FlatList data={CATEGORIES} 
            keyExtractor={(items) => items.title}
            renderItem={CategoryRenderItem}
            numColumns={2}>
        </FlatList>
    )
}

export default AllCategory;