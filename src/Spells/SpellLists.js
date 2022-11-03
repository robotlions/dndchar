
import { Bardlist } from "./SpellListBard";
import { PaladinList } from "./SpellListPaladin";
import {WizardSorcererList} from "./SpellListWizard";
import { ClericList } from "./SpellListCleric";


export const Fighter = {
    nospell:{
        spellName: "No spell",
        level: 0,
    }
}

export const Bard = Bardlist;
export const Paladin = PaladinList;
export const Wizard = WizardSorcererList;
export const Sorcerer = WizardSorcererList;
export const Cleric = ClericList;