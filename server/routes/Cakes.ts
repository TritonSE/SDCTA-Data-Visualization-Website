
import { bake, number, optional, string } from "caketype";

const Level = number
const Name = string

const Tier = bake ({
    name: Name,
    tier: Level,
});

