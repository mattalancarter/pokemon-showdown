import type {ModdedSpeciesFormatsDataTable} from '../../../sim/dex-species';

export const FormatsData: ModdedSpeciesFormatsDataTable = {};

const {Dex} = require('../../../sim/dex');

for (const species of Dex.species.all()) {
    const baseSpecies = Dex.species.get(species.baseSpecies);
    const baseNum = baseSpecies.num;
    
    const isGen1to5 = baseNum >= 1 && baseNum <= 649;
    const isCAP = species.isNonstandard === 'CAP';
    const isBannedForm = species.isMega || species.isPrimal || species.isGigantamax || species.forme === "Ultra" || ['Galar', 'Hisui', 'Paldea', 'Alola'].some(region =>
  String(species.forme).includes(region)
);
    
    if (isGen1to5 && !isCAP && !isBannedForm) {
        FormatsData[species.id] = {
            natDexTier: "OU",
            tier:"OU",
            doublesTier: "DOU",
            isNonstandard:null,
        };
    } else {
        FormatsData[species.id] = {
            natDexTier:"Illegal",
            tier:"Illegal",
            doublesTier: "Illegal",
            isNonstandard: null,
        };
    }
}
