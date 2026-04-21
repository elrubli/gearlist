import type { GearOptions } from "../types/gearOptions";

interface GearQuestions {
    label: string;
    choices: {
        gearOption: keyof GearOptions;
        label: string;
        value: string;
    }[]
}

const GEAR_QUESTIONS: GearQuestions[] = [
    {
        label: 'Where is the Air tank attached?',
        choices: [
            {
                label: 'Marker',
                gearOption: 'mountLocation',
                value: 'marker'
            },
            {
                label: 'Back / Belt',
                gearOption: 'mountLocation',
                value: 'back/belt'
            }
        ]
    },
    {
        label: 'What is the loadout type?',
        choices: [
            {
                label: 'Capacity',
                gearOption: 'loadoutType',
                value: 'capacity'
            },
            {
                label: 'Agility',
                gearOption: 'loadoutType',
                value: 'agility'
            }
        ]
    },
]

export default GEAR_QUESTIONS;
