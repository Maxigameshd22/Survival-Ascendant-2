ServerEvents.recipes(event => {
event.shaped(
    Item.of('kubejs:garnet_gross', 1),
    [
        'ABC',
        'DEF',
        'GGG'
    ],
    {
        A:'ars_nouveau:creative_spell_book',
        B:'ars_nouveau:creative_source_jar',
        C:'ironjetpacks:jetpack[ironjetpacks:jetpack_id="ironjetpacks:creative"]',
        D:'mysticalagradditions:creative_essence',
        E:'mekanism:creative_energy_cube',
        F:'ae2:creative_storage_cell',
        G:'quartz_block'
        
    }
)
event.shaped(
    Item.of('mysticalagradditions:creative_essence', 1),
    [
        'ABC',
        'DEF',
        'GHI'
    ],
    {
        A:'mysticalagriculture:awakened_supremium_block',
        B:'mysticalagradditions:insanium_block',
        C:'mysticalagriculture:supremium_block',
        D:'mysticalagriculture:tertium_block',
        E:'mysticalagriculture:prosperity_block',
        F:'mysticalagriculture:soulium_block',
        G:'mysticalagriculture:imperium_block',
        H:'mysticalagriculture:prudentium_block',
        I:'mysticalagriculture:inferium_block'
    }
)
}
)