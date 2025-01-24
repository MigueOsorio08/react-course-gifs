import { useState } from "react"
import { AddCategory, GifGrid } from '../src/components'

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch',])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
        // setCategories(cat => [...cat, newCategory])
    }

    return (
        <>
            <h1>Giftexpertapp</h1>

            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
            {
                categories.map((item) => (
                    <GifGrid key={item} category={item} />
                ))
            }
        </>
    )
}
