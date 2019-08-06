const SAVE_CITIE = 'SAVE_CITIE'
const saveCitie = ( payload: Object ) => ({
    type: SAVE_CITIE,
    payload
})

export const ActionsType = {
    saveCitie : SAVE_CITIE
} 

export const Actions = {
    saveCitie
}