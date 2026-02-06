import type {ModdedSpeciesDataTable} from '../../../sim/dex-species';

export const Pokedex: ModdedSpeciesDataTable = {};

// const {Dex} = require('../../../sim/dex');

// for (const species of Dex.species.all()) {
//     const baseSpecies = Dex.species.get(species.baseSpecies);
//     const baseNum = baseSpecies.num;
    
//     const isGen1to5 = baseNum >= 1 && baseNum <= 649;
//     const isCAP = species.isNonstandard === 'CAP';
//     const isBannedForm = species.isMega || species.isPrimal || species.isGigantamax || species.forme === "Ultra";
    
//     if (isGen1to5 && !isCAP && !isBannedForm) {
//         Pokedex[species.id] = {
//             inherit: true,
//         };
//     }

// }