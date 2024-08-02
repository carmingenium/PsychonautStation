/obj/item/food/cig_kofte
    name = "Çiğ köfte"
    desc = "Bunun içinde gerçekten çiğ et mi var ?"
    icon = 'icons/obj/food/turkish.dmi'
    icon_state = "cig_kofte"
    food_reagents = list(
        /datum/reagent/consumable/nutriment = 2,
		/datum/reagent/consumable/nutriment/protein = 4,
		/datum/reagent/consumable/nutriment/vitamin = 5
    )
    tastes = list("tomato" = 1, "onion" = 1, "wheat" = 1, "pepper" = 1)
    foodtypes = VEGETABLES | GRAIN
    w_class = WEIGHT_CLASS_TINY
    crafting_complexity = FOOD_COMPLEXITY_2

/obj/item/food/cacik
    name = "Cacık"
    desc = "Mükemmel bir lezzet"
    icon = 'icons/obj/food/turkish.dmi'
    icon_state = "cacik"
    food_reagents = list(
        /datum/reagent/consumable/nutriment = 1,
		/datum/reagent/consumable/nutriment/vitamin = 2
    )
    tastes = list("yoghurt" = 2, "salt" = 1, "cucumber" = 1)
    foodtypes = VEGETABLES
    w_class = WEIGHT_CLASS_TINY
    crafting_complexity = FOOD_COMPLEXITY_1

/obj/item/food/lahmacun
    name = "Lahmacun"
    desc = "Biliyosun"
    icon = 'icons/obj/food/turkish.dmi'
    icon_state = "lahmacun"
    food_reagents = list(
        /datum/reagent/consumable/nutriment = 1,
		/datum/reagent/consumable/nutriment/protein = 2,
		/datum/reagent/consumable/nutriment/vitamin = 2
    )
    tastes = list("meat" = 1, "onion" = 1, "tomato" = 1)
    foodtypes = MEAT | VEGETABLES
    w_class = WEIGHT_CLASS_TINY
    crafting_complexity = FOOD_COMPLEXITY_2

/obj/item/food/beyti
    name = "Beyti"
    desc = "Beyti, kıyma veya kuzu etinden oluşan, bir Türk yemeğidir."
    icon = 'icons/obj/food/turkish.dmi'
    icon_state = "beyti"
    food_reagents = list(
        /datum/reagent/consumable/nutriment = 1,
		/datum/reagent/consumable/nutriment/protein = 4,
		/datum/reagent/consumable/nutriment/vitamin = 2
    )
    tastes = list("meat" = 1, "onion" = 1, "tomato" = 1)
    foodtypes = MEAT | VEGETABLES
    w_class = WEIGHT_CLASS_TINY
    crafting_complexity = FOOD_COMPLEXITY_2
