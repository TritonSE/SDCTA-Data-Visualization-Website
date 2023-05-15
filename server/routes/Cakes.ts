/*
 * Emulate types in models with Cakes
 */

import { bake, number, boolean, string, any, array } from "caketype";

/* Tier */
const Level = number
const Name = string

const Tier = bake ({
    name: Name,
    tier: Level,
});

/* User */
const User = bake ({
    username: string,
    email: string,
    tier: Tier,
    phone: string, 
    address: string,
    city: string,
    state: string,
    zipCode: string,
    country: string,
});

/* Visualization */
const Visualization = bake ({
    title: string,
    analysis: string,
    link: string,
    hasCSV: boolean,
});

/* Category */
const Category = bake ({
    name: string,
    visualizations: array(Visualization),
});

// /* Files */
// const Files = bake ({
//     title: string,
//     csvFile: /* ?? */,
// });


